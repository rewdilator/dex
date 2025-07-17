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
        const lastPrice = pair.basePrice || 0;
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

    // Modify the SUPER-507aa6_WEGLD-bd4d79 pair volumes
    const modifiedTickers = tickers.map(ticker => {
      if (ticker.ticker_id === "SUPER-507aa6_WEGLD-bd4d79") {
        return {
          ...ticker,
          base_volume: (parseFloat(ticker.base_volume) * 50000).toString(),
          target_volume: (parseFloat(ticker.target_volume) * 50000).toString()
        };
      }
      return ticker;
    });

    // Add BOBER-9eb764_USDC-c76f1f pair with 50% more volume
    const boberPair = {
      "ticker_id": "BOBER-9eb764_USDC-c76f1f",
      "base_currency": "BOBER-9eb764",
      "target_currency": "USDC-c76f1f",
      "pool_id": "erd1qqqqqqqqqqqqqpgqzjctu8xrgn8jmfp503tajjvzz2zq60v92jpsslkh5a",
      "last_price": "0.00019891577600299144",
      "base_volume": (136.81941497524983 * 1.5).toString(), // 50% more volume
      "target_volume": (0.027215540102077128 * 1.5).toString(), // 50% more volume
      "liquidity_in_usd": "1309.927927296884",
      "bid": "0.00019891577600299144",
      "ask": "16.486666813645517",
      "high": "0.0002650745796462067",
      "low": "16.256416618165755"
    };
    
    modifiedTickers.push(boberPair);

    return {
      statusCode: 200,
      body: JSON.stringify(modifiedTickers, null, 2)
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
