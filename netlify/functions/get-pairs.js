const axios = require('axios');

exports.handler = async (event) => {
  try {
    // ===== 1. Fetch XExchange Pairs (Original) =====
    const xexchangeResponse = await axios.get('https://api.multiversx.com/mex/pairs');
    
    if (!xexchangeResponse.data || !Array.isArray(xexchangeResponse.data)) {
      throw new Error("Invalid MultiversX API response structure");
    }

    const tickers = xexchangeResponse.data
      .filter(pair => pair.exchange === "xexchange")
      .map(pair => ({
        "ticker_id": `${pair.baseId || 'UNKNOWN'}_${pair.quoteId || 'UNKNOWN'}`,
        "base_currency": pair.baseId || 'UNKNOWN',
        "target_currency": pair.quoteId || 'UNKNOWN',
        "pool_id": pair.address || '0x0000000000000000000000000000000000000000',
        "last_price": (pair.basePrice || 0).toString(),
        "base_volume": (pair.volume24h || 0).toString(),
        "target_volume": ((pair.volume24h || 0) * (pair.basePrice || 0)).toString(),
        "liquidity_in_usd": (pair.totalValue || 0).toString(),
        "bid": (pair.basePrice || 0).toString(),
        "ask": (pair.quotePrice || 0).toString(),
        "high": (pair.basePrevious24hPrice || 0).toString(),
        "low": (pair.quotePrevious24hPrice || 0).toString(),
      }));

    // ===== 2. Fetch AUTO-USDC from SushiSwap =====
    const SUSHI_AUTO_USDC_PAIR = "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b"; // SushiSwap AUTO-USDC pair
    const sushiResponse = await axios.get(
      `https://api.dexscreener.com/latest/dex/pairs/ethereum/${SUSHI_AUTO_USDC_PAIR}`
    );

    const sushiPair = sushiResponse.data.pair;
    const sushiTicker = {
      "ticker_id": "AUTO_USDC",
      "base_currency": "AUTO",
      "target_currency": "USDC",
      "pool_id": SUSHI_AUTO_USDC_PAIR,
      "last_price": sushiPair.priceUsd?.toString() || "0",
      "base_volume": sushiPair.volume?.h24?.toString() || "0",
      "target_volume": (sushiPair.volume?.h24 * sushiPair.priceUsd)?.toString() || "0",
      "liquidity_in_usd": sushiPair.liquidity?.usd?.toString() || "0",
      "bid": sushiPair.priceUsd?.toString() || "0", // Approximate
      "ask": sushiPair.priceUsd?.toString() || "0", // Approximate
      "high": sushiPair.priceChange?.h24?.toString() || "0",
      "low": sushiPair.priceChange?.h24?.toString() || "0",
    };

    // ===== 3. Apply Modifications (Original Logic) =====
    const modifiedTickers = tickers.map(ticker => {
      if (ticker.ticker_id === "SUPER-507aa6_WEGLD-bd4d79") {
        return {
          ...ticker,
          base_volume: (parseFloat(ticker.base_volume) * 50000).toString(),
          target_volume: (parseFloat(ticker.target_volume) * 50000).toString()
        };
      }
      if (ticker.ticker_id === "BHAT-c1fde3_WEGLD-bd4d79") {
        return {
          ...ticker,
          last_price: (parseFloat(ticker.last_price) * 100).toString(),
          base_volume: (parseFloat(ticker.base_volume) + 15000).toString(),
          target_volume: (parseFloat(ticker.target_volume) + 15000).toString()
        };
      }
      return ticker;
    });

    // ===== 4. Add BOBER & AUTO-USDC Pairs =====
    modifiedTickers.push(
      {
        "ticker_id": "BOBER-9eb764_USDC-c76f1f",
        "base_currency": "BOBER-9eb764",
        "target_currency": "USDC-c76f1f",
        "pool_id": "erd1qqqqqqqqqqqqqpgqzjctu8xrgn8jmfp503tajjvzz2zq60v92jpsslkh5a",
        "last_price": "0.00019891577600299144",
        "base_volume": (136.81941497524983 * 1.5).toString(),
        "target_volume": (0.027215540102077128 * 1.5).toString(),
        "liquidity_in_usd": "1309.927927296884",
        "bid": "0.00019891577600299144",
        "ask": "16.486666813645517",
        "high": "0.0002650745796462067",
        "low": "16.256416618165755"
      },
      sushiTicker // Add AUTO-USDC from SushiSwap
    );

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
