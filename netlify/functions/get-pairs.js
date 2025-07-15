const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
    
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

    // Add hardcoded BOBER-9eb764/USDC-C76F1F pair
    const randomTargetVolume = (Math.random() * 2000 + 10000).toFixed(0); // Random between 10000 and 12000
    const boberUsdcPair = {
      "ticker_id": "BOBER-9eb764_USDC-C76F1F",
      "base_currency": "BOBER-9eb764",
      "target_currency": "USDC-C76F1F",
      "pool_id": generatePoolId("BOBER-9eb764", "USDC-C76F1F"),
      "last_price": "1.05", // Example price
      "base_volume": (parseInt(randomTargetVolume) / 1.05).toFixed(2).toString(),
      "target_volume": randomTargetVolume.toString(),
      "liquidity_in_usd": (parseInt(randomTargetVolume) * 2).toString(), // Example liquidity
      "bid": "1.04",
      "ask": "1.06",
      "high": "1.10",
      "low": "1.00"
    };

    // Add the hardcoded pair to the results
    tickers.push(boberUsdcPair);

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

// Helper function to generate a pool ID
function generatePoolId(baseCurrency, targetCurrency) {
  // This is a placeholder - implement your actual pool ID generation logic
  return "0x" + Math.random().toString(16).substr(2, 40);
}

// Helper function to calculate liquidity in USD
function calculateLiquidityInUSD(ticker) {
  // This is a placeholder - implement your actual liquidity calculation
  return ticker.volume * (ticker.converted_last?.usd || 1) * 10;
}
