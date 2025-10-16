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

// Function to fetch prices from CoinGecko for popular coins
const fetchCoinGeckoPrices = async () => {
  try {
    const coinIds = [
      // BNB Ecosystem
      'binancecoin', 'pancakeswap-token', 'bakerytoken', 'alpaca-finance', 'burger-city',
      // Ethereum Ecosystem
      'ethereum', 'uniswap', 'aave', 'chainlink', 'matic-network',
      // Base Ecosystem
      'dai', 'usd-coin', 'compound-governance-token',
      // Memecoins
      'dogecoin', 'shiba-inu', 'pepe', 'dogwifcoin', 'bonk', 'floki'
    ].join(',');

    const response = await fetchWithRetry(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd`
    );
    return response.data;
  } catch (error) {
    console.error("CoinGecko API Error:", error.message);
    return {};
  }
};

// Function to generate realistic trading pair data
const generateTradingPair = (baseCurrency, targetCurrency, price, volumeRange = [10000, 500000]) => {
  const baseVolume = Math.random() * (volumeRange[1] - volumeRange[0]) + volumeRange[0];
  const targetVolume = baseVolume * price;
  const liquidity = (targetVolume * 0.1).toFixed(2); // 10% of volume as liquidity
  
  return {
    "ticker_id": `${baseCurrency}_${targetCurrency}`,
    "base_currency": baseCurrency,
    "target_currency": targetCurrency,
    "pool_id": `0x${Math.random().toString(16).substr(2, 40)}`,
    "last_price": price.toString(),
    "base_volume": baseVolume.toFixed(2),
    "target_volume": targetVolume.toFixed(2),
    "liquidity_in_usd": liquidity,
    "bid": (price * 0.995).toString(),
    "ask": (price * 1.005).toString(),
    "high": (price * 1.02).toString(),
    "low": (price * 0.98).toString()
  };
};

exports.handler = async (event) => {
  try {
    // ===== 1. Fetch Real Prices from CoinGecko =====
    const prices = await fetchCoinGeckoPrices();
    
    // Fallback prices in case API fails
    const fallbackPrices = {
      // BNB Ecosystem
      'binancecoin': 600,
      'pancakeswap-token': 3.5,
      'bakerytoken': 0.4,
      'alpaca-finance': 0.2,
      'burger-city': 0.15,
      
      // Ethereum Ecosystem
      'ethereum': 3500,
      'uniswap': 12,
      'aave': 120,
      'chainlink': 18,
      'matic-network': 0.8,
      
      // Base Ecosystem
      'dai': 1,
      'usd-coin': 1,
      'compound-governance-token': 60,
      
      // Memecoins
      'dogecoin': 0.15,
      'shiba-inu': 0.000025,
      'pepe': 0.0000012,
      'dogwifcoin': 2.5,
      'bonk': 0.000025,
      'floki': 0.0003
    };

    // Get price with fallback
    const getPrice = (coinId) => {
      return prices[coinId]?.usd || fallbackPrices[coinId] || 1;
    };

    // ===== 2. Create Trading Pairs =====
    const tickers = [];

    // BNB Ecosystem Pairs
    tickers.push(generateTradingPair("BNB", "USDT", getPrice('binancecoin'), [500000, 2000000]));
    tickers.push(generateTradingPair("CAKE", "USDT", getPrice('pancakeswap-token'), [50000, 200000]));
    tickers.push(generateTradingPair("BAKE", "USDT", getPrice('bakerytoken'), [10000, 50000]));
    tickers.push(generateTradingPair("ALPACA", "USDT", getPrice('alpaca-finance'), [20000, 80000]));
    tickers.push(generateTradingPair("BURGER", "USDT", getPrice('burger-city'), [15000, 60000]));

    // Ethereum Ecosystem Pairs
    tickers.push(generateTradingPair("ETH", "USDT", getPrice('ethereum'), [1000000, 5000000]));
    tickers.push(generateTradingPair("UNI", "USDT", getPrice('uniswap'), [50000, 200000]));
    tickers.push(generateTradingPair("AAVE", "USDT", getPrice('aave'), [30000, 150000]));
    tickers.push(generateTradingPair("LINK", "USDT", getPrice('chainlink'), [40000, 180000]));
    tickers.push(generateTradingPair("MATIC", "USDT", getPrice('matic-network'), [60000, 250000]));

    // Base Ecosystem Pairs
    tickers.push(generateTradingPair("DAI", "USDT", getPrice('dai'), [200000, 800000]));
    tickers.push(generateTradingPair("USDC", "USDT", getPrice('usd-coin'), [1000000, 5000000]));
    tickers.push(generateTradingPair("COMP", "USDT", getPrice('compound-governance-token'), [20000, 80000]));

    // Memecoin Pairs (with smaller volumes)
    tickers.push(generateTradingPair("DOGE", "USDT", getPrice('dogecoin'), [80000, 300000]));
    tickers.push(generateTradingPair("SHIB", "USDT", getPrice('shiba-inu'), [50000, 200000]));
    tickers.push(generateTradingPair("PEPE", "USDT", getPrice('pepe'), [30000, 120000]));
    tickers.push(generateTradingPair("WIF", "USDT", getPrice('dogwifcoin'), [40000, 150000]));
    tickers.push(generateTradingPair("BONK", "USDT", getPrice('bonk'), [25000, 100000]));
    tickers.push(generateTradingPair("FLOKI", "USDT", getPrice('floki'), [35000, 140000]));

    // Cross-chain pairs
    tickers.push(generateTradingPair("BNB", "ETH", getPrice('binancecoin') / getPrice('ethereum'), [100000, 400000]));
    tickers.push(generateTradingPair("ETH", "BNB", getPrice('ethereum') / getPrice('binancecoin'), [100000, 400000]));

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify(tickers, null, 2)
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
