const axios = require('axios');

// Configuration
const ONEDEX_ROUTER_ADDRESS = 'erd1qqqqqqqqqqqqqpgq5h3h37kzmg3dspfju8q5wq8ymvz5v0qv3p0qn3s7y9'; // Verify current address
const MULTIVERSX_API = 'https://api.multiversx.com';
const BOBER_TOKEN_ID = 'BOBER-9eb764';

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

    // Step 3: Add hardcoded BOBER entry
    tickers.push(createBoberEntry());

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

async function getAllPairs() {
  try {
    // This is a mock implementation - replace with actual OneDex API call
    return [
      {
        address: 'erd1...pair1',
        baseId: 'EGLD-123456',
        quoteId: 'USDC-789012',
        baseSymbol: 'EGLD',
        quoteSymbol: 'USDC'
      },
      {
        address: 'erd1...pair2',
        baseId: 'MEX-456789',
        quoteId: 'EGLD-123456',
        baseSymbol: 'MEX',
        quoteSymbol: 'EGLD'
      }
    ];
    
    // Actual implementation would look like:
    // const response = await axios.get(`${MULTIVERSX_API}/accounts/${ONEDEX_ROUTER_ADDRESS}/transactions`, {
    //   params: { function: 'getAllPairs' }
    // });
    // return processPairsResponse(response.data);
  } catch (error) {
    console.error('Error fetching pairs:', error);
    throw new Error('Failed to fetch trading pairs from OneDex');
  }
}

async function getPairData(pairAddress) {
  try {
    // Mock data - replace with actual API calls
    return {
      reserves: {
        firstTokenReserve: (Math.random() * 10000).toFixed(0),
        secondTokenReserve: (Math.random() * 10000).toFixed(0)
      },
      baseVolume: (Math.random() * 1000).toFixed(2),
      quoteVolume: (Math.random() * 1000).toFixed(2)
    };
    
    // Actual implementation would involve:
    // 1. Getting reserves from the pair contract
    // 2. Getting recent transactions to calculate volume
  } catch (error) {
    console.error('Error fetching pair data:', error);
    throw new Error(`Failed to fetch data for pair ${pairAddress}`);
  }
}

async function getPriceData(baseId, quoteId) {
  try {
    // Mock data - in real implementation you would:
    // 1. Get token decimals from MultiversX API
    // 2. Possibly get USD prices from an oracle
    return {
      baseDecimals: 18,
      quoteDecimals: 18,
      usdPrice: Math.random() * 10
    };
  } catch (error) {
    console.error('Error fetching token data:', error);
    return {
      baseDecimals: 18,
      quoteDecimals: 18,
      usdPrice: 0
    };
  }
}

function formatTicker(pair, pairData, priceData) {
  const baseReserve = parseFloat(pairData.reserves.firstTokenReserve) / (10 ** priceData.baseDecimals);
  const quoteReserve = parseFloat(pairData.reserves.secondTokenReserve) / (10 ** priceData.quoteDecimals);
  const lastPrice = quoteReserve / baseReserve;
  
  return {
    ticker_id: `${pair.baseSymbol}_${pair.quoteSymbol}`,
    base_currency: pair.baseSymbol,
    target_currency: pair.quoteSymbol,
    pool_id: pair.address,
    last_price: lastPrice.toFixed(6),
    base_volume: pairData.baseVolume,
    target_volume: pairData.quoteVolume,
    liquidity_in_usd: calculateLiquidityInUSD(baseReserve, quoteReserve, priceData.usdPrice).toFixed(2),
    bid: (lastPrice * 0.995).toFixed(6),
    ask: (lastPrice * 1.005).toFixed(6),
    high: (lastPrice * 1.05).toFixed(6),
    low: (lastPrice * 0.95).toFixed(6)
  };
}

function calculateLiquidityInUSD(baseReserve, quoteReserve, usdPrice) {
  // Simplified calculation - adjust with real USD prices if available
  return (baseReserve + quoteReserve) * usdPrice;
}

function createBoberEntry() {
  const randomPrice = (Math.random() * 1000 + 10000).toFixed(4); // 10,000-11,000
  const randomVolume = (Math.random() * 1000 + 500).toFixed(2); // 500-1,500 volume
  
  return {
    ticker_id: "BOBER_EGLD",
    base_currency: "BOBER",
    target_currency: "EGLD",
    pool_id: "hardcoded-bober-pool",
    last_price: randomPrice,
    base_volume: randomVolume,
    target_volume: (randomVolume * randomPrice).toFixed(2),
    liquidity_in_usd: "1000000.00",
    bid: (randomPrice * 0.995).toFixed(4),
    ask: (randomPrice * 1.005).toFixed(4),
    high: (randomPrice * 1.05).toFixed(4),
    low: (randomPrice * 0.95).toFixed(4)
  };
}
