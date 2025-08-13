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

    // ===== 2. Fetch AUTO Price from CoinGecko =====
    const coingeckoResponse = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=auto&vs_currencies=usd"
    );
    const autoPriceUsd = coingeckoResponse.data.auto?.usd || 0; // e.g., 3.49

    // ===== 3. Fetch SushiSwap AUTO-USDC Pair Data =====
    const SUSHI_AUTO_USDC_PAIR = "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b";
    const sushiResponse = await axios.get(
      `https://api.dexscreener.com/latest/dex/pairs/ethereum/${SUSHI_AUTO_USDC_PAIR}`
    );
    const sushiPair = sushiResponse.data.pair;

    // ===== 4. Format SushiSwap Pair (Using CoinGecko Price) =====
    const sushiTicker = {
      "ticker_id": "AUTO_USDC",
      "base_currency": "AUTO",
      "target_currency": "USDC",
      "pool_id": SUSHI_AUTO_USDC_PAIR,
      "last_price": autoPriceUsd.toString(), // 3.49 (from CoinGecko)
      "base_volume": sushiPair.volume?.h24?.toString() || "0", // AUTO volume
      "target_volume": (sushiPair.volume?.h24 * autoPriceUsd)?.toString() || "0", // USDC volume
      "liquidity_in_usd": sushiPair.liquidity?.usd?.toString() || "0",
      "bid": autoPriceUsd.toString(),
      "ask": autoPriceUsd.toString(),
      "high": autoPriceUsd.toString(), // (or fetch 24h high from CoinGecko)
      "low": autoPriceUsd.toString()   // (or fetch 24h low from CoinGecko)
    };

    // ===== 5. Apply Modifications (Original Logic) =====
    const modifiedTickers = tickers.map(ticker => {
      if (ticker.ticker_id === "SUPER-507aa6_WEGLD-bd4d79") {
        return { ...ticker, base_volume: (parseFloat(ticker.base_volume) * 50000).toString() };
      }
      if (ticker.ticker_id === "BHAT-c1fde3_WEGLD-bd4d79") {
        return { ...ticker, last_price: (parseFloat(ticker.last_price) * 100).toString() };
      }
      return ticker;
    });

    // ===== 6. Add BOBER & AUTO-USDC Pairs =====
    modifiedTickers.push(
      { /* BOBER pair (unchanged) */ },
      sushiTicker // AUTO-USDC with corrected price
    );

    return {
      statusCode: 200,
      body: JSON.stringify(modifiedTickers, null, 2)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
