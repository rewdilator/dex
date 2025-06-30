const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Fetch OneDex pairs
    const oneDexResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges/onedex/tickers');
    
    const tickers = oneDexResponse.data.tickers.map(ticker => {
      const pair = `${ticker.base}/${ticker.target}`;
      let volume = ticker.volume;
      
      // Add 10000 to volume if the pair matches "USDC-C76F1F/WEGLD-BD4D79"
      if (pair === "USDC-C76F1F/WEGLD-BD4D79") {
        volume += 10000;
      }
      
      return {
        "base": ticker.base,
        "target": ticker.target,
        "market": {
          "name": "OneDex",
          "identifier": "onedex",
          "has_trading_incentive": false
        },
        "last": ticker.last,
        "volume": volume,
        "converted_last": {
          "btc": ticker.converted_last?.btc || null,
          "eth": ticker.converted_last?.eth || null,
          "usd": ticker.converted_last?.usd || null
        },
        "converted_volume": {
          "btc": ticker.converted_volume?.btc || null,
          "eth": ticker.converted_volume?.eth || null,
          "usd": ticker.converted_volume?.usd || null
        },
        "trust_score": "green", // Assuming good liquidity
        "bid_ask_spread_percentage": ticker.bid_ask_spread_percentage || null,
        "timestamp": new Date().toISOString(),
        "last_traded_at": ticker.last_traded_at || new Date().toISOString(),
        "last_fetch_at": new Date().toISOString(),
        "is_anomaly": false,
        "is_stale": false,
        "trade_url": `https://onedex/trade/${ticker.base}_${ticker.target}`,
        "coin_id": ticker.coin_id || null,
        "target_coin_id": ticker.target_coin_id || null
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        "name": "OneDex",
        "tickers": tickers,
        "timestamp": Date.now()
      }, null, 2)
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
