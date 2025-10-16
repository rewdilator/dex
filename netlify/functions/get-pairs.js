const axios = require('axios');

// Import tokens data
const tokensData = require('./tokens.json');

// Price cache configuration
const priceCache = {
  data: {},
  lastUpdated: 0,
  ttl: 300000 // 5 minutes cache
};

// Helper function to fetch prices with retry logic
const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'YourAppName/1.0',
        'Accept': 'application/json'
      },
      timeout: 5000
    });
    return response;
  } catch (error) {
    if (error.response?.status === 429 && retries > 0) {
      console.log(`Rate limited, retrying in ${delay}ms... (${retries} left)`);
      await new Promise(res => setTimeout(res, delay));
      return fetchWithRetry(url, retries - 1, delay * 2);
    }
    throw error;
  }
};

// Function to format price based on its value
const formatPrice = (price) => {
  if (price >= 1000) return price.toFixed(2);
  if (price >= 100) return price.toFixed(3);
  if (price >= 10) return price.toFixed(4);
  if (price >= 1) return price.toFixed(5);
  if (price >= 0.1) return price.toFixed(6);
  if (price >= 0.01) return price.toFixed(7);
  if (price >= 0.001) return price.toFixed(8);
  return price.toFixed(9);
};

// Function to fetch prices from CoinGecko for ALL tokens in our list
const fetchCoinGeckoPrices = async () => {
  try {
    // Extract unique API IDs from tokens data
    const apiIds = [...new Set(tokensData
      .filter(token => token.api_id) // Only tokens with API ID
      .map(token => token.api_id)
    )];

    console.log('Fetching prices for API IDs:', apiIds);

    if (apiIds.length === 0) {
      console.log('No API IDs found in tokens data');
      return {};
    }

    const response = await fetchWithRetry(
      `https://api.coingecko.com/api/v3/simple/price?ids=${apiIds.join(',')}&vs_currencies=usd`
    );
    return response.data;
  } catch (error) {
    console.error("CoinGecko API Error:", error.message);
    return {};
  }
};

// Function to get price for a specific token using API ID
const getTokenPrice = (token, prices) => {
  // Use API ID if provided, otherwise try base currency name
  const coinId = token.api_id || token.base_currency.toLowerCase();
  
  if (prices[coinId]?.usd !== undefined) {
    console.log(`Found price for ${token.base_currency} using ${coinId}: $${prices[coinId].usd}`);
    return prices[coinId].usd;
  }

  // If API ID didn't work, try some common variations
  const possibleIds = [
    coinId,
    token.base_currency.toLowerCase() + '-token',
    token.base_currency.toLowerCase() + '-protocol',
    token.base_currency.toLowerCase()
  ];

  for (const id of possibleIds) {
    if (prices[id]?.usd !== undefined) {
      console.log(`Found price for ${token.base_currency} using ${id}: $${prices[id].usd}`);
      return prices[id].usd;
    }
  }

  console.log(`No price found for ${token.base_currency}, tried: ${possibleIds.join(', ')}`);
  return null;
};

// Function to calculate new price based on positive/negative percentage
const calculateNewPrice = (realPrice, pricePositive, priceNegative, fallbackPrice) => {
  let newPrice = realPrice !== null ? realPrice : fallbackPrice;
  
  if (pricePositive && parseFloat(pricePositive) > 0) {
    const positivePercent = parseFloat(pricePositive);
    newPrice = newPrice + (newPrice * positivePercent / 100);
  } else if (priceNegative && parseFloat(priceNegative) > 0) {
    const negativePercent = parseFloat(priceNegative);
    newPrice = newPrice - (newPrice * negativePercent / 100);
  }
  
  return newPrice;
};

// Function to calculate volume with random increase
const calculateVolume = (targetVolume) => {
  const baseVolume = parseFloat(targetVolume);
  const randomIncrease = Math.random() * 0.05 + 0.05; // 5% to 10% increase
  return baseVolume * (1 + randomIncrease);
};

exports.handler = async (event) => {
  try {
    // ===== 1. Fetch Real Prices from CoinGecko =====
    const prices = await fetchCoinGeckoPrices();
    console.log('Fetched prices for:', Object.keys(prices));

    // ===== 2. Process each token from tokens.json =====
    const processedTickers = tokensData.map(token => {
      // Get real price from CoinGecko using API ID
      const coinGeckoPrice = getTokenPrice(token, prices);
      const jsonPrice = parseFloat(token.last_price);
      
      // Use CoinGecko price if available, otherwise fallback to JSON price
      const realPrice = coinGeckoPrice !== null ? coinGeckoPrice : jsonPrice;
      
      console.log(`Processing ${token.base_currency}: CoinGecko=${coinGeckoPrice}, JSON=${jsonPrice}, Using=${realPrice}`);
      
      // Calculate new price based on positive/negative percentage
      const newPrice = calculateNewPrice(
        coinGeckoPrice, 
        token.price_positive, 
        token.price_negative,
        jsonPrice
      );
      
      // Calculate volumes with random increase
      const newTargetVolume = calculateVolume(token.target_volume);
      const baseVolume = newTargetVolume / newPrice;
      
      // Calculate bid/ask spread (0.5% each way)
      const bidPrice = newPrice * 0.995;
      const askPrice = newPrice * 1.005;
      
      // Calculate high/low (2% range from new price)
      const highPrice = newPrice * 1.02;
      const lowPrice = newPrice * 0.98;

      return {
        "ticker_id": token.ticker_id,
        "base_currency": token.base_currency,
        "target_currency": token.target_currency,
        "pool_id": token.pool_id,
        "last_price": formatPrice(newPrice),
        "base_volume": baseVolume.toFixed(2),
        "target_volume": newTargetVolume.toFixed(2),
        "liquidity_in_usd": token.liquidity_in_usd,
        "bid": formatPrice(bidPrice),
        "ask": formatPrice(askPrice),
        "high": formatPrice(highPrice),
        "low": formatPrice(lowPrice)
      };
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify(processedTickers, null, 2)
    };
  } catch (error) {
    console.error("Handler Error:", error.message);
    return {
      statusCode: error.response?.status || 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: error.message,
        status: "error",
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
