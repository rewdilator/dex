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

// Function to format very small numbers without scientific notation
const formatSmallNumber = (num) => {
  if (num < 0.000001) {
    return num.toFixed(9);
  }
  return num.toString();
};

// Function to fetch prices from CoinGecko
const fetchCoinGeckoPrices = async () => {
  try {
    const response = await fetchWithRetry(
      "https://api.coingecko.com/api/v3/simple/price?ids=auto,tor&vs_currencies=usd"
    );
    return response.data;
  } catch (error) {
    console.error("CoinGecko API Error:", error.message);
    return {};
  }
};

// Function to ensure AUTO price stays within range
const getAutoPrice = (externalPrice) => {
  const minPrice = 12.20;
  const maxPrice = 12.25;
  
  if (externalPrice && externalPrice >= minPrice && externalPrice <= maxPrice) {
    return externalPrice;
  }
  return Math.random() * 0.15 + minPrice;
};

// Function to ensure TOR price stays within range
const getTorPrice = (externalPrice) => {
  const minPrice = 0.30;
  const maxPrice = 0.35;
  
  if (externalPrice && externalPrice >= minPrice && externalPrice <= maxPrice) {
    return externalPrice;
  }
  return Math.random() * 0.05 + minPrice;
};

exports.handler = async (event) => {
  try {
    // ===== 1. Fetch Prices =====
    const prices = await fetchCoinGeckoPrices();
    const autoPriceUsd = getAutoPrice(prices.auto?.usd);
    const torPriceUsd = getTorPrice(prices.tor?.usd);
    const ryujinPriceUsd = Math.random() * 0.000000005 + 0.00000006;

    // ===== 2. Fetch XExchange Pairs =====
    const xexchangeResponse = await fetchWithRetry('https://api.multiversx.com/mex/pairs');
    
    if (!xexchangeResponse.data || !Array.isArray(xexchangeResponse.data)) {
      throw new Error("Invalid MultiversX API response structure");
    }

    // ===== 3. Get AUTO Volume from API =====
    let autoBaseVolume = 0;
    let autoTargetVolume = 0;
    
    const autoPair = xexchangeResponse.data.find(pair => 
      pair.baseId === 'AUTO' || pair.baseSymbol === 'AUTO'
    );
    
    if (autoPair) {
      autoBaseVolume = (autoPair.volume24h || 0) * 10;
      autoTargetVolume = (autoPair.volume24h * autoPair.basePrice || 0) * 10;
    }

    // ===== 4. Create AUTO Pairs =====
    const liquidityInUsd = "8115.01";
    const bnbPriceUsd = 350;
    
    // Fallback volumes
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
      "bid": Math.max(4.20, autoPriceUsd * 0.995).toFixed(5),
      "ask": Math.min(4.35, autoPriceUsd * 1.005).toFixed(5),
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
      "bid": Math.max(4.20, autoPriceUsd * 0.995).toFixed(5),
      "ask": Math.min(4.35, autoPriceUsd * 1.005).toFixed(5),
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

    // ===== 5. Create RYUJIN-USDC Ticker =====
    const ryujinTargetVolume = (Math.random() * 5000 + 190000).toFixed(2);
    const ryujinBaseVolume = (ryujinTargetVolume / ryujinPriceUsd).toFixed(2);
    const ryujinBidPrice = (ryujinPriceUsd * 0.99).toFixed(9);
    const ryujinAskPrice = (ryujinPriceUsd * 1.01).toFixed(9);
    
    const ryujinTicker = {
      "ticker_id": "RYUJIN_USDC",
      "base_currency": "RYUJIN",
      "target_currency": "USDC",
      "pool_id": "0x0000000000000000000000000000000000000000",
      "last_price": formatSmallNumber(ryujinPriceUsd),
      "base_volume": ryujinBaseVolume,
      "target_volume": ryujinTargetVolume,
      "liquidity_in_usd": "50000",
      "bid": ryujinBidPrice,
      "ask": ryujinAskPrice,
      "high": formatSmallNumber(ryujinPriceUsd),
      "low": formatSmallNumber(ryujinPriceUsd)
    };

    // ===== 6. Create TOR-USDT Ticker =====
    const torBaseVolume = (Math.random() * 20000 + 100000).toFixed(2);
    const torTargetVolume = (torBaseVolume * torPriceUsd).toFixed(2);
    
    const torUsdtTicker = {
      "ticker_id": "TOR_USDT",
      "base_currency": "TOR",
      "target_currency": "USDT",
      "pool_id": "0x0000000000000000000000000000000000000000",
      "last_price": torPriceUsd.toFixed(2),
      "base_volume": torBaseVolume,
      "target_volume": torTargetVolume,
      "liquidity_in_usd": "25000",
      "bid": Math.max(0.30, torPriceUsd * 0.995).toFixed(5),
      "ask": Math.min(0.35, torPriceUsd * 1.005).toFixed(5),
      "high": torPriceUsd.toFixed(2),
      "low": torPriceUsd.toFixed(2)
    };

    // ===== 7. Process XExchange Pairs =====
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

    // ===== 8. Apply Modifications to XExchange Pairs =====
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

    // ===== 9. Add All Additional Pairs =====
    modifiedTickers.push(
      sushiAutoUsdcTicker,
      autoUsdtTicker,
      pancakeAutoBnbTicker,
      ryujinTicker,
      torUsdtTicker
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


