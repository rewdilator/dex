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

    // ===== 3. Fetch SushiSwap AUTO-USDC Pair Data =====
    const SUSHI_AUTO_USDC_PAIR = "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b";
    let sushiAutoUsdcPair = {};
    
    try {
      const sushiResponse = await fetchWithRetry(
        `https://api.dexscreener.com/latest/dex/pairs/ethereum/${SUSHI_AUTO_USDC_PAIR}`
      );
      sushiAutoUsdcPair = sushiResponse.data.pair || {};
    } catch (error) {
      console.error("DexScreener API Error (AUTO-USDC):", error.message);
    }

    // Calculate volumes with 100x multiplier for AUTO-USDC
    const autoUsdcBaseVolume = parseFloat(sushiAutoUsdcPair.volume?.h24 || 0) * 100;
    const autoUsdcTargetVolume = autoUsdcBaseVolume * autoPriceUsd;

    const sushiAutoUsdcTicker = {
      "ticker_id": "AUTO_USDC",
      "base_currency": "AUTO",
      "target_currency": "USDC",
      "pool_id": SUSHI_AUTO_USDC_PAIR,
      "last_price": autoPriceUsd.toString(),
      "base_volume": autoUsdcBaseVolume.toString(),
      "target_volume": autoUsdcTargetVolume.toString(),
      "liquidity_in_usd": sushiAutoUsdcPair.liquidity?.usd?.toString() || "0",
      "bid": (autoPriceUsd * 0.995).toString(), // 0.5% lower
      "ask": (autoPriceUsd * 1.005).toString(), // 0.5% higher
      "high": autoPriceUsd.toString(),
      "low": autoPriceUsd.toString()
    };

    // ===== 4. Fetch PancakeSwap AUTO-BNB Pair Data =====
    const PANCAKE_AUTO_BNB_PAIR = "0x0d7a824e4d8e81c9a2a5f3d9a5f4a1e9e1a2b3c4"; // Replace with actual AUTO-BNB pair address
    let pancakeAutoBnbPair = {};
    
    try {
      const pancakeResponse = await fetchWithRetry(
        `https://api.dexscreener.com/latest/dex/pairs/bsc/${PANCAKE_AUTO_BNB_PAIR}`
      );
      pancakeAutoBnbPair = pancakeResponse.data.pair || {};
    } catch (error) {
      console.error("DexScreener API Error (AUTO-BNB):", error.message);
    }

    // Get BNB price (simplified - in production you'd fetch this from an API)
    const bnbPriceUsd = 350; // Example BNB price, should be fetched from API
    const autoBnbPrice = pancakeAutoBnbPair.priceUsd ? (pancakeAutoBnbPair.priceUsd / bnbPriceUsd) : (autoPriceUsd / bnbPriceUsd);

    // Calculate volumes with 100x multiplier for AUTO-BNB
    const autoBnbBaseVolume = parseFloat(pancakeAutoBnbPair.volume?.h24 || 0) * 100;
    const autoBnbTargetVolume = autoBnbBaseVolume * autoBnbPrice;

    const pancakeAutoBnbTicker = {
      "ticker_id": "AUTO_BNB",
      "base_currency": "AUTO",
      "target_currency": "BNB",
      "pool_id": PANCAKE_AUTO_BNB_PAIR,
      "last_price": autoBnbPrice.toString(),
      "base_volume": autoBnbBaseVolume.toString(),
      "target_volume": autoBnbTargetVolume.toString(),
      "liquidity_in_usd": pancakeAutoBnbPair.liquidity?.usd?.toString() || "0",
      "bid": (autoBnbPrice * 0.995).toString(), // 0.5% lower
      "ask": (autoBnbPrice * 1.005).toString(), // 0.5% higher
      "high": autoBnbPrice.toString(),
      "low": autoBnbPrice.toString()
    };

    // ===== 5. Create RYUJIN-USDC Ticker =====
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

    // ===== 6. Apply Modifications to XExchange Pairs =====
    const modifiedTickers = tickers.map(ticker => {
      // SUPER pair - multiply volumes by 50,000
      if (ticker.ticker_id === "SUPER-507aa6_WEGLD-bd4d79") {
        return {
          ...ticker,
          base_volume: (parseFloat(ticker.base_volume) * 50000).toString(),
          target_volume: (parseFloat(ticker.target_volume) * 50000).toString()
        };
      }
      
      // BHAT pair - multiply price by 100 and add 15,000 to volumes
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

    // ===== 7. Add All Additional Pairs =====
    modifiedTickers.push(
      {
        "ticker_id": "BOBER-9eb764_USDC-c76f1f",
        "base_currency": "BOBER-9eb764",
        "target_currency": "USDC-c76f1f",
        "pool_id": "erd1qqqqqqqqqqqqqpgqzjctu8xrgn8jmfp503tajjvzz2zq60v92jpsslkh5a",
        "last_price": "0.00019891577600299144",
        "base_volume": (136.81941497524983 * 1.5).toString(),
        "target_volume": (0.027215540102077128 * 1.5).toString(),
        "liquidity_in_usd": "1309.927927296884",
        "bid": "0.00019891577600299144",
        "ask": "16.486666813645517",
        "high": "0.0002650745796462067",
        "low": "16.256416618165755"
      },
      sushiAutoUsdcTicker,
      pancakeAutoBnbTicker,
      ryujinTicker
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 5 minutes cache
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
