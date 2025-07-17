const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch all liquidity pools from MultiversX API
    const response = await axios.get('https://api.multiversx.com/mex/pairs');
    
    const tickers = response.data.map(pair => {
      return {
        "ticker_id": `${pair.baseId}_${pair.quoteId}`,
        "base_currency": pair.baseSymbol,
        "target_currency": pair.quoteSymbol,
        "pool_id": pair.address,
        "last_price": pair.price.toString(),
        "base_volume": pair.volume24h.toString(),
        "target_volume": (pair.volume24h * pair.price).toString(),
        "liquidity_in_usd": pair.liquidityUsd.toString(),
        "bid": pair.price.toString(), // Adjust if available
        "ask": pair.price.toString(), // Adjust if available
        "high": pair.high24h?.toString() || "0",
        "low": pair.low24h?.toString() || "0",
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
