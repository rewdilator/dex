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
    // ===== 1. Fetch XExchange Pairs =====
    const xexchangeResponse = await axios.get('https://api.multiversx.com/mex/pairs');
    // ===== 1. Get Prices (with cache) =====
    const shouldRefresh = Date.now() - priceCache.lastUpdated > priceCache.ttl;
    const prices = shouldRefresh ? await fetchPrices() : priceCache.data;
    
    const autoPriceUsd = prices.auto?.usd || 0;
    const ryujinPriceUsd = prices.ryujin?.usd || 0;

    // ===== 2. Fetch XExchange Pairs =====
    const xexchangeResponse = await fetchWithRetry('https://api.multiversx.com/mex/pairs');

    if (!xexchangeResponse.data || !Array.isArray(xexchangeResponse.data)) {
      throw new Error("Invalid MultiversX API response structure");
@@ -33,19 +88,19 @@ exports.handler = async (event) => {
        };
      });

    // ===== 2. Fetch AUTO and RYUJIN Prices from CoinGecko =====
    const coingeckoResponse = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=auto,ryujin&vs_currencies=usd"
    );
    const autoPriceUsd = coingeckoResponse.data.auto?.usd || 0;
    const ryujinPriceUsd = coingeckoResponse.data.ryujin?.usd || 0;

    // ===== 3. Fetch SushiSwap AUTO-USDC Pair Data =====
    const SUSHI_AUTO_USDC_PAIR = "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b";
    const sushiResponse = await axios.get(
      `https://api.dexscreener.com/latest/dex/pairs/ethereum/${SUSHI_AUTO_USDC_PAIR}`
    );
    const sushiPair = sushiResponse.data.pair;
    let sushiPair = {};
    
    try {
      const sushiResponse = await fetchWithRetry(
        `https://api.dexscreener.com/latest/dex/pairs/ethereum/${SUSHI_AUTO_USDC_PAIR}`
      );
      sushiPair = sushiResponse.data.pair || {};
    } catch (error) {
      console.error("DexScreener API Error:", error.message);
      // Continue with default values if API fails
    }

    // Calculate volumes correctly
    const baseVolume = parseFloat(sushiPair.volume?.h24 || 0);
@@ -128,16 +183,23 @@ exports.handler = async (event) => {

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 5 minutes cache
      },
      body: JSON.stringify(modifiedTickers, null, 2)
    };
  } catch (error) {
    console.error("API Error:", error.message);
    console.error("Handler Error:", error.message);
    return {
      statusCode: 500,
      statusCode: error.response?.status || 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "error": error.message,
        "status": "error",
        "details": process.env.NODE_ENV === 'development' ? error.stack : undefined
        error: error.message,
        status: "error",
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
