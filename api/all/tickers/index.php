<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

// API Configuration
$config = [
    'coingecko_api' => 'https://api.coingecko.com/api/v3',
    'serenity_api' => 'https://www.serenity.exchange/api/v2/trade/coingecko/tickers',
    'onedex_id' => 'onedex',
    'cache_ttl' => 300
];

try {
    // Fetch BNB/USDT pair from Serenity first
    $bnbUsdt = fetchSerenityPair($config, 'BNB_USDT');
    $bnbUsdt['pair'] = 'BNB/USDT'; // Manually set to correct format
    
    // Then fetch OneDex pairs
    $onedexPairs = fetchOneDexPairs($config);
    
    // Combine results with BNB/USDT first
    $combinedResults = array_merge([$bnbUsdt], $onedexPairs);
    
    // Prepare final response
    $response = [
        'status' => 'success',
        'data' => $combinedResults,
        'lastUpdated' => time()
    ];

    // Use JSON_UNESCAPED_SLASHES to prevent escaping forward slashes
    echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage(),
        'code' => $e->getCode()
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
}

// Fetch and process OneDex pairs
function fetchOneDexPairs($config) {
    $url = "{$config['coingecko_api']}/exchanges/{$config['onedex_id']}/tickers";
    $data = fetchApiData($url);
    
    if (empty($data['tickers'])) {
        throw new Exception("No trading pairs found for OneDex");
    }
    
    $pairs = [];
    foreach ($data['tickers'] as $ticker) {
        $pairs[] = [
            'pair' => "{$ticker['base']}/{$ticker['target']}",
            'base' => $ticker['base'],
            'target' => $ticker['target'],
            'price' => $ticker['last'],
            'volume' => $ticker['volume'],
            'bid' => $ticker['bid_ask_spread_percentage'] ? $ticker['last'] * (1 - $ticker['bid_ask_spread_percentage']/200) : null,
            'ask' => $ticker['bid_ask_spread_percentage'] ? $ticker['last'] * (1 + $ticker['bid_ask_spread_percentage']/200) : null,
            'high' => $ticker['high'] ?? null,
            'low' => $ticker['low'] ?? null
        ];
    }
    
    return $pairs;
}

// Fetch specific pair from Serenity
function fetchSerenityPair($config, $pair) {
    $allPairs = fetchApiData($config['serenity_api']);
    
    foreach ($allPairs as $p) {
        if ($p['ticker_id'] === $pair) {
            return [
                'pair' => $p['ticker_id'],
                'base' => $p['base_currency'],
                'target' => $p['target_currency'],
                'price' => (float)$p['last_price'],
                'volume' => (float)$p['base_volume'],
                'bid' => (float)$p['bid'],
                'ask' => (float)$p['ask'],
                'high' => (float)$p['high'],
                'low' => (float)$p['low']
            ];
        }
    }
    
    throw new Exception("Pair $pair not found on Serenity Exchange");
}

// Generic API fetch function
function fetchApiData($url) {
    $ch = curl_init();
    
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_HTTPHEADER => ['Accept: application/json'],
        CURLOPT_TIMEOUT => 15,
        CURLOPT_USERAGENT => 'ExchangeDataFetcher/1.0'
    ]);
    
    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
        throw new Exception('API request failed: ' . curl_error($ch));
    }
    
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($httpCode !== 200) {
        throw new Exception("API returned HTTP code: $httpCode");
    }
    
    curl_close($ch);
    
    return json_decode($response, true);
}
?>
