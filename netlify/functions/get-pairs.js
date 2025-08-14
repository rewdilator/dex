const axios = require('axios');

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

// Main function to fetch prices from CoinGecko
const fetchPrices = async () => {
  try {
    const response = await fetchWithRetry(
      "https://api.coingecko.com/api/v3/simple/price?ids=auto,ryujin&vs_currencies=usd"
    );
    priceCache.data = response.data;
    priceCache.lastUpdated = Date.now();
    return response.data;
  } catch (error) {
    console.error("CoinGecko API Error:", error.message);
    // Fallback to cache if available
    if (priceCache.lastUpdated > 0) {
      console.log("Using cached prices due to API error");
      return priceCache.data;
    }
    throw error;
  }
};

exports.handler = async (event) => {
  try {
    // ===== 1. Get Prices (with cache) =====
    const shouldRefresh = Date.now() - priceCache.lastUpdated > priceCache.ttl;
    const prices = shouldRefresh ? await fetchPrices() : priceCache.data;
    
    // Generate random AUTO price between $9.21 and $9.51
    const autoPriceUsd = prices.auto?.usd || (Math.random() * 0.3 + 9.21);
    const ryujinPriceUsd = prices.ryujin?.usd || 0;

    // ===== 2. Fetch XExchange Pairs =====
    const xexchangeResponse = await fetchWithRetry('https://api.multiversx.com/mex/pairs');
    
    if (!xexchangeResponse.data || !Array.isArray(xexchangeResponse.data)) {
      throw new Error("Invalid MultiversX API response structure");
    }

    const tickers = xexchangeResponse.data
      .filter(pair => pair.exchange === "xexchange")
      .map(pair => {
        const lastPrice = pair.basePrice || 0;
        const volume24h = pair.volume24h || 0;
        const baseId = pair.baseId || 'UNKNOWN';
        const quoteId = pair.quoteId || 'UNKNOWN';
        
        return {
          "ticker_id": `${baseId}_${quoteId}`,
          "base_currency": baseId,
          "target_currency": quoteId,
          "pool_id": pair.address || '0x0000000000000000000000000000000000000000',
          "last_price": lastPrice.toString(),
          "base_volume": volume24h.toString(),
          "target_volume": (volume24h * lastPrice).toString(),
          "liquidity_in_usd": pair.totalValue?.toString() || "0",
          "bid": pair.basePrice?.toString() || lastPrice.toString(),
          "ask": pair.quotePrice?.toString() || lastPrice.toString(),
          "high": pair.basePrevious24hPrice?.toString() || "0",
          "low": pair.quotePrevious24hPrice?.toString() || "0",
        };
      });

    // ===== 3. Create AUTO-USDC Pair with Random Price =====
    const originalPrice = 3.47;
    const originalVolume = 68539;
    const volumeMultiplier = 10; // 10x volume
    
    const autoUsdcBaseVolume = (originalVolume * volumeMultiplier).toFixed(2);
    const autoUsdcTargetVolume = (autoUsdcBaseVolume * autoPriceUsd).toFixed(2);
    
    const sushiAutoUsdcTicker = {
      "ticker_id": "AUTO_USDC",
      "base_currency": "AUTO",
      "target_currency": "USDC",
      "pool_id": "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b",
      "last_price": autoPriceUsd.toFixed(2),
      "base_volume": autoUsdcBaseVolume,
      "target_volume": autoUsdcTargetVolume,
      "liquidity_in_usd": (21538.68 * (autoPriceUsd / originalPrice)).toFixed(2),
      "bid": (autoPriceUsd * 0.995).toFixed(5),
      "ask": (autoPriceUsd * 1.005).toFixed(5),
      "high": autoPriceUsd.toFixed(2),
      "low": autoPriceUsd.toFixed(2)
    };

    // ===== 4. Create AUTO-USDT Pair =====
    const autoUsdtBaseVolume = (originalVolume * volumeMultiplier).toFixed(2);
    const autoUsdtTargetVolume = (autoUsdtBaseVolume * autoPriceUsd).toFixed(2);
    
    const autoUsdtTicker = {
      "ticker_id": "AUTO_USDT",
      "base_currency": "AUTO",
      "target_currency": "USDT",
      "pool_id": "0x1234567890123456789012345678901234567890", // Replace with actual USDT pool address
      "last_price": autoPriceUsd.toFixed(2),
      "base_volume": autoUsdtBaseVolume,
      "target_volume": autoUsdtTargetVolume,
      "liquidity_in_usd": (21538.68 * (autoPriceUsd / originalPrice)).toFixed(2),
      "bid": (autoPriceUsd * 0.995).toFixed(5),
      "ask": (autoPriceUsd * 1.005).toFixed(5),
      "high": autoPriceUsd.toFixed(2),
      "low": autoPriceUsd.toFixed(2)
    };

    // ===== 5. Create AUTO-BNB Pair =====
    const bnbPriceUsd = 350; // Example BNB price
    const autoBnbPrice = (autoPriceUsd / bnbPriceUsd).toFixed(8);
    const autoBnbBaseVolume = (originalVolume * volumeMultiplier).toFixed(2);
    const autoBnbTargetVolume = (autoBnbBaseVolume * autoBnbPrice).toFixed(8);
    
    const pancakeAutoBnbTicker = {
      "ticker_id": "AUTO_BNB",
      "base_currency": "AUTO",
      "target_currency": "BNB",
      "pool_id": "0x1234567890123456789012345678901234567890", // Replace with actual pool ID
      "last_price": autoBnbPrice,
      "base_volume": autoBnbBaseVolume,
      "target_volume": autoBnbTargetVolume,
      "liquidity_in_usd": (21538.68 * (autoPriceUsd / originalPrice)).toFixed(2),
      "bid": (autoBnbPrice * 0.995).toFixed(8),
      "ask": (autoBnbPrice * 1.005).toFixed(8),
      "high": autoBnbPrice,
      "low": autoBnbPrice
    };

    // ===== 6. Create RYUJIN-USDC Ticker =====
    const ryujinTicker = {
      "ticker_id": "RYUJIN_USDC",
      "base_currency": "RYUJIN",
      "target_currency": "USDC",
      "pool_id": "0x0000000000000000000000000000000000000000",
      "last_price": ryujinPriceUsd.toString(),
      "base_volume": "1000",
      "target_volume": (1000 * ryujinPriceUsd).toString(),
      "liquidity_in_usd": "50000",
      "bid": (ryujinPriceUsd * 0.99).toString(),
      "ask": (ryujinPriceUsd * 1.01).toString(),
      "high": ryujinPriceUsd.toString(),
      "low": ryujinPriceUsd.toString()
    };

    // ===== 7. Apply Modifications to XExchange Pairs =====
    const modifiedTickers = tickers.map(ticker => {
      if (ticker.ticker_id === "SUPER-507aa6_WEGLD-bd4d79") {
        return {
          ...ticker,
          base_volume: (parseFloat(ticker.base_volume) * 50000).toString(),
          target_volume: (parseFloat(ticker.target_volume) * 50000).toString()
        };
      }
      
      if (ticker.ticker_id === "BHAT-c1fde3_WEGLD-bd4d79") {
        return {
          ...ticker,
          last_price: (parseFloat(ticker.last_price) * 100).toString(),
          base_volume: (parseFloat(ticker.base_volume) + 15000).toString(),
          target_volume: (parseFloat(ticker.target_volume) + 15000).toString()
        };
      }
      
      return ticker;
    });

    // ===== 8. Add All Additional Pairs =====
    modifiedTickers.push(
      sushiAutoUsdcTicker,
      autoUsdtTicker,
      pancakeAutoBnbTicker,
      ryujinTicker
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify(modifiedTickers, null, 2)
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
