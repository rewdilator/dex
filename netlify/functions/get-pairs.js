const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
    
    const tickers = oneDexResponse.data.tickers.map(ticker => {
      const pair = `${ticker.base}/${ticker.target}`;
      let baseVolume = ticker.volume;
      let targetVolume = ticker.volume * ticker.last;
      
      // Add 10000 to volume if the pair matches "USDC-C76F1F/WEGLD-BD4D79"
      if (pair === "USDC-C76F1F/WEGLD-BD4D79") {
        baseVolume += 10000;
        targetVolume += 10000 * ticker.last;
      }
      
      // Convert to the exact format you requested
      return {
        "ticker_id": `${formatAsEthereumAddress(ticker.base)}_${formatAsEthereumAddress(ticker.target)}`,
        "base_currency": formatAsEthereumAddress(ticker.base),
        "target_currency": formatAsEthereumAddress(ticker.target),
        "pool_id": generatePoolId(ticker.base, ticker.target),
        "last_price": ticker.last.toFixed(18), // Format with 18 decimals
        "base_volume": baseVolume.toFixed(18),
        "target_volume": targetVolume.toFixed(18),
        "liquidity_in_usd": (ticker.converted_volume?.usd || 0).toFixed(2),
        "bid": ticker.bid_ask_spread_percentage 
          ? (ticker.last * (1 - ticker.bid_ask_spread_percentage/200)).toFixed(18) 
          : "0",
        "ask": ticker.bid_ask_spread_percentage 
          ? (ticker.last * (1 + ticker.bid_ask_spread_percentage/200)).toFixed(18) 
          : "0",
        "high": ticker.high ? ticker.high.toFixed(18) : "0",
        "low": ticker.low ? ticker.low.toFixed(18) : "0"
      };
    });

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

// Helper function to format token IDs as Ethereum-style addresses
function formatAsEthereumAddress(tokenId) {
  // This is a simplified version - adjust based on your actual token ID format
  if (tokenId.includes('-')) {
    // For tokens like "WEGLD-BD4D79", take the suffix and pad it
    const suffix = tokenId.split('-')[1];
    return `0x${suffix.padEnd(40, '0')}`; // Pad to 40 characters
  }
  // For other cases, generate a mock address
  return `0x${tokenId.toLowerCase().replace(/[^a-f0-9]/g, '').padEnd(40, '0')}`;
}

// Helper function to generate a pool ID 
function generatePoolId(baseCurrency, targetCurrency) {
  // Create a hash-like string from the pair
  const pairStr = `${baseCurrency}_${targetCurrency}`;
  const hash = require('crypto').createHash('sha256').update(pairStr).digest('hex');
  return `0x${hash.substring(0, 40)}`; // Take first 40 chars of hash
}
