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

// Function to fetch RYUJIN price from CoinGecko
const fetchRyujinPrice = async () => {
  try {
    const response = await fetchWithRetry(
      "https://api.coingecko.com/api/v3/simple/price?ids=ryujin&vs_currencies=usd"
    );
    return response.data.ryujin?.usd || 0;
  } catch (error) {
    console.error("Failed to fetch RYUJIN price:", error.message);
    return 0;
  }
};

exports.handler = async (event) => {
  try {
    // ===== 1. Generate Random AUTO Price =====
    const autoPriceUsd = Math.random() * 0.3 + 9.21; // Always between 9.21 and 9.51
    const ryujinPriceUsd = await fetchRyujinPrice(); // Fetch RYUJIN price from CoinGecko

    // ===== 2. Fetch XExchange Pairs =====
    const xexchangeResponse = await fetchWithRetry('https://api.multiversx.com/mex/pairs');
    
    if (!xexchangeResponse.data || !Array.isArray(xexchangeResponse.data)) {
      throw new Error("Invalid MultiversX API response structure");
    }

    // ===== 3. Get AUTO Volume from API =====
    let autoBaseVolume = 0;
    let autoTargetVolume = 0;
    
    // Find AUTO pair in API response
    const autoPair = xexchangeResponse.data.find(pair => 
      pair.baseId === 'AUTO' || pair.baseSymbol === 'AUTO'
    );
    
    if (autoPair) {
      autoBaseVolume = (autoPair.volume24h || 0) * 10; // Multiply API volume by 10
      autoTargetVolume = (autoPair.volume24h * autoPair.basePrice || 0) * 10;
    }

    // ===== 4. Create AUTO Pairs with Custom Fallback Volumes =====
    const liquidityInUsd = "8115.01"; // Fixed liquidity value
    const bnbPriceUsd = 350; // Fixed BNB price
    
    // Generate random fallback volumes
    const autoUsdcBaseVolume = autoBaseVolume > 0 ? autoBaseVolume : Math.random() * 25000 + 200000;
    const autoUsdtBaseVolume = autoBaseVolume > 0 ? autoBaseVolume : Math.random() * 25000 + 150000;
    const autoBnbBaseVolume = autoBaseVolume > 0 ? autoBaseVolume : Math.random() * 12000 + 50000;

    // AUTO-USDC Pair
    const sushiAutoUsdcTicker = {
      "ticker_id": "AUTO_USDC",
      "base_currency": "AUTO",
      "target_currency": "USDC",
      "pool_id": "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b",
      "last_price": autoPriceUsd.toFixed(2),
      "base_volume": autoUsdcBaseVolume.toFixed(2),
      "target_volume": (autoUsdcBaseVolume * autoPriceUsd).toFixed(2),
      "liquidity_in_usd": liquidityInUsd,
      "bid": (autoPriceUsd * 0.995).toFixed(5),
      "ask": (autoPriceUsd * 1.005).toFixed(5),
      "high": autoPriceUsd.toFixed(2),
      "low": autoPriceUsd.toFixed(2)
    };

    // AUTO-USDT Pair
    const autoUsdtTicker = {
      "ticker_id": "AUTO_USDT",
      "base_currency": "AUTO",
      "target_currency": "USDT",
      "pool_id": "0x1234567890123456789012345678901234567890",
      "last_price": autoPriceUsd.toFixed(2),
      "base_volume": autoUsdtBaseVolume.toFixed(2),
      "target_volume": (autoUsdtBaseVolume * autoPriceUsd).toFixed(2),
      "liquidity_in_usd": liquidityInUsd,
      "bid": (autoPriceUsd * 0.995).toFixed(5),
      "ask": (autoPriceUsd * 1.005).toFixed(5),
      "high": autoPriceUsd.toFixed(2),
      "low": autoPriceUsd.toFixed(2)
    };

    // AUTO-BNB Pair
    const autoBnbPrice = (autoPriceUsd / bnbPriceUsd);
    const autoBnbTargetVolume = (autoBnbBaseVolume * autoBnbPrice).toFixed(8);
    
    const pancakeAutoBnbTicker = {
      "ticker_id": "AUTO_BNB",
      "base_currency": "AUTO",
      "target_currency": "BNB",
      "pool_id": "0x1234567890123456789012345678901234567890",
      "last_price": autoBnbPrice.toFixed(8),
      "base_volume": autoBnbBaseVolume.toFixed(2),
      "target_volume": autoBnbTargetVolume,
      "liquidity_in_usd": liquidityInUsd,
      "bid": (autoBnbPrice * 0.995).toFixed(8),
      "ask": (autoBnbPrice * 1.005).toFixed(8),
      "high": autoBnbPrice.toFixed(8),
      "low": autoBnbPrice.toFixed(8)
    };

    // ===== 5. Process XExchange Pairs =====
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

    // ===== 6. Apply Modifications to XExchange Pairs =====
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

    // ===== 7. Create RYUJIN-USDC Ticker =====
    const ryujinBaseVolume = Math.random() * 5000 + 50000; // $50k-$55k random volume
    const ryujinTargetVolume = (ryujinBaseVolume * ryujinPriceUsd).toFixed(2);
    
    const ryujinTicker = {
      "ticker_id": "RYUJIN_USDC",
      "base_currency": "RYUJIN",
      "target_currency": "USDC",
      "pool_id": "0x0000000000000000000000000000000000000000",
      "last_price": ryujinPriceUsd.toString(),
      "base_volume": ryujinBaseVolume.toFixed(2),
      "target_volume": ryujinTargetVolume,
      "liquidity_in_usd": "50000",
      "bid": (ryujinPriceUsd * 0.99).toFixed(5),
      "ask": (ryujinPriceUsd * 1.01).toFixed(5),
      "high": ryujinPriceUsd.toString(),
      "low": ryujinPriceUsd.toString()
    };

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
