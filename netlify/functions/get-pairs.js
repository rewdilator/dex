const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
    
    // Fetch token prices from CoinGecko
    const [boberResponse, padawanResponse] = await Promise.all([
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bober&vs_currencies=usd'),
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=padawan&vs_currencies=usd')
    ]);

    const boberPrice = boberResponse.data.bober?.usd || 1.05;
    const padawanPrice = padawanResponse.data.padawan?.usd || 0.50;
    const boberPadawanPrice = padawanPrice > 0 ? boberPrice / padawanPrice : 2.1; // Calculate pair price

    let tickers = oneDexResponse.data.tickers.map(ticker => {
      const pair = `${ticker.base}/${ticker.target}`;
      let baseVolume = ticker.volume;
      let targetVolume = ticker.volume * ticker.last;
      
      return {
        "ticker_id": `${ticker.base}_${ticker.target}`,
        "base_currency": ticker.base,
        "target_currency": ticker.target,
        "pool_id": generatePoolId(ticker.base, ticker.target),
        "last_price": ticker.last.toString(),
        "base_volume": baseVolume.toString(),
        "target_volume": targetVolume.toString(),
        "liquidity_in_usd": calculateLiquidityInUSD(ticker).toString(),
        "bid": ticker.bid_ask_spread_percentage ? (ticker.last * (1 - ticker.bid_ask_spread_percentage/200)).toString() : "0",
        "ask": ticker.bid_ask_spread_percentage ? (ticker.last * (1 + ticker.bid_ask_spread_percentage/200)).toString() : "0",
        "high": ticker.high ? ticker.high.toString() : "0",
        "low": ticker.low ? ticker.low.toString() : "0",
      };
    });

    // Add BOBER-9eb764/USDC-C76F1F pair
    const randomUsdcVolume = (Math.random() * 2000 + 10000).toFixed(0); // 10k-12k
    const boberUsdcPair = {
      "ticker_id": "BOBER-9eb764_USDC-C76F1F",
      "base_currency": "BOBER-9eb764",
      "target_currency": "USDC-C76F1F",
      "pool_id": generatePoolId("BOBER-9eb764", "USDC-C76F1F"),
      "last_price": boberPrice.toString(),
      "base_volume": (randomUsdcVolume / boberPrice).toFixed(2).toString(),
      "target_volume": randomUsdcVolume.toString(),
      "liquidity_in_usd": (randomUsdcVolume * 2).toString(),
      "bid": (boberPrice * 0.99).toFixed(4).toString(),
      "ask": (boberPrice * 1.01).toFixed(4).toString(),
      "high": (boberPrice * 1.05).toFixed(4).toString(),
      "low": (boberPrice * 0.95).toFixed(4).toString()
    };

    // Add BOBER-9eb764/PADAWAN-a17f58 pair
    const randomPadawanVolume = (Math.random() * 1000 + 5000).toFixed(0); // 5k-6k
    const boberPadawanPair = {
      "ticker_id": "BOBER-9eb764_PADAWAN-a17f58",
      "base_currency": "BOBER-9eb764",
      "target_currency": "PADAWAN-a17f58",
      "pool_id": generatePoolId("BOBER-9eb764", "PADAWAN-a17f58"),
      "last_price": boberPadawanPrice.toString(),
      "base_volume": (randomPadawanVolume / boberPadawanPrice).toFixed(2).toString(),
      "target_volume": randomPadawanVolume.toString(),
      "liquidity_in_usd": (randomPadawanVolume * 2).toString(),
      "bid": (boberPadawanPrice * 0.99).toFixed(4).toString(),
      "ask": (boberPadawanPrice * 1.01).toFixed(4).toString(),
      "high": (boberPadawanPrice * 1.05).toFixed(4).toString(),
      "low": (boberPadawanPrice * 0.95).toFixed(4).toString()
    };

    // Add both pairs to the results
    tickers.push(boberUsdcPair, boberPadawanPair);

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

// Helper functions remain the same
function generatePoolId(baseCurrency, targetCurrency) {
  return "0x" + Math.random().toString(16).substr(2, 40);
}

function calculateLiquidityInUSD(ticker) {
  return ticker.volume * (ticker.converted_last?.usd || 1) * 10;
}
