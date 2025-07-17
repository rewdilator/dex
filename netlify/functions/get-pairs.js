const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Use Netlify's writable /tmp directory
const DATA_FILE = '/tmp/tickers_backup.json';

// Built-in fallback data in case API fails and no cache exists
const FALLBACK_DATA = {
  "data": [
    {
      "ticker_id": "EGLD_USDC",
      "base_currency": "EGLD",
      "target_currency": "USDC",
      "pool_id": "pool_egld_usdc",
      "last_price": "42.50",
      "base_volume": "1250.75",
      "target_volume": "53156.88",
      "liquidity_in_usd": "1250000.00",
      "bid": "42.45",
      "ask": "42.55",
      "high": "43.20",
      "low": "41.80"
    },
    {
      "ticker_id": "MEX_EGLD",
      "base_currency": "MEX",
      "target_currency": "EGLD",
      "pool_id": "pool_mex_egld",
      "last_price": "0.00025",
      "base_volume": "5000000.00",
      "target_volume": "1250.00",
      "liquidity_in_usd": "250000.00",
      "bid": "0.000245",
      "ask": "0.000255",
      "high": "0.00026",
      "low": "0.00024"
    }
  ],
  "timestamp": new Date().toISOString(),
  "source": "fallback"
};

exports.handler = async (event, context) => {
  try {
    // Try to fetch fresh data from API
    let freshData;
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/exchanges/xexchange/tickers', {
        timeout: 5000 // 5 second timeout
      });
      
      freshData = processTickers(response.data.tickers);
      
      // Save to tmp directory
      fs.writeFileSync(DATA_FILE, JSON.stringify({
        data: freshData,
        timestamp: new Date().toISOString(),
        source: 'api'
      }, null, 2));
      
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(freshData)
      };
    } catch (apiError) {
      console.warn('API request failed:', apiError.message);
      
      // Try to use cached data if available
      if (fs.existsSync(DATA_FILE)) {
        const cachedData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        console.log('Using cached data from:', cachedData.timestamp);
        
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...cachedData,
            cached: true,
            warning: `Using cached data (from ${cachedData.timestamp}) due to API error: ${apiError.message}`
          })
        };
      }
      
      // If no cache exists, use fallback data
      console.warn('No cached data available, using fallback data');
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...FALLBACK_DATA,
          warning: `Using fallback data due to API error: ${apiError.message}`,
          fallback: true
        })
      };
    }
  } catch (error) {
    console.error('Handler error:', error);
    // Even if everything fails, return the fallback data
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...FALLBACK_DATA,
        warning: `System error occurred: ${error.message}`,
        fallback: true,
        error: error.message
      })
    };
  }
};

function processTickers(tickers) {
  if (!tickers || !Array.isArray(tickers)) {
    console.warn('Invalid tickers data format, using fallback processing');
    return FALLBACK_DATA.data;
  }

  return tickers.map(ticker => {
    try {
      const pair = `${ticker.base}/${ticker.target}`;
      const baseVolume = ticker.volume || 0;
      const lastPrice = ticker.last || 0;
      const targetVolume = baseVolume * lastPrice;
      
      return {
        ticker_id: `${ticker.base}_${ticker.target}`,
        base_currency: ticker.base,
        target_currency: ticker.target,
        pool_id: generatePoolId(ticker.base, ticker.target),
        last_price: lastPrice.toString(),
        base_volume: baseVolume.toString(),
        target_volume: targetVolume.toString(),
        liquidity_in_usd: calculateLiquidityInUSD(ticker).toString(),
        bid: ticker.bid_ask_spread_percentage ? (lastPrice * (1 - ticker.bid_ask_spread_percentage/200)).toString() : "0",
        ask: ticker.bid_ask_spread_percentage ? (lastPrice * (1 + ticker.bid_ask_spread_percentage/200)).toString() : "0",
        high: ticker.high ? ticker.high.toString() : "0",
        low: ticker.low ? ticker.low.toString() : "0",
      };
    } catch (tickerError) {
      console.error('Error processing ticker:', tickerError);
      return null;
    }
  }).filter(ticker => ticker !== null);
}

function generatePoolId(baseCurrency, targetCurrency) {
  // Simple hash-based approach for demo purposes
  const str = `${baseCurrency}-${targetCurrency}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return `pool_${Math.abs(hash).toString(16).padStart(8, '0')}`;
}

function calculateLiquidityInUSD(ticker) {
  // More robust calculation with fallbacks
  const volume = ticker.volume || 0;
  const priceUSD = ticker.converted_last?.usd || 
                 ticker.converted_volume?.usd ? 
                 (ticker.converted_volume.usd / (ticker.volume || 1)) : 
                 1;
  return (volume * priceUSD).toFixed(2);
}
