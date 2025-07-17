const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch XExchange pairs from MultiversX API
    const response = await axios.get('https://api.multiversx.com/mex/pairs');
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("Invalid API response structure");
    }

    const tickers = response.data
      .filter(pair => pair.exchange === "xexchange") // Filter for xexchange only
      .map(pair => {
        // Safely extract values with defaults
        const lastPrice = pair.price || 0;
        const volume24h = pair.volume24h || 0;
        const baseId = pair.baseId || 'UNKNOWN';
        const quoteId = pair.quoteId || 'UNKNOWN';
        
        return {
          "ticker_id": `${baseId}_${quoteId}`,
          "base_currency": baseId,
          "target_currency": quoteId,
          "pool_id": pair.address || '0x0000000000000000000000000000000000000000',
          "last_price": lastPrice.toString(),
          "base_volume": volume24h.toString(),
          "target_volume": (volume24h * lastPrice).toString(),
          "liquidity_in_usd": pair.totalValue?.toString() || "0",
          "bid": pair.basePrice?.toString() || lastPrice.toString(),
          "ask": pair.quotePrice?.toString() || lastPrice.toString(),
          "high": pair.basePrevious24hPrice?.toString() || "0",
          "low": pair.quotePrevious24hPrice?.toString() || "0",
        };
      });

    return {
      statusCode: 200,
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    console.error("API Error:", error.message);
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
