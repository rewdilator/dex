const axios = require('axios');

// Configuration
const MULTIVERSX_API = 'https://api.multiversx.com';
const DEX_ROUTER_ADDRESS = 'erd1qqqqqqqqqqqqqpgq5h3h37kzmg3dspfju8q5wq8ymvz5v0qv3p0qn3s7y9'; // OneDex router
const USDC_TOKEN_ID = 'USDC-c76f1f';
const BOBER_TOKEN_ID = 'BOBER-9eb764';
const FOXSY_TOKEN_ID = 'FOXSY-5d5f3e';

exports.handler = async (event) => {
  try {
    // Step 1: Get all pairs from the DEX
    const pairs = await getRealPairsFromDex();
    
    // Step 2: Get detailed data for each pair
    const tickers = await Promise.all(pairs.map(async (pair) => {
      const pairData = await getRealPairData(pair.address);
      const priceData = await getTokenData(pair.baseId, pair.quoteId);
      return formatRealTicker(pair, pairData, priceData);
    }));

    // Step 3: Add hardcoded special pairs
    tickers.push(createBoberEntry());
    tickers.push(createFoxsyEntry());

    return {
      statusCode: 200,
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        status: "error"
      })
    };
  }
};

// Fetch real pairs from MultiversX DEX
async function getRealPairsFromDex() {
  try {
    const response = await axios.get(`${MULTIVERSX_API}/accounts/${DEX_ROUTER_ADDRESS}/transactions`, {
      params: {
        function: 'getAllPairs',
        size: 100
      }
    });

    return response.data.map(pair => ({
      address: pair.address,
      baseId: pair.firstTokenId,
      quoteId: pair.secondTokenId,
      baseSymbol: pair.firstTokenId.split('-')[0],
      quoteSymbol: pair.secondTokenId.split('-')[0]
    }));
  } catch (error) {
    console.error('Error fetching pairs:', error);
    throw new Error('Failed to fetch trading pairs from DEX');
  }
}

// Get real pair data including reserves and volume
async function getRealPairData(pairAddress) {
  try {
    // Get reserves
    const reservesResponse = await axios.get(`${MULTIVERSX_API}/accounts/${pairAddress}/transactions`, {
      params: { function: 'getReserves' }
    });

    // Get 24h volume (simplified)
    const volumeResponse = await axios.get(`${MULTIVERSX_API}/transactions`, {
      params: {
        receiver: pairAddress,
        function: 'swapTokensFixedInput|swapTokensFixedOutput',
        size: 100,
        after: Math.floor(Date.now() / 1000) - 86400 // Last 24h
      }
    });

    let baseVolume = 0;
    let quoteVolume = 0;

    volumeResponse.data.forEach(tx => {
      const amountIn = parseFloat(tx.data?.amountIn || '0');
      const amountOut = parseFloat(tx.data?.amountOut || '0');
      
      if (tx.function === 'swapTokensFixedInput') {
        baseVolume += amountIn;
        quoteVolume += amountOut;
      } else {
        baseVolume += amountOut;
        quoteVolume += amountIn;
      }
    });

    return {
      reserves: reservesResponse.data || { firstTokenReserve: '0', secondTokenReserve: '0' },
      baseVolume,
      quoteVolume
    };
  } catch (error) {
    console.error('Error fetching pair data:', error);
    throw new Error(`Failed to fetch data for pair ${pairAddress}`);
  }
}

// Get token metadata including decimals
async function getTokenData(tokenId1, tokenId2) {
  try {
    const [token1, token2] = await Promise.all([
      axios.get(`${MULTIVERSX_API}/tokens/${tokenId1}`),
      axios.get(`${MULTIVERSX_API}/tokens/${tokenId2}`)
    ]);

    return {
      baseDecimals: token1.data.decimals || 18,
      quoteDecimals: token2.data.decimals || 18
    };
  } catch (error) {
    console.error('Error fetching token data:', error);
    return {
      baseDecimals: 18,
      quoteDecimals: 18
    };
  }
}

function formatRealTicker(pair, pairData, priceData) {
  const baseReserve = parseFloat(pairData.reserves.firstTokenReserve) / (10 ** priceData.baseDecimals);
  const quoteReserve = parseFloat(pairData.reserves.secondTokenReserve) / (10 ** priceData.quoteDecimals);
  const lastPrice = quoteReserve / baseReserve;
  
  return {
    ticker_id: `${pair.baseSymbol}_${pair.quoteSymbol}`,
    base_currency: pair.baseSymbol,
    target_currency: pair.quoteSymbol,
    pool_id: pair.address,
    last_price: lastPrice.toFixed(6),
    base_volume: pairData.baseVolume.toFixed(2),
    target_volume: pairData.quoteVolume.toFixed(2),
    liquidity_in_usd: calculateLiquidityUSD(baseReserve, quoteReserve).toFixed(2),
    bid: (lastPrice * 0.995).toFixed(6),
    ask: (lastPrice * 1.005).toFixed(6),
    high: (lastPrice * 1.05).toFixed(6),
    low: (lastPrice * 0.95).toFixed(6)
  };
}

function calculateLiquidityUSD(baseReserve, quoteReserve) {
  // Simplified calculation - in production use real USD prices
  return (baseReserve + quoteReserve) * 1.5; // Example multiplier
}

// Hardcoded BOBER-USDC pair
function createBoberEntry() {
  const randomPrice = (Math.random() * 1000 + 10000).toFixed(4);
  const randomVolume = (Math.random() * 1000 + 500).toFixed(2);
  
  return {
    ticker_id: "BOBER_USDC",
    base_currency: "BOBER",
    target_currency: "USDC",
    pool_id: "hardcoded-bober-usdc-pool",
    last_price: randomPrice,
    base_volume: randomVolume,
    target_volume: (randomVolume * randomPrice).toFixed(2),
    liquidity_in_usd: "1500000.00",
    bid: (randomPrice * 0.995).toFixed(4),
    ask: (randomPrice * 1.005).toFixed(4),
    high: (randomPrice * 1.05).toFixed(4),
    low: (randomPrice * 0.95).toFixed(4)
  };
}

// Hardcoded FOXSY-USDC pair
function createFoxsyEntry() {
  const randomPrice = (Math.random() * 0.5 + 0.5).toFixed(6);
  const randomVolume = (Math.random() * 50000 + 10000).toFixed(2);
  
  return {
    ticker_id: "FOXSY_USDC",
    base_currency: "FOXSY",
    target_currency: "USDC",
    pool_id: "hardcoded-foxsy-usdc-pool",
    last_price: randomPrice,
    base_volume: randomVolume,
    target_volume: (randomVolume * randomPrice).toFixed(2),
    liquidity_in_usd: "750000.00",
    bid: (randomPrice * 0.99).toFixed(6),
    ask: (randomPrice * 1.01).toFixed(6),
    high: (randomPrice * 1.1).toFixed(6),
    low: (randomPrice * 0.9).toFixed(6)
  };
}
