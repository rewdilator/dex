const axios = require('axios');

exports.handler = async (event) => {
  try {
    // 1. Fetch XExchange pairs (original logic)
    const response = await axios.get('https://api.multiversx.com/mex/pairs');
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("Invalid API response structure");
    }

    const tickers = response.data
      .filter(pair => pair.exchange === "xexchange")
      .map(pair => ({
        ticker_id: `${pair.baseId}_${pair.quoteId}`,
        base_currency: pair.baseId,
        target_currency: pair.quoteId,
        pool_id: pair.address || '0x0000000000000000000000000000000000000000',
        last_price: (pair.basePrice || 0).toString(),
        base_volume: (pair.volume24h || 0).toString(),
        target_volume: ((pair.volume24h || 0) * (pair.basePrice || 0)).toString(),
        liquidity_in_usd: (pair.totalValue || 0).toString(),
        bid: (pair.basePrice || 0).toString(),
        ask: (pair.quotePrice || 0).toString(),
        high: (pair.basePrevious24hPrice || 0).toString(),
        low: (pair.quotePrevious24hPrice || 0).toString(),
      }));

    // 2. Fetch AUTO-USDC from PancakeSwap API (simplified)
    const pancakeData = await axios.post('https://api.thegraph.com/subgraphs/name/pancakeswap/exchange', {
      query: `{
        pairs(where: {
          token0: "0xa184088a740c695e156f91f5cc086a06bb78b827",
          token1: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
        }) {
          id
          token0 { symbol }
          token1 { symbol }
          reserveUSD
          volumeUSD
          token0Price
        }
      }`
    });

    if (pancakeData.data.data.pairs.length > 0) {
      const pair = pancakeData.data.data.pairs[0];
      tickers.push({
        ticker_id: "AUTO_USDC@PancakeSwap",
        base_currency: "AUTO",
        target_currency: "USDC",
        pool_id: pair.id,
        last_price: pair.token0Price.toString(),
        base_volume: pair.volumeUSD.toString(),
        target_volume: (pair.volumeUSD * pair.token0Price).toString(),
        liquidity_in_usd: pair.reserveUSD.toString(),
        bid: pair.token0Price.toString(),
        ask: pair.token0Price.toString(),
        high: "0",
        low: "0"
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
