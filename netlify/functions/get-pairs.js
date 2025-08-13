const axios = require('axios');
const { GraphQLClient, gql } = require('graphql-request');

// AUTO token address (BSC)
const AUTO_TOKEN_ADDRESS = "0xa184088a740c695e156f91f5cc086a06bb78b827"; // BSC
const USDC_TOKEN_ADDRESS = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"; // BSC USDC

exports.handler = async (event) => {
  try {
    // ===== 1. Fetch XExchange Pairs (Original Logic) =====
    const response = await axios.get('https://api.multiversx.com/mex/pairs');
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("Invalid API response structure");
    }

    const tickers = response.data
      .filter(pair => pair.exchange === "xexchange")
      .map(pair => ({
        "ticker_id": `${pair.baseId}_${pair.quoteId}`,
        "base_currency": pair.baseId,
        "target_currency": pair.quoteId,
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

    // ===== 2. Fetch AUTO-USDC Data from Other DEXs =====
    const dexData = await fetchDexData();
    const modifiedTickers = [...tickers, ...dexData];

    return {
      statusCode: 200,
      body: JSON.stringify(modifiedTickers, null, 2),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

// ===== Fetch AUTO-USDC Data from BSC DEXs =====
async function fetchDexData() {
  const dexes = [
    { name: "PancakeSwap", subgraph: "pancakeswap/exchange" },
    { name: "ApeSwap", subgraph: "apeswapfinance/dex" },
    { name: "Biswap", subgraph: "biswapcom/exchange5" },
    { name: "BakerySwap", subgraph: "bakery-project/bakery-swap" },
    { name: "SushiSwap", subgraph: "sushiswap/bsc-exchange" },
  ];

  const results = [];
  for (const dex of dexes) {
    try {
      const data = await querySubgraph(
        dex.subgraph,
        AUTO_TOKEN_ADDRESS,
        USDC_TOKEN_ADDRESS
      );
      if (data) {
        results.push({
          ticker_id: `AUTO_USDC@${dex.name}`,
          base_currency: "AUTO",
          target_currency: "USDC",
          pool_id: data.id,
          last_price: data.lastPrice,
          base_volume: data.volume,
          target_volume: (data.volume * data.lastPrice).toString(),
          liquidity_in_usd: data.liquidityUSD,
          bid: data.lastPrice,
          ask: data.lastPrice,
          high: "0", // Not always available
          low: "0",
          dex: dex.name,
        });
      }
    } catch (err) {
      console.error(`Failed to fetch ${dex.name}:`, err.message);
    }
  }

  return results;
}

// ===== GraphQL Query for DEX Subgraphs =====
async function querySubgraph(subgraph, token0, token1) {
  const endpoint = `https://api.thegraph.com/subgraphs/name/${subgraph}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    {
      pairs(where: {
        token0: "${token0}",
        token1: "${token1}"
      }) {
        id
        token0 { symbol }
        token1 { symbol }
        reserveUSD
        volumeUSD
        token0Price
      }
    }
  `;

  const data = await client.request(query);
  if (data.pairs.length === 0) return null;

  const pair = data.pairs[0];
  return {
    id: pair.id,
    lastPrice: pair.token0Price,
    volume: pair.volumeUSD,
    liquidityUSD: pair.reserveUSD,
  };
}
