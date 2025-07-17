const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch XExchange pairs from their API
    const xExchangeResponse = await axios.get('https://api.xexchange.com/api/pairs');
    
    if (!xExchangeResponse.data || !Array.isArray(xExchangeResponse.data)) {
      throw new Error("Invalid API response structure");
    }

    const tickers = xExchangeResponse.data.map(pair => {
      // Safely handle undefined values
      const lastPrice = pair.price || 0;
      const volume24h = pair.volume24h || 0;
      const liquidityUsd = pair.liquidityUsd || 0;
      const high24h = pair.high24h || 0;
      const low24h = pair.low24h || 0;

      return {
        "ticker_id": `${pair.baseId || 'UNKNOWN'}_${pair.quoteId || 'UNKNOWN'}`,
        "base_currency": pair.baseSymbol || 'UNKNOWN',
        "target_currency": pair.quoteSymbol || 'UNKNOWN',
        "pool_id": pair.address || '0x0000000000000000000000000000000000000000',
        "last_price": lastPrice.toString(),
        "base_volume": volume24h.toString(),
        "target_volume": (volume24h * lastPrice).toString(),
        "liquidity_in_usd": liquidityUsd.toString(),
        "bid": lastPrice.toString(), // XExchange API doesn't provide bid/ask
        "ask": lastPrice.toString(), // XExchange API doesn't provide bid/ask
        "high": high24h.toString(),
        "low": low24h.toString(),
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    console.error("Full error details:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        "error": error.message,
        "status": "error",
        "details": process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
