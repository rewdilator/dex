const axios = require('axios');
const NodeCache = require('node-cache');

// Initialize cache with 60 second TTL (1 minute)
const myCache = new NodeCache({ stdTTL: 60 });

// Configure axios instance for CoinGecko API
const coinGeckoAPI = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip'
  }
});

// Rate limiting variables
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1200; // 1.2 seconds between requests (50 requests/minute)

async function safeCoinGeckoRequest(url) {
  try {
    // Check cache first
    const cached = myCache.get(url);
    if (cached) {
      console.log(`Cache hit for ${url}`);
      return cached;
    }

    // Rate limiting
    const now = Date.now();
    const timeSinceLast = now - lastRequestTime;
    if (timeSinceLast < MIN_REQUEST_INTERVAL) {
      const delay = MIN_REQUEST_INTERVAL - timeSinceLast;
      console.log(`Rate limiting - delaying request by ${delay}ms`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    console.log(`Making request to ${url}`);
    const response = await coinGeckoAPI.get(url);
    lastRequestTime = Date.now();
    
    // Cache the successful response
    myCache.set(url, response.data);
    return response.data;
  } catch (error) {
    console.error(`CoinGecko API error for ${url}:`, error.message);
    
    // Return cached data if available (even if stale)
    const cached = myCache.get(url);
    if (cached) {
      console.log('Returning stale cached data');
      return cached;
    }
    
    return null;
  }
}

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers', {
      timeout: 3000
    }).catch(() => ({ data: { tickers: [] } })); // Fallback if OneDex API fails
    
    // Fetch token prices with proper error handling
    const [boberData, padawanData] = await Promise.all([
      safeCoinGeckoRequest('/simple/price?ids=bober&vs_currencies=usd'),
      safeCoinGeckoRequest('/simple/price?ids=padawan&vs_currencies=usd')
    ]);

    // Set fallback prices if API fails
    const boberPrice = boberData?.bober?.usd || 1.05;
    const padawanPrice = padawanData?.padawan?.usd || 0.50;
    const boberPadawanPrice = padawanPrice > 0 ? boberPrice / padawanPrice : 2.1;

    // Process original tickers
    let tickers = oneDexResponse.data.tickers.map(ticker => {
      const pair = `${ticker.base}/${ticker.target}`;
      let baseVolume = ticker.volume;
      let targetVolume = ticker.volume * ticker.last;
      
      return {
        "ticker_id": `${ticker.base}_${ticker.target}`,
        "base_currency": ticker.base,
        "target_currency": ticker.target,
        "pool_id": generatePoolId(ticker.base, ticker.target),
        "last_price": ticker.last.toString(),
        "base_volume": baseVolume.toString(),
        "target_volume": targetVolume.toString(),
        "liquidity_in_usd": calculateLiquidityInUSD(ticker).toString(),
        "bid": ticker.bid_ask_spread_percentage ? (ticker.last * (1 - ticker.bid_ask_spread_percentage/200)).toString() : "0",
        "ask": ticker.bid_ask_spread_percentage ? (ticker.last * (1 + ticker.bid_ask_spread_percentage/200)).toString() : "0",
        "high": ticker.high ? ticker.high.toString() : "0",
        "low": ticker.low ? ticker.low.toString() : "0",
      };
    });

    // Generate random volumes
    const randomUsdcVolume = (Math.random() * 2000 + 10000).toFixed(0); // $10k-$12k
    const randomPadawanVolume = (Math.random() * 1000 + 5000).toFixed(0); // $5k-$6k

    // Add our custom pairs
    tickers.push(
      createCustomPair(
        "BOBER-9eb764",
        "USDC-C76F1F",
        boberPrice,
        randomUsdcVolume
      ),
      createCustomPair(
        "BOBER-9eb764",
        "PADAWAN-a17f58",
        boberPadawanPrice,
        randomPadawanVolume
      )
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60'
      },
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        status: "error",
        message: "Internal server error"
      })
    };
  }
};

function createCustomPair(base, target, price, targetVolume) {
  return {
    "ticker_id": `${base}_${target}`,
    "base_currency": base,
    "target_currency": target,
    "pool_id": generatePoolId(base, target),
    "last_price": price.toFixed(6).toString(),
    "base_volume": (targetVolume / price).toFixed(2).toString(),
    "target_volume": targetVolume.toString(),
    "liquidity_in_usd": (targetVolume * 2).toString(),
    "bid": (price * 0.99).toFixed(6).toString(),
    "ask": (price * 1.01).toFixed(6).toString(),
    "high": (price * 1.05).toFixed(6).toString(),
    "low": (price * 0.95).toFixed(6).toString()
  };
}

function generatePoolId(baseCurrency, targetCurrency) {
  // In production, replace with your actual pool ID generation logic
  const hash = require('crypto')
    .createHash('sha256')
    .update(`${baseCurrency}-${targetCurrency}`)
    .digest('hex');
  return `0x${hash.substring(0, 40)}`;
}

function calculateLiquidityInUSD(ticker) {
  // Improved calculation with fallbacks
  const usdValue = ticker.converted_last?.usd || 
                  ticker.converted_volume?.usd || 
                  1;
  return (ticker.volume * usdValue).toFixed(2);
}
