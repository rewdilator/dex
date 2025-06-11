const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
    const oneDexPairs = oneDexResponse.data.tickers.map(ticker => ({
      pair: `${ticker.base}/${ticker.target}`,
      base: ticker.base,
      target: ticker.target,
      price: ticker.last,
      volume: ticker.volume,
      bid: ticker.bid_ask_spread_percentage ? ticker.last * (1 - ticker.bid_ask_spread_percentage/200) : null,
      ask: ticker.bid_ask_spread_percentage ? ticker.last * (1 + ticker.bid_ask_spread_percentage/200) : null,
      high: ticker.high || null,
      low: ticker.low || null
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        data: oneDexPairs,
        lastUpdated: Date.now()
      }, null, 2)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        message: error.message
      })
    };
  }
};
