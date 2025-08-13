const axios = require('axios');

exports.handler = async (event) => {
  try {
    // ===== 1. Fetch XExchange Pairs (Original) =====
    const xexchangeResponse = await axios.get('https://api.multiversx.com/mex/pairs');
    if (!xexchangeResponse.data || !Array.isArray(xexchangeResponse.data)) {
      throw new Error("Invalid MultiversX API response structure");
    }

    // Process XExchange pairs (unchanged)
    const tickers = xexchangeResponse.data
      .filter(pair => pair.exchange === "xexchange")
      .map(pair => ({
        /* ... existing XExchange pair processing ... */
      }));

    // ===== 2. Fetch AUTO Price from CoinGecko =====
    const coingeckoResponse = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=auto&vs_currencies=usd"
    );
    const autoPriceUsd = coingeckoResponse.data.auto?.usd || 0;

    // ===== 3. Fetch SushiSwap Pair Data =====
    const SUSHI_AUTO_USDC_PAIR = "0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b";
    const sushiResponse = await axios.get(
      `https://api.dexscreener.com/latest/dex/pairs/ethereum/${SUSHI_AUTO_USDC_PAIR}`
    );
    const sushiPair = sushiResponse.data.pair;

    // ===== 4. Correct Volume Calculations =====
    const baseVolume = sushiPair.volume?.h24 || 0; // AUTO volume
    const targetVolume = baseVolume * autoPriceUsd; // USDC volume

    const sushiTicker = {
      "ticker_id": "AUTO_USDC",
      "base_currency": "AUTO",
      "target_currency": "USDC",
      "pool_id": SUSHI_AUTO_USDC_PAIR,
      "last_price": autoPriceUsd.toString(),
      "base_volume": baseVolume.toString(), // Raw AUTO volume
      "target_volume": targetVolume.toString(), // AUTO volume × price
      "liquidity_in_usd": sushiPair.liquidity?.usd?.toString() || "0",
      "bid": (autoPriceUsd * 0.995).toString(), // 0.5% below last price
      "ask": (autoPriceUsd * 1.005).toString(), // 0.5% above last price
      "high": autoPriceUsd.toString(), // or fetch from CoinGecko
      "low": autoPriceUsd.toString()   // or fetch from CoinGecko
    };

    // ===== 5. Apply Modifications (Original Logic) =====
    const modifiedTickers = tickers.map(ticker => {
      /* ... existing modifications ... */
    });

    // ===== 6. Add Pairs =====
    modifiedTickers.push(
      { /* BOBER pair */ },
      sushiTicker
    );

    return {
      statusCode: 200,
      body: JSON.stringify(modifiedTickers, null, 2)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
