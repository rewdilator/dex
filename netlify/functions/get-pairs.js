const axios = require('axios');
const fs = require('fs');
const path = require('path');

// File path for storing the last successful response
const DATA_FILE = path.join(__dirname, 'tickers_backup.json');

exports.handler = async (event) => {
  try {
    // Try to fetch fresh data from the API
    let oneDexResponse;
    try {
      oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
      
      // Process and save the data if successful
      const tickers = processTickers(oneDexResponse.data.tickers);
      
      // Save to file for future fallback
      fs.writeFileSync(DATA_FILE, JSON.stringify({
        data: tickers,
        timestamp: new Date().toISOString()
      }));
      
      return {
        statusCode: 200,
        body: JSON.stringify(tickers, null, 2)
      };
    } catch (apiError) {
      // If API fails, try to use cached data
      console.warn('API request failed, attempting to use cached data:', apiError.message);
      
      if (fs.existsSync(DATA_FILE)) {
        const cachedData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        return {
          statusCode: 200,
          body: JSON.stringify({
            data: cachedData.data,
            cached: true,
            lastUpdated: cachedData.timestamp,
            message: 'Showing cached data due to API error'
          }, null, 2)
        };
      }
      
      // No cached data available
      throw apiError;
    }
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: error.message,
        status: "error",
        ...(error.response?.status === 404 && { 
          suggestion: "The API endpoint may have changed or the exchange data is not available" 
        })
      })
    };
  }
};

function processTickers(tickers) {
  return tickers.map(ticker => {
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
}

function generatePoolId(baseCurrency, targetCurrency) {
  // Implement your actual pool ID generation logic
  return "0x" + Math.random().toString(16).substr(2, 40);
}

function calculateLiquidityInUSD(ticker) {
  // Implement your actual liquidity calculation
  return ticker.volume * (ticker.converted_last?.usd || 1) * 10;
}
