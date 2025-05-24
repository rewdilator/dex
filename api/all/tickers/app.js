// netlify/functions/get-pairs.js
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    // Fetch all data in parallel
    const [bnbUsdt, oneDexPairs] = await Promise.all([
      getSerenityPair('BNB_USDT'),
      getOneDexPairs()
    ]);

    // Format response
    const response = {
      status: 'success',
      data: [bnbUsdt, ...oneDexPairs],
      lastUpdated: Date.now()
    };

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response, null, 2)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        status: 'error', 
        message: error.message 
      })
    };
  }
};

// Fetch BNB/USDT from Serenity
async function getSerenityPair(pairId) {
  const { data } = await axios.get('https://www.serenity.exchange/api/v2/trade/coingecko/tickers');
  const pair = data.find(p => p.ticker_id === pairId);
  
  return {
    pair: 'BNB/USDT', // Force format
    base: pair.base_currency,
    target: pair.target_currency,
    price: parseFloat(pair.last_price),
    volume: parseFloat(pair.base_volume),
    bid: parseFloat(pair.bid),
    ask: parseFloat(pair.ask),
    high: parseFloat(pair.high),
    low: parseFloat(pair.low)
  };
}

// Fetch OneDex pairs from CoinGecko
async function getOneDexPairs() {
  const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
  
  return data.tickers.map(ticker => ({
    pair: `${ticker.base}/${ticker.target}`,
    base: ticker.base,
    target: ticker.target,
    price: ticker.last,
    volume: ticker.volume,
    bid: ticker.bid_ask_spread_percentage 
      ? ticker.last * (1 - ticker.bid_ask_spread_percentage/200) 
      : null,
    ask: ticker.bid_ask_spread_percentage 
      ? ticker.last * (1 + ticker.bid_ask_spread_percentage/200) 
      : null,
    high: ticker.high || null,
    low: ticker.low || null
  }));
}
