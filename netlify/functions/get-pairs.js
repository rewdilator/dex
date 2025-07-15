const axios = require('axios');

// OneDex contract addresses (verify these are current)
const ONEDEX_ROUTER_ADDRESS = 'erd1qqqqqqqqqqqqqpgq5h3h37kzmg3dspfju8q5wq8ymvz5v0qv3p0qn3s7y9'; // Example address - verify current one
const MULTIVERSX_API = 'https://api.multiversx.com';

exports.handler = async (event) => {
  try {
    // Step 1: Get all pairs from OneDex
    const pairs = await getAllPairs();
    
    // Step 2: Get detailed data for each pair
    const tickers = await Promise.all(pairs.map(async (pair) => {
      const pairData = await getPairData(pair.address);
      const priceData = await getPriceData(pair.baseId, pair.quoteId);
      
      return formatTicker(pair, pairData, priceData);
    }));

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

// Get all trading pairs from OneDex
async function getAllPairs() {
  try {
    const response = await axios.get(`${MULTIVERSX_API}/accounts/${ONEDEX_ROUTER_ADDRESS}/transactions`, {
      params: {
        function: 'getAllPairs',
        size: 100 // Adjust based on number of pairs
      }
    });
    
    // Parse response - this depends on OneDex's SC implementation
    // You might need to adjust this based on actual response format
    return response.data.map(pair => ({
      address: pair.pairAddress,
      baseId: pair.firstTokenId,
      quoteId: pair.secondTokenId,
      baseSymbol: pair.firstTokenId.split('-')[0],
      quoteSymbol: pair.secondTokenId.split('-')[0]
    }));
  } catch (error) {
    console.error('Error fetching pairs:', error);
    throw new Error('Failed to fetch trading pairs from OneDex');
  }
}

// Get pair data (reserves, volume, etc.)
async function getPairData(pairAddress) {
  try {
    const [reservesResponse, volumeResponse] = await Promise.all([
      axios.get(`${MULTIVERSX_API}/accounts/${pairAddress}/transactions`, {
        params: { function: 'getReserves' }
      }),
      axios.get(`${MULTIVERSX_API}/transactions`, {
        params: {
          receiver: pairAddress,
          function: 'swapTokensFixedInput|swapTokensFixedOutput',
          size: 100,
          after: Math.floor(Date.now() / 1000) - 86400 // Last 24h
        }
      })
    ]);
    
    // Parse reserves (adjust based on actual response format)
    const reserves = reservesResponse.data || { firstTokenReserve: '0', secondTokenReserve: '0' };
    
    // Calculate 24h volume (simplified - you might need better aggregation)
    let baseVolume = 0;
    let quoteVolume = 0;
    
    volumeResponse.data.forEach(tx => {
      // Parse transaction data to get swap amounts
      // This is simplified - actual implementation depends on OneDex's tx format
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
      reserves,
      baseVolume,
      quoteVolume
    };
  } catch (error) {
    console.error('Error fetching pair data:', error);
    throw new Error(`Failed to fetch data for pair ${pairAddress}`);
  }
}

// Get price data for tokens (simplified - you might want to use an oracle)
async function getPriceData(baseId, quoteId) {
  try {
    // For accurate USD prices, you might need an oracle or CEX API
    // This is a simplified version using the pair's own price
    
    // Get token data (for decimals)
    const [baseToken, quoteToken] = await Promise.all([
      axios.get(`${MULTIVERSX_API}/tokens/${baseId}`),
      axios.get(`${MULTIVERSX_API}/tokens/${quoteId}`)
    ]);
    
    return {
      baseDecimals: baseToken.data.decimals || 18,
      quoteDecimals: quoteToken.data.decimals || 18,
      // Add USD price data here if available
    };
  } catch (error) {
    console.error('Error fetching token data:', error);
    return {
      baseDecimals: 18,
      quoteDecimals: 18
    };
  }
}

// Format ticker data in the expected structure
function formatTicker(pair, pairData, priceData) {
  // Calculate price (reserveQuote / reserveBase)
  const baseReserve = parseFloat(pairData.reserves.firstTokenReserve) / (10 ** priceData.baseDecimals);
  const quoteReserve = parseFloat(pairData.reserves.secondTokenReserve) / (10 ** priceData.quoteDecimals);
  const lastPrice = quoteReserve / baseReserve;
  
  return {
    "ticker_id": `${pair.baseSymbol}_${pair.quoteSymbol}`,
    "base_currency": pair.baseSymbol,
    "target_currency": pair.quoteSymbol,
    "pool_id": pair.address,
    "last_price": lastPrice.toString(),
    "base_volume": pairData.baseVolume.toString(),
    "target_volume": pairData.quoteVolume.toString(),
    "liquidity_in_usd": calculateLiquidityInUSD(baseReserve, quoteReserve).toString(),
    "bid": (lastPrice * 0.995).toString(), // 0.5% spread for bid
    "ask": (lastPrice * 1.005).toString(), // 0.5% spread for ask
    "high": (lastPrice * 1.05).toString(), // Simplified - use real data if available
    "low": (lastPrice * 0.95).toString(),  // Simplified - use real data if available
  };
}

// Calculate liquidity in USD (simplified - needs real price data)
function calculateLiquidityInUSD(baseReserve, quoteReserve) {
  // In a real implementation, you would:
  // 1. Get USD price for both tokens (from an oracle or CEX)
  // 2. Calculate total value in USD
  // This is a placeholder implementation
  return (baseReserve * 1 + quoteReserve * 1) * 1000; // Example multiplier
}
