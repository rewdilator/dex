const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch BNB/USDT from Serenity
    const bnbResponse = await axios.get('https://www.serenity.exchange/api/v2/trade/coingecko/tickers');
    const bnbPair = bnbResponse.data.find(p => p.ticker_id === 'BNB_USDT');
    
    const bnbData = {
      pair: "BNB/USDT",
      base: bnbPair.base_currency,
      target: bnbPair.target_currency,
      price: parseFloat(bnbPair.last_price),
      volume: parseFloat(bnbPair.base_volume),
      bid: parseFloat(bnbPair.bid),
      ask: parseFloat(bnbPair.ask),
      high: parseFloat(bnbPair.high),
      low: parseFloat(bnbPair.low)
    };

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
        data: [bnbData, ...oneDexPairs],
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
