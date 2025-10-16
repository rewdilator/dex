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

// Function to fetch prices from CoinGecko for tokens in our list
const fetchCoinGeckoPrices = async () => {
  try {
    // Extract unique base currencies from tokens data
    const baseCurrencies = [...new Set(tokensData.map(token => 
      token.base_currency.toLowerCase()
    ))];
    
    const coinIds = baseCurrencies.map(currency => {
      const coinMap = {
        'bnb': 'binancecoin',
        'eth': 'ethereum',
        'btc': 'bitcoin',
        'sol': 'solana',
        'ada': 'cardano',
        'dot': 'polkadot',
        'link': 'chainlink',
        'matic': 'matic-network'
      };
      return coinMap[currency] || currency;
    }).join(',');

    const response = await fetchWithRetry(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd`
    );
    return response.data;
  } catch (error) {
    console.error("CoinGecko API Error:", error.message);
    return {};
  }
};

// Function to calculate new price based on positive/negative percentage
const calculateNewPrice = (realPrice, pricePositive, priceNegative) => {
  let newPrice = realPrice;
  
  if (pricePositive && parseFloat(pricePositive) > 0) {
    const positivePercent = parseFloat(pricePositive);
    newPrice = realPrice + (realPrice * positivePercent / 100);
  } else if (priceNegative && parseFloat(priceNegative) > 0) {
    const negativePercent = parseFloat(priceNegative);
    newPrice = realPrice - (realPrice * negativePercent / 100);
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
    
    // CoinGecko ID mapping
    const coinGeckoMap = {
      'bnb': 'binancecoin',
      'eth': 'ethereum',
      'btc': 'bitcoin',
      'sol': 'solana',
      'ada': 'cardano',
      'dot': 'polkadot',
      'link': 'chainlink',
      'matic': 'matic-network'
    };

    // ===== 2. Process each token from tokens.json =====
    const processedTickers = tokensData.map(token => {
      const baseCurrency = token.base_currency.toLowerCase();
      const coinGeckoId = coinGeckoMap[baseCurrency] || baseCurrency;
      
      // Get real price from CoinGecko or use fallback from token data
      const realPrice = prices[coinGeckoId]?.usd || parseFloat(token.last_price);
      
      // Calculate new price based on positive/negative percentage
      const newPrice = calculateNewPrice(
        realPrice, 
        token.price_positive, 
        token.price_negative
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
        "last_price": newPrice.toFixed(2),
        "base_volume": baseVolume.toFixed(2),
        "target_volume": newTargetVolume.toFixed(2),
        "liquidity_in_usd": token.liquidity_in_usd,
        "bid": bidPrice.toFixed(8),
        "ask": askPrice.toFixed(8),
        "high": highPrice.toFixed(2),
        "low": lowPrice.toFixed(2)
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
