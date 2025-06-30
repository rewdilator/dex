const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
    
    const tickers = oneDexResponse.data.tickers.map(ticker => {
      const pair = `${ticker.base}/${ticker.target}`;
      let baseVolume = ticker.volume;
      let targetVolume = ticker.volume * ticker.last;
      
      // Add 10000 to volume if the pair matches "USDC-C76F1F/WEGLD-BD4D79"
      if (pair === "USDC-C76F1F/WEGLD-BD4D79") {
        baseVolume += 10000;
        targetVolume += 10000 * ticker.last;
      }
      
      return {
        "ticker_id": `${ticker.base}_${ticker.target}`,
        "base_currency": ticker.base,
        "target_currency": ticker.target,
        "pool_id": generatePoolId(ticker.base, ticker.target), // You'll need to implement this
        "last_price": ticker.last.toString(),
        "base_volume": baseVolume.toString(),
        "target_volume": targetVolume.toString(),
        "liquidity_in_usd": calculateLiquidityInUSD(ticker).toString(), // You'll need to implement this
        "bid": ticker.bid_ask_spread_percentage ? (ticker.last * (1 - ticker.bid_ask_spread_percentage/200)).toString() : "0",
        "ask": ticker.bid_ask_spread_percentage ? (ticker.last * (1 + ticker.bid_ask_spread_percentage/200)).toString() : "0",
        "high": ticker.high ? ticker.high.toString() : "0",
        "low": ticker.low ? ticker.low.toString() : "0",
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        "error": error.message,
        "status": "error"
      })
    };
  }
};

// Helper function to generate a pool ID (you need to implement this based on your system)
function generatePoolId(baseCurrency, targetCurrency) {
  // This is a placeholder - implement your actual pool ID generation logic
  return "0x" + Math.random().toString(16).substr(2, 40);
}

// Helper function to calculate liquidity in USD (you need to implement this)
function calculateLiquidityInUSD(ticker) {
  // This is a placeholder - implement your actual liquidity calculation
  return ticker.volume * (ticker.converted_last?.usd || 1) * 10; // Example calculation
}
