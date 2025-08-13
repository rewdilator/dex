const axios = require('axios');
const { ethers } = require('ethers');

// Configure provider (BSC Mainnet)
const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

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

    // 2. Fetch AUTO price from CoinGecko (fallback)
    const coingeckoData = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=auto&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true'
    );

    if (coingeckoData.data && coingeckoData.data.auto) {
      const autoData = coingeckoData.data.auto;
      tickers.push({
        ticker_id: "AUTO_USDC@CoinGecko",
        base_currency: "AUTO",
        target_currency: "USDC",
        pool_id: "N/A",
        last_price: autoData.usd.toString(),
        base_volume: (autoData.usd_24h_vol || 0).toString(),
        target_volume: (autoData.usd_24h_vol || 0).toString(),
        liquidity_in_usd: "0", // CoinGecko doesn't provide liquidity
        bid: (autoData.usd * 0.99).toString(), // Estimate
        ask: (autoData.usd * 1.01).toString(), // Estimate
        high: "0",
        low: "0"
      });
    }

    // 3. Optional: Fetch liquidity from PancakeSwap contract
    try {
      const pancakePairABI = [
        "function getReserves() external view returns (uint112, uint112, uint32)",
        "function token0() external view returns (address)",
        "function token1() external view returns (address)"
      ];
      
      // AUTO-USDC Pair Address on PancakeSwap (verify this)
      const pairAddress = "0x7d99eda556388Ad7743A1B658b9C4FC67D7A9d74"; 
      const pairContract = new ethers.Contract(pairAddress, pancakePairABI, provider);
      
      const [reserve0, reserve1] = await pairContract.getReserves();
      const token0 = await pairContract.token0();
      
      // AUTO is token0 in this pair (verify)
      const autoPrice = reserve1 / reserve0; 
      
      tickers.push({
        ticker_id: "AUTO_USDC@PancakeSwap",
        base_currency: "AUTO",
        target_currency: "USDC",
        pool_id: pairAddress,
        last_price: autoPrice.toString(),
        base_volume: "0", // Not available from contract
        target_volume: "0",
        liquidity_in_usd: (reserve0 * autoPrice * 2).toString(),
        bid: (autoPrice * 0.99).toString(),
        ask: (autoPrice * 1.01).toString(),
        high: "0",
        low: "0"
      });
    } catch (contractError) {
      console.error("Contract call failed:", contractError.message);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(tickers, null, 2)
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
