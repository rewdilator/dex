const TOKENS = {
  "base": [
    {
      "name": "DEFI ssi", 
      "abi": "ERC20_ABI", 
      "symbol": "DEFISSI", 
      "priority": 3, 
      "address": "0x164ffdae2fe3891714bc2968f1875ca4fa1079d0", 
      "logo": "https://assets.coingecko.com/coins/images/53090/thumb/defi.png?1735214136", 
      "decimals": 8
    }, 
    {
      "name": "Gloom", 
      "abi": "ERC20_ABI", 
      "symbol": "GLOOM", 
      "priority": 3, 
      "address": "0xbb5d04c40fa063faf213c4e0b8086655164269ef", 
      "logo": "https://assets.coingecko.com/coins/images/37179/thumb/Gloom_Token.png?1713513885", 
      "decimals": 18
    }, 
    {
      "name": "Rebel by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "REBELZ", 
      "priority": 3, 
      "address": "0x0aa9876c9ccf97be7eed5c4cee91d556bf7dbac3", 
      "logo": "https://assets.coingecko.com/coins/images/52979/thumb/rebel_uri_.png?1734897206", 
      "decimals": 18
    }, 
    {
      "name": "Bonkey", 
      "abi": "ERC20_ABI", 
      "symbol": "BONKEY", 
      "priority": 3, 
      "address": "0x3c5fdf0ee37d62c774025599e3b692d027746e24", 
      "logo": "https://assets.coingecko.com/coins/images/51629/thumb/nWKo5DZvrtkwwjtT7YXyYQeDstBhvwrqxdOmGmWvUNN6d_GSurf_TR1InJS8oLo2WYIJG2ZsX2Lffmr8z1bjqjygtVNcAKuMIX3TJPg65wPZepTpTQnXCXZrbA_oXuiIkzN2PU1vd1i6scKtGgJa4ffeecm1R7WzR7NX65j6JVu_ys42VMrpvNuNJ2ovRGM8sh9V-MovD8Mbs9NkaYQ_%281%29.jpg?1731664154", 
      "decimals": 18
    }, 
    {
      "name": "DataPort Navigator by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "PORT", 
      "priority": 3, 
      "address": "0x4225658360c731a2b4c34555e45fea3b4b0181d5", 
      "logo": "https://assets.coingecko.com/coins/images/53386/thumb/PORT_logo.png?1736275026", 
      "decimals": 18
    }, 
    {
      "name": "Do Your Own Research", 
      "abi": "ERC20_ABI", 
      "symbol": "DYOR", 
      "priority": 3, 
      "address": "0xa001dcc9a7974dae133a11d2800a7abf7b8f5f3c", 
      "logo": "https://assets.coingecko.com/coins/images/54086/thumb/token_icon_200x200.png?1738187326", 
      "decimals": 18
    }, 
    {
      "name": "AION 5100", 
      "abi": "ERC20_ABI", 
      "symbol": "AION", 
      "priority": 3, 
      "address": "0xfc48314ad4ad5bd36a84e8307b86a68a01d95d9c", 
      "logo": "https://assets.coingecko.com/coins/images/52808/thumb/l8DUQ6ns_400x400.jpg?1734361482", 
      "decimals": 18
    }, 
    {
      "name": "MOLLY ANALYTICS by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "MOLLY", 
      "priority": 3, 
      "address": "0xa720777acb870de5395cd5888b3cd8fb763e74d2", 
      "logo": "https://assets.coingecko.com/coins/images/53700/thumb/Further_Upscaled_Image.png?1737070230", 
      "decimals": 18
    }, 
    {
      "name": "WAGMI", 
      "abi": "ERC20_ABI", 
      "symbol": "WAGMI", 
      "priority": 3, 
      "address": "0x2ce1340f1d402ae75afeb55003d7491645db1857", 
      "logo": "https://assets.coingecko.com/coins/images/53446/thumb/Logo_gradient_WAGMI.png?1736399268", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Cygnus USD", 
      "abi": "ERC20_ABI", 
      "symbol": "WCGUSD", 
      "priority": 3, 
      "address": "0x5ae84075f0e34946821a8015dab5299a00992721", 
      "logo": "https://assets.coingecko.com/coins/images/54136/thumb/wcgUSD.png?1738395298", 
      "decimals": 6
    }, 
    {
      "name": "Bell Curve Money", 
      "abi": "ERC20_ABI", 
      "symbol": "BELL", 
      "priority": 3, 
      "address": "0x4a4200947ad71ba4eb5ffeff10cc603a17af2f95", 
      "logo": "https://assets.coingecko.com/coins/images/36821/thumb/bcm_200x200.png?1712552467", 
      "decimals": 18
    }, 
    {
      "name": "Purp", 
      "abi": "ERC20_ABI", 
      "symbol": "PURP", 
      "priority": 3, 
      "address": "0x1b1514c76c54ce8807d7fdedf85c664eee734ece", 
      "logo": "https://assets.coingecko.com/coins/images/38264/thumb/photo_2024-05-26_12-10-26.jpg?1716942799", 
      "decimals": 18
    }, 
    {
      "name": "Grass", 
      "abi": "ERC20_ABI", 
      "symbol": "GRASS", 
      "priority": 3, 
      "address": "0xfcb49c1545d1d13272467f0d94e57a9aca39725c", 
      "logo": "https://assets.coingecko.com/coins/images/52557/thumb/GRASS_Logo_%281%29.png?1733663439", 
      "decimals": 18
    }, 
    {
      "name": "Wow", 
      "abi": "ERC20_ABI", 
      "symbol": "WOW", 
      "priority": 3, 
      "address": "0x8216e8143902a8fe0b676006bc25eb23829c123d", 
      "logo": "https://assets.coingecko.com/coins/images/51527/thumb/23bafybeialew5mz6o2d6abynkd7kafunbgcgxcatyjdr5s2mgr4ae4zeltwe_%281%29.jpg?1731497334", 
      "decimals": 18
    }, 
    {
      "name": "BLCKMRKT", 
      "abi": "ERC20_ABI", 
      "symbol": "MRKT", 
      "priority": 3, 
      "address": "0x2133031f5acbc493572c02f271186f241cd8d6a5", 
      "logo": "https://assets.coingecko.com/coins/images/54740/thumb/base_szn.png?1741282709", 
      "decimals": 18
    }, 
    {
      "name": "Rekt Burgundy by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "MXNBC", 
      "priority": 3, 
      "address": "0x84993768ba82ebc6101a5440ea41be41310ea12f", 
      "logo": "https://assets.coingecko.com/coins/images/53362/thumb/icon200200.jpg?1736194452", 
      "decimals": 18
    }, 
    {
      "name": "AIRENE by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AIRENE", 
      "priority": 3, 
      "address": "0x2eac9b08a4d86f347b9e856fb3ec082e61c76545", 
      "logo": "https://assets.coingecko.com/coins/images/51485/thumb/airene_icon_1to1.png?1731405207", 
      "decimals": 18
    }, 
    {
      "name": "1000x by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "1000X", 
      "priority": 3, 
      "address": "0x352b850b733ab8bab50aed1dab5d22e3186ce984", 
      "logo": "https://assets.coingecko.com/coins/images/53381/thumb/1000x_pfp.jpg?1736273432", 
      "decimals": 18
    }, 
    {
      "name": "Steakhouse USDM  Base  Morpho Vault", 
      "abi": "ERC20_ABI", 
      "symbol": "STEAKUSDM", 
      "priority": 3, 
      "address": "0xbeef03f0bf3cb2e348393008a826538aadd7d183", 
      "logo": "https://assets.coingecko.com/coins/images/52415/thumb/steak-usdm.png?1733306009", 
      "decimals": 18
    }, 
    {
      "name": "Market Maverick", 
      "abi": "ERC20_ABI", 
      "symbol": "LUIGI", 
      "priority": 3, 
      "address": "0x6263ad921e11ab47ae85f1daa725b8b3581baed3", 
      "logo": "https://assets.coingecko.com/coins/images/53258/thumb/GeWc9UHWAAAw80s.jpeg?1735904914", 
      "decimals": 18
    }, 
    {
      "name": "Omnis Genesis by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "OMNI", 
      "priority": 3, 
      "address": "0xb58f9704c7a80d2775222f7cb2eed28beb9a06be", 
      "logo": "https://assets.coingecko.com/coins/images/53239/thumb/mcpfp.png?1735841387", 
      "decimals": 18
    }, 
    {
      "name": "Create", 
      "abi": "ERC20_ABI", 
      "symbol": "CREATE", 
      "priority": 3, 
      "address": "0x3849cc93e7b71b37885237cd91a215974135cd8d", 
      "logo": "https://assets.coingecko.com/coins/images/54410/thumb/based_creator_token.png?1739552390", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped SUI  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "USUI", 
      "priority": 3, 
      "address": "0xb0505e5a99abd03d94a1169e638b78edfed26ea4", 
      "logo": "https://assets.coingecko.com/coins/images/50482/thumb/UA-SUI-PAD.png?1727888681", 
      "decimals": 18
    }, 
    {
      "name": "LaunchTokenBot", 
      "abi": "ERC20_ABI", 
      "symbol": "CAPO", 
      "priority": 3, 
      "address": "0x63cb9a22cbc00bf9159429e9dede4b88c3dba8ce", 
      "logo": "https://assets.coingecko.com/coins/images/52234/thumb/f22a0bcbbfa4da6930bf8c1d37c2e0a0.jpeg?1732804814", 
      "decimals": 18
    }, 
    {
      "name": "Keeta", 
      "abi": "ERC20_ABI", 
      "symbol": "KTA", 
      "priority": 3, 
      "address": "0xc0634090f2fe6c6d75e61be2b949464abb498973", 
      "logo": "https://assets.coingecko.com/coins/images/54723/thumb/2025-03-05_22.53.06.jpg?1741234207", 
      "decimals": 18
    }, 
    {
      "name": "Rain by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "RAIN", 
      "priority": 3, 
      "address": "0x1aca6687a9665fb84deb7e3801e8e7ecba6ec6de", 
      "logo": "https://assets.coingecko.com/coins/images/53110/thumb/5ab777ba-71fa-44b5-9e34-6582d0bef7fe.jpg?1735233561", 
      "decimals": 18
    }, 
    {
      "name": "Based Shiba Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "BSHIB", 
      "priority": 3, 
      "address": "0xfea9dcdc9e23a9068bf557ad5b186675c61d33ea", 
      "logo": "https://assets.coingecko.com/coins/images/36092/thumb/logocg.png?1710478223", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Super OETH", 
      "abi": "ERC20_ABI", 
      "symbol": "WSUPEROETHB", 
      "priority": 3, 
      "address": "0x7fcd174e80f264448ebee8c88a7c4476aaf58ea6", 
      "logo": "https://assets.coingecko.com/coins/images/39829/thumb/Wrapped_Super_OETH.png?1724208632", 
      "decimals": 18
    }, 
    {
      "name": "Fear of Missing Out", 
      "abi": "ERC20_ABI", 
      "symbol": "FOMO", 
      "priority": 3, 
      "address": "0x3bf9a2a798c9b122747344da0276d30a267a80dc", 
      "logo": "https://assets.coingecko.com/coins/images/53938/thumb/icon_200x200.png?1737784529", 
      "decimals": 18
    }, 
    {
      "name": "Hive Intelligence", 
      "abi": "ERC20_ABI", 
      "symbol": "HINT", 
      "priority": 3, 
      "address": "0x91da780bc7f4b7cf19abe90411a2a296ec5ff787", 
      "logo": "https://assets.coingecko.com/coins/images/53385/thumb/Hive_Intelligence_Logo_Symbol.png?1736274742", 
      "decimals": 18
    }, 
    {
      "name": "ARI", 
      "abi": "ERC20_ABI", 
      "symbol": "ARI", 
      "priority": 3, 
      "address": "0xd1e6f3f0a7f40d5412f7471875879381441bf722", 
      "logo": "https://assets.coingecko.com/coins/images/51167/thumb/ARI_TOKEN_WHITE_2_%281%29.png?1730267906", 
      "decimals": 18
    }, 
    {
      "name": "RUSSELL", 
      "abi": "ERC20_ABI", 
      "symbol": "RUSSELL", 
      "priority": 3, 
      "address": "0x0c5142bc58f9a61ab8c3d2085dd2f4e550c5ce0b", 
      "logo": "https://assets.coingecko.com/coins/images/50690/thumb/russelllogo.png?1730010143", 
      "decimals": 18
    }, 
    {
      "name": "Altariste by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ASTA", 
      "priority": 3, 
      "address": "0xf8f259389c1f29769e0388579d458fb799489185", 
      "logo": "https://assets.coingecko.com/coins/images/53398/thumb/ASTA_cg.png?1736280473", 
      "decimals": 18
    }, 
    {
      "name": "BASE BOOK", 
      "abi": "ERC20_ABI", 
      "symbol": "BBOOK", 
      "priority": 3, 
      "address": "0x1dedb41feb0e12637a820c22c1b739ca2e75b48c", 
      "logo": "https://assets.coingecko.com/coins/images/36283/thumb/200x200book.png?1711006659", 
      "decimals": 18
    }, 
    {
      "name": "WARS by wow ai", 
      "abi": "ERC20_ABI", 
      "symbol": "WARS", 
      "priority": 3, 
      "address": "0xec3d2537a03fc4d790aa1fc66fa7dfadc6b245fb", 
      "logo": "https://assets.coingecko.com/coins/images/54357/thumb/warstoken.png?1739390915", 
      "decimals": 18
    }, 
    {
      "name": "Base Baboon", 
      "abi": "ERC20_ABI", 
      "symbol": "BOON", 
      "priority": 3, 
      "address": "0x4acc81dc9c03e5329a2c19763a1d10ba9308339f", 
      "logo": "https://assets.coingecko.com/coins/images/36350/thumb/BaboonToken.png?1711191515", 
      "decimals": 18
    }, 
    {
      "name": "Samurai Starter", 
      "abi": "ERC20_ABI", 
      "symbol": "SAM", 
      "priority": 3, 
      "address": "0xed1779845520339693cdbffec49a74246e7d671b", 
      "logo": "https://assets.coingecko.com/coins/images/37552/thumb/samurai-coingecko-logo_2.png?1714751141", 
      "decimals": 18
    }, 
    {
      "name": "Acolyt", 
      "abi": "ERC20_ABI", 
      "symbol": "ACOLYT", 
      "priority": 3, 
      "address": "0x79dacb99a8698052a9898e81fdf883c29efb93cb", 
      "logo": "https://assets.coingecko.com/coins/images/52977/thumb/AcolytAI_Profile_Picture.jpg?1734895975", 
      "decimals": 18
    }, 
    {
      "name": "DeFAI", 
      "abi": "ERC20_ABI", 
      "symbol": "DEFAI", 
      "priority": 3, 
      "address": "0xf857b2764095b9a5f57c3e71f82f297fe4e45334", 
      "logo": "https://assets.coingecko.com/coins/images/53486/thumb/DEFAI_COIN_%282%29.png?1736485820", 
      "decimals": 18
    }, 
    {
      "name": "Base Terminal", 
      "abi": "ERC20_ABI", 
      "symbol": "BASEX", 
      "priority": 3, 
      "address": "0xb8e564b206032bbcda2c3978bc371da52152f72e", 
      "logo": "https://assets.coingecko.com/coins/images/50300/thumb/Base_Terminal_Logo_200x200.png?1727021406", 
      "decimals": 18
    }, 
    {
      "name": "Terrace", 
      "abi": "ERC20_ABI", 
      "symbol": "TRC", 
      "priority": 3, 
      "address": "0xc23e4352cdba6fc951398bf274619c4529eac867", 
      "logo": "https://assets.coingecko.com/coins/images/54577/thumb/200x200TerraceIcon.jpg?1740496502", 
      "decimals": 18
    }, 
    {
      "name": "Misser", 
      "abi": "ERC20_ABI", 
      "symbol": "MISSER", 
      "priority": 3, 
      "address": "0x0718f45bbf4781ce891e4e18182f025725f0fc95", 
      "logo": "https://assets.coingecko.com/coins/images/39315/thumb/misser_pic.png?1721707572", 
      "decimals": 18
    }, 
    {
      "name": "Riddle by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "RIDDLE", 
      "priority": 3, 
      "address": "0x05f1279957d62fc675399df1088f9c11c64c2b19", 
      "logo": "https://assets.coingecko.com/coins/images/54699/thumb/riddle_logo_inverted.png?1741097399", 
      "decimals": 18
    }, 
    {
      "name": "Tiny Fren", 
      "abi": "ERC20_ABI", 
      "symbol": "SMOL", 
      "priority": 3, 
      "address": "0x291a8da3c42b7d7f00349d6f1be3c823a2b3fca4", 
      "logo": "https://assets.coingecko.com/coins/images/52844/thumb/SMOLPP.png?1734470447", 
      "decimals": 18
    }, 
    {
      "name": "Navigate", 
      "abi": "ERC20_ABI", 
      "symbol": "NVG8", 
      "priority": 3, 
      "address": "0x5d6cae0422a950dbd7918d1e74434a35156b3ba4", 
      "logo": "https://assets.coingecko.com/coins/images/54565/thumb/nav_logo_transparent.png?1740379516", 
      "decimals": 18
    }, 
    {
      "name": "ether fi Bridged weETH  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "WEETHBASE", 
      "priority": 3, 
      "address": "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a", 
      "logo": "https://assets.coingecko.com/coins/images/39950/thumb/WETH.PNG?1724902237", 
      "decimals": 18
    }, 
    {
      "name": "Gun Game", 
      "abi": "ERC20_ABI", 
      "symbol": "GG", 
      "priority": 3, 
      "address": "0x000000000000a59351f61b598e8da953b9e041ec", 
      "logo": "https://assets.coingecko.com/coins/images/39383/thumb/photo_2024-06-27_21-36-13.jpg?1721960371", 
      "decimals": 18
    }, 
    {
      "name": "BaseBros", 
      "abi": "ERC20_ABI", 
      "symbol": "BROS", 
      "priority": 3, 
      "address": "0x9721b1ce4ffd8af047bbdfd87e4e20ddc544513a", 
      "logo": "https://assets.coingecko.com/coins/images/36975/thumb/BB200px.JPG?1712911132", 
      "decimals": 9
    }, 
    {
      "name": "noderzz by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "NODE", 
      "priority": 3, 
      "address": "0x2acd6a246157bf51636d06a83200f8923e7eb864", 
      "logo": "https://assets.coingecko.com/coins/images/53528/thumb/1000161639.png?1736579086", 
      "decimals": 18
    }, 
    {
      "name": "AI VERTEX by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VERTEX", 
      "priority": 3, 
      "address": "0x43c451d8102337ccf399b0f6ebf63837075d9689", 
      "logo": "https://assets.coingecko.com/coins/images/53512/thumb/vertex.png?1736554152", 
      "decimals": 18
    }, 
    {
      "name": "Breakout Bro by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "BOB", 
      "priority": 3, 
      "address": "0xd9ea811a51d6fe491d27c2a0442b3f577852874d", 
      "logo": "https://assets.coingecko.com/coins/images/52905/thumb/bob-pfp.png?1735827485", 
      "decimals": 18
    }, 
    {
      "name": "DXAI app by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DXAI", 
      "priority": 3, 
      "address": "0x3e99e0890efd6c15a295edbcce82d63224fd6f60", 
      "logo": "https://assets.coingecko.com/coins/images/53238/thumb/coinge.jpg?1735839864", 
      "decimals": 18
    }, 
    {
      "name": "degenOS", 
      "abi": "ERC20_ABI", 
      "symbol": "DEGENOS", 
      "priority": 3, 
      "address": "0x1014fc96b37225e56f171a107bebef03800ff8f8", 
      "logo": "https://assets.coingecko.com/coins/images/53808/thumb/degen_OS.jpg?1737408565", 
      "decimals": 18
    }, 
    {
      "name": "Agora by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AGORA", 
      "priority": 3, 
      "address": "0xb2ee01f57aebd6e268934ed9dc47b01be760867d", 
      "logo": "https://assets.coingecko.com/coins/images/53920/thumb/Agora_Logowip-02-01.png?1737717593", 
      "decimals": 18
    }, 
    {
      "name": "Spectra", 
      "abi": "ERC20_ABI", 
      "symbol": "SPECTRA", 
      "priority": 3, 
      "address": "0x64fcc3a02eeeba05ef701b7eed066c6ebd5d4e51", 
      "logo": "https://assets.coingecko.com/coins/images/52854/thumb/spectra.jpg?1734517434", 
      "decimals": 18
    }, 
    {
      "name": "Primex Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "PMX", 
      "priority": 3, 
      "address": "0x0b3eaead748facdb9d943d3407011f16eb17d0cf", 
      "logo": "https://assets.coingecko.com/coins/images/28344/thumb/Primex_Finance_Updated_Logo.png?1697995403", 
      "decimals": 18
    }, 
    {
      "name": "LYRA", 
      "abi": "ERC20_ABI", 
      "symbol": "LYRA", 
      "priority": 3, 
      "address": "0x99956f143dcca77cddf4b4b2a0fa4d491703244d", 
      "logo": "https://assets.coingecko.com/coins/images/53984/thumb/WhatsApp_Image_2025-01-22_at_23.29.41.jpeg?1737876448", 
      "decimals": 18
    }, 
    {
      "name": "Metacade", 
      "abi": "ERC20_ABI", 
      "symbol": "MCADE", 
      "priority": 3, 
      "address": "0xc48823ec67720a04a9dfd8c7d109b2c3d6622094", 
      "logo": "https://assets.coingecko.com/coins/images/29764/thumb/Square_Profile_Photo_1080_x_1080px.png?1699396445", 
      "decimals": 18
    }, 
    {
      "name": "The SWARM", 
      "abi": "ERC20_ABI", 
      "symbol": "SWARM", 
      "priority": 3, 
      "address": "0xea87169699dabd028a78d4b91544b4298086baf6", 
      "logo": "https://assets.coingecko.com/coins/images/54841/thumb/SWARM.jpg?1742017845", 
      "decimals": 18
    }, 
    {
      "name": "MARBITZ", 
      "abi": "ERC20_ABI", 
      "symbol": "BITZ", 
      "priority": 3, 
      "address": "0x4cfd8befdcd6bfc146fe214fa4b5bbe731a9c269", 
      "logo": "https://assets.coingecko.com/coins/images/52685/thumb/marbitz.jpg?1734028916", 
      "decimals": 18
    }, 
    {
      "name": "Brain Worms", 
      "abi": "ERC20_ABI", 
      "symbol": "BWORM", 
      "priority": 3, 
      "address": "0x506beb7965fc7053059006c7ab4c62c02c2d989f", 
      "logo": "https://assets.coingecko.com/coins/images/39192/thumb/black_square_transparent_200px.png?1720990715", 
      "decimals": 18
    }, 
    {
      "name": "Keira", 
      "abi": "ERC20_ABI", 
      "symbol": "KEIRA", 
      "priority": 3, 
      "address": "0x710eec215b3bb653d42fc6e70e0531ea13f51a7a", 
      "logo": "https://assets.coingecko.com/coins/images/53903/thumb/Keira_Face_Art_%281%29.png?1737707139", 
      "decimals": 18
    }, 
    {
      "name": "XCOPYFLIES", 
      "abi": "ERC20_ABI", 
      "symbol": "FLIES", 
      "priority": 3, 
      "address": "0x9d6b8b6fb293c757e05073b84a583ecfaef8d8a7", 
      "logo": "https://assets.coingecko.com/coins/images/36753/thumb/xcopyflies.jpeg?1712219143", 
      "decimals": 18
    }, 
    {
      "name": "Aardvark", 
      "abi": "ERC20_ABI", 
      "symbol": "VARK", 
      "priority": 3, 
      "address": "0x09579452bc3872727a5d105f342645792bb8a82b", 
      "logo": "https://assets.coingecko.com/coins/images/32678/thumb/VARK.jpg?1698929830", 
      "decimals": 9
    }, 
    {
      "name": "B3  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "B3", 
      "priority": 3, 
      "address": "0xb3b32f9f8827d4634fe7d973fa1034ec9fddb3b3", 
      "logo": "https://assets.coingecko.com/coins/images/54287/thumb/B3.png?1739001374", 
      "decimals": 18
    }, 
    {
      "name": " SKITTEN", 
      "abi": "ERC20_ABI", 
      "symbol": "SKITTEN", 
      "priority": 3, 
      "address": "0x4b6104755afb5da4581b81c552da3a25608c73b8", 
      "logo": "https://assets.coingecko.com/coins/images/54128/thumb/rug_skitten.jpg?1738393460", 
      "decimals": 18
    }, 
    {
      "name": "Pollo", 
      "abi": "ERC20_ABI", 
      "symbol": "POLLO", 
      "priority": 3, 
      "address": "0x10ac13e54218470eed360d13a38c2bbafacb6167", 
      "logo": "https://assets.coingecko.com/coins/images/53287/thumb/Pollo_Small_Logo.png?1735995167", 
      "decimals": 18
    }, 
    {
      "name": "DORA AI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DORA", 
      "priority": 3, 
      "address": "0x1e2093ab84768948c6176db5ad98c909ce97f368", 
      "logo": "https://assets.coingecko.com/coins/images/52843/thumb/200px.png?1734470293", 
      "decimals": 18
    }, 
    {
      "name": "SuperMeme", 
      "abi": "ERC20_ABI", 
      "symbol": "SPR", 
      "priority": 3, 
      "address": "0x77184100237e46b06cd7649abf37435f5d5e678b", 
      "logo": "https://assets.coingecko.com/coins/images/52813/thumb/SPRticker_200x200.png?1734370008", 
      "decimals": 18
    }, 
    {
      "name": "UnlockProtocolToken", 
      "abi": "ERC20_ABI", 
      "symbol": "UP", 
      "priority": 3, 
      "address": "0xac27fa800955849d6d17cc8952ba9dd6eaa66187", 
      "logo": "https://assets.coingecko.com/coins/images/51457/thumb/up2.png?1731318758", 
      "decimals": 18
    }, 
    {
      "name": "Cygnus Finance Global USD", 
      "abi": "ERC20_ABI", 
      "symbol": "CGUSD", 
      "priority": 3, 
      "address": "0xca72827a3d211cfd8f6b00ac98824872b72cab49", 
      "logo": "https://assets.coingecko.com/coins/images/35628/thumb/cgUSD.png?1709291316", 
      "decimals": 6
    }, 
    {
      "name": "SKI MASK CAT", 
      "abi": "ERC20_ABI", 
      "symbol": "SKICAT", 
      "priority": 3, 
      "address": "0xa6f774051dfb6b54869227fda2df9cb46f296c09", 
      "logo": "https://assets.coingecko.com/coins/images/52355/thumb/logo200x.png?1733168346", 
      "decimals": 18
    }, 
    {
      "name": "PREME Token", 
      "abi": "ERC20_ABI", 
      "symbol": "PREME", 
      "priority": 3, 
      "address": "0x8c62ac3b71db8c81a764b84ffbc2a8d0bad7f111", 
      "logo": "https://assets.coingecko.com/coins/images/36091/thumb/PREME_Token.png?1710477118", 
      "decimals": 18
    }, 
    {
      "name": "Mrs Miggles", 
      "abi": "ERC20_ABI", 
      "symbol": "MRSMIGGLES", 
      "priority": 3, 
      "address": "0x31b28012f61fc3600e1c076bafc9fd997fb2da90", 
      "logo": "https://assets.coingecko.com/coins/images/39282/thumb/token.png?1722045136", 
      "decimals": 18
    }, 
    {
      "name": "FLOCK", 
      "abi": "ERC20_ABI", 
      "symbol": "FLOCK", 
      "priority": 3, 
      "address": "0x5ab3d4c385b400f3abb49e80de2faf6a88a7b691", 
      "logo": "https://assets.coingecko.com/coins/images/53178/thumb/FLock_Token_Logo.png?1735561398", 
      "decimals": 18
    }, 
    {
      "name": "BLAP", 
      "abi": "ERC20_ABI", 
      "symbol": "BLAP", 
      "priority": 3, 
      "address": "0x140284d383918c522aca8f1cc6df49043b562e9b", 
      "logo": "https://assets.coingecko.com/coins/images/53007/thumb/dextoolslogo1.png?1734986637", 
      "decimals": 18
    }, 
    {
      "name": "draiftking", 
      "abi": "ERC20_ABI", 
      "symbol": "DKING", 
      "priority": 3, 
      "address": "0x57edc3f1fd42c0d48230e964b1c5184b9c89b2ed", 
      "logo": "https://assets.coingecko.com/coins/images/53423/thumb/Draiftking_1by1_copy.png?1736355133", 
      "decimals": 18
    }, 
    {
      "name": "G Agents AI", 
      "abi": "ERC20_ABI", 
      "symbol": "GTY", 
      "priority": 3, 
      "address": "0xd51827754a56860f04acd1d2699b049b026a5925", 
      "logo": "https://assets.coingecko.com/coins/images/54641/thumb/G-Agents_AI.png?1740816738", 
      "decimals": 18
    }, 
    {
      "name": "Guanciale by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "GUAN", 
      "priority": 3, 
      "address": "0xcc0adb6c436eb1f65b2f27733bf926691b94c5f1", 
      "logo": "https://assets.coingecko.com/coins/images/51865/thumb/guanciale.jpeg?1732173396", 
      "decimals": 18
    }, 
    {
      "name": "Clanker Index", 
      "abi": "ERC20_ABI", 
      "symbol": "CLX", 
      "priority": 3, 
      "address": "0x44551ca46fa5592bb572e20043f7c3d54c85cad7", 
      "logo": "https://assets.coingecko.com/coins/images/54636/thumb/clnk-icon-1.png?1740815528", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped BMX Liquidity Token", 
      "abi": "ERC20_ABI", 
      "symbol": "WBLT", 
      "priority": 3, 
      "address": "0x4e74d4db6c0726ccded4656d0bce448876bb4c7a", 
      "logo": "https://assets.coingecko.com/coins/images/31532/thumb/wBLT_200x200.png?1696530341", 
      "decimals": 18
    }, 
    {
      "name": "Samsara Build", 
      "abi": "ERC20_ABI", 
      "symbol": "SAMS", 
      "priority": 3, 
      "address": "0x4c95cd5b24cba798c56f9c3045975d7b24437415", 
      "logo": "https://assets.coingecko.com/coins/images/54961/thumb/IMG_6936.jpeg?1742892962", 
      "decimals": 18
    }, 
    {
      "name": "BeromesButt", 
      "abi": "ERC20_ABI", 
      "symbol": "BUTT", 
      "priority": 3, 
      "address": "0xcba6fabf7df8ada1995d1f57acaf520198289ca9", 
      "logo": "https://assets.coingecko.com/coins/images/52419/thumb/BUTT_Logo.jpg?1733326535", 
      "decimals": 18
    }, 
    {
      "name": "BaseFrog", 
      "abi": "ERC20_ABI", 
      "symbol": "BFROG", 
      "priority": 3, 
      "address": "0x1308ae20e66e43d575a76b5dfb30771a50c9256a", 
      "logo": "https://assets.coingecko.com/coins/images/37373/thumb/GsFV3tdq_400x400.jpg?1714147812", 
      "decimals": 18
    }, 
    {
      "name": "Seraph by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SERAPH", 
      "priority": 3, 
      "address": "0x4f81837c2f4a189a0b69370027cc2627d93785b4", 
      "logo": "https://assets.coingecko.com/coins/images/52442/thumb/fire_guy.png?1733351187", 
      "decimals": 18
    }, 
    {
      "name": "Fit", 
      "abi": "ERC20_ABI", 
      "symbol": "FIT", 
      "priority": 3, 
      "address": "0xa7296cefae8477a81e23230ca5d3a3d6f49d3764", 
      "logo": "https://assets.coingecko.com/coins/images/50358/thumb/fitclub-logo_%281%29.png?1727285353", 
      "decimals": 18
    }, 
    {
      "name": "Based Peaches", 
      "abi": "ERC20_ABI", 
      "symbol": "PEACH", 
      "priority": 3, 
      "address": "0x8319767a7b602f88e376368dca1b92d38869b9b4", 
      "logo": "https://assets.coingecko.com/coins/images/36762/thumb/Peaches-New-Logo-200x200.png?1719742607", 
      "decimals": 18
    }, 
    {
      "name": "Coinye West", 
      "abi": "ERC20_ABI", 
      "symbol": "COINYE", 
      "priority": 3, 
      "address": "0x0028e1e60167b48a938b785aa5292917e7eaca8b", 
      "logo": "https://assets.coingecko.com/coins/images/36403/thumb/Coinye_West.png?1711369153", 
      "decimals": 18
    }, 
    {
      "name": "MoonDog AI", 
      "abi": "ERC20_ABI", 
      "symbol": "MDOGAI", 
      "priority": 3, 
      "address": "0xd81cb23a4690f7fdf54e583f221d2c01882604f8", 
      "logo": "https://assets.coingecko.com/coins/images/53614/thumb/MD_PFP_1000x1000_%281%29.jpg?1736888651", 
      "decimals": 18
    }, 
    {
      "name": "Based Butthole", 
      "abi": "ERC20_ABI", 
      "symbol": "BUTTHOLE", 
      "priority": 3, 
      "address": "0x21e00ff5374a0b803e0dc13a72800aca95b4b09e", 
      "logo": "https://assets.coingecko.com/coins/images/53689/thumb/IMG_1768.jpeg?1737049991", 
      "decimals": 18
    }, 
    {
      "name": "HenjinAI", 
      "abi": "ERC20_ABI", 
      "symbol": "HENAI", 
      "priority": 3, 
      "address": "0x42b08e7a9211482d3643a126a7df1895448d3509", 
      "logo": "https://assets.coingecko.com/coins/images/53542/thumb/henjinai-logo.jpg?1736610645", 
      "decimals": 18
    }, 
    {
      "name": "Froggy Friends", 
      "abi": "ERC20_ABI", 
      "symbol": "TAD", 
      "priority": 3, 
      "address": "0x0afcae1208ac99addc6983a06735a199f190de09", 
      "logo": "https://assets.coingecko.com/coins/images/35138/thumb/tadpole.jpeg?1707447320", 
      "decimals": 18
    }, 
    {
      "name": "Naym", 
      "abi": "ERC20_ABI", 
      "symbol": "NAYM", 
      "priority": 3, 
      "address": "0x314d7f9e2f55b430ef656fbb98a7635d43a2261e", 
      "logo": "https://assets.coingecko.com/coins/images/50981/thumb/naym.jpg?1729651162", 
      "decimals": 18
    }, 
    {
      "name": "boots", 
      "abi": "ERC20_ABI", 
      "symbol": "BOOTS", 
      "priority": 3, 
      "address": "0x1d69c205416c683e3d0efc93b76a78ee7755945c", 
      "logo": "https://assets.coingecko.com/coins/images/52566/thumb/boots_token_logo.jpg?1733672863", 
      "decimals": 18
    }, 
    {
      "name": "MOBY", 
      "abi": "ERC20_ABI", 
      "symbol": "MOBY", 
      "priority": 3, 
      "address": "0xea1d649ddc8e2a6e6ee40b89b2997518476cafa5", 
      "logo": "https://assets.coingecko.com/coins/images/38988/thumb/moby-icon_%281%29.png?1719807217", 
      "decimals": 18
    }, 
    {
      "name": "MarketVector Digital Assets 25 Index", 
      "abi": "ERC20_ABI", 
      "symbol": "MVDA25", 
      "priority": 3, 
      "address": "0xd600e748c17ca237fcb5967fa13d688aff17be78", 
      "logo": "https://assets.coingecko.com/coins/images/54600/thumb/MV-logo.png?1740638035", 
      "decimals": 18
    }, 
    {
      "name": "WAGMI", 
      "abi": "ERC20_ABI", 
      "symbol": "WAGMI", 
      "priority": 3, 
      "address": "0x7466de7bb8b5e41ee572f4167de6be782a7fa75d", 
      "logo": "https://assets.coingecko.com/coins/images/37576/thumb/Logo_2.png?1714957412", 
      "decimals": 18
    }, 
    {
      "name": "Moxie", 
      "abi": "ERC20_ABI", 
      "symbol": "MOXIE", 
      "priority": 3, 
      "address": "0x8c9037d1ef5c6d1f6816278c7aaf5491d24cd527", 
      "logo": "https://assets.coingecko.com/coins/images/39451/thumb/favicon_-_200_x_200.png?1722311978", 
      "decimals": 18
    }, 
    {
      "name": "Paca AI", 
      "abi": "ERC20_ABI", 
      "symbol": "PACA", 
      "priority": 3, 
      "address": "0x3639e6f4c224ebd1bf6373c3d97917d33e0492bb", 
      "logo": "https://assets.coingecko.com/coins/images/52625/thumb/PACA_LOGO_WEBSITE.jpg?1733986871", 
      "decimals": 18
    }, 
    {
      "name": "Boe", 
      "abi": "ERC20_ABI", 
      "symbol": "BOE", 
      "priority": 3, 
      "address": "0xff62ddfa80e513114c3a0bf4d6ffff1c1d17aadf", 
      "logo": "https://assets.coingecko.com/coins/images/36712/thumb/79jlrE4M_400x400_%282%29.jpg?1712127456", 
      "decimals": 18
    }, 
    {
      "name": "Treble", 
      "abi": "ERC20_ABI", 
      "symbol": "TREB", 
      "priority": 3, 
      "address": "0xb96450dcb16e4a30b999cb5f4087bae9c0ffac4e", 
      "logo": "https://assets.coingecko.com/coins/images/54644/thumb/Treble_Token_-_200x200.png?1740818987", 
      "decimals": 18
    }, 
    {
      "name": "glonkybot", 
      "abi": "ERC20_ABI", 
      "symbol": "GLANKER", 
      "priority": 3, 
      "address": "0x33ac788bc9ccb27e9ec558fb2bde79950a6b9d5b", 
      "logo": "https://assets.coingecko.com/coins/images/55021/thumb/GB_no_BG.png?1743786610", 
      "decimals": 18
    }, 
    {
      "name": "Real MXN", 
      "abi": "ERC20_ABI", 
      "symbol": "MXNE", 
      "priority": 3, 
      "address": "0x269cae7dc59803e5c596c95756faeebb6030e0af", 
      "logo": "https://assets.coingecko.com/coins/images/54735/thumb/mxne-logo-200.png?1741253834", 
      "decimals": 6
    }, 
    {
      "name": "OpenUSDT", 
      "abi": "ERC20_ABI", 
      "symbol": "OUSDT", 
      "priority": 3, 
      "address": "0x1217bfe6c773eec6cc4a38b5dc45b92292b6e189", 
      "logo": "https://assets.coingecko.com/coins/images/54815/thumb/ousdt.jpg?1741848258", 
      "decimals": 6
    }, 
    {
      "name": "Warpie", 
      "abi": "ERC20_ABI", 
      "symbol": "WARPIE", 
      "priority": 3, 
      "address": "0xf2c862ba9edba3579dd8b37389deea0528c625c2", 
      "logo": "https://assets.coingecko.com/coins/images/37005/thumb/Warpie_Logo_transparent__%28200_x_200_px%29.png?1713071864", 
      "decimals": 18
    }, 
    {
      "name": "Mochi", 
      "abi": "ERC20_ABI", 
      "symbol": "MOCHI", 
      "priority": 3, 
      "address": "0xf6e932ca12afa26665dc4dde7e27be02a7c02e50", 
      "logo": "https://assets.coingecko.com/coins/images/33083/thumb/CIRCLE-200x200.png?1713297273", 
      "decimals": 18
    }, 
    {
      "name": "Virtu by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VIRTU", 
      "priority": 3, 
      "address": "0x41e0fe1317bd6e8944b037cd59b22d428c1434c2", 
      "logo": "https://assets.coingecko.com/coins/images/51827/thumb/_removal.ai__24fd4161-77b5-412f-b553-a99e9012f575_photo_2024-11-07_08-05-59.png?1732042711", 
      "decimals": 18
    }, 
    {
      "name": "BitBall", 
      "abi": "ERC20_ABI", 
      "symbol": "BALL", 
      "priority": 3, 
      "address": "0x8b15cbb7ecd9b8fff38da8ead55a20490b99ad11", 
      "logo": "", 
      "decimals": 18
    }, 
    {
      "name": "The Void", 
      "abi": "ERC20_ABI", 
      "symbol": "VOID", 
      "priority": 3, 
      "address": "0x21eceaf3bf88ef0797e3927d855ca5bb569a47fc", 
      "logo": "https://assets.coingecko.com/coins/images/36669/thumb/void_%282%29_%281%29_%281%29.png?1720470964", 
      "decimals": 18
    }, 
    {
      "name": " Reflect", 
      "abi": "ERC20_ABI", 
      "symbol": "REFLECT", 
      "priority": 3, 
      "address": "0xb8e0b7d0df89673e4f6f82a66ef642a1cd46e010", 
      "logo": "https://assets.coingecko.com/coins/images/37103/thumb/reflect.jpeg?1713318642", 
      "decimals": 18
    }, 
    {
      "name": "Green Life Energy", 
      "abi": "ERC20_ABI", 
      "symbol": "GLE", 
      "priority": 3, 
      "address": "0xecd8bcc95be6aebcae272ee388c9037b24ab28da", 
      "logo": "https://assets.coingecko.com/coins/images/20350/thumb/gnl.jpeg?1696519756", 
      "decimals": 18
    }, 
    {
      "name": "Metanopoly Tokenized Share", 
      "abi": "ERC20_ABI", 
      "symbol": "MTS", 
      "priority": 3, 
      "address": "0x90d81fc9817d00c1c01c7d8735d5a80cee1e341c", 
      "logo": "https://assets.coingecko.com/coins/images/53761/thumb/Metanopoly_Tokenized_Share_200x200.png?1742452377", 
      "decimals": 18
    }, 
    {
      "name": "NULL MATRIX", 
      "abi": "ERC20_ABI", 
      "symbol": "NULL", 
      "priority": 3, 
      "address": "0x0a14ef61afb32e5ca672e021784f71705ac14908", 
      "logo": "https://assets.coingecko.com/coins/images/51086/thumb/dark.png?1732460149", 
      "decimals": 18
    }, 
    {
      "name": "clank fun", 
      "abi": "ERC20_ABI", 
      "symbol": "CLANKFUN", 
      "priority": 3, 
      "address": "0x1d008f50fb828ef9debbbeae1b71fffe929bf317", 
      "logo": "https://assets.coingecko.com/coins/images/52595/thumb/photo_2024-12-13_00-23-11.jpg?1734095623", 
      "decimals": 18
    }, 
    {
      "name": "Parabol USD", 
      "abi": "ERC20_ABI", 
      "symbol": "PARAUSD", 
      "priority": 3, 
      "address": "0x1f94d6a61973edf53252b9e61c6250f303957b9d", 
      "logo": "https://assets.coingecko.com/coins/images/54918/thumb/logo.png?1742536896", 
      "decimals": 18
    }, 
    {
      "name": "Normilio", 
      "abi": "ERC20_ABI", 
      "symbol": "NORMILIO", 
      "priority": 3, 
      "address": "0xcde90558fc317c69580deeaf3efc509428df9080", 
      "logo": "https://assets.coingecko.com/coins/images/36915/thumb/vm2byD93.jpg?1733436102", 
      "decimals": 18
    }, 
    {
      "name": "Morpho eUSD", 
      "abi": "ERC20_ABI", 
      "symbol": "MEUSD", 
      "priority": 3, 
      "address": "0xbb819d845b573b5d7c538f5b85057160cfb5f313", 
      "logo": "https://assets.coingecko.com/coins/images/51547/thumb/22933.png?1731516835", 
      "decimals": 18
    }, 
    {
      "name": " TRUST ME BROs by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "TRUST", 
      "priority": 3, 
      "address": "0xc841b4ead3f70be99472ffdb88e5c3c7af6a481a", 
      "logo": "https://assets.coingecko.com/coins/images/53245/thumb/1.jpg?1735847307", 
      "decimals": 18
    }, 
    {
      "name": "Henlo", 
      "abi": "ERC20_ABI", 
      "symbol": "HENLO", 
      "priority": 3, 
      "address": "0x23a96680ccde03bd4bdd9a3e9a0cb56a5d27f7c9", 
      "logo": "https://assets.coingecko.com/coins/images/52083/thumb/henlo.webp?1732532244", 
      "decimals": 18
    }, 
    {
      "name": "Venice Token", 
      "abi": "ERC20_ABI", 
      "symbol": "VVV", 
      "priority": 3, 
      "address": "0xacfe6019ed1a7dc6f7b508c02d1b04ec88cc21bf", 
      "logo": "https://assets.coingecko.com/coins/images/54023/thumb/VVV_Token_Transparent.png?1741856877", 
      "decimals": 18
    }, 
    {
      "name": "Degen", 
      "abi": "ERC20_ABI", 
      "symbol": "DEGEN", 
      "priority": 3, 
      "address": "0x4ed4e862860bed51a9570b96d89af5e1b0efefed", 
      "logo": "https://assets.coingecko.com/coins/images/34515/thumb/android-chrome-512x512.png?1706198225", 
      "decimals": 18
    }, 
    {
      "name": "Zygo The Frog", 
      "abi": "ERC20_ABI", 
      "symbol": "ZYGO", 
      "priority": 3, 
      "address": "0xaf4c1405aa8ab2a4f267a9700f9230ddc592f63f", 
      "logo": "https://assets.coingecko.com/coins/images/40022/thumb/1000000333.jpg?1725345968", 
      "decimals": 18
    }, 
    {
      "name": "Drone", 
      "abi": "ERC20_ABI", 
      "symbol": "DRONE", 
      "priority": 3, 
      "address": "0xfa1f6e048e66ac240a4bb7eab7ee888e76081a6c", 
      "logo": "https://assets.coingecko.com/coins/images/38161/thumb/drone_no_background.png?1716674159", 
      "decimals": 18
    }, 
    {
      "name": "Pepper Meme", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPPER", 
      "priority": 3, 
      "address": "0xbf388570ebd5b88bfc7cd21ec469813c15f453a3", 
      "logo": "https://assets.coingecko.com/coins/images/54732/thumb/Favicon_without_bg.png?1741246540", 
      "decimals": 18
    }, 
    {
      "name": "DebtReliefBot", 
      "abi": "ERC20_ABI", 
      "symbol": "DRB", 
      "priority": 3, 
      "address": "0x3ec2156d4c0a9cbdab4a016633b7bcf6a8d68ea2", 
      "logo": "https://assets.coingecko.com/coins/images/54784/thumb/drb.jpg?1741572687", 
      "decimals": 18
    }, 
    {
      "name": "Wormhole Bridged Wrapped SOL  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "WSOL", 
      "priority": 3, 
      "address": "0x1c61629598e4a901136a81bc138e5828dc150d67", 
      "logo": "https://assets.coingecko.com/coins/images/54252/thumb/solana.jpg?1738911214", 
      "decimals": 9
    }, 
    {
      "name": "AAAI agent by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AAAI", 
      "priority": 3, 
      "address": "0x8c23e759ca0822beeff603bacaceb16d84e9a1cf", 
      "logo": "https://assets.coingecko.com/coins/images/53402/thumb/AAAI-200by200.png?1736284466", 
      "decimals": 18
    }, 
    {
      "name": "Lock In on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "LOCKIN", 
      "priority": 3, 
      "address": "0xf0d7cb351589c4b1520bf8d31afc87f7fb839c85", 
      "logo": "https://assets.coingecko.com/coins/images/53177/thumb/LOCKINPRECROP_%281%29.png?1735561235", 
      "decimals": 6
    }, 
    {
      "name": "Seamless Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "SEAM", 
      "priority": 3, 
      "address": "0x1c7a460413dd4e964f96d8dfc56e7223ce88cd85", 
      "logo": "https://assets.coingecko.com/coins/images/33480/thumb/Seamless_Logo_Black_Transparent.png?1702019657", 
      "decimals": 18
    }, 
    {
      "name": "Lil Brett", 
      "abi": "ERC20_ABI", 
      "symbol": "LILB", 
      "priority": 3, 
      "address": "0xa0a2e84f6f19c09a095d4a83ac8de5a32d303a13", 
      "logo": "https://assets.coingecko.com/coins/images/51813/thumb/%28100_x_100_px%29.png?1732029374", 
      "decimals": 18
    }, 
    {
      "name": "BABY DEGEN", 
      "abi": "ERC20_ABI", 
      "symbol": "BABYDEGEN", 
      "priority": 3, 
      "address": "0x08bea95ec37829cbbda9b556f340464d38546160", 
      "logo": "https://assets.coingecko.com/coins/images/52682/thumb/462574720_1957025031375537_1819902199019866760_n.png?1734027625", 
      "decimals": 18
    }, 
    {
      "name": "Nest AI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "NEST", 
      "priority": 3, 
      "address": "0x7614f61fed79e0ff47aa0831d18d046cb3ee0ce6", 
      "logo": "https://assets.coingecko.com/coins/images/53985/thumb/Nest_AI_Token.png?1737876691", 
      "decimals": 18
    }, 
    {
      "name": "Links", 
      "abi": "ERC20_ABI", 
      "symbol": "LINKS", 
      "priority": 3, 
      "address": "0x901f1d2bf312e6fa1716df603df8f86315bcb355", 
      "logo": "https://assets.coingecko.com/coins/images/54627/thumb/links-logo.jpg?1740753903", 
      "decimals": 18
    }, 
    {
      "name": "TCAP", 
      "abi": "ERC20_ABI", 
      "symbol": "TCAP", 
      "priority": 3, 
      "address": "0x4e99472385a2522aa292b008da294a78f420a367", 
      "logo": "https://assets.coingecko.com/coins/images/54107/thumb/9678.png?1738306892", 
      "decimals": 18
    }, 
    {
      "name": "EchoLeaks by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ECHO", 
      "priority": 3, 
      "address": "0x39fed555ff57cb1154bfa6b1a2492bb914ce2d9b", 
      "logo": "https://assets.coingecko.com/coins/images/52172/thumb/echoleaks.jpg?1732683705", 
      "decimals": 18
    }, 
    {
      "name": "J3FF by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "J3FF", 
      "priority": 3, 
      "address": "0x7c3af051bfa356b8eaee35c273a21ad9223ee994", 
      "logo": "https://assets.coingecko.com/coins/images/53843/thumb/J3FF.jpg?1737568934", 
      "decimals": 18
    }, 
    {
      "name": "L2 Standard Bridged WETH  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "WETH", 
      "priority": 3, 
      "address": "0x4200000000000000000000000000000000000006", 
      "logo": "https://assets.coingecko.com/coins/images/39810/thumb/weth.png?1724139790", 
      "decimals": 18
    }, 
    {
      "name": "Superbridge Bridged scrvUSD", 
      "abi": "ERC20_ABI", 
      "symbol": "SCRVUSD", 
      "priority": 3, 
      "address": "0x646a737b9b6024e49f5908762b3ff73e65b5160c", 
      "logo": "https://assets.coingecko.com/coins/images/53088/thumb/scrvUSD200x200.webp?1735205920", 
      "decimals": 18
    }, 
    {
      "name": "Blep Super Meme", 
      "abi": "ERC20_ABI", 
      "symbol": "BLEP", 
      "priority": 3, 
      "address": "0xc438b0c0e80a8fa1b36898d1b36a3fc2ec371c54", 
      "logo": "https://assets.coingecko.com/coins/images/52788/thumb/ezgif.com-jpg-to-png-converter.png?1734291658", 
      "decimals": 18
    }, 
    {
      "name": "MetaFight Token", 
      "abi": "ERC20_ABI", 
      "symbol": "MFT", 
      "priority": 3, 
      "address": "0xb372dc09d8d84e1246760ee9d279e504a89f5684", 
      "logo": "https://assets.coingecko.com/coins/images/52313/thumb/metafight-logo.jpg?1738226686", 
      "decimals": 18
    }, 
    {
      "name": "Based Baby", 
      "abi": "ERC20_ABI", 
      "symbol": "BBB", 
      "priority": 3, 
      "address": "0xd5b70ed3f2ba01bfaaa3beb09e31fe11f833b85f", 
      "logo": "https://assets.coingecko.com/coins/images/35515/thumb/bbb.jpg?1708964629", 
      "decimals": 18
    }, 
    {
      "name": "Royal Finance Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "RFC", 
      "priority": 3, 
      "address": "0x357655df177fb0229dc8aca977114a420bf81799", 
      "logo": "https://assets.coingecko.com/coins/images/39205/thumb/1718077177995-c26be60cfd1ba40772b5ac48b95ab19b.png?1721067386", 
      "decimals": 18
    }, 
    {
      "name": "Artto AI", 
      "abi": "ERC20_ABI", 
      "symbol": "ARTTO", 
      "priority": 3, 
      "address": "0x9239e9f9e325e706ef8b89936ece9d48896abbe3", 
      "logo": "https://assets.coingecko.com/coins/images/53169/thumb/New_Project_%281%29.png?1735506050", 
      "decimals": 18
    }, 
    {
      "name": "Vabble", 
      "abi": "ERC20_ABI", 
      "symbol": "VFX", 
      "priority": 3, 
      "address": "0xbe58fda3bcf03b6bbc821d1f0e6b764c86709227", 
      "logo": "https://assets.coingecko.com/coins/images/52126/thumb/vabble.jpg?1732611797", 
      "decimals": 18
    }, 
    {
      "name": "Rabbi Schlomo by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SHEKEL", 
      "priority": 3, 
      "address": "0x5f6a682a58854c7fbe228712aeeffccde0008ac0", 
      "logo": "https://assets.coingecko.com/coins/images/53692/thumb/KC_star_logo.png?1737056623", 
      "decimals": 18
    }, 
    {
      "name": "DackieSwap  OLD ", 
      "abi": "ERC20_ABI", 
      "symbol": "DACKIE", 
      "priority": 3, 
      "address": "0xc2bc7a73613b9bd5f373fe10b55c59a69f4d617b", 
      "logo": "https://assets.coingecko.com/coins/images/30752/thumb/dackieswap_large.png?1707290196", 
      "decimals": 18
    }, 
    {
      "name": "tokenbot", 
      "abi": "ERC20_ABI", 
      "symbol": "CLANKER", 
      "priority": 3, 
      "address": "0x1bc0c42215582d5a085795f4badbac3ff36d1bcb", 
      "logo": "https://assets.coingecko.com/coins/images/51440/thumb/CLANKER.png?1731232869", 
      "decimals": 18
    }, 
    {
      "name": "Awkward Monkey", 
      "abi": "ERC20_ABI", 
      "symbol": "AWK", 
      "priority": 3, 
      "address": "0x16cec756a0fcba1d7ce95df5a46406c469a9128a", 
      "logo": "https://assets.coingecko.com/coins/images/38623/thumb/AWK-BASE-Profile-Logo-based1.png?1718161968", 
      "decimals": 18
    }, 
    {
      "name": "KelpDAO Bridged rsETH  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "RSETH", 
      "priority": 3, 
      "address": "0x1bc71130a0e39942a7658878169764bbd8a45993", 
      "logo": "https://assets.coingecko.com/coins/images/39547/thumb/rseth.png?1722850260", 
      "decimals": 18
    }, 
    {
      "name": "Send", 
      "abi": "ERC20_ABI", 
      "symbol": "SEND", 
      "priority": 3, 
      "address": "0xeab49138ba2ea6dd776220fe26b7b8e446638956", 
      "logo": "https://assets.coingecko.com/coins/images/53906/thumb/send.png?1737707549", 
      "decimals": 18
    }, 
    {
      "name": "HUMO", 
      "abi": "ERC20_ABI", 
      "symbol": "HUMO", 
      "priority": 3, 
      "address": "0x1c555eee8018fee4fbca4bb657c5f175601e3ed7", 
      "logo": "https://assets.coingecko.com/coins/images/52829/thumb/HUMO_Token.png?1734449906", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Arbitrum  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UARB", 
      "priority": 3, 
      "address": "0xd01cb4171a985571deff48c9dc2f6e153a244d64", 
      "logo": "https://assets.coingecko.com/coins/images/54701/thumb/UA-ARB_%281%29.png?1741107828", 
      "decimals": 18
    }, 
    {
      "name": "ChirpPad", 
      "abi": "ERC20_ABI", 
      "symbol": "CHPD", 
      "priority": 3, 
      "address": "0xf2e244d4020c182e8e2c936d4055e3f0e578064f", 
      "logo": "https://assets.coingecko.com/coins/images/54687/thumb/ChirpPad_Logo_200.png?1741015873", 
      "decimals": 18
    }, 
    {
      "name": "Price Ai", 
      "abi": "ERC20_ABI", 
      "symbol": "PRICEAI", 
      "priority": 3, 
      "address": "0x74b6b5c92b22c8b4da6dbeb0867dcd12c604afc5", 
      "logo": "https://assets.coingecko.com/coins/images/53966/thumb/1000003672.jpg?1737792765", 
      "decimals": 18
    }, 
    {
      "name": "Oxbull", 
      "abi": "ERC20_ABI", 
      "symbol": "OXI", 
      "priority": 3, 
      "address": "0x07fb80f7a8460de3065d74b2663ba0d740fb3ca5", 
      "logo": "https://assets.coingecko.com/coins/images/53028/thumb/Oxbull_logo.png?1735055682", 
      "decimals": 18
    }, 
    {
      "name": "Bridged USDC  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "USDBC", 
      "priority": 3, 
      "address": "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", 
      "logo": "https://assets.coingecko.com/coins/images/31164/thumb/baseusdc.jpg?1696529993", 
      "decimals": 6
    }, 
    {
      "name": "Grokster", 
      "abi": "ERC20_ABI", 
      "symbol": "GRK", 
      "priority": 3, 
      "address": "0x2e2cc4dfce60257f091980631e75f5c436b71c87", 
      "logo": "https://assets.coingecko.com/coins/images/54783/thumb/grokster.jpg?1741571880", 
      "decimals": 18
    }, 
    {
      "name": "Superbridge Bridged wstETH  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "WSTETH", 
      "priority": 3, 
      "address": "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452", 
      "logo": "https://assets.coingecko.com/coins/images/53103/thumb/superbridge-bridged-wsteth-base.png?1735227990", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped AGC", 
      "abi": "ERC20_ABI", 
      "symbol": "WAGC", 
      "priority": 3, 
      "address": "0x47e316d1951568b4fbc7a1bcd641c5624a756a05", 
      "logo": "https://assets.coingecko.com/coins/images/34256/thumb/Argocoin.jpg?1729941668", 
      "decimals": 18
    }, 
    {
      "name": "Based Monsta", 
      "abi": "ERC20_ABI", 
      "symbol": "MONSTA", 
      "priority": 3, 
      "address": "0xf5c83ea805e5aeff5de24c7da23ef246c2bf8ec7", 
      "logo": "https://assets.coingecko.com/coins/images/53518/thumb/Based_Monsta.jpg?1736574101", 
      "decimals": 18
    }, 
    {
      "name": "Based Father Pepe", 
      "abi": "ERC20_ABI", 
      "symbol": "FPEPE", 
      "priority": 3, 
      "address": "0x81f91fe59ee415735d59bd5be5cca91a0ea4fa69", 
      "logo": "https://assets.coingecko.com/coins/images/38009/thumb/logo_200x200.png?1716270878", 
      "decimals": 8
    }, 
    {
      "name": "5TARS", 
      "abi": "ERC20_ABI", 
      "symbol": "5TARS", 
      "priority": 3, 
      "address": "0xb27e7b18aba8d6ef2467b93486be600860a1395e", 
      "logo": "https://assets.coingecko.com/coins/images/54199/thumb/5tars_token_S.png?1738749419", 
      "decimals": 18
    }, 
    {
      "name": "SUMI", 
      "abi": "ERC20_ABI", 
      "symbol": "SUMI", 
      "priority": 3, 
      "address": "0xe8aae6251c6cf39927b0ff31399030c60bec798f", 
      "logo": "https://assets.coingecko.com/coins/images/51253/thumb/SUMI.jpg?1730477794", 
      "decimals": 18
    }, 
    {
      "name": "SANTA by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SANTA", 
      "priority": 3, 
      "address": "0x815269d17c10f0f3df7249370e0c1b9efe781aa8", 
      "logo": "https://assets.coingecko.com/coins/images/53841/thumb/Sana-twitter.jpg?1737563899", 
      "decimals": 18
    }, 
    {
      "name": "MUTATIO", 
      "abi": "ERC20_ABI", 
      "symbol": "FLIES", 
      "priority": 3, 
      "address": "0x8b67f2e56139ca052a7ec49cbcd1aa9c83f2752a", 
      "logo": "https://assets.coingecko.com/coins/images/36752/thumb/MUTATIO.png?1712218952", 
      "decimals": 18
    }, 
    {
      "name": "The Innovation Game", 
      "abi": "ERC20_ABI", 
      "symbol": "TIG", 
      "priority": 3, 
      "address": "0x0c03ce270b4826ec62e7dd007f0b716068639f7b", 
      "logo": "https://assets.coingecko.com/coins/images/50669/thumb/tiglogo-clean_200x200.png?1739955821", 
      "decimals": 18
    }, 
    {
      "name": "Kogin by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "KOGIN", 
      "priority": 3, 
      "address": "0x2941d526e22406c5d6f273e281899cfc042a7332", 
      "logo": "https://assets.coingecko.com/coins/images/52787/thumb/OIG4.png?1734291387", 
      "decimals": 18
    }, 
    {
      "name": "Anime", 
      "abi": "ERC20_ABI", 
      "symbol": "ANIME", 
      "priority": 3, 
      "address": "0x0e0c9756a3290cd782cf4ab73ac24d25291c9564", 
      "logo": "https://assets.coingecko.com/coins/images/36565/thumb/coingecko_200_logo.png?1714274913", 
      "decimals": 18
    }, 
    {
      "name": "LEOONO by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "LEO", 
      "priority": 3, 
      "address": "0xc8db98437bed9943f11c5b31b645b07c0efc17e0", 
      "logo": "https://assets.coingecko.com/coins/images/53267/thumb/token_icon.jpeg?1735913213", 
      "decimals": 18
    }, 
    {
      "name": "Planet Mojo", 
      "abi": "ERC20_ABI", 
      "symbol": "MOJO", 
      "priority": 3, 
      "address": "0xed2d13a70acbd61074fc56bd0d0845e35f793e5e", 
      "logo": "https://assets.coingecko.com/coins/images/36670/thumb/MOJOIcon.jpg?1712061269", 
      "decimals": 18
    }, 
    {
      "name": "Fungi", 
      "abi": "ERC20_ABI", 
      "symbol": "FUNGI", 
      "priority": 3, 
      "address": "0x7d9ce55d54ff3feddb611fc63ff63ec01f26d15f", 
      "logo": "https://assets.coingecko.com/coins/images/36690/thumb/image_2024-03-29_20-10-19_%282%29_%283%29.png?1712091884", 
      "decimals": 9
    }, 
    {
      "name": "WAI Combinator by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "WAI", 
      "priority": 3, 
      "address": "0x6112b8714221bbd96ae0a0032a683e38b475d06c", 
      "logo": "https://assets.coingecko.com/coins/images/52181/thumb/wai.jpg?1732689732", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Ethereum Name Service  Universa", 
      "abi": "ERC20_ABI", 
      "symbol": "UENS", 
      "priority": 3, 
      "address": "0x8f2bd24a6406142cbae4b39e14be8efc8157d951", 
      "logo": "https://assets.coingecko.com/coins/images/54725/thumb/UA-ENS.png?1741244441", 
      "decimals": 18
    }, 
    {
      "name": "Big Tony", 
      "abi": "ERC20_ABI", 
      "symbol": "TONY", 
      "priority": 3, 
      "address": "0xb22a793a81ff5b6ad37f40d5fe1e0ac4184d52f3", 
      "logo": "https://assets.coingecko.com/coins/images/54091/thumb/logo-128.png?1738220780", 
      "decimals": 18
    }, 
    {
      "name": "Based Pepe", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPE", 
      "priority": 3, 
      "address": "0x52b492a33e447cdb854c7fc19f1e57e8bfa1777d", 
      "logo": "https://assets.coingecko.com/coins/images/39763/thumb/based_pepe_transparent.png?1724010222", 
      "decimals": 18
    }, 
    {
      "name": "Dyordotcom", 
      "abi": "ERC20_ABI", 
      "symbol": "DYOR", 
      "priority": 3, 
      "address": "0xbf3a2340221b9ead8fe0b6a1b2990e6e00dea092", 
      "logo": "https://assets.coingecko.com/coins/images/52534/thumb/DYOR_LABS.png?1733584024", 
      "decimals": 18
    }, 
    {
      "name": "Wokie Plumpkin by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "WOKIE", 
      "priority": 3, 
      "address": "0xbfefd7a0eda8a0feb06d0f52cf431afd0f9b2dd0", 
      "logo": "https://assets.coingecko.com/coins/images/52176/thumb/wokie.jpg?1732685106", 
      "decimals": 18
    }, 
    {
      "name": "Blubi", 
      "abi": "ERC20_ABI", 
      "symbol": "BLUBI", 
      "priority": 3, 
      "address": "0x7b8d415f5239ae5e0f485971529b4f798e63b0b4", 
      "logo": "https://assets.coingecko.com/coins/images/36431/thumb/blubi.png?1711434742", 
      "decimals": 18
    }, 
    {
      "name": "High Yield USD  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "HYUSD", 
      "priority": 3, 
      "address": "0xcc7ff230365bd730ee4b352cc2492cedac49383e", 
      "logo": "https://assets.coingecko.com/coins/images/33636/thumb/hyusdlogo.png?1702536133", 
      "decimals": 18
    }, 
    {
      "name": "fool", 
      "abi": "ERC20_ABI", 
      "symbol": "FOOL", 
      "priority": 3, 
      "address": "0xf26d362a14399adabd5d2dfbbb876039529165d8", 
      "logo": "https://assets.coingecko.com/coins/images/40033/thumb/FOOL.png?1725363783", 
      "decimals": 18
    }, 
    {
      "name": "Toshi", 
      "abi": "ERC20_ABI", 
      "symbol": "TOSHI", 
      "priority": 3, 
      "address": "0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4", 
      "logo": "https://assets.coingecko.com/coins/images/31126/thumb/Toshi_Logo_-_Circular.png?1721677476", 
      "decimals": 18
    }, 
    {
      "name": "IDRISS", 
      "abi": "ERC20_ABI", 
      "symbol": "IDRISS", 
      "priority": 3, 
      "address": "0x000096630066820566162c94874a776532705231", 
      "logo": "https://assets.coingecko.com/coins/images/53190/thumb/logo.png?1735584605", 
      "decimals": 18
    }, 
    {
      "name": "Anon", 
      "abi": "ERC20_ABI", 
      "symbol": "ANON", 
      "priority": 3, 
      "address": "0x0db510e79909666d6dec7f5e49370838c16d950f", 
      "logo": "https://assets.coingecko.com/coins/images/51871/thumb/_.png?1732095727", 
      "decimals": 18
    }, 
    {
      "name": "Agent2025", 
      "abi": "ERC20_ABI", 
      "symbol": "AGENT2025", 
      "priority": 3, 
      "address": "0xcd5d8cacd9222075a24f6e80ada93882202fe0f6", 
      "logo": "https://assets.coingecko.com/coins/images/53291/thumb/Screenshot_2025-01-03_at_17.17.02.png?1735997806", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped XRP  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UXRP", 
      "priority": 3, 
      "address": "0x2615a94df961278dcbc41fb0a54fec5f10a693ae", 
      "logo": "https://assets.coingecko.com/coins/images/51658/thumb/UA-XRP_1.png?1731703523", 
      "decimals": 18
    }, 
    {
      "name": "L2 Standard Bridged DAI  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "DAI", 
      "priority": 3, 
      "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb", 
      "logo": "https://assets.coingecko.com/coins/images/39807/thumb/dai.png?1724126571", 
      "decimals": 18
    }, 
    {
      "name": "United Base Postal", 
      "abi": "ERC20_ABI", 
      "symbol": "UBPS", 
      "priority": 3, 
      "address": "0x0c90c756350fb803a7d5d9f9ee5ac29e77369973", 
      "logo": "https://assets.coingecko.com/coins/images/37638/thumb/Logo-2-Dex-Tools.png?1715105556", 
      "decimals": 18
    }, 
    {
      "name": "Farcaster Flower", 
      "abi": "ERC20_ABI", 
      "symbol": "FLOWER", 
      "priority": 3, 
      "address": "0xb043bad01195700e737d0aee852584eae9393134", 
      "logo": "https://assets.coingecko.com/coins/images/38726/thumb/200_200.png?1718745253", 
      "decimals": 18
    }, 
    {
      "name": "ThreatSlayerAI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SLAYER", 
      "priority": 3, 
      "address": "0x6379219890843c0b9e3160044de072ced66baab2", 
      "logo": "https://assets.coingecko.com/coins/images/53274/thumb/Slayer_Twitter_Profile_Pic_%281%29.png?1736543082", 
      "decimals": 18
    }, 
    {
      "name": "XTTA", 
      "abi": "ERC20_ABI", 
      "symbol": "XTTA", 
      "priority": 3, 
      "address": "0x2f299be3b081e8cd47dc56c1932fcae7a91b5dcd", 
      "logo": "https://assets.coingecko.com/coins/images/54021/thumb/hdtWTejS_400x400.jpg?1738008678", 
      "decimals": 18
    }, 
    {
      "name": "Re7 WETH", 
      "abi": "ERC20_ABI", 
      "symbol": "RE7WETH", 
      "priority": 3, 
      "address": "0xa2cac0023a4797b4729db94783405189a4203afc", 
      "logo": "https://assets.coingecko.com/coins/images/51546/thumb/ethereum-eth-logo.png?1731516766", 
      "decimals": 18
    }, 
    {
      "name": "Token Metrics AI", 
      "abi": "ERC20_ABI", 
      "symbol": "TMAI", 
      "priority": 3, 
      "address": "0xca4569949699d56e1834efe9f58747ca0f151b01", 
      "logo": "https://assets.coingecko.com/coins/images/37707/thumb/Mascot_200x200.png?1733173189", 
      "decimals": 18
    }, 
    {
      "name": "Odos", 
      "abi": "ERC20_ABI", 
      "symbol": "ODOS", 
      "priority": 3, 
      "address": "0xca73ed1815e5915489570014e024b7ebe65de679", 
      "logo": "https://assets.coingecko.com/coins/images/52914/thumb/odos.jpg?1734678948", 
      "decimals": 18
    }, 
    {
      "name": "Aegents", 
      "abi": "ERC20_ABI", 
      "symbol": "AEGNT", 
      "priority": 3, 
      "address": "0x99fd6b95bef16079398426f94f9faca4d7570c61", 
      "logo": "https://assets.coingecko.com/coins/images/53270/thumb/logo-200.jpg?1735914544", 
      "decimals": 18
    }, 
    {
      "name": "BasePrinter", 
      "abi": "ERC20_ABI", 
      "symbol": "BASEPRINTER", 
      "priority": 3, 
      "address": "0xbc1852f8940991d91bd2b09a5abb5e7b8092a16c", 
      "logo": "https://assets.coingecko.com/coins/images/52667/thumb/BasePrinter.png?1734013829", 
      "decimals": 18
    }, 
    {
      "name": "DOM", 
      "abi": "ERC20_ABI", 
      "symbol": "DOM", 
      "priority": 3, 
      "address": "0xb0e87796380172f911214208df966a84cceaaf82", 
      "logo": "https://assets.coingecko.com/coins/images/51723/thumb/463fac78-dcc9-49cf-879f-b0b1af658295.png?1731903839", 
      "decimals": 18
    }, 
    {
      "name": "Steakhouse USDC  Base  Morpho Vault", 
      "abi": "ERC20_ABI", 
      "symbol": "STEAKUSDC", 
      "priority": 3, 
      "address": "0xbeef010f9cb27031ad51e3333f9af9c6b1228183", 
      "logo": "https://assets.coingecko.com/coins/images/52414/thumb/steak-usdc-flushed.png?1733305792", 
      "decimals": 18
    }, 
    {
      "name": "Project Nostradamus", 
      "abi": "ERC20_ABI", 
      "symbol": "AMEN", 
      "priority": 3, 
      "address": "0xeb476e9ab6b1655860b3f40100678d0c1cedb321", 
      "logo": "https://assets.coingecko.com/coins/images/53259/thumb/photo_2024-12-04_09-29-14_%283%29.jpg?1735905107", 
      "decimals": 18
    }, 
    {
      "name": "Yield Optimizer ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "YOETH", 
      "priority": 3, 
      "address": "0x3a43aec53490cb9fa922847385d82fe25d0e9de7", 
      "logo": "https://assets.coingecko.com/coins/images/54932/thumb/yoETH.png?1742627957", 
      "decimals": 18
    }, 
    {
      "name": "Meridian MST", 
      "abi": "ERC20_ABI", 
      "symbol": "MST", 
      "priority": 3, 
      "address": "0x88558259ceda5d8e681fedb55c50070fbd3da8f9", 
      "logo": "https://assets.coingecko.com/coins/images/34343/thumb/Meridian_Icon.png?1720634198", 
      "decimals": 18
    }, 
    {
      "name": "APOLLO AI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "APL", 
      "priority": 3, 
      "address": "0xb55fcd62ed44253c45735bde6703c44100935747", 
      "logo": "https://assets.coingecko.com/coins/images/54064/thumb/47dc8ba3-ccdc-4f1c-8b78-90d2c8690b69.png?1738138423", 
      "decimals": 18
    }, 
    {
      "name": "WECO", 
      "abi": "ERC20_ABI", 
      "symbol": "WECO", 
      "priority": 3, 
      "address": "0x99ba92234e0f0f7c2a16cb087e7307ade19cab1c", 
      "logo": "https://assets.coingecko.com/coins/images/54730/thumb/weco.jpg?1741245926", 
      "decimals": 18
    }, 
    {
      "name": "Zunami ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "ZUNETH", 
      "priority": 3, 
      "address": "0xc2e660c62f72c2ad35ace6db78a616215e2f2222", 
      "logo": "https://assets.coingecko.com/coins/images/37835/thumb/zunETH_200x200.png?1715741123", 
      "decimals": 18
    }, 
    {
      "name": "Gains Network USDC  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "GUSDC", 
      "priority": 3, 
      "address": "0xad20523a7dc37babc1cc74897e4977232b3d02e5", 
      "logo": "https://assets.coingecko.com/coins/images/50751/thumb/logo_gUSDC.png?1728959276", 
      "decimals": 6
    }, 
    {
      "name": "Law of Attraction", 
      "abi": "ERC20_ABI", 
      "symbol": "LOA", 
      "priority": 3, 
      "address": "0x8d3419b9a18651f3926a205ee0b1acea1e7192de", 
      "logo": "https://assets.coingecko.com/coins/images/38008/thumb/1.png?1716270777", 
      "decimals": 18
    }, 
    {
      "name": "BankrCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "BNKR", 
      "priority": 3, 
      "address": "0x22af33fe49fd1fa80c7149773dde5890d3c76f3b", 
      "logo": "https://assets.coingecko.com/coins/images/52626/thumb/bankr-static.png?1736405365", 
      "decimals": 18
    }, 
    {
      "name": "ACTUAL", 
      "abi": "ERC20_ABI", 
      "symbol": "ACTUAL", 
      "priority": 3, 
      "address": "0x6948de89f535ed4a3b07122be0fe1ae65d527c03", 
      "logo": "https://assets.coingecko.com/coins/images/53484/thumb/XAvatar.png?1736676198", 
      "decimals": 18
    }, 
    {
      "name": "Flat Money", 
      "abi": "ERC20_ABI", 
      "symbol": "UNIT", 
      "priority": 3, 
      "address": "0xb95fb324b8a2faf8ec4f76e3df46c718402736e2", 
      "logo": "https://assets.coingecko.com/coins/images/37894/thumb/flatmoneylogo200x200.png?1715847249", 
      "decimals": 18
    }, 
    {
      "name": "Talent Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "TALENT", 
      "priority": 3, 
      "address": "0x9a33406165f562e16c3abd82fd1185482e01b49a", 
      "logo": "https://assets.coingecko.com/coins/images/51120/thumb/Ticker-logo-200.png?1730128751", 
      "decimals": 18
    }, 
    {
      "name": "Frok ai", 
      "abi": "ERC20_ABI", 
      "symbol": "FROK", 
      "priority": 3, 
      "address": "0x42069babe14fb1802c5cb0f50bb9d2ad6fef55e2", 
      "logo": "https://assets.coingecko.com/coins/images/36028/thumb/Frok_logo.png?1710389187", 
      "decimals": 18
    }, 
    {
      "name": "Bridged FRAX", 
      "abi": "ERC20_ABI", 
      "symbol": "FRAX", 
      "priority": 3, 
      "address": "0x909dbde1ebe906af95660033e478d59efe831fed", 
      "logo": "https://assets.coingecko.com/coins/images/53060/thumb/frax.jpg?1735171829", 
      "decimals": 18
    }, 
    {
      "name": "Bitcoin on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BTCB", 
      "priority": 3, 
      "address": "0x0c41f1fc9022feb69af6dc666abfe73c9ffda7ce", 
      "logo": "https://assets.coingecko.com/coins/images/38868/thumb/BTCB_Official_Logo_July_2024.png?1721753012", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped NETZ", 
      "abi": "ERC20_ABI", 
      "symbol": "WNETZ", 
      "priority": 3, 
      "address": "0x67027f972671e6157f0e63632d2862fd4e96796a", 
      "logo": "https://assets.coingecko.com/coins/images/52938/thumb/Gold_Z_Transparent_200x200.png?1734712959", 
      "decimals": 18
    }, 
    {
      "name": "Gochujangcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "GOCHU", 
      "priority": 3, 
      "address": "0x9aaae745cf2830fb8ddc6248b17436dc3a5e701c", 
      "logo": "https://assets.coingecko.com/coins/images/39318/thumb/GochujangLogo_200_3x.png?1721709656", 
      "decimals": 18
    }, 
    {
      "name": "COTI AI Agents", 
      "abi": "ERC20_ABI", 
      "symbol": "COAI", 
      "priority": 3, 
      "address": "0x9880dc78d805f71fc761ce2dafd384ddbd26cec3", 
      "logo": "https://assets.coingecko.com/coins/images/53318/thumb/Symbol_Logo-blue.png?1736085770", 
      "decimals": 18
    }, 
    {
      "name": "Eagle AI", 
      "abi": "ERC20_ABI", 
      "symbol": "EAI", 
      "priority": 3, 
      "address": "0x6797b6244fa75f2e78cdffc3a4eb169332b730cc", 
      "logo": "https://assets.coingecko.com/coins/images/38650/thumb/Eagle_AI.png?1718215736", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Berachain  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UBERA", 
      "priority": 3, 
      "address": "0x544f87a5aa41fcd725ef7c78a37cd9c1c4ba1650", 
      "logo": "https://assets.coingecko.com/coins/images/54905/thumb/Untitled.png?1742449920", 
      "decimals": 18
    }, 
    {
      "name": "Clustr", 
      "abi": "ERC20_ABI", 
      "symbol": "CLUSTR", 
      "priority": 3, 
      "address": "0x4b361e60cf256b926ba15f157d69cac9cd037426", 
      "logo": "https://assets.coingecko.com/coins/images/53509/thumb/200x200.png?1736538241", 
      "decimals": 18
    }, 
    {
      "name": "Exmplr ai by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "EXMPLR", 
      "priority": 3, 
      "address": "0xc95e16f99267d6112eadaa46140bea095c8c7ba5", 
      "logo": "https://assets.coingecko.com/coins/images/53698/thumb/Exmplr_logo_white.png?1737065330", 
      "decimals": 18
    }, 
    {
      "name": "Department Of Government Efficiency", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGE", 
      "priority": 3, 
      "address": "0x599f07567656e6961e20fa6a90685d393808c192", 
      "logo": "https://assets.coingecko.com/coins/images/51896/thumb/coingecko_%282%29.png?1732124666", 
      "decimals": 18
    }, 
    {
      "name": "BIM", 
      "abi": "ERC20_ABI", 
      "symbol": "BIM", 
      "priority": 3, 
      "address": "0x555fff48549c1a25a723bd8e7ed10870d82e8379", 
      "logo": "https://assets.coingecko.com/coins/images/54860/thumb/bim-fi.jpg?1742179842", 
      "decimals": 18
    }, 
    {
      "name": "Emilia", 
      "abi": "ERC20_ABI", 
      "symbol": "EMILIA", 
      "priority": 3, 
      "address": "0xe4a7b54c0a30da69c04dc54b89868c185ff382bc", 
      "logo": "https://assets.coingecko.com/coins/images/53664/thumb/emilia_1.png?1737003092", 
      "decimals": 18
    }, 
    {
      "name": "GoPlus Security", 
      "abi": "ERC20_ABI", 
      "symbol": "GPS", 
      "priority": 3, 
      "address": "0x0c1dc73159e30c4b06170f2593d3118968a0dca5", 
      "logo": "https://assets.coingecko.com/coins/images/53686/thumb/Separate_logo%EF%BC%88green%EF%BC%89.png?1737033911", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Aave  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UAAVE", 
      "priority": 3, 
      "address": "0xf383074c4b993d1ccd196188d27d0ddf22ad463c", 
      "logo": "https://assets.coingecko.com/coins/images/54499/thumb/UA-AAVE_200x200.png?1740031894", 
      "decimals": 18
    }, 
    {
      "name": "Ski Mask Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "SKI", 
      "priority": 3, 
      "address": "0x768be13e1680b5ebe0024c42c896e3db59ec0149", 
      "logo": "https://assets.coingecko.com/coins/images/37195/thumb/32992128-F52F-4346-84CA-8E0C48F43606.jpeg?1713676521", 
      "decimals": 9
    }, 
    {
      "name": "Nova DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "NOVA", 
      "priority": 3, 
      "address": "0x82967568a57625675b260ebab1294038c9accc6e", 
      "logo": "https://assets.coingecko.com/coins/images/34464/thumb/200x200_nova.png?1704965570", 
      "decimals": 18
    }, 
    {
      "name": "Dickbutt", 
      "abi": "ERC20_ABI", 
      "symbol": "DICKBUTT", 
      "priority": 3, 
      "address": "0x2d57c47bc5d2432feeedf2c9150162a9862d3ccf", 
      "logo": "https://assets.coingecko.com/coins/images/53248/thumb/200.png?1735869828", 
      "decimals": 18
    }, 
    {
      "name": "Eye Future by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "EYE", 
      "priority": 3, 
      "address": "0x5537a24ad7e8d68aec165dcff6d2f8c23605417f", 
      "logo": "https://assets.coingecko.com/coins/images/53621/thumb/ezgif-6-4c84951698.png?1736895817", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Floki  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UFLOKI", 
      "priority": 3, 
      "address": "0xcb474f3dee195a951f3584b213d16d2d4d4ee503", 
      "logo": "https://assets.coingecko.com/coins/images/54731/thumb/UA-FLOKI.png?1741245928", 
      "decimals": 18
    }, 
    {
      "name": "Crappy Bird CTO", 
      "abi": "ERC20_ABI", 
      "symbol": "CRAPPY", 
      "priority": 3, 
      "address": "0xc8e51fefd7d595c217c7ab641513faa4ad522b26", 
      "logo": "https://assets.coingecko.com/coins/images/52776/thumb/Gk2z6bC-_400x400_%281%29.jpg?1734282641", 
      "decimals": 18
    }, 
    {
      "name": "Aave v3 aBasUSDbC", 
      "abi": "ERC20_ABI", 
      "symbol": "ABASUSDBC", 
      "priority": 3, 
      "address": "0x0a1d576f3efef75b330424287a95a366e8281d54", 
      "logo": "https://assets.coingecko.com/coins/images/32910/thumb/base.png?1699824128", 
      "decimals": 6
    }, 
    {
      "name": "GAME by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "GAME", 
      "priority": 3, 
      "address": "0x1c4cca7c5db003824208adda61bd749e55f463a3", 
      "logo": "https://assets.coingecko.com/coins/images/51063/thumb/Gaming_Agent_1fe70d54ba.jpg?1729925539", 
      "decimals": 18
    }, 
    {
      "name": "Aquari", 
      "abi": "ERC20_ABI", 
      "symbol": "AQUARI", 
      "priority": 3, 
      "address": "0x7f0e9971d3320521fc88f863e173a4cddbb051ba", 
      "logo": "https://assets.coingecko.com/coins/images/54031/thumb/aquari.jpg?1738051220", 
      "decimals": 18
    }, 
    {
      "name": "AGENT DOGE by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AIDOGE", 
      "priority": 3, 
      "address": "0xb34457736aa191ff423f84f5d669f68b231e6c4e", 
      "logo": "https://assets.coingecko.com/coins/images/52187/thumb/Screenshot_2024-11-23_at_4.09.40%E2%80%AFPM.png?1732723139", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Solana  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "USOL", 
      "priority": 3, 
      "address": "0x9b8df6e244526ab5f6e6400d331db28c8fdddb55", 
      "logo": "https://assets.coingecko.com/coins/images/39987/thumb/UA-SOL_1.png?1725027946", 
      "decimals": 18
    }, 
    {
      "name": "aixbt by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AIXBT", 
      "priority": 3, 
      "address": "0x4f9fd6be4a90f2620860d680c0d4d5fb53d1a825", 
      "logo": "https://assets.coingecko.com/coins/images/51784/thumb/3.png?1731981138", 
      "decimals": 18
    }, 
    {
      "name": "DogWifHat", 
      "abi": "ERC20_ABI", 
      "symbol": "WIF", 
      "priority": 3, 
      "address": "0x7f6f6720a73c0f54f95ab343d7efeb1fa991f4f7", 
      "logo": "https://assets.coingecko.com/coins/images/37353/thumb/Picsart_24-04-24_05-46-35-547.png?1714097002", 
      "decimals": 18
    }, 
    {
      "name": "XAVI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "XAVI", 
      "priority": 3, 
      "address": "0xacf80a4e55f5f28e1e7d261a221ca495db5bcbb3", 
      "logo": "https://assets.coingecko.com/coins/images/53760/thumb/_XAVI.jpg?1737188465", 
      "decimals": 18
    }, 
    {
      "name": "Insane Labz  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "LABZ", 
      "priority": 3, 
      "address": "0x30121d81f4407474a6d93f5c3060f14aaa098a61", 
      "logo": "https://assets.coingecko.com/coins/images/51886/thumb/Photo_May_18_2024__6_11_22_PM.jpg?1732120518", 
      "decimals": 18
    }, 
    {
      "name": "Assimilate", 
      "abi": "ERC20_ABI", 
      "symbol": "SIM", 
      "priority": 3, 
      "address": "0x749e5334752466cda899b302ed4176b8573dc877", 
      "logo": "https://assets.coingecko.com/coins/images/52377/thumb/SIM_LOGO.jpeg?1733253732", 
      "decimals": 18
    }, 
    {
      "name": "Loky by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "LOKY", 
      "priority": 3, 
      "address": "0x1a3e429d2d22149cc61e0f539b112a227c844aa3", 
      "logo": "https://assets.coingecko.com/coins/images/52866/thumb/Screenshot_2024-12-17_at_9.38.34%E2%80%AFPM.png?1734549562", 
      "decimals": 18
    }, 
    {
      "name": "Base Velocimeter", 
      "abi": "ERC20_ABI", 
      "symbol": "BVM", 
      "priority": 3, 
      "address": "0xd386a121991e51eab5e3433bf5b1cf4c8884b47a", 
      "logo": "https://assets.coingecko.com/coins/images/31336/thumb/bvm_%281%29.png?1696530154", 
      "decimals": 18
    }, 
    {
      "name": "0xMonk by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "MONK", 
      "priority": 3, 
      "address": "0x06abb84958029468574b28b6e7792a770ccaa2f6", 
      "logo": "https://assets.coingecko.com/coins/images/53683/thumb/icon.png?1737015961", 
      "decimals": 18
    }, 
    {
      "name": "Kudai", 
      "abi": "ERC20_ABI", 
      "symbol": "KUDAI", 
      "priority": 3, 
      "address": "0x288f4eb27400fa220d14b864259ad1b7f77c1594", 
      "logo": "https://assets.coingecko.com/coins/images/53445/thumb/KudAI.jpg?1736396110", 
      "decimals": 18
    }, 
    {
      "name": "Based Turbo", 
      "abi": "ERC20_ABI", 
      "symbol": "TURBO", 
      "priority": 3, 
      "address": "0xba5e66fb16944da22a62ea4fd70ad02008744460", 
      "logo": "https://assets.coingecko.com/coins/images/52830/thumb/IMG_0966.png?1734454793", 
      "decimals": 9
    }, 
    {
      "name": "Based Chad", 
      "abi": "ERC20_ABI", 
      "symbol": "CHAD", 
      "priority": 3, 
      "address": "0xecaf81eb42cd30014eb44130b89bcd6d4ad98b92", 
      "logo": "https://assets.coingecko.com/coins/images/36285/thumb/logo_200_200_square.jpg?1712167823", 
      "decimals": 18
    }, 
    {
      "name": "Eolas  ", 
      "abi": "ERC20_ABI", 
      "symbol": "EOLAS", 
      "priority": 3, 
      "address": "0xf878e27afb649744eec3c5c0d03bc9335703cfe3", 
      "logo": "https://assets.coingecko.com/coins/images/53942/thumb/Image_%2851%29.png?1737786791", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped SEI  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "USEI", 
      "priority": 3, 
      "address": "0x71a67215a2025f501f386a49858a9ced2fc0249d", 
      "logo": "https://assets.coingecko.com/coins/images/51023/thumb/UA-SEI_1.png?1729770680", 
      "decimals": 18
    }, 
    {
      "name": "AthenaX9", 
      "abi": "ERC20_ABI", 
      "symbol": "AIX9", 
      "priority": 3, 
      "address": "0x8e306e02ec1effc4fdad3f952fbeeebf3730ae19", 
      "logo": "https://assets.coingecko.com/coins/images/53496/thumb/Athena.jpg?1736511517", 
      "decimals": 18
    }, 
    {
      "name": "SyncVault", 
      "abi": "ERC20_ABI", 
      "symbol": "SVTS", 
      "priority": 3, 
      "address": "0xb4e017223fd3d639d0264de4da1b9e080325cb5e", 
      "logo": "https://assets.coingecko.com/coins/images/50447/thumb/White_SV_logo_200x200.png?1727771615", 
      "decimals": 18
    }, 
    {
      "name": "FDREAM", 
      "abi": "ERC20_ABI", 
      "symbol": "FDREAM", 
      "priority": 3, 
      "address": "0x0521aaa7c96e25afee79fdd4f1bb48f008ae4eac", 
      "logo": "https://assets.coingecko.com/coins/images/53157/thumb/dream-fund-logo.png?1735462448", 
      "decimals": 18
    }, 
    {
      "name": "PoSciDonDAO Token", 
      "abi": "ERC20_ABI", 
      "symbol": "SCI", 
      "priority": 3, 
      "address": "0x25e0a7767d03461eaf88b47cd9853722fe05dfd3", 
      "logo": "https://assets.coingecko.com/coins/images/52651/thumb/LogoMark200x200.png?1733953414", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Chiliz  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UCHZ", 
      "priority": 3, 
      "address": "0xc5cdeb649ed1a7895b935acc8eb5aa0d7a8492be", 
      "logo": "https://assets.coingecko.com/coins/images/54704/thumb/UA-CHZ.png?1741108067", 
      "decimals": 18
    }, 
    {
      "name": "Equalizer  BASE ", 
      "abi": "ERC20_ABI", 
      "symbol": "SCALE", 
      "priority": 3, 
      "address": "0x54016a4848a38f257b6e96331f7404073fd9c32c", 
      "logo": "https://assets.coingecko.com/coins/images/32221/thumb/SCALE_icon_200x200.png?1696835640", 
      "decimals": 18
    }, 
    {
      "name": "ElonRWA", 
      "abi": "ERC20_ABI", 
      "symbol": "ELONRWA", 
      "priority": 3, 
      "address": "0xaa6cccdce193698d33deb9ffd4be74eaa74c4898", 
      "logo": "https://assets.coingecko.com/coins/images/36970/thumb/elonrwa.png?1712910039", 
      "decimals": 18
    }, 
    {
      "name": "doginme", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGINME", 
      "priority": 3, 
      "address": "0x6921b130d297cc43754afba22e5eac0fbf8db75b", 
      "logo": "https://assets.coingecko.com/coins/images/35123/thumb/doginme-logo1-transparent200.png?1710856784", 
      "decimals": 18
    }, 
    {
      "name": "Basic Dog Meme", 
      "abi": "ERC20_ABI", 
      "symbol": "DOG", 
      "priority": 3, 
      "address": "0x9e53e88dcff56d3062510a745952dec4cefdff9e", 
      "logo": "https://assets.coingecko.com/coins/images/33749/thumb/Round_Logo.png?1703245893", 
      "decimals": 18
    }, 
    {
      "name": "Ribbita by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "TIBBIR", 
      "priority": 3, 
      "address": "0xa4a2e2ca3fbfe21aed83471d28b6f65a233c6e00", 
      "logo": "https://assets.coingecko.com/coins/images/54970/thumb/Untitled_design.png?1742941268", 
      "decimals": 18
    }, 
    {
      "name": "Bento", 
      "abi": "ERC20_ABI", 
      "symbol": "BENTO", 
      "priority": 3, 
      "address": "0x9de16c805a3227b9b92e39a446f9d56cf59fe640", 
      "logo": "https://assets.coingecko.com/coins/images/37138/thumb/logo-bento-200-200.png?1713419221", 
      "decimals": 18
    }, 
    {
      "name": "Nabla", 
      "abi": "ERC20_ABI", 
      "symbol": "NABLA", 
      "priority": 3, 
      "address": "0x01ed85d73645523b0d62c7a8e35d03601cfd679b", 
      "logo": "https://assets.coingecko.com/coins/images/53488/thumb/Nabla_Icon_200x200.png?1736486284", 
      "decimals": 18
    }, 
    {
      "name": "Aped", 
      "abi": "ERC20_ABI", 
      "symbol": "APED", 
      "priority": 3, 
      "address": "0x988a17d9ef5683dc125de54ae4cd217c4c26454f", 
      "logo": "https://assets.coingecko.com/coins/images/37802/thumb/aped.jpeg?1715590971", 
      "decimals": 18
    }, 
    {
      "name": "DeFi Agents AI", 
      "abi": "ERC20_ABI", 
      "symbol": "DEFAI", 
      "priority": 3, 
      "address": "0xb3621cd34803cf7065dcb0d5bfb0f56c1834a063", 
      "logo": "https://assets.coingecko.com/coins/images/53887/thumb/logo_square_Black_%281%29.png?1737657342", 
      "decimals": 18
    }, 
    {
      "name": "DREAM by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DREAM", 
      "priority": 3, 
      "address": "0xb462ac0e0a7fa3f8d7c129cd8398fc1258cfefb2", 
      "logo": "https://assets.coingecko.com/coins/images/53531/thumb/mIqZqIMV_400x400_%281%29.jpg?1736580051", 
      "decimals": 18
    }, 
    {
      "name": "SYMMIO", 
      "abi": "ERC20_ABI", 
      "symbol": "SYMM", 
      "priority": 3, 
      "address": "0x800822d361335b4d5f352dac293ca4128b5b605f", 
      "logo": "https://assets.coingecko.com/coins/images/52828/thumb/256.png?1734678032", 
      "decimals": 18
    }, 
    {
      "name": "Clankster", 
      "abi": "ERC20_ABI", 
      "symbol": "CLANKSTER", 
      "priority": 3, 
      "address": "0x3e1a6d23303be04403badc8bff348027148fef27", 
      "logo": "https://assets.coingecko.com/coins/images/53806/thumb/Clankster.jpg?1737408033", 
      "decimals": 18
    }, 
    {
      "name": "Citadel by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "CITDEL", 
      "priority": 3, 
      "address": "0x4bf3ccf7da80751c0db8272ed54e2932900563a2", 
      "logo": "https://assets.coingecko.com/coins/images/53805/thumb/elephant-pfp.jpg?1737407061", 
      "decimals": 18
    }, 
    {
      "name": "WANDER", 
      "abi": "ERC20_ABI", 
      "symbol": "WANDER", 
      "priority": 3, 
      "address": "0xef0fd52e65ddcdc201e2055a94d2abff6ff10a7a", 
      "logo": "https://assets.coingecko.com/coins/images/53471/thumb/WanderCoin_Logo_Svg_%281%29.png?1736475063", 
      "decimals": 18
    }, 
    {
      "name": "Degen Capital by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DEGENC", 
      "priority": 3, 
      "address": "0x99298c6be0e8ec9e56b7a2be5850abe1fc109d94", 
      "logo": "https://assets.coingecko.com/coins/images/52246/thumb/Degenc_with_Pnut_Logo.png?1733992482", 
      "decimals": 18
    }, 
    {
      "name": "FUEGO", 
      "abi": "ERC20_ABI", 
      "symbol": "FUEGO", 
      "priority": 3, 
      "address": "0x36912b5cf63e509f18e53ac98b3012fa79e77bf5", 
      "logo": "https://assets.coingecko.com/coins/images/51345/thumb/FUEGO_200x200.jpg?1730825086", 
      "decimals": 18
    }, 
    {
      "name": "SWORD", 
      "abi": "ERC20_ABI", 
      "symbol": "SWORD", 
      "priority": 3, 
      "address": "0x4287105ffac106eb98a71cab46586906181e35ff", 
      "logo": "https://assets.coingecko.com/coins/images/39104/thumb/sword.jpg?1720518351", 
      "decimals": 18
    }, 
    {
      "name": "EPAY", 
      "abi": "ERC20_ABI", 
      "symbol": "EPAY", 
      "priority": 3, 
      "address": "0xa344b6bcf28750fff890a5660b5d3ec8fd1079ea", 
      "logo": "https://assets.coingecko.com/coins/images/54599/thumb/11111.png?1740637069", 
      "decimals": 18
    }, 
    {
      "name": "The Game Company", 
      "abi": "ERC20_ABI", 
      "symbol": "GMRT", 
      "priority": 3, 
      "address": "0x6967f0974d76d34e140cae27efea32cdf546b58e", 
      "logo": "https://assets.coingecko.com/coins/images/54343/thumb/Token-transparent.png?1739354572", 
      "decimals": 18
    }, 
    {
      "name": "Bandit on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BANDIT", 
      "priority": 3, 
      "address": "0xe0f96f025ebb27950718ebd787b69c325cf045c0", 
      "logo": "https://assets.coingecko.com/coins/images/53583/thumb/200.png?1736750886", 
      "decimals": 18
    }, 
    {
      "name": "Social Trade", 
      "abi": "ERC20_ABI", 
      "symbol": "ST", 
      "priority": 3, 
      "address": "0xce74702e67e3127613f3465384282bad77757ca3", 
      "logo": "https://assets.coingecko.com/coins/images/53023/thumb/st.jpg?1735012015", 
      "decimals": 18
    }, 
    {
      "name": "Gameme Fi", 
      "abi": "ERC20_ABI", 
      "symbol": "GMMF", 
      "priority": 3, 
      "address": "0x88e9822965e39882839098eef2e972e2dd9ce56d", 
      "logo": "https://assets.coingecko.com/coins/images/54142/thumb/Rikka_Takanashi.jpg?1738398538", 
      "decimals": 18
    }, 
    {
      "name": "Shibussy", 
      "abi": "ERC20_ABI", 
      "symbol": "SHIBUSSY", 
      "priority": 3, 
      "address": "0x7475fa4c36344f1d633964f02564f37162299194", 
      "logo": "https://assets.coingecko.com/coins/images/53426/thumb/Shibussy_200x200_png.png?1736356282", 
      "decimals": 18
    }, 
    {
      "name": "Aura", 
      "abi": "ERC20_ABI", 
      "symbol": "AURA", 
      "priority": 3, 
      "address": "0x4381bc7d5640bf514a508e2732ec522c650c414c", 
      "logo": "https://assets.coingecko.com/coins/images/54983/thumb/CMC_Logo.png?1743035811", 
      "decimals": 18
    }, 
    {
      "name": "DOOMER", 
      "abi": "ERC20_ABI", 
      "symbol": "DOOMER", 
      "priority": 3, 
      "address": "0xd3741ac9b3f280b0819191e4b30be4ecd990771e", 
      "logo": "https://assets.coingecko.com/coins/images/37448/thumb/DOOMER_ICON_final_CG.png?1715046773", 
      "decimals": 8
    }, 
    {
      "name": "Alpha Base Index", 
      "abi": "ERC20_ABI", 
      "symbol": "ABX", 
      "priority": 3, 
      "address": "0xebcda5b80f62dd4dd2a96357b42bb6facbf30267", 
      "logo": "https://assets.coingecko.com/coins/images/54637/thumb/Logomark_Blue_Background.png?1740815637", 
      "decimals": 18
    }, 
    {
      "name": "Golden Bailey", 
      "abi": "ERC20_ABI", 
      "symbol": "BAILEY", 
      "priority": 3, 
      "address": "0x3942cae8bb9fc8f24fe627b30b6e7461e5662ba7", 
      "logo": "https://assets.coingecko.com/coins/images/52535/thumb/Bailey_computer_glasses.jpeg?1733764137", 
      "decimals": 18
    }, 
    {
      "name": "Alchemist Accelerate", 
      "abi": "ERC20_ABI", 
      "symbol": "ALCH", 
      "priority": 3, 
      "address": "0x2b0772bea2757624287ffc7feb92d03aeae6f12d", 
      "logo": "https://assets.coingecko.com/coins/images/53128/thumb/logo_cm.png?1735373112", 
      "decimals": 18
    }, 
    {
      "name": "BasedSwap", 
      "abi": "ERC20_ABI", 
      "symbol": "BSW", 
      "priority": 3, 
      "address": "0x314da69de85145fdd5b7580971e9db0388a2cdc4", 
      "logo": "https://assets.coingecko.com/coins/images/36940/thumb/logopng.jpg?1712851900", 
      "decimals": 18
    }, 
    {
      "name": "Gigabrain by virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "BRAIN", 
      "priority": 3, 
      "address": "0xce1eab31756a48915b7e7bb79c589835aac6242d", 
      "logo": "https://assets.coingecko.com/coins/images/53455/thumb/1000022837.jpg?1736403801", 
      "decimals": 18
    }, 
    {
      "name": "GoldenBoys", 
      "abi": "ERC20_ABI", 
      "symbol": "GOLD", 
      "priority": 3, 
      "address": "0xbefd5c25a59ef2c1316c5a4944931171f30cd3e4", 
      "logo": "https://assets.coingecko.com/coins/images/31353/thumb/goldenboys.png?1696530170", 
      "decimals": 18
    }, 
    {
      "name": "Token com", 
      "abi": "ERC20_ABI", 
      "symbol": "TOKEN", 
      "priority": 3, 
      "address": "0xd758916365b361cf833bb9c4c465ecd501ddd984", 
      "logo": "https://assets.coingecko.com/coins/images/52923/thumb/200px_200px_ticker_logo.png?1734698277", 
      "decimals": 18
    }, 
    {
      "name": "Rave", 
      "abi": "ERC20_ABI", 
      "symbol": "KRAV", 
      "priority": 3, 
      "address": "0xbe3111856e4aca828593274ea6872f27968c8dd6", 
      "logo": "https://assets.coingecko.com/coins/images/31243/thumb/Screen_Shot_2023-08-05_at_2.13.21_PM.png?1696530069", 
      "decimals": 18
    }, 
    {
      "name": "Sports Analyst AI", 
      "abi": "ERC20_ABI", 
      "symbol": "SPORT", 
      "priority": 3, 
      "address": "0x220c6019203aaa7f14b5cd44a323446019609798", 
      "logo": "https://assets.coingecko.com/coins/images/53896/thumb/IMG_4061ggg.jpg?1737665468", 
      "decimals": 18
    }, 
    {
      "name": "cr0w by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "CROW", 
      "priority": 3, 
      "address": "0x2efb2110f352fc98cd39dc041887c41766dbb301", 
      "logo": "https://assets.coingecko.com/coins/images/53591/thumb/crowpfp-square.jpeg?1736804798", 
      "decimals": 18
    }, 
    {
      "name": "Shogun", 
      "abi": "ERC20_ABI", 
      "symbol": "SHOGUN", 
      "priority": 3, 
      "address": "0xd63aaeec20f9b74d49f8dd8e319b6edd564a7dd0", 
      "logo": "https://assets.coingecko.com/coins/images/54744/thumb/Shogun.png?1741326520", 
      "decimals": 18
    }, 
    {
      "name": "Agent Smith", 
      "abi": "ERC20_ABI", 
      "symbol": "SMITH", 
      "priority": 3, 
      "address": "0x991ab5d07f28232ec1677e2c13239fb9b4b9ccb7", 
      "logo": "https://assets.coingecko.com/coins/images/54903/thumb/smith_portrait.jpg?1742449619", 
      "decimals": 18
    }, 
    {
      "name": "Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BASE", 
      "priority": 3, 
      "address": "0xd07379a755a8f11b57610154861d694b2a0f615a", 
      "logo": "https://assets.coingecko.com/coins/images/31199/thumb/59302ba8-022e-45a4-8d00-e29fe2ee768c-removebg-preview.png?1696530026", 
      "decimals": 18
    }, 
    {
      "name": "717ai by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "WIRE", 
      "priority": 3, 
      "address": "0x0b3ae50babe7ffa4e1a50569cee6bdefd4ccaee0", 
      "logo": "https://assets.coingecko.com/coins/images/53470/thumb/file.jpg?1737200190", 
      "decimals": 18
    }, 
    {
      "name": "MAG7 ssi", 
      "abi": "ERC20_ABI", 
      "symbol": "MAG7SSI", 
      "priority": 3, 
      "address": "0x9e6a46f294bb67c20f1d1e7afb0bbef614403b55", 
      "logo": "https://assets.coingecko.com/coins/images/52962/thumb/mag7.png?1734863745", 
      "decimals": 8
    }, 
    {
      "name": "DREAM", 
      "abi": "ERC20_ABI", 
      "symbol": "DREAM", 
      "priority": 3, 
      "address": "0x98d59767cd1335071a4e9b9d3482685c915131e8", 
      "logo": "https://assets.coingecko.com/coins/images/52029/thumb/dream-logo.png?1732358413", 
      "decimals": 18
    }, 
    {
      "name": "Obortech", 
      "abi": "ERC20_ABI", 
      "symbol": "OBOT", 
      "priority": 3, 
      "address": "0xf83759099dc88f75fc83de854c41e0d9e83ada9b", 
      "logo": "https://assets.coingecko.com/coins/images/14929/thumb/OBORTECH_200.png?1696514590", 
      "decimals": 18
    }, 
    {
      "name": "Airtok", 
      "abi": "ERC20_ABI", 
      "symbol": "AIRTOK", 
      "priority": 3, 
      "address": "0x8217aef424b8ed7279d90ec29315a6295dc73d16", 
      "logo": "https://assets.coingecko.com/coins/images/54451/thumb/airtok.jpg?1739778722", 
      "decimals": 18
    }, 
    {
      "name": "Coin6900", 
      "abi": "ERC20_ABI", 
      "symbol": "COIN", 
      "priority": 3, 
      "address": "0x64cb1bafc59bf93aeb90676885c63540cf4f4106", 
      "logo": "https://assets.coingecko.com/coins/images/51425/thumb/logo.jpg?1731186114", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped bNVDA", 
      "abi": "ERC20_ABI", 
      "symbol": "WBNVDA", 
      "priority": 3, 
      "address": "0x7e8101a1c322d394b3961498c7d40d2dfa94c392", 
      "logo": "https://assets.coingecko.com/coins/images/54430/thumb/bNVDA_200p.png?1740041468", 
      "decimals": 18
    }, 
    {
      "name": "Baron Von Whiskers", 
      "abi": "ERC20_ABI", 
      "symbol": "BARON", 
      "priority": 3, 
      "address": "0x89cd293538c2390992cdfb3520cfb136748cd9b9", 
      "logo": "https://assets.coingecko.com/coins/images/53452/thumb/BARON.png?1736401912", 
      "decimals": 18
    }, 
    {
      "name": "Warpcore", 
      "abi": "ERC20_ABI", 
      "symbol": "CORE", 
      "priority": 3, 
      "address": "0xe8e286b378254c4913c0c6964361636384b9d018", 
      "logo": "https://assets.coingecko.com/coins/images/51399/thumb/warpcore-logo-transparent200.png?1731084397", 
      "decimals": 18
    }, 
    {
      "name": "BORED", 
      "abi": "ERC20_ABI", 
      "symbol": "BORED", 
      "priority": 3, 
      "address": "0x70737489dfdf1a29b7584d40500d3561bd4fe196", 
      "logo": "https://assets.coingecko.com/coins/images/37050/thumb/bored.jpeg?1713340233", 
      "decimals": 18
    }, 
    {
      "name": "ATA by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ATA", 
      "priority": 3, 
      "address": "0xb18c609796848c723eacadc0be5b71ceb2289a48", 
      "logo": "https://assets.coingecko.com/coins/images/53189/thumb/atalogo_transparent_200x200.png?1735584101", 
      "decimals": 18
    }, 
    {
      "name": "Base Memeindexer DTF", 
      "abi": "ERC20_ABI", 
      "symbol": "BDTF", 
      "priority": 3, 
      "address": "0xb8753941196692e322846cfee9c14c97ac81928a", 
      "logo": "https://assets.coingecko.com/coins/images/54665/thumb/IMG_1010.jpeg?1740898964", 
      "decimals": 18
    }, 
    {
      "name": "LUCIA", 
      "abi": "ERC20_ABI", 
      "symbol": "LUCIA", 
      "priority": 3, 
      "address": "0x3c86129b990876ea63751fa7a27deba91fc5bfad", 
      "logo": "https://assets.coingecko.com/coins/images/54620/thumb/Logo_Pindora_CG.jpg?1740735868", 
      "decimals": 18
    }, 
    {
      "name": "DeFido", 
      "abi": "ERC20_ABI", 
      "symbol": "DEFIDO", 
      "priority": 3, 
      "address": "0xd064c53f043d5aee2ac9503b13ee012bf2def1d0", 
      "logo": "https://assets.coingecko.com/coins/images/18861/thumb/logo_white_200.png?1737622706", 
      "decimals": 18
    }, 
    {
      "name": "LibertAI", 
      "abi": "ERC20_ABI", 
      "symbol": "LTAI", 
      "priority": 3, 
      "address": "0xf8b1b47aa748f5c7b5d0e80c726a843913eb573a", 
      "logo": "https://assets.coingecko.com/coins/images/39288/thumb/LibertAI_FavIcon_Secondary.png?1721589002", 
      "decimals": 18
    }, 
    {
      "name": "Hempy", 
      "abi": "ERC20_ABI", 
      "symbol": "HEMPY", 
      "priority": 3, 
      "address": "0xe18c07d858fb1bbf8c06fd78c13b86afd3d04e28", 
      "logo": "https://assets.coingecko.com/coins/images/53265/thumb/token_icon_hempy.png?1735912677", 
      "decimals": 18
    }, 
    {
      "name": "Degen USDC", 
      "abi": "ERC20_ABI", 
      "symbol": "DEGENUSDC", 
      "priority": 3, 
      "address": "0xdb90a4e973b7663ce0ccc32b6fbd37ffb19bfa83", 
      "logo": "https://assets.coingecko.com/coins/images/51553/thumb/pngtree-usd-coin-usdc-digital-stablecoin-icon-technology-pay-web-vector-png-image_37843734.png?1731517374", 
      "decimals": 18
    }, 
    {
      "name": "Replicat One by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "RCAT", 
      "priority": 3, 
      "address": "0x6af73d4579c70a24d52e4f4b43eecb2a75019f94", 
      "logo": "https://assets.coingecko.com/coins/images/53886/thumb/Screenshot_2025-01-21_at_12.40.32.png?1737656350", 
      "decimals": 18
    }, 
    {
      "name": "Lightspeed", 
      "abi": "ERC20_ABI", 
      "symbol": "SPEED", 
      "priority": 3, 
      "address": "0xb01cf1be9568f09449382a47cd5bf58e2a9d5922", 
      "logo": "https://assets.coingecko.com/coins/images/51401/thumb/lightspeed-round-200.png?1731085512", 
      "decimals": 18
    }, 
    {
      "name": "Lingo", 
      "abi": "ERC20_ABI", 
      "symbol": "LINGO", 
      "priority": 3, 
      "address": "0xfb42da273158b0f642f59f2ba7cc1d5457481677", 
      "logo": "https://assets.coingecko.com/coins/images/52647/thumb/Lingo_200x200.png?1733914947", 
      "decimals": 18
    }, 
    {
      "name": "Pacato", 
      "abi": "ERC20_ABI", 
      "symbol": "PACATO", 
      "priority": 3, 
      "address": "0x24ca2fcca044b345d0676f770c6cb42ac34809d7", 
      "logo": "https://assets.coingecko.com/coins/images/50678/thumb/PACATO_200.jpg?1728701090", 
      "decimals": 9
    }, 
    {
      "name": "Mint Token", 
      "abi": "ERC20_ABI", 
      "symbol": "MT", 
      "priority": 3, 
      "address": "0xff45161474c39cb00699070dd49582e417b57a7e", 
      "logo": "https://assets.coingecko.com/coins/images/54790/thumb/mint-token.jpg?1741578876", 
      "decimals": 18
    }, 
    {
      "name": "AGIXBT by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AGIXBT", 
      "priority": 3, 
      "address": "0x81496f85abaf8bd2e13d90379fde86c533d8670d", 
      "logo": "https://assets.coingecko.com/coins/images/53742/thumb/IMG_4664.jpeg?1737151877", 
      "decimals": 18
    }, 
    {
      "name": "Degen AI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DGENAI", 
      "priority": 3, 
      "address": "0x54eaf6bb665565bb8897f9d7ad5b3818ded143b4", 
      "logo": "https://assets.coingecko.com/coins/images/53200/thumb/degenai.png?1735617559", 
      "decimals": 18
    }, 
    {
      "name": "GRAM Ecosystem", 
      "abi": "ERC20_ABI", 
      "symbol": "GRAM", 
      "priority": 3, 
      "address": "0x856d602e73545deaa1491a3726cf628d49f74f51", 
      "logo": "https://assets.coingecko.com/coins/images/54984/thumb/GRAM_200_%281%29.png?1743057342", 
      "decimals": 18
    }, 
    {
      "name": "Liminal Agent by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "LMNL", 
      "priority": 3, 
      "address": "0xb7b4e8406673528e7dc3d787f3a42eb1ebc01cf6", 
      "logo": "https://assets.coingecko.com/coins/images/53975/thumb/Screenshot_2024-11-30_at_08.28.16.png?1737807564", 
      "decimals": 18
    }, 
    {
      "name": "Based Froc", 
      "abi": "ERC20_ABI", 
      "symbol": "FROC", 
      "priority": 3, 
      "address": "0x3c8cd0db9a01efa063a7760267b822a129bc7dca", 
      "logo": "https://assets.coingecko.com/coins/images/54585/thumb/IMG_9229.jpeg?1740552706", 
      "decimals": 18
    }, 
    {
      "name": "Trackgood AI", 
      "abi": "ERC20_ABI", 
      "symbol": "TRAI", 
      "priority": 3, 
      "address": "0xdd32659b1e7a6a6b3c6e96cd8a4c936bcfea0607", 
      "logo": "https://assets.coingecko.com/coins/images/53251/thumb/IMG_4515.jpeg?1735891968", 
      "decimals": 8
    }, 
    {
      "name": "Mooncats on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "MOONCATS", 
      "priority": 3, 
      "address": "0xc5396321805c7f1bce608cda194aa9155fb20f7d", 
      "logo": "https://assets.coingecko.com/coins/images/36766/thumb/mooncats.png?1712283962", 
      "decimals": 18
    }, 
    {
      "name": "REM Token", 
      "abi": "ERC20_ABI", 
      "symbol": "REM", 
      "priority": 3, 
      "address": "0x83d5d441ed15737d34226b682f7427d2217f2a8f", 
      "logo": "https://assets.coingecko.com/coins/images/53763/thumb/logo_icons-12.png?1737191145", 
      "decimals": 18
    }, 
    {
      "name": "Hover Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "HCAT", 
      "priority": 3, 
      "address": "0xbfabe191449a1549a0be6f5c0aa09affecbebc32", 
      "logo": "https://assets.coingecko.com/coins/images/53870/thumb/cat_icon_200.jpeg?1737615927", 
      "decimals": 18
    }, 
    {
      "name": "Agent Zeek by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ZEEK", 
      "priority": 3, 
      "address": "0x39d24405ca717ef841e4a782da97284cf2dc7628", 
      "logo": "https://assets.coingecko.com/coins/images/52331/thumb/dwWGlf18_400x400.jpg?1733086398", 
      "decimals": 18
    }, 
    {
      "name": "Fire", 
      "abi": "ERC20_ABI", 
      "symbol": "FIRE", 
      "priority": 3, 
      "address": "0xd27c288fd69f228e0c02f79e5ecadff962e05a2b", 
      "logo": "https://assets.coingecko.com/coins/images/50835/thumb/fire-coin-200.png?1729242121", 
      "decimals": 18
    }, 
    {
      "name": "Sypher", 
      "abi": "ERC20_ABI", 
      "symbol": "SYPHER", 
      "priority": 3, 
      "address": "0x21b9d428eb20fa075a29d51813e57bab85406620", 
      "logo": "https://assets.coingecko.com/coins/images/52264/thumb/pic.jpg?1732867759", 
      "decimals": 18
    }, 
    {
      "name": "BMX", 
      "abi": "ERC20_ABI", 
      "symbol": "BMX", 
      "priority": 3, 
      "address": "0x548f93779fbc992010c07467cbaf329dd5f059b7", 
      "logo": "https://assets.coingecko.com/coins/images/31699/thumb/bmx_white.png?1696530517", 
      "decimals": 18
    }, 
    {
      "name": "WeeDE", 
      "abi": "ERC20_ABI", 
      "symbol": "WEEDE", 
      "priority": 3, 
      "address": "0x35c9e8d97f7e24349e56cd048b30d3eae6fd7ff8", 
      "logo": "https://assets.coingecko.com/coins/images/52457/thumb/WD1_highres.png?1733391495", 
      "decimals": 18
    }, 
    {
      "name": "TAOCat by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "TAOCAT", 
      "priority": 3, 
      "address": "0x7a5f5ccd46ebd7ac30615836d988ca3bd57412b3", 
      "logo": "https://assets.coingecko.com/coins/images/53164/thumb/taocat.jpg?1735487727", 
      "decimals": 18
    }, 
    {
      "name": "Base Yield Index", 
      "abi": "ERC20_ABI", 
      "symbol": "BSDX", 
      "priority": 3, 
      "address": "0x8f0987ddb485219c767770e2080e5cc01ddc772a", 
      "logo": "https://assets.coingecko.com/coins/images/53519/thumb/Base_Yield_Index.png?1736574395", 
      "decimals": 18
    }, 
    {
      "name": "VolatilityX", 
      "abi": "ERC20_ABI", 
      "symbol": "VOLTX", 
      "priority": 3, 
      "address": "0x3f12d4607f9df527c3bccbd16a70636a69c8fcf5", 
      "logo": "https://assets.coingecko.com/coins/images/53320/thumb/logo.png?1736086638", 
      "decimals": 18
    }, 
    {
      "name": "NetherFi", 
      "abi": "ERC20_ABI", 
      "symbol": "NFI", 
      "priority": 3, 
      "address": "0x60359a0dd148b18d5cf1ddf8aa1916221ed0cbcd", 
      "logo": "https://assets.coingecko.com/coins/images/31557/thumb/Logo_2.png?1696530369", 
      "decimals": 18
    }, 
    {
      "name": "Andy", 
      "abi": "ERC20_ABI", 
      "symbol": "ANDY", 
      "priority": 3, 
      "address": "0x18a8bd1fe17a1bb9ffb39ecd83e9489cfd17a022", 
      "logo": "https://assets.coingecko.com/coins/images/36552/thumb/ANDY.jpg?1711896298", 
      "decimals": 18
    }, 
    {
      "name": "DogeSquatch", 
      "abi": "ERC20_ABI", 
      "symbol": "SQUOGE", 
      "priority": 3, 
      "address": "0x589c8e8fe013133b41abf546c819787a75688690", 
      "logo": "https://assets.coingecko.com/coins/images/38159/thumb/Dogesquatch_200x200.png?1716673551", 
      "decimals": 18
    }, 
    {
      "name": "OnlyCalls by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "CALLS", 
      "priority": 3, 
      "address": "0xac743b05f5e590d9db6a4192e02457838e4af61e", 
      "logo": "https://assets.coingecko.com/coins/images/52481/thumb/onlyCalls_%281%29.jpg?1733425816", 
      "decimals": 18
    }, 
    {
      "name": "INT OS", 
      "abi": "ERC20_ABI", 
      "symbol": "INTOS", 
      "priority": 3, 
      "address": "0x42e07fa3d31190731368ca2f88d12d80139dca42", 
      "logo": "https://assets.coingecko.com/coins/images/53428/thumb/pfp_square.png?1736362379", 
      "decimals": 18
    }, 
    {
      "name": "MEME ssi", 
      "abi": "ERC20_ABI", 
      "symbol": "MEMESSI", 
      "priority": 3, 
      "address": "0xdd3acdbdc7b358df453a6cb6bca56c92aa5743aa", 
      "logo": "https://assets.coingecko.com/coins/images/53091/thumb/meme.png?1735214704", 
      "decimals": 8
    }, 
    {
      "name": "Agent YP by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AIYP", 
      "priority": 3, 
      "address": "0x919e43a2cce006710090e64bde9e01b38fd7f32f", 
      "logo": "https://assets.coingecko.com/coins/images/52716/thumb/PFP.png?1734060541", 
      "decimals": 18
    }, 
    {
      "name": "aixCB by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AIXCB", 
      "priority": 3, 
      "address": "0x76c71f1703fbf19ffdcf3051e1e684cb9934510f", 
      "logo": "https://assets.coingecko.com/coins/images/52869/thumb/aixCB.jpg?1734551540", 
      "decimals": 18
    }, 
    {
      "name": "Speculation", 
      "abi": "ERC20_ABI", 
      "symbol": "SPECU", 
      "priority": 3, 
      "address": "0x11d41056ff636107dd710ec4ea772490a710cdb7", 
      "logo": "https://assets.coingecko.com/coins/images/51676/thumb/specu_logo.png?1731778446", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped MultiversX  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UEGLD", 
      "priority": 3, 
      "address": "0x16275fd42439a6671b188bdc3949a5ec61932c48", 
      "logo": "https://assets.coingecko.com/coins/images/54706/thumb/UA-EGLD.png?1741108121", 
      "decimals": 18
    }, 
    {
      "name": "Moonwell Flagship USDC  Morpho Vault ", 
      "abi": "ERC20_ABI", 
      "symbol": "MWUSDC", 
      "priority": 3, 
      "address": "0xc1256ae5ff1cf2719d4937adb3bbccab2e00a2ca", 
      "logo": "https://assets.coingecko.com/coins/images/52375/thumb/usd-coin-usdc-logo.png?1733253278", 
      "decimals": 18
    }, 
    {
      "name": "B Money AKA Brett", 
      "abi": "ERC20_ABI", 
      "symbol": "BMONEY", 
      "priority": 3, 
      "address": "0xfae89a7966d13195960459e6b483cacb9fe9cfcf", 
      "logo": "https://assets.coingecko.com/coins/images/52529/thumb/IMG_4246.JPG?1733567836", 
      "decimals": 18
    }, 
    {
      "name": "Kabosu", 
      "abi": "ERC20_ABI", 
      "symbol": "KABOSU", 
      "priority": 3, 
      "address": "0x9e949461f9ec22c6032ce26ea509824fd2f6d98f", 
      "logo": "https://assets.coingecko.com/coins/images/38184/thumb/kabosu.png?1716788417", 
      "decimals": 18
    }, 
    {
      "name": "RYI Unity", 
      "abi": "ERC20_ABI", 
      "symbol": "RYIU", 
      "priority": 3, 
      "address": "0x5dc2085fe510bbaaba2119d71b09c25098caca3f", 
      "logo": "https://assets.coingecko.com/coins/images/14512/thumb/9fe7dc47-100d-4d9d-bfb0-63ed1aabc658.png?1697995305", 
      "decimals": 9
    }, 
    {
      "name": "Ragdoll", 
      "abi": "ERC20_ABI", 
      "symbol": "RAGDOLL", 
      "priority": 3, 
      "address": "0xf5e89006cbeff2dabcfda0def5bf45ebe7f8429f", 
      "logo": "https://assets.coingecko.com/coins/images/51848/thumb/O0_Ds5Ad_400x400.jpg?1732060576", 
      "decimals": 18
    }, 
    {
      "name": "ZaichXBT", 
      "abi": "ERC20_ABI", 
      "symbol": "ZAI", 
      "priority": 3, 
      "address": "0x102cd3e9e14810ce6f0765227e971432bce05d6c", 
      "logo": "https://assets.coingecko.com/coins/images/53908/thumb/output-onlinepngtools.png?1737708192", 
      "decimals": 18
    }, 
    {
      "name": "Morpho MAI", 
      "abi": "ERC20_ABI", 
      "symbol": "MMAI", 
      "priority": 3, 
      "address": "0x30b8a2c8e7fa41e77b54b8faf45c610e7ad909e3", 
      "logo": "https://assets.coingecko.com/coins/images/51552/thumb/mai-logo.png?1731517339", 
      "decimals": 18
    }, 
    {
      "name": "Candy", 
      "abi": "ERC20_ABI", 
      "symbol": "CANDY", 
      "priority": 3, 
      "address": "0x33b7f6225b4cbe5d368b7bb4807d6375b18b8c2b", 
      "logo": "https://assets.coingecko.com/coins/images/37280/thumb/logogpng.png?1713942953", 
      "decimals": 9
    }, 
    {
      "name": "Altcoinist Token", 
      "abi": "ERC20_ABI", 
      "symbol": "ALTT", 
      "priority": 3, 
      "address": "0x1b5ce2a593a840e3ad3549a34d7b3dec697c114d", 
      "logo": "https://assets.coingecko.com/coins/images/39455/thumb/Altcoinist_logo_png_%282%29.png?1733342642", 
      "decimals": 18
    }, 
    {
      "name": "Iona by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "IONA", 
      "priority": 3, 
      "address": "0x645c7aa841087e2e7f741c749ab27422ff5bba8e", 
      "logo": "https://assets.coingecko.com/coins/images/52166/thumb/iona.jpg?1732682259", 
      "decimals": 18
    }, 
    {
      "name": "hardwAIre DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "HARD", 
      "priority": 3, 
      "address": "0x3de67b963766076a3e77e4bec067460523574694", 
      "logo": "https://assets.coingecko.com/coins/images/54073/thumb/hardwaire_%28200_x_200_px%29.png?1738167850", 
      "decimals": 18
    }, 
    {
      "name": "Oracle", 
      "abi": "ERC20_ABI", 
      "symbol": "ORCL", 
      "priority": 3, 
      "address": "0xd1d7aa941c71fd95e9d31bbd81937b3e71bd6231", 
      "logo": "https://assets.coingecko.com/coins/images/53276/thumb/Oracle.jpg?1735916307", 
      "decimals": 18
    }, 
    {
      "name": "Magnate Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "MAG", 
      "priority": 3, 
      "address": "0x2dc1cda9186a4993bd36de60d08787c0c382bead", 
      "logo": "https://assets.coingecko.com/coins/images/31278/thumb/192.png?1696530101", 
      "decimals": 18
    }, 
    {
      "name": "MoonEdge", 
      "abi": "ERC20_ABI", 
      "symbol": "MOONED", 
      "priority": 3, 
      "address": "0x599899dbaa0b4d3110b53d1a4d05fcdcb1c81945", 
      "logo": "https://assets.coingecko.com/coins/images/17393/thumb/ME_logo_200_200.png?1696516942", 
      "decimals": 18
    }, 
    {
      "name": "Sandwich Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "SACA", 
      "priority": 3, 
      "address": "0xed1978d01d4a8a9d6a43ac79403d5b8dfbed739b", 
      "logo": "https://assets.coingecko.com/coins/images/36876/thumb/200x200_%281%29.png?1712646447", 
      "decimals": 18
    }, 
    {
      "name": "Boysclubbase", 
      "abi": "ERC20_ABI", 
      "symbol": "BOYS", 
      "priority": 3, 
      "address": "0x4d58608eff50b691a3b76189af2a7a123df1e9ba", 
      "logo": "https://assets.coingecko.com/coins/images/37825/thumb/IMG_20240507_221140_398.jpg?1715668247", 
      "decimals": 9
    }, 
    {
      "name": "GENZAI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "GENZAI", 
      "priority": 3, 
      "address": "0xbf10dce9775ed5eae22789638da56c33b6c34633", 
      "logo": "https://assets.coingecko.com/coins/images/53536/thumb/genzaipic.jpg?1736582292", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Artificial Superintelligence Al", 
      "abi": "ERC20_ABI", 
      "symbol": "UFET", 
      "priority": 3, 
      "address": "0xacbf16f82753f3d52a2c87e4eeda220c9a7a3762", 
      "logo": "https://assets.coingecko.com/coins/images/54728/thumb/UA-FET.png?1741245784", 
      "decimals": 18
    }, 
    {
      "name": "H4CK Terminal by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "H4CK", 
      "priority": 3, 
      "address": "0x625bb9bb04bdca51871ed6d07e2dd9034e914631", 
      "logo": "https://assets.coingecko.com/coins/images/52822/thumb/h4ck.jpg?1734409358", 
      "decimals": 18
    }, 
    {
      "name": "aiPump", 
      "abi": "ERC20_ABI", 
      "symbol": "AIPUMP", 
      "priority": 3, 
      "address": "0xfbecd19292b1effeaa7b2e61f5101ddb6744a1fb", 
      "logo": "https://assets.coingecko.com/coins/images/53407/thumb/Socials-20.png?1736291028", 
      "decimals": 18
    }, 
    {
      "name": "Cloudland", 
      "abi": "ERC20_ABI", 
      "symbol": "CLO", 
      "priority": 3, 
      "address": "0x12e377989a87da0f9b9166f0f875c9069eaa776c", 
      "logo": "https://assets.coingecko.com/coins/images/53159/thumb/cloudland-400x400.png?1735462898", 
      "decimals": 18
    }, 
    {
      "name": "Apu Apustaja", 
      "abi": "ERC20_ABI", 
      "symbol": "APU", 
      "priority": 3, 
      "address": "0x3159fb5589acd6bf9f82eb0efe8382ed55aed8fd", 
      "logo": "https://assets.coingecko.com/coins/images/36958/thumb/200X200.png?1712904423", 
      "decimals": 18
    }, 
    {
      "name": "Youcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "YOU", 
      "priority": 3, 
      "address": "0x0fa70e156cd3b03ac4080bfe55bd8ab50f5bcb98", 
      "logo": "https://assets.coingecko.com/coins/images/31218/thumb/Group_4.png?1696530044", 
      "decimals": 18
    }, 
    {
      "name": "RandomDEX", 
      "abi": "ERC20_ABI", 
      "symbol": "RDX", 
      "priority": 3, 
      "address": "0x2659631cfbe9b1b6dcbc1384a3864509356e7b4d", 
      "logo": "https://assets.coingecko.com/coins/images/52766/thumb/Icon_removed_BG.png?1734268221", 
      "decimals": 18
    }, 
    {
      "name": "PKT", 
      "abi": "ERC20_ABI", 
      "symbol": "PKT", 
      "priority": 3, 
      "address": "0x917f39bb33b2483dd19546b1e8d2f09ce481ee44", 
      "logo": "https://assets.coingecko.com/coins/images/15293/thumb/PKT_Icon_smaller_new-01.png?1696514944", 
      "decimals": 18
    }, 
    {
      "name": "Ballies", 
      "abi": "ERC20_ABI", 
      "symbol": "BALL", 
      "priority": 3, 
      "address": "0xc1512b7023a97d54f8dd757b1f84e132297ca0d7", 
      "logo": "https://assets.coingecko.com/coins/images/52858/thumb/TOKEN_BALL_%281%29.png?1734539332", 
      "decimals": 18
    }, 
    {
      "name": "PokPok Golden Egg", 
      "abi": "ERC20_ABI", 
      "symbol": "PEGG", 
      "priority": 3, 
      "address": "0x82b0e1a2374ea0198f62a48b14ffab53db6c1e36", 
      "logo": "https://assets.coingecko.com/coins/images/40102/thumb/golden_eggs_%281%29.png?1725694597", 
      "decimals": 18
    }, 
    {
      "name": "CPA by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "CPA", 
      "priority": 3, 
      "address": "0xd9da0a693ea8057dcd97f02df6c98951acf92ef7", 
      "logo": "https://assets.coingecko.com/coins/images/53396/thumb/cpa-token-icon.png?1736280028", 
      "decimals": 18
    }, 
    {
      "name": "Sally A1C", 
      "abi": "ERC20_ABI", 
      "symbol": "A1C", 
      "priority": 3, 
      "address": "0x1f1c695f6b4a3f8b05f2492cef9474afb6d6ad69", 
      "logo": "https://assets.coingecko.com/coins/images/54517/thumb/WhatsApp_Image_2025-02-20_at_07.33.46.jpeg?1740119984", 
      "decimals": 18
    }, 
    {
      "name": "Bumshaft", 
      "abi": "ERC20_ABI", 
      "symbol": "BUMSHAFT", 
      "priority": 3, 
      "address": "0x381896019bb6f85747e114568488bb1c42ad4d8a", 
      "logo": "https://assets.coingecko.com/coins/images/53809/thumb/Bumshaft.jpg?1737408742", 
      "decimals": 18
    }, 
    {
      "name": "Agentwood", 
      "abi": "ERC20_ABI", 
      "symbol": "AWS", 
      "priority": 3, 
      "address": "0xcb6ab91007fe165c81b1e672007361cce9995fd1", 
      "logo": "https://assets.coingecko.com/coins/images/54736/thumb/aws-logo.jpg?1741254599", 
      "decimals": 18
    }, 
    {
      "name": "Mr  Miggles", 
      "abi": "ERC20_ABI", 
      "symbol": "MIGGLES", 
      "priority": 3, 
      "address": "0xb1a03eda10342529bbf8eb700a06c60441fef25d", 
      "logo": "https://assets.coingecko.com/coins/images/39251/thumb/New_LOGO.png?1734294728", 
      "decimals": 18
    }, 
    {
      "name": "clBTC", 
      "abi": "ERC20_ABI", 
      "symbol": "CLBTC", 
      "priority": 3, 
      "address": "0x8d2757ea27aabf172da4cca4e5474c76016e3dc5", 
      "logo": "https://assets.coingecko.com/coins/images/54164/thumb/clBTC.png?1738482999", 
      "decimals": 18
    }, 
    {
      "name": "NORMIE", 
      "abi": "ERC20_ABI", 
      "symbol": "NORMIE", 
      "priority": 3, 
      "address": "0x47b464edb8dc9bc67b5cd4c9310bb87b773845bd", 
      "logo": "https://assets.coingecko.com/coins/images/35880/thumb/NORMIEsite.png?1709983341", 
      "decimals": 9
    }, 
    {
      "name": "Jaihoz by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "JAIHOZ", 
      "priority": 3, 
      "address": "0xe2816b27a5613b0aaf5d6dafa80584156e2fb1b6", 
      "logo": "https://assets.coingecko.com/coins/images/53495/thumb/jaihoz.jpg?1736508283", 
      "decimals": 18
    }, 
    {
      "name": "nomAI", 
      "abi": "ERC20_ABI", 
      "symbol": "NOMAI", 
      "priority": 3, 
      "address": "0x4d70f1058b73198f12a76c193aef5db5dd75babd", 
      "logo": "https://assets.coingecko.com/coins/images/53065/thumb/0x4d70f1058b73198f12a76c193aef5db5dd75babd.png?1735192916", 
      "decimals": 18
    }, 
    {
      "name": "AgentAlgo", 
      "abi": "ERC20_ABI", 
      "symbol": "AGENT", 
      "priority": 3, 
      "address": "0xd98832e8a59156acbee4744b9a94a9989a728f36", 
      "logo": "https://assets.coingecko.com/coins/images/52294/thumb/agent_logo.jpg?1732966712", 
      "decimals": 18
    }, 
    {
      "name": "Torus", 
      "abi": "ERC20_ABI", 
      "symbol": "TORUS", 
      "priority": 3, 
      "address": "0x78ec15c5fd8efc5e924e9eebb9e549e29c785867", 
      "logo": "https://assets.coingecko.com/coins/images/53678/thumb/Torus.jpg?1737010506", 
      "decimals": 18
    }, 
    {
      "name": "Cool Mustache", 
      "abi": "ERC20_ABI", 
      "symbol": "MUST", 
      "priority": 3, 
      "address": "0x14daf26c2507acdd3b64e3302d8554611026cc40", 
      "logo": "https://assets.coingecko.com/coins/images/53833/thumb/Must.png?1737558596", 
      "decimals": 18
    }, 
    {
      "name": "Universal USDC", 
      "abi": "ERC20_ABI", 
      "symbol": "UUSDC", 
      "priority": 3, 
      "address": "0xb7890cee6cf4792cdcc13489d36d9d42726ab863", 
      "logo": "https://assets.coingecko.com/coins/images/51563/thumb/pngtree-usd-coin-usdc-digital-stablecoin-icon-technology-pay-web-vector-png-image_37843734.png?1731519821", 
      "decimals": 18
    }, 
    {
      "name": "Rewardable", 
      "abi": "ERC20_ABI", 
      "symbol": "REWARD", 
      "priority": 3, 
      "address": "0x1986cc18d8ec757447254310d2604f85741aa732", 
      "logo": "https://assets.coingecko.com/coins/images/52274/thumb/reward-token-icon-200x200.png?1732888312", 
      "decimals": 18
    }, 
    {
      "name": "Terminal", 
      "abi": "ERC20_ABI", 
      "symbol": "TERMINAL", 
      "priority": 3, 
      "address": "0xb488fcb23333e7baa28d1dfd7b69a5d3a8bfeb3a", 
      "logo": "https://assets.coingecko.com/coins/images/51477/thumb/terminalLogo.png?1731403786", 
      "decimals": 18
    }, 
    {
      "name": "Brett 2 0", 
      "abi": "ERC20_ABI", 
      "symbol": "BRETT20", 
      "priority": 3, 
      "address": "0x885129e35d247b01c4485ef6b48564d0ebc8c362", 
      "logo": "https://assets.coingecko.com/coins/images/37121/thumb/brett200-modified.png?1713366621", 
      "decimals": 18
    }, 
    {
      "name": "Frencoin", 
      "abi": "ERC20_ABI", 
      "symbol": "FREN", 
      "priority": 3, 
      "address": "0xa7e4509dcb46a67e73c18fe0d11dd9a337e52ac0", 
      "logo": "https://assets.coingecko.com/coins/images/54601/thumb/Coin_%282%29.png?1740638073", 
      "decimals": 18
    }, 
    {
      "name": "Virtuals Index", 
      "abi": "ERC20_ABI", 
      "symbol": "VTF", 
      "priority": 3, 
      "address": "0x47686106181b3cefe4eaf94c4c10b48ac750370b", 
      "logo": "https://assets.coingecko.com/coins/images/54638/thumb/VTFLOGO.png?1740815702", 
      "decimals": 18
    }, 
    {
      "name": "Proof of Presence", 
      "abi": "ERC20_ABI", 
      "symbol": "POP", 
      "priority": 3, 
      "address": "0xe12acf5bb21654195a498c2fbd49fff801a3a02d", 
      "logo": "https://assets.coingecko.com/coins/images/53347/thumb/POP.jpg?1736173283", 
      "decimals": 18
    }, 
    {
      "name": "Super Champs", 
      "abi": "ERC20_ABI", 
      "symbol": "CHAMP", 
      "priority": 3, 
      "address": "0xeb6d78148f001f3aa2f588997c5e102e489ad341", 
      "logo": "https://assets.coingecko.com/coins/images/51900/thumb/CHAMP_Token_256x256.png?1732131989", 
      "decimals": 18
    }, 
    {
      "name": "Freysa AI", 
      "abi": "ERC20_ABI", 
      "symbol": "FAI", 
      "priority": 3, 
      "address": "0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935", 
      "logo": "https://assets.coingecko.com/coins/images/52315/thumb/FAI.png?1733076295", 
      "decimals": 18
    }, 
    {
      "name": "flETH", 
      "abi": "ERC20_ABI", 
      "symbol": "FLETH", 
      "priority": 3, 
      "address": "0x000000000d564d5be76f7f0d28fe52605afc7cf8", 
      "logo": "https://assets.coingecko.com/coins/images/54177/thumb/weth.png?1738632581", 
      "decimals": 18
    }, 
    {
      "name": "Common Wealth", 
      "abi": "ERC20_ABI", 
      "symbol": "WLTH", 
      "priority": 3, 
      "address": "0x99b2b1a2adb02b38222adcd057783d7e5d1fcc7d", 
      "logo": "https://assets.coingecko.com/coins/images/37858/thumb/WLTH_TICKER_200x200.png?1730241264", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped ApeCoin  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UAPE", 
      "priority": 3, 
      "address": "0x9af46f95a0a8be5c2e0a0274a8b153c72d617e85", 
      "logo": "https://assets.coingecko.com/coins/images/54500/thumb/UA-APE_200x200.png?1740031977", 
      "decimals": 18
    }, 
    {
      "name": "Neurobro", 
      "abi": "ERC20_ABI", 
      "symbol": "BRO", 
      "priority": 3, 
      "address": "0xc796e499cc8f599a2a8280825d8bda92f7a895e0", 
      "logo": "https://assets.coingecko.com/coins/images/52649/thumb/coingeckooo.png?1733917525", 
      "decimals": 18
    }, 
    {
      "name": "OnlyUp Token", 
      "abi": "ERC20_ABI", 
      "symbol": "ONLYUP", 
      "priority": 3, 
      "address": "0x268d46d09d59d555350701a5336dc0d516f80de3", 
      "logo": "https://assets.coingecko.com/coins/images/54801/thumb/AVA_%281%29.jpg?1741702453", 
      "decimals": 18
    }, 
    {
      "name": "PEPE 0x69 ON BASE", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPE", 
      "priority": 3, 
      "address": "0x698dc45e4f10966f6d1d98e3bfd7071d8144c233", 
      "logo": "https://assets.coingecko.com/coins/images/37400/thumb/lOGO.jpg?1714352456", 
      "decimals": 9
    }, 
    {
      "name": "Farther", 
      "abi": "ERC20_ABI", 
      "symbol": "FARTHER", 
      "priority": 3, 
      "address": "0x8ad5b9007556749de59e088c88801a3aaa87134b", 
      "logo": "https://assets.coingecko.com/coins/images/37870/thumb/farther-logo.png?1715828571", 
      "decimals": 18
    }, 
    {
      "name": "Moon on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "MOON", 
      "priority": 3, 
      "address": "0x7b3eb29dbfb671e2b54f2525825bf4add8b936dc", 
      "logo": "https://assets.coingecko.com/coins/images/37316/thumb/logo-moon-high_%284%29.png?1713972944", 
      "decimals": 18
    }, 
    {
      "name": "L2VE INU", 
      "abi": "ERC20_ABI", 
      "symbol": "L2VE", 
      "priority": 3, 
      "address": "0xa19328fb05ce6fd204d16c2a2a98f7cf434c12f4", 
      "logo": "https://assets.coingecko.com/coins/images/36329/thumb/photo_2024-03-21_09.46.29.jpeg?1711098200", 
      "decimals": 18
    }, 
    {
      "name": "PeacePal AI", 
      "abi": "ERC20_ABI", 
      "symbol": "PEACE", 
      "priority": 3, 
      "address": "0xc2eeca228ebac45c339cc5e522dd3a10638155f1", 
      "logo": "https://assets.coingecko.com/coins/images/51624/thumb/200x200.png?1731659578", 
      "decimals": 18
    }, 
    {
      "name": "Astro Fuel", 
      "abi": "ERC20_ABI", 
      "symbol": "ASTRO", 
      "priority": 3, 
      "address": "0xee30c78d32b8fd5b8eec8e4f08fd88a3f68971d5", 
      "logo": "https://assets.coingecko.com/coins/images/52872/thumb/200x200.png?1734552034", 
      "decimals": 18
    }, 
    {
      "name": "Gia by DexFi", 
      "abi": "ERC20_ABI", 
      "symbol": "GIA", 
      "priority": 3, 
      "address": "0x2bd8880e7424dfb94597429de7253de73694de01", 
      "logo": "https://assets.coingecko.com/coins/images/54203/thumb/Gia_Token_Icon.png?1738761416", 
      "decimals": 18
    }, 
    {
      "name": "Chinese Doge Wow", 
      "abi": "ERC20_ABI", 
      "symbol": "CHIDO", 
      "priority": 3, 
      "address": "0xf31e6d62bfc485857af2186eb3d8ee94b4379fed", 
      "logo": "https://assets.coingecko.com/coins/images/52054/thumb/1.png?1732449299", 
      "decimals": 18
    }, 
    {
      "name": "Pepe Clanker", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPEC", 
      "priority": 3, 
      "address": "0x1196c6704789620514fd25632abe15f69a50bc4f", 
      "logo": "https://assets.coingecko.com/coins/images/52568/thumb/pepepepepe.jpeg?1733674517", 
      "decimals": 18
    }, 
    {
      "name": "MarketVector Token Terminal Fundamental", 
      "abi": "ERC20_ABI", 
      "symbol": "MVTT10F", 
      "priority": 3, 
      "address": "0xe8b46b116d3bdfa787ce9cf3f5acc78dc7ca380e", 
      "logo": "https://assets.coingecko.com/coins/images/54605/thumb/MV-logo.png?1740639926", 
      "decimals": 18
    }, 
    {
      "name": "Lympid", 
      "abi": "ERC20_ABI", 
      "symbol": "LYP", 
      "priority": 3, 
      "address": "0x4837b18a6d7af6159c8665505b90a2ed393255e0", 
      "logo": "https://assets.coingecko.com/coins/images/53786/thumb/LYP_200X200.png?1737358652", 
      "decimals": 18
    }, 
    {
      "name": "Baby Miggles", 
      "abi": "ERC20_ABI", 
      "symbol": "BABYMIGGLES", 
      "priority": 3, 
      "address": "0xa202b2b7b4d2fe56bf81492ffdda657fe512de07", 
      "logo": "https://assets.coingecko.com/coins/images/51834/thumb/IMG_6772.png?1732044511", 
      "decimals": 18
    }, 
    {
      "name": "Aerodrome Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "AERO", 
      "priority": 3, 
      "address": "0x940181a94a35a4569e4529a3cdfb74e38fd98631", 
      "logo": "https://assets.coingecko.com/coins/images/31745/thumb/token.png?1696530564", 
      "decimals": 18
    }, 
    {
      "name": "sp xf ", 
      "abi": "ERC20_ABI", 
      "symbol": "SPIX", 
      "priority": 3, 
      "address": "0x6ce4dba6b54d4995654c94bd48ea3b94836ea144", 
      "logo": "https://assets.coingecko.com/coins/images/53582/thumb/token_200.png?1736750306", 
      "decimals": 18
    }, 
    {
      "name": "Polytrader by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "POLY", 
      "priority": 3, 
      "address": "0x2676e4e0e2eb58d9bdb5078358ff8a3a964cedf5", 
      "logo": "https://assets.coingecko.com/coins/images/52168/thumb/poly.jpg?1732682921", 
      "decimals": 18
    }, 
    {
      "name": "Cora", 
      "abi": "ERC20_ABI", 
      "symbol": "CORA", 
      "priority": 3, 
      "address": "0x81cb4fdd3edc6f5470b636d7e5914c3173110ca5", 
      "logo": "https://assets.coingecko.com/coins/images/53182/thumb/Cora.jpg?1735562862", 
      "decimals": 18
    }, 
    {
      "name": "Robots Farm", 
      "abi": "ERC20_ABI", 
      "symbol": "RBF", 
      "priority": 3, 
      "address": "0x15de59489de5e7f240d72f787dc4a292b8199339", 
      "logo": "https://assets.coingecko.com/coins/images/38274/thumb/Robots.Farm_DEX_logo.png?1716963579", 
      "decimals": 18
    }, 
    {
      "name": "Brat", 
      "abi": "ERC20_ABI", 
      "symbol": "BRAT", 
      "priority": 3, 
      "address": "0xb4d4ff3fcbd6965962a79229aa94631d394217cb", 
      "logo": "https://assets.coingecko.com/coins/images/54444/thumb/Brat.png?1739772733", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Blur  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UBLUR", 
      "priority": 3, 
      "address": "0x44951c66dfe920baed34457a2cfa65a0c7ff2025", 
      "logo": "https://assets.coingecko.com/coins/images/54714/thumb/UA-BLUR.png?1741185673", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Bonk  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UBONK", 
      "priority": 3, 
      "address": "0xf56ce53561a9cc084e094952232bbfe1e5fb599e", 
      "logo": "https://assets.coingecko.com/coins/images/54715/thumb/UA-BONK.png?1741185707", 
      "decimals": 18
    }, 
    {
      "name": "VaultX", 
      "abi": "ERC20_ABI", 
      "symbol": "VAX", 
      "priority": 3, 
      "address": "0x1027d69d77567039f37bf2e4b2c5ccbafce100f2", 
      "logo": "https://assets.coingecko.com/coins/images/55036/thumb/vax-logo.png?1743327108", 
      "decimals": 18
    }, 
    {
      "name": "Gekko AI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "GEKKO", 
      "priority": 3, 
      "address": "0xf7b0dd0b642a6ccc2fc4d8ffe2bffb0cac8c43c8", 
      "logo": "https://assets.coingecko.com/coins/images/53532/thumb/gekko.jpg?1736580908", 
      "decimals": 18
    }, 
    {
      "name": "RUNNER", 
      "abi": "ERC20_ABI", 
      "symbol": "RUNNER", 
      "priority": 3, 
      "address": "0x18b6f6049a0af4ed2bbe0090319174eeef89f53a", 
      "logo": "https://assets.coingecko.com/coins/images/52160/thumb/RUNNERTP.png?1732675799", 
      "decimals": 18
    }, 
    {
      "name": "Barry the badger", 
      "abi": "ERC20_ABI", 
      "symbol": "BARRY", 
      "priority": 3, 
      "address": "0xf09034487c84954d49ae04bf6817148ffc2edb83", 
      "logo": "https://assets.coingecko.com/coins/images/53144/thumb/IMG_4596.jpeg?1735377862", 
      "decimals": 18
    }, 
    {
      "name": "SOX", 
      "abi": "ERC20_ABI", 
      "symbol": "SOX", 
      "priority": 3, 
      "address": "0xd7574820e04eb724855ec781c16be78b31ff9134", 
      "logo": "https://assets.coingecko.com/coins/images/52773/thumb/0xd7574820e04eb724855ec781c16be78b31ff9134__MConverter.eu__%281%29.jpg?1734279428", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Cronos  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UCRO", 
      "priority": 3, 
      "address": "0xf653e8b6fcbd2a63246c6b7722d1e9d819611241", 
      "logo": "https://assets.coingecko.com/coins/images/54705/thumb/UA-CRO_%285%29.png?1741108092", 
      "decimals": 18
    }, 
    {
      "name": "Sympson by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SYMP", 
      "priority": 3, 
      "address": "0x504a26cf29674bc77a9341e73f88ccecc864034c", 
      "logo": "https://assets.coingecko.com/coins/images/53549/thumb/sympson_ai_twitter_profile.png?1736670581", 
      "decimals": 18
    }, 
    {
      "name": "Degenerate SQuiD", 
      "abi": "ERC20_ABI", 
      "symbol": "SQDGN", 
      "priority": 3, 
      "address": "0x4674f73545f1db4036250ff8c33a39ad1678d864", 
      "logo": "https://assets.coingecko.com/coins/images/54165/thumb/pepe_200_by_200.png?1738486688", 
      "decimals": 18
    }, 
    {
      "name": "TRUE", 
      "abi": "ERC20_ABI", 
      "symbol": "TRUE", 
      "priority": 3, 
      "address": "0x21cfcfc3d8f98fc728f48341d10ad8283f6eb7ab", 
      "logo": "https://assets.coingecko.com/coins/images/54818/thumb/512x512.png?1741851363", 
      "decimals": 18
    }, 
    {
      "name": "Landwolf", 
      "abi": "ERC20_ABI", 
      "symbol": "WOLF", 
      "priority": 3, 
      "address": "0x88faea256f789f8dd50de54f9c807eef24f71b16", 
      "logo": "https://assets.coingecko.com/coins/images/36803/thumb/IMG_8678.jpeg?1712469842", 
      "decimals": 18
    }, 
    {
      "name": "Simps", 
      "abi": "ERC20_ABI", 
      "symbol": "SIMP", 
      "priority": 3, 
      "address": "0x60222751504796934bddee8218f9725f0c95d2c1", 
      "logo": "https://assets.coingecko.com/coins/images/51994/thumb/200.png?1732296595", 
      "decimals": 18
    }, 
    {
      "name": "Token S", 
      "abi": "ERC20_ABI", 
      "symbol": "S", 
      "priority": 3, 
      "address": "0x667d0fb35364b0711b8566bee4dc3d0f96d6a688", 
      "logo": "https://assets.coingecko.com/coins/images/54975/thumb/token-s.jpg?1742970082", 
      "decimals": 18
    }, 
    {
      "name": "Gluteus Maximus by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "GLUTEU", 
      "priority": 3, 
      "address": "0x06a63c498ef95ad1fa4fff841955e512b4b2198a", 
      "logo": "https://assets.coingecko.com/coins/images/52177/thumb/gluteu.jpg?1732685854", 
      "decimals": 18
    }, 
    {
      "name": "AI ROCKET by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ROCKET", 
      "priority": 3, 
      "address": "0x0bf852ebb243b963652b71103a2b97cf446f22c3", 
      "logo": "https://assets.coingecko.com/coins/images/53030/thumb/200x200.png?1735056900", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Cosmos  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UATOM", 
      "priority": 3, 
      "address": "0x6e934283dae5d5d1831cbe8d557c44c9b83f30ee", 
      "logo": "https://assets.coingecko.com/coins/images/54702/thumb/UA-ATOM.png?1741107902", 
      "decimals": 18
    }, 
    {
      "name": "Thesirion", 
      "abi": "ERC20_ABI", 
      "symbol": "TSO", 
      "priority": 3, 
      "address": "0x7772b39661b87a98521193b9f18f87cfabe401fa", 
      "logo": "https://assets.coingecko.com/coins/images/55110/thumb/ThesirionLogo200x200.png?1743754699", 
      "decimals": 18
    }, 
    {
      "name": "Based Hoppy", 
      "abi": "ERC20_ABI", 
      "symbol": "HOPPY", 
      "priority": 3, 
      "address": "0x4366c1568fd6167eee67d25ef6980da38e3421bc", 
      "logo": "https://assets.coingecko.com/coins/images/52765/thumb/New_Project_-_2024-12-13T125213.686.png?1734268017", 
      "decimals": 18
    }, 
    {
      "name": "Moonwell Flagship ETH  Morpho Vault ", 
      "abi": "ERC20_ABI", 
      "symbol": "MWETH", 
      "priority": 3, 
      "address": "0xa0e430870c4604ccfc7b38ca7845b1ff653d0ff1", 
      "logo": "https://assets.coingecko.com/coins/images/52387/thumb/ethereum-eth-logo.png?1733265577", 
      "decimals": 18
    }, 
    {
      "name": "ESAB", 
      "abi": "ERC20_ABI", 
      "symbol": "ESAB", 
      "priority": 3, 
      "address": "0x6fd31533621452aac187c9cbdfdfb6ef50d28149", 
      "logo": "https://assets.coingecko.com/coins/images/35962/thumb/ESAB.jpg?1710259895", 
      "decimals": 18
    }, 
    {
      "name": "BankrX", 
      "abi": "ERC20_ABI", 
      "symbol": "BNXR", 
      "priority": 3, 
      "address": "0x04175b1f982b8c8444f238ac0aae59f029e21099", 
      "logo": "https://assets.coingecko.com/coins/images/54822/thumb/bnxr-logo.png?1741858158", 
      "decimals": 18
    }, 
    {
      "name": "Battle tech by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "BTA", 
      "priority": 3, 
      "address": "0xab10e517f3138b17108b32129e8c8446ad44a267", 
      "logo": "https://assets.coingecko.com/coins/images/53605/thumb/Ge0LvxrXAAA0L4W.png.jpeg?1736872853", 
      "decimals": 18
    }, 
    {
      "name": "PLAY", 
      "abi": "ERC20_ABI", 
      "symbol": "PLAY", 
      "priority": 3, 
      "address": "0x7404ac09adf614603d9c16a7ce85a1101f3514ba", 
      "logo": "https://assets.coingecko.com/coins/images/52562/thumb/play_token.png?1733669740", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Bittensor  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UTAO", 
      "priority": 3, 
      "address": "0xfdca15bd55f350a36e63c47661914d80411d2c22", 
      "logo": "https://assets.coingecko.com/coins/images/54906/thumb/Untitled_%281%29.png?1742450295", 
      "decimals": 18
    }, 
    {
      "name": "DTRXBT by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DTRXBT", 
      "priority": 3, 
      "address": "0x84a9aae8fcc085dbe11524f570716d89b772f430", 
      "logo": "https://assets.coingecko.com/coins/images/53926/thumb/652f564a-4f1b-4d20-8bd4-8a57a86c204f.jpg?1737744026", 
      "decimals": 18
    }, 
    {
      "name": "Volaris Games", 
      "abi": "ERC20_ABI", 
      "symbol": "VOLS", 
      "priority": 3, 
      "address": "0x9c94e82d8751f16953f9c86e13ed9cd0414e6e97", 
      "logo": "https://assets.coingecko.com/coins/images/52604/thumb/volaris-2.png?1733756805", 
      "decimals": 18
    }, 
    {
      "name": "CONDO", 
      "abi": "ERC20_ABI", 
      "symbol": "CONDO", 
      "priority": 3, 
      "address": "0x30d19fb77c3ee5cfa97f73d72c6a1e509fa06aef", 
      "logo": "https://assets.coingecko.com/coins/images/37174/thumb/1000012387.jpg?1724589415", 
      "decimals": 18
    }, 
    {
      "name": "ghffb47yii2rteeyy10op", 
      "abi": "ERC20_ABI", 
      "symbol": "GHFFB47YII2RTEEYY10", 
      "priority": 3, 
      "address": "0x354d6890caa31a5e28b6059d46781f40880786a6", 
      "logo": "https://assets.coingecko.com/coins/images/52104/thumb/0x354d6890caa31a5e28b6059d46781f40880786a6.png?1732591949", 
      "decimals": 18
    }, 
    {
      "name": "Diligent Pepe", 
      "abi": "ERC20_ABI", 
      "symbol": "DILIGENT", 
      "priority": 3, 
      "address": "0x55a6f6cb50db03259f6ab17979a4891313be2f45", 
      "logo": "https://assets.coingecko.com/coins/images/37711/thumb/photo_2024-04-09_12-21-44.png?1715275436", 
      "decimals": 18
    }, 
    {
      "name": "CookieBase", 
      "abi": "ERC20_ABI", 
      "symbol": "COOKIE", 
      "priority": 3, 
      "address": "0x614747c53cb1636b4b962e15e1d66d3214621100", 
      "logo": "https://assets.coingecko.com/coins/images/31217/thumb/logo.png?1696530043", 
      "decimals": 18
    }, 
    {
      "name": "BRAZA by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "BRAZA", 
      "priority": 3, 
      "address": "0xbbf81ddc9fb90cf9146b495ce0546a3460fd1769", 
      "logo": "https://assets.coingecko.com/coins/images/53741/thumb/braza_logo.png?1737151718", 
      "decimals": 18
    }, 
    {
      "name": "DeHub", 
      "abi": "ERC20_ABI", 
      "symbol": "DHB", 
      "priority": 3, 
      "address": "0xd20ab1015f6a2de4a6fddebab270113f689c2f7c", 
      "logo": "https://assets.coingecko.com/coins/images/18094/thumb/dehub.PNG?1696517599", 
      "decimals": 18
    }, 
    {
      "name": "Base Bridged GLUE  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "GLUE", 
      "priority": 3, 
      "address": "0x840b20fa3d48ac709fd841fcd878c3e8aabd7087", 
      "logo": "https://assets.coingecko.com/coins/images/54538/thumb/GlueLogo200px.png?1740215317", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Filecoin  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UFIL", 
      "priority": 3, 
      "address": "0xdf5913632251585a55970134fad8a774628e9388", 
      "logo": "https://assets.coingecko.com/coins/images/54729/thumb/UA-FIL.png?1741245876", 
      "decimals": 18
    }, 
    {
      "name": "Weirdo  OLD ", 
      "abi": "ERC20_ABI", 
      "symbol": "WEIRDO", 
      "priority": 3, 
      "address": "0xaa3ecad0cb644c0de72110a905a57667c1a1ca96", 
      "logo": "https://assets.coingecko.com/coins/images/36290/thumb/iQ4T0Un__400x400.jpg?1714006579", 
      "decimals": 9
    }, 
    {
      "name": "Kontos", 
      "abi": "ERC20_ABI", 
      "symbol": "KOS", 
      "priority": 3, 
      "address": "0xd173c2c9386aee88b1ca06522c951be67cbf38cc", 
      "logo": "https://assets.coingecko.com/coins/images/52856/thumb/KOS_128PX%281%29.png?1734518204", 
      "decimals": 18
    }, 
    {
      "name": "Catson", 
      "abi": "ERC20_ABI", 
      "symbol": "CAT", 
      "priority": 3, 
      "address": "0xca8e8d244f0d219a6fc9e4793c635cea98d0399c", 
      "logo": "https://assets.coingecko.com/coins/images/39313/thumb/Sp7.png?1721706297", 
      "decimals": 18
    }, 
    {
      "name": "4GENTIC", 
      "abi": "ERC20_ABI", 
      "symbol": "4GS", 
      "priority": 3, 
      "address": "0x135fa55546758cf398da675a064f39d215ab1ff6", 
      "logo": "https://assets.coingecko.com/coins/images/52809/thumb/profile_lowres_nobg.png?1734362695", 
      "decimals": 18
    }, 
    {
      "name": "Phase Dollar", 
      "abi": "ERC20_ABI", 
      "symbol": "CASH", 
      "priority": 3, 
      "address": "0xbe92452bb46485af3308e6d77786bfbe3557808d", 
      "logo": "https://assets.coingecko.com/coins/images/32482/thumb/cash_cg.png?1698288106", 
      "decimals": 18
    }, 
    {
      "name": "RWA Inc ", 
      "abi": "ERC20_ABI", 
      "symbol": "RWA", 
      "priority": 3, 
      "address": "0xe2b1dc2d4a3b4e59fdf0c47b71a7a86391a8b35a", 
      "logo": "https://assets.coingecko.com/coins/images/50975/thumb/logo_%281%29.png?1732594737", 
      "decimals": 18
    }, 
    {
      "name": "GM Everyday", 
      "abi": "ERC20_ABI", 
      "symbol": "GM", 
      "priority": 3, 
      "address": "0x5d9c2457a10d455e0ad8e28e40cc28eacf27a06a", 
      "logo": "https://assets.coingecko.com/coins/images/52139/thumb/sRavZnte_.png?1732642259", 
      "decimals": 18
    }, 
    {
      "name": "Re7 RWA", 
      "abi": "ERC20_ABI", 
      "symbol": "RE7RWA", 
      "priority": 3, 
      "address": "0x6e37c95b43566e538d8c278eb69b00fc717a001b", 
      "logo": "https://assets.coingecko.com/coins/images/51549/thumb/pngtree-usd-coin-usdc-digital-stablecoin-icon-technology-pay-web-vector-png-image_37843734.png?1731517054", 
      "decimals": 18
    }, 
    {
      "name": "Blu", 
      "abi": "ERC20_ABI", 
      "symbol": "BLU", 
      "priority": 3, 
      "address": "0x52e0d3c27cc9e3607c1ca7914b9049be3d5e9c41", 
      "logo": "https://assets.coingecko.com/coins/images/51922/thumb/Blu.jpg?1732190348", 
      "decimals": 18
    }, 
    {
      "name": "Super Meme Fighter", 
      "abi": "ERC20_ABI", 
      "symbol": "SMF", 
      "priority": 3, 
      "address": "0x88c3b9d2dbe8eab571d38f57f7f69c581e3427c6", 
      "logo": "https://assets.coingecko.com/coins/images/52855/thumb/smf_logo_%281%29.png?1734518070", 
      "decimals": 18
    }, 
    {
      "name": "Cow", 
      "abi": "ERC20_ABI", 
      "symbol": "COW", 
      "priority": 3, 
      "address": "0x2ad3d80c917ddbf08acc04277f379e00e4d75395", 
      "logo": "https://assets.coingecko.com/coins/images/39745/thumb/CrashCowLogo200p.png?1723781632", 
      "decimals": 18
    }, 
    {
      "name": "Synthswap", 
      "abi": "ERC20_ABI", 
      "symbol": "SYNTH", 
      "priority": 3, 
      "address": "0xbd2dbb8ecea9743ca5b16423b4eaa26bdcfe5ed2", 
      "logo": "https://assets.coingecko.com/coins/images/31190/thumb/synth.png?1696530018", 
      "decimals": 18
    }, 
    {
      "name": " BRAINS   your greed is my fuel    by V", 
      "abi": "ERC20_ABI", 
      "symbol": "BRAINS", 
      "priority": 3, 
      "address": "0xf25b7dd973e30dcf219fbed7bd336b9ab5a05dd9", 
      "logo": "https://assets.coingecko.com/coins/images/52836/thumb/photo_2024-12-10_16.44.14.jpeg?1734467019", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Curve  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UCRV", 
      "priority": 3, 
      "address": "0x0340ff1765f0099b3bd1c4664ce03d8fd794fad1", 
      "logo": "https://assets.coingecko.com/coins/images/54716/thumb/UA-CRV.png?1741185880", 
      "decimals": 18
    }, 
    {
      "name": "YieldMachine by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "YMACH", 
      "priority": 3, 
      "address": "0xba1cc6e3f1c5f937497e4e196196e7535e6a8e63", 
      "logo": "https://assets.coingecko.com/coins/images/53788/thumb/AmzKxzEY_400x400.jpg?1737378603", 
      "decimals": 18
    }, 
    {
      "name": "Tiny Panda", 
      "abi": "ERC20_ABI", 
      "symbol": "TINYP", 
      "priority": 3, 
      "address": "0x1cbb39da9e815483ed44ec918d6f8dfb828f3a06", 
      "logo": "https://assets.coingecko.com/coins/images/53335/thumb/Pandarelease.jpeg?1737579165", 
      "decimals": 18
    }, 
    {
      "name": "Pepe on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPE", 
      "priority": 3, 
      "address": "0x80f45eacf6537498ecc660e4e4a2d2f99e195cf4", 
      "logo": "https://assets.coingecko.com/coins/images/36639/thumb/Pepe_on_Base.png?1712030799", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped EOS  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UEOS", 
      "priority": 3, 
      "address": "0x31d664ebd97a50d5a2cd49b16f7714ab2516ed25", 
      "logo": "https://assets.coingecko.com/coins/images/54726/thumb/UA-EOS.png?1741244637", 
      "decimals": 18
    }, 
    {
      "name": "BSX", 
      "abi": "ERC20_ABI", 
      "symbol": "BSX", 
      "priority": 3, 
      "address": "0xd47f3e45b23b7594f5d5e1ccfde63237c60be49e", 
      "logo": "https://assets.coingecko.com/coins/images/53598/thumb/white_bsx_round_200.png?1736808552", 
      "decimals": 18
    }, 
    {
      "name": "Bitbot", 
      "abi": "ERC20_ABI", 
      "symbol": "BITBOT", 
      "priority": 3, 
      "address": "0x252d223d0550bc6c137b003d90bc74f5341a2818", 
      "logo": "https://assets.coingecko.com/coins/images/52512/thumb/Bitbot_Logo.png?1733493165", 
      "decimals": 18
    }, 
    {
      "name": "Veil Token", 
      "abi": "ERC20_ABI", 
      "symbol": "VEIL", 
      "priority": 3, 
      "address": "0x767a739d1a152639e9ea1d8c1bd55fdc5b217d7f", 
      "logo": "https://assets.coingecko.com/coins/images/53282/thumb/avatar_x_fc.png?1735980729", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Axie Infinity Shards  Universal", 
      "abi": "ERC20_ABI", 
      "symbol": "UAXS", 
      "priority": 3, 
      "address": "0x5a03841c2e2f5811f9e548cf98e88e878e55d99e", 
      "logo": "https://assets.coingecko.com/coins/images/54703/thumb/UA-AXS.png?1741108025", 
      "decimals": 18
    }, 
    {
      "name": "The Nation Token", 
      "abi": "ERC20_ABI", 
      "symbol": "NATO", 
      "priority": 3, 
      "address": "0xd968196fa6977c4e58f2af5ac01c655ea8332d22", 
      "logo": "https://assets.coingecko.com/coins/images/53669/thumb/IMG_3254.jpeg?1740321990", 
      "decimals": 18
    }, 
    {
      "name": "AIVeronica by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "AIV", 
      "priority": 3, 
      "address": "0x0d91ebb16291873a0c67158f578ec249f4321b49", 
      "logo": "https://assets.coingecko.com/coins/images/54688/thumb/IMG_3752.jpg?1741073082", 
      "decimals": 18
    }, 
    {
      "name": "CARV", 
      "abi": "ERC20_ABI", 
      "symbol": "CARV", 
      "priority": 3, 
      "address": "0xc08cd26474722ce93f4d0c34d16201461c10aa8c", 
      "logo": "https://assets.coingecko.com/coins/images/37689/thumb/CARV_%281%29.png?1728418485", 
      "decimals": 18
    }, 
    {
      "name": "Game Money", 
      "abi": "ERC20_ABI", 
      "symbol": "GM", 
      "priority": 3, 
      "address": "0x637ca2cfa168f97caf0730d6c6012c10f49839fa", 
      "logo": "https://assets.coingecko.com/coins/images/52746/thumb/200.png?1734316320", 
      "decimals": 18
    }, 
    {
      "name": "Pineapple Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "PICA", 
      "priority": 3, 
      "address": "0xa4dc5a82839a148ff172b5b8ba9d52e681fd2261", 
      "logo": "https://assets.coingecko.com/coins/images/52563/thumb/200pica.png?1733671077", 
      "decimals": 18
    }, 
    {
      "name": "Base DOG", 
      "abi": "ERC20_ABI", 
      "symbol": "DOG", 
      "priority": 3, 
      "address": "0x3b916b8f6a710e9240ff08c1dd646dd8e8ed9e1e", 
      "logo": "https://assets.coingecko.com/coins/images/36703/thumb/200x200.png?1712119865", 
      "decimals": 8
    }, 
    {
      "name": "Alpha City", 
      "abi": "ERC20_ABI", 
      "symbol": "AMETA", 
      "priority": 3, 
      "address": "0x90ec58ef4cc9f37b96de1e203b65bd4e6e79580e", 
      "logo": "https://assets.coingecko.com/coins/images/54292/thumb/200x200.png?1739083747", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Shiba Inu  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "USHIB", 
      "priority": 3, 
      "address": "0x239b9c1f24f3423062b0d364796e07ee905e9fce", 
      "logo": "https://assets.coingecko.com/coins/images/52902/thumb/UA-SHIB_1.png?1734636956", 
      "decimals": 18
    }, 
    {
      "name": "Rivalz Network", 
      "abi": "ERC20_ABI", 
      "symbol": "RIZ", 
      "priority": 3, 
      "address": "0x67543cf0304c19ca62ac95ba82fd4f4b40788dc1", 
      "logo": "https://assets.coingecko.com/coins/images/54076/thumb/Group_1533211238.png?1739213377", 
      "decimals": 8
    }, 
    {
      "name": "EBERT", 
      "abi": "ERC20_ABI", 
      "symbol": "EBERT", 
      "priority": 3, 
      "address": "0xf83cde146ac35e99dd61b6448f7ad9a4534133cc", 
      "logo": "https://assets.coingecko.com/coins/images/52969/thumb/1000019413.jpg?1734882313", 
      "decimals": 18
    }, 
    {
      "name": "Bloomberg Galaxy Crypto Index", 
      "abi": "ERC20_ABI", 
      "symbol": "BGCI", 
      "priority": 3, 
      "address": "0x23418de10d422ad71c9d5713a2b8991a9c586443", 
      "logo": "https://assets.coingecko.com/coins/images/54578/thumb/images_%282%29.png?1740538343", 
      "decimals": 18
    }, 
    {
      "name": "Lottery Token", 
      "abi": "ERC20_ABI", 
      "symbol": "LOT", 
      "priority": 3, 
      "address": "0xca57b8d3edd0bedc6c1087bd35d782c3518b2a52", 
      "logo": "https://assets.coingecko.com/coins/images/54432/thumb/1000161712.png?1739607416", 
      "decimals": 9
    }, 
    {
      "name": "MORK", 
      "abi": "ERC20_ABI", 
      "symbol": "MORK", 
      "priority": 3, 
      "address": "0x0b1594b0e896bf165d925956e0df733b8443af6a", 
      "logo": "https://assets.coingecko.com/coins/images/39675/thumb/Mork_200_x_200_Circle.png?1723609160", 
      "decimals": 18
    }, 
    {
      "name": "Sharp AI", 
      "abi": "ERC20_ABI", 
      "symbol": "SHARP", 
      "priority": 3, 
      "address": "0xb887cac66cf5eaaa0bf0cdb5d76905e19bc391a5", 
      "logo": "https://assets.coingecko.com/coins/images/54859/thumb/sharp-ai.png?1742110692", 
      "decimals": 18
    }, 
    {
      "name": "Cocoro", 
      "abi": "ERC20_ABI", 
      "symbol": "COCORO", 
      "priority": 3, 
      "address": "0x937a1cfaf0a3d9f5dc4d0927f72ee5e3e5f82a00", 
      "logo": "https://assets.coingecko.com/coins/images/54771/thumb/cocoro_imresizer.jpg?1743247934", 
      "decimals": 18
    }, 
    {
      "name": "Based Beast Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "BEAST", 
      "priority": 3, 
      "address": "0x82aed68f1deaca2b2aa4c5f27276374228a9f923", 
      "logo": "https://assets.coingecko.com/coins/images/51121/thumb/IMG_7914.png?1730164559", 
      "decimals": 8
    }, 
    {
      "name": "Funded", 
      "abi": "ERC20_ABI", 
      "symbol": "FUNDED", 
      "priority": 3, 
      "address": "0xc1d5892e28ea1c5ecd9fac7771b9d06802f321e0", 
      "logo": "https://assets.coingecko.com/coins/images/50661/thumb/funded.jpg?1728643546", 
      "decimals": 18
    }, 
    {
      "name": "Pinto", 
      "abi": "ERC20_ABI", 
      "symbol": "PINTO", 
      "priority": 3, 
      "address": "0xb170000aeefa790fa61d6e837d1035906839a3c8", 
      "logo": "https://assets.coingecko.com/coins/images/54217/thumb/pinto.png?1738829146", 
      "decimals": 6
    }, 
    {
      "name": "GMBase", 
      "abi": "ERC20_ABI", 
      "symbol": "GMB", 
      "priority": 3, 
      "address": "0xc890eb927871660c7259f0dcaaf3d8a7ce5fa8c1", 
      "logo": "https://assets.coingecko.com/coins/images/52839/thumb/GMB_WADDLE_GMBASE_PFP.jpeg?1734468352", 
      "decimals": 18
    }, 
    {
      "name": "Baby Tiger", 
      "abi": "ERC20_ABI", 
      "symbol": "BBT", 
      "priority": 3, 
      "address": "0x8a638ea79f71f3b91bdc96bbdf9fb27c93013d60", 
      "logo": "https://assets.coingecko.com/coins/images/51933/thumb/BBT_%282%29_%281%29.png?1732205350", 
      "decimals": 5
    }, 
    {
      "name": "USSI", 
      "abi": "ERC20_ABI", 
      "symbol": "USSI", 
      "priority": 3, 
      "address": "0x3a46ed8fceb6ef1ada2e4600a522ae7e24d2ed18", 
      "logo": "https://assets.coingecko.com/coins/images/53089/thumb/ussi.png?1735213864", 
      "decimals": 8
    }, 
    {
      "name": "Aqualibre", 
      "abi": "ERC20_ABI", 
      "symbol": "AQLA", 
      "priority": 3, 
      "address": "0xdbe125089d0752ef458c0685436ace93a7f1f8ca", 
      "logo": "https://assets.coingecko.com/coins/images/35026/thumb/aq1.png?1707147950", 
      "decimals": 18
    }, 
    {
      "name": "Veritas", 
      "abi": "ERC20_ABI", 
      "symbol": "VPT", 
      "priority": 3, 
      "address": "0x00096697dc24bd10423690126d91546a20ccb3f0", 
      "logo": "https://assets.coingecko.com/coins/images/54623/thumb/white_circle_icon.png?1740736633", 
      "decimals": 18
    }, 
    {
      "name": "Moon", 
      "abi": "ERC20_ABI", 
      "symbol": "MOON", 
      "priority": 3, 
      "address": "0xd2699f9fddc04d262a819808f561c153098c2408", 
      "logo": "https://assets.coingecko.com/coins/images/52138/thumb/jjl.jpg?1732641211", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped NEAR  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UNEAR", 
      "priority": 3, 
      "address": "0x5ed25e305e08f58afd7995eac72563e6be65a617", 
      "logo": "https://assets.coingecko.com/coins/images/50645/thumb/UA-NEAR_1.png?1728579564", 
      "decimals": 18
    }, 
    {
      "name": "YUKO", 
      "abi": "ERC20_ABI", 
      "symbol": "YUKO", 
      "priority": 3, 
      "address": "0x48de4b1826e83b77bcf62cb25bc30bd216d27745", 
      "logo": "https://assets.coingecko.com/coins/images/51889/thumb/photo_2024-11-20_16-19-14.jpg?1732122162", 
      "decimals": 18
    }, 
    {
      "name": "Bald", 
      "abi": "ERC20_ABI", 
      "symbol": "BALD", 
      "priority": 3, 
      "address": "0x27d2decb4bfc9c76f0309b8e88dec3a601fe25a8", 
      "logo": "https://assets.coingecko.com/coins/images/31119/thumb/cdjxKSjo_400x400.jpg?1696529949", 
      "decimals": 18
    }, 
    {
      "name": "KOLZ", 
      "abi": "ERC20_ABI", 
      "symbol": "KOLZ", 
      "priority": 3, 
      "address": "0x50ce4129ca261ccde4eb100c170843c2936bc11b", 
      "logo": "https://assets.coingecko.com/coins/images/51235/thumb/KOLZ.png?1730447667", 
      "decimals": 18
    }, 
    {
      "name": "AgentLayer", 
      "abi": "ERC20_ABI", 
      "symbol": "AGENT", 
      "priority": 3, 
      "address": "0xf5bc3439f53a45607ccad667abc7daf5a583633f", 
      "logo": "https://assets.coingecko.com/coins/images/50213/thumb/Logo-Mark-White_256.png?1726433757", 
      "decimals": 18
    }, 
    {
      "name": "Hippo Swap", 
      "abi": "ERC20_ABI", 
      "symbol": "HIPPO", 
      "priority": 3, 
      "address": "0x46a157f74503a7b32c3fffcf424227e00d7dfdc9", 
      "logo": "https://assets.coingecko.com/coins/images/54245/thumb/fcI57MiB_400x400.jpg?1738904939", 
      "decimals": 18
    }, 
    {
      "name": "AIGPU Token", 
      "abi": "ERC20_ABI", 
      "symbol": "AIGPU", 
      "priority": 3, 
      "address": "0x39353a32eceafe4979a8606512c046c3b6398cc4", 
      "logo": "https://assets.coingecko.com/coins/images/38080/thumb/AiGPUlogo_200x200.png?1716474972", 
      "decimals": 18
    }, 
    {
      "name": "Baby Brett", 
      "abi": "ERC20_ABI", 
      "symbol": "BABYBRETT", 
      "priority": 3, 
      "address": "0x52de0096836bada37c83d6648e0615c40f2d9e51", 
      "logo": "https://assets.coingecko.com/coins/images/35913/thumb/BB200.png?1710183575", 
      "decimals": 18
    }, 
    {
      "name": "Flaunchy", 
      "abi": "ERC20_ABI", 
      "symbol": "FLNCHY", 
      "priority": 3, 
      "address": "0x1c93d155bd388241f9ab5df500d69eb529ce9583", 
      "logo": "https://assets.coingecko.com/coins/images/54175/thumb/flaunchy.jpeg?1738580008", 
      "decimals": 18
    }, 
    {
      "name": "All Street Bets", 
      "abi": "ERC20_ABI", 
      "symbol": "BETS", 
      "priority": 3, 
      "address": "0x42069de48741db40aef864f8764432bbccbd0b69", 
      "logo": "https://assets.coingecko.com/coins/images/36906/thumb/Screenshot_2024-03-17_034831_no_background.png?1712728634", 
      "decimals": 18
    }, 
    {
      "name": "BEATS on BASE", 
      "abi": "ERC20_ABI", 
      "symbol": "BEATS", 
      "priority": 3, 
      "address": "0x315b8c9a1123c10228d469551033440441b41f0b", 
      "logo": "https://assets.coingecko.com/coins/images/52396/thumb/200x200_Logo_Transparent_2025.png?1737477372", 
      "decimals": 18
    }, 
    {
      "name": "Hunter by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "DRPXBT", 
      "priority": 3, 
      "address": "0xfa3946432c6a76edff377d9bbfb81ca3ffc05874", 
      "logo": "https://assets.coingecko.com/coins/images/53240/thumb/photo_2024-12-03_00-00-53.jpg?1735841600", 
      "decimals": 18
    }, 
    {
      "name": "Birb", 
      "abi": "ERC20_ABI", 
      "symbol": "BIRB", 
      "priority": 3, 
      "address": "0xca5c7a459becaac1f2b5ee28bb8a29875b1a37a6", 
      "logo": "https://assets.coingecko.com/coins/images/26373/thumb/Artboard_1.png?1726814681", 
      "decimals": 18
    }, 
    {
      "name": "Based Doge", 
      "abi": "ERC20_ABI", 
      "symbol": "BDOGE", 
      "priority": 3, 
      "address": "0xb3ecba1330fe26bb36f40344992c481c2c916f23", 
      "logo": "https://assets.coingecko.com/coins/images/53027/thumb/coin.png?1735052684", 
      "decimals": 18
    }, 
    {
      "name": "NAIFU", 
      "abi": "ERC20_ABI", 
      "symbol": "NAIFU", 
      "priority": 3, 
      "address": "0x62fe1724116e37e22949ae1f8e6f560c9a188dc6", 
      "logo": "https://assets.coingecko.com/coins/images/52875/thumb/naifu-200x200.png?1734553143", 
      "decimals": 18
    }, 
    {
      "name": "Reactor", 
      "abi": "ERC20_ABI", 
      "symbol": "ARC", 
      "priority": 3, 
      "address": "0x5a4342f4268a731f4459cd0be22d4744a86d635d", 
      "logo": "https://assets.coingecko.com/coins/images/55001/thumb/reactor_icon.png?1743156040", 
      "decimals": 18
    }, 
    {
      "name": "BicOnBase", 
      "abi": "ERC20_ABI", 
      "symbol": "BIC", 
      "priority": 3, 
      "address": "0xef80422317dfe797ef7cf51b043226987877d34a", 
      "logo": "https://assets.coingecko.com/coins/images/36913/thumb/ticker.jpeg?1712767591", 
      "decimals": 18
    }, 
    {
      "name": "Mey Network", 
      "abi": "ERC20_ABI", 
      "symbol": "MEY", 
      "priority": 3, 
      "address": "0x8bfac1b375bf2894d6f12fb2eb48b1c1a7916789", 
      "logo": "https://assets.coingecko.com/coins/images/52249/thumb/logo_mey_200.png?1732828172", 
      "decimals": 18
    }, 
    {
      "name": "cgETH Hashkey Cloud", 
      "abi": "ERC20_ABI", 
      "symbol": "CGETHHASHKEY", 
      "priority": 3, 
      "address": "0xf587b7116879a529353cc71ee959cd69fd5cae48", 
      "logo": "https://assets.coingecko.com/coins/images/54162/thumb/Cgeth_Hashkey.png?1738482570", 
      "decimals": 18
    }, 
    {
      "name": "Based Fwog", 
      "abi": "ERC20_ABI", 
      "symbol": "FWOG", 
      "priority": 3, 
      "address": "0x1035ae3f87a91084c6c5084d0615cc6121c5e228", 
      "logo": "https://assets.coingecko.com/coins/images/52691/thumb/IMG_8652.PNG?1734033750", 
      "decimals": 18
    }, 
    {
      "name": "Music Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "RECORD", 
      "priority": 3, 
      "address": "0xe642657e4f43e6dcf0bd73ef24008394574dee28", 
      "logo": "https://assets.coingecko.com/coins/images/39243/thumb/MP-mark-color.png?1724879503", 
      "decimals": 18
    }, 
    {
      "name": "Larva Lads", 
      "abi": "ERC20_ABI", 
      "symbol": "LAD", 
      "priority": 3, 
      "address": "0x40e3eddf6d253bb734381a309437428f121c594b", 
      "logo": "https://assets.coingecko.com/coins/images/54309/thumb/l.png?1739194014", 
      "decimals": 18
    }, 
    {
      "name": "Velvet Unicorn by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VU", 
      "priority": 3, 
      "address": "0x511ef9ad5e645e533d15df605b4628e3d0d0ff53", 
      "logo": "https://assets.coingecko.com/coins/images/52175/thumb/velvet_unicorn.jpg?1732684869", 
      "decimals": 18
    }, 
    {
      "name": "PettAI", 
      "abi": "ERC20_ABI", 
      "symbol": "AIP", 
      "priority": 3, 
      "address": "0x02d4f76656c2b4f58430e91f8ac74896c9281cb9", 
      "logo": "https://assets.coingecko.com/coins/images/53790/thumb/Token_AIP-01.png?1737382415", 
      "decimals": 18
    }, 
    {
      "name": "sekoia by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SEKOIA", 
      "priority": 3, 
      "address": "0x1185cb5122edad199bdbc0cbd7a0457e448f23c7", 
      "logo": "https://assets.coingecko.com/coins/images/51785/thumb/sekoia.jpg?1731982234", 
      "decimals": 18
    }, 
    {
      "name": "AUKI", 
      "abi": "ERC20_ABI", 
      "symbol": "AUKI", 
      "priority": 3, 
      "address": "0xf9569cfb8fd265e91aa478d86ae8c78b8af55df4", 
      "logo": "https://assets.coingecko.com/coins/images/39811/thumb/COINGECKO-200-x-200_%281%29.png?1724166209", 
      "decimals": 18
    }, 
    {
      "name": "Native", 
      "abi": "ERC20_ABI", 
      "symbol": "NATIVE", 
      "priority": 3, 
      "address": "0x20dd04c17afd5c9a8b3f2cdacaa8ee7907385bef", 
      "logo": "https://assets.coingecko.com/coins/images/52565/thumb/native_logo_fill.png?1733672418", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped 1inch  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "U1INCH", 
      "priority": 3, 
      "address": "0x3c07ef1bd575b5f5b1ffcb868353f5bc501ed482", 
      "logo": "https://assets.coingecko.com/coins/images/54498/thumb/UA-1INCH_200x200.png?1740031787", 
      "decimals": 18
    }, 
    {
      "name": "Briun Armstrung", 
      "abi": "ERC20_ABI", 
      "symbol": "BRIUN", 
      "priority": 3, 
      "address": "0x8c81b4c816d66d36c4bf348bdec01dbcbc70e987", 
      "logo": "https://assets.coingecko.com/coins/images/36183/thumb/200x200.png?1710758416", 
      "decimals": 18
    }, 
    {
      "name": "Akuma Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "AKUMA", 
      "priority": 3, 
      "address": "0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6", 
      "logo": "https://assets.coingecko.com/coins/images/52182/thumb/IMG_8186.png?1735828700", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped bTSLA", 
      "abi": "ERC20_ABI", 
      "symbol": "WBTSLA", 
      "priority": 3, 
      "address": "0x1f82284c1658ad71c576f7230e6c2dee7901c1fa", 
      "logo": "https://assets.coingecko.com/coins/images/54428/thumb/bTSLA_200p.png?1740041458", 
      "decimals": 18
    }, 
    {
      "name": "VISION ai by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VISION", 
      "priority": 3, 
      "address": "0x50d7a818e5e339ebe13b17e130b5b608fac354dc", 
      "logo": "https://assets.coingecko.com/coins/images/53391/thumb/BASE_flat_white.png?1736277616", 
      "decimals": 18
    }, 
    {
      "name": "Tyler", 
      "abi": "ERC20_ABI", 
      "symbol": "TYLER", 
      "priority": 3, 
      "address": "0x85645b86243886b7c7c1da6288571f8bea6fc035", 
      "logo": "https://assets.coingecko.com/coins/images/52587/thumb/IMG_7775.JPG?1733713659", 
      "decimals": 9
    }, 
    {
      "name": "MaxxChain", 
      "abi": "ERC20_ABI", 
      "symbol": "PWR", 
      "priority": 3, 
      "address": "0x3b54eb78fc8103462f86976b06916fa46078b124", 
      "logo": "https://assets.coingecko.com/coins/images/31321/thumb/PWR_Logo_200x200.jpg?1696530140", 
      "decimals": 18
    }, 
    {
      "name": "Klink Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "KLINK", 
      "priority": 3, 
      "address": "0xdc5eb0fc6d3f64689290595ebe8943155ed4a73a", 
      "logo": "https://assets.coingecko.com/coins/images/54192/thumb/CMC_Logo.png?1738722266", 
      "decimals": 18
    }, 
    {
      "name": "Just a based guy", 
      "abi": "ERC20_ABI", 
      "symbol": "BASEDGUY", 
      "priority": 3, 
      "address": "0xba5ed8a0e261bf2a5ad629d4d5de884ccbfdf3f7", 
      "logo": "https://assets.coingecko.com/coins/images/52705/thumb/IMG_0040.png?1734056757", 
      "decimals": 18
    }, 
    {
      "name": "Booshi", 
      "abi": "ERC20_ABI", 
      "symbol": "BOOSHI", 
      "priority": 3, 
      "address": "0x0d1fc046900628879d579364789273fd552ec582", 
      "logo": "https://assets.coingecko.com/coins/images/51056/thumb/BOOSHI.png?1729875831", 
      "decimals": 18
    }, 
    {
      "name": "HadesAI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "HADES", 
      "priority": 3, 
      "address": "0xaf0aa8de89e3dbdafe144abcdddafa568a526299", 
      "logo": "https://assets.coingecko.com/coins/images/52550/thumb/Hades_AI_pixel_logo.png?1733629799", 
      "decimals": 18
    }, 
    {
      "name": "Loomlay", 
      "abi": "ERC20_ABI", 
      "symbol": "LAY", 
      "priority": 3, 
      "address": "0xb89d354ad1b0d95a48b3de4607f75a8cd710c1ba", 
      "logo": "https://assets.coingecko.com/coins/images/53358/thumb/lay1.jpg?1736191645", 
      "decimals": 18
    }, 
    {
      "name": "YapTrade", 
      "abi": "ERC20_ABI", 
      "symbol": "YT", 
      "priority": 3, 
      "address": "0x387627b2bceb9ba5b476f6597727a7acf47f5b6c", 
      "logo": "https://assets.coingecko.com/coins/images/54494/thumb/2kx2k_Size_Yap.png?1740027561", 
      "decimals": 18
    }, 
    {
      "name": "Panana", 
      "abi": "ERC20_ABI", 
      "symbol": "PANANA", 
      "priority": 3, 
      "address": "0x844c03892863b0e3e00e805e41b34527044d5c72", 
      "logo": "https://assets.coingecko.com/coins/images/52672/thumb/panana_eat.png?1734017755", 
      "decimals": 18
    }, 
    {
      "name": " REKT", 
      "abi": "ERC20_ABI", 
      "symbol": "REKT", 
      "priority": 3, 
      "address": "0x8972ab69d499b5537a31576725f0af8f67203d38", 
      "logo": "https://assets.coingecko.com/coins/images/35894/thumb/rekt.jpeg?1710156572", 
      "decimals": 18
    }, 
    {
      "name": "Steakhouse EURA  Base  Morpho Vault", 
      "abi": "ERC20_ABI", 
      "symbol": "STEAKUSDA", 
      "priority": 3, 
      "address": "0xbeefa28d5e56d41d35df760ab53b94d9ffd7051f", 
      "logo": "https://assets.coingecko.com/coins/images/52608/thumb/Screenshot_2024-12-07_at_11.17.05%E2%80%AFPM.png?1733757610", 
      "decimals": 18
    }, 
    {
      "name": "ISTARAI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ISTAR", 
      "priority": 3, 
      "address": "0xd4f5fabd1763bbf52bd3b17cd445db6f9f836bd4", 
      "logo": "https://assets.coingecko.com/coins/images/53831/thumb/red_wizard_staff.png?1737557523", 
      "decimals": 18
    }, 
    {
      "name": "Based Peng", 
      "abi": "ERC20_ABI", 
      "symbol": "BENG", 
      "priority": 3, 
      "address": "0x3e05d37cfbd8caaad9e3322d35cc727afaff63e3", 
      "logo": "https://assets.coingecko.com/coins/images/36741/thumb/0.5_%281%29_%281%29.png?1712211668", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped bMSTR", 
      "abi": "ERC20_ABI", 
      "symbol": "WBMSTR", 
      "priority": 3, 
      "address": "0x1a4f71b0ff3c22540887bcf83b50054a213c673d", 
      "logo": "https://assets.coingecko.com/coins/images/54431/thumb/bMSTR_200p.png?1740041487", 
      "decimals": 18
    }, 
    {
      "name": "Skimask Pnut", 
      "abi": "ERC20_ABI", 
      "symbol": "SKINUT", 
      "priority": 3, 
      "address": "0x85cf87e35bf9d20380889016bac20e519324d928", 
      "logo": "https://assets.coingecko.com/coins/images/52899/thumb/pnut200x200.png?1734635658", 
      "decimals": 18
    }, 
    {
      "name": "BaseX", 
      "abi": "ERC20_ABI", 
      "symbol": "BSX", 
      "priority": 3, 
      "address": "0xd5046b976188eb40f6de40fb527f89c05b323385", 
      "logo": "https://assets.coingecko.com/coins/images/31419/thumb/bsxlogo.png?1696530234", 
      "decimals": 18
    }, 
    {
      "name": "Sapiens AI", 
      "abi": "ERC20_ABI", 
      "symbol": "SPN", 
      "priority": 3, 
      "address": "0x035098c2a3bea5e03b1e08e7140a5369d47bd349", 
      "logo": "https://assets.coingecko.com/coins/images/38758/thumb/Logo.png?1721949500", 
      "decimals": 18
    }, 
    {
      "name": "Broge", 
      "abi": "ERC20_ABI", 
      "symbol": "BROGE", 
      "priority": 3, 
      "address": "0xe8e55a847bb446d967ef92f4580162fb8f2d3f38", 
      "logo": "https://assets.coingecko.com/coins/images/36297/thumb/coingecko-logo.png?1717948949", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Chainlink  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "ULINK", 
      "priority": 3, 
      "address": "0xd403d1624daef243fbcbd4a80d8a6f36affe32b2", 
      "logo": "https://assets.coingecko.com/coins/images/52901/thumb/UA-LINK_1_%281%29.png?1734636820", 
      "decimals": 18
    }, 
    {
      "name": "CYI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "CYI", 
      "priority": 3, 
      "address": "0x49c86046903807d0a3193a221c1a3e1b1b6c9ba3", 
      "logo": "https://assets.coingecko.com/coins/images/52125/thumb/Cryptoyieldinfo.jpg?1732611368", 
      "decimals": 18
    }, 
    {
      "name": "VirtuBeauty by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VBEA", 
      "priority": 3, 
      "address": "0x414562c94223a5c4df9f278422f03228f35b8f7d", 
      "logo": "https://assets.coingecko.com/coins/images/53429/thumb/logo.png?1736365069", 
      "decimals": 18
    }, 
    {
      "name": "Motoko", 
      "abi": "ERC20_ABI", 
      "symbol": "MOTOKO", 
      "priority": 3, 
      "address": "0x323ae144409a9758331f4e20cd3d24c216cfb37b", 
      "logo": "https://assets.coingecko.com/coins/images/54249/thumb/Motoko-NFT_OS.jpg?1738907304", 
      "decimals": 18
    }, 
    {
      "name": "Geko Base", 
      "abi": "ERC20_ABI", 
      "symbol": "GEKO", 
      "priority": 3, 
      "address": "0x64baa63f3eedf9661f736d8e4d42c6f8aa0cda71", 
      "logo": "https://assets.coingecko.com/coins/images/52703/thumb/1000018965.png?1734056168", 
      "decimals": 18
    }, 
    {
      "name": "Generative Market eXplorer", 
      "abi": "ERC20_ABI", 
      "symbol": "AIGMX", 
      "priority": 3, 
      "address": "0x56ca7ea740f54501cc6ffb2b6fb9ba46eaf8b51c", 
      "logo": "https://assets.coingecko.com/coins/images/53675/thumb/aigmx.png?1737750227", 
      "decimals": 18
    }, 
    {
      "name": "Dimes", 
      "abi": "ERC20_ABI", 
      "symbol": "DIME", 
      "priority": 3, 
      "address": "0x17d70172c7c4205bd39ce80f7f0ee660b7dc5a23", 
      "logo": "https://assets.coingecko.com/coins/images/54733/thumb/dime_dot.png?1741247716", 
      "decimals": 18
    }, 
    {
      "name": "Just a Black Rock on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "ROCK", 
      "priority": 3, 
      "address": "0xece7b98bd817ee5b1f2f536daf34d0b6af8bb542", 
      "logo": "https://assets.coingecko.com/coins/images/36495/thumb/photo_2024-04-05_12-19-47.jpg?1712427724", 
      "decimals": 18
    }, 
    {
      "name": "QubeCV AI", 
      "abi": "ERC20_ABI", 
      "symbol": "QCV", 
      "priority": 3, 
      "address": "0x65553f5c85c78b977668cec098ec09475099aa61", 
      "logo": "https://assets.coingecko.com/coins/images/54656/thumb/_QCV_Logo.png?1740894275", 
      "decimals": 18
    }, 
    {
      "name": "Leonardo AI", 
      "abi": "ERC20_ABI", 
      "symbol": "LEONAI", 
      "priority": 3, 
      "address": "0xb933d4ff5a0e7bfe6ab7da72b5dce2259030252f", 
      "logo": "https://assets.coingecko.com/coins/images/53663/thumb/O3XRgenN_400x400.jpg?1737002491", 
      "decimals": 18
    }, 
    {
      "name": "ETH Printer", 
      "abi": "ERC20_ABI", 
      "symbol": "ETHPRINTER", 
      "priority": 3, 
      "address": "0x35bfe9427d37cec78ea1eb9fa922f12ae8a32547", 
      "logo": "https://assets.coingecko.com/coins/images/53135/thumb/ETHprinter.jpg?1735367716", 
      "decimals": 18
    }, 
    {
      "name": "GPT Wars", 
      "abi": "ERC20_ABI", 
      "symbol": "GPTW", 
      "priority": 3, 
      "address": "0x0171ae9879c7fbcf3071b149bb4f2130daef7457", 
      "logo": "https://assets.coingecko.com/coins/images/51157/thumb/GPTW_200x200.png?1730238893", 
      "decimals": 18
    }, 
    {
      "name": "Monkey Peepo", 
      "abi": "ERC20_ABI", 
      "symbol": "BANANAS", 
      "priority": 3, 
      "address": "0x9a27c6759a6de0f26ac41264f0856617dec6bc3f", 
      "logo": "https://assets.coingecko.com/coins/images/37036/thumb/logo-mp.png?1713160745", 
      "decimals": 18
    }, 
    {
      "name": "Sport Bettor AI", 
      "abi": "ERC20_ABI", 
      "symbol": "ZEBRO", 
      "priority": 3, 
      "address": "0x792d0447bf8b33158ca6e02d49755f2eab65061b", 
      "logo": "https://assets.coingecko.com/coins/images/53668/thumb/wImEuzQT_400x400.jpg?1737004056", 
      "decimals": 18
    }, 
    {
      "name": "Olyn by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "OLYN", 
      "priority": 3, 
      "address": "0x91273b316240879fd902c0c3fcf7c0158777b42f", 
      "logo": "https://assets.coingecko.com/coins/images/52167/thumb/olyn.jpg?1732682477", 
      "decimals": 18
    }, 
    {
      "name": "redacted gdupi", 
      "abi": "ERC20_ABI", 
      "symbol": "GDUPI", 
      "priority": 3, 
      "address": "0x20fd4c5396f7d9686f9997e0f10991957f7112fc", 
      "logo": "https://assets.coingecko.com/coins/images/52704/thumb/200x200.png?1734056667", 
      "decimals": 18
    }, 
    {
      "name": "Build", 
      "abi": "ERC20_ABI", 
      "symbol": "BUILD", 
      "priority": 3, 
      "address": "0x3c281a39944a2319aa653d81cfd93ca10983d234", 
      "logo": "https://assets.coingecko.com/coins/images/37836/thumb/buildlogo.png?1715741487", 
      "decimals": 18
    }, 
    {
      "name": "Steakhouse USDA  Base  Morpho Vault", 
      "abi": "ERC20_ABI", 
      "symbol": "STEAKUSDA", 
      "priority": 3, 
      "address": "0xbeefa1abfebe621df50ceaef9f54fdb73648c92c", 
      "logo": "https://assets.coingecko.com/coins/images/52607/thumb/Screenshot_2024-12-07_at_11.17.05%E2%80%AFPM.png?1733757590", 
      "decimals": 18
    }, 
    {
      "name": "Bsop", 
      "abi": "ERC20_ABI", 
      "symbol": "BSOP", 
      "priority": 3, 
      "address": "0x9704d2adbc02c085ff526a37ac64872027ac8a50", 
      "logo": "https://assets.coingecko.com/coins/images/53930/thumb/IMG_20250123_195741_620.png?1737746583", 
      "decimals": 18
    }, 
    {
      "name": "GPUs", 
      "abi": "ERC20_ABI", 
      "symbol": "GPUS", 
      "priority": 3, 
      "address": "0x155979e71d5b781b546ab05b5bee313dbb2f6394", 
      "logo": "https://assets.coingecko.com/coins/images/55024/thumb/nov_ai.png?1743244016", 
      "decimals": 18
    }, 
    {
      "name": "Steakhouse ETH  Base  Morpho Vault", 
      "abi": "ERC20_ABI", 
      "symbol": "STEAKETH", 
      "priority": 3, 
      "address": "0xbeef050a7485865a7a8d8ca0cc5f7536b7a3443e", 
      "logo": "https://assets.coingecko.com/coins/images/52606/thumb/steakETH.png?1733757574", 
      "decimals": 18
    }, 
    {
      "name": "iAgent Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "AGNT", 
      "priority": 3, 
      "address": "0x521ebb84ea82ee65154b68ecfe3a7292fb3779d6", 
      "logo": "https://assets.coingecko.com/coins/images/39468/thumb/coingeckoAGNT.png?1742200816", 
      "decimals": 18
    }, 
    {
      "name": "Flex perpetuals", 
      "abi": "ERC20_ABI", 
      "symbol": "FDX", 
      "priority": 3, 
      "address": "0xe248c0bce837b8dfb21fdfa51fb31d22fbbb4380", 
      "logo": "https://assets.coingecko.com/coins/images/54497/thumb/FDX_light.png?1740125708", 
      "decimals": 18
    }, 
    {
      "name": "Vabble  OLD ", 
      "abi": "ERC20_ABI", 
      "symbol": "VAB", 
      "priority": 3, 
      "address": "0x2c9ab600d71967ff259c491ad51f517886740cbc", 
      "logo": "https://assets.coingecko.com/coins/images/17508/thumb/vabble.png?1705376555", 
      "decimals": 18
    }, 
    {
      "name": "H1DR4 by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "H1DR4", 
      "priority": 3, 
      "address": "0x83abfc4beec2ecf12995005d751a42df691c09c1", 
      "logo": "https://assets.coingecko.com/coins/images/53365/thumb/IMG_9149.JPG?1736196477", 
      "decimals": 18
    }, 
    {
      "name": "Brewlabs", 
      "abi": "ERC20_ABI", 
      "symbol": "BREW", 
      "priority": 3, 
      "address": "0x73b7f22618e06f7d15ff5bf11b506016cd3758da", 
      "logo": "https://assets.coingecko.com/coins/images/54305/thumb/brew.jpg?1739181018", 
      "decimals": 18
    }, 
    {
      "name": "Summer", 
      "abi": "ERC20_ABI", 
      "symbol": "SUMR", 
      "priority": 3, 
      "address": "0x194f360d130f2393a5e9f3117a6a1b78abea1624", 
      "logo": "https://assets.coingecko.com/coins/images/54144/thumb/Group_427320880.png?1738399205", 
      "decimals": 18
    }, 
    {
      "name": "Chromia s EVAL by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "EVAL", 
      "priority": 3, 
      "address": "0xdd78523217390bb0d49c7601e7e54c36d71622f0", 
      "logo": "https://assets.coingecko.com/coins/images/54016/thumb/token1_%281%29.png?1737993873", 
      "decimals": 18
    }, 
    {
      "name": "Le Bleu Elefant", 
      "abi": "ERC20_ABI", 
      "symbol": "BLEU", 
      "priority": 3, 
      "address": "0xbf4db8b7a679f89ef38125d5f84dd1446af2ea3b", 
      "logo": "https://assets.coingecko.com/coins/images/37811/thumb/b.png?1715597915", 
      "decimals": 18
    }, 
    {
      "name": "Pyth USDC", 
      "abi": "ERC20_ABI", 
      "symbol": "PYTHUSDC", 
      "priority": 3, 
      "address": "0x0fabfeacedf47e890c50c8120177fff69c6a1d9b", 
      "logo": "https://assets.coingecko.com/coins/images/51550/thumb/pngtree-usd-coin-usdc-digital-stablecoin-icon-technology-pay-web-vector-png-image_37843734.png?1731517093", 
      "decimals": 18
    }, 
    {
      "name": "Moonwell Flagship EURC  Morpho Vault ", 
      "abi": "ERC20_ABI", 
      "symbol": "MWEURC", 
      "priority": 3, 
      "address": "0xf24608e0ccb972b0b0f4a6446a0bbf58c701a026", 
      "logo": "https://assets.coingecko.com/coins/images/52386/thumb/Untitled_design_%281%29.png?1733265573", 
      "decimals": 18
    }, 
    {
      "name": "LESTER by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "LESTER", 
      "priority": 3, 
      "address": "0x27d7959cf26135d8019d0f1e4a2280a8a355c4f5", 
      "logo": "https://assets.coingecko.com/coins/images/53372/thumb/lester.png?1736208500", 
      "decimals": 18
    }, 
    {
      "name": "Cod3x", 
      "abi": "ERC20_ABI", 
      "symbol": "CDX", 
      "priority": 3, 
      "address": "0xc0d3700000c0e32716863323bfd936b54a1633d1", 
      "logo": "https://assets.coingecko.com/coins/images/54460/thumb/Token_white.png?1739846199", 
      "decimals": 18
    }, 
    {
      "name": "Based Bunny", 
      "abi": "ERC20_ABI", 
      "symbol": "BUNNY", 
      "priority": 3, 
      "address": "0x75570e1189ffc1d63b3417cdf0889f87cd3e9bd1", 
      "logo": "https://assets.coingecko.com/coins/images/37312/thumb/Untitled_%28200_x_200_px%29.png?1713953045", 
      "decimals": 18
    }, 
    {
      "name": "Winkies", 
      "abi": "ERC20_ABI", 
      "symbol": "WNK", 
      "priority": 3, 
      "address": "0xbf82115918a88e2120c0f73d99ccd8f95c301b59", 
      "logo": "https://assets.coingecko.com/coins/images/22260/thumb/logo_WNK_final.png?1741842182", 
      "decimals": 18
    }, 
    {
      "name": "NIKITA by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "NIKITA", 
      "priority": 3, 
      "address": "0x698b49063c14d2753d23064ff891a876cffa6fb5", 
      "logo": "https://assets.coingecko.com/coins/images/52146/thumb/NikitaNewPP.png?1734294864", 
      "decimals": 18
    }, 
    {
      "name": "Xena Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "XEN", 
      "priority": 3, 
      "address": "0x981d41c115a2d48cb1215d13bda8f989d407c9c5", 
      "logo": "https://assets.coingecko.com/coins/images/32253/thumb/Xena_Logo.png?1697010168", 
      "decimals": 18
    }, 
    {
      "name": "MINKY", 
      "abi": "ERC20_ABI", 
      "symbol": "MINKY", 
      "priority": 3, 
      "address": "0xf9b738c2e7adc4f299c57afd0890b925a5efea6f", 
      "logo": "https://assets.coingecko.com/coins/images/39903/thumb/MINKY_FINAL_PROFILE_PIC_copy.png?1724735986", 
      "decimals": 18
    }, 
    {
      "name": "Senku Ishigami by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SENKU", 
      "priority": 3, 
      "address": "0x0671799f205b8880d270fc6bec77942636dd8c03", 
      "logo": "https://assets.coingecko.com/coins/images/53137/thumb/1.jpg?1735374643", 
      "decimals": 18
    }, 
    {
      "name": "Pepe But Blue", 
      "abi": "ERC20_ABI", 
      "symbol": "PBB", 
      "priority": 3, 
      "address": "0x9a3b7959e998bf2b50ef1969067d623877050d92", 
      "logo": "https://assets.coingecko.com/coins/images/36206/thumb/200px.png?1710833805", 
      "decimals": 18
    }, 
    {
      "name": "ivault", 
      "abi": "ERC20_ABI", 
      "symbol": "IVT", 
      "priority": 3, 
      "address": "0x4b12507e171970b3acd48edfeb5bd1c676e61280", 
      "logo": "https://assets.coingecko.com/coins/images/53215/thumb/ivault_Token_logo_200x200.png?1735674471", 
      "decimals": 18
    }, 
    {
      "name": "sad trombone", 
      "abi": "ERC20_ABI", 
      "symbol": "WOMPWOMP", 
      "priority": 3, 
      "address": "0xf4ffe72af996335e0140c06f23fc6b69e257deec", 
      "logo": "https://assets.coingecko.com/coins/images/38263/thumb/Coin_gecko.png?1716942635", 
      "decimals": 18
    }, 
    {
      "name": "The Pea Guy by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "PEAGUY", 
      "priority": 3, 
      "address": "0x44e1c6bc3a4d2058ee3f290bcb27c4da8c5b2e3e", 
      "logo": "https://assets.coingecko.com/coins/images/53170/thumb/IMG_20241229_165944_305.png?1735507961", 
      "decimals": 18
    }, 
    {
      "name": "Nogwai", 
      "abi": "ERC20_ABI", 
      "symbol": "NOGWAI", 
      "priority": 3, 
      "address": "0xbd97693278f1948c59f65f130fd87e7ff7c61d11", 
      "logo": "https://assets.coingecko.com/coins/images/39002/thumb/Nogwai-Coin-Logo_200.png?1719821827", 
      "decimals": 18
    }, 
    {
      "name": "Miu", 
      "abi": "ERC20_ABI", 
      "symbol": "MIU", 
      "priority": 3, 
      "address": "0x77f8fbccd9995d1a00ae94badaa293e7eafc4a4d", 
      "logo": "https://assets.coingecko.com/coins/images/38160/thumb/200x200.jpg?1716673677", 
      "decimals": 18
    }, 
    {
      "name": "Podflow AI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "POD", 
      "priority": 3, 
      "address": "0x8e3bff1abf376f7a5d036cc3d85766394744dd04", 
      "logo": "https://assets.coingecko.com/coins/images/52569/thumb/pod-logo.png?1733688808", 
      "decimals": 18
    }, 
    {
      "name": "TOSHE", 
      "abi": "ERC20_ABI", 
      "symbol": "TOSHE", 
      "priority": 3, 
      "address": "0x00e57ec29ef2ba7df07ad10573011647b2366f6d", 
      "logo": "https://assets.coingecko.com/coins/images/23311/thumb/TOSHE.png?1704856679", 
      "decimals": 18
    }, 
    {
      "name": "Maxi", 
      "abi": "ERC20_ABI", 
      "symbol": "MAXI", 
      "priority": 3, 
      "address": "0x080c169cd58122f8e1d36713bf8bcbca45176905", 
      "logo": "https://assets.coingecko.com/coins/images/50638/thumb/photo_2024-10-12_07-26-14.png?1728775407", 
      "decimals": 18
    }, 
    {
      "name": "Anzen Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "ANZ", 
      "priority": 3, 
      "address": "0xeec468333ccc16d4bf1cef497a56cf8c0aae4ca3", 
      "logo": "https://assets.coingecko.com/coins/images/52456/thumb/ANZ_symbol200w.png?1733391218", 
      "decimals": 18
    }, 
    {
      "name": "SEED", 
      "abi": "ERC20_ABI", 
      "symbol": "SEED", 
      "priority": 3, 
      "address": "0x546d239032b24eceee0cb05c92fc39090846adc7", 
      "logo": "https://assets.coingecko.com/coins/images/35204/thumb/logo.png?1737478499", 
      "decimals": 18
    }, 
    {
      "name": "launchbot", 
      "abi": "ERC20_ABI", 
      "symbol": "ROCKETAI", 
      "priority": 3, 
      "address": "0x03f64375f98aaafb617d18ca1e4a9a85a5c74476", 
      "logo": "https://assets.coingecko.com/coins/images/53432/thumb/200x200circle.png?1736411093", 
      "decimals": 18
    }, 
    {
      "name": "Help", 
      "abi": "ERC20_ABI", 
      "symbol": "HELP", 
      "priority": 3, 
      "address": "0x1c9f5e5b5c172955660c11ec0df65b68ecb5fb69", 
      "logo": "https://assets.coingecko.com/coins/images/51165/thumb/help.png?1731654094", 
      "decimals": 18
    }, 
    {
      "name": "Bebe on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BEBE", 
      "priority": 3, 
      "address": "0xef8a84eb92afd22a115d5e81b2c3c605b866f044", 
      "logo": "https://assets.coingecko.com/coins/images/36839/thumb/logo.png?1712561707", 
      "decimals": 18
    }, 
    {
      "name": "Wolf of Dumb Street", 
      "abi": "ERC20_ABI", 
      "symbol": "WODS", 
      "priority": 3, 
      "address": "0x4398c398e5ac747e6d51bf1db1dac346ca90fee0", 
      "logo": "https://assets.coingecko.com/coins/images/54163/thumb/WODSLOGO.png?1738482779", 
      "decimals": 18
    }, 
    {
      "name": "Operating System", 
      "abi": "ERC20_ABI", 
      "symbol": "OPSYS", 
      "priority": 3, 
      "address": "0x38b88d6568d61556d33592ad7bc24e89a7fb6691", 
      "logo": "https://assets.coingecko.com/coins/images/53900/thumb/Opsys.png?1737704123", 
      "decimals": 18
    }, 
    {
      "name": "Morpho Degen", 
      "abi": "ERC20_ABI", 
      "symbol": "MDEGEN", 
      "priority": 3, 
      "address": "0x8c3a6b12332a6354805eb4b72ef619aedd22bcdd", 
      "logo": "https://assets.coingecko.com/coins/images/51551/thumb/degen-base-degen-logo.png?1731517297", 
      "decimals": 18
    }, 
    {
      "name": "Ziggy", 
      "abi": "ERC20_ABI", 
      "symbol": "ZIGGY", 
      "priority": 3, 
      "address": "0xd628dc2c4ec10feb07e5c8bf039f7c1c374d1b07", 
      "logo": "https://assets.coingecko.com/coins/images/55087/thumb/200x200.png?1743665692", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped ADA  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UADA", 
      "priority": 3, 
      "address": "0xa3a34a0d9a08ccddb6ed422ac0a28a06731335aa", 
      "logo": "https://assets.coingecko.com/coins/images/51868/thumb/UA-ADA.png?1732095196", 
      "decimals": 18
    }, 
    {
      "name": "Hestia", 
      "abi": "ERC20_ABI", 
      "symbol": "HESTIA", 
      "priority": 3, 
      "address": "0xbc7755a153e852cf76cccddb4c2e7c368f6259d8", 
      "logo": "https://assets.coingecko.com/coins/images/54202/thumb/logo.png?1738750723", 
      "decimals": 18
    }, 
    {
      "name": "Saitoshi by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SAI", 
      "priority": 3, 
      "address": "0xcff4429d8a323dd6b64b79a4460bec6d531fcfa8", 
      "logo": "https://assets.coingecko.com/coins/images/53810/thumb/IMG_1482.jpeg?1737411154", 
      "decimals": 18
    }, 
    {
      "name": "ProductClank", 
      "abi": "ERC20_ABI", 
      "symbol": "PRO", 
      "priority": 3, 
      "address": "0x2e7df1528f4ea427f48b49ae8a1f78149db7185a", 
      "logo": "https://assets.coingecko.com/coins/images/54712/thumb/ProductClank_Transparent_Background.png?1741185094", 
      "decimals": 18
    }, 
    {
      "name": "Luna by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "LUNA", 
      "priority": 3, 
      "address": "0x55cd6469f597452b5a7536e2cd98fde4c1247ee4", 
      "logo": "https://assets.coingecko.com/coins/images/50880/thumb/luna.png?1729478763", 
      "decimals": 18
    }, 
    {
      "name": "DackieSwap", 
      "abi": "ERC20_ABI", 
      "symbol": "DACKIE", 
      "priority": 3, 
      "address": "0x73326b4d0225c429bed050c11c4422d91470aaf4", 
      "logo": "https://assets.coingecko.com/coins/images/53171/thumb/dackie_superchain_logo_circle.png?1735663398", 
      "decimals": 18
    }, 
    {
      "name": "IAMAI", 
      "abi": "ERC20_ABI", 
      "symbol": "IAMAI", 
      "priority": 3, 
      "address": "0xc3d64ee7056cfd33c8382679773f8d6277e5c2c9", 
      "logo": "https://assets.coingecko.com/coins/images/54161/thumb/xZkO4l5M_400x400_%281%29.jpg?1738482411", 
      "decimals": 18
    }, 
    {
      "name": "Brett", 
      "abi": "ERC20_ABI", 
      "symbol": "BRETT", 
      "priority": 3, 
      "address": "0x532f27101965dd16442e59d40670faf5ebb142e4", 
      "logo": "https://assets.coingecko.com/coins/images/35529/thumb/1000050750.png?1709031995", 
      "decimals": 18
    }, 
    {
      "name": "Pyth ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "PYTHETH", 
      "priority": 3, 
      "address": "0x80d9964feb4a507dd697b4437fc5b25b618ce446", 
      "logo": "https://assets.coingecko.com/coins/images/51548/thumb/ethereum-eth-logo.png?1731517011", 
      "decimals": 18
    }, 
    {
      "name": "nounspace", 
      "abi": "ERC20_ABI", 
      "symbol": "SPACE", 
      "priority": 3, 
      "address": "0x48c6740bcf807d6c47c864faeea15ed4da3910ab", 
      "logo": "https://assets.coingecko.com/coins/images/40142/thumb/Space_Icon_2x.png?1726016754", 
      "decimals": 18
    }, 
    {
      "name": "Human Intelligence Machin", 
      "abi": "ERC20_ABI", 
      "symbol": "HIM", 
      "priority": 3, 
      "address": "0xc1ffaef4e7d553bbaf13926e258a1a555a363a07", 
      "logo": "https://assets.coingecko.com/coins/images/37898/thumb/Human_Intelligence_Machine.png?1715848133", 
      "decimals": 18
    }, 
    {
      "name": "KAITO", 
      "abi": "ERC20_ABI", 
      "symbol": "KAITO", 
      "priority": 3, 
      "address": "0x98d0baa52b2d063e780de12f615f963fe8537553", 
      "logo": "https://assets.coingecko.com/coins/images/54411/thumb/Qm4DW488_400x400.jpg?1739552780", 
      "decimals": 18
    }, 
    {
      "name": "Base Pro Shops", 
      "abi": "ERC20_ABI", 
      "symbol": "BPS", 
      "priority": 3, 
      "address": "0xda761a290e01c69325d12d82ac402e5a73d62e81", 
      "logo": "https://assets.coingecko.com/coins/images/36855/thumb/BPS_2.png?1712634757", 
      "decimals": 18
    }, 
    {
      "name": "Victorai by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VCTRAI", 
      "priority": 3, 
      "address": "0x436b0fe70c84402a531fd0989ceecf5caa80244c", 
      "logo": "https://assets.coingecko.com/coins/images/53732/thumb/vicotrai.png?1737144934", 
      "decimals": 18
    }, 
    {
      "name": "RWAX", 
      "abi": "ERC20_ABI", 
      "symbol": "RWAX", 
      "priority": 3, 
      "address": "0xe0023e73aab4fe9a22f059a9d27e857e027ee3dc", 
      "logo": "https://assets.coingecko.com/coins/images/38266/thumb/Rwax_Token_Symbol_logo-200.png?1716949733", 
      "decimals": 18
    }, 
    {
      "name": "Tevaera", 
      "abi": "ERC20_ABI", 
      "symbol": "TEVA", 
      "priority": 3, 
      "address": "0x00309d634d11541b857f927be91ad2f0bd78894c", 
      "logo": "https://assets.coingecko.com/coins/images/53086/thumb/Teva-200.png?1735204737", 
      "decimals": 18
    }, 
    {
      "name": "Zenith by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ZENITH", 
      "priority": 3, 
      "address": "0x33c527361ab68b46a6669f82d25b704423cae568", 
      "logo": "https://assets.coingecko.com/coins/images/53731/thumb/Byte.png?1737144645", 
      "decimals": 18
    }, 
    {
      "name": "Aethernet", 
      "abi": "ERC20_ABI", 
      "symbol": "AETHER", 
      "priority": 3, 
      "address": "0xf3708859c178709d5319ad5405bc81511b72b9e9", 
      "logo": "https://assets.coingecko.com/coins/images/51065/thumb/Aether_Farcaster_frame.png?1729943869", 
      "decimals": 18
    }, 
    {
      "name": "BEPE", 
      "abi": "ERC20_ABI", 
      "symbol": "BEPE", 
      "priority": 3, 
      "address": "0x10f434b3d1cc13a4a79b062dcc25706f64d10d47", 
      "logo": "https://assets.coingecko.com/coins/images/35989/thumb/NEW_LOGO200x200.png?1721595288", 
      "decimals": 9
    }, 
    {
      "name": "GertrudeDataPig", 
      "abi": "ERC20_ABI", 
      "symbol": "GDP", 
      "priority": 3, 
      "address": "0xf8f97a79a3fa77104fab4814e3ed93899777de0d", 
      "logo": "https://assets.coingecko.com/coins/images/53175/thumb/logo-mark-fill-default.png?1735558750", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Ethereum Classic  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UETC", 
      "priority": 3, 
      "address": "0xd61bcf79b26787ae993f75b064d2e3b3cc738c5d", 
      "logo": "https://assets.coingecko.com/coins/images/54727/thumb/UA-ETC.png?1741245697", 
      "decimals": 18
    }, 
    {
      "name": "AI Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "AI", 
      "priority": 3, 
      "address": "0x938171227ece879267122a36847b219cbd3b9d47", 
      "logo": "https://assets.coingecko.com/coins/images/54512/thumb/ai_200x200.png?1740070043", 
      "decimals": 18
    }, 
    {
      "name": "AI Agent Layer", 
      "abi": "ERC20_ABI", 
      "symbol": "AIFUN", 
      "priority": 3, 
      "address": "0xbdf317f9c153246c429f23f4093087164b145390", 
      "logo": "https://assets.coingecko.com/coins/images/51634/thumb/logo_400x400.png?1731686436", 
      "decimals": 18
    }, 
    {
      "name": "Tokito", 
      "abi": "ERC20_ABI", 
      "symbol": "TOKITO", 
      "priority": 3, 
      "address": "0x097b1b242d3ed90e191c5f83a62f41abe16f6ceb", 
      "logo": "https://assets.coingecko.com/coins/images/53610/thumb/tyrael_httpss.mj.run2vyU88q5UzQ_Could_you_help_me_reimagine_t_217896db-6dea-470a-b5d5-92af884a15f1_1.png?1736884104", 
      "decimals": 18
    }, 
    {
      "name": "AI Market Compass", 
      "abi": "ERC20_ABI", 
      "symbol": "AIM", 
      "priority": 3, 
      "address": "0x97b959385dfdcaf252223838746beb232ac601aa", 
      "logo": "https://assets.coingecko.com/coins/images/39363/thumb/AIM_%282%29.jpg?1723415448", 
      "decimals": 18
    }, 
    {
      "name": "Ali for fx protocol by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "FX", 
      "priority": 3, 
      "address": "0xebf7d4d84372f5df1b5d0e3ddd889e5bc286b1c3", 
      "logo": "https://assets.coingecko.com/coins/images/52319/thumb/imresizer-1732989192834.jpg?1733077790", 
      "decimals": 18
    }, 
    {
      "name": "MetaInside by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "MIN", 
      "priority": 3, 
      "address": "0xbb59167235bf3588b357de6cd98ca6f94d753c76", 
      "logo": "https://assets.coingecko.com/coins/images/54236/thumb/metainside-logo.png?1738871801", 
      "decimals": 18
    }, 
    {
      "name": "Javsphere", 
      "abi": "ERC20_ABI", 
      "symbol": "JAV", 
      "priority": 3, 
      "address": "0xedc68c4c54228d273ed50fc450e253f685a2c6b9", 
      "logo": "https://assets.coingecko.com/coins/images/36740/thumb/jav-token-v2.png?1712210923", 
      "decimals": 18
    }, 
    {
      "name": " gai16zbrielShai16zpr0", 
      "abi": "ERC20_ABI", 
      "symbol": "GAIB", 
      "priority": 3, 
      "address": "0x9a1b42f7f6d649b73bdb275972295acc940b153a", 
      "logo": "https://assets.coingecko.com/coins/images/54011/thumb/cutelex.jpg?1737967746", 
      "decimals": 18
    }, 
    {
      "name": "Piggy", 
      "abi": "ERC20_ABI", 
      "symbol": "PIGGY", 
      "priority": 3, 
      "address": "0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d", 
      "logo": "https://assets.coingecko.com/coins/images/52128/thumb/image_%288%29.png?1732740724", 
      "decimals": 18
    }, 
    {
      "name": "VaderAI by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "VADER", 
      "priority": 3, 
      "address": "0x731814e491571a2e9ee3c5b1f7f3b962ee8f4870", 
      "logo": "https://assets.coingecko.com/coins/images/51910/thumb/kare_pepe.png?1733345833", 
      "decimals": 18
    }, 
    {
      "name": "Based Apu", 
      "abi": "ERC20_ABI", 
      "symbol": "APU", 
      "priority": 3, 
      "address": "0x6f35720b272bf23832852b13ae9888c706e1a379", 
      "logo": "https://assets.coingecko.com/coins/images/52610/thumb/apu-ezgif.com-webp-to-jpg-converter.jpg?1733758449", 
      "decimals": 18
    }, 
    {
      "name": "Simmi Token", 
      "abi": "ERC20_ABI", 
      "symbol": "SIMMI", 
      "priority": 3, 
      "address": "0x161e113b8e9bbaefb846f73f31624f6f9607bd44", 
      "logo": "https://assets.coingecko.com/coins/images/52349/thumb/simmi.png?1733160996", 
      "decimals": 18
    }, 
    {
      "name": "Ultraround Money", 
      "abi": "ERC20_ABI", 
      "symbol": "CIRCLE", 
      "priority": 3, 
      "address": "0x5babfc2f240bc5de90eb7e19d789412db1dec402", 
      "logo": "https://assets.coingecko.com/coins/images/35274/thumb/circle.png?1708048159", 
      "decimals": 18
    }, 
    {
      "name": "Nomad", 
      "abi": "ERC20_ABI", 
      "symbol": "NOM", 
      "priority": 3, 
      "address": "0x6776caccfdcd0dfd5a38cb1d0b3b39a4ca9283ce", 
      "logo": "https://assets.coingecko.com/coins/images/37872/thumb/NOM_LOGO.jpeg?1715829131", 
      "decimals": 18
    }, 
    {
      "name": "Agent Zero", 
      "abi": "ERC20_ABI", 
      "symbol": "WSB", 
      "priority": 3, 
      "address": "0x92dc4ab92eb16e781559e612f349916988013d5a", 
      "logo": "https://assets.coingecko.com/coins/images/51310/thumb/photo_2024-11-03_07-33-29.jpg?1730643955", 
      "decimals": 18
    }, 
    {
      "name": "Tyler", 
      "abi": "ERC20_ABI", 
      "symbol": "TYLER", 
      "priority": 3, 
      "address": "0x65e570b560027f493f2b1907e8e8e3b9546053bd", 
      "logo": "https://assets.coingecko.com/coins/images/50734/thumb/photo_2024-09-23_09-14-08.jpg?1728916087", 
      "decimals": 18
    }, 
    {
      "name": "Otto", 
      "abi": "ERC20_ABI", 
      "symbol": "OTTO", 
      "priority": 3, 
      "address": "0x62ff28a01abd2484adb18c61f78f30fb2e4a6fdb", 
      "logo": "https://assets.coingecko.com/coins/images/52644/thumb/Otto_logo_200x200.png?1733873416", 
      "decimals": 18
    }, 
    {
      "name": "MOON INU", 
      "abi": "ERC20_ABI", 
      "symbol": "MOON", 
      "priority": 3, 
      "address": "0xfd008f937b4d73eeb00cf74ce90c392be5f07f96", 
      "logo": "https://assets.coingecko.com/coins/images/36493/thumb/moon-200.png?1711612557", 
      "decimals": 18
    }, 
    {
      "name": "BEMU", 
      "abi": "ERC20_ABI", 
      "symbol": "BEMU", 
      "priority": 3, 
      "address": "0x17ce44b66dfd15c270dc24aca2e367adfed41620", 
      "logo": "https://assets.coingecko.com/coins/images/54936/thumb/jyTx7YWK_400x400.jpg?1742629118", 
      "decimals": 18
    }, 
    {
      "name": "Smudge Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "SMUDCAT", 
      "priority": 3, 
      "address": "0x22dc834c3ff3e45f484bf24b9b07b851b981900f", 
      "logo": "https://assets.coingecko.com/coins/images/31209/thumb/logo192.png?1696530036", 
      "decimals": 18
    }, 
    {
      "name": "AI Waifu", 
      "abi": "ERC20_ABI", 
      "symbol": "WAI", 
      "priority": 3, 
      "address": "0x23471e7250bcd7ee21df3f39ed6151931d1e076b", 
      "logo": "https://assets.coingecko.com/coins/images/50441/thumb/Logo.png?1727768050", 
      "decimals": 18
    }, 
    {
      "name": "Agent Humpty Dumpty", 
      "abi": "ERC20_ABI", 
      "symbol": "AHD", 
      "priority": 3, 
      "address": "0x313f2cddcdc74747c18d2f529ec9c087860198ed", 
      "logo": "https://assets.coingecko.com/coins/images/54888/thumb/IMG_3611.png?1742385756", 
      "decimals": 18
    }, 
    {
      "name": "Based ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "BSDETH", 
      "priority": 3, 
      "address": "0xcb327b99ff831bf8223cced12b1338ff3aa322ff", 
      "logo": "https://assets.coingecko.com/coins/images/35774/thumb/Icon_White_on_Blue.png?1709793654", 
      "decimals": 18
    }, 
    {
      "name": "MISATO", 
      "abi": "ERC20_ABI", 
      "symbol": "MISATO", 
      "priority": 3, 
      "address": "0x98f4779fccb177a6d856dd1dfd78cd15b7cd2af5", 
      "logo": "https://assets.coingecko.com/coins/images/52231/thumb/misatocleanboost.png?1732802425", 
      "decimals": 18
    }, 
    {
      "name": "Locked Money", 
      "abi": "ERC20_ABI", 
      "symbol": "LMY", 
      "priority": 3, 
      "address": "0x739f93504a9e26d5973862dbc4a44178cc264852", 
      "logo": "https://assets.coingecko.com/coins/images/54435/thumb/Locked_Money.png?1739707091", 
      "decimals": 18
    }, 
    {
      "name": "XO Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "XOXO", 
      "priority": 3, 
      "address": "0xc799ada44171b741abf41ee54fb1b47fda5960be", 
      "logo": "https://assets.coingecko.com/coins/images/54426/thumb/token_256_256.png?1739605473", 
      "decimals": 6
    }, 
    {
      "name": "Toup e Tech", 
      "abi": "ERC20_ABI", 
      "symbol": "WIG", 
      "priority": 3, 
      "address": "0x58dd173f30ecffdfebcd242c71241fb2f179e9b9", 
      "logo": "https://assets.coingecko.com/coins/images/33279/thumb/token_logo-01.png?1701334931", 
      "decimals": 18
    }, 
    {
      "name": "Definitive", 
      "abi": "ERC20_ABI", 
      "symbol": "EDGE", 
      "priority": 3, 
      "address": "0xed6e000def95780fb89734c07ee2ce9f6dcaf110", 
      "logo": "https://assets.coingecko.com/coins/images/55072/thumb/EDGE-120x120.png?1743598652", 
      "decimals": 18
    }, 
    {
      "name": "AetherX", 
      "abi": "ERC20_ABI", 
      "symbol": "AETX", 
      "priority": 3, 
      "address": "0xfe0c0b15798b8c9107cd4aa556a87eb031263e8b", 
      "logo": "https://assets.coingecko.com/coins/images/54839/thumb/logomark_x200.png?1742016823", 
      "decimals": 8
    }, 
    {
      "name": "Athena by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "ATHENA", 
      "priority": 3, 
      "address": "0x1a43287cbfcc5f35082e6e2aa98e5b474fe7bd4e", 
      "logo": "https://assets.coingecko.com/coins/images/52006/thumb/athenalogo.png?1732304469", 
      "decimals": 18
    }, 
    {
      "name": "CLANKTARDIO", 
      "abi": "ERC20_ABI", 
      "symbol": "CLANKTARDIO", 
      "priority": 3, 
      "address": "0x075b25fae35b121b5295b7fa779e73094b2e9153", 
      "logo": "https://assets.coingecko.com/coins/images/53502/thumb/clankerpfp.jpg?1736534941", 
      "decimals": 18
    }, 
    {
      "name": "QVRS", 
      "abi": "ERC20_ABI", 
      "symbol": "QVRS", 
      "priority": 3, 
      "address": "0x45f368693eee8e3610270f82085784c1c8ac124b", 
      "logo": "https://assets.coingecko.com/coins/images/52922/thumb/qvrse-logo-200x200.png?1734697444", 
      "decimals": 18
    }, 
    {
      "name": "XtremeGPT", 
      "abi": "ERC20_ABI", 
      "symbol": "XTGPT", 
      "priority": 3, 
      "address": "0x0d5d2450f19ffa71b16a95b3fabef52786238828", 
      "logo": "https://assets.coingecko.com/coins/images/52299/thumb/xtremegpt.png?1733045634", 
      "decimals": 18
    }, 
    {
      "name": "CloudBase", 
      "abi": "ERC20_ABI", 
      "symbol": "CLOUD", 
      "priority": 3, 
      "address": "0x17d8217c0f4b4742aaace053281f42eb05ab211d", 
      "logo": "https://assets.coingecko.com/coins/images/31391/thumb/CloudBaselogo_%281%29.png?1696530207", 
      "decimals": 18
    }, 
    {
      "name": "Particles Money xETH", 
      "abi": "ERC20_ABI", 
      "symbol": "XETH", 
      "priority": 3, 
      "address": "0xc4655eb36aa7f1e476a3059a609443ded02ab61f", 
      "logo": "https://assets.coingecko.com/coins/images/33163/thumb/xETH.png?1700831188", 
      "decimals": 18
    }, 
    {
      "name": "Baseape", 
      "abi": "ERC20_ABI", 
      "symbol": "BAPE", 
      "priority": 3, 
      "address": "0x09f29e2acdb76a831668b03ce2e3ad7bb41aaa5c", 
      "logo": "https://assets.coingecko.com/coins/images/31211/thumb/bapeicon.png?1696530038", 
      "decimals": 18
    }, 
    {
      "name": "Landtorn Shard", 
      "abi": "ERC20_ABI", 
      "symbol": "SHARD", 
      "priority": 3, 
      "address": "0x52c45d3068c937cb1e6b4a7f2c2a66b85056dd24", 
      "logo": "https://assets.coingecko.com/coins/images/31268/thumb/shard.jpg?1696530092", 
      "decimals": 8
    }, 
    {
      "name": "Vainguard", 
      "abi": "ERC20_ABI", 
      "symbol": "VAIN", 
      "priority": 3, 
      "address": "0x6c7ebb64e258f5712eeec83ceaf41c3dcbb534b1", 
      "logo": "https://assets.coingecko.com/coins/images/52365/thumb/Vain_CG.png?1733210740", 
      "decimals": 18
    }, 
    {
      "name": "Music by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "MUSIC", 
      "priority": 3, 
      "address": "0xc655c331d1aa7f96c252f1f40ce13d80eac53504", 
      "logo": "https://assets.coingecko.com/coins/images/53050/thumb/DJ_AGENT_BG_1.png?1735149492", 
      "decimals": 18
    }, 
    {
      "name": "AI Voice Agents", 
      "abi": "ERC20_ABI", 
      "symbol": "AIVA", 
      "priority": 3, 
      "address": "0xbdb0e1c40a76c5113a023d685b419b90b01e3d61", 
      "logo": "https://assets.coingecko.com/coins/images/52908/thumb/TnED_4Vn_400x400.jpg?1734640800", 
      "decimals": 18
    }, 
    {
      "name": "MoonBase", 
      "abi": "ERC20_ABI", 
      "symbol": "MOON", 
      "priority": 3, 
      "address": "0xef0b2ccb53a683fa48799245f376d6a60929f003", 
      "logo": "https://assets.coingecko.com/coins/images/31867/thumb/moon-logo-200x200.png?1696530679", 
      "decimals": 18
    }, 
    {
      "name": "STYLE Token", 
      "abi": "ERC20_ABI", 
      "symbol": "STYLE", 
      "priority": 3, 
      "address": "0x958a405cfd2789e2b7f261d542feae84a8514c44", 
      "logo": "https://assets.coingecko.com/coins/images/37507/thumb/STYLE_Icon_200x200.png?1738142802", 
      "decimals": 18
    }, 
    {
      "name": "PlebDreke", 
      "abi": "ERC20_ABI", 
      "symbol": "BLING", 
      "priority": 3, 
      "address": "0x84f074917fb9d464c1264c47296be53424bbc93f", 
      "logo": "https://assets.coingecko.com/coins/images/37288/thumb/image_3.png?1713946317", 
      "decimals": 9
    }, 
    {
      "name": "Aave v3 cbETH", 
      "abi": "ERC20_ABI", 
      "symbol": "ACBETH", 
      "priority": 3, 
      "address": "0xcf3d55c10db69f28fd1a75bd73f3d8a2d9c595ad", 
      "logo": "https://assets.coingecko.com/coins/images/32892/thumb/cbETH.png?1699789253", 
      "decimals": 18
    }, 
    {
      "name": "AicroStrategy", 
      "abi": "ERC20_ABI", 
      "symbol": "AISTR", 
      "priority": 3, 
      "address": "0x20ef84969f6d81ff74ae4591c331858b20ad82cd", 
      "logo": "https://assets.coingecko.com/coins/images/53020/thumb/Aicrostrategy_Aistr_Logo_transparent_copy.png?1736960977", 
      "decimals": 18
    }, 
    {
      "name": "SkyNity SkyDust", 
      "abi": "ERC20_ABI", 
      "symbol": "SDT", 
      "priority": 3, 
      "address": "0x04bc5918a08a526653e83420044b1a26ff34863b", 
      "logo": "https://assets.coingecko.com/coins/images/54490/thumb/logoSDT.png?1739994201", 
      "decimals": 18
    }, 
    {
      "name": "Meme Lordz", 
      "abi": "ERC20_ABI", 
      "symbol": "LORDZ", 
      "priority": 3, 
      "address": "0x32b133add6d99d085ff23f522662b546b70d54a1", 
      "logo": "https://assets.coingecko.com/coins/images/39771/thumb/photo_2024-08-22_19-01-38.jpg?1724878914", 
      "decimals": 18
    }, 
    {
      "name": "Lucky Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "LUCKY", 
      "priority": 3, 
      "address": "0x2c002ffec41568d138acc36f5894d6156398d539", 
      "logo": "https://assets.coingecko.com/coins/images/51334/thumb/LUCKYTokenSymbol.png?1730797716", 
      "decimals": 18
    }, 
    {
      "name": "Frame Token", 
      "abi": "ERC20_ABI", 
      "symbol": "FRAME", 
      "priority": 3, 
      "address": "0x91f45aa2bde7393e0af1cc674ffe75d746b93567", 
      "logo": "https://assets.coingecko.com/coins/images/35034/thumb/Artboard_1_copyd.png?1707189782", 
      "decimals": 18
    }, 
    {
      "name": "Based Fartcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "FARTCOIN", 
      "priority": 3, 
      "address": "0x2f6c17fa9f9bc3600346ab4e48c0701e1d5962ae", 
      "logo": "https://assets.coingecko.com/coins/images/53113/thumb/farrtcoin_logo.png?1735241861", 
      "decimals": 18
    }, 
    {
      "name": "BaseHoundBot by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "HOUND", 
      "priority": 3, 
      "address": "0xccdf2cbabfa37878125ab2d20bfcb9328b7ab3cf", 
      "logo": "https://assets.coingecko.com/coins/images/53384/thumb/basehoundlogo.png?1736274597", 
      "decimals": 18
    }, 
    {
      "name": "Truffi", 
      "abi": "ERC20_ABI", 
      "symbol": "TRUFFI", 
      "priority": 3, 
      "address": "0x2496a9af81a87ed0b17f6edeaf4ac57671d24f38", 
      "logo": "https://assets.coingecko.com/coins/images/37790/thumb/logo.png?1715587315", 
      "decimals": 9
    }, 
    {
      "name": "Overnight fi USDC ", 
      "abi": "ERC20_ABI", 
      "symbol": "USDC+", 
      "priority": 3, 
      "address": "0x85483696cc9970ad9edd786b2c5ef735f38d156f", 
      "logo": "https://assets.coingecko.com/coins/images/34763/thumb/USDC_.png?1705990720", 
      "decimals": 6
    }, 
    {
      "name": "COIN", 
      "abi": "ERC20_ABI", 
      "symbol": "COIN", 
      "priority": 3, 
      "address": "0xd022723a5005f53c95b51d1822f42b1a3366ee4d", 
      "logo": "https://assets.coingecko.com/coins/images/31210/thumb/android-chrome-512x512.png?1696530037", 
      "decimals": 18
    }, 
    {
      "name": "Defi Ira", 
      "abi": "ERC20_ABI", 
      "symbol": "IRA", 
      "priority": 3, 
      "address": "0x029c58a909fbe3d4be85a24f414dda923a3fde0f", 
      "logo": "https://assets.coingecko.com/coins/images/39974/thumb/Defi_Ira.PNG?1724970682", 
      "decimals": 18
    }, 
    {
      "name": "SnailBrook", 
      "abi": "ERC20_ABI", 
      "symbol": "SNAIL", 
      "priority": 3, 
      "address": "0x6bc40d4099f9057b23af309c08d935b890d7adc0", 
      "logo": "https://assets.coingecko.com/coins/images/29922/thumb/snail.jpeg?1713754058", 
      "decimals": 18
    }, 
    {
      "name": "Based Andy", 
      "abi": "ERC20_ABI", 
      "symbol": "ANDY", 
      "priority": 3, 
      "address": "0x543ba622733bc9a7bfadd1d07b6c35ae1f9659d9", 
      "logo": "https://assets.coingecko.com/coins/images/53413/thumb/Based_Andy_New_Logo_Transparent.png?1739557815", 
      "decimals": 18
    }, 
    {
      "name": "Based Brians", 
      "abi": "ERC20_ABI", 
      "symbol": "CAP", 
      "priority": 3, 
      "address": "0xd473475958d4c1538418224a52e5c0a6c997835a", 
      "logo": "https://assets.coingecko.com/coins/images/36029/thumb/based_brian_coingecko.png?1710389319", 
      "decimals": 18
    }, 
    {
      "name": "Based Rate", 
      "abi": "ERC20_ABI", 
      "symbol": "BRATE", 
      "priority": 3, 
      "address": "0xd260115030b9fb6849da169a01ed80b6496d1e99", 
      "logo": "https://assets.coingecko.com/coins/images/32233/thumb/IMG_20231005_222330_591.jpg?1696936841", 
      "decimals": 18
    }, 
    {
      "name": "BASED BULLY", 
      "abi": "ERC20_ABI", 
      "symbol": "BULLY", 
      "priority": 3, 
      "address": "0x3d6ac59538e8b6c223f7ce9ce2fb2387d27cb299", 
      "logo": "https://assets.coingecko.com/coins/images/53839/thumb/basedbullylogo.PNG?1737560782", 
      "decimals": 18
    }, 
    {
      "name": "Base Street", 
      "abi": "ERC20_ABI", 
      "symbol": "STREET", 
      "priority": 3, 
      "address": "0xb661933d9f24ec34dc0fd6862f086079f864b26f", 
      "logo": "https://assets.coingecko.com/coins/images/36611/thumb/0xb661933d9f24ec34dc0fd6862f086079f864b26f_%281%29.png?1711975109", 
      "decimals": 18
    }, 
    {
      "name": "El Dorado Exchange  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "EDE", 
      "priority": 3, 
      "address": "0x0a074378461fb7ed3300ea638c6cc38246db4434", 
      "logo": "https://assets.coingecko.com/coins/images/31296/thumb/ede.jpeg?1696530116", 
      "decimals": 18
    }, 
    {
      "name": "member", 
      "abi": "ERC20_ABI", 
      "symbol": "MEMBER", 
      "priority": 3, 
      "address": "0x7d89e05c0b93b24b5cb23a073e60d008fed1acf9", 
      "logo": "https://assets.coingecko.com/coins/images/36041/thumb/member-coingecko.png?1710400496", 
      "decimals": 18
    }, 
    {
      "name": "Pleb", 
      "abi": "ERC20_ABI", 
      "symbol": "PLEB", 
      "priority": 3, 
      "address": "0x76baa16ff15d61d32e6b3576c3a8c83a25c2f180", 
      "logo": "https://assets.coingecko.com/coins/images/36464/thumb/Logo_200x200.png?1711510780", 
      "decimals": 18
    }, 
    {
      "name": "0xsim by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SAGE", 
      "priority": 3, 
      "address": "0x8feef9f0ffa554e51220a3391e7bb7560526a72a", 
      "logo": "https://assets.coingecko.com/coins/images/53223/thumb/coingecko.png?1735754215", 
      "decimals": 18
    }, 
    {
      "name": "MILO", 
      "abi": "ERC20_ABI", 
      "symbol": "MILO", 
      "priority": 3, 
      "address": "0x6f10607507aff450b8cf0a6fa2641a781889ddfa", 
      "logo": "https://assets.coingecko.com/coins/images/36439/thumb/MILO.png?1711440161", 
      "decimals": 9
    }, 
    {
      "name": "FriendTech33", 
      "abi": "ERC20_ABI", 
      "symbol": "FTW", 
      "priority": 3, 
      "address": "0x3347453ced85bd288d783d85cdec9b01ab90f9d8", 
      "logo": "https://assets.coingecko.com/coins/images/31958/thumb/ft33.png?1696530764", 
      "decimals": 9
    }, 
    {
      "name": "FarLaunch", 
      "abi": "ERC20_ABI", 
      "symbol": "FAR", 
      "priority": 3, 
      "address": "0x93e6407554b2f02640ab806cd57bd83e848ec65d", 
      "logo": "https://assets.coingecko.com/coins/images/35335/thumb/%E9%BB%91%E5%BA%95.png?1708311337", 
      "decimals": 18
    }, 
    {
      "name": "BLARB", 
      "abi": "ERC20_ABI", 
      "symbol": "BLARB", 
      "priority": 3, 
      "address": "0x0d30be9d9c2cf90aeff4fef5b2e8c3d0b02596a0", 
      "logo": "https://assets.coingecko.com/coins/images/36275/thumb/blarb.png?1711005265", 
      "decimals": 18
    }, 
    {
      "name": "Happy Puppy Club", 
      "abi": "ERC20_ABI", 
      "symbol": "HPC", 
      "priority": 3, 
      "address": "0x1f3ba804efb9cfe17d595e7262cea4782dbf6e4e", 
      "logo": "https://assets.coingecko.com/coins/images/35822/thumb/hpc-token-200.png?1717625798", 
      "decimals": 18
    }, 
    {
      "name": "Blue Chip", 
      "abi": "ERC20_ABI", 
      "symbol": "CHIP", 
      "priority": 3, 
      "address": "0x4c40454659c8ec1283355d8e3911ba1745ff6fd1", 
      "logo": "https://assets.coingecko.com/coins/images/36433/thumb/BlueChip-200x200.png?1711435311", 
      "decimals": 9
    }, 
    {
      "name": "Monk gg", 
      "abi": "ERC20_ABI", 
      "symbol": "MONK", 
      "priority": 3, 
      "address": "0xbe8dfc6661fafaa4445eb952586c0d347eacf048", 
      "logo": "https://assets.coingecko.com/coins/images/31502/thumb/Lu4Pg4jC_400x400.jpg?1696530313", 
      "decimals": 18
    }, 
    {
      "name": "It s so over", 
      "abi": "ERC20_ABI", 
      "symbol": "OVER", 
      "priority": 3, 
      "address": "0x7aef64e5997a81f695e0bc951ca874afccd4d1e1", 
      "logo": "https://assets.coingecko.com/coins/images/36635/thumb/over-icon.png?1712254709", 
      "decimals": 18
    }, 
    {
      "name": "maicrotrader", 
      "abi": "ERC20_ABI", 
      "symbol": "MAICRO", 
      "priority": 3, 
      "address": "0xe74731ba9d1da6fd3c8c60ff363732bebac5273e", 
      "logo": "https://assets.coingecko.com/coins/images/54070/thumb/maicrotrader.jpeg?1738141332", 
      "decimals": 18
    }, 
    {
      "name": "Poopcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "POOP", 
      "priority": 3, 
      "address": "0x686b1209b2de12818aa69dd139530448d0c792b3", 
      "logo": "https://assets.coingecko.com/coins/images/36549/thumb/poopcoin.png?1711876394", 
      "decimals": 18
    }, 
    {
      "name": "Torch", 
      "abi": "ERC20_ABI", 
      "symbol": "TORCH", 
      "priority": 3, 
      "address": "0x9252384e10ba6beae1a52dbb2a3beca2592268d9", 
      "logo": "https://assets.coingecko.com/coins/images/31788/thumb/Coin_TORCH_FullColor_circle_200.png?1696530605", 
      "decimals": 18
    }, 
    {
      "name": "cliza", 
      "abi": "ERC20_ABI", 
      "symbol": "CLIZA", 
      "priority": 3, 
      "address": "0x290f057a2c59b95d8027aa4abf31782676502071", 
      "logo": "https://assets.coingecko.com/coins/images/54846/thumb/GlrnRZOaIAAwvFx.jpeg?1742020067", 
      "decimals": 18
    }, 
    {
      "name": "Based USA", 
      "abi": "ERC20_ABI", 
      "symbol": "USA", 
      "priority": 3, 
      "address": "0xb56d0839998fd79efcd15c27cf966250aa58d6d3", 
      "logo": "https://assets.coingecko.com/coins/images/37981/thumb/BASE_USA_200px.png?1716203776", 
      "decimals": 18
    }, 
    {
      "name": "Particles Money", 
      "abi": "ERC20_ABI", 
      "symbol": "PARTICLE", 
      "priority": 3, 
      "address": "0xafe5451185513925f5e757f001425338ff93412d", 
      "logo": "https://assets.coingecko.com/coins/images/33164/thumb/PARTICLE.png?1700831300", 
      "decimals": 18
    }, 
    {
      "name": "Rebase", 
      "abi": "ERC20_ABI", 
      "symbol": "REBASE", 
      "priority": 3, 
      "address": "0x3421cc14f0e3822cf3b73c3a4bec2a1023b8d9cf", 
      "logo": "https://assets.coingecko.com/coins/images/31444/thumb/R_Transparent.png?1696530258", 
      "decimals": 9
    }, 
    {
      "name": "Dino Poker", 
      "abi": "ERC20_ABI", 
      "symbol": "RAWR", 
      "priority": 3, 
      "address": "0x469fda1fb46fcb4befc0d8b994b516bd28c87003", 
      "logo": "https://assets.coingecko.com/coins/images/35695/thumb/twitter_logo.png?1709546744", 
      "decimals": 18
    }, 
    {
      "name": "BaseAI", 
      "abi": "ERC20_ABI", 
      "symbol": "BASEAI", 
      "priority": 3, 
      "address": "0xc2464fb6edc12e4c0d3aa9b201497a27e6b7ef04", 
      "logo": "https://assets.coingecko.com/coins/images/36614/thumb/photo_2024-03-29_12.08.45.jpeg?1711975700", 
      "decimals": 18
    }, 
    {
      "name": "Neged", 
      "abi": "ERC20_ABI", 
      "symbol": "NEGED", 
      "priority": 3, 
      "address": "0x4229c271c19ca5f319fb67b4bc8a40761a6d6299", 
      "logo": "https://assets.coingecko.com/coins/images/36424/thumb/neged.jpeg?1711429808", 
      "decimals": 18
    }, 
    {
      "name": "High", 
      "abi": "ERC20_ABI", 
      "symbol": "HIGH", 
      "priority": 3, 
      "address": "0x4d25e94291fe8dcfbfa572cbb2aaa7b755087c91", 
      "logo": "https://assets.coingecko.com/coins/images/36318/thumb/high200x200.png?1711092521", 
      "decimals": 18
    }, 
    {
      "name": "BASEDChad", 
      "abi": "ERC20_ABI", 
      "symbol": "BASED", 
      "priority": 3, 
      "address": "0x17931cfc3217261ce0fa21bb066633c463ed8634", 
      "logo": "https://assets.coingecko.com/coins/images/36378/thumb/Main_Logo.png?1713748521", 
      "decimals": 18
    }, 
    {
      "name": "FRENZ", 
      "abi": "ERC20_ABI", 
      "symbol": "FRENZ", 
      "priority": 3, 
      "address": "0xdda98a036e03611aa50ff457fffbbe9163981529", 
      "logo": "https://assets.coingecko.com/coins/images/36475/thumb/FRENZ.png?1711527630", 
      "decimals": 18
    }, 
    {
      "name": "STIX", 
      "abi": "ERC20_ABI", 
      "symbol": "STIX", 
      "priority": 3, 
      "address": "0xfd1013c72cbb0ffb920d347c5836bf88965d0d5e", 
      "logo": "https://assets.coingecko.com/coins/images/52015/thumb/STIX_Logo_Transparent_200x200.png?1732346967", 
      "decimals": 18
    }, 
    {
      "name": "Ducky City Earn", 
      "abi": "ERC20_ABI", 
      "symbol": "DCE", 
      "priority": 3, 
      "address": "0x3c3aa127e6ee3d2f2e432d0184dd36f2d2076b52", 
      "logo": "https://assets.coingecko.com/coins/images/35158/thumb/logo_DCE_200.png?1707565577", 
      "decimals": 18
    }, 
    {
      "name": "MAI  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "MIMATIC", 
      "priority": 3, 
      "address": "0xbf1aea8670d2528e08334083616dd9c5f3b087ae", 
      "logo": "https://assets.coingecko.com/coins/images/35466/thumb/mimatic-red.png?1708687857", 
      "decimals": 18
    }, 
    {
      "name": "FOMO Base", 
      "abi": "ERC20_ABI", 
      "symbol": "FOMO", 
      "priority": 3, 
      "address": "0x6432096f054288ee45b7f6ad8863a1f4a8e1201c", 
      "logo": "https://assets.coingecko.com/coins/images/36468/thumb/FOMO_200X200.jpg?1711518227", 
      "decimals": 18
    }, 
    {
      "name": "All Your Base", 
      "abi": "ERC20_ABI", 
      "symbol": "AYB", 
      "priority": 3, 
      "address": "0x7ed613ab8b2b4c6a781ddc97ea98a666c6437511", 
      "logo": "https://assets.coingecko.com/coins/images/35777/thumb/AYB-Coingecko.png?1718634946", 
      "decimals": 18
    }, 
    {
      "name": "Basetama", 
      "abi": "ERC20_ABI", 
      "symbol": "BTAMA", 
      "priority": 3, 
      "address": "0xfa7f2e933c09cd113ef6e72b76d61fb4b27496a1", 
      "logo": "https://assets.coingecko.com/coins/images/35818/thumb/1000005865.jpg?1709885504", 
      "decimals": 18
    }, 
    {
      "name": "Quack Coin Base", 
      "abi": "ERC20_ABI", 
      "symbol": "QUACK", 
      "priority": 3, 
      "address": "0x5ace197d87b614942bc1670eb0ddd55ce4432801", 
      "logo": "https://assets.coingecko.com/coins/images/37260/thumb/0x5ace197d87b614942bc1670eb0ddd55ce4432801.jpg?1713866281", 
      "decimals": 18
    }, 
    {
      "name": "Pat", 
      "abi": "ERC20_ABI", 
      "symbol": "PAT", 
      "priority": 3, 
      "address": "0x8300e8e6b258147972972dbcf87719da7b817a9c", 
      "logo": "https://assets.coingecko.com/coins/images/36545/thumb/Pfp_%282%29.png?1711734258", 
      "decimals": 18
    }, 
    {
      "name": "Coin on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "COIN", 
      "priority": 3, 
      "address": "0x8e16d46cb2da01cdd49601ec73d7b0344969ae33", 
      "logo": "https://assets.coingecko.com/coins/images/36089/thumb/download_%284%29.png?1710466413", 
      "decimals": 18
    }, 
    {
      "name": "Rug World Assets", 
      "abi": "ERC20_ABI", 
      "symbol": "RWA", 
      "priority": 3, 
      "address": "0x928a6a9fc62b2c94baf2992a6fba4715f5bb0066", 
      "logo": "https://assets.coingecko.com/coins/images/37119/thumb/0x928a6a9fc62b2c94baf2992a6fba4715f5bb0066.jpg?1713356569", 
      "decimals": 18
    }, 
    {
      "name": "LOBO", 
      "abi": "ERC20_ABI", 
      "symbol": "LOBO", 
      "priority": 3, 
      "address": "0x4e98b3917310b0e1f0d53c0619f87fe48deb804b", 
      "logo": "https://assets.coingecko.com/coins/images/36187/thumb/lobo200.png?1710760420", 
      "decimals": 18
    }, 
    {
      "name": "We re so back", 
      "abi": "ERC20_ABI", 
      "symbol": "BACK", 
      "priority": 3, 
      "address": "0x4dfbd8a695baf78ebf8f905a4527020e844b278d", 
      "logo": "https://assets.coingecko.com/coins/images/36636/thumb/back-icon_1.png?1712955207", 
      "decimals": 18
    }, 
    {
      "name": "MONEYBEE", 
      "abi": "ERC20_ABI", 
      "symbol": "MONEYBEE", 
      "priority": 3, 
      "address": "0x420697291f6ce9fbb34e9feddd61868ca2f81f5c", 
      "logo": "https://assets.coingecko.com/coins/images/37766/thumb/Mb200.png?1715480309", 
      "decimals": 18
    }, 
    {
      "name": "Cheeky Dawg", 
      "abi": "ERC20_ABI", 
      "symbol": "DAWG", 
      "priority": 3, 
      "address": "0xa835f70dd5f8b4f0023509f8f36c155785758db0", 
      "logo": "https://assets.coingecko.com/coins/images/37004/thumb/DAWG.jpg?1713079584", 
      "decimals": 18
    }, 
    {
      "name": "Duh", 
      "abi": "ERC20_ABI", 
      "symbol": "DUH", 
      "priority": 3, 
      "address": "0x8011eef8fc855df1c4f421443f306e19818e60d3", 
      "logo": "https://assets.coingecko.com/coins/images/36456/thumb/IMG_7076.jpeg?1711474825", 
      "decimals": 18
    }, 
    {
      "name": "Dewn", 
      "abi": "ERC20_ABI", 
      "symbol": "DEWN", 
      "priority": 3, 
      "address": "0x43e94bd32ac8e57a6009cde6790d95761120d4e9", 
      "logo": "https://assets.coingecko.com/coins/images/36379/thumb/dewn_logo.jpg?1711342993", 
      "decimals": 18
    }, 
    {
      "name": "Lordy", 
      "abi": "ERC20_ABI", 
      "symbol": "LORDY", 
      "priority": 3, 
      "address": "0xe388a9a5bfd958106adeb79df10084a8b1d9a5ab", 
      "logo": "https://assets.coingecko.com/coins/images/37273/thumb/LORDY_Token_CG.jpg?1727976587", 
      "decimals": 18
    }, 
    {
      "name": "Bald Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "BALDO", 
      "priority": 3, 
      "address": "0xd2faa0caee8421959aa13fbd20a7ed7e93702ffe", 
      "logo": "https://assets.coingecko.com/coins/images/36287/thumb/0xD2FAA0cAeE8421959aa13Fbd20A7ed7e93702FFE.png?1711008902", 
      "decimals": 18
    }, 
    {
      "name": "zuzalu", 
      "abi": "ERC20_ABI", 
      "symbol": "ZUZALU", 
      "priority": 3, 
      "address": "0x3054e8f8fba3055a42e5f5228a2a4e2ab1326933", 
      "logo": "https://assets.coingecko.com/coins/images/36909/thumb/ZUZALA.jpg?1712732086", 
      "decimals": 18
    }, 
    {
      "name": "MEWNB", 
      "abi": "ERC20_ABI", 
      "symbol": "MEWNB", 
      "priority": 3, 
      "address": "0x5100d1c6e41984e6a0ae251e5629d538ad33e847", 
      "logo": "https://assets.coingecko.com/coins/images/37568/thumb/1000001337.jpg?1716577525", 
      "decimals": 18
    }, 
    {
      "name": "Bool", 
      "abi": "ERC20_ABI", 
      "symbol": "BOOL", 
      "priority": 3, 
      "address": "0x5698bba26d8668d781cdcfd2d6d6881226dd0f52", 
      "logo": "https://assets.coingecko.com/coins/images/36367/thumb/vM_6qNMg_400x400.jpg?1711337777", 
      "decimals": 18
    }, 
    {
      "name": "BREX", 
      "abi": "ERC20_ABI", 
      "symbol": "BREX", 
      "priority": 3, 
      "address": "0x63f844a81571588536614b3fa9260bec3e897126", 
      "logo": "https://assets.coingecko.com/coins/images/36498/thumb/0x63f844a81571588536614b3fa9260bec3e897126.png?1711616623", 
      "decimals": 18
    }, 
    {
      "name": "Cute Cat Candle", 
      "abi": "ERC20_ABI", 
      "symbol": "CCC", 
      "priority": 3, 
      "address": "0x1ccb4b14a11e0f2994a7ecbbd4cc69632f4c7c76", 
      "logo": "https://assets.coingecko.com/coins/images/36930/thumb/1000017879.jpg?1712803401", 
      "decimals": 18
    }, 
    {
      "name": "BLERF", 
      "abi": "ERC20_ABI", 
      "symbol": "BLERF", 
      "priority": 3, 
      "address": "0x347f500323d51e9350285daf299ddb529009e6ae", 
      "logo": "https://assets.coingecko.com/coins/images/36473/thumb/BLERF.png?1711527025", 
      "decimals": 18
    }, 
    {
      "name": "Based Potato", 
      "abi": "ERC20_ABI", 
      "symbol": "POTATO", 
      "priority": 3, 
      "address": "0xba3b38581f96b04f75ca4ad51296fff3806d7626", 
      "logo": "https://assets.coingecko.com/coins/images/36237/thumb/32orUt2z_400x400.jpeg?1710918375", 
      "decimals": 18
    }, 
    {
      "name": "Father Of Meme  Origin", 
      "abi": "ERC20_ABI", 
      "symbol": "FOMO", 
      "priority": 3, 
      "address": "0xd327d36eb6e1f250d191cd62497d08b4aaa843ce", 
      "logo": "https://assets.coingecko.com/coins/images/37172/thumb/fomobase_%281%29.jpg?1713508327", 
      "decimals": 9
    }, 
    {
      "name": "Pill", 
      "abi": "ERC20_ABI", 
      "symbol": "PILL", 
      "priority": 3, 
      "address": "0x388e543a5a491e7b42e3fbcd127dd6812ea02d0d", 
      "logo": "https://assets.coingecko.com/coins/images/37431/thumb/200%D1%85200.png?1714379457", 
      "decimals": 18
    }, 
    {
      "name": "Base Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "BINU", 
      "priority": 3, 
      "address": "0x5ff986de80fc8502ea9293b8c06ef22b1e3f11e9", 
      "logo": "https://assets.coingecko.com/coins/images/36541/thumb/baseinu-logo_%281%29.png?1711708876", 
      "decimals": 18
    }, 
    {
      "name": "BONKE", 
      "abi": "ERC20_ABI", 
      "symbol": "BONKE", 
      "priority": 3, 
      "address": "0xb9898511bd2bad8bfc23eba641ef97a08f27e730", 
      "logo": "https://assets.coingecko.com/coins/images/37463/thumb/2.png?1714454148", 
      "decimals": 18
    }, 
    {
      "name": "Chonk", 
      "abi": "ERC20_ABI", 
      "symbol": "CHONK", 
      "priority": 3, 
      "address": "0x6d22d3ed82c947be8860a86a69c4b0cb0f65589e", 
      "logo": "https://assets.coingecko.com/coins/images/36695/thumb/CG_CHONK.png?1712116693", 
      "decimals": 18
    }, 
    {
      "name": "Internet Token", 
      "abi": "ERC20_ABI", 
      "symbol": "INT", 
      "priority": 3, 
      "address": "0x968d6a288d7b024d5012c0b25d67a889e4e3ec19", 
      "logo": "https://assets.coingecko.com/coins/images/36593/thumb/internettoken_logo.png?1711949672", 
      "decimals": 18
    }, 
    {
      "name": "CRAZY FROG", 
      "abi": "ERC20_ABI", 
      "symbol": "FROG", 
      "priority": 3, 
      "address": "0x89eb6680c8d85d384c02059e4b07e4dd8535e549", 
      "logo": "https://assets.coingecko.com/coins/images/36926/thumb/photo_2024-04-01_16-12-15.jpg?1712800382", 
      "decimals": 18
    }, 
    {
      "name": "Based Street Bets", 
      "abi": "ERC20_ABI", 
      "symbol": "BSB", 
      "priority": 3, 
      "address": "0x8a24d7260cd02d3dfd8eefb66bc17ad4b17d494c", 
      "logo": "https://assets.coingecko.com/coins/images/36558/thumb/Logo_BSB.png?1711902137", 
      "decimals": 18
    }, 
    {
      "name": "BetBase", 
      "abi": "ERC20_ABI", 
      "symbol": "BET", 
      "priority": 3, 
      "address": "0x80f6bcedd3d4fa1035285affa30e38f464db3895", 
      "logo": "https://assets.coingecko.com/coins/images/37440/thumb/BaseXprofile.png?1714380705", 
      "decimals": 18
    }, 
    {
      "name": "AMC", 
      "abi": "ERC20_ABI", 
      "symbol": "AMC", 
      "priority": 3, 
      "address": "0xfdc944fb59201fb163596ee5e209ebc8fa4dcdc5", 
      "logo": "https://assets.coingecko.com/coins/images/37977/thumb/amc.jpeg?1716196916", 
      "decimals": 18
    }, 
    {
      "name": "Coding Dino", 
      "abi": "ERC20_ABI", 
      "symbol": "DINO", 
      "priority": 3, 
      "address": "0x85e90a5430af45776548adb82ee4cd9e33b08077", 
      "logo": "https://assets.coingecko.com/coins/images/36637/thumb/dino_icon_copy.png?1712029544", 
      "decimals": 18
    }, 
    {
      "name": "Son of Brett", 
      "abi": "ERC20_ABI", 
      "symbol": "BRATT", 
      "priority": 3, 
      "address": "0xf395680803b269b62702554723e05b373171b07b", 
      "logo": "https://assets.coingecko.com/coins/images/36078/thumb/1000005936.jpg?1710414421", 
      "decimals": 18
    }, 
    {
      "name": "FOMO TOCD", 
      "abi": "ERC20_ABI", 
      "symbol": "FOMO", 
      "priority": 3, 
      "address": "0xa7ea9d5d4d4c7cf7dbde5871e6d108603c6942a5", 
      "logo": "https://assets.coingecko.com/coins/images/37673/thumb/200px.png?1715189071", 
      "decimals": 18
    }, 
    {
      "name": "Chicky", 
      "abi": "ERC20_ABI", 
      "symbol": "CHICKY", 
      "priority": 3, 
      "address": "0xa7152fa3b1fa9ec858e959164758a66f1ecf33f7", 
      "logo": "https://assets.coingecko.com/coins/images/36451/thumb/0xa7152fa3b1fa9ec858e959164758a66f1ecf33f7_%281%29.png?1711471150", 
      "decimals": 18
    }, 
    {
      "name": "Okayeg", 
      "abi": "ERC20_ABI", 
      "symbol": "OKAYEG", 
      "priority": 3, 
      "address": "0xdb6e0e5094a25a052ab6845a9f1e486b9a9b3dde", 
      "logo": "https://assets.coingecko.com/coins/images/37748/thumb/Okayeg_200.png?1715442444", 
      "decimals": 18
    }, 
    {
      "name": "Speculate", 
      "abi": "ERC20_ABI", 
      "symbol": "SPEC", 
      "priority": 3, 
      "address": "0xdce704a0622a8437200cb6076ee69b2cf573827c", 
      "logo": "https://assets.coingecko.com/coins/images/37214/thumb/Speculate_Coingecko_Logo.png?1713773507", 
      "decimals": 18
    }, 
    {
      "name": "Jelli", 
      "abi": "ERC20_ABI", 
      "symbol": "JELLI", 
      "priority": 3, 
      "address": "0xa1b9d812926a529d8b002e69fcd070c8275ec73c", 
      "logo": "https://assets.coingecko.com/coins/images/37236/thumb/coin.png?1713795757", 
      "decimals": 9
    }, 
    {
      "name": "Chuck", 
      "abi": "ERC20_ABI", 
      "symbol": "CHUCK", 
      "priority": 3, 
      "address": "0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a", 
      "logo": "https://assets.coingecko.com/coins/images/37468/thumb/1000030138.jpg?1714457112", 
      "decimals": 18
    }, 
    {
      "name": "All Cat No Brakes", 
      "abi": "ERC20_ABI", 
      "symbol": "ALLCAT", 
      "priority": 3, 
      "address": "0x5d6812722c3693078e4a0dbe3e9affc27a0b2768", 
      "logo": "https://assets.coingecko.com/coins/images/38024/thumb/Cloudy-Sunrise-by-TGTS-black.png?1716317171", 
      "decimals": 18
    }, 
    {
      "name": "Siamese", 
      "abi": "ERC20_ABI", 
      "symbol": "SIAM", 
      "priority": 3, 
      "address": "0xba71cb8ef2d59de7399745793657838829e0b147", 
      "logo": "https://assets.coingecko.com/coins/images/36489/thumb/transparant-200x200.png?1728005931", 
      "decimals": 18
    }, 
    {
      "name": "ESM X", 
      "abi": "ERC20_ABI", 
      "symbol": "ESMX", 
      "priority": 3, 
      "address": "0xfadb26be94c1f959f900bf88cd396b3e803481d6", 
      "logo": "https://assets.coingecko.com/coins/images/37752/thumb/output-onlinepngtools.png?1715445992", 
      "decimals": 18
    }, 
    {
      "name": "the meme of the future", 
      "abi": "ERC20_ABI", 
      "symbol": "ROBO", 
      "priority": 3, 
      "address": "0xd379002f26ce895d5c5095acb19afba92942c0cf", 
      "logo": "https://assets.coingecko.com/coins/images/37548/thumb/robot.png?1714734385", 
      "decimals": 18
    }, 
    {
      "name": "OAKS", 
      "abi": "ERC20_ABI", 
      "symbol": "OAKS", 
      "priority": 3, 
      "address": "0x33d13d537609841ce6c42d6fd775dc33e3833411", 
      "logo": "https://assets.coingecko.com/coins/images/51920/thumb/Screenshot_2024-11-19_at_4.43.57%E2%80%AFPM.png?1732185930", 
      "decimals": 18
    }, 
    {
      "name": "Jogeco Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "JOGECO", 
      "priority": 3, 
      "address": "0x92fb1b7d9730b2f1bd4e2e91368c1eb6fdd2a009", 
      "logo": "https://assets.coingecko.com/coins/images/37579/thumb/photo_2024-05-04_04.13.39_%282%29.png?1714964255", 
      "decimals": 9
    }, 
    {
      "name": "Brett s Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "BROGG", 
      "priority": 3, 
      "address": "0xc36f19bccd51e3f1163eff07b5edf9d2850acec4", 
      "logo": "https://assets.coingecko.com/coins/images/37044/thumb/1000006526.png?1713163132", 
      "decimals": 18
    }, 
    {
      "name": "Zoomer", 
      "abi": "ERC20_ABI", 
      "symbol": "ZOOMER", 
      "priority": 3, 
      "address": "0x586e10db93630a4d2da6c6a34ba715305b556f04", 
      "logo": "https://assets.coingecko.com/coins/images/37736/thumb/photo_2024-05-08_19-48-49.png?1715337934", 
      "decimals": 18
    }, 
    {
      "name": "Boofus by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "BOOF", 
      "priority": 3, 
      "address": "0x8aaf9fa1ee649eade46201394a9b8e06312f0f17", 
      "logo": "https://assets.coingecko.com/coins/images/53367/thumb/1000002294.jpg?1736199737", 
      "decimals": 18
    }, 
    {
      "name": "Penjamin Blinkerton", 
      "abi": "ERC20_ABI", 
      "symbol": "PEN", 
      "priority": 3, 
      "address": "0xd7d919ea0c33a97ad6e7bd4f510498e2ec98cb78", 
      "logo": "https://assets.coingecko.com/coins/images/37269/thumb/PEN_COIN_LOGO.png?1713887481", 
      "decimals": 18
    }, 
    {
      "name": "BaseSafe", 
      "abi": "ERC20_ABI", 
      "symbol": "SAFE", 
      "priority": 3, 
      "address": "0xbd15d0c77133d3200756dc4d7a4f577dbb2cf6a3", 
      "logo": "https://assets.coingecko.com/coins/images/36796/thumb/200x200.png?1712628693", 
      "decimals": 18
    }, 
    {
      "name": "Riky The Raccoon", 
      "abi": "ERC20_ABI", 
      "symbol": "RIKY", 
      "priority": 3, 
      "address": "0x729031b3995538ddf6b6bce6e68d5d6fdeb3ccb5", 
      "logo": "https://assets.coingecko.com/coins/images/37438/thumb/logo_200x.png?1714380580", 
      "decimals": 18
    }, 
    {
      "name": "Fried Chicken", 
      "abi": "ERC20_ABI", 
      "symbol": "FCKN", 
      "priority": 3, 
      "address": "0x7d12aeb5d96d221071d176980d23c213d88d9998", 
      "logo": "https://assets.coingecko.com/coins/images/37719/thumb/cmc_icon.png?1715332364", 
      "decimals": 18
    }, 
    {
      "name": "Pola On Base", 
      "abi": "ERC20_ABI", 
      "symbol": "POLA", 
      "priority": 3, 
      "address": "0x76e7447bafa3f0acafc9692629b1d1bc937ca15d", 
      "logo": "https://assets.coingecko.com/coins/images/37314/thumb/pola.jpg?1713971028", 
      "decimals": 18
    }, 
    {
      "name": "Risitas", 
      "abi": "ERC20_ABI", 
      "symbol": "RISITA", 
      "priority": 3, 
      "address": "0xe6f47303032a09c8c0f8ebb713c00e6ed345e8c3", 
      "logo": "https://assets.coingecko.com/coins/images/36943/thumb/risitas.jpeg?1712890887", 
      "decimals": 18
    }, 
    {
      "name": "Luneko", 
      "abi": "ERC20_ABI", 
      "symbol": "LUNE", 
      "priority": 3, 
      "address": "0xacd1caef47e4c47bafe8a51b3f4305fc38203b7a", 
      "logo": "https://assets.coingecko.com/coins/images/37343/thumb/ResizedLogo.png?1714054539", 
      "decimals": 18
    }, 
    {
      "name": "Corgi", 
      "abi": "ERC20_ABI", 
      "symbol": "CORGI", 
      "priority": 3, 
      "address": "0x6223901ea64608c75da8497d5eff15d19a1d8fd5", 
      "logo": "https://assets.coingecko.com/coins/images/36929/thumb/corgi_-_200x200.png?1712803178", 
      "decimals": 18
    }, 
    {
      "name": "Dognus", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGNUS", 
      "priority": 3, 
      "address": "0xf086206423f9e9686192bee98c042131d7bc1336", 
      "logo": "https://assets.coingecko.com/coins/images/37341/thumb/Dognus.jpg?1714053280", 
      "decimals": 18
    }, 
    {
      "name": "FOMO BULL CLUB", 
      "abi": "ERC20_ABI", 
      "symbol": "FOMO", 
      "priority": 3, 
      "address": "0x9a86980d3625b4a6e69d8a4606d51cbc019e2002", 
      "logo": "https://assets.coingecko.com/coins/images/37070/thumb/IMG_20240415_091508_928_%281%29.jpg?1713379565", 
      "decimals": 18
    }, 
    {
      "name": "Magic Internet Money  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "MIM", 
      "priority": 3, 
      "address": "0x4a3a6dd60a34bb2aba60d73b4c88315e9ceb6a3d", 
      "logo": "https://assets.coingecko.com/coins/images/37662/thumb/mim.png?1715166975", 
      "decimals": 18
    }, 
    {
      "name": "Distracted Dudes", 
      "abi": "ERC20_ABI", 
      "symbol": "DUDE", 
      "priority": 3, 
      "address": "0xcb2861a1ec1d0392afb9e342d5aa539e4f75b633", 
      "logo": "https://assets.coingecko.com/coins/images/36860/thumb/dudelogo.png?1712642712", 
      "decimals": 18
    }, 
    {
      "name": "Pawthereum", 
      "abi": "ERC20_ABI", 
      "symbol": "PAWTH", 
      "priority": 3, 
      "address": "0x875ee70143fca7d78e03ee6b13a2b0d68be4af0c", 
      "logo": "https://assets.coingecko.com/coins/images/37231/thumb/paw.jpeg?1713783379", 
      "decimals": 18
    }, 
    {
      "name": "lower", 
      "abi": "ERC20_ABI", 
      "symbol": "LOWER", 
      "priority": 3, 
      "address": "0x67040bb0ad76236ddd5d156d23ec920a089d1eac", 
      "logo": "https://assets.coingecko.com/coins/images/37153/thumb/lower.jpg?1713471922", 
      "decimals": 18
    }, 
    {
      "name": "GME  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "GME", 
      "priority": 3, 
      "address": "0xbeb0fd48c2ba0f1aacad2814605f09e08a96b94e", 
      "logo": "https://assets.coingecko.com/coins/images/37229/thumb/gamestop.jpeg?1713780481", 
      "decimals": 9
    }, 
    {
      "name": " onchain", 
      "abi": "ERC20_ABI", 
      "symbol": "ONCHAIN", 
      "priority": 3, 
      "address": "0xfef2d7b013b88fec2bfe4d2fee0aeb719af73481", 
      "logo": "https://assets.coingecko.com/coins/images/36948/thumb/IMG_2072.jpeg?1712896843", 
      "decimals": 18
    }, 
    {
      "name": "Animated", 
      "abi": "ERC20_ABI", 
      "symbol": "AM", 
      "priority": 3, 
      "address": "0xddf98aad8180c3e368467782cd07ae2e3e8d36a5", 
      "logo": "https://assets.coingecko.com/coins/images/37820/thumb/240509_am_coin_transp.png?1715660615", 
      "decimals": 18
    }, 
    {
      "name": "SwapBased COIN", 
      "abi": "ERC20_ABI", 
      "symbol": "COIN", 
      "priority": 3, 
      "address": "0x2156006a207a793b4069a2b72be58dc2bd759232", 
      "logo": "https://assets.coingecko.com/coins/images/37694/thumb/tokcoin-removebg-preview__1_-removebg-preview.png?1715232104", 
      "decimals": 18
    }, 
    {
      "name": "blue on base", 
      "abi": "ERC20_ABI", 
      "symbol": "BLUE", 
      "priority": 3, 
      "address": "0xfd9fa4f785331ce88b5af8994a047ba087c705d8", 
      "logo": "https://assets.coingecko.com/coins/images/37277/thumb/blue_on_base.png?1713895265", 
      "decimals": 18
    }, 
    {
      "name": "Pepe Inscriptions", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPI", 
      "priority": 3, 
      "address": "0x19706c142d33376240e418d6385f05691a5fa8e2", 
      "logo": "https://assets.coingecko.com/coins/images/37124/thumb/pepi.png?1713368514", 
      "decimals": 9
    }, 
    {
      "name": "kurbi", 
      "abi": "ERC20_ABI", 
      "symbol": "KURBI", 
      "priority": 3, 
      "address": "0x653a143b8d15c565c6623d1f168cfbec1056d872", 
      "logo": "https://assets.coingecko.com/coins/images/37466/thumb/photo_2024-04-23_11-40-15.png?1714455133", 
      "decimals": 9
    }, 
    {
      "name": "Sendit", 
      "abi": "ERC20_ABI", 
      "symbol": "SENDIT", 
      "priority": 3, 
      "address": "0xba5b9b2d2d06a9021eb3190ea5fb0e02160839a4", 
      "logo": "https://assets.coingecko.com/coins/images/36789/thumb/Sendit-token-logo.png?1712416889", 
      "decimals": 18
    }, 
    {
      "name": "Pizzaverse", 
      "abi": "ERC20_ABI", 
      "symbol": "PIZZA", 
      "priority": 3, 
      "address": "0x40468be13c4388d2ab68a09f56973fa95db5bca0", 
      "logo": "https://assets.coingecko.com/coins/images/37652/thumb/pizza-logo-fitted.png?1715198808", 
      "decimals": 18
    }, 
    {
      "name": "Frens Club", 
      "abi": "ERC20_ABI", 
      "symbol": "FREN", 
      "priority": 3, 
      "address": "0x45c30fa6a2c7e031fe86e4f1cb5becfde149b980", 
      "logo": "https://assets.coingecko.com/coins/images/37893/thumb/C55415C5-1754-4B9A-B32F-9DF1AF2264F1.png?1715846907", 
      "decimals": 18
    }, 
    {
      "name": "LONG", 
      "abi": "ERC20_ABI", 
      "symbol": "LONG", 
      "priority": 3, 
      "address": "0x2816a491dd0b7a88d84cbded842a618e59016888", 
      "logo": "https://assets.coingecko.com/coins/images/36888/thumb/coin9.png?1712652624", 
      "decimals": 18
    }, 
    {
      "name": "SNORT", 
      "abi": "ERC20_ABI", 
      "symbol": "SNORT", 
      "priority": 3, 
      "address": "0xaf07d812d1dcec20bf741075bc18660738d226dd", 
      "logo": "https://assets.coingecko.com/coins/images/37329/thumb/QZl65V8_%282%29.png?1714028404", 
      "decimals": 18
    }, 
    {
      "name": "AI INU", 
      "abi": "ERC20_ABI", 
      "symbol": "AIINU", 
      "priority": 3, 
      "address": "0x8853f0c059c27527d33d02378e5e4f6d5afb574a", 
      "logo": "https://assets.coingecko.com/coins/images/36902/thumb/aiinu.png?1712699681", 
      "decimals": 18
    }, 
    {
      "name": "Basedmilio", 
      "abi": "ERC20_ABI", 
      "symbol": "BASED", 
      "priority": 3, 
      "address": "0x28e29ec91db66733a94ee8e3b86a6199117baf99", 
      "logo": "https://assets.coingecko.com/coins/images/37685/thumb/tokenicon.png?1715224333", 
      "decimals": 18
    }, 
    {
      "name": "Brett Killer", 
      "abi": "ERC20_ABI", 
      "symbol": "KRETT", 
      "priority": 3, 
      "address": "0xff9c8aad2629d1be9833fd162a87ab7ce1d68fdc", 
      "logo": "https://assets.coingecko.com/coins/images/37246/thumb/photo_2024-04-20_00.16.14_%282%29.jpeg?1713862195", 
      "decimals": 9
    }, 
    {
      "name": "PEPi", 
      "abi": "ERC20_ABI", 
      "symbol": "PEPI", 
      "priority": 3, 
      "address": "0x28a5e71bfc02723eac17e39c84c5190415c0de9f", 
      "logo": "https://assets.coingecko.com/coins/images/37513/thumb/pepi.png?1714627734", 
      "decimals": 9
    }, 
    {
      "name": "Wrapped BaseDOGE", 
      "abi": "ERC20_ABI", 
      "symbol": "WBASEDOGE", 
      "priority": 3, 
      "address": "0x373504da48418c67e6fcd071f33cb0b3b47613c7", 
      "logo": "https://assets.coingecko.com/coins/images/37079/thumb/coingecko_200x200_logo_basedoge.png?1713249900", 
      "decimals": 18
    }, 
    {
      "name": "POON Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "POON", 
      "priority": 3, 
      "address": "0x6e93dede32b00fc0b993cee3be8727089fdd013b", 
      "logo": "https://assets.coingecko.com/coins/images/37518/thumb/Head_image_raster_color_transparency.png?1714632034", 
      "decimals": 18
    }, 
    {
      "name": "FELLA", 
      "abi": "ERC20_ABI", 
      "symbol": "FELLA", 
      "priority": 3, 
      "address": "0x122a3f185655847980639e8edf0f0f66cd91c5fe", 
      "logo": "https://assets.coingecko.com/coins/images/37135/thumb/coin_logo_copy.png?1713417485", 
      "decimals": 18
    }, 
    {
      "name": "Boshi", 
      "abi": "ERC20_ABI", 
      "symbol": "BOSHI", 
      "priority": 3, 
      "address": "0x33ad778e6c76237d843c52d7cafc972bb7cf8729", 
      "logo": "https://assets.coingecko.com/coins/images/37222/thumb/boshi.jpeg?1713775901", 
      "decimals": 18
    }, 
    {
      "name": "Degen POV", 
      "abi": "ERC20_ABI", 
      "symbol": "POV", 
      "priority": 3, 
      "address": "0x4c96a67b0577358894407af7bc3158fc1dffbeb5", 
      "logo": "https://assets.coingecko.com/coins/images/37921/thumb/degen.jpeg?1715936621", 
      "decimals": 18
    }, 
    {
      "name": "Yoyo", 
      "abi": "ERC20_ABI", 
      "symbol": "YOYO", 
      "priority": 3, 
      "address": "0xe31876c6a62a813f57b815d8d2d0f5c8aa06f49b", 
      "logo": "https://assets.coingecko.com/coins/images/37830/thumb/yoyologo.png?1715704964", 
      "decimals": 18
    }, 
    {
      "name": "KungFu Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "KFC", 
      "priority": 3, 
      "address": "0xa4089e74354b03b56d75961a816f71432ff596f7", 
      "logo": "https://assets.coingecko.com/coins/images/37523/thumb/logo-200x200-BG.png?1714637807", 
      "decimals": 18
    }, 
    {
      "name": "goatwifhat", 
      "abi": "ERC20_ABI", 
      "symbol": "GIF", 
      "priority": 3, 
      "address": "0x6b82297c6f1f9c3b1f501450d2ee7c37667ab70d", 
      "logo": "https://assets.coingecko.com/coins/images/37776/thumb/GIF_logo_200x200.png?1715581191", 
      "decimals": 18
    }, 
    {
      "name": "Purrcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "PURR", 
      "priority": 3, 
      "address": "0xe4fcf2d991505089bbb36275570757c1f9800cb0", 
      "logo": "https://assets.coingecko.com/coins/images/37429/thumb/logo.png?1714379357", 
      "decimals": 18
    }, 
    {
      "name": "Keren", 
      "abi": "ERC20_ABI", 
      "symbol": "KEREN", 
      "priority": 3, 
      "address": "0x174e33ef2effa0a4893d97dda5db4044cc7993a3", 
      "logo": "https://assets.coingecko.com/coins/images/37424/thumb/200200.png?1714377875", 
      "decimals": 18
    }, 
    {
      "name": "Percy", 
      "abi": "ERC20_ABI", 
      "symbol": "PERCY", 
      "priority": 3, 
      "address": "0xea6f7e7e0f46a9e0f4e2048eb129d879f609d632", 
      "logo": "https://assets.coingecko.com/coins/images/37234/thumb/image0.jpeg?1728198560", 
      "decimals": 18
    }, 
    {
      "name": "ROCKY", 
      "abi": "ERC20_ABI", 
      "symbol": "ROCKY", 
      "priority": 3, 
      "address": "0x3636a7734b669ce352e97780df361ce1f809c58c", 
      "logo": "https://assets.coingecko.com/coins/images/37465/thumb/rocky3.png?1714454996", 
      "decimals": 18
    }, 
    {
      "name": "Bamboo on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BAMBOO", 
      "priority": 3, 
      "address": "0x689644b86075ed61c647596862c7403e1c474dbf", 
      "logo": "https://assets.coingecko.com/coins/images/39126/thumb/Bamboo_Logo_800x800.png?1720656497", 
      "decimals": 18
    }, 
    {
      "name": "FrokAI", 
      "abi": "ERC20_ABI", 
      "symbol": "FROKAI", 
      "priority": 3, 
      "address": "0xcbfe8e065534d0cc117bd71a11b0249a63e247f7", 
      "logo": "https://assets.coingecko.com/coins/images/39050/thumb/L8noko50_400x400.jpg?1720121982", 
      "decimals": 18
    }, 
    {
      "name": "Normus", 
      "abi": "ERC20_ABI", 
      "symbol": "NORMUS", 
      "priority": 3, 
      "address": "0xba5ede8d98ab88cea9f0d69918dde28dc23c2553", 
      "logo": "https://assets.coingecko.com/coins/images/38595/thumb/token-removebg-preview_%281%29.png?1718094574", 
      "decimals": 18
    }, 
    {
      "name": "Bangkit", 
      "abi": "ERC20_ABI", 
      "symbol": "BKIT", 
      "priority": 3, 
      "address": "0x262a9f4e84efa2816d87a68606bb4c1ea3874bf1", 
      "logo": "https://assets.coingecko.com/coins/images/52416/thumb/logo.png?1733309160", 
      "decimals": 18
    }, 
    {
      "name": "Jasse Polluk", 
      "abi": "ERC20_ABI", 
      "symbol": "POLLUK", 
      "priority": 3, 
      "address": "0x22222bd682745cf032006394750739684e45a5f8", 
      "logo": "https://assets.coingecko.com/coins/images/38510/thumb/Jasse_Polluk.png?1717754036", 
      "decimals": 18
    }, 
    {
      "name": "Syn Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "SYN", 
      "priority": 3, 
      "address": "0xa1bf915363b533f5991dbada8c6c42fa0ce58fb8", 
      "logo": "https://assets.coingecko.com/coins/images/38557/thumb/IMG_7717.JPG?1718000371", 
      "decimals": 18
    }, 
    {
      "name": "BADCAT", 
      "abi": "ERC20_ABI", 
      "symbol": "BADCAT", 
      "priority": 3, 
      "address": "0x1b2c141479757b8643a519be4692904088d860b2", 
      "logo": "https://assets.coingecko.com/coins/images/38119/thumb/NgUCgax2_200x200.png?1716537224", 
      "decimals": 9
    }, 
    {
      "name": "Biochar", 
      "abi": "ERC20_ABI", 
      "symbol": "CHAR", 
      "priority": 3, 
      "address": "0x20b048fa035d5763685d695e66adf62c5d9f5055", 
      "logo": "https://assets.coingecko.com/coins/images/38094/thumb/char_logo_toucan.png?1716488453", 
      "decimals": 18
    }, 
    {
      "name": "9to5", 
      "abi": "ERC20_ABI", 
      "symbol": "9-5", 
      "priority": 3, 
      "address": "0xd727e37dccd5720d1e3849606d3ab669cb68c368", 
      "logo": "https://assets.coingecko.com/coins/images/38143/thumb/9-5_Token.png?1718410483", 
      "decimals": 18
    }, 
    {
      "name": "Based Lambow", 
      "abi": "ERC20_ABI", 
      "symbol": "LAMBOW", 
      "priority": 3, 
      "address": "0x4b61e2f1bbdee6d746209a693156952936f1702c", 
      "logo": "https://assets.coingecko.com/coins/images/38690/thumb/new-logo.jpg?1731187032", 
      "decimals": 18
    }, 
    {
      "name": "Moonboots DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "MBDAO", 
      "priority": 3, 
      "address": "0x0dd7913197bfb6d2b1f03f9772ced06298f1a644", 
      "logo": "https://assets.coingecko.com/coins/images/38066/thumb/MBDAO_Token_icon.png?1716441877", 
      "decimals": 18
    }, 
    {
      "name": "Game of Memes  ETH ", 
      "abi": "ERC20_ABI", 
      "symbol": "GAME", 
      "priority": 3, 
      "address": "0x8e0e798966382e53bfb145d474254cbe065c17dc", 
      "logo": "https://assets.coingecko.com/coins/images/38384/thumb/GAME_Logo.png?1717387875", 
      "decimals": 18
    }, 
    {
      "name": "Workie", 
      "abi": "ERC20_ABI", 
      "symbol": "WORKIE", 
      "priority": 3, 
      "address": "0x7480527815ccae421400da01e052b120cc4255e9", 
      "logo": "https://assets.coingecko.com/coins/images/38774/thumb/Pfp2_%281%29.png?1724903016", 
      "decimals": 18
    }, 
    {
      "name": "Mamba", 
      "abi": "ERC20_ABI", 
      "symbol": "MAMBA", 
      "priority": 3, 
      "address": "0x3afeae00a594fbf2e4049f924e3c6ac93296b6e8", 
      "logo": "https://assets.coingecko.com/coins/images/38364/thumb/Mamba.png?1717247012", 
      "decimals": 18
    }, 
    {
      "name": "KATT DADDY", 
      "abi": "ERC20_ABI", 
      "symbol": "KATT", 
      "priority": 3, 
      "address": "0xf4210f93bc68d63df3286c73eba08c6414f40c0d", 
      "logo": "https://assets.coingecko.com/coins/images/37062/thumb/KATT_DADDY.png?1713175908", 
      "decimals": 18
    }, 
    {
      "name": "MYSTCL", 
      "abi": "ERC20_ABI", 
      "symbol": "MYST", 
      "priority": 3, 
      "address": "0xdc46c1e93b71ff9209a0f8076a9951569dc35855", 
      "logo": "https://assets.coingecko.com/coins/images/35142/thumb/eDBJEu7O_400x400.jpeg?1707464572", 
      "decimals": 18
    }, 
    {
      "name": "Lunarlens", 
      "abi": "ERC20_ABI", 
      "symbol": "LUNARLENS", 
      "priority": 3, 
      "address": "0xf95e1c0a67492720ca22842122fe7fa63d5519e5", 
      "logo": "https://assets.coingecko.com/coins/images/39304/thumb/%E6%9C%88%E4%BA%AE%E5%B8%8164.png?1721633565", 
      "decimals": 18
    }, 
    {
      "name": "White Monster", 
      "abi": "ERC20_ABI", 
      "symbol": "WMSTER", 
      "priority": 3, 
      "address": "0x6668d4a6605a27e5ee51eda040581155eddc6666", 
      "logo": "https://assets.coingecko.com/coins/images/38698/thumb/photo_2024-10-16_11-05-11.jpg?1729411381", 
      "decimals": 9
    }, 
    {
      "name": "Blunny", 
      "abi": "ERC20_ABI", 
      "symbol": "BLUNNY", 
      "priority": 3, 
      "address": "0x7546e0d4d947a15f914e33de6616ffed826f45ef", 
      "logo": "https://assets.coingecko.com/coins/images/38993/thumb/Logo_200x200.jpg?1720665977", 
      "decimals": 18
    }, 
    {
      "name": "The Degensons", 
      "abi": "ERC20_ABI", 
      "symbol": "DEGENS", 
      "priority": 3, 
      "address": "0xc41ba5737baf6bd0ccd5daf7eee39874e4ad45ff", 
      "logo": "https://assets.coingecko.com/coins/images/38561/thumb/1000023449.jpg?1729579765", 
      "decimals": 18
    }, 
    {
      "name": "COSMIC on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "COSMIC", 
      "priority": 3, 
      "address": "0x7c101a0e141517009d3138743213e3e835a809de", 
      "logo": "https://assets.coingecko.com/coins/images/38759/thumb/Base_Cosmic.PNG?1718740331", 
      "decimals": 18
    }, 
    {
      "name": "BERF", 
      "abi": "ERC20_ABI", 
      "symbol": "BERF", 
      "priority": 3, 
      "address": "0xfc5462143a3178cf044e97c491f6bcb5e38f173e", 
      "logo": "https://assets.coingecko.com/coins/images/38169/thumb/1000374533.png?1719434549", 
      "decimals": 18
    }, 
    {
      "name": "BASED SBF WIF SOAP", 
      "abi": "ERC20_ABI", 
      "symbol": "SOAP", 
      "priority": 3, 
      "address": "0x4b1265ef6c7500983acaf99cb7a94bbf0dd1cca4", 
      "logo": "https://assets.coingecko.com/coins/images/38194/thumb/sbf-tyrone-soap-drop-3-dexscreener.png?1716790015", 
      "decimals": 18
    }, 
    {
      "name": "Crappy Bird", 
      "abi": "ERC20_ABI", 
      "symbol": "CRAPPY", 
      "priority": 3, 
      "address": "0x67ce18961c3269ca03c2e5632f1938cc53e614a1", 
      "logo": "https://assets.coingecko.com/coins/images/38938/thumb/crappybird_logo.jpeg?1719568566", 
      "decimals": 18
    }, 
    {
      "name": "Baby Brett on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BBRETT", 
      "priority": 3, 
      "address": "0xbe5614875952b1683cb0a2c20e6509be46d353a4", 
      "logo": "https://assets.coingecko.com/coins/images/38887/thumb/200x200.png?1719380024", 
      "decimals": 9
    }, 
    {
      "name": "BabyCrash", 
      "abi": "ERC20_ABI", 
      "symbol": "BABYCRASH", 
      "priority": 3, 
      "address": "0x74ff3cbf86f95fea386f79633d7bc4460d415f34", 
      "logo": "https://assets.coingecko.com/coins/images/38966/thumb/BABY_CRASH_TPB_200px.png?1727976620", 
      "decimals": 18
    }, 
    {
      "name": "Brett s cat", 
      "abi": "ERC20_ABI", 
      "symbol": "BALT", 
      "priority": 3, 
      "address": "0xc9b6ef062fab19d3f1eabc36b1f2e852af1acd18", 
      "logo": "https://assets.coingecko.com/coins/images/38428/thumb/IMG_4717.PNG?1717627270", 
      "decimals": 18
    }, 
    {
      "name": "DegenPad", 
      "abi": "ERC20_ABI", 
      "symbol": "DPAD", 
      "priority": 3, 
      "address": "0x1234d66b6fbb900296ae2f57740b800fd8960927", 
      "logo": "https://assets.coingecko.com/coins/images/38469/thumb/dpad_token_logo.png?1717619200", 
      "decimals": 18
    }, 
    {
      "name": "Bonke  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "BONKE", 
      "priority": 3, 
      "address": "0x1754e5aadce9567a95f545b146a616ce34eead53", 
      "logo": "https://assets.coingecko.com/coins/images/38448/thumb/bonke200.png?1717556675", 
      "decimals": 9
    }, 
    {
      "name": "Chinese Brett", 
      "abi": "ERC20_ABI", 
      "symbol": "CHRETT", 
      "priority": 3, 
      "address": "0xf8a99f2bf2ce5bb6ce4aafcf070d8723bc904aa2", 
      "logo": "https://assets.coingecko.com/coins/images/38541/thumb/GNQP9A7WwAIcolJ_%282%29.png?1717926712", 
      "decimals": 18
    }, 
    {
      "name": "Chinese Toshi", 
      "abi": "ERC20_ABI", 
      "symbol": "CTOSHI", 
      "priority": 3, 
      "address": "0x28a730de97dc62a8c88363e0b1049056f1274a70", 
      "logo": "https://assets.coingecko.com/coins/images/38635/thumb/231_%28Custom%29_%283%29.png?1718173956", 
      "decimals": 18
    }, 
    {
      "name": "Cats Do Something", 
      "abi": "ERC20_ABI", 
      "symbol": "CDS", 
      "priority": 3, 
      "address": "0x87a0233a8cb4392ec3eb8fa467817fc0b6a326dd", 
      "logo": "https://assets.coingecko.com/coins/images/38918/thumb/Cats_do_something_copy_1.png?1719478926", 
      "decimals": 18
    }, 
    {
      "name": "WAIFU", 
      "abi": "ERC20_ABI", 
      "symbol": "WAIFU", 
      "priority": 3, 
      "address": "0xe9507980a8bd4451ac0e7f6fcd3ec98b9ac83b52", 
      "logo": "https://assets.coingecko.com/coins/images/39217/thumb/unnamed.png?1721109004", 
      "decimals": 18
    }, 
    {
      "name": "Meh", 
      "abi": "ERC20_ABI", 
      "symbol": "MEH", 
      "priority": 3, 
      "address": "0xa999542c71febba77602fbc2f784ba9ba0c850f6", 
      "logo": "https://assets.coingecko.com/coins/images/38708/thumb/meh_token.png?1718380026", 
      "decimals": 18
    }, 
    {
      "name": "Refund  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "RFND", 
      "priority": 3, 
      "address": "0x26fb8f2f3b26c750ee34005c1930deb232940cfe", 
      "logo": "https://assets.coingecko.com/coins/images/38735/thumb/Refund.png?1718590733", 
      "decimals": 18
    }, 
    {
      "name": "Bird Dog on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BIRDDOG", 
      "priority": 3, 
      "address": "0x92af6f53febd6b4c6f5293840b6076a1b82c4bc2", 
      "logo": "https://assets.coingecko.com/coins/images/38437/thumb/birddog_logo_sticker_200x200_final_%281%29.png?1719953537", 
      "decimals": 18
    }, 
    {
      "name": "Blue Footed Booby", 
      "abi": "ERC20_ABI", 
      "symbol": "BOOBY", 
      "priority": 3, 
      "address": "0x80b3455e1db60b4cba46aba12e8b1e256dd64979", 
      "logo": "https://assets.coingecko.com/coins/images/38859/thumb/Pfp2200x200.png?1719952590", 
      "decimals": 18
    }, 
    {
      "name": "Onchain Summer", 
      "abi": "ERC20_ABI", 
      "symbol": "SUMMER", 
      "priority": 3, 
      "address": "0xf7ccb8a6e3400eb8eb0c47619134f7516e025215", 
      "logo": "https://assets.coingecko.com/coins/images/38558/thumb/2024-06-01_00.27.41.jpg?1718000886", 
      "decimals": 8
    }, 
    {
      "name": "BUCCI", 
      "abi": "ERC20_ABI", 
      "symbol": "BRRR", 
      "priority": 3, 
      "address": "0x1e0bb24ed6c806c01ef2f880a4b91adb90099ea7", 
      "logo": "https://assets.coingecko.com/coins/images/39055/thumb/BUCCI.png?1720158867", 
      "decimals": 18
    }, 
    {
      "name": "Dook", 
      "abi": "ERC20_ABI", 
      "symbol": "DOOK", 
      "priority": 3, 
      "address": "0x461ee40928677644b8195662ab91bcdaae6ef105", 
      "logo": "https://assets.coingecko.com/coins/images/38594/thumb/P3oYXNbf_400x400.jpeg?1718927359", 
      "decimals": 18
    }, 
    {
      "name": "BAGEL Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "BAGEL", 
      "priority": 3, 
      "address": "0x835e336782a1d04db6eb44c44024650d18a138c2", 
      "logo": "https://assets.coingecko.com/coins/images/38158/thumb/_bagel_logo.png?1716669784", 
      "decimals": 18
    }, 
    {
      "name": " treeplanting", 
      "abi": "ERC20_ABI", 
      "symbol": "TREE", 
      "priority": 3, 
      "address": "0x6888c2409d48222e2cb738eb5a805a522a96ce80", 
      "logo": "https://assets.coingecko.com/coins/images/38145/thumb/esdotge_phi_logo_dark.jpeg?1720993602", 
      "decimals": 18
    }, 
    {
      "name": "BlueCore", 
      "abi": "ERC20_ABI", 
      "symbol": "BCOR", 
      "priority": 3, 
      "address": "0x142592f9e9a9cdea6c1167ffceae0fcfb3e7ea97", 
      "logo": "https://assets.coingecko.com/coins/images/38793/thumb/200x200.png?1718858972", 
      "decimals": 18
    }, 
    {
      "name": "Newton On Base", 
      "abi": "ERC20_ABI", 
      "symbol": "NEWB", 
      "priority": 3, 
      "address": "0xeb9e49fb4c33d9f6aefb1b03f9133435e24c0ec6", 
      "logo": "https://assets.coingecko.com/coins/images/38475/thumb/IMG_1092.JPG?1724476844", 
      "decimals": 18
    }, 
    {
      "name": "King Of Memes", 
      "abi": "ERC20_ABI", 
      "symbol": "KING", 
      "priority": 3, 
      "address": "0x420b0fa3de2efcf2b2fd04152eb1df36a09717cd", 
      "logo": "https://assets.coingecko.com/coins/images/38261/thumb/kingofmemes.png?1716929140", 
      "decimals": 18
    }, 
    {
      "name": "r DataDAO", 
      "abi": "ERC20_ABI", 
      "symbol": "RDAT", 
      "priority": 3, 
      "address": "0x4498cd8ba045e00673402353f5a4347562707e7d", 
      "logo": "https://assets.coingecko.com/coins/images/39174/thumb/Q7oVa2cC_400x400.png?1720799391", 
      "decimals": 18
    }, 
    {
      "name": "BASED RABBIT", 
      "abi": "ERC20_ABI", 
      "symbol": "RABBIT", 
      "priority": 3, 
      "address": "0x642e993fa91ffe9fb24d39a8eb0e0663145f8e92", 
      "logo": "https://assets.coingecko.com/coins/images/38843/thumb/BASED_RABBIT_200x200.png?1719202239", 
      "decimals": 18
    }, 
    {
      "name": "DeFido", 
      "abi": "ERC20_ABI", 
      "symbol": "DEFIDO", 
      "priority": 3, 
      "address": "0x132bbda4a40d4d6288be49b637ec2c113b5d7600", 
      "logo": "https://assets.coingecko.com/coins/images/39305/thumb/DEFI200.jpg?1721636059", 
      "decimals": 18
    }, 
    {
      "name": "IHF Smart Debase Token", 
      "abi": "ERC20_ABI", 
      "symbol": "IHF", 
      "priority": 3, 
      "address": "0x3b9728bd65ca2c11a817ce39a6e91808cceef6fd", 
      "logo": "https://assets.coingecko.com/coins/images/38674/thumb/IHF_Smart_Debase_Token.png?1718307310", 
      "decimals": 18
    }, 
    {
      "name": "SKI MASK PUP", 
      "abi": "ERC20_ABI", 
      "symbol": "SKIPUP", 
      "priority": 3, 
      "address": "0x4e73420dcc85702ea134d91a262c8ffc0a72aa70", 
      "logo": "https://assets.coingecko.com/coins/images/38093/thumb/SkiPup_Logo.png?1716486539", 
      "decimals": 8
    }, 
    {
      "name": "Daily Active Users", 
      "abi": "ERC20_ABI", 
      "symbol": "DAU", 
      "priority": 3, 
      "address": "0x0753be703ab39a30c0041b7395351e9f65206500", 
      "logo": "https://assets.coingecko.com/coins/images/38305/thumb/dau.png?1717047632", 
      "decimals": 18
    }, 
    {
      "name": "UNLUCKY", 
      "abi": "ERC20_ABI", 
      "symbol": "UNLUCKY", 
      "priority": 3, 
      "address": "0x3933012dcf9beb0d63778725345e04dcc0c69c7e", 
      "logo": "https://assets.coingecko.com/coins/images/38691/thumb/unlucky.jpeg?1718346998", 
      "decimals": 0
    }, 
    {
      "name": "Monke", 
      "abi": "ERC20_ABI", 
      "symbol": "MONKE", 
      "priority": 3, 
      "address": "0x7771450ece9c61430953d2646f995e33a06c91f5", 
      "logo": "https://assets.coingecko.com/coins/images/38573/thumb/XYqp9v6F_400x400_%281%29_%281%29.png?1718009279", 
      "decimals": 18
    }, 
    {
      "name": "KeptChain", 
      "abi": "ERC20_ABI", 
      "symbol": "KEPT", 
      "priority": 3, 
      "address": "0x8a9430e92153c026092544444cbb38077e6688d1", 
      "logo": "https://assets.coingecko.com/coins/images/38406/thumb/Kept_200_200.png?1717463539", 
      "decimals": 18
    }, 
    {
      "name": "GROOVE", 
      "abi": "ERC20_ABI", 
      "symbol": "GROOVE", 
      "priority": 3, 
      "address": "0x1cd38856ee0fdfd65c757e530e3b1de3061008d3", 
      "logo": "https://assets.coingecko.com/coins/images/38234/thumb/WhatsApp_Image_2024-05-25_at_15.01.21.png?1716860760", 
      "decimals": 18
    }, 
    {
      "name": "OpenSocial", 
      "abi": "ERC20_ABI", 
      "symbol": "OSP", 
      "priority": 3, 
      "address": "0xacb5b33ce55ba7729e38b2b59677e71c0112f0d9", 
      "logo": "https://assets.coingecko.com/coins/images/29681/thumb/opensocial.jpeg?1717657247", 
      "decimals": 18
    }, 
    {
      "name": "Brish", 
      "abi": "ERC20_ABI", 
      "symbol": "BRISH", 
      "priority": 3, 
      "address": "0x37f24b26bcefbfac7f261b97f8036da98f81a299", 
      "logo": "https://assets.coingecko.com/coins/images/38700/thumb/brishlogoupdate.png?1718480842", 
      "decimals": 18
    }, 
    {
      "name": "L2 Standard Bridged USDT  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "USDT", 
      "priority": 3, 
      "address": "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2", 
      "logo": "https://assets.coingecko.com/coins/images/39963/thumb/usdt.png?1724952731", 
      "decimals": 6
    }, 
    {
      "name": "Force", 
      "abi": "ERC20_ABI", 
      "symbol": "FORCE", 
      "priority": 3, 
      "address": "0x9ef1139e6b420cc929dd912a5a7adeced6f12e91", 
      "logo": "https://assets.coingecko.com/coins/images/39483/thumb/CLONE_FORCE.jpg?1722482372", 
      "decimals": 18
    }, 
    {
      "name": "BOLT on Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BOLT", 
      "priority": 3, 
      "address": "0x7cf7132ede0ca592a236b6198a681bb7b42dd5ae", 
      "logo": "https://assets.coingecko.com/coins/images/38449/thumb/wwwww.png?1717557162", 
      "decimals": 18
    }, 
    {
      "name": "ZAP", 
      "abi": "ERC20_ABI", 
      "symbol": "ZAP", 
      "priority": 3, 
      "address": "0xf56b3b3972f2f154555a0b62ff5a22b7b2a3c90b", 
      "logo": "https://assets.coingecko.com/coins/images/50515/thumb/zap.jpg?1728033535", 
      "decimals": 18
    }, 
    {
      "name": "MPAA", 
      "abi": "ERC20_ABI", 
      "symbol": "MPAA", 
      "priority": 3, 
      "address": "0x4194f4e29d652656b6dc84f10363482c5ac101b5", 
      "logo": "https://assets.coingecko.com/coins/images/39521/thumb/photo_2024-08-03_12-01-50.jpg?1722790299", 
      "decimals": 18
    }, 
    {
      "name": "Falcons", 
      "abi": "ERC20_ABI", 
      "symbol": "FAH", 
      "priority": 3, 
      "address": "0xae2bddbcc932c2d2cf286bad0028c6f5074c77b5", 
      "logo": "https://assets.coingecko.com/coins/images/50297/thumb/Falcons.png?1726935509", 
      "decimals": 18
    }, 
    {
      "name": "Apollo Name Service", 
      "abi": "ERC20_ABI", 
      "symbol": "ANS", 
      "priority": 3, 
      "address": "0xa8c2e771288585229eea8dbe072edfa7bcb388bb", 
      "logo": "https://assets.coingecko.com/coins/images/40040/thumb/star_logo8305.png?1725392202", 
      "decimals": 18
    }, 
    {
      "name": "Marso Tech", 
      "abi": "ERC20_ABI", 
      "symbol": "MARSO", 
      "priority": 3, 
      "address": "0xdfd579dd6aeb232e95a15d964a135a61925b5c93", 
      "logo": "https://assets.coingecko.com/coins/images/50292/thumb/QKbwAja.png?1726905588", 
      "decimals": 18
    }, 
    {
      "name": "DEFLI", 
      "abi": "ERC20_ABI", 
      "symbol": "FLI", 
      "priority": 3, 
      "address": "0x076bf099c7aabd0bc9bc37930113428906f51d89", 
      "logo": "https://assets.coingecko.com/coins/images/50582/thumb/defli_lgo_2_%28200_x_200_px%29.png?1728415750", 
      "decimals": 18
    }, 
    {
      "name": "This Is My Iguana", 
      "abi": "ERC20_ABI", 
      "symbol": "TIMI", 
      "priority": 3, 
      "address": "0x9beec80e62aa257ced8b0edd8692f79ee8783777", 
      "logo": "https://assets.coingecko.com/coins/images/39361/thumb/200x200.png?1722464115", 
      "decimals": 18
    }, 
    {
      "name": "BaseBearCute", 
      "abi": "ERC20_ABI", 
      "symbol": "BBQ", 
      "priority": 3, 
      "address": "0x41a22eb30df65d6ab0ce0b4cfe8f4e0eb306d471", 
      "logo": "https://assets.coingecko.com/coins/images/40006/thumb/logo.jpg?1725221317", 
      "decimals": 18
    }, 
    {
      "name": "Overnight fi USD   Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "USD+", 
      "priority": 3, 
      "address": "0xb79dd08ea68a908a97220c76d19a6aa9cbde4376", 
      "logo": "https://assets.coingecko.com/coins/images/39624/thumb/USD_.png?1723179227", 
      "decimals": 6
    }, 
    {
      "name": "BASED", 
      "abi": "ERC20_ABI", 
      "symbol": "BASED", 
      "priority": 3, 
      "address": "0x32e0f9d26d1e33625742a52620cc76c1130efde6", 
      "logo": "https://assets.coingecko.com/coins/images/39669/thumb/BASED.jpg?1723603780", 
      "decimals": 18
    }, 
    {
      "name": "Goodle", 
      "abi": "ERC20_ABI", 
      "symbol": "GOODLE", 
      "priority": 3, 
      "address": "0x9f235d23354857efe6c541db92a9ef1877689bcb", 
      "logo": "https://assets.coingecko.com/coins/images/39688/thumb/Screenshot_2024-07-26_at_5.38.55_PM-removebg-preview.png?1723660779", 
      "decimals": 18
    }, 
    {
      "name": "Buz Economy", 
      "abi": "ERC20_ABI", 
      "symbol": "BUZ", 
      "priority": 3, 
      "address": "0xc73dc7ae7a4fa40517aafa941ae1ee436b91a12c", 
      "logo": "https://assets.coingecko.com/coins/images/39793/thumb/buz-economy-logo-dark.png?1724117134", 
      "decimals": 4
    }, 
    {
      "name": "Shakaka", 
      "abi": "ERC20_ABI", 
      "symbol": "SHKK", 
      "priority": 3, 
      "address": "0x77c6986a83d5dbb6162ddf4f1747691005b4388a", 
      "logo": "https://assets.coingecko.com/coins/images/39519/thumb/8373198719202603226-2.png?1722770492", 
      "decimals": 18
    }, 
    {
      "name": "Tadpole", 
      "abi": "ERC20_ABI", 
      "symbol": "TAD", 
      "priority": 3, 
      "address": "0x55027a5b06f4340cc4c82dcc74c90ca93dcb173e", 
      "logo": "https://assets.coingecko.com/coins/images/39783/thumb/IMG_7927.PNG?1724101375", 
      "decimals": 18
    }, 
    {
      "name": "DRINK", 
      "abi": "ERC20_ABI", 
      "symbol": "DRINK", 
      "priority": 3, 
      "address": "0x2dc90fa3a0f178ba4bee16cac5d6c9a5a7b4c6cb", 
      "logo": "https://assets.coingecko.com/coins/images/50167/thumb/2N1fxgBw_400x400.jpg?1726136925", 
      "decimals": 18
    }, 
    {
      "name": "BlockChainPeople", 
      "abi": "ERC20_ABI", 
      "symbol": "BCP", 
      "priority": 3, 
      "address": "0x87c211144b1d9bdaa5a791b8099ea4123dc31d21", 
      "logo": "https://assets.coingecko.com/coins/images/38085/thumb/200x200.png?1716477512", 
      "decimals": 18
    }, 
    {
      "name": "Blue Guy", 
      "abi": "ERC20_ABI", 
      "symbol": "BLUE", 
      "priority": 3, 
      "address": "0x891502ba08132653151f822a3a430198f1844115", 
      "logo": "https://assets.coingecko.com/coins/images/39645/thumb/IMG_20240810_073513_639.png?1723412054", 
      "decimals": 18
    }, 
    {
      "name": "DUDEGEN", 
      "abi": "ERC20_ABI", 
      "symbol": "DUDEGEN", 
      "priority": 3, 
      "address": "0xcc6ce98579ba909344bb765f0c4f45964d5ce1d2", 
      "logo": "https://assets.coingecko.com/coins/images/39323/thumb/Untitled_Artwork_5-enhanced_copy_2.png?1721711203", 
      "decimals": 18
    }, 
    {
      "name": "Make Fun", 
      "abi": "ERC20_ABI", 
      "symbol": "MF", 
      "priority": 3, 
      "address": "0x474cb5b5087e13ea006e13702e330c93c825ab5d", 
      "logo": "https://assets.coingecko.com/coins/images/51437/thumb/logo-128.png?1731224206", 
      "decimals": 18
    }, 
    {
      "name": "SNAP", 
      "abi": "ERC20_ABI", 
      "symbol": "SNAP", 
      "priority": 3, 
      "address": "0xba1e2321e340740f9c3685dc09de5e0326bc1799", 
      "logo": "https://assets.coingecko.com/coins/images/51499/thumb/side-token-gold.png?1731420627", 
      "decimals": 18
    }, 
    {
      "name": "BaseCTO", 
      "abi": "ERC20_ABI", 
      "symbol": "CTO", 
      "priority": 3, 
      "address": "0x2075f6e2147d4ac26036c9b4084f8e28b324397d", 
      "logo": "https://assets.coingecko.com/coins/images/50716/thumb/IMG_1480.jpeg?1728792869", 
      "decimals": 18
    }, 
    {
      "name": "TaskBunny", 
      "abi": "ERC20_ABI", 
      "symbol": "BNY", 
      "priority": 3, 
      "address": "0x6009e7cd237087e6d7570990e8bdac09c3e182b0", 
      "logo": "https://assets.coingecko.com/coins/images/51478/thumb/Bunny_coin_200x200.png?1731404290", 
      "decimals": 18
    }, 
    {
      "name": "Blue", 
      "abi": "ERC20_ABI", 
      "symbol": "BLUE", 
      "priority": 3, 
      "address": "0x7f65323e468939073ef3b5287c73f13951b0ff5b", 
      "logo": "https://assets.coingecko.com/coins/images/51053/thumb/Blue200p.png?1729873273", 
      "decimals": 18
    }, 
    {
      "name": "Cod3x USD", 
      "abi": "ERC20_ABI", 
      "symbol": "CDXUSD", 
      "priority": 3, 
      "address": "0xc0d3700000987c99b3c9009069e4f8413fd22330", 
      "logo": "https://assets.coingecko.com/coins/images/51438/thumb/logo-128x128.png?1731224236", 
      "decimals": 18
    }, 
    {
      "name": "Based Bario", 
      "abi": "ERC20_ABI", 
      "symbol": "BARIO", 
      "priority": 3, 
      "address": "0x814fe70e85025bec87d4ad3f3b713bdcaac0579b", 
      "logo": "https://assets.coingecko.com/coins/images/50719/thumb/bario.jpg?1728803763", 
      "decimals": 18
    }, 
    {
      "name": "Pike Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "P", 
      "priority": 3, 
      "address": "0x25e1c298f100d7c600e9e44d46788c1ebbd4f69b", 
      "logo": "https://assets.coingecko.com/coins/images/50771/thumb/image.png?1729132574", 
      "decimals": 18
    }, 
    {
      "name": "Kendu Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "KENDU", 
      "priority": 3, 
      "address": "0x5597ce42b315f29e42071d231dcd0158da35b77b", 
      "logo": "https://assets.coingecko.com/coins/images/51087/thumb/Based_Kendu_Logo_%281%29.png?1730019305", 
      "decimals": 18
    }, 
    {
      "name": "Brian", 
      "abi": "ERC20_ABI", 
      "symbol": "BRIAN", 
      "priority": 3, 
      "address": "0x3ecced5b416e58664f04a39dd18935eb71d33b15", 
      "logo": "https://assets.coingecko.com/coins/images/51099/thumb/Brian_Arm_Strong.png?1730083824", 
      "decimals": 18
    }, 
    {
      "name": "Onchain Finance and Culture", 
      "abi": "ERC20_ABI", 
      "symbol": "OFAC", 
      "priority": 3, 
      "address": "0xd06a6370c232d3729340fd6953d9c92c400d14f5", 
      "logo": "https://assets.coingecko.com/coins/images/52323/thumb/GdU5uodXkAA_XKi.jpeg?1733078553", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped DOGE  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UDOGE", 
      "priority": 3, 
      "address": "0x12e96c2bfea6e835cf8dd38a5834fa61cf723736", 
      "logo": "https://assets.coingecko.com/coins/images/40099/thumb/UA-DOGE_1.png?1725632510", 
      "decimals": 18
    }, 
    {
      "name": "Shaka", 
      "abi": "ERC20_ABI", 
      "symbol": "SHAKA", 
      "priority": 3, 
      "address": "0x478e03d45716dda94f6dbc15a633b0d90c237e2f", 
      "logo": "https://assets.coingecko.com/coins/images/36850/thumb/sharetheshaka.png?1712585688", 
      "decimals": 18
    }, 
    {
      "name": "Apetardio", 
      "abi": "ERC20_ABI", 
      "symbol": "APETARDIO", 
      "priority": 3, 
      "address": "0xe161be4a74ab8fa8706a2d03e67c02318d0a0ad6", 
      "logo": "https://assets.coingecko.com/coins/images/38155/thumb/apetardio200x200.png?1716669062", 
      "decimals": 18
    }, 
    {
      "name": "Marvin On Base", 
      "abi": "ERC20_ABI", 
      "symbol": "MOB", 
      "priority": 3, 
      "address": "0x7e72d6410803c40e73806f2a72e3eade5d075cc0", 
      "logo": "https://assets.coingecko.com/coins/images/38960/thumb/Marvin_200.png?1719692064", 
      "decimals": 18
    }, 
    {
      "name": "Bark Ruffalo by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "PAWSY", 
      "priority": 3, 
      "address": "0x29e39327b5b1e500b87fc0fcae3856cd8f96ed2a", 
      "logo": "https://assets.coingecko.com/coins/images/52205/thumb/00_Avatar_200x200.png?1732736729", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Aptos  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UAPT", 
      "priority": 3, 
      "address": "0x9c0e042d65a2e1ff31ac83f404e5cb79f452c337", 
      "logo": "https://assets.coingecko.com/coins/images/50646/thumb/UA-APTOS-PAD_1.png?1728579627", 
      "decimals": 18
    }, 
    {
      "name": "MOEW", 
      "abi": "ERC20_ABI", 
      "symbol": "MOEW", 
      "priority": 3, 
      "address": "0x15ac90165f8b45a80534228bdcb124a011f62fee", 
      "logo": "https://assets.coingecko.com/coins/images/36737/thumb/img_v3_02h9_c36546da-c4b6-4636-bc50-5239ab5d78hu.png?1733472868", 
      "decimals": 18
    }, 
    {
      "name": "The Css God by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "WEBSIM", 
      "priority": 3, 
      "address": "0xdaf3c78f165d26f821d3d39d6598a96e962b1508", 
      "logo": "https://assets.coingecko.com/coins/images/52173/thumb/the_css_god.jpg?1732684452", 
      "decimals": 18
    }, 
    {
      "name": "Fren Pet", 
      "abi": "ERC20_ABI", 
      "symbol": "FP", 
      "priority": 3, 
      "address": "0xff0c532fdb8cd566ae169c1cb157ff2bdc83e105", 
      "logo": "https://assets.coingecko.com/coins/images/33022/thumb/token.png?1700274697", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Bitcoin  Universal ", 
      "abi": "ERC20_ABI", 
      "symbol": "UBTC", 
      "priority": 3, 
      "address": "0xf1143f3a8d76f1ca740d29d5671d365f66c44ed1", 
      "logo": "https://assets.coingecko.com/coins/images/50252/thumb/UA-BTC_1.png?1726721793", 
      "decimals": 18
    }, 
    {
      "name": "nftxbt", 
      "abi": "ERC20_ABI", 
      "symbol": "NFTXBT", 
      "priority": 3, 
      "address": "0x08c81699f9a357a9f0d04a09b353576ca328d60d", 
      "logo": "https://assets.coingecko.com/coins/images/52332/thumb/nftxbt_pfp.png?1739556773", 
      "decimals": 18
    }, 
    {
      "name": "Boomer", 
      "abi": "ERC20_ABI", 
      "symbol": "BOOMER", 
      "priority": 3, 
      "address": "0xcde172dc5ffc46d228838446c57c1227e0b82049", 
      "logo": "https://assets.coingecko.com/coins/images/36477/thumb/Token_Image_200x200.png?1714757172", 
      "decimals": 18
    }, 
    {
      "name": "JOJO", 
      "abi": "ERC20_ABI", 
      "symbol": "JOJO", 
      "priority": 3, 
      "address": "0x0645bc5cdff2376089323ac20df4119e48e4bcc4", 
      "logo": "https://assets.coingecko.com/coins/images/39516/thumb/green_icon.png?1722661075", 
      "decimals": 18
    }, 
    {
      "name": "BaseSwap", 
      "abi": "ERC20_ABI", 
      "symbol": "BSWAP", 
      "priority": 3, 
      "address": "0x78a087d713be963bf307b18f2ff8122ef9a63ae9", 
      "logo": "https://assets.coingecko.com/coins/images/31245/thumb/Baseswap_LogoNew.jpg?1696530070", 
      "decimals": 18
    }, 
    {
      "name": "Ducky City", 
      "abi": "ERC20_ABI", 
      "symbol": "DCM", 
      "priority": 3, 
      "address": "0x3eeec801cef575b876d253ab06d75251f67d827d", 
      "logo": "https://assets.coingecko.com/coins/images/36664/thumb/logo_duck_200x200_none_bor.png?1712046450", 
      "decimals": 18
    }, 
    {
      "name": "Crash On Base", 
      "abi": "ERC20_ABI", 
      "symbol": "CRASH", 
      "priority": 3, 
      "address": "0x4dd9077269dd08899f2a9e73507125962b5bc87f", 
      "logo": "https://assets.coingecko.com/coins/images/38817/thumb/_iNshlUA.png?1722185418", 
      "decimals": 18
    }, 
    {
      "name": "Envision Labs", 
      "abi": "ERC20_ABI", 
      "symbol": "VIS", 
      "priority": 3, 
      "address": "0xfc60aa1ffca50ce08b3cdec9626c0bb9e9b09bec", 
      "logo": "https://assets.coingecko.com/coins/images/37142/thumb/Envision_Logo.png?1713421742", 
      "decimals": 18
    }, 
    {
      "name": "Degens With Attitude", 
      "abi": "ERC20_ABI", 
      "symbol": "DWA", 
      "priority": 3, 
      "address": "0x1d4731111bd2a50ab3dd5178574e6f3698270ffc", 
      "logo": "https://assets.coingecko.com/coins/images/50904/thumb/photo_2024-10-19_09-25-28_%282%29.jpg?1729520613", 
      "decimals": 18
    }, 
    {
      "name": "Luminous", 
      "abi": "ERC20_ABI", 
      "symbol": "LUM", 
      "priority": 3, 
      "address": "0x0fd7a301b51d0a83fcaf6718628174d527b373b6", 
      "logo": "https://assets.coingecko.com/coins/images/51439/thumb/LUM.jpg?1731232511", 
      "decimals": 18
    }, 
    {
      "name": "PARADOX", 
      "abi": "ERC20_ABI", 
      "symbol": "PARADOX", 
      "priority": 3, 
      "address": "0x3c4b6cd7874edc945797123fce2d9a871818524b", 
      "logo": "https://assets.coingecko.com/coins/images/51590/thumb/IMG_1408.jpeg?1731570502", 
      "decimals": 18
    }, 
    {
      "name": "Roost", 
      "abi": "ERC20_ABI", 
      "symbol": "ROOST", 
      "priority": 3, 
      "address": "0xed899bfdb28c8ad65307fa40f4acab113ae2e14c", 
      "logo": "https://assets.coingecko.com/coins/images/36458/thumb/roost.jpeg?1711493580", 
      "decimals": 18
    }, 
    {
      "name": "ChompCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "CHOMP", 
      "priority": 3, 
      "address": "0xebff2db643cf955247339c8c6bcd8406308ca437", 
      "logo": "https://assets.coingecko.com/coins/images/36942/thumb/chomplogo200.png?1712864472", 
      "decimals": 18
    }, 
    {
      "name": "Lyvely", 
      "abi": "ERC20_ABI", 
      "symbol": "LVLY", 
      "priority": 3, 
      "address": "0xc734635cd30e882037c3f3de1ebccf9fa9d27d9f", 
      "logo": "https://assets.coingecko.com/coins/images/50215/thumb/symbol_color.png?1726436150", 
      "decimals": 18
    }, 
    {
      "name": "WEWECOIN", 
      "abi": "ERC20_ABI", 
      "symbol": "WEWE", 
      "priority": 3, 
      "address": "0x6b9bb36519538e0c073894e964e90172e1c0b41f", 
      "logo": "https://assets.coingecko.com/coins/images/39135/thumb/wewe_logo.png?1720857800", 
      "decimals": 18
    }, 
    {
      "name": "PAID", 
      "abi": "ERC20_ABI", 
      "symbol": "PAID", 
      "priority": 3, 
      "address": "0x655a51e6803faf50d4ace80fa501af2f29c856cf", 
      "logo": "https://assets.coingecko.com/coins/images/13761/thumb/PAID_Logo_new.png?1730798431", 
      "decimals": 18
    }, 
    {
      "name": "Synthesizer Dog", 
      "abi": "ERC20_ABI", 
      "symbol": "SYNDOG", 
      "priority": 3, 
      "address": "0x3d1d651761d535df881740ab50ba4bd8a2ec2c00", 
      "logo": "https://assets.coingecko.com/coins/images/51577/thumb/SYNDOG_LOGO.png?1731534533", 
      "decimals": 18
    }, 
    {
      "name": "Monky", 
      "abi": "ERC20_ABI", 
      "symbol": "MONKY", 
      "priority": 3, 
      "address": "0x9124577428c5bd73ad7636cbc5014081384f29d6", 
      "logo": "https://assets.coingecko.com/coins/images/38522/thumb/1000084004.jpg?1717759092", 
      "decimals": 18
    }, 
    {
      "name": "Shiba Armstrong", 
      "abi": "ERC20_ABI", 
      "symbol": "SHIBA", 
      "priority": 3, 
      "address": "0x041fdf3f472d2c8a7ecc458fc3b7f543e6c57ef7", 
      "logo": "https://assets.coingecko.com/coins/images/37708/thumb/LOGO256.png?1715273986", 
      "decimals": 9
    }, 
    {
      "name": "CertaiK by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "CERTAI", 
      "priority": 3, 
      "address": "0xf5f2a79eeccf6e7f4c570c803f529930e29cc96b", 
      "logo": "https://assets.coingecko.com/coins/images/52488/thumb/download.jpeg?1733432223", 
      "decimals": 18
    }, 
    {
      "name": "Crypto Journey", 
      "abi": "ERC20_ABI", 
      "symbol": "DADDY", 
      "priority": 3, 
      "address": "0xdb173587d459ddb1b9b0f2d6d88febef039304a2", 
      "logo": "https://assets.coingecko.com/coins/images/38388/thumb/_daddy_%282%29.png?1717417360", 
      "decimals": 18
    }, 
    {
      "name": "Prefrontal Cortex Convo Agent by Virtua", 
      "abi": "ERC20_ABI", 
      "symbol": "CONVO", 
      "priority": 3, 
      "address": "0xab964f7b7b6391bd6c4e8512ef00d01f255d9c0d", 
      "logo": "https://assets.coingecko.com/coins/images/51064/thumb/Convo_Agent_89ef084f87.jpg?1729926154", 
      "decimals": 18
    }, 
    {
      "name": "Satoshi AI agent by Virtuals", 
      "abi": "ERC20_ABI", 
      "symbol": "SAINT", 
      "priority": 3, 
      "address": "0x7588880d9c78e81fade7b7e8dc0781e95995a792", 
      "logo": "https://assets.coingecko.com/coins/images/52336/thumb/saint.jpg?1733121865", 
      "decimals": 18
    }, 
    {
      "name": "Bullieverse", 
      "abi": "ERC20_ABI", 
      "symbol": "BULL", 
      "priority": 3, 
      "address": "0x9f95e17b2668afe01f8fbd157068b0a4405cc08d", 
      "logo": "https://assets.coingecko.com/coins/images/24174/thumb/KR3qVAQe_400x400.jpg?1696523362", 
      "decimals": 18
    }, 
    {
      "name": "Rei", 
      "abi": "ERC20_ABI", 
      "symbol": "REI", 
      "priority": 3, 
      "address": "0x6b2504a03ca4d43d0d73776f6ad46dab2f2a4cfd", 
      "logo": "https://assets.coingecko.com/coins/images/52005/thumb/TIAutjcd_400x400.jpg?1741519600", 
      "decimals": 18
    }, 
    {
      "name": "Gibape", 
      "abi": "ERC20_ABI", 
      "symbol": "GIB", 
      "priority": 3, 
      "address": "0x589864a9892b1a736ae70a91824ab4dc591fd8cd", 
      "logo": "https://assets.coingecko.com/coins/images/37691/thumb/gib_ape_logo.jpeg?1715650189", 
      "decimals": 18
    }, 
    {
      "name": "Skull of Pepe Token", 
      "abi": "ERC20_ABI", 
      "symbol": "SKOP", 
      "priority": 3, 
      "address": "0x6d3b8c76c5396642960243febf736c6be8b60562", 
      "logo": "https://assets.coingecko.com/coins/images/38342/thumb/skop.jpeg?1717141011", 
      "decimals": 18
    }, 
    {
      "name": "Reflect", 
      "abi": "ERC20_ABI", 
      "symbol": "RFL", 
      "priority": 3, 
      "address": "0x6e2c81b6c2c0e02360f00a0da694e489acb0b05e", 
      "logo": "https://assets.coingecko.com/coins/images/39189/thumb/Reflect.png?1720855854", 
      "decimals": 18
    }, 
    {
      "name": "Cope", 
      "abi": "ERC20_ABI", 
      "symbol": "COPE", 
      "priority": 3, 
      "address": "0x633546a298e734700bdca888a87ab954159ec93c", 
      "logo": "https://assets.coingecko.com/coins/images/36455/thumb/photo_2024-03-22_21-06-42-removebg-preview.png?1711474551", 
      "decimals": 9
    }, 
    {
      "name": "RealGoat", 
      "abi": "ERC20_ABI", 
      "symbol": "RGOAT", 
      "priority": 3, 
      "address": "0xf0268c5f9aa95baf5c25d646aabb900ac12f0800", 
      "logo": "https://assets.coingecko.com/coins/images/38923/thumb/IMG_20240625_033037_003.jpg?1719521003", 
      "decimals": 8
    }, 
    {
      "name": "Chaos", 
      "abi": "ERC20_ABI", 
      "symbol": "CHAOS", 
      "priority": 3, 
      "address": "0x20d704099b62ada091028bcfc44445041ed16f09", 
      "logo": "https://assets.coingecko.com/coins/images/52444/thumb/Chaos_agent_update.jpeg?1737275178", 
      "decimals": 18
    }, 
    {
      "name": "Akashalife", 
      "abi": "ERC20_ABI", 
      "symbol": "AK1111", 
      "priority": 3, 
      "address": "0x54b659832f59c24cec0e4a2cd193377f1bcefc3c", 
      "logo": "https://assets.coingecko.com/coins/images/50533/thumb/Akasha-CoinIcon_%283%29.png?1728206155", 
      "decimals": 18
    }, 
    {
      "name": "higher", 
      "abi": "ERC20_ABI", 
      "symbol": "HIGHER", 
      "priority": 3, 
      "address": "0x0578d8a44db98b23bf096a382e016e29a5ce0ffe", 
      "logo": "https://assets.coingecko.com/coins/images/36084/thumb/200x200logo.png?1710427814", 
      "decimals": 18
    }, 
    {
      "name": "Floppa Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "FLOPPA", 
      "priority": 3, 
      "address": "0x776aaef8d8760129a0398cf8674ee28cefc0eab9", 
      "logo": "https://assets.coingecko.com/coins/images/36969/thumb/floppa.jpg?1722771377", 
      "decimals": 18
    }, 
    {
      "name": "Joystream", 
      "abi": "ERC20_ABI", 
      "symbol": "JOY", 
      "priority": 3, 
      "address": "0x8761155c814c807cd3ccd15b256d69d3c10f198c", 
      "logo": "https://assets.coingecko.com/coins/images/24785/thumb/joy.png?1696523945", 
      "decimals": 10
    }, 
    {
      "name": "Toby ToadGod", 
      "abi": "ERC20_ABI", 
      "symbol": "TOBY", 
      "priority": 3, 
      "address": "0xb8d98a102b0079b69ffbc760c8d857a31653e56e", 
      "logo": "https://assets.coingecko.com/coins/images/36615/thumb/toby1.png?1711976453", 
      "decimals": 18
    }, 
    {
      "name": "Libertum", 
      "abi": "ERC20_ABI", 
      "symbol": "LBM", 
      "priority": 3, 
      "address": "0x56a38e7216304108e841579041249feb236c887b", 
      "logo": "https://assets.coingecko.com/coins/images/37147/thumb/wmGmpgSW_400x400.jpg?1713469301", 
      "decimals": 18
    }, 
    {
      "name": "Keyboard Cat  Base ", 
      "abi": "ERC20_ABI", 
      "symbol": "KEYCAT", 
      "priority": 3, 
      "address": "0x9a26f5433671751c3276a065f57e5a02d2817973", 
      "logo": "https://assets.coingecko.com/coins/images/36608/thumb/keyboard_cat.jpeg?1711965348", 
      "decimals": 18
    }, 
    {
      "name": "Tochi Base", 
      "abi": "ERC20_ABI", 
      "symbol": "TOCHI", 
      "priority": 3, 
      "address": "0x295243647f3efe3bea315d548dcc3d25864ba265", 
      "logo": "https://assets.coingecko.com/coins/images/33752/thumb/Screenshot_2023-12-17_at_5.04.39%E2%80%AFpm.png?1702946467", 
      "decimals": 18
    }, 
    {
      "name": "Base God", 
      "abi": "ERC20_ABI", 
      "symbol": "TYBG", 
      "priority": 3, 
      "address": "0x0d97f261b1e88845184f678e2d1e7a98d9fd38de", 
      "logo": "https://assets.coingecko.com/coins/images/34563/thumb/tybg.png?1705400778", 
      "decimals": 18
    }, 
    {
      "name": "Weirdo", 
      "abi": "ERC20_ABI", 
      "symbol": "WEIRDO", 
      "priority": 3, 
      "address": "0x76734b57dfe834f102fb61e1ebf844adf8dd931e", 
      "logo": "https://assets.coingecko.com/coins/images/37847/thumb/New_Project_%2823%29.png?1726539603", 
      "decimals": 8
    }, 
    {
      "name": "Alien Base", 
      "abi": "ERC20_ABI", 
      "symbol": "ALB", 
      "priority": 3, 
      "address": "0x1dd2d631c92b1acdfcdd51a0f7145a50130050c4", 
      "logo": "https://assets.coingecko.com/coins/images/31301/thumb/ALB.png?1720133373", 
      "decimals": 18
    }, 
    {
      "name": "Grand Base", 
      "abi": "ERC20_ABI", 
      "symbol": "GB", 
      "priority": 3, 
      "address": "0x2af864fb54b55900cd58d19c7102d9e4fa8d84a3", 
      "logo": "https://assets.coingecko.com/coins/images/33257/thumb/grandbase.jpeg?1709895415", 
      "decimals": 18
    }, 
    {
      "name": "ROXY FROG", 
      "abi": "ERC20_ABI", 
      "symbol": "ROXY", 
      "priority": 3, 
      "address": "0x10a7a84c91988138f8dbbc82a23b02c8639e2552", 
      "logo": "https://assets.coingecko.com/coins/images/38170/thumb/ROXY.jpg?1716703909", 
      "decimals": 18
    }, 
    {
      "name": "Lucha", 
      "abi": "ERC20_ABI", 
      "symbol": "LUCHA", 
      "priority": 3, 
      "address": "0xf4435cc8b478d54313f04c956882be3d9acf9f6f", 
      "logo": "https://assets.coingecko.com/coins/images/22794/thumb/lucha.png?1696522097", 
      "decimals": 18
    }, 
    {
      "name": "Poncho", 
      "abi": "ERC20_ABI", 
      "symbol": "PONCHO", 
      "priority": 3, 
      "address": "0xc2fe011c3885277c7f0e7ffd45ff90cadc8ecd12", 
      "logo": "https://assets.coingecko.com/coins/images/36160/thumb/ponchologo.PNG?1710744293", 
      "decimals": 18
    }, 
    {
      "name": "Beni", 
      "abi": "ERC20_ABI", 
      "symbol": "BENI", 
      "priority": 3, 
      "address": "0xde7a416ac821c77478340eebaa21b68297025ef3", 
      "logo": "https://assets.coingecko.com/coins/images/36691/thumb/Logo_Image_Beni_Uodate.png?1732385556", 
      "decimals": 18
    }, 
    {
      "name": "Based Boshi", 
      "abi": "ERC20_ABI", 
      "symbol": "BOSHI", 
      "priority": 3, 
      "address": "0x7fdd7419428955dbf36d4176af5a8f09ad29d1f3", 
      "logo": "https://assets.coingecko.com/coins/images/39403/thumb/gxlfIx0p_400x400.jpg?1722052095", 
      "decimals": 18
    }, 
    {
      "name": "EMAIL Token", 
      "abi": "ERC20_ABI", 
      "symbol": "EMT", 
      "priority": 3, 
      "address": "0xe2c86869216ac578bd62a4b8313770d9ee359a05", 
      "logo": "https://assets.coingecko.com/coins/images/38631/thumb/EMT_square_LG%282%29.png?1718171885", 
      "decimals": 18
    }, 
    {
      "name": "Buttman", 
      "abi": "ERC20_ABI", 
      "symbol": "BUTT", 
      "priority": 3, 
      "address": "0xd11a584de5fa50a4ee560c48ab44dbb31823d9bc", 
      "logo": "https://assets.coingecko.com/coins/images/36326/thumb/kqDFdKtJ_400x400.jpeg?1711097504", 
      "decimals": 18
    }, 
    {
      "name": "RIKU", 
      "abi": "ERC20_ABI", 
      "symbol": "RIKU", 
      "priority": 3, 
      "address": "0xd1412d909f67b8db7505ddfcf26cf2303f4b1bb4", 
      "logo": "https://assets.coingecko.com/coins/images/35924/thumb/riku.jpeg?1710224102", 
      "decimals": 18
    }, 
    {
      "name": "Block Agent", 
      "abi": "ERC20_ABI", 
      "symbol": "BONUS", 
      "priority": 3, 
      "address": "0xfe7c0af60e52ddf05c0f5f89cbf89758a45f6928", 
      "logo": "https://assets.coingecko.com/coins/images/36364/thumb/200x200.png?1740164836", 
      "decimals": 18
    }, 
    {
      "name": "AEROBUD", 
      "abi": "ERC20_ABI", 
      "symbol": "AEROBUD", 
      "priority": 3, 
      "address": "0xfad8cb754230dbfd249db0e8eccb5142dd675a0d", 
      "logo": "https://assets.coingecko.com/coins/images/38210/thumb/Logo_Coingecko.png?1716798924", 
      "decimals": 18
    }, 
    {
      "name": "ALF", 
      "abi": "ERC20_ABI", 
      "symbol": "ALF", 
      "priority": 3, 
      "address": "0x26f1bb40ea88b46ceb21557dc0ffac7b7c0ad40f", 
      "logo": "https://assets.coingecko.com/coins/images/38867/thumb/alf200.png?1719283344", 
      "decimals": 18
    }, 
    {
      "name": "Carlo", 
      "abi": "ERC20_ABI", 
      "symbol": "CARLO", 
      "priority": 3, 
      "address": "0x38d513ec43dda20f323f26c7bef74c5cf80b6477", 
      "logo": "https://assets.coingecko.com/coins/images/37553/thumb/CARLO_200x200.png?1714752141", 
      "decimals": 18
    }, 
    {
      "name": "Dubbz", 
      "abi": "ERC20_ABI", 
      "symbol": "DUBBZ", 
      "priority": 3, 
      "address": "0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17", 
      "logo": "https://assets.coingecko.com/coins/images/28665/thumb/D8EACA06-18ED-4999-8B3A-6339F9E021CE.jpeg?1696527650", 
      "decimals": 18
    }, 
    {
      "name": "Kibble", 
      "abi": "ERC20_ABI", 
      "symbol": "KIBBLE", 
      "priority": 3, 
      "address": "0x64cc19a52f4d631ef5be07947caba14ae00c52eb", 
      "logo": "https://assets.coingecko.com/coins/images/36444/thumb/logo-32x32.png?1711441503", 
      "decimals": 18
    }, 
    {
      "name": "GrabPenny", 
      "abi": "ERC20_ABI", 
      "symbol": "GPX", 
      "priority": 3, 
      "address": "0x19b50c63d3d7f7a22308cb0fc8d41b66ff9c318a", 
      "logo": "https://assets.coingecko.com/coins/images/36674/thumb/Group_10469.png?1712062452", 
      "decimals": 18
    }, 
    {
      "name": "Cat On Catnip", 
      "abi": "ERC20_ABI", 
      "symbol": "NIPPY", 
      "priority": 3, 
      "address": "0x7a31512fb17be839b24276c211e941932c9d20e1", 
      "logo": "https://assets.coingecko.com/coins/images/37516/thumb/Catnip8_1.png?1714631259", 
      "decimals": 18
    }, 
    {
      "name": "LOUDER", 
      "abi": "ERC20_ABI", 
      "symbol": "LOUDER", 
      "priority": 3, 
      "address": "0x120edc8e391ba4c94cb98bb65d8856ae6ec1525f", 
      "logo": "https://assets.coingecko.com/coins/images/39495/thumb/louder_icon_200x200.png?1722539190", 
      "decimals": 18
    }, 
    {
      "name": "TN100x", 
      "abi": "ERC20_ABI", 
      "symbol": "TN100X", 
      "priority": 3, 
      "address": "0x5b5dee44552546ecea05edea01dcd7be7aa6144a", 
      "logo": "https://assets.coingecko.com/coins/images/35729/thumb/patch-transparent-blue.png?1729878068", 
      "decimals": 18
    }, 
    {
      "name": "Tickle", 
      "abi": "ERC20_ABI", 
      "symbol": "TICKLE", 
      "priority": 3, 
      "address": "0xa1ebb0922a7f43df50b34ad9bf2f602f88aab869", 
      "logo": "https://assets.coingecko.com/coins/images/37871/thumb/Tickle-logo-blue-happy-small.jpg?1715828846", 
      "decimals": 18
    }, 
    {
      "name": "Bonk On Base", 
      "abi": "ERC20_ABI", 
      "symbol": "BONK", 
      "priority": 3, 
      "address": "0x72499bddb67f4ca150e1f522ca82c87bc9fb18c8", 
      "logo": "https://assets.coingecko.com/coins/images/37123/thumb/200x200.png?1713367524", 
      "decimals": 18
    }, 
    {
      "name": "BOGE", 
      "abi": "ERC20_ABI", 
      "symbol": "BOGE", 
      "priority": 3, 
      "address": "0xef553b6914dbd17567393f7e55fbd773fff7d0cb", 
      "logo": "https://assets.coingecko.com/coins/images/35545/thumb/boge.jpeg?1709094269", 
      "decimals": 18
    }, 
    {
      "name": "Friend tech", 
      "abi": "ERC20_ABI", 
      "symbol": "FRIEND", 
      "priority": 3, 
      "address": "0x0bd4887f7d41b35cd75dff9ffee2856106f86670", 
      "logo": "https://assets.coingecko.com/coins/images/37475/thumb/friend.jpeg?1714464901", 
      "decimals": 18
    }, 
    {
      "name": "Basenji", 
      "abi": "ERC20_ABI", 
      "symbol": "BENJI", 
      "priority": 3, 
      "address": "0xbc45647ea894030a4e9801ec03479739fa2485f0", 
      "logo": "https://assets.coingecko.com/coins/images/36416/thumb/ben200x200.jpg?1711420807", 
      "decimals": 18
    }, 
    {
      "name": "IMGN Labs", 
      "abi": "ERC20_ABI", 
      "symbol": "IMGN", 
      "priority": 3, 
      "address": "0x9bba915f036158582c20b51113b925f243a1a1a1", 
      "logo": "https://assets.coingecko.com/coins/images/28666/thumb/imgnai-200x200.png?1698476572", 
      "decimals": 18
    }, 
    {
      "name": "Giga Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "GCAT", 
      "priority": 3, 
      "address": "0xe4fc328ae212232efc5f5dd0e0b1537cd055d715", 
      "logo": "https://assets.coingecko.com/coins/images/36729/thumb/NewPictureGcat.png?1717626080", 
      "decimals": 9
    }, 
    {
      "name": "SoMon", 
      "abi": "ERC20_ABI", 
      "symbol": "OWO", 
      "priority": 3, 
      "address": "0x5d559ea7bb2dae4b694a079cb8328a2145fd32f6", 
      "logo": "https://assets.coingecko.com/coins/images/39575/thumb/0x5d559ea7bb2dae4b694a079cb8328a2145fd32f6.png?1723003348", 
      "decimals": 18
    }, 
    {
      "name": "mfercoin", 
      "abi": "ERC20_ABI", 
      "symbol": "MFER", 
      "priority": 3, 
      "address": "0xe3086852a4b125803c815a158249ae468a3254ca", 
      "logo": "https://assets.coingecko.com/coins/images/36550/thumb/mfercoin-logo.png?1711876821", 
      "decimals": 18
    }, 
    {
      "name": "Young Peezy AKA Pepe", 
      "abi": "ERC20_ABI", 
      "symbol": "PEEZY", 
      "priority": 3, 
      "address": "0x1b6a569dd61edce3c383f6d565e2f79ec3a12980", 
      "logo": "https://assets.coingecko.com/coins/images/36649/thumb/PFP_CG_200x200.jpeg?1719953176", 
      "decimals": 18
    }, 
    {
      "name": "IMO", 
      "abi": "ERC20_ABI", 
      "symbol": "IMO", 
      "priority": 3, 
      "address": "0x5a7a2bf9ffae199f088b25837dcd7e115cf8e1bb", 
      "logo": "https://assets.coingecko.com/coins/images/14831/thumb/IMO_logo_rond_200.png?1729798616", 
      "decimals": 18
    }, 
    {
      "name": "SQD", 
      "abi": "ERC20_ABI", 
      "symbol": "SQD", 
      "priority": 3, 
      "address": "0xd4554bea546efa83c1e6b389ecac40ea999b3e78", 
      "logo": "https://assets.coingecko.com/coins/images/37869/thumb/New_Logo_SQD_Icon.png?1720048443", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ARKB", 
      "abi": "ERC20_ABI", 
      "symbol": "ARKBD", 
      "priority": 3, 
      "address": "0x4b959bb4c00d25e52a87cb1865401dd97cb5631d", 
      "logo": "https://assets.coingecko.com/coins/images/53944/thumb/d-token-200.png?1737787573", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ETHE", 
      "abi": "ERC20_ABI", 
      "symbol": "ETHED", 
      "priority": 3, 
      "address": "0x5aa9bd9364cc3644bb7f35f092283dae7fd17e11", 
      "logo": "https://assets.coingecko.com/coins/images/53949/thumb/d-token-200.png?1737788495", 
      "decimals": 18
    }, 
    {
      "name": "Dinari IBIT", 
      "abi": "ERC20_ABI", 
      "symbol": "IBITD", 
      "priority": 3, 
      "address": "0x24fdd77381d3dd36a9bd7029bcdac350a0342de3", 
      "logo": "https://assets.coingecko.com/coins/images/53950/thumb/d-token-200.png?1737788536", 
      "decimals": 18
    }, 
    {
      "name": "Dinari JNJ", 
      "abi": "ERC20_ABI", 
      "symbol": "JNJD", 
      "priority": 3, 
      "address": "0xab754c3998ba88e789329f250d90ea35fc87aea6", 
      "logo": "https://assets.coingecko.com/coins/images/53951/thumb/d-token-200.png?1737788564", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BLK", 
      "abi": "ERC20_ABI", 
      "symbol": "BLKD", 
      "priority": 3, 
      "address": "0x45afb331111126f5bf8d37c7816c540c1ec6f544", 
      "logo": "https://assets.coingecko.com/coins/images/53952/thumb/d-token-200.png?1737788600", 
      "decimals": 18
    }, 
    {
      "name": "Dinari MCD", 
      "abi": "ERC20_ABI", 
      "symbol": "MCDD", 
      "priority": 3, 
      "address": "0x0150958b2b183a8e63264b8a6d82b4f747df3f62", 
      "logo": "https://assets.coingecko.com/coins/images/53954/thumb/d-token-200.png?1737789312", 
      "decimals": 18
    }, 
    {
      "name": "Dinari QQQ", 
      "abi": "ERC20_ABI", 
      "symbol": "QQQD", 
      "priority": 3, 
      "address": "0x0d404bc1a63f7fb5c0500772dc3c3d5444cafa3a", 
      "logo": "https://assets.coingecko.com/coins/images/53957/thumb/d-token-200.png?1737790123", 
      "decimals": 18
    }, 
    {
      "name": "Dinari TQQQ", 
      "abi": "ERC20_ABI", 
      "symbol": "TQQQD", 
      "priority": 3, 
      "address": "0x525dcb13b0caf29f30f93305a5cbd10314815408", 
      "logo": "https://assets.coingecko.com/coins/images/53958/thumb/d-token-200.png?1737790158", 
      "decimals": 18
    }, 
    {
      "name": "YieldFi yToken", 
      "abi": "ERC20_ABI", 
      "symbol": "YUSD", 
      "priority": 3, 
      "address": "0x895e15020c3f52ddd4d8e9514eb83c39f53b1579", 
      "logo": "https://assets.coingecko.com/coins/images/53607/thumb/yUSD.png?1739862886", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ARKK", 
      "abi": "ERC20_ABI", 
      "symbol": "ARKKD", 
      "priority": 3, 
      "address": "0x6309645495f8f2bbeab5d5e18423b38fcd191dfe", 
      "logo": "https://assets.coingecko.com/coins/images/53945/thumb/d-token-200.png?1737787680", 
      "decimals": 18
    }, 
    {
      "name": "BEPE", 
      "abi": "ERC20_ABI", 
      "symbol": "BEPE", 
      "priority": 3, 
      "address": "0xbb5cbdae23c5368557cc9a32337863eecf03cf9f", 
      "logo": "https://assets.coingecko.com/coins/images/53980/thumb/Cabeza_Bram_Pepe__6__-_Copysmall-removebg-preview.png?1737873331", 
      "decimals": 18
    }, 
    {
      "name": "Dinari FBTC", 
      "abi": "ERC20_ABI", 
      "symbol": "FBTCD", 
      "priority": 3, 
      "address": "0xca31298489e32041016ed95de4beea889335c5a5", 
      "logo": "https://assets.coingecko.com/coins/images/53866/thumb/d-token-200.png?1737615424", 
      "decimals": 18
    }, 
    {
      "name": "Parifi", 
      "abi": "ERC20_ABI", 
      "symbol": "PRF", 
      "priority": 3, 
      "address": "0x431c248257c1d3897fea3b99eb8e2e4de008cbdf", 
      "logo": "https://assets.coingecko.com/coins/images/34710/thumb/parifi200x200.png?1705894380", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ARKX", 
      "abi": "ERC20_ABI", 
      "symbol": "ARKXD", 
      "priority": 3, 
      "address": "0x32224be543fb8f338a9a6c337d84478e256ee219", 
      "logo": "https://assets.coingecko.com/coins/images/54037/thumb/d-token-200.png?1738075900", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BA", 
      "abi": "ERC20_ABI", 
      "symbol": "BAD", 
      "priority": 3, 
      "address": "0x8a2a4899316f302a05006ee6d2998afa26f96253", 
      "logo": "https://assets.coingecko.com/coins/images/54038/thumb/d-token-200.png?1738075918", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BRRR", 
      "abi": "ERC20_ABI", 
      "symbol": "BRRRD", 
      "priority": 3, 
      "address": "0xc3c1bb150e48ca764fa9428339b63b21376fcafa", 
      "logo": "https://assets.coingecko.com/coins/images/54039/thumb/d-token-200.png?1738075951", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BTCO", 
      "abi": "ERC20_ABI", 
      "symbol": "BTCOD", 
      "priority": 3, 
      "address": "0x69bd04ab9290d2919f228b87f9dccf728e2675cd", 
      "logo": "https://assets.coingecko.com/coins/images/54048/thumb/d-token-200.png?1738103322", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BAC", 
      "abi": "ERC20_ABI", 
      "symbol": "BACD", 
      "priority": 3, 
      "address": "0x408e16d4e07812a963189dc15fa61806eb8a4e9d", 
      "logo": "https://assets.coingecko.com/coins/images/54049/thumb/d-token-200.png?1738103338", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BTCW", 
      "abi": "ERC20_ABI", 
      "symbol": "BTCWD", 
      "priority": 3, 
      "address": "0xe1338b131647a4d6123b6af912f295954067a766", 
      "logo": "https://assets.coingecko.com/coins/images/54050/thumb/d-token-200.png?1738103595", 
      "decimals": 18
    }, 
    {
      "name": "Dinari CAT", 
      "abi": "ERC20_ABI", 
      "symbol": "CATD", 
      "priority": 3, 
      "address": "0x903ce8c6196a78e5b6df62897a864951e71b6b34", 
      "logo": "https://assets.coingecko.com/coins/images/54051/thumb/d-token-200.png?1738103623", 
      "decimals": 18
    }, 
    {
      "name": "Dinari DEFI", 
      "abi": "ERC20_ABI", 
      "symbol": "DEFID", 
      "priority": 3, 
      "address": "0xac21cd6fe43240d90741d25858d0ff0940b11cc7", 
      "logo": "https://assets.coingecko.com/coins/images/54052/thumb/d-token-200.png?1738103629", 
      "decimals": 18
    }, 
    {
      "name": "Dinari HODL", 
      "abi": "ERC20_ABI", 
      "symbol": "HODLD", 
      "priority": 3, 
      "address": "0x842d4a6d10e41eaae03b4df87e575be53b296fc6", 
      "logo": "https://assets.coingecko.com/coins/images/54053/thumb/d-token-200.png?1738103664", 
      "decimals": 18
    }, 
    {
      "name": "Dinari JPM", 
      "abi": "ERC20_ABI", 
      "symbol": "JPMD", 
      "priority": 3, 
      "address": "0x687838649383f180024435b96fe014b351854a2d", 
      "logo": "https://assets.coingecko.com/coins/images/54184/thumb/d-token-200.png?1738682276", 
      "decimals": 18
    }, 
    {
      "name": "Dinari AZN", 
      "abi": "ERC20_ABI", 
      "symbol": "AZND", 
      "priority": 3, 
      "address": "0xa9c380050b07f8c2bb38dc57bcdbe267cc794fe8", 
      "logo": "https://assets.coingecko.com/coins/images/53946/thumb/d-token-200.png?1737787723", 
      "decimals": 18
    }, 
    {
      "name": "Dinari HOOD", 
      "abi": "ERC20_ABI", 
      "symbol": "HOODD", 
      "priority": 3, 
      "address": "0x0c9b4fbff1971b5b1d7b50b1f3483cc5007c4621", 
      "logo": "https://assets.coingecko.com/coins/images/54054/thumb/d-token-200.png?1738103671", 
      "decimals": 18
    }, 
    {
      "name": "Dinari HUT", 
      "abi": "ERC20_ABI", 
      "symbol": "HUTD", 
      "priority": 3, 
      "address": "0x0400373ea12d84f578b8ab2c21556645333cc312", 
      "logo": "https://assets.coingecko.com/coins/images/54079/thumb/d-token-200.png?1738175759", 
      "decimals": 18
    }, 
    {
      "name": "Dinari IAU", 
      "abi": "ERC20_ABI", 
      "symbol": "IAUD", 
      "priority": 3, 
      "address": "0xe6cf0d54079bfb0e441c1ef37e69a234e9e4e4c0", 
      "logo": "https://assets.coingecko.com/coins/images/54080/thumb/d-token-200.png?1738175780", 
      "decimals": 18
    }, 
    {
      "name": "Dinari V", 
      "abi": "ERC20_ABI", 
      "symbol": "VD", 
      "priority": 3, 
      "address": "0x6743d7d8de84021b4fec049a1f1278be9cd95b6e", 
      "logo": "https://assets.coingecko.com/coins/images/54081/thumb/d-token-200.png?1738176162", 
      "decimals": 18
    }, 
    {
      "name": "Dinari VWO", 
      "abi": "ERC20_ABI", 
      "symbol": "VWOD", 
      "priority": 3, 
      "address": "0x51931a7acb6b08323fc0cdb2ff68309cd0fd44b7", 
      "logo": "https://assets.coingecko.com/coins/images/54082/thumb/d-token-200.png?1738176178", 
      "decimals": 18
    }, 
    {
      "name": "believe in something", 
      "abi": "ERC20_ABI", 
      "symbol": "DTF", 
      "priority": 3, 
      "address": "0x84054a6b72dd5c58da8106e410e62658083a80e4", 
      "logo": "https://assets.coingecko.com/coins/images/51561/thumb/Chad_Franklin_200x200.jpeg?1735373619", 
      "decimals": 18
    }, 
    {
      "name": "Minds", 
      "abi": "ERC20_ABI", 
      "symbol": "MINDS", 
      "priority": 3, 
      "address": "0x686015ebf044a1b8a4be750346be00293a996071", 
      "logo": "https://assets.coingecko.com/coins/images/11517/thumb/Minds.png?1696511420", 
      "decimals": 18
    }, 
    {
      "name": "Kryptonite", 
      "abi": "ERC20_ABI", 
      "symbol": "SEILOR", 
      "priority": 3, 
      "address": "0x9bde70bad05b7d84dac03024dae15aace8c9cca2", 
      "logo": "https://assets.coingecko.com/coins/images/31252/thumb/Kryptonite_PFP-03.png?1696530076", 
      "decimals": 18
    }, 
    {
      "name": "Satori Network", 
      "abi": "ERC20_ABI", 
      "symbol": "SATORI", 
      "priority": 3, 
      "address": "0xc1c37473079884cbfcf4905a97de361fed414b2b", 
      "logo": "https://assets.coingecko.com/coins/images/51759/thumb/satori-light-outlined-256x256_1_.png?1737993320", 
      "decimals": 18
    }, 
    {
      "name": "Mode", 
      "abi": "ERC20_ABI", 
      "symbol": "MODE", 
      "priority": 3, 
      "address": "0x084382d1cc4f4dfd1769b1cc1ac2a9b1f8365e90", 
      "logo": "https://assets.coingecko.com/coins/images/34979/thumb/MODE.jpg?1714561871", 
      "decimals": 18
    }, 
    {
      "name": "Venus", 
      "abi": "ERC20_ABI", 
      "symbol": "XVS", 
      "priority": 3, 
      "address": "0xebb7873213c8d1d9913d8ea39aa12d74cb107995", 
      "logo": "https://assets.coingecko.com/coins/images/12677/thumb/XVS_Token.jpg?1727454303", 
      "decimals": 18
    }, 
    {
      "name": "Empyreal", 
      "abi": "ERC20_ABI", 
      "symbol": "EMP", 
      "priority": 3, 
      "address": "0x39d5313c3750140e5042887413ba8aa6145a9bd2", 
      "logo": "https://assets.coingecko.com/coins/images/31374/thumb/logomainblacktransparent.png?1719953450", 
      "decimals": 18
    }, 
    {
      "name": "Dinari KO", 
      "abi": "ERC20_ABI", 
      "symbol": "KOD", 
      "priority": 3, 
      "address": "0x000804047791c8e0fbd04f1a9f4567114130b9a7", 
      "logo": "https://assets.coingecko.com/coins/images/54185/thumb/d-token-200.png?1738682465", 
      "decimals": 18
    }, 
    {
      "name": "Dinari PHO", 
      "abi": "ERC20_ABI", 
      "symbol": "PHOD", 
      "priority": 3, 
      "address": "0xcc69d36075d563d010d829db7a9caa50b3487bb0", 
      "logo": "https://assets.coingecko.com/coins/images/54187/thumb/d-token-200.png?1738682583", 
      "decimals": 18
    }, 
    {
      "name": "Dinari YUM", 
      "abi": "ERC20_ABI", 
      "symbol": "YUMD", 
      "priority": 3, 
      "address": "0x48a0ea70c2c7d025cc95672b9ebe6ad026129b44", 
      "logo": "https://assets.coingecko.com/coins/images/54188/thumb/d-token-200.png?1738682602", 
      "decimals": 18
    }, 
    {
      "name": "Dinari WALRF", 
      "abi": "ERC20_ABI", 
      "symbol": "WALRFD", 
      "priority": 3, 
      "address": "0xacacc8241a57a23106af94f2fffda000384cb4d2", 
      "logo": "https://assets.coingecko.com/coins/images/54222/thumb/d-token-200.png?1738860922", 
      "decimals": 18
    }, 
    {
      "name": "Aave", 
      "abi": "ERC20_ABI", 
      "symbol": "AAVE", 
      "priority": 3, 
      "address": "0x63706e401c06ac8513145b7687a14804d17f814b", 
      "logo": "https://assets.coingecko.com/coins/images/12645/thumb/aave-token-round.png?1720472354", 
      "decimals": 18
    }, 
    {
      "name": "BonzAI DePIN", 
      "abi": "ERC20_ABI", 
      "symbol": "BONZAI", 
      "priority": 3, 
      "address": "0xc4d137def384ee0f8857887f5950669ba04984ec", 
      "logo": "https://assets.coingecko.com/coins/images/36032/thumb/bonzai.jpeg?1710394145", 
      "decimals": 18
    }, 
    {
      "name": "DexFi Governance", 
      "abi": "ERC20_ABI", 
      "symbol": "GDEX", 
      "priority": 3, 
      "address": "0x53cb59d32a8d08fc6d3f81454f150946a028a44d", 
      "logo": "https://assets.coingecko.com/coins/images/30671/thumb/gDEX-Icon.png?1738702041", 
      "decimals": 18
    }, 
    {
      "name": "Perion", 
      "abi": "ERC20_ABI", 
      "symbol": "PERC", 
      "priority": 3, 
      "address": "0xf598797d9c160aef2a14712c20b7731cbe5861da", 
      "logo": "https://assets.coingecko.com/coins/images/23302/thumb/PERC.png?1696522520", 
      "decimals": 18
    }, 
    {
      "name": "Kendu Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "KENDU", 
      "priority": 3, 
      "address": "0xef73611f98da6e57e0776317957af61b59e09ed7", 
      "logo": "https://assets.coingecko.com/coins/images/35722/thumb/photo_2024-03-05_01-23-59_%281%29.jpg?1709632285", 
      "decimals": 18
    }, 
    {
      "name": "Flayer", 
      "abi": "ERC20_ABI", 
      "symbol": "FLAY", 
      "priority": 3, 
      "address": "0xf1a7000000950c7ad8aff13118bb7ab561a448ee", 
      "logo": "https://assets.coingecko.com/coins/images/50377/thumb/flay.jpg?1727401416", 
      "decimals": 18
    }, 
    {
      "name": "JAM", 
      "abi": "ERC20_ABI", 
      "symbol": "JAM", 
      "priority": 3, 
      "address": "0xf8252c05ec4cb2fdf1e0398bae049d454ddba3ad", 
      "logo": "https://assets.coingecko.com/coins/images/53706/thumb/2_%281%29_%281%29%281%29.png?1737086677", 
      "decimals": 18
    }, 
    {
      "name": "Autonolas", 
      "abi": "ERC20_ABI", 
      "symbol": "OLAS", 
      "priority": 3, 
      "address": "0x54330d28ca3357f294334bdc454a032e7f353416", 
      "logo": "https://assets.coingecko.com/coins/images/31099/thumb/OLAS-token.png?1696529930", 
      "decimals": 18
    }, 
    {
      "name": "Gyroscope", 
      "abi": "ERC20_ABI", 
      "symbol": "GYFI", 
      "priority": 3, 
      "address": "0xc63529297de076eb15fcbe873ae9136e446cfbb9", 
      "logo": "https://assets.coingecko.com/coins/images/23584/thumb/Gov_stellar_resized.png?1739476497", 
      "decimals": 18
    }, 
    {
      "name": "Dinari PG", 
      "abi": "ERC20_ABI", 
      "symbol": "PGD", 
      "priority": 3, 
      "address": "0x437b5acc7d6f0eacb97431e649c61e98badb3f92", 
      "logo": "https://assets.coingecko.com/coins/images/54269/thumb/d-token-200.png?1738994720", 
      "decimals": 18
    }, 
    {
      "name": "Dinari PALL", 
      "abi": "ERC20_ABI", 
      "symbol": "PALLD", 
      "priority": 3, 
      "address": "0x314936e9cdc0df06941d2e84949a58e0f5f82e6a", 
      "logo": "https://assets.coingecko.com/coins/images/54270/thumb/d-token-200.png?1738994765", 
      "decimals": 18
    }, 
    {
      "name": "Dinari CCL", 
      "abi": "ERC20_ABI", 
      "symbol": "CCLD", 
      "priority": 3, 
      "address": "0xd5e8dc8ba0c459a97a79d8ee2b4fec186e4af078", 
      "logo": "https://assets.coingecko.com/coins/images/54275/thumb/d-token-200.png?1738998063", 
      "decimals": 18
    }, 
    {
      "name": "Dinari F", 
      "abi": "ERC20_ABI", 
      "symbol": "FD", 
      "priority": 3, 
      "address": "0xb9c229a7aac1c67c7468baf37ef056a91d7df118", 
      "logo": "https://assets.coingecko.com/coins/images/54276/thumb/d-token-200.png?1738998264", 
      "decimals": 18
    }, 
    {
      "name": "Dinari RKLB", 
      "abi": "ERC20_ABI", 
      "symbol": "RKLBD", 
      "priority": 3, 
      "address": "0xa26a3903cbba4e6c2c757d7601fbc569efc479ef", 
      "logo": "https://assets.coingecko.com/coins/images/54280/thumb/d-token-200.png?1738998854", 
      "decimals": 18
    }, 
    {
      "name": "KRYLL", 
      "abi": "ERC20_ABI", 
      "symbol": "KRL", 
      "priority": 3, 
      "address": "0xdae49c25fad3a62a8e8bfb6da12c46be611f9f7a", 
      "logo": "https://assets.coingecko.com/coins/images/2807/thumb/krl-ticker_%282%29.png?1716353733", 
      "decimals": 18
    }, 
    {
      "name": "Dinari XOM", 
      "abi": "ERC20_ABI", 
      "symbol": "XOMD", 
      "priority": 3, 
      "address": "0x78bb8ff6baa486c31ce0ef1a157798f7a606565c", 
      "logo": "https://assets.coingecko.com/coins/images/54189/thumb/d-token-200.png?1738682617", 
      "decimals": 18
    }, 
    {
      "name": "Dinari COST", 
      "abi": "ERC20_ABI", 
      "symbol": "COSTD", 
      "priority": 3, 
      "address": "0x70e97cac0d4eb845872cd41ae848e47d070ef45c", 
      "logo": "https://assets.coingecko.com/coins/images/54226/thumb/d-token-200.png?1738861053", 
      "decimals": 18
    }, 
    {
      "name": "Dinari GLD", 
      "abi": "ERC20_ABI", 
      "symbol": "GLDD", 
      "priority": 3, 
      "address": "0xf3ec90ea681561ce77120976bcfe985f83d182d8", 
      "logo": "https://assets.coingecko.com/coins/images/54228/thumb/d-token-200.png?1738861086", 
      "decimals": 18
    }, 
    {
      "name": "Dinari CSCO", 
      "abi": "ERC20_ABI", 
      "symbol": "CSCOD", 
      "priority": 3, 
      "address": "0x341c9b4e5566a2ae22a337c84e3c006064731925", 
      "logo": "https://assets.coingecko.com/coins/images/54277/thumb/d-token-200.png?1738998301", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ITA", 
      "abi": "ERC20_ABI", 
      "symbol": "ITAD", 
      "priority": 3, 
      "address": "0x116b3ad9ba8f4e6fb83a5bcad8ba2e97114f9568", 
      "logo": "https://assets.coingecko.com/coins/images/54278/thumb/d-token-200.png?1738998357", 
      "decimals": 18
    }, 
    {
      "name": "HealthSci AI", 
      "abi": "ERC20_ABI", 
      "symbol": "HSAI", 
      "priority": 3, 
      "address": "0x11a2021368f518fa390d20308076b25c57292e83", 
      "logo": "https://assets.coingecko.com/coins/images/51384/thumb/logo-200.jpg?1730967315", 
      "decimals": 18
    }, 
    {
      "name": "Dinari EZBC", 
      "abi": "ERC20_ABI", 
      "symbol": "EZBCD", 
      "priority": 3, 
      "address": "0xd45a01a729a0d4ccbe1523e58eb4ff8bdc3607d7", 
      "logo": "https://assets.coingecko.com/coins/images/54267/thumb/d-token-200.png?1738994496", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ERO", 
      "abi": "ERC20_ABI", 
      "symbol": "EROD", 
      "priority": 3, 
      "address": "0xba921e840fb60adb0f92b2a977427fe8e5dd208c", 
      "logo": "https://assets.coingecko.com/coins/images/54230/thumb/d-token-200.png?1738861119", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SIVR", 
      "abi": "ERC20_ABI", 
      "symbol": "SIVRD", 
      "priority": 3, 
      "address": "0x2b98ba07619c3ee14854983a83fe1f0aecff19c8", 
      "logo": "https://assets.coingecko.com/coins/images/54224/thumb/d-token-200.png?1738861015", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SONY", 
      "abi": "ERC20_ABI", 
      "symbol": "SONYD", 
      "priority": 3, 
      "address": "0x62cc07128dec1451ca55d20465cca80dbc24ca6d", 
      "logo": "https://assets.coingecko.com/coins/images/54225/thumb/d-token-200.png?1738861032", 
      "decimals": 18
    }, 
    {
      "name": "Dinari DAL", 
      "abi": "ERC20_ABI", 
      "symbol": "DALD", 
      "priority": 3, 
      "address": "0xd021ad9bc28dcbcb04801638937351f6b9045f33", 
      "logo": "https://assets.coingecko.com/coins/images/54227/thumb/d-token-200.png?1738861070", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SBUX", 
      "abi": "ERC20_ABI", 
      "symbol": "SBUXD", 
      "priority": 3, 
      "address": "0x9b42e4afcc2046070fa00ff8213d59eef6e4264e", 
      "logo": "https://assets.coingecko.com/coins/images/54364/thumb/d-token-200.png?1739401368", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SPSK", 
      "abi": "ERC20_ABI", 
      "symbol": "SPSKD", 
      "priority": 3, 
      "address": "0x9fd7bc3de3c1dd6041efbcbac43250da7b718a43", 
      "logo": "https://assets.coingecko.com/coins/images/54391/thumb/d-token-200.png?1739485728", 
      "decimals": 18
    }, 
    {
      "name": "Nina", 
      "abi": "ERC20_ABI", 
      "symbol": "NINA", 
      "priority": 3, 
      "address": "0xe94db607eba8f76a377d9bcc327c9856ed90fbde", 
      "logo": "https://assets.coingecko.com/coins/images/54353/thumb/1000161703.png?1739382520", 
      "decimals": 9
    }, 
    {
      "name": "Cortex", 
      "abi": "ERC20_ABI", 
      "symbol": "CX", 
      "priority": 3, 
      "address": "0x000000000000012def132e61759048be5b5c6033", 
      "logo": "https://assets.coingecko.com/coins/images/53285/thumb/CX_Round.png?1735994730", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BOXX", 
      "abi": "ERC20_ABI", 
      "symbol": "BOXXD", 
      "priority": 3, 
      "address": "0xa70cc6f267e02a6e135fa2589432e6734a613eb3", 
      "logo": "https://assets.coingecko.com/coins/images/54359/thumb/d-token-200.png?1739401220", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SPTE", 
      "abi": "ERC20_ABI", 
      "symbol": "SPTED", 
      "priority": 3, 
      "address": "0xb0169ad580aa888467bbac4a4b650812dee74939", 
      "logo": "https://assets.coingecko.com/coins/images/54392/thumb/d-token-200.png?1739485749", 
      "decimals": 18
    }, 
    {
      "name": "Backed CSPX Core S P 500", 
      "abi": "ERC20_ABI", 
      "symbol": "BCSPX", 
      "priority": 3, 
      "address": "0xc3ce78b037dda1b966d31ec7979d3f3a38571a8e", 
      "logo": "https://assets.coingecko.com/coins/images/31891/thumb/bCSPX_200p.png?1740041074", 
      "decimals": 18
    }, 
    {
      "name": "GHO", 
      "abi": "ERC20_ABI", 
      "symbol": "GHO", 
      "priority": 3, 
      "address": "0x6bb7a212910682dcfdbd5bcbb3e28fb4e8da10ee", 
      "logo": "https://assets.coingecko.com/coins/images/30663/thumb/gho-token-logo.png?1720517092", 
      "decimals": 18
    }, 
    {
      "name": "Dinari CVX", 
      "abi": "ERC20_ABI", 
      "symbol": "CVXD", 
      "priority": 3, 
      "address": "0x25aa7b1ecf5d3fcd1b3b9f2445a4fa5597ffb189", 
      "logo": "https://assets.coingecko.com/coins/images/54360/thumb/d-token-200.png?1739401251", 
      "decimals": 18
    }, 
    {
      "name": "Dinari EEM", 
      "abi": "ERC20_ABI", 
      "symbol": "EEMD", 
      "priority": 3, 
      "address": "0x0709f6caceefd70b867ed3ea278b911238eb7f6f", 
      "logo": "https://assets.coingecko.com/coins/images/54361/thumb/d-token-200.png?1739401272", 
      "decimals": 18
    }, 
    {
      "name": "Dinari HYMB", 
      "abi": "ERC20_ABI", 
      "symbol": "HYMBD", 
      "priority": 3, 
      "address": "0x7d3b1a25d7ad1d8c5bc79a93cc03fb1900b9bc6f", 
      "logo": "https://assets.coingecko.com/coins/images/54362/thumb/d-token-200.png?1739401319", 
      "decimals": 18
    }, 
    {
      "name": "Dinari MELI", 
      "abi": "ERC20_ABI", 
      "symbol": "MELID", 
      "priority": 3, 
      "address": "0xcff62955b5fcd043ebc177d02b6723017a886076", 
      "logo": "https://assets.coingecko.com/coins/images/54363/thumb/d-token-200.png?1739401339", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SNOW", 
      "abi": "ERC20_ABI", 
      "symbol": "SNOWD", 
      "priority": 3, 
      "address": "0xb0e5552292b277f8a9b36326971553545bb55be5", 
      "logo": "https://assets.coingecko.com/coins/images/54365/thumb/d-token-200.png?1739401375", 
      "decimals": 18
    }, 
    {
      "name": "Dinari USHY", 
      "abi": "ERC20_ABI", 
      "symbol": "USHYD", 
      "priority": 3, 
      "address": "0xd194fdcbc9b98d829f7a35fde25feef8f8e41ef1", 
      "logo": "https://assets.coingecko.com/coins/images/54367/thumb/d-token-200.png?1739401403", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SOXL", 
      "abi": "ERC20_ABI", 
      "symbol": "SOXLD", 
      "priority": 3, 
      "address": "0xb9b034467a7f50b567b74f60b82e39bfd78aca5a", 
      "logo": "https://assets.coingecko.com/coins/images/54366/thumb/d-token-200.png?1739401385", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SPUS", 
      "abi": "ERC20_ABI", 
      "symbol": "SPUSD", 
      "priority": 3, 
      "address": "0x69fe3ee4f41e85a5431bb95bbe897f967845e5aa", 
      "logo": "https://assets.coingecko.com/coins/images/54393/thumb/d-token-200.png?1739485765", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SPWO", 
      "abi": "ERC20_ABI", 
      "symbol": "SPWOD", 
      "priority": 3, 
      "address": "0x1bc7cd640fba3d157f152665b7bf5cbe4a50d26a", 
      "logo": "https://assets.coingecko.com/coins/images/54394/thumb/d-token-200.png?1739485782", 
      "decimals": 18
    }, 
    {
      "name": "Dinari UFO", 
      "abi": "ERC20_ABI", 
      "symbol": "UFOD", 
      "priority": 3, 
      "address": "0x3ac60413b5ad95fc02409d6e8c5b316e19c962e1", 
      "logo": "https://assets.coingecko.com/coins/images/54395/thumb/d-token-200.png?1739485800", 
      "decimals": 18
    }, 
    {
      "name": "Dawae", 
      "abi": "ERC20_ABI", 
      "symbol": "DAWAE", 
      "priority": 3, 
      "address": "0x0ed151c9749d39c3ca8e537125fb4053e0c9b55f", 
      "logo": "https://assets.coingecko.com/coins/images/54403/thumb/IMG_0775.png?1739519972", 
      "decimals": 9
    }, 
    {
      "name": "Solidus Ai Tech", 
      "abi": "ERC20_ABI", 
      "symbol": "AITECH", 
      "priority": 3, 
      "address": "0xd71552d9e08e5351adb52163b3bbbc4d7de53ce1", 
      "logo": "https://assets.coingecko.com/coins/images/22114/thumb/CMC_Logo_200x200.png?1719949930", 
      "decimals": 18
    }, 
    {
      "name": "Shieldeum", 
      "abi": "ERC20_ABI", 
      "symbol": "SDM", 
      "priority": 3, 
      "address": "0x9cfe02eb040c6f5718126128dbba0c1d364d9c07", 
      "logo": "https://assets.coingecko.com/coins/images/52254/thumb/Shieldeum_Coingecko.webp?1732834963", 
      "decimals": 18
    }, 
    {
      "name": "Sage Market", 
      "abi": "ERC20_ABI", 
      "symbol": "SAGE", 
      "priority": 3, 
      "address": "0xbb2a93afcf5d3af8ae28dd50d6c18556ea532c5a", 
      "logo": "https://assets.coingecko.com/coins/images/38811/thumb/Logo_for_CMC_200x200.png?1719069825", 
      "decimals": 18
    }, 
    {
      "name": "Dinari VXX", 
      "abi": "ERC20_ABI", 
      "symbol": "VXXD", 
      "priority": 3, 
      "address": "0x0dbff26347082381f035ed54dea12edb6d9ed2f4", 
      "logo": "https://assets.coingecko.com/coins/images/54396/thumb/d-token-200.png?1739485820", 
      "decimals": 18
    }, 
    {
      "name": "iBTC Network", 
      "abi": "ERC20_ABI", 
      "symbol": "IBTC", 
      "priority": 3, 
      "address": "0x12418783e860997eb99e8acf682df952f721cf62", 
      "logo": "https://assets.coingecko.com/coins/images/37289/thumb/iBTC_main.png?1742022373", 
      "decimals": 8
    }, 
    {
      "name": "Dinari TJX", 
      "abi": "ERC20_ABI", 
      "symbol": "TJXD", 
      "priority": 3, 
      "address": "0xf61558b2bc330c55ae85679be03a76dc0a8c9ed2", 
      "logo": "https://assets.coingecko.com/coins/images/54397/thumb/d-token-200.png?1739485840", 
      "decimals": 18
    }, 
    {
      "name": "PONKE", 
      "abi": "ERC20_ABI", 
      "symbol": "PONKE", 
      "priority": 3, 
      "address": "0x4a0c64af541439898448659aedcec8e8e819fc53", 
      "logo": "https://assets.coingecko.com/coins/images/33929/thumb/ponke.jpeg?1738897723", 
      "decimals": 18
    }, 
    {
      "name": "SoSoValue", 
      "abi": "ERC20_ABI", 
      "symbol": "SOSO", 
      "priority": 3, 
      "address": "0x624e2e7fdc8903165f64891672267ab0fcb98831", 
      "logo": "https://assets.coingecko.com/coins/images/53919/thumb/soso.jpg?1737717378", 
      "decimals": 18
    }, 
    {
      "name": "Polytrade", 
      "abi": "ERC20_ABI", 
      "symbol": "TRADE", 
      "priority": 3, 
      "address": "0x72e1868f8eb8f9fb86455c10e72aa4b24774a5a3", 
      "logo": "https://assets.coingecko.com/coins/images/16416/thumb/Logo_colored_200.png?1696516012", 
      "decimals": 18
    }, 
    {
      "name": "Telcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "TEL", 
      "priority": 3, 
      "address": "0x09be1692ca16e06f536f0038ff11d1da8524adb1", 
      "logo": "https://assets.coingecko.com/coins/images/1899/thumb/tel.png?1696502892", 
      "decimals": 2
    }, 
    {
      "name": "Agentlauncher", 
      "abi": "ERC20_ABI", 
      "symbol": "CVAI", 
      "priority": 3, 
      "address": "0x6b34d1c35689dba179c2eddf6a01530bbb1d28a8", 
      "logo": "https://assets.coingecko.com/coins/images/54408/thumb/Logo_CVAI_TICKER.png?1739539559", 
      "decimals": 18
    }, 
    {
      "name": "Sweat Economy", 
      "abi": "ERC20_ABI", 
      "symbol": "SWEAT", 
      "priority": 3, 
      "address": "0x227d920e20ebac8a40e7d6431b7d724bb64d7245", 
      "logo": "https://assets.coingecko.com/coins/images/25057/thumb/fhD9Xs16_400x400.jpg?1696524208", 
      "decimals": 18
    }, 
    {
      "name": "Shitzu", 
      "abi": "ERC20_ABI", 
      "symbol": "SHITZU", 
      "priority": 3, 
      "address": "0x473c1656373b3715805f647911e75aaa49c39813", 
      "logo": "https://assets.coingecko.com/coins/images/24857/thumb/sFChtaUA_400x400.jpg?1696524017", 
      "decimals": 18
    }, 
    {
      "name": "Functionland", 
      "abi": "ERC20_ABI", 
      "symbol": "FULA", 
      "priority": 3, 
      "address": "0x9e12735d77c72c5c3670636d428f2f3815d8a4cb", 
      "logo": "https://assets.coingecko.com/coins/images/24782/thumb/FULA_IconGRN_200.png?1742180793", 
      "decimals": 18
    }, 
    {
      "name": "Amped Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "AMP", 
      "priority": 3, 
      "address": "0xac611438ae5f3953dedb47c2ea8d6650d601c1b4", 
      "logo": "https://assets.coingecko.com/coins/images/37421/thumb/AmpedLogoTrans-200.png?1714377313", 
      "decimals": 18
    }, 
    {
      "name": "XION", 
      "abi": "ERC20_ABI", 
      "symbol": "XION", 
      "priority": 3, 
      "address": "0xe4c3461a20f50dad7b9e88ca0222a255c4126fc0", 
      "logo": "https://assets.coingecko.com/coins/images/39034/thumb/Burnt-Xion-Blaise-Logo-White-On-Black-Square.png?1720038410", 
      "decimals": 6
    }, 
    {
      "name": "Usual USD", 
      "abi": "ERC20_ABI", 
      "symbol": "USD0", 
      "priority": 3, 
      "address": "0x758a3e0b1f842c9306b783f8a4078c6c8c03a270", 
      "logo": "https://assets.coingecko.com/coins/images/38272/thumb/USD0LOGO.png?1716962811", 
      "decimals": 18
    }, 
    {
      "name": "BiLira", 
      "abi": "ERC20_ABI", 
      "symbol": "TRYB", 
      "priority": 3, 
      "address": "0xfb8718a69aed7726afb3f04d2bd4bfde1bdcb294", 
      "logo": "https://assets.coingecko.com/coins/images/10119/thumb/JBs9jiXO_400x400.jpg?1696510144", 
      "decimals": 6
    }, 
    {
      "name": "Backed GameStop Corp", 
      "abi": "ERC20_ABI", 
      "symbol": "BGME", 
      "priority": 3, 
      "address": "0x7212088a11b4d8f6fc90fbb3dfe793b45dd72323", 
      "logo": "https://assets.coingecko.com/coins/images/38912/thumb/200p_bGME_3.png?1740503165", 
      "decimals": 18
    }, 
    {
      "name": "Liquid Staked ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "LSETH", 
      "priority": 3, 
      "address": "0xb29749498954a3a821ec37bde86e386df3ce30b6", 
      "logo": "https://assets.coingecko.com/coins/images/28848/thumb/LsETH-receipt-token-circle.png?1696527824", 
      "decimals": 18
    }, 
    {
      "name": "Fasttoken", 
      "abi": "ERC20_ABI", 
      "symbol": "FTN", 
      "priority": 3, 
      "address": "0x1045971c168b5294acbc8727a4f1c9e1af99f6d0", 
      "logo": "https://assets.coingecko.com/coins/images/28478/thumb/lightenicon_200x200.png?1696527472", 
      "decimals": 18
    }, 
    {
      "name": "Compounding OpenDollar", 
      "abi": "ERC20_ABI", 
      "symbol": "CUSDO", 
      "priority": 3, 
      "address": "0x83db73ef5192de4b6a4c92bd0141ba1a0dc87c65", 
      "logo": "https://assets.coingecko.com/coins/images/53751/thumb/cUSDO_logo_white.png?1737182014", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Backed Coinbase Global", 
      "abi": "ERC20_ABI", 
      "symbol": "WBCOIN", 
      "priority": 3, 
      "address": "0xdec933e2392ad908263e70a386fbf34e703ffe8f", 
      "logo": "https://assets.coingecko.com/coins/images/54429/thumb/bCOIN_200p.png?1740041341", 
      "decimals": 18
    }, 
    {
      "name": "Hunt", 
      "abi": "ERC20_ABI", 
      "symbol": "HUNT", 
      "priority": 3, 
      "address": "0x37f0c2915cecc7e977183b8543fc0864d03e064c", 
      "logo": "https://assets.coingecko.com/coins/images/7989/thumb/HUNT.png?1696508215", 
      "decimals": 18
    }, 
    {
      "name": "EURA", 
      "abi": "ERC20_ABI", 
      "symbol": "EURA", 
      "priority": 3, 
      "address": "0xa61beb4a3d02decb01039e378237032b351125b4", 
      "logo": "https://assets.coingecko.com/coins/images/19479/thumb/agEUR-4.png?1710726218", 
      "decimals": 18
    }, 
    {
      "name": "KlimaDAO", 
      "abi": "ERC20_ABI", 
      "symbol": "KLIMA", 
      "priority": 3, 
      "address": "0xdcefd8c8fcc492630b943abcab3429f12ea9fea2", 
      "logo": "https://assets.coingecko.com/coins/images/19169/thumb/Klima-Token.png?1696518618", 
      "decimals": 9
    }, 
    {
      "name": "Function X", 
      "abi": "ERC20_ABI", 
      "symbol": "FX", 
      "priority": 3, 
      "address": "0x8cecc2360906c812cd7353cd6b10b1dc13bbc777", 
      "logo": "https://assets.coingecko.com/coins/images/8186/thumb/function-x.jpg?1740541175", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SQ", 
      "abi": "ERC20_ABI", 
      "symbol": "SQD", 
      "priority": 3, 
      "address": "0xd5eab2d9e01442bfca720f6f15451555dd003f40", 
      "logo": "https://assets.coingecko.com/coins/images/54229/thumb/d-token-200.png?1738861102", 
      "decimals": 18
    }, 
    {
      "name": "Dinari RBLX", 
      "abi": "ERC20_ABI", 
      "symbol": "RBLXD", 
      "priority": 3, 
      "address": "0xb51c78989fb8d1bf2c957dd0522235c92d0443a5", 
      "logo": "https://assets.coingecko.com/coins/images/54223/thumb/d-token-200.png?1738860997", 
      "decimals": 18
    }, 
    {
      "name": "NEUY", 
      "abi": "ERC20_ABI", 
      "symbol": "NEUY", 
      "priority": 3, 
      "address": "0x3cf255a7a03d74b6f9d58456cbedbc0705626354", 
      "logo": "https://assets.coingecko.com/coins/images/25870/thumb/logo200x200.png?1696524953", 
      "decimals": 18
    }, 
    {
      "name": "OpenEden OpenDollar", 
      "abi": "ERC20_ABI", 
      "symbol": "USDO", 
      "priority": 3, 
      "address": "0xad55aebc9b8c03fc43cd9f62260391c13c23e7c0", 
      "logo": "https://assets.coingecko.com/coins/images/53750/thumb/USDO_LOGO-white.png?1737181887", 
      "decimals": 18
    }, 
    {
      "name": "Synapse", 
      "abi": "ERC20_ABI", 
      "symbol": "SYN", 
      "priority": 3, 
      "address": "0x432036208d2717394d2614d6697c46df3ed69540", 
      "logo": "https://assets.coingecko.com/coins/images/18024/thumb/synapse_social_icon.png?1696517540", 
      "decimals": 18
    }, 
    {
      "name": "DexKit", 
      "abi": "ERC20_ABI", 
      "symbol": "KIT", 
      "priority": 3, 
      "address": "0x946f8b0ef009f3f5b1b35e6511a82a58b09d8d4e", 
      "logo": "https://assets.coingecko.com/coins/images/13187/thumb/7739.png?1696512969", 
      "decimals": 18
    }, 
    {
      "name": "DOLZ io", 
      "abi": "ERC20_ABI", 
      "symbol": "DOLZ", 
      "priority": 3, 
      "address": "0x8102b2864eade51a1c36497747132af689824b59", 
      "logo": "https://assets.coingecko.com/coins/images/33605/thumb/dolz_200.png?1702510960", 
      "decimals": 18
    }, 
    {
      "name": "9mm", 
      "abi": "ERC20_ABI", 
      "symbol": "9MM", 
      "priority": 3, 
      "address": "0xe290816384416fb1db9225e176b716346db9f9fe", 
      "logo": "https://assets.coingecko.com/coins/images/54791/thumb/9mm.jpg?1741590221", 
      "decimals": 18
    }, 
    {
      "name": "Zentry", 
      "abi": "ERC20_ABI", 
      "symbol": "ZENT", 
      "priority": 3, 
      "address": "0xdf49c226ed9cf05be0e38cdb86df4e8a945158b1", 
      "logo": "https://assets.coingecko.com/coins/images/36979/thumb/Zentry-rebrand-Primary_200px.png?1713743277", 
      "decimals": 18
    }, 
    {
      "name": "Biaoqing", 
      "abi": "ERC20_ABI", 
      "symbol": "BIAO", 
      "priority": 3, 
      "address": "0xf4fa93f76220414cdf6fd95a85e7a407e2dd3e3d", 
      "logo": "https://assets.coingecko.com/coins/images/38643/thumb/oPnGc4zJ_400x400.jpg?1718210024", 
      "decimals": 9
    }, 
    {
      "name": "PAAL AI", 
      "abi": "ERC20_ABI", 
      "symbol": "PAAL", 
      "priority": 3, 
      "address": "0xd52333441c0553facb259600fa833a69186893a5", 
      "logo": "https://assets.coingecko.com/coins/images/30815/thumb/Paal_New_Logo_%281%29.png?1718160584", 
      "decimals": 18
    }, 
    {
      "name": "Balanced", 
      "abi": "ERC20_ABI", 
      "symbol": "BALN", 
      "priority": 3, 
      "address": "0x76e118fa6839ddad531411b8cc7a9dcdfd7d4fb0", 
      "logo": "https://assets.coingecko.com/coins/images/15303/thumb/balance_tokens.png?1696514953", 
      "decimals": 18
    }, 
    {
      "name": "Bio Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "BIO", 
      "priority": 3, 
      "address": "0x226a2fa2556c48245e57cd1cba4c6c9e67077dd2", 
      "logo": "https://assets.coingecko.com/coins/images/53022/thumb/bio.jpg?1735011002", 
      "decimals": 18
    }, 
    {
      "name": "Maple Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "SYRUP", 
      "priority": 3, 
      "address": "0x688aee022aa544f150678b8e5720b6b96a9e9a2f", 
      "logo": "https://assets.coingecko.com/coins/images/51232/thumb/IMG_7420.png?1730831572", 
      "decimals": 18
    }, 
    {
      "name": "Particle Network", 
      "abi": "ERC20_ABI", 
      "symbol": "PARTI", 
      "priority": 3, 
      "address": "0x59264f02d301281f3393e1385c0aefd446eb0f00", 
      "logo": "https://assets.coingecko.com/coins/images/54955/thumb/parti-token-200.png?1742822558", 
      "decimals": 18
    }, 
    {
      "name": "Johnny Suede", 
      "abi": "ERC20_ABI", 
      "symbol": "SUEDE", 
      "priority": 3, 
      "address": "0x75161fa0afe6dfc768cff2b82ecd7ba51728b341", 
      "logo": "https://assets.coingecko.com/coins/images/54437/thumb/IMG_8918.jpeg?1739713085", 
      "decimals": 18
    }, 
    {
      "name": "Overtime", 
      "abi": "ERC20_ABI", 
      "symbol": "OVER", 
      "priority": 3, 
      "address": "0x7750c092e284e2c7366f50c8306f43c7eb2e82a2", 
      "logo": "https://assets.coingecko.com/coins/images/54973/thumb/over.png?1742959291", 
      "decimals": 18
    }, 
    {
      "name": "Adshares", 
      "abi": "ERC20_ABI", 
      "symbol": "ADS", 
      "priority": 3, 
      "address": "0xb20a4bd059f5914a2f8b9c18881c637f79efb7df", 
      "logo": "https://assets.coingecko.com/coins/images/868/thumb/rnO9DyJ.png?1696502001", 
      "decimals": 11
    }, 
    {
      "name": "STP", 
      "abi": "ERC20_ABI", 
      "symbol": "STPT", 
      "priority": 3, 
      "address": "0x4489d0a0345ecb216a3994de780d453c7fa6312c", 
      "logo": "https://assets.coingecko.com/coins/images/8713/thumb/STP.png?1696508875", 
      "decimals": 18
    }, 
    {
      "name": "ynETH MAX", 
      "abi": "ERC20_ABI", 
      "symbol": "YNETHX", 
      "priority": 3, 
      "address": "0xe231db5f348d709239ef1741ea30961b3b635a61", 
      "logo": "https://assets.coingecko.com/coins/images/51623/thumb/ynETHx.png?1731659494", 
      "decimals": 18
    }, 
    {
      "name": "Chainlink", 
      "abi": "ERC20_ABI", 
      "symbol": "LINK", 
      "priority": 3, 
      "address": "0x88fb150bdc53a65fe94dea0c9ba0a6daf8c6e196", 
      "logo": "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1696502009", 
      "decimals": 18
    }, 
    {
      "name": "BetMore Casino", 
      "abi": "ERC20_ABI", 
      "symbol": "BMR", 
      "priority": 3, 
      "address": "0xd2563fc9fc787853229aab2bda7211484051c256", 
      "logo": "https://assets.coingecko.com/coins/images/54711/thumb/0xdc300854b0ef52650057158e8a33afe703525539.png?1741179043", 
      "decimals": 18
    }, 
    {
      "name": "InteNet", 
      "abi": "ERC20_ABI", 
      "symbol": "INT", 
      "priority": 3, 
      "address": "0x5019fe1867d8ccfd76d8d5abd85db5efce548fba", 
      "logo": "https://assets.coingecko.com/coins/images/54832/thumb/dDZtouYf_400x400.jpg?1741957002", 
      "decimals": 18
    }, 
    {
      "name": "Godcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "GOD", 
      "priority": 3, 
      "address": "0xb5130f4767ab0acc579f25a76e8f9e977cb3f948", 
      "logo": "https://assets.coingecko.com/coins/images/53848/thumb/GodcoinTickerIcon_02.png?1737582816", 
      "decimals": 18
    }, 
    {
      "name": "Qawalla", 
      "abi": "ERC20_ABI", 
      "symbol": "QWLA", 
      "priority": 3, 
      "address": "0x55365c9e68e70122020184f4441b498e8bf06ac6", 
      "logo": "https://assets.coingecko.com/coins/images/15242/thumb/qwla.png?1696514896", 
      "decimals": 18
    }, 
    {
      "name": "Prosper", 
      "abi": "ERC20_ABI", 
      "symbol": "PROS", 
      "priority": 3, 
      "address": "0x915424ac489433130d92b04096f3b96c82e92a9d", 
      "logo": "https://assets.coingecko.com/coins/images/53917/thumb/Prosper_Token_LightMode_%281%29.png?1738143554", 
      "decimals": 18
    }, 
    {
      "name": "Polter", 
      "abi": "ERC20_ABI", 
      "symbol": "POLTER", 
      "priority": 3, 
      "address": "0xa0820613976b441e2c6a90e4877e2fb5f7d72552", 
      "logo": "https://assets.coingecko.com/coins/images/35730/thumb/logo-200.png?1743249114", 
      "decimals": 18
    }, 
    {
      "name": "Bright Union", 
      "abi": "ERC20_ABI", 
      "symbol": "BRIGHT", 
      "priority": 3, 
      "address": "0xa26a4611b8313bbb25ccb1a9e227ecc536a2f8f7", 
      "logo": "https://assets.coingecko.com/coins/images/17552/thumb/BrightToken_Token-only_200x200-1.png?1696517088", 
      "decimals": 18
    }, 
    {
      "name": "Usual", 
      "abi": "ERC20_ABI", 
      "symbol": "USUAL", 
      "priority": 3, 
      "address": "0x4acd4d03af6f9cc0fb7c5f0868b7b6287d7969c5", 
      "logo": "https://assets.coingecko.com/coins/images/51091/thumb/USUAL.jpg?1730035787", 
      "decimals": 18
    }, 
    {
      "name": "Constellation", 
      "abi": "ERC20_ABI", 
      "symbol": "DAG", 
      "priority": 3, 
      "address": "0x74299a718b2c44483a27325d7725f0b2646de3b1", 
      "logo": "https://assets.coingecko.com/coins/images/4645/thumb/Constellation_Network_Logo.png?1696505213", 
      "decimals": 8
    }, 
    {
      "name": "Voucher DOT", 
      "abi": "ERC20_ABI", 
      "symbol": "VDOT", 
      "priority": 3, 
      "address": "0xbc33b4d48f76d17a1800afcb730e8a6aaada7fe5", 
      "logo": "https://assets.coingecko.com/coins/images/28875/thumb/vDOT.png?1696527852", 
      "decimals": 18
    }, 
    {
      "name": "Dor", 
      "abi": "ERC20_ABI", 
      "symbol": "DOR", 
      "priority": 3, 
      "address": "0xfe9885baff18074846aaa2d5541581adf068731d", 
      "logo": "https://assets.coingecko.com/coins/images/33044/thumb/dortoken_red.png?1700429057", 
      "decimals": 8
    }, 
    {
      "name": "Dinari WEAT", 
      "abi": "ERC20_ABI", 
      "symbol": "WEATD", 
      "priority": 3, 
      "address": "0xc6bbaf4d804327d84931310e49c863e63a2bd868", 
      "logo": "https://assets.coingecko.com/coins/images/53872/thumb/d-token-200.png?1737617091", 
      "decimals": 18
    }, 
    {
      "name": "Own The Doge", 
      "abi": "ERC20_ABI", 
      "symbol": "DOG", 
      "priority": 3, 
      "address": "0xafb89a09d82fbde58f18ac6437b3fc81724e4df6", 
      "logo": "https://assets.coingecko.com/coins/images/18111/thumb/Doge.png?1696517615", 
      "decimals": 18
    }, 
    {
      "name": "Nya", 
      "abi": "ERC20_ABI", 
      "symbol": "NYA", 
      "priority": 3, 
      "address": "0x38f9bf9dce51833ec7f03c9dc218197999999999", 
      "logo": "https://assets.coingecko.com/coins/images/40082/thumb/nya.jpg?1725523655", 
      "decimals": 18
    }, 
    {
      "name": "BLOCKLORDS", 
      "abi": "ERC20_ABI", 
      "symbol": "LRDS", 
      "priority": 3, 
      "address": "0xb676f87a6e701f0de8de5ab91b56b66109766db1", 
      "logo": "https://assets.coingecko.com/coins/images/34775/thumb/LRDS_PNG.png?1706001771", 
      "decimals": 18
    }, 
    {
      "name": "IDRX", 
      "abi": "ERC20_ABI", 
      "symbol": "IDRX", 
      "priority": 3, 
      "address": "0x18bc5bcc660cf2b9ce3cd51a404afe1a0cbd3c22", 
      "logo": "https://assets.coingecko.com/coins/images/34883/thumb/IDRX_BLUE_COIN_200x200.png?1734983273", 
      "decimals": 2
    }, 
    {
      "name": "LushAI", 
      "abi": "ERC20_ABI", 
      "symbol": "LUSH", 
      "priority": 3, 
      "address": "0x5319419caf59a446f2f129a5876a5e6b490d6610", 
      "logo": "https://assets.coingecko.com/coins/images/35342/thumb/tokenIcon200x200.png?1708317375", 
      "decimals": 18
    }, 
    {
      "name": "Coinbase Wrapped BTC", 
      "abi": "ERC20_ABI", 
      "symbol": "CBBTC", 
      "priority": 3, 
      "address": "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf", 
      "logo": "https://assets.coingecko.com/coins/images/40143/thumb/cbbtc.webp?1726136727", 
      "decimals": 8
    }, 
    {
      "name": "Orbiter Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "OBT", 
      "priority": 3, 
      "address": "0x514d8e8099286a13486ef6c525c120f51c239b52", 
      "logo": "https://assets.coingecko.com/coins/images/53783/thumb/orbiter.jpg?1737352795", 
      "decimals": 18
    }, 
    {
      "name": "Gravity", 
      "abi": "ERC20_ABI", 
      "symbol": "G", 
      "priority": 3, 
      "address": "0x9c7beba8f6ef6643abd725e45a4e8387ef260649", 
      "logo": "https://assets.coingecko.com/coins/images/39200/thumb/gravity.jpg?1721020647", 
      "decimals": 18
    }, 
    {
      "name": "Base Carbon Tonne", 
      "abi": "ERC20_ABI", 
      "symbol": "BCT", 
      "priority": 3, 
      "address": "0x576bca23dcb6d94ff8e537d88b0d3e1bead444a2", 
      "logo": "https://assets.coingecko.com/coins/images/19240/thumb/BCT_500.png?1721039552", 
      "decimals": 18
    }, 
    {
      "name": "Zunami Governance Token", 
      "abi": "ERC20_ABI", 
      "symbol": "ZUN", 
      "priority": 3, 
      "address": "0x1db0fc8933f545648b54a9ee4326209a9a259643", 
      "logo": "https://assets.coingecko.com/coins/images/38298/thumb/ZUN_200x200.png?1717194404", 
      "decimals": 18
    }, 
    {
      "name": "Davos xyz USD", 
      "abi": "ERC20_ABI", 
      "symbol": "DUSD", 
      "priority": 3, 
      "address": "0xf2393eeadd67bf68a60f39992113775966f34e1e", 
      "logo": "https://assets.coingecko.com/coins/images/28775/thumb/dusd_logo_200x200.png?1696527754", 
      "decimals": 18
    }, 
    {
      "name": "Stargate Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "STG", 
      "priority": 3, 
      "address": "0xe3b53af74a4bf62ae5511055290838050bf764df", 
      "logo": "https://assets.coingecko.com/coins/images/24413/thumb/STG_LOGO.png?1696523595", 
      "decimals": 18
    }, 
    {
      "name": "iFARM", 
      "abi": "ERC20_ABI", 
      "symbol": "IFARM", 
      "priority": 3, 
      "address": "0xe7798f023fc62146e8aa1b36da45fb70855a77ea", 
      "logo": "https://assets.coingecko.com/coins/images/14472/thumb/ifarm.png?1696514159", 
      "decimals": 18
    }, 
    {
      "name": "Ionic USD Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "IONUSDC", 
      "priority": 3, 
      "address": "0xa900a17a49bc4d442ba7f72c39fa2108865671f0", 
      "logo": "https://assets.coingecko.com/coins/images/39224/thumb/ionUSDC.png?1721184505", 
      "decimals": 6
    }, 
    {
      "name": "Defactor", 
      "abi": "ERC20_ABI", 
      "symbol": "FACTR", 
      "priority": 3, 
      "address": "0xd33c7b753ecaa85e5d5f5b5fd99dec59f26a087e", 
      "logo": "https://assets.coingecko.com/coins/images/19201/thumb/Defactor-FACTR-Ticker.jpg?1741314228", 
      "decimals": 18
    }, 
    {
      "name": "Silo Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "SILO", 
      "priority": 3, 
      "address": "0x57bd5c33c8002a634b389ab4de5e09ec1c31dce7", 
      "logo": "https://assets.coingecko.com/coins/images/21454/thumb/y0iYKZOv_400x400.png?1696520816", 
      "decimals": 18
    }, 
    {
      "name": "Dtravel", 
      "abi": "ERC20_ABI", 
      "symbol": "TRVL", 
      "priority": 3, 
      "address": "0x74aa9bb52b36a378a6e641b86d7acb76dc9b3940", 
      "logo": "https://assets.coingecko.com/coins/images/20911/thumb/trvl.jpeg?1696520301", 
      "decimals": 18
    }, 
    {
      "name": "Zunami ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "ZUNETH", 
      "priority": 3, 
      "address": "0x24cb2b89844604c57350776d81e14765d03b91de", 
      "logo": "https://assets.coingecko.com/coins/images/37835/thumb/zunETH_200x200.png?1715741123", 
      "decimals": 18
    }, 
    {
      "name": "Ovr", 
      "abi": "ERC20_ABI", 
      "symbol": "OVR", 
      "priority": 3, 
      "address": "0x27e3bc3a66e24cad043ac3d93a12a8070e3897ba", 
      "logo": "https://assets.coingecko.com/coins/images/13429/thumb/LOGO-OVER-ICON-200X200PX.png?1699396496", 
      "decimals": 18
    }, 
    {
      "name": "Unio Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "UNIO", 
      "priority": 3, 
      "address": "0x01aac2b594f7bdbec740f0f1aa22910ebb4b74ab", 
      "logo": "https://assets.coingecko.com/coins/images/50191/thumb/uniocoin-200x200.png?1726206790", 
      "decimals": 18
    }, 
    {
      "name": "La ka", 
      "abi": "ERC20_ABI", 
      "symbol": "LAIKA", 
      "priority": 3, 
      "address": "0xea651c035f52b644856cab1f59775369c36ecadd", 
      "logo": "https://assets.coingecko.com/coins/images/39364/thumb/logo_laika.jpg?1721895773", 
      "decimals": 18
    }, 
    {
      "name": "Elon", 
      "abi": "ERC20_ABI", 
      "symbol": "ELON", 
      "priority": 3, 
      "address": "0xb770fad3b3d059162a357047ddcf97fbe9fd7982", 
      "logo": "https://assets.coingecko.com/coins/images/37515/thumb/photo_2025-01-06_22-55-39.jpg?1736355780", 
      "decimals": 9
    }, 
    {
      "name": "LogX Network", 
      "abi": "ERC20_ABI", 
      "symbol": "LOGX", 
      "priority": 3, 
      "address": "0x04055057677807d2a53d2b25a80ff3b4d932ae1a", 
      "logo": "https://assets.coingecko.com/coins/images/50226/thumb/Token_200px.png?1726556358", 
      "decimals": 18
    }, 
    {
      "name": "Bonsai Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "BONSAICOIN", 
      "priority": 3, 
      "address": "0xa0aebd4ae5f256b72b7d43f67ed934237adb1aee", 
      "logo": "https://assets.coingecko.com/coins/images/39273/thumb/1000007690.png?1721386111", 
      "decimals": 18
    }, 
    {
      "name": "Bonsai3", 
      "abi": "ERC20_ABI", 
      "symbol": "SEED", 
      "priority": 3, 
      "address": "0x31ea904a7eca45122890deb8da3473a2081bc9d1", 
      "logo": "https://assets.coingecko.com/coins/images/33162/thumb/logo-bonsai3200x200.png?1700830408", 
      "decimals": 18
    }, 
    {
      "name": "Wagmi", 
      "abi": "ERC20_ABI", 
      "symbol": "WAGMI", 
      "priority": 3, 
      "address": "0xaf20f5f19698f1d19351028cd7103b63d30de7d7", 
      "logo": "https://assets.coingecko.com/coins/images/31887/thumb/wagmi_token_logo.png?1696530698", 
      "decimals": 18
    }, 
    {
      "name": "Comswap Wrapped LIBRA", 
      "abi": "ERC20_ABI", 
      "symbol": "COMSWAPWLIBRA", 
      "priority": 3, 
      "address": "0x01edbffa4f61404458e22ff45deffef1c62228b5", 
      "logo": "https://assets.coingecko.com/coins/images/34499/thumb/logo.png?1705265581", 
      "decimals": 18
    }, 
    {
      "name": "IPOR", 
      "abi": "ERC20_ABI", 
      "symbol": "IPOR", 
      "priority": 3, 
      "address": "0xbd4e5c2f8de5065993d29a9794e2b7cefc41437a", 
      "logo": "https://assets.coingecko.com/coins/images/28373/thumb/IPOR-token-200x200.png?1696527376", 
      "decimals": 18
    }, 
    {
      "name": "IntentX", 
      "abi": "ERC20_ABI", 
      "symbol": "INTX", 
      "priority": 3, 
      "address": "0x7d27187eb33a7b1d99258ff222633670f84fa342", 
      "logo": "https://assets.coingecko.com/coins/images/38241/thumb/PFP_IX_2.png?1716881240", 
      "decimals": 18
    }, 
    {
      "name": "TYBENG", 
      "abi": "ERC20_ABI", 
      "symbol": "TYBENG", 
      "priority": 3, 
      "address": "0x029a3b0532871735809a51e8653d6017ef04b6fa", 
      "logo": "https://assets.coingecko.com/coins/images/31022/thumb/NVoa_mZ6_400x400.jpg?1721805735", 
      "decimals": 18
    }, 
    {
      "name": "Avarik Saga", 
      "abi": "ERC20_ABI", 
      "symbol": "AVRK", 
      "priority": 3, 
      "address": "0xcaacd56d3d9b41d9d1272457e77f8ae510fdb688", 
      "logo": "https://assets.coingecko.com/coins/images/51914/thumb/Logo500x500.png?1732258561", 
      "decimals": 18
    }, 
    {
      "name": "CateCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "CATE", 
      "priority": 3, 
      "address": "0x051fb509e4a775fabd257611eea1efaed8f91359", 
      "logo": "https://assets.coingecko.com/coins/images/15364/thumb/logo.png?1696515013", 
      "decimals": 9
    }, 
    {
      "name": "SubQuery Network", 
      "abi": "ERC20_ABI", 
      "symbol": "SQT", 
      "priority": 3, 
      "address": "0x858c50c3af1913b0e849afdb74617388a1a5340d", 
      "logo": "https://assets.coingecko.com/coins/images/23359/thumb/LinkedIn_Avatar_Op1.png?1724379155", 
      "decimals": 18
    }, 
    {
      "name": "Synthetix Network", 
      "abi": "ERC20_ABI", 
      "symbol": "SNX", 
      "priority": 3, 
      "address": "0x22e6966b799c4d5b13be962e1d117b56327fda66", 
      "logo": "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png?1696504103", 
      "decimals": 18
    }, 
    {
      "name": "Onchain Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "ONCHAIN", 
      "priority": 3, 
      "address": "0x1c22374032e7e5a1bbde3d943f5deb310db060dd", 
      "logo": "https://assets.coingecko.com/coins/images/40107/thumb/onchain.png?1725696897", 
      "decimals": 18
    }, 
    {
      "name": "ISLAND Token", 
      "abi": "ERC20_ABI", 
      "symbol": "ISLAND", 
      "priority": 3, 
      "address": "0x157a6df6b74f4e5e45af4e4615fde7b49225a662", 
      "logo": "https://assets.coingecko.com/coins/images/52797/thumb/ISLAND_200x200.jpg?1734330930", 
      "decimals": 18
    }, 
    {
      "name": "Savings Dai", 
      "abi": "ERC20_ABI", 
      "symbol": "SDAI", 
      "priority": 3, 
      "address": "0x99ac4484e8a1dbd6a185380b3a811913ac884d87", 
      "logo": "https://assets.coingecko.com/coins/images/32254/thumb/sdai.png?1697015278", 
      "decimals": 18
    }, 
    {
      "name": "Be For FWX", 
      "abi": "ERC20_ABI", 
      "symbol": "B4FWX", 
      "priority": 3, 
      "address": "0xbe35071605277d8be5a52c84a66ab1bc855a758d", 
      "logo": "https://assets.coingecko.com/coins/images/38663/thumb/b4fwx-token.png?1736959778", 
      "decimals": 18
    }, 
    {
      "name": "Sushi", 
      "abi": "ERC20_ABI", 
      "symbol": "SUSHI", 
      "priority": 3, 
      "address": "0x7d49a065d17d6d4a55dc13649901fdbb98b2afba", 
      "logo": "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1696512101", 
      "decimals": 18
    }, 
    {
      "name": "Compound", 
      "abi": "ERC20_ABI", 
      "symbol": "COMP", 
      "priority": 3, 
      "address": "0x9e1028f5f1d5ede59748ffcee5532509976840e0", 
      "logo": "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1696510737", 
      "decimals": 18
    }, 
    {
      "name": "Lovely Inu Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "LOVELY", 
      "priority": 3, 
      "address": "0x4e719699e4197f4bf4370c49acd3e3b8de11974f", 
      "logo": "https://assets.coingecko.com/coins/images/19053/thumb/lovely-inu-logo-new.png?1696518503", 
      "decimals": 18
    }, 
    {
      "name": "Phavercoin", 
      "abi": "ERC20_ABI", 
      "symbol": "SOCIAL", 
      "priority": 3, 
      "address": "0xd3c68968137317a57a9babeacc7707ec433548b4", 
      "logo": "https://assets.coingecko.com/coins/images/50304/thumb/Untitled_design_%2874%29.png?1738401815", 
      "decimals": 18
    }, 
    {
      "name": "Hoge Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "HOGE", 
      "priority": 3, 
      "address": "0xdf690c65d067035364a58369c26820d3696d7799", 
      "logo": "https://assets.coingecko.com/coins/images/14360/thumb/hoge.jpg?1696514046", 
      "decimals": 9
    }, 
    {
      "name": "Pendle", 
      "abi": "ERC20_ABI", 
      "symbol": "PENDLE", 
      "priority": 3, 
      "address": "0xa99f6e6785da0f5d6fb42495fe424bce029eeb3e", 
      "logo": "https://assets.coingecko.com/coins/images/15069/thumb/Pendle_Logo_Normal-03.png?1696514728", 
      "decimals": 18
    }, 
    {
      "name": "Origin Token", 
      "abi": "ERC20_ABI", 
      "symbol": "OGN", 
      "priority": 3, 
      "address": "0x7002458b1df59eccb57387bc79ffc7c29e22e6f7", 
      "logo": "https://assets.coingecko.com/coins/images/3296/thumb/op.jpg?1696504006", 
      "decimals": 18
    }, 
    {
      "name": "WoofWork io", 
      "abi": "ERC20_ABI", 
      "symbol": "WOOF", 
      "priority": 3, 
      "address": "0xb3a9bd4861454ba94931ebff410c3d828525dce2", 
      "logo": "https://assets.coingecko.com/coins/images/28903/thumb/WWlogoTransparent_200x200.png?1696527879", 
      "decimals": 18
    }, 
    {
      "name": "Sumer Money suUSD", 
      "abi": "ERC20_ABI", 
      "symbol": "SUUSD", 
      "priority": 3, 
      "address": "0x8bf591eae535f93a242d5a954d3cde648b48a5a8", 
      "logo": "https://assets.coingecko.com/coins/images/33266/thumb/Sumer_Money_Logo.jpg?1701321416", 
      "decimals": 18
    }, 
    {
      "name": "ritestream", 
      "abi": "ERC20_ABI", 
      "symbol": "RITE", 
      "priority": 3, 
      "address": "0x0808bf94d57c905f1236212654268ef82e1e594e", 
      "logo": "https://assets.coingecko.com/coins/images/24130/thumb/rite.png?1696523321", 
      "decimals": 18
    }, 
    {
      "name": "Dypius", 
      "abi": "ERC20_ABI", 
      "symbol": "DYP", 
      "priority": 3, 
      "address": "0x5b2124d427fac9c80c902cbdd74b03dd85d7d3fe", 
      "logo": "https://assets.coingecko.com/coins/images/33016/thumb/RS-zDhFE_400x400.jpg?1700157370", 
      "decimals": 18
    }, 
    {
      "name": "sUSDa", 
      "abi": "ERC20_ABI", 
      "symbol": "SUSDA", 
      "priority": 3, 
      "address": "0xd329f9a8589723357c36727a2d5e15974c835ccf", 
      "logo": "https://assets.coingecko.com/coins/images/51821/thumb/USDA.png?1732035172", 
      "decimals": 18
    }, 
    {
      "name": "Cryptex Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "CTX", 
      "priority": 3, 
      "address": "0xbb22ff867f8ca3d5f2251b4084f6ec86d4666e14", 
      "logo": "https://assets.coingecko.com/coins/images/14932/thumb/CTX_Logo_200px.png?1723514786", 
      "decimals": 18
    }, 
    {
      "name": "GALAXIS Token", 
      "abi": "ERC20_ABI", 
      "symbol": "GALAXIS", 
      "priority": 3, 
      "address": "0x2d189eabb667aa1ecfc01963a6a3a5d83960f558", 
      "logo": "https://assets.coingecko.com/coins/images/36221/thumb/500x500.png?1714755244", 
      "decimals": 18
    }, 
    {
      "name": "Maverick Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "MAV", 
      "priority": 3, 
      "address": "0x64b88c73a5dfa78d1713fe1b4c69a22d7e0faaa7", 
      "logo": "https://assets.coingecko.com/coins/images/30850/thumb/MAV_Logo.png?1696529701", 
      "decimals": 18
    }, 
    {
      "name": "Pog Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "POGS", 
      "priority": 3, 
      "address": "0x728f0a7fec1859cb0d71a432271d4e80310d235f", 
      "logo": "https://assets.coingecko.com/coins/images/37524/thumb/Untitled_design_%2860%29.png?1731815368", 
      "decimals": 18
    }, 
    {
      "name": "Axelar Bridged Frax Ether", 
      "abi": "ERC20_ABI", 
      "symbol": "AXLFRXETH", 
      "priority": 3, 
      "address": "0xecc68d0451e20292406967fe7c04280e5238ac7d", 
      "logo": "https://assets.coingecko.com/coins/images/38976/thumb/Screen_Shot_2024-06-18_at_12.55.54_PM_2.png?1719714886", 
      "decimals": 18
    }, 
    {
      "name": "Ionic Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "ION", 
      "priority": 3, 
      "address": "0x3ee5e23eee121094f1cfc0ccc79d6c809ebd22e5", 
      "logo": "https://assets.coingecko.com/coins/images/36713/thumb/Ionic-icon-green.png?1712127547", 
      "decimals": 18
    }, 
    {
      "name": "Backed ZPR1   1 3 Month T Bill", 
      "abi": "ERC20_ABI", 
      "symbol": "BZPR1", 
      "priority": 3, 
      "address": "0xade6057fcafa57d6d51ffa341c64ce4814995995", 
      "logo": "https://assets.coingecko.com/coins/images/32867/thumb/200p_bZPR1_3.png?1740625704", 
      "decimals": 18
    }, 
    {
      "name": "Hacken", 
      "abi": "ERC20_ABI", 
      "symbol": "HAI", 
      "priority": 3, 
      "address": "0x73e2a6320314883ff8cc08b53f1460a5f4c47f2c", 
      "logo": "https://assets.coingecko.com/coins/images/11081/thumb/hacken-symbol-with-bg.png?1696511022", 
      "decimals": 8
    }, 
    {
      "name": "Radiant Capital", 
      "abi": "ERC20_ABI", 
      "symbol": "RDNT", 
      "priority": 3, 
      "address": "0xd722e55c1d9d9fa0021a5215cbb904b92b3dc5d4", 
      "logo": "https://assets.coingecko.com/coins/images/26536/thumb/Radiant-Logo-200x200.png?1696525610", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped rsETH", 
      "abi": "ERC20_ABI", 
      "symbol": "WRSETH", 
      "priority": 3, 
      "address": "0xedfa23602d0ec14714057867a78d01e94176bea0", 
      "logo": "https://assets.coingecko.com/coins/images/37919/thumb/rseth.png?1715936438", 
      "decimals": 18
    }, 
    {
      "name": "Backed IB01   Treasury Bond 0 1yr", 
      "abi": "ERC20_ABI", 
      "symbol": "BIB01", 
      "priority": 3, 
      "address": "0xca30c93b02514f86d5c86a6e375e3a330b435fb5", 
      "logo": "https://assets.coingecko.com/coins/images/31755/thumb/200p_bIB01_3.png?1740504175", 
      "decimals": 18
    }, 
    {
      "name": "Alongside Crypto Market Index", 
      "abi": "ERC20_ABI", 
      "symbol": "AMKT", 
      "priority": 3, 
      "address": "0x13f4196cc779275888440b3000ae533bbbbc3166", 
      "logo": "https://assets.coingecko.com/coins/images/28496/thumb/22999.png?1696527488", 
      "decimals": 18
    }, 
    {
      "name": "Derive", 
      "abi": "ERC20_ABI", 
      "symbol": "DRV", 
      "priority": 3, 
      "address": "0x9d0e8f5b25384c7310cb8c6ae32c8fbeb645d083", 
      "logo": "https://assets.coingecko.com/coins/images/52889/thumb/Token_Logo.png?1734601695", 
      "decimals": 18
    }, 
    {
      "name": "Liquity USD", 
      "abi": "ERC20_ABI", 
      "symbol": "LUSD", 
      "priority": 3, 
      "address": "0x368181499736d0c0cc614dbb145e2ec1ac86b8c6", 
      "logo": "https://assets.coingecko.com/coins/images/14666/thumb/Group_3.png?1696514341", 
      "decimals": 18
    }, 
    {
      "name": "GammaSwap", 
      "abi": "ERC20_ABI", 
      "symbol": "GS", 
      "priority": 3, 
      "address": "0xc4d44c155f95fd4e94600d191a4a01bb571df7df", 
      "logo": "https://assets.coingecko.com/coins/images/29222/thumb/newLogo2.png?1731702645", 
      "decimals": 18
    }, 
    {
      "name": "Lava Network", 
      "abi": "ERC20_ABI", 
      "symbol": "LAVA", 
      "priority": 3, 
      "address": "0x11e969e9b3f89cb16d686a03cd8508c9fc0361af", 
      "logo": "https://assets.coingecko.com/coins/images/37354/thumb/lava_logo.png?1714098423", 
      "decimals": 6
    }, 
    {
      "name": "AstroPepeX", 
      "abi": "ERC20_ABI", 
      "symbol": "APX", 
      "priority": 3, 
      "address": "0xcacf1ca03983ce6c7e235fb20c70acc70ed13509", 
      "logo": "https://assets.coingecko.com/coins/images/31839/thumb/astropepexcoingecko.png?1731814766", 
      "decimals": 18
    }, 
    {
      "name": "KiboShib", 
      "abi": "ERC20_ABI", 
      "symbol": "KIBSHI", 
      "priority": 3, 
      "address": "0xc7dcca0a3e69bd762c8db257f868f76be36c8514", 
      "logo": "https://assets.coingecko.com/coins/images/29335/thumb/foto_no_exif_%2811%29%282%29_%281%29.png?1696528285", 
      "decimals": 18
    }, 
    {
      "name": "Moonwell", 
      "abi": "ERC20_ABI", 
      "symbol": "WELL", 
      "priority": 3, 
      "address": "0xa88594d404727625a9437c3f886c7643872296ae", 
      "logo": "https://assets.coingecko.com/coins/images/26133/thumb/WELL.png?1696525221", 
      "decimals": 18
    }, 
    {
      "name": "Anzen Staked USDz", 
      "abi": "ERC20_ABI", 
      "symbol": "SUSDZ", 
      "priority": 3, 
      "address": "0xe31ee12bdfdd0573d634124611e85338e2cbf0cf", 
      "logo": "https://assets.coingecko.com/coins/images/38040/thumb/susdz-symbol-200x200.png?1716334492", 
      "decimals": 18
    }, 
    {
      "name": "Braintrust", 
      "abi": "ERC20_ABI", 
      "symbol": "BTRST", 
      "priority": 3, 
      "address": "0xa7d68d155d17cb30e311367c2ef1e82ab6022b67", 
      "logo": "https://assets.coingecko.com/coins/images/18100/thumb/braintrust.PNG?1696517605", 
      "decimals": 18
    }, 
    {
      "name": "Shrub", 
      "abi": "ERC20_ABI", 
      "symbol": "SHRUB", 
      "priority": 3, 
      "address": "0x1eefd52f6e218f262da7b0089b9e343a1eb5c9f4", 
      "logo": "https://assets.coingecko.com/coins/images/38880/thumb/photo_2024-11-13_23.58.11.png?1731575427", 
      "decimals": 18
    }, 
    {
      "name": "Dinari RIOT", 
      "abi": "ERC20_ABI", 
      "symbol": "RIOTD", 
      "priority": 3, 
      "address": "0xbd042b930d40326f18fc19693adabc9457d4af7f", 
      "logo": "https://assets.coingecko.com/coins/images/39812/thumb/RIOT.d-200.png?1724166370", 
      "decimals": 18
    }, 
    {
      "name": "Dinari GME", 
      "abi": "ERC20_ABI", 
      "symbol": "GMED", 
      "priority": 3, 
      "address": "0x2bb9282552228734cca01a1671605122258e276a", 
      "logo": "https://assets.coingecko.com/coins/images/39619/thumb/Dinari-token-icon.png?1723148884", 
      "decimals": 18
    }, 
    {
      "name": "Aura Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "AURA", 
      "priority": 3, 
      "address": "0x1509706a6c66ca549ff0cb464de88231ddbe213b", 
      "logo": "https://assets.coingecko.com/coins/images/25942/thumb/logo.png?1696525021", 
      "decimals": 18
    }, 
    {
      "name": "BlockAI", 
      "abi": "ERC20_ABI", 
      "symbol": "BAI", 
      "priority": 3, 
      "address": "0x6a27cd26a373530835b9fe7ac472b3e080070f64", 
      "logo": "https://assets.coingecko.com/coins/images/39638/thumb/logo-200x200-transparent-bg.png?1723278224", 
      "decimals": 18
    }, 
    {
      "name": "MAGA", 
      "abi": "ERC20_ABI", 
      "symbol": "TRUMP", 
      "priority": 3, 
      "address": "0x57f5fbd3de65dfc0bd3630f732969e5fb97e6d37", 
      "logo": "https://assets.coingecko.com/coins/images/31498/thumb/Maga-Trump-Logo-200px.png?1696530309", 
      "decimals": 9
    }, 
    {
      "name": "sUSDS", 
      "abi": "ERC20_ABI", 
      "symbol": "SUSDS", 
      "priority": 3, 
      "address": "0x5875eee11cf8398102fdad704c9e96607675467a", 
      "logo": "https://assets.coingecko.com/coins/images/52721/thumb/sUSDS_Coin.png?1734086971", 
      "decimals": 18
    }, 
    {
      "name": "Magnify Cash", 
      "abi": "ERC20_ABI", 
      "symbol": "MAG", 
      "priority": 3, 
      "address": "0x59f680f431f5280e7662b96f2dfa195d1693852d", 
      "logo": "https://assets.coingecko.com/coins/images/38992/thumb/Profile_pic.PNG?1739943591", 
      "decimals": 18
    }, 
    {
      "name": "Heurist", 
      "abi": "ERC20_ABI", 
      "symbol": "HEU", 
      "priority": 3, 
      "address": "0xef22cb48b8483df6152e1423b19df5553bbd818b", 
      "logo": "https://assets.coingecko.com/coins/images/51361/thumb/200X200.png?1733764636", 
      "decimals": 18
    }, 
    {
      "name": "TAIKAI", 
      "abi": "ERC20_ABI", 
      "symbol": "TKAI", 
      "priority": 3, 
      "address": "0x1287a235474e0331c0975e373bdd066444d1bd35", 
      "logo": "https://assets.coingecko.com/coins/images/34827/thumb/TKAI.jpg?1706191900", 
      "decimals": 18
    }, 
    {
      "name": "CHEX Token", 
      "abi": "ERC20_ABI", 
      "symbol": "CHEX", 
      "priority": 3, 
      "address": "0xc43f3ae305a92043bd9b62ebd2fe14f7547ee485", 
      "logo": "https://assets.coingecko.com/coins/images/10349/thumb/logo-white-bg-dark.png?1733475849", 
      "decimals": 18
    }, 
    {
      "name": "Sovrun", 
      "abi": "ERC20_ABI", 
      "symbol": "SOVRN", 
      "priority": 3, 
      "address": "0xca4c2e10037ac1af9f501ecb11a710776c87d2d5", 
      "logo": "https://assets.coingecko.com/coins/images/52312/thumb/IMG_20241202_183145_081.jpg?1733135740", 
      "decimals": 18
    }, 
    {
      "name": "DOVU", 
      "abi": "ERC20_ABI", 
      "symbol": "DOVU", 
      "priority": 3, 
      "address": "0xb38266e0e9d9681b77aeb0a280e98131b953f865", 
      "logo": "https://assets.coingecko.com/coins/images/31930/thumb/Dovu_Icon_Black_%281%29.png?1696530738", 
      "decimals": 8
    }, 
    {
      "name": "Nova DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "NOVA", 
      "priority": 3, 
      "address": "0x7cea109fc3516ed1248ae9aa67b5a352cf74075e", 
      "logo": "https://assets.coingecko.com/coins/images/34464/thumb/200x200_nova.png?1704965570", 
      "decimals": 18
    }, 
    {
      "name": "AthenaDAO", 
      "abi": "ERC20_ABI", 
      "symbol": "ATH", 
      "priority": 3, 
      "address": "0x58d75a1c4477914f9a98a8708feaed1dbe40b8a3", 
      "logo": "https://assets.coingecko.com/coins/images/33349/thumb/ATH_Token_Black_Logo.png?1701981879", 
      "decimals": 18
    }, 
    {
      "name": "AlphaKEK AI", 
      "abi": "ERC20_ABI", 
      "symbol": "AIKEK", 
      "priority": 3, 
      "address": "0x681a09a902d9c7445b3b1ab282c38d60c72f1f09", 
      "logo": "https://assets.coingecko.com/coins/images/35445/thumb/alphakek_-_Copy.png?1708620097", 
      "decimals": 18
    }, 
    {
      "name": "Mynth", 
      "abi": "ERC20_ABI", 
      "symbol": "MNT", 
      "priority": 3, 
      "address": "0x26d3c0d9f4cc4c130097b6afdebe4f5e497e6bdf", 
      "logo": "https://assets.coingecko.com/coins/images/50513/thumb/mynth-token.png?1728031157", 
      "decimals": 6
    }, 
    {
      "name": "Yup", 
      "abi": "ERC20_ABI", 
      "symbol": "YUP", 
      "priority": 3, 
      "address": "0x01ccf4941298a0b5ac4714c0e1799a2df8387048", 
      "logo": "https://assets.coingecko.com/coins/images/12322/thumb/photo_2021-10-26_00-47-35.jpg?1696512151", 
      "decimals": 18
    }, 
    {
      "name": "Spot", 
      "abi": "ERC20_ABI", 
      "symbol": "SPOT", 
      "priority": 3, 
      "address": "0x8f2e6758c4d6570344bd5007dec6301cd57590a0", 
      "logo": "https://assets.coingecko.com/coins/images/28426/thumb/SPOT_Logo_200x200_sq_small_centered.png?1696527423", 
      "decimals": 9
    }, 
    {
      "name": "HarambeCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "HARAMBE", 
      "priority": 3, 
      "address": "0x255f1b39172f65dc6406b8bee8b08155c45fe1b6", 
      "logo": "https://assets.coingecko.com/coins/images/36043/thumb/HarambeCoin_full_cameo_200.png?1710400612", 
      "decimals": 18
    }, 
    {
      "name": "crvUSD", 
      "abi": "ERC20_ABI", 
      "symbol": "CRVUSD", 
      "priority": 3, 
      "address": "0x417ac0e078398c154edfadd9ef675d30be60af93", 
      "logo": "https://assets.coingecko.com/coins/images/30118/thumb/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e.png?1721097561", 
      "decimals": 18
    }, 
    {
      "name": "Backed MicroStrategy", 
      "abi": "ERC20_ABI", 
      "symbol": "BMSTR", 
      "priority": 3, 
      "address": "0xac28c9178acc8ba4a11a29e013a3a2627086e422", 
      "logo": "https://assets.coingecko.com/coins/images/38914/thumb/bMSTR_200p.png?1740041420", 
      "decimals": 18
    }, 
    {
      "name": "Legend", 
      "abi": "ERC20_ABI", 
      "symbol": "LEGEND", 
      "priority": 3, 
      "address": "0xc7837be3d71e00fcbe76d77602bcf353df859664", 
      "logo": "https://assets.coingecko.com/coins/images/53648/thumb/O4mqYoXG_400x400.jpg?1736983095", 
      "decimals": 18
    }, 
    {
      "name": "Backed Alphabet Class A", 
      "abi": "ERC20_ABI", 
      "symbol": "BGOOGL", 
      "priority": 3, 
      "address": "0xebee37aaf2905b7bda7e3b928043862e982e8f32", 
      "logo": "https://assets.coingecko.com/coins/images/38913/thumb/200p_bGOOGL_3.png?1740503052", 
      "decimals": 18
    }, 
    {
      "name": "Byte", 
      "abi": "ERC20_ABI", 
      "symbol": "BYTE", 
      "priority": 3, 
      "address": "0xe095780ba2a64a4efa7a74830f0b71656f0b0ad4", 
      "logo": "https://assets.coingecko.com/coins/images/33527/thumb/Byte200.jpeg?1702138460", 
      "decimals": 9
    }, 
    {
      "name": "LimeWire", 
      "abi": "ERC20_ABI", 
      "symbol": "LMWR", 
      "priority": 3, 
      "address": "0xe997017e0cb0ceb503565f181e9ea922cd979c35", 
      "logo": "https://assets.coingecko.com/coins/images/30356/thumb/LimeWire_Logo_Icon_200x200_%281%29.png?1696529256", 
      "decimals": 18
    }, 
    {
      "name": "TRUF Network", 
      "abi": "ERC20_ABI", 
      "symbol": "TRUF", 
      "priority": 3, 
      "address": "0xb59c8912c83157a955f9d715e556257f432c35d7", 
      "logo": "https://assets.coingecko.com/coins/images/36642/thumb/truflation.jpg?1733315818", 
      "decimals": 18
    }, 
    {
      "name": "Croginal Cats", 
      "abi": "ERC20_ABI", 
      "symbol": "CROGINAL", 
      "priority": 3, 
      "address": "0x56f6f2a23ae5ef82d8dc46934f7cf8d0b15ddedd", 
      "logo": "https://assets.coingecko.com/coins/images/39333/thumb/croginalcoin.png?1721793281", 
      "decimals": 18
    }, 
    {
      "name": "Backed Microsoft", 
      "abi": "ERC20_ABI", 
      "symbol": "BMSFT", 
      "priority": 3, 
      "address": "0x374a457967ba24fd3ae66294cab08244185574b0", 
      "logo": "https://assets.coingecko.com/coins/images/38915/thumb/200p_bMSFT_3.png?1740503035", 
      "decimals": 18
    }, 
    {
      "name": "Department Of Government Efficiency", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGE", 
      "priority": 3, 
      "address": "0x67f0870bb897f5e1c369976b4a2962d527b9562c", 
      "logo": "https://assets.coingecko.com/coins/images/39841/thumb/IMG_9775.PNG?1729771739", 
      "decimals": 18
    }, 
    {
      "name": "pSTAKE Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "PSTAKE", 
      "priority": 3, 
      "address": "0x38815a4455921667d673b4cb3d48f0383ee93400", 
      "logo": "https://assets.coingecko.com/coins/images/23931/thumb/512_x_512_Dark.png?1721243699", 
      "decimals": 18
    }, 
    {
      "name": "Swarm Markets", 
      "abi": "ERC20_ABI", 
      "symbol": "SMT", 
      "priority": 3, 
      "address": "0x2974dc646e375e83bd1c0342625b49f288987fa4", 
      "logo": "https://assets.coingecko.com/coins/images/17488/thumb/swarm-SMT-token-symbol_200x200.png?1696517029", 
      "decimals": 18
    }, 
    {
      "name": "MANTRA", 
      "abi": "ERC20_ABI", 
      "symbol": "OM", 
      "priority": 3, 
      "address": "0x3992b27da26848c2b19cea6fd25ad5568b68ab98", 
      "logo": "https://assets.coingecko.com/coins/images/12151/thumb/OM_Token.png?1696511991", 
      "decimals": 18
    }, 
    {
      "name": "POKO", 
      "abi": "ERC20_ABI", 
      "symbol": "POKO", 
      "priority": 3, 
      "address": "0xf7263070440677f8458a2c1414b2400e3accb531", 
      "logo": "https://assets.coingecko.com/coins/images/36802/thumb/poko_logo.png?1712469618", 
      "decimals": 9
    }, 
    {
      "name": "Mozaic", 
      "abi": "ERC20_ABI", 
      "symbol": "MOZ", 
      "priority": 3, 
      "address": "0xc227717ef4ae4d982e14789eb33ba942243c3fee", 
      "logo": "https://assets.coingecko.com/coins/images/30100/thumb/Main_Logo_1-200x200jpg.jpg?1696529024", 
      "decimals": 18
    }, 
    {
      "name": "Sonne Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "SONNE", 
      "priority": 3, 
      "address": "0x22a2488fe295047ba13bd8cccdbc8361dbd8cf7c", 
      "logo": "https://assets.coingecko.com/coins/images/27540/thumb/Token1.png?1696526577", 
      "decimals": 18
    }, 
    {
      "name": "IYKYK", 
      "abi": "ERC20_ABI", 
      "symbol": "IYKYK", 
      "priority": 3, 
      "address": "0xb00d803cb2367a7da82351dcb9d213230da7b92a", 
      "logo": "https://assets.coingecko.com/coins/images/30022/thumb/iykyk200.png?1696528946", 
      "decimals": 18
    }, 
    {
      "name": "XCAD Network", 
      "abi": "ERC20_ABI", 
      "symbol": "XCAD", 
      "priority": 3, 
      "address": "0x750cf88d9e0c2bcedeec31d5faad6ed6e3f1abc6", 
      "logo": "https://assets.coingecko.com/coins/images/15857/thumb/xcad_logo.jpg?1707832192", 
      "decimals": 18
    }, 
    {
      "name": "Basket", 
      "abi": "ERC20_ABI", 
      "symbol": "BSKT", 
      "priority": 3, 
      "address": "0x7ccdba6198db389cf37b714fd6573b73f3670236", 
      "logo": "https://assets.coingecko.com/coins/images/34661/thumb/BSKT_Logo.png?1705636891", 
      "decimals": 5
    }, 
    {
      "name": "Dinari RDDT", 
      "abi": "ERC20_ABI", 
      "symbol": "RDDTD", 
      "priority": 3, 
      "address": "0xa17c0e96c8b5e39b6fd670f01d7f021f66b930cd", 
      "logo": "https://assets.coingecko.com/coins/images/39618/thumb/Dinari-token-icon.png?1723148750", 
      "decimals": 18
    }, 
    {
      "name": "Zeebu", 
      "abi": "ERC20_ABI", 
      "symbol": "ZBU", 
      "priority": 3, 
      "address": "0x2c8c89c442436cc6c0a77943e09c8daf49da3161", 
      "logo": "https://assets.coingecko.com/coins/images/31145/thumb/200x200_Front_token.png?1696529974", 
      "decimals": 18
    }, 
    {
      "name": "Miracle Play", 
      "abi": "ERC20_ABI", 
      "symbol": "MPT", 
      "priority": 3, 
      "address": "0xf2d3d488626a117984fda70f8106abc0049018d3", 
      "logo": "https://assets.coingecko.com/coins/images/32653/thumb/MPT.png?1698895300", 
      "decimals": 18
    }, 
    {
      "name": "Backed NVIDIA", 
      "abi": "ERC20_ABI", 
      "symbol": "BNVDA", 
      "priority": 3, 
      "address": "0xa34c5e0abe843e10461e2c9586ea03e55dbcc495", 
      "logo": "https://assets.coingecko.com/coins/images/38911/thumb/bNVDA_200p.png?1740041447", 
      "decimals": 18
    }, 
    {
      "name": "SPX6900", 
      "abi": "ERC20_ABI", 
      "symbol": "SPX", 
      "priority": 3, 
      "address": "0x50da645f148798f68ef2d7db7c1cb22a6819bb2c", 
      "logo": "https://assets.coingecko.com/coins/images/31401/thumb/centeredcoin_%281%29.png?1737048493", 
      "decimals": 8
    }, 
    {
      "name": "GnomeLand", 
      "abi": "ERC20_ABI", 
      "symbol": "GNOME", 
      "priority": 3, 
      "address": "0x42069d11a2cc72388a2e06210921e839cfbd3280", 
      "logo": "https://assets.coingecko.com/coins/images/35201/thumb/logopng.png?1707841763", 
      "decimals": 18
    }, 
    {
      "name": "Mog Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "MOG", 
      "priority": 3, 
      "address": "0x2da56acb9ea78330f947bd57c54119debda7af71", 
      "logo": "https://assets.coingecko.com/coins/images/31059/thumb/MOG_LOGO_200x200.png?1696529893", 
      "decimals": 18
    }, 
    {
      "name": "XSwap", 
      "abi": "ERC20_ABI", 
      "symbol": "XSWAP", 
      "priority": 3, 
      "address": "0x8fe815417913a93ea99049fc0718ee1647a2a07c", 
      "logo": "https://assets.coingecko.com/coins/images/36000/thumb/XSwap_Icon_%282%29.png?1710320467", 
      "decimals": 18
    }, 
    {
      "name": "Jarvis", 
      "abi": "ERC20_ABI", 
      "symbol": "JARVIS", 
      "priority": 3, 
      "address": "0x777b2839832982b35213063d850848369390ee16", 
      "logo": "https://assets.coingecko.com/coins/images/35812/thumb/jarvis.png?1709873633", 
      "decimals": 18
    }, 
    {
      "name": "Molten", 
      "abi": "ERC20_ABI", 
      "symbol": "MOLTEN", 
      "priority": 3, 
      "address": "0x66e535e8d2ebf13f49f3d49e5c50395a97c137b1", 
      "logo": "https://assets.coingecko.com/coins/images/36726/thumb/moltenmesh.png?1712147407", 
      "decimals": 18
    }, 
    {
      "name": "MorpheusAI", 
      "abi": "ERC20_ABI", 
      "symbol": "MOR", 
      "priority": 3, 
      "address": "0x7431ada8a591c955a994a21710752ef9b882b8e3", 
      "logo": "https://assets.coingecko.com/coins/images/37969/thumb/MOR200X200.png?1716327119", 
      "decimals": 18
    }, 
    {
      "name": "ZARP Stablecoin", 
      "abi": "ERC20_ABI", 
      "symbol": "ZARP", 
      "priority": 3, 
      "address": "0xb755506531786c8ac63b756bab1ac387bacb0c04", 
      "logo": "https://assets.coingecko.com/coins/images/27333/thumb/zarp_coin.png?1696526381", 
      "decimals": 18
    }, 
    {
      "name": "Decubate", 
      "abi": "ERC20_ABI", 
      "symbol": "DCB", 
      "priority": 3, 
      "address": "0x06d998a2c64caf9feb2caf3ca8872740ef013122", 
      "logo": "https://assets.coingecko.com/coins/images/16909/thumb/Logo-Decubate_200x200.png?1696516480", 
      "decimals": 18
    }, 
    {
      "name": "Media Network", 
      "abi": "ERC20_ABI", 
      "symbol": "MEDIA", 
      "priority": 3, 
      "address": "0x6e51b3a19f114013e5dc09d0477a536c7e4e0207", 
      "logo": "https://assets.coingecko.com/coins/images/15142/thumb/media50x50.png?1696514798", 
      "decimals": 18
    }, 
    {
      "name": "Pocket Network", 
      "abi": "ERC20_ABI", 
      "symbol": "POKT", 
      "priority": 3, 
      "address": "0x764a726d9ced0433a8d7643335919deb03a9a935", 
      "logo": "https://assets.coingecko.com/coins/images/22506/thumb/POKT.jpg?1703257310", 
      "decimals": 6
    }, 
    {
      "name": "dHEDGE DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "DHT", 
      "priority": 3, 
      "address": "0x54bc229d1cb15f8b6415efeab4290a40bc8b7d84", 
      "logo": "https://assets.coingecko.com/coins/images/12508/thumb/dht.png?1696512323", 
      "decimals": 18
    }, 
    {
      "name": "Balancer", 
      "abi": "ERC20_ABI", 
      "symbol": "BAL", 
      "priority": 3, 
      "address": "0x4158734d47fc9692176b5085e0f52ee0da5d47f1", 
      "logo": "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png?1696511572", 
      "decimals": 18
    }, 
    {
      "name": "Guru Network", 
      "abi": "ERC20_ABI", 
      "symbol": "GURU", 
      "priority": 3, 
      "address": "0x0f1cfd0bb452db90a3bfc0848349463010419ab2", 
      "logo": "https://assets.coingecko.com/coins/images/38583/thumb/tGURU_token_circle.png?1718087986", 
      "decimals": 18
    }, 
    {
      "name": "Avail", 
      "abi": "ERC20_ABI", 
      "symbol": "AVAIL", 
      "priority": 3, 
      "address": "0xd89d90d26b48940fa8f58385fe84625d468e057a", 
      "logo": "https://assets.coingecko.com/coins/images/37372/thumb/avail-logo.png?1714145201", 
      "decimals": 18
    }, 
    {
      "name": "Quad Terminal", 
      "abi": "ERC20_ABI", 
      "symbol": "QUAD", 
      "priority": 3, 
      "address": "0x9a54ed8d4343e8d89477285a5a0ca06be4051dda", 
      "logo": "https://assets.coingecko.com/coins/images/21364/thumb/GkMXE_7A_400x400.png?1696520730", 
      "decimals": 18
    }, 
    {
      "name": "Lombard Staked BTC", 
      "abi": "ERC20_ABI", 
      "symbol": "LBTC", 
      "priority": 3, 
      "address": "0xecac9c5f704e954931349da37f60e39f515c11c1", 
      "logo": "https://assets.coingecko.com/coins/images/39969/thumb/LBTC_Logo.png?1724959872", 
      "decimals": 8
    }, 
    {
      "name": "Ajna Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "AJNA", 
      "priority": 3, 
      "address": "0x7f05a7a9af2f5a07d1e64877c8dc37a64a22508e", 
      "logo": "https://assets.coingecko.com/coins/images/30187/thumb/AJNA-Icon-200.png?1696529105", 
      "decimals": 18
    }, 
    {
      "name": "DataGold", 
      "abi": "ERC20_ABI", 
      "symbol": "DGOLD", 
      "priority": 3, 
      "address": "0xd91d07e4949a858d29005d339610db2402ef5b73", 
      "logo": "https://assets.coingecko.com/coins/images/52431/thumb/dGOLD-square-navy.png?1733436522", 
      "decimals": 18
    }, 
    {
      "name": "Katana Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "KATA", 
      "priority": 3, 
      "address": "0x02454a97a8372f3a760a033dbb39e67d73bd6d87", 
      "logo": "https://assets.coingecko.com/coins/images/21872/thumb/Katana_Inu512.png?1696521226", 
      "decimals": 18
    }, 
    {
      "name": "DOSE", 
      "abi": "ERC20_ABI", 
      "symbol": "DOSE", 
      "priority": 3, 
      "address": "0x455234ab787665a219125235fb01b22b512dfcaa", 
      "logo": "https://assets.coingecko.com/coins/images/18847/thumb/dose.PNG?1696518308", 
      "decimals": 18
    }, 
    {
      "name": "GAM3S GG", 
      "abi": "ERC20_ABI", 
      "symbol": "G3", 
      "priority": 3, 
      "address": "0xcf67815cce72e682eb4429eca46843bed81ca739", 
      "logo": "https://assets.coingecko.com/coins/images/35662/thumb/G3_logo.jpg?1709454143", 
      "decimals": 18
    }, 
    {
      "name": "XRGB", 
      "abi": "ERC20_ABI", 
      "symbol": "XRGB", 
      "priority": 3, 
      "address": "0x5cc5e64ab764a0f1e97f23984e20fd4528356a6a", 
      "logo": "https://assets.coingecko.com/coins/images/35447/thumb/log2.png?1708620430", 
      "decimals": 18
    }, 
    {
      "name": "axlWBTC", 
      "abi": "ERC20_ABI", 
      "symbol": "AXLWBTC", 
      "priority": 3, 
      "address": "0x1a35ee4640b0a3b87705b0a4b45d227ba60ca2ad", 
      "logo": "https://assets.coingecko.com/coins/images/28173/thumb/wbtc-satoshi_D_3x.png?1696986732", 
      "decimals": 8
    }, 
    {
      "name": "Coinbase Wrapped Staked ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "CBETH", 
      "priority": 3, 
      "address": "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22", 
      "logo": "https://assets.coingecko.com/coins/images/27008/thumb/cbeth.png?1709186989", 
      "decimals": 18
    }, 
    {
      "name": "Overnight fi DAI ", 
      "abi": "ERC20_ABI", 
      "symbol": "DAI+", 
      "priority": 3, 
      "address": "0x65a2508c429a6078a7bc2f7df81ab575bd9d9275", 
      "logo": "https://assets.coingecko.com/coins/images/29634/thumb/DAI_.png?1696528571", 
      "decimals": 18
    }, 
    {
      "name": "Zoomer", 
      "abi": "ERC20_ABI", 
      "symbol": "ZOOMER", 
      "priority": 3, 
      "address": "0xd1db4851bcf5b41442caa32025ce0afe6b8eabc2", 
      "logo": "https://assets.coingecko.com/coins/images/30894/thumb/zoooooooooomer.jpg?1696529740", 
      "decimals": 18
    }, 
    {
      "name": "UNKJD", 
      "abi": "ERC20_ABI", 
      "symbol": "MBS", 
      "priority": 3, 
      "address": "0x8fbd0648971d56f1f2c35fa075ff5bc75fb0e39d", 
      "logo": "https://assets.coingecko.com/coins/images/20841/thumb/monkeyball.png?1696520233", 
      "decimals": 18
    }, 
    {
      "name": "Tower", 
      "abi": "ERC20_ABI", 
      "symbol": "TOWER", 
      "priority": 3, 
      "address": "0xf7c1cefcf7e1dd8161e00099facd3e1db9e528ee", 
      "logo": "https://assets.coingecko.com/coins/images/14134/thumb/tower-circular-1000.png?1696513854", 
      "decimals": 18
    }, 
    {
      "name": "Rogue MAV", 
      "abi": "ERC20_ABI", 
      "symbol": "RMAV", 
      "priority": 3, 
      "address": "0x8f0f56472c3e5730b1ea2f444e7829288da261e6", 
      "logo": "https://assets.coingecko.com/coins/images/32384/thumb/rMAV.png?1698045143", 
      "decimals": 18
    }, 
    {
      "name": "tBTC", 
      "abi": "ERC20_ABI", 
      "symbol": "TBTC", 
      "priority": 3, 
      "address": "0x236aa50979d5f3de3bd1eeb40e81137f22ab794b", 
      "logo": "https://assets.coingecko.com/coins/images/11224/thumb/0x18084fba666a33d37592fa2633fd49a74dd93a88.png?1696511155", 
      "decimals": 18
    }, 
    {
      "name": "PAW", 
      "abi": "ERC20_ABI", 
      "symbol": "PAW", 
      "priority": 3, 
      "address": "0xc11158c5da9db1d553ed28f0c2ba1cbedd42cfcb", 
      "logo": "https://assets.coingecko.com/coins/images/28946/thumb/PAW.png?1738485222", 
      "decimals": 18
    }, 
    {
      "name": "Echelon Prime", 
      "abi": "ERC20_ABI", 
      "symbol": "PRIME", 
      "priority": 3, 
      "address": "0xfa980ced6895ac314e7de34ef1bfae90a5add21b", 
      "logo": "https://assets.coingecko.com/coins/images/29053/thumb/prime-logo-small-border_%282%29.png?1696528020", 
      "decimals": 18
    }, 
    {
      "name": "ECOMI", 
      "abi": "ERC20_ABI", 
      "symbol": "OMI", 
      "priority": 3, 
      "address": "0x3792dbdd07e87413247df995e692806aa13d3299", 
      "logo": "https://assets.coingecko.com/coins/images/4428/thumb/ECOMI.png?1696505023", 
      "decimals": 18
    }, 
    {
      "name": "iZUMi Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "IZI", 
      "priority": 3, 
      "address": "0x60d01ec2d5e98ac51c8b4cf84dfcce98d527c747", 
      "logo": "https://assets.coingecko.com/coins/images/21791/thumb/izumi-logo-symbol.png?1696521144", 
      "decimals": 18
    }, 
    {
      "name": "Hokkaidu Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "HOKK", 
      "priority": 3, 
      "address": "0xd857af86a2c5b4f46fc7cb8032bd4f5625577eeb", 
      "logo": "https://assets.coingecko.com/coins/images/34890/thumb/IMG29529FNM3.png?1710943740", 
      "decimals": 9
    }, 
    {
      "name": "Ethlas", 
      "abi": "ERC20_ABI", 
      "symbol": "ELS", 
      "priority": 3, 
      "address": "0x7f62ac1e974d65fab4a81821ca6af659a5f46298", 
      "logo": "https://assets.coingecko.com/coins/images/30331/thumb/ELS_Logo_200x200.png?1696529232", 
      "decimals": 18
    }, 
    {
      "name": "Reserve Rights", 
      "abi": "ERC20_ABI", 
      "symbol": "RSR", 
      "priority": 3, 
      "address": "0xab36452dbac151be02b16ca17d8919826072f64a", 
      "logo": "https://assets.coingecko.com/coins/images/8365/thumb/RSR_Blue_Circle_1000.png?1721777856", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped Ampleforth", 
      "abi": "ERC20_ABI", 
      "symbol": "WAMPL", 
      "priority": 3, 
      "address": "0x489fe42c267fe0366b16b0c39e7aeef977e841ef", 
      "logo": "https://assets.coingecko.com/coins/images/20825/thumb/photo_2021-11-25_02-05-11.jpg?1696520218", 
      "decimals": 18
    }, 
    {
      "name": "Artificial Liquid Intelligence", 
      "abi": "ERC20_ABI", 
      "symbol": "ALI", 
      "priority": 3, 
      "address": "0x97c806e7665d3afd84a8fe1837921403d59f3dcc", 
      "logo": "https://assets.coingecko.com/coins/images/22062/thumb/ALI-v2.webp?1728501978", 
      "decimals": 18
    }, 
    {
      "name": "Ethos Reserve Note", 
      "abi": "ERC20_ABI", 
      "symbol": "ERN", 
      "priority": 3, 
      "address": "0xa334884bf6b0a066d553d19e507315e839409e62", 
      "logo": "https://assets.coingecko.com/coins/images/29744/thumb/ERN200x200.png?1696528676", 
      "decimals": 18
    }, 
    {
      "name": "Sharbi", 
      "abi": "ERC20_ABI", 
      "symbol": "SHARBI", 
      "priority": 3, 
      "address": "0x5a75a61032143575067de2b38ef38d601976091e", 
      "logo": "https://assets.coingecko.com/coins/images/29075/thumb/Sharbi_New_Logo_200x200.png?1712686416", 
      "decimals": 18
    }, 
    {
      "name": "TRIBAL", 
      "abi": "ERC20_ABI", 
      "symbol": "TRIBAL", 
      "priority": 3, 
      "address": "0xe13e40e8fdb815fbc4a1e2133ab5588c33bac45d", 
      "logo": "https://assets.coingecko.com/coins/images/38531/thumb/7pc8ov67182ddpbqjnff20ik4oye.png?1733194448", 
      "decimals": 18
    }, 
    {
      "name": "SpunkySDX", 
      "abi": "ERC20_ABI", 
      "symbol": "SSDX", 
      "priority": 3, 
      "address": "0x62bba099edd65740c0d192ffe84973b1aae682d2", 
      "logo": "https://assets.coingecko.com/coins/images/52469/thumb/spunkysdx.png?1733412208", 
      "decimals": 18
    }, 
    {
      "name": "Hop Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "HOP", 
      "priority": 3, 
      "address": "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc", 
      "logo": "https://assets.coingecko.com/coins/images/25445/thumb/hop.png?1696524577", 
      "decimals": 18
    }, 
    {
      "name": "USDS", 
      "abi": "ERC20_ABI", 
      "symbol": "USDS", 
      "priority": 3, 
      "address": "0x820c137fa70c8691f0e44dc420a5e53c168921dc", 
      "logo": "https://assets.coingecko.com/coins/images/39926/thumb/usds.webp?1726666683", 
      "decimals": 18
    }, 
    {
      "name": "Shark Cat", 
      "abi": "ERC20_ABI", 
      "symbol": "SC", 
      "priority": 3, 
      "address": "0x49d803d2df2295185610f44961f2dcd40326f25c", 
      "logo": "https://assets.coingecko.com/coins/images/36562/thumb/shark.jpeg?1715148291", 
      "decimals": 18
    }, 
    {
      "name": "Staked BIFI", 
      "abi": "ERC20_ABI", 
      "symbol": "MOOBIFI", 
      "priority": 3, 
      "address": "0xc55e93c62874d8100dbd2dfe307edc1036ad5434", 
      "logo": "https://assets.coingecko.com/coins/images/32597/thumb/319381e63428d3c2ab6e035d5f3abd76.png?1698682355", 
      "decimals": 18
    }, 
    {
      "name": "FOAM", 
      "abi": "ERC20_ABI", 
      "symbol": "FOAM", 
      "priority": 3, 
      "address": "0x6059d0ed9368c36941514d2864fd114a84853d5a", 
      "logo": "https://assets.coingecko.com/coins/images/3345/thumb/K51lJQc.png?1696504049", 
      "decimals": 18
    }, 
    {
      "name": "Midas mBASIS", 
      "abi": "ERC20_ABI", 
      "symbol": "MBASIS", 
      "priority": 3, 
      "address": "0x1c2757c1fef1038428b5bef062495ce94bbe92b2", 
      "logo": "https://assets.coingecko.com/coins/images/50593/thumb/mBASIS_logo.png?1728444389", 
      "decimals": 18
    }, 
    {
      "name": "Midas mTBILL", 
      "abi": "ERC20_ABI", 
      "symbol": "MTBILL", 
      "priority": 3, 
      "address": "0xdd629e5241cbc5919847783e6c96b2de4754e438", 
      "logo": "https://assets.coingecko.com/coins/images/37839/thumb/mTBILL_token.png?1728417279", 
      "decimals": 18
    }, 
    {
      "name": "Skibidi Dop Dop", 
      "abi": "ERC20_ABI", 
      "symbol": "SKIBIDI", 
      "priority": 3, 
      "address": "0xf09930625447d6a5f8e1217edb5649c7314e4e96", 
      "logo": "https://assets.coingecko.com/coins/images/52594/thumb/skibidi-logo-coingecko.png?1733727963", 
      "decimals": 6
    }, 
    {
      "name": "DogLibre", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGL", 
      "priority": 3, 
      "address": "0xb757977bc882a14db86b048f2abb2f2a14d33184", 
      "logo": "https://assets.coingecko.com/coins/images/37011/thumb/doglibre.jpeg?1713141966", 
      "decimals": 18
    }, 
    {
      "name": "Liquid Mercury", 
      "abi": "ERC20_ABI", 
      "symbol": "MERC", 
      "priority": 3, 
      "address": "0x8923947eafaf4ad68f1f0c9eb5463ec876d79058", 
      "logo": "https://assets.coingecko.com/coins/images/29297/thumb/cda56b6a-146c-4348-b4ff-5b87980c0f83.jpg?1696528249", 
      "decimals": 18
    }, 
    {
      "name": "Glacier Network", 
      "abi": "ERC20_ABI", 
      "symbol": "GLS", 
      "priority": 3, 
      "address": "0xe898bcd00b86a3eae43914319d2d4460230f735c", 
      "logo": "https://assets.coingecko.com/coins/images/52878/thumb/glacier.jpg?1734576386", 
      "decimals": 18
    }, 
    {
      "name": "Layer3", 
      "abi": "ERC20_ABI", 
      "symbol": "L3", 
      "priority": 3, 
      "address": "0x46777c76dbbe40fabb2aab99e33ce20058e76c59", 
      "logo": "https://assets.coingecko.com/coins/images/37768/thumb/Square.png?1722045128", 
      "decimals": 18
    }, 
    {
      "name": "RigoBlock", 
      "abi": "ERC20_ABI", 
      "symbol": "GRG", 
      "priority": 3, 
      "address": "0x09188484e1ab980daef53a9755241d759c5b7d60", 
      "logo": "https://assets.coingecko.com/coins/images/1532/thumb/Symbol-RigoblockRGB.png?1696502572", 
      "decimals": 18
    }, 
    {
      "name": "GODDOG", 
      "abi": "ERC20_ABI", 
      "symbol": "OOOOOO", 
      "priority": 3, 
      "address": "0xddf7d080c82b8048baae54e376a3406572429b4e", 
      "logo": "https://assets.coingecko.com/coins/images/38157/thumb/Goddog_logo_for_Coingecko_200x200.png?1716669510", 
      "decimals": 18
    }, 
    {
      "name": "FU Money", 
      "abi": "ERC20_ABI", 
      "symbol": "FU", 
      "priority": 3, 
      "address": "0x8f4e4221ba88d4e9bb76ecfb91d7c5ce08d7d5b9", 
      "logo": "https://assets.coingecko.com/coins/images/38629/thumb/FU_logo_black.png?1718170125", 
      "decimals": 18
    }, 
    {
      "name": "SynFutures", 
      "abi": "ERC20_ABI", 
      "symbol": "F", 
      "priority": 3, 
      "address": "0x2c24497d4086490e7ead87cc12597fb50c2e6ed6", 
      "logo": "https://assets.coingecko.com/coins/images/52186/thumb/synfutures_f_token_light_200.png?1732722899", 
      "decimals": 18
    }, 
    {
      "name": "Opulous", 
      "abi": "ERC20_ABI", 
      "symbol": "OPUL", 
      "priority": 3, 
      "address": "0x118a14bd824a7099e8c5279216ff410a7e5472bd", 
      "logo": "https://assets.coingecko.com/coins/images/16548/thumb/opulous.PNG?1696516110", 
      "decimals": 18
    }, 
    {
      "name": "Peapods Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "PEAS", 
      "priority": 3, 
      "address": "0x02f92800f57bcd74066f5709f1daa1a4302df875", 
      "logo": "https://assets.coingecko.com/coins/images/33711/thumb/NAzHgbTW_400x400.png?1702856653", 
      "decimals": 18
    }, 
    {
      "name": "ORA Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "ORA", 
      "priority": 3, 
      "address": "0x333333c465a19c85f85c6cfbed7b16b0b26e3333", 
      "logo": "https://assets.coingecko.com/coins/images/51812/thumb/ORA_Token.png?1732029092", 
      "decimals": 18
    }, 
    {
      "name": "Skillful AI", 
      "abi": "ERC20_ABI", 
      "symbol": "SKAI", 
      "priority": 3, 
      "address": "0xe7399151b688a265f347693d358821a5a8c213ec", 
      "logo": "https://assets.coingecko.com/coins/images/38056/thumb/Vector.png?1716407390", 
      "decimals": 18
    }, 
    {
      "name": "Rekt", 
      "abi": "ERC20_ABI", 
      "symbol": "REKT", 
      "priority": 3, 
      "address": "0xb3e3c89b8d9c88b1fe96856e382959ee6291ebba", 
      "logo": "https://assets.coingecko.com/coins/images/51727/thumb/rektcion_trans_200px.png?1731910587", 
      "decimals": 18
    }, 
    {
      "name": "DexCheck AI", 
      "abi": "ERC20_ABI", 
      "symbol": "DCK", 
      "priority": 3, 
      "address": "0x1718c0b55a07f61db44f0ac7404dc574b5abfef2", 
      "logo": "https://assets.coingecko.com/coins/images/26412/thumb/DexCheck_logo_%282%29.png?1696525488", 
      "decimals": 18
    }, 
    {
      "name": "yearn finance", 
      "abi": "ERC20_ABI", 
      "symbol": "YFI", 
      "priority": 3, 
      "address": "0x9eaf8c1e34f05a589eda6bafdf391cf6ad3cb239", 
      "logo": "https://assets.coingecko.com/coins/images/11849/thumb/yearn.jpg?1696511720", 
      "decimals": 18
    }, 
    {
      "name": "NutCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "NUT", 
      "priority": 3, 
      "address": "0x6a9431b9ecce9dde3f7a32391d5b61c5ad11e4a0", 
      "logo": "https://assets.coingecko.com/coins/images/37569/thumb/icon-2_200x200.png?1714886224", 
      "decimals": 18
    }, 
    {
      "name": "LORDS", 
      "abi": "ERC20_ABI", 
      "symbol": "LORDS", 
      "priority": 3, 
      "address": "0xd5b22dcfa9a919b28afe164fc7af10b832d4b022", 
      "logo": "https://assets.coingecko.com/coins/images/22171/thumb/Frame_1.png?1696521515", 
      "decimals": 18
    }, 
    {
      "name": "Hey Anon", 
      "abi": "ERC20_ABI", 
      "symbol": "ANON", 
      "priority": 3, 
      "address": "0x79bbf4508b1391af3a0f4b30bb5fc4aa9ab0e07c", 
      "logo": "https://assets.coingecko.com/coins/images/52961/thumb/AAI__ANON_SQ_Wb_250x250.png?1740500195", 
      "decimals": 18
    }, 
    {
      "name": "WOO", 
      "abi": "ERC20_ABI", 
      "symbol": "WOO", 
      "priority": 3, 
      "address": "0xf3df0a31ec5ea438150987805e841f960b9471b6", 
      "logo": "https://assets.coingecko.com/coins/images/12921/thumb/WOO_Logos_2023_Profile_Pic_WOO.png?1696512709", 
      "decimals": 18
    }, 
    {
      "name": "USDEBT", 
      "abi": "ERC20_ABI", 
      "symbol": "USDEBT", 
      "priority": 3, 
      "address": "0xa23dd9379f2e12d9ce76ec738b9f5e520d1d861c", 
      "logo": "https://assets.coingecko.com/coins/images/31448/thumb/ELIKON_200X200.png?1734038085", 
      "decimals": 18
    }, 
    {
      "name": "Electronic USD", 
      "abi": "ERC20_ABI", 
      "symbol": "EUSD", 
      "priority": 3, 
      "address": "0xcfa3ef56d303ae4faaba0592388f19d7c3399fb4", 
      "logo": "https://assets.coingecko.com/coins/images/28445/thumb/0xa0d69e286b938e21cbf7e51d71f6a4c8918f482f.png?1696527441", 
      "decimals": 18
    }, 
    {
      "name": "UniDex", 
      "abi": "ERC20_ABI", 
      "symbol": "UNIDX", 
      "priority": 3, 
      "address": "0x6b4712ae9797c199edd44f897ca09bc57628a1cf", 
      "logo": "https://assets.coingecko.com/coins/images/13178/thumb/unidx.png?1696512961", 
      "decimals": 18
    }, 
    {
      "name": "Rocket Pool ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "RETH", 
      "priority": 3, 
      "address": "0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c", 
      "logo": "https://assets.coingecko.com/coins/images/20764/thumb/reth.png?1696520159", 
      "decimals": 18
    }, 
    {
      "name": "Thales", 
      "abi": "ERC20_ABI", 
      "symbol": "THALES", 
      "priority": 3, 
      "address": "0xf34e0cff046e154cafcae502c7541b9e5fd8c249", 
      "logo": "https://assets.coingecko.com/coins/images/18388/thumb/CLVZJN_C_400x400.png?1696517879", 
      "decimals": 18
    }, 
    {
      "name": "ACryptoS", 
      "abi": "ERC20_ABI", 
      "symbol": "ACS", 
      "priority": 3, 
      "address": "0x8888888888f004100c0353d657be6300587a6ccd", 
      "logo": "https://assets.coingecko.com/coins/images/32721/thumb/ACS.jpg?1699009686", 
      "decimals": 18
    }, 
    {
      "name": "ParagonsDAO", 
      "abi": "ERC20_ABI", 
      "symbol": "PDT", 
      "priority": 3, 
      "address": "0xeff2a458e464b07088bdb441c21a42ab4b61e07e", 
      "logo": "https://assets.coingecko.com/coins/images/22642/thumb/pdt_token_image.png?1727376481", 
      "decimals": 18
    }, 
    {
      "name": "SMARDEX", 
      "abi": "ERC20_ABI", 
      "symbol": "SDEX", 
      "priority": 3, 
      "address": "0xfd4330b0312fdeec6d4225075b82e00493ff2e3f", 
      "logo": "https://assets.coingecko.com/coins/images/29470/thumb/SDEX_logo_transparent_outside_240x240.png?1696930070", 
      "decimals": 18
    }, 
    {
      "name": "Heroes of Mavia", 
      "abi": "ERC20_ABI", 
      "symbol": "MAVIA", 
      "priority": 3, 
      "address": "0x24fcfc492c1393274b6bcd568ac9e225bec93584", 
      "logo": "https://assets.coingecko.com/coins/images/33895/thumb/2023-12-20_21.21.41_%281%29.jpg?1703230771", 
      "decimals": 18
    }, 
    {
      "name": "Virtue Poker Points", 
      "abi": "ERC20_ABI", 
      "symbol": "VPP", 
      "priority": 3, 
      "address": "0xf578ad8809f13dabf921bdd3fcfbe194d0ab5628", 
      "logo": "https://assets.coingecko.com/coins/images/3386/thumb/vp-logo-200x200.png?1696504084", 
      "decimals": 18
    }, 
    {
      "name": "DizzyHavoc", 
      "abi": "ERC20_ABI", 
      "symbol": "DZHV", 
      "priority": 3, 
      "address": "0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe", 
      "logo": "https://assets.coingecko.com/coins/images/35575/thumb/dizzyhavoc_circle_3_200_200_transparentBg.png?1709194317", 
      "decimals": 18
    }, 
    {
      "name": "USDC", 
      "abi": "ERC20_ABI", 
      "symbol": "USDC", 
      "priority": 3, 
      "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", 
      "logo": "https://assets.coingecko.com/coins/images/6319/thumb/usdc.png?1696506694", 
      "decimals": 6
    }, 
    {
      "name": "Extra Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "EXTRA", 
      "priority": 3, 
      "address": "0x2dad3a13ef0c6366220f989157009e501e7938f8", 
      "logo": "https://assets.coingecko.com/coins/images/30973/thumb/Ex_logo-white-blue_ring_288x.png?1696529812", 
      "decimals": 18
    }, 
    {
      "name": "PUBLC", 
      "abi": "ERC20_ABI", 
      "symbol": "PUBLX", 
      "priority": 3, 
      "address": "0xd1f398d6b3e5e2387e413831e206cfeb5fc1dcee", 
      "logo": "https://assets.coingecko.com/coins/images/29074/thumb/PUBLX_Logo_%28200x200%29.png?1696528040", 
      "decimals": 18
    }, 
    {
      "name": "ViciCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "VCNT", 
      "priority": 3, 
      "address": "0xdcf5130274753c8050ab061b1a1dcbf583f5bfd0", 
      "logo": "https://assets.coingecko.com/coins/images/31305/thumb/ViciCoin_-_small.png?1696530124", 
      "decimals": 18
    }, 
    {
      "name": "Seedworld", 
      "abi": "ERC20_ABI", 
      "symbol": "SWORLD", 
      "priority": 3, 
      "address": "0x968be3f7bfef0f8edc3c1ad90232ebb0da0867aa", 
      "logo": "https://assets.coingecko.com/coins/images/51000/thumb/IMG_2798.PNG?1729685531", 
      "decimals": 18
    }, 
    {
      "name": "Gains Network", 
      "abi": "ERC20_ABI", 
      "symbol": "GNS", 
      "priority": 3, 
      "address": "0xfb1aaba03c31ea98a3eec7591808acb1947ee7ac", 
      "logo": "https://assets.coingecko.com/coins/images/19737/thumb/logo.png?1696519161", 
      "decimals": 18
    }, 
    {
      "name": "Fantom Bomb", 
      "abi": "ERC20_ABI", 
      "symbol": "BOMB", 
      "priority": 3, 
      "address": "0x74ccbe53f77b08632ce0cb91d3a545bf6b8e0979", 
      "logo": "https://assets.coingecko.com/coins/images/24109/thumb/logo-blue.png?1696523301", 
      "decimals": 18
    }, 
    {
      "name": "GAMER", 
      "abi": "ERC20_ABI", 
      "symbol": "GMR", 
      "priority": 3, 
      "address": "0xa617c0c739845b2941bd8edd05c9f993ecc97c18", 
      "logo": "https://assets.coingecko.com/coins/images/21288/thumb/ezgif-1-7f6a016717.jpg?1696520658", 
      "decimals": 18
    }, 
    {
      "name": "Sumer Money suETH", 
      "abi": "ERC20_ABI", 
      "symbol": "SUETH", 
      "priority": 3, 
      "address": "0x1c22531aa9747d76fff8f0a43b37954ca67d28e0", 
      "logo": "https://assets.coingecko.com/coins/images/33265/thumb/Sumer_Money_Logo.jpg?1701321407", 
      "decimals": 18
    }, 
    {
      "name": "BOBO Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "BOBO", 
      "priority": 3, 
      "address": "0x570b1533f6daa82814b25b62b5c7c4c55eb83947", 
      "logo": "https://assets.coingecko.com/coins/images/30388/thumb/bobologo_200x200.png?1725466815", 
      "decimals": 18
    }, 
    {
      "name": "Axelar", 
      "abi": "ERC20_ABI", 
      "symbol": "AXL", 
      "priority": 3, 
      "address": "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f", 
      "logo": "https://assets.coingecko.com/coins/images/27277/thumb/V-65_xQ1_400x400.jpeg?1696526329", 
      "decimals": 6
    }, 
    {
      "name": "Axelar Bridged USDC", 
      "abi": "ERC20_ABI", 
      "symbol": "AXLUSDC", 
      "priority": 3, 
      "address": "0xeb466342c4d449bc9f53a865d5cb90586f405215", 
      "logo": "https://assets.coingecko.com/coins/images/26476/thumb/uausdc_D_3x.png?1696525548", 
      "decimals": 6
    }, 
    {
      "name": "Osaka Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "OSAK", 
      "priority": 3, 
      "address": "0xbfd5206962267c7b4b4a8b3d76ac2e1b2a5c4d5e", 
      "logo": "https://assets.coingecko.com/coins/images/30911/thumb/OSAK_LOGO_200x200.png?1723662197", 
      "decimals": 18
    }, 
    {
      "name": "Vela Token", 
      "abi": "ERC20_ABI", 
      "symbol": "VELA", 
      "priority": 3, 
      "address": "0x5a76a56ad937335168b30df3aa1327277421c6ae", 
      "logo": "https://assets.coingecko.com/coins/images/28739/thumb/VELA_logo_-_no_background.png?1696527719", 
      "decimals": 18
    }, 
    {
      "name": "Fuse", 
      "abi": "ERC20_ABI", 
      "symbol": "FUSE", 
      "priority": 3, 
      "address": "0x01facc69ec7360640aa5898e852326752801674a", 
      "logo": "https://assets.coingecko.com/coins/images/10347/thumb/fuse.png?1696510348", 
      "decimals": 18
    }, 
    {
      "name": "PancakeSwap", 
      "abi": "ERC20_ABI", 
      "symbol": "CAKE", 
      "priority": 3, 
      "address": "0x3055913c90fcc1a6ce9a358911721eeb942013a1", 
      "logo": "https://assets.coingecko.com/coins/images/12632/thumb/pancakeswap-cake-logo_%281%29.png?1696512440", 
      "decimals": 18
    }, 
    {
      "name": "Orderly Network", 
      "abi": "ERC20_ABI", 
      "symbol": "ORDER", 
      "priority": 3, 
      "address": "0x4e200fe2f3efb977d5fd9c430a41531fb04d97b8", 
      "logo": "https://assets.coingecko.com/coins/images/38501/thumb/Orderly_Network_Coingecko_200*200.png?1717751359", 
      "decimals": 18
    }, 
    {
      "name": "Propbase", 
      "abi": "ERC20_ABI", 
      "symbol": "PROPS", 
      "priority": 3, 
      "address": "0xd6aaf4d477999fa50c5a1aa35f708862113a73cc", 
      "logo": "https://assets.coingecko.com/coins/images/32932/thumb/PROP_BASE_%286%29.png?1699870054", 
      "decimals": 8
    }, 
    {
      "name": "Tarot", 
      "abi": "ERC20_ABI", 
      "symbol": "TAROT", 
      "priority": 3, 
      "address": "0xf544251d25f3d243a36b07e7e7962a678f952691", 
      "logo": "https://assets.coingecko.com/coins/images/31800/thumb/TAROT.jpg?1696530615", 
      "decimals": 18
    }, 
    {
      "name": "RAI Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "SOFI", 
      "priority": 3, 
      "address": "0x703d57164ca270b0b330a87fd159cfef1490c0a5", 
      "logo": "https://assets.coingecko.com/coins/images/14686/thumb/sofi.png?1696514359", 
      "decimals": 18
    }, 
    {
      "name": "Arc", 
      "abi": "ERC20_ABI", 
      "symbol": "ARC", 
      "priority": 3, 
      "address": "0x61ca70b867a48265e553a7fbb81bfe44fada7ae6", 
      "logo": "https://assets.coingecko.com/coins/images/24235/thumb/ARC_Token_Logo_200x200.png?1729562245", 
      "decimals": 18
    }, 
    {
      "name": "Maha", 
      "abi": "ERC20_ABI", 
      "symbol": "MAHA", 
      "priority": 3, 
      "address": "0x554bba833518793056cf105e66abea330672c0de", 
      "logo": "https://assets.coingecko.com/coins/images/13404/thumb/black.png?1724679606", 
      "decimals": 18
    }, 
    {
      "name": "DEUS Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "DEUS", 
      "priority": 3, 
      "address": "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44", 
      "logo": "https://assets.coingecko.com/coins/images/18778/thumb/Black_Background_200x200.png?1696518242", 
      "decimals": 18
    }, 
    {
      "name": "Overnight Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "OVN", 
      "priority": 3, 
      "address": "0xa3d1a8deb97b111454b294e2324efad13a9d8396", 
      "logo": "https://assets.coingecko.com/coins/images/31970/thumb/OVN.png?1696959174", 
      "decimals": 18
    }, 
    {
      "name": "Onyxcoin", 
      "abi": "ERC20_ABI", 
      "symbol": "XCN", 
      "priority": 3, 
      "address": "0x9c632e6aaa3ea73f91554f8a3cb2ed2f29605e0c", 
      "logo": "https://assets.coingecko.com/coins/images/24210/thumb/onyxlogo.jpg?1696523397", 
      "decimals": 18
    }, 
    {
      "name": "Sekuya Multiverse", 
      "abi": "ERC20_ABI", 
      "symbol": "SKYA", 
      "priority": 3, 
      "address": "0x623cd3a3edf080057892aaf8d773bbb7a5c9b6e9", 
      "logo": "https://assets.coingecko.com/coins/images/38096/thumb/SKYA_Logo_200x200.png?1731909478", 
      "decimals": 18
    }, 
    {
      "name": "MAGA VP", 
      "abi": "ERC20_ABI", 
      "symbol": "MVP", 
      "priority": 3, 
      "address": "0x58cd93c4a91c3940109fa27d700f5013b18b5dc2", 
      "logo": "https://assets.coingecko.com/coins/images/37462/thumb/1000017296.jpg?1714451792", 
      "decimals": 18
    }, 
    {
      "name": "Star", 
      "abi": "ERC20_ABI", 
      "symbol": "STAR", 
      "priority": 3, 
      "address": "0xc19669a405067927865b40ea045a2baabbbe57f5", 
      "logo": "https://assets.coingecko.com/coins/images/31277/thumb/coin-icon_Star-200x200.png?1732742256", 
      "decimals": 18
    }, 
    {
      "name": "Aave v3 WETH", 
      "abi": "ERC20_ABI", 
      "symbol": "AWETH", 
      "priority": 3, 
      "address": "0xd4a0e0b9149bcee3c920d2e00b5de09138fd8bb7", 
      "logo": "https://assets.coingecko.com/coins/images/32882/thumb/WETH_%281%29.png?1699716492", 
      "decimals": 18
    }, 
    {
      "name": "Interport Token", 
      "abi": "ERC20_ABI", 
      "symbol": "ITP", 
      "priority": 3, 
      "address": "0x2b1d36f5b61addaf7da7ebbd11b35fd8cfb0de31", 
      "logo": "https://assets.coingecko.com/coins/images/28338/thumb/ITP_Logo_200.png?1696527344", 
      "decimals": 18
    }, 
    {
      "name": "Okcash", 
      "abi": "ERC20_ABI", 
      "symbol": "OK", 
      "priority": 3, 
      "address": "0x979584b07e1e14c7718c9fdab2e35bbb5fec2c59", 
      "logo": "https://assets.coingecko.com/coins/images/274/thumb/ok-logo-200px.png?1696501624", 
      "decimals": 18
    }, 
    {
      "name": "GorplesCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "GORPLES", 
      "priority": 3, 
      "address": "0x0002bcdaf53f4889bf2f43a3252d7c03fe1b80bc", 
      "logo": "https://assets.coingecko.com/coins/images/38681/thumb/Round_Avatar.png?1720520435", 
      "decimals": 18
    }, 
    {
      "name": "DOLA", 
      "abi": "ERC20_ABI", 
      "symbol": "DOLA", 
      "priority": 3, 
      "address": "0x4621b7a9c75199271f773ebd9a499dbd165c3191", 
      "logo": "https://assets.coingecko.com/coins/images/14287/thumb/dola.png?1696513984", 
      "decimals": 18
    }, 
    {
      "name": "Florence Finance Medici", 
      "abi": "ERC20_ABI", 
      "symbol": "FFM", 
      "priority": 3, 
      "address": "0xb4e1b230dd0476238fc64c99ff9d6ccdfdb2258d", 
      "logo": "https://assets.coingecko.com/coins/images/34382/thumb/M_PNG_200x200_copy.png?1704779326", 
      "decimals": 18
    }, 
    {
      "name": "Moonsama", 
      "abi": "ERC20_ABI", 
      "symbol": "SAMA", 
      "priority": 3, 
      "address": "0x63228048121877a9e0f52020834a135074e8207c", 
      "logo": "https://assets.coingecko.com/coins/images/28308/thumb/Small.png?1696527312", 
      "decimals": 18
    }, 
    {
      "name": "Derp", 
      "abi": "ERC20_ABI", 
      "symbol": "DERP", 
      "priority": 3, 
      "address": "0xebb78043e29f4af24e6266a7d142f5a08443969e", 
      "logo": "https://assets.coingecko.com/coins/images/33069/thumb/derpdex_%281%29.png?1700793428", 
      "decimals": 18
    }, 
    {
      "name": "HarryPotterObamaSonic10Inu  ETH ", 
      "abi": "ERC20_ABI", 
      "symbol": "BITCOIN", 
      "priority": 3, 
      "address": "0x2a06a17cbc6d0032cac2c6696da90f29d39a1a29", 
      "logo": "https://assets.coingecko.com/coins/images/30323/thumb/hpos10i_logo_casino_night-dexview.png?1696529224", 
      "decimals": 8
    }, 
    {
      "name": "Virtuals Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "VIRTUAL", 
      "priority": 3, 
      "address": "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b", 
      "logo": "https://assets.coingecko.com/coins/images/34057/thumb/LOGOMARK.png?1708356054", 
      "decimals": 18
    }, 
    {
      "name": "IoTeX", 
      "abi": "ERC20_ABI", 
      "symbol": "IOTX", 
      "priority": 3, 
      "address": "0xbcbaf311cec8a4eac0430193a528d9ff27ae38c1", 
      "logo": "https://assets.coingecko.com/coins/images/3334/thumb/Token_Icon_Token_Icon.png?1727899869", 
      "decimals": 18
    }, 
    {
      "name": "Unagi Token", 
      "abi": "ERC20_ABI", 
      "symbol": "UNA", 
      "priority": 3, 
      "address": "0x24569d33653c404f90af10a2b98d6e0030d3d267", 
      "logo": "https://assets.coingecko.com/coins/images/34733/thumb/unagi.png?1705922276", 
      "decimals": 18
    }, 
    {
      "name": "EURC", 
      "abi": "ERC20_ABI", 
      "symbol": "EURC", 
      "priority": 3, 
      "address": "0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42", 
      "logo": "https://assets.coingecko.com/coins/images/26045/thumb/euro.png?1696525125", 
      "decimals": 6
    }, 
    {
      "name": "LayerZero", 
      "abi": "ERC20_ABI", 
      "symbol": "ZRO", 
      "priority": 3, 
      "address": "0x6985884c4392d348587b19cb9eaaf157f13271cd", 
      "logo": "https://assets.coingecko.com/coins/images/28206/thumb/ftxG9_TJ_400x400.jpeg?1696527208", 
      "decimals": 18
    }, 
    {
      "name": "Wexo", 
      "abi": "ERC20_ABI", 
      "symbol": "WEXO", 
      "priority": 3, 
      "address": "0xac12f930318be4f9d37f602cbf89cd33e99aa9d4", 
      "logo": "https://assets.coingecko.com/coins/images/33801/thumb/wexo_token_200x200.png?1702991908", 
      "decimals": 18
    }, 
    {
      "name": "Sensay", 
      "abi": "ERC20_ABI", 
      "symbol": "SNSY", 
      "priority": 3, 
      "address": "0x3124678d62d2aa1f615b54525310fbfda6dcf7ae", 
      "logo": "https://assets.coingecko.com/coins/images/36121/thumb/SNSY_Light01.png?1742383254", 
      "decimals": 18
    }, 
    {
      "name": "Cornucopias", 
      "abi": "ERC20_ABI", 
      "symbol": "COPI", 
      "priority": 3, 
      "address": "0x0a953dd9fc813fefaf6015b804c9dfa0624690c0", 
      "logo": "https://assets.coingecko.com/coins/images/21452/thumb/g56WwJDA_400x400.jpg?1696520814", 
      "decimals": 18
    }, 
    {
      "name": "Glo Dollar", 
      "abi": "ERC20_ABI", 
      "symbol": "USDGLO", 
      "priority": 3, 
      "address": "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3", 
      "logo": "https://assets.coingecko.com/coins/images/29319/thumb/GLO_logo_pine_on_cyan_1_3.png?1716971065", 
      "decimals": 18
    }, 
    {
      "name": "Non Playable Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "NPC", 
      "priority": 3, 
      "address": "0xb166e8b140d35d9d8226e40c09f757bac5a4d87d", 
      "logo": "https://assets.coingecko.com/coins/images/31193/thumb/NPC_200x200.png?1696530021", 
      "decimals": 18
    }, 
    {
      "name": "Mountain Protocol USD", 
      "abi": "ERC20_ABI", 
      "symbol": "USDM", 
      "priority": 3, 
      "address": "0x59d9356e565ab3a36dd77763fc0d87feaf85508c", 
      "logo": "https://assets.coingecko.com/coins/images/31719/thumb/usdm.png?1696530540", 
      "decimals": 18
    }, 
    {
      "name": "Staked Ethos Reserve Note", 
      "abi": "ERC20_ABI", 
      "symbol": "STERN", 
      "priority": 3, 
      "address": "0xf7a0dd3317535ec4f4d29adf9d620b3d8d5d5069", 
      "logo": "https://assets.coingecko.com/coins/images/31522/thumb/stERN.png?1696530332", 
      "decimals": 18
    }, 
    {
      "name": "OmniCat", 
      "abi": "ERC20_ABI", 
      "symbol": "OMNI", 
      "priority": 3, 
      "address": "0xc48e605c7b722a57277e087a6170b9e227e5ac0a", 
      "logo": "https://assets.coingecko.com/coins/images/33917/thumb/omnicatlogo.png?1717544778", 
      "decimals": 18
    }, 
    {
      "name": "WASSIE", 
      "abi": "ERC20_ABI", 
      "symbol": "WASSIE", 
      "priority": 3, 
      "address": "0xa067436db77ab18b1a315095e4b816791609897c", 
      "logo": "https://assets.coingecko.com/coins/images/30144/thumb/logo-coingecko.png?1696529065", 
      "decimals": 18
    }, 
    {
      "name": "Any Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "AI", 
      "priority": 3, 
      "address": "0x2598c30330d5771ae9f983979209486ae26de875", 
      "logo": "https://assets.coingecko.com/coins/images/34126/thumb/anyinulogo200.png?1704174269", 
      "decimals": 18
    }, 
    {
      "name": "Everyworld", 
      "abi": "ERC20_ABI", 
      "symbol": "EVERY", 
      "priority": 3, 
      "address": "0x717d31a60a9e811469673429c9f8ea24358990f1", 
      "logo": "https://assets.coingecko.com/coins/images/36799/thumb/coin_gecko.png?1714459237", 
      "decimals": 18
    }, 
    {
      "name": "crow with knife", 
      "abi": "ERC20_ABI", 
      "symbol": "CAW", 
      "priority": 3, 
      "address": "0xdfbea88c4842d30c26669602888d746d30f9d60d", 
      "logo": "https://assets.coingecko.com/coins/images/36067/thumb/200px.png?1710405601", 
      "decimals": 18
    }, 
    {
      "name": "Archly Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "ARC", 
      "priority": 3, 
      "address": "0xe8876189a80b2079d8c0a7867e46c50361d972c1", 
      "logo": "https://assets.coingecko.com/coins/images/37308/thumb/arc-logo-circle-200.png?1713952763", 
      "decimals": 18
    }, 
    {
      "name": "Renzo Restaked ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "EZETH", 
      "priority": 3, 
      "address": "0x2416092f143378750bb29b79ed961ab195cceea5", 
      "logo": "https://assets.coingecko.com/coins/images/34753/thumb/Ezeth_logo_circle.png?1713496404", 
      "decimals": 18
    }, 
    {
      "name": "Baklava", 
      "abi": "ERC20_ABI", 
      "symbol": "BAVA", 
      "priority": 3, 
      "address": "0x3fbde9864362ce4abb244ebef2ef0482aba8ea39", 
      "logo": "https://assets.coingecko.com/coins/images/23780/thumb/200x200_BAVA_LOGO_%282%29.png?1696522980", 
      "decimals": 18
    }, 
    {
      "name": "PoolTogether", 
      "abi": "ERC20_ABI", 
      "symbol": "POOL", 
      "priority": 3, 
      "address": "0xd652c5425aea2afd5fb142e120fecf79e18fafc3", 
      "logo": "https://assets.coingecko.com/coins/images/14003/thumb/PoolTogether.png?1696513732", 
      "decimals": 18
    }, 
    {
      "name": "Qi Dao", 
      "abi": "ERC20_ABI", 
      "symbol": "QI", 
      "priority": 3, 
      "address": "0xd3fdcb837dafdb7c9c3ebd48fe22a53f6dd3d7d7", 
      "logo": "https://assets.coingecko.com/coins/images/15329/thumb/qidao.jpeg?1697093140", 
      "decimals": 18
    }, 
    {
      "name": "Streamer Inu", 
      "abi": "ERC20_ABI", 
      "symbol": "STRM", 
      "priority": 3, 
      "address": "0xfe4717f60ac5603dc6863700cd8ecf805908688d", 
      "logo": "https://assets.coingecko.com/coins/images/27994/thumb/logo.png?1696527011", 
      "decimals": 18
    }, 
    {
      "name": "Metapro", 
      "abi": "ERC20_ABI", 
      "symbol": "MPRO", 
      "priority": 3, 
      "address": "0xd88611a629265c9af294ffdd2e7fa4546612273e", 
      "logo": "https://assets.coingecko.com/coins/images/35128/thumb/mpro.jpeg?1707440015", 
      "decimals": 18
    }, 
    {
      "name": "GENIUS AI", 
      "abi": "ERC20_ABI", 
      "symbol": "GNUS", 
      "priority": 3, 
      "address": "0x614577036f0a024dbc1c88ba616b394dd65d105a", 
      "logo": "https://assets.coingecko.com/coins/images/36914/thumb/IMG_5346.png?1712769235", 
      "decimals": 18
    }, 
    {
      "name": "Cartesi", 
      "abi": "ERC20_ABI", 
      "symbol": "CTSI", 
      "priority": 3, 
      "address": "0x259fac10c5cbfefe3e710e1d9467f70a76138d45", 
      "logo": "https://assets.coingecko.com/coins/images/11038/thumb/Cartesi_Logo.png?1696510982", 
      "decimals": 18
    }, 
    {
      "name": "Olympus", 
      "abi": "ERC20_ABI", 
      "symbol": "OHM", 
      "priority": 3, 
      "address": "0x060cb087a9730e13aa191f31a6d86bff8dfcdcc0", 
      "logo": "https://assets.coingecko.com/coins/images/14483/thumb/token_OHM_%281%29.png?1696514169", 
      "decimals": 9
    }, 
    {
      "name": "WUFFI", 
      "abi": "ERC20_ABI", 
      "symbol": "WUF", 
      "priority": 3, 
      "address": "0x4da78059d97f155e18b37765e2e042270f4e0fc4", 
      "logo": "https://assets.coingecko.com/coins/images/36933/thumb/WUFFI.jpg?1720613603", 
      "decimals": 4
    }, 
    {
      "name": "OX Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "OX", 
      "priority": 3, 
      "address": "0xba0dda8762c24da9487f5fa026a9b64b695a07ea", 
      "logo": "https://assets.coingecko.com/coins/images/35365/thumb/9.png?1727331352", 
      "decimals": 18
    }, 
    {
      "name": "Spectral", 
      "abi": "ERC20_ABI", 
      "symbol": "SPEC", 
      "priority": 3, 
      "address": "0x96419929d7949d6a801a6909c145c8eef6a40431", 
      "logo": "https://assets.coingecko.com/coins/images/36138/thumb/ls7wS7vf_400x400.jpg?1724975224", 
      "decimals": 18
    }, 
    {
      "name": "Satoshi Nakamoto", 
      "abi": "ERC20_ABI", 
      "symbol": "SATOSHI", 
      "priority": 3, 
      "address": "0x45e7eaedb8e3360f850c963c5419a5236e451217", 
      "logo": "https://assets.coingecko.com/coins/images/37611/thumb/SATOSHI_LOGO.PNG?1715054986", 
      "decimals": 9
    }, 
    {
      "name": "Lanify", 
      "abi": "ERC20_ABI", 
      "symbol": "LAN", 
      "priority": 3, 
      "address": "0xa83d1a010e4a36198a884dcb3d7d2de87fe9a59d", 
      "logo": "https://assets.coingecko.com/coins/images/36404/thumb/logo200x200.png?1711369836", 
      "decimals": 18
    }, 
    {
      "name": "ARQx AI", 
      "abi": "ERC20_ABI", 
      "symbol": "ARQX", 
      "priority": 3, 
      "address": "0x5e432eecd01c12ee7071ee9219c2477a347da192", 
      "logo": "https://assets.coingecko.com/coins/images/37808/thumb/ARQX_GC.png?1715591796", 
      "decimals": 18
    }, 
    {
      "name": "Catamoto", 
      "abi": "ERC20_ABI", 
      "symbol": "CATA", 
      "priority": 3, 
      "address": "0xbdf5bafee1291eec45ae3aadac89be8152d4e673", 
      "logo": "https://assets.coingecko.com/coins/images/37218/thumb/200x200.png?1713774219", 
      "decimals": 18
    }, 
    {
      "name": "OPEN Ticketing Ecosystem", 
      "abi": "ERC20_ABI", 
      "symbol": "OPN", 
      "priority": 3, 
      "address": "0x9a6d24c02ec35ad970287ee8296d4d6552a31dbe", 
      "logo": "https://assets.coingecko.com/coins/images/36612/thumb/TOKEN.png?1711975511", 
      "decimals": 18
    }, 
    {
      "name": "World Mobile Token", 
      "abi": "ERC20_ABI", 
      "symbol": "WMTX", 
      "priority": 3, 
      "address": "0x3e31966d4f81c72d2a55310a6365a56a4393e98d", 
      "logo": "https://assets.coingecko.com/coins/images/17333/thumb/Token_icon_round_1024.png?1741247846", 
      "decimals": 6
    }, 
    {
      "name": "Aleph im", 
      "abi": "ERC20_ABI", 
      "symbol": "ALEPH", 
      "priority": 3, 
      "address": "0xc0fbc4967259786c743361a5885ef49380473dcf", 
      "logo": "https://assets.coingecko.com/coins/images/11676/thumb/Aleph-Logo-BW.png?1696511566", 
      "decimals": 18
    }, 
    {
      "name": "Ambire Wallet", 
      "abi": "ERC20_ABI", 
      "symbol": "WALLET", 
      "priority": 3, 
      "address": "0x0bbbead62f7647ae8323d2cb243a0db74b7c2b80", 
      "logo": "https://assets.coingecko.com/coins/images/23154/thumb/wallet.PNG?1696522445", 
      "decimals": 18
    }, 
    {
      "name": "Permission Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "ASK", 
      "priority": 3, 
      "address": "0x79322cee6c90735b967d2396b9adc392915aebb6", 
      "logo": "https://assets.coingecko.com/coins/images/12521/thumb/rjQjTU3c_400x400.jpg?1696512335", 
      "decimals": 18
    }, 
    {
      "name": "Backed ERNX   Bond", 
      "abi": "ERC20_ABI", 
      "symbol": "BERNX", 
      "priority": 3, 
      "address": "0x3f95aa88ddbb7d9d484aa3d482bf0a80009c52c9", 
      "logo": "https://assets.coingecko.com/coins/images/36755/thumb/200p_bERNX_3.png?1740503141", 
      "decimals": 18
    }, 
    {
      "name": "IX Swap", 
      "abi": "ERC20_ABI", 
      "symbol": "IXS", 
      "priority": 3, 
      "address": "0xfe550bffb51eb645ea3b324d772a19ac449e92c5", 
      "logo": "https://assets.coingecko.com/coins/images/18069/thumb/IXS-ava-square_2x.png?1737363112", 
      "decimals": 18
    }, 
    {
      "name": "Aviator", 
      "abi": "ERC20_ABI", 
      "symbol": "AVI", 
      "priority": 3, 
      "address": "0x3203856eac03d343f9d5245ba2f39861838a7b36", 
      "logo": "https://assets.coingecko.com/coins/images/31024/thumb/avi-200x200png.png?1711119363", 
      "decimals": 18
    }, 
    {
      "name": "Gud Tech", 
      "abi": "ERC20_ABI", 
      "symbol": "GUD", 
      "priority": 3, 
      "address": "0xa608512bbc9934e4b1ddecf0f5fb38b6ad93308d", 
      "logo": "https://assets.coingecko.com/coins/images/53326/thumb/Logo.png?1736127749", 
      "decimals": 18
    }, 
    {
      "name": "Token Name Service", 
      "abi": "ERC20_ABI", 
      "symbol": "TKN", 
      "priority": 3, 
      "address": "0x78b3c724a2f663d11373c4a1978689271895256f", 
      "logo": "https://assets.coingecko.com/coins/images/39886/thumb/Tri-gradient_Group_5135_2x.png?1724682287", 
      "decimals": 18
    }, 
    {
      "name": "Savings USX", 
      "abi": "ERC20_ABI", 
      "symbol": "SUSX", 
      "priority": 3, 
      "address": "0xbc404429558292ee2d769e57d57d6e74bbd2792d", 
      "logo": "https://assets.coingecko.com/coins/images/39895/thumb/IMG_7024.png?1724724019", 
      "decimals": 18
    }, 
    {
      "name": "FAME AI", 
      "abi": "ERC20_ABI", 
      "symbol": "FMC", 
      "priority": 3, 
      "address": "0x6bfdb6f4e65ead27118592a41eb927cea6956198", 
      "logo": "https://assets.coingecko.com/coins/images/33574/thumb/20231205-153104.png?1702450853", 
      "decimals": 18
    }, 
    {
      "name": "ISKRA Token", 
      "abi": "ERC20_ABI", 
      "symbol": "ISK", 
      "priority": 3, 
      "address": "0xd85eff20288ca72ea9eecffb428f89ee5066ca5c", 
      "logo": "https://assets.coingecko.com/coins/images/27428/thumb/ISKRA_logo.png?1696526469", 
      "decimals": 18
    }, 
    {
      "name": "GenomesDAO GENOME", 
      "abi": "ERC20_ABI", 
      "symbol": "GENOME", 
      "priority": 3, 
      "address": "0x1db0c569ebb4a8b57ac01833b9792f526305e062", 
      "logo": "https://assets.coingecko.com/coins/images/36763/thumb/images.jpg?1712282056", 
      "decimals": 18
    }, 
    {
      "name": "Wild Goat Coin", 
      "abi": "ERC20_ABI", 
      "symbol": "WGC", 
      "priority": 3, 
      "address": "0xfb18511f1590a494360069f3640c27d55c2b5290", 
      "logo": "https://assets.coingecko.com/coins/images/37966/thumb/COIN_200x200.png?1716778831", 
      "decimals": 6
    }, 
    {
      "name": "Vertex", 
      "abi": "ERC20_ABI", 
      "symbol": "VRTX", 
      "priority": 3, 
      "address": "0xfb0c734fc3008683c5eff45bcf8128836c4d97d0", 
      "logo": "https://assets.coingecko.com/coins/images/27927/thumb/vrtx.png?1696526947", 
      "decimals": 18
    }, 
    {
      "name": "Bonsai Token", 
      "abi": "ERC20_ABI", 
      "symbol": "BONSAI", 
      "priority": 3, 
      "address": "0x474f4cb764df9da079d94052fed39625c147c12c", 
      "logo": "https://assets.coingecko.com/coins/images/35884/thumb/White_Logo_%283%29.png?1735012355", 
      "decimals": 18
    }, 
    {
      "name": "DogeGF", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGEGF", 
      "priority": 3, 
      "address": "0x881ed0fcef78120a135ec6cc66cef2779fe95bba", 
      "logo": "https://assets.coingecko.com/coins/images/18651/thumb/dogegf_logo_200x200.png?1712082872", 
      "decimals": 18
    }, 
    {
      "name": "Saakuru", 
      "abi": "ERC20_ABI", 
      "symbol": "SKR", 
      "priority": 3, 
      "address": "0xe2dca969624795985f2f083bcd0b674337ba130a", 
      "logo": "https://assets.coingecko.com/coins/images/37058/thumb/saakuru.jpeg?1713172376", 
      "decimals": 18
    }, 
    {
      "name": "MATH", 
      "abi": "ERC20_ABI", 
      "symbol": "MATH", 
      "priority": 3, 
      "address": "0x9e81f6495ba29a6b4d48bddd042c0598fa8abc9f", 
      "logo": "https://assets.coingecko.com/coins/images/11335/thumb/2020-05-19-token-200.png?1696511257", 
      "decimals": 18
    }, 
    {
      "name": "Presearch", 
      "abi": "ERC20_ABI", 
      "symbol": "PRE", 
      "priority": 3, 
      "address": "0x3816dd4bd44c8830c2fa020a5605bac72fa3de7a", 
      "logo": "https://assets.coingecko.com/coins/images/1299/thumb/presearch.png?1696502369", 
      "decimals": 18
    }, 
    {
      "name": "Yield Guild Games", 
      "abi": "ERC20_ABI", 
      "symbol": "YGG", 
      "priority": 3, 
      "address": "0xaac78d1219c08aecc8e37e03858fe885f5ef1799", 
      "logo": "https://assets.coingecko.com/coins/images/17358/thumb/Shield_Mark_-_Colored_-_Iridescent.png?1696516909", 
      "decimals": 18
    }, 
    {
      "name": "Backed NIU Technologies", 
      "abi": "ERC20_ABI", 
      "symbol": "BNIU", 
      "priority": 3, 
      "address": "0x2f11eeee0bf21e7661a22dbbbb9068f4ad191b86", 
      "logo": "https://assets.coingecko.com/coins/images/31869/thumb/200p_bNIU_3.png?1740503067", 
      "decimals": 18
    }, 
    {
      "name": "Backed Coinbase Global", 
      "abi": "ERC20_ABI", 
      "symbol": "BCOIN", 
      "priority": 3, 
      "address": "0xbbcb0356bb9e6b3faa5cbf9e5f36185d53403ac9", 
      "logo": "https://assets.coingecko.com/coins/images/31872/thumb/bCOIN_200p.png?1740041102", 
      "decimals": 18
    }, 
    {
      "name": "Etho Protocol", 
      "abi": "ERC20_ABI", 
      "symbol": "ETHO", 
      "priority": 3, 
      "address": "0x8b52f46a52d86c131222ee14167da6a847bdb84a", 
      "logo": "https://assets.coingecko.com/coins/images/5194/thumb/IconOnly_Transparent_NoBuffer_resized.png?1713297055", 
      "decimals": 18
    }, 
    {
      "name": "Tree", 
      "abi": "ERC20_ABI", 
      "symbol": "TREE", 
      "priority": 3, 
      "address": "0x52c2b317eb0bb61e650683d2f287f56c413e4cf6", 
      "logo": "https://assets.coingecko.com/coins/images/33727/thumb/circle_green.png?1709894067", 
      "decimals": 18
    }, 
    {
      "name": "Backed Swiss Domestic Government Bond 0", 
      "abi": "ERC20_ABI", 
      "symbol": "BCSBGC3", 
      "priority": 3, 
      "address": "0xd8b95b1987741849ca7e71e976aeb535fd2e55a2", 
      "logo": "https://assets.coingecko.com/coins/images/38920/thumb/200p_bCSBGC3_3.png?1740503101", 
      "decimals": 18
    }, 
    {
      "name": "Backed HIGH   High Yield Corp Bond", 
      "abi": "ERC20_ABI", 
      "symbol": "BHIGH", 
      "priority": 3, 
      "address": "0x20c64dee8fda5269a78f2d5bdba861ca1d83df7a", 
      "logo": "https://assets.coingecko.com/coins/images/31868/thumb/200p_bHIGH_3.png?1740503180", 
      "decimals": 18
    }, 
    {
      "name": "Liquity BOLD", 
      "abi": "ERC20_ABI", 
      "symbol": "BOLD", 
      "priority": 3, 
      "address": "0x087c440f251ff6cfe62b86dde1be558b95b4bb9b", 
      "logo": "https://assets.coingecko.com/coins/images/53755/thumb/BOLD_logo.png?1737183873", 
      "decimals": 18
    }, 
    {
      "name": "Backed Tesla", 
      "abi": "ERC20_ABI", 
      "symbol": "BTSLA", 
      "priority": 3, 
      "address": "0x14a5f2872396802c3cc8942a39ab3e4118ee5038", 
      "logo": "https://assets.coingecko.com/coins/images/38916/thumb/bTSLA_200p.png?1740041361", 
      "decimals": 18
    }, 
    {
      "name": "Backed GOVIES 0 6 months EURO", 
      "abi": "ERC20_ABI", 
      "symbol": "BC3M", 
      "priority": 3, 
      "address": "0x2f123cf3f37ce3328cc9b5b8415f9ec5109b45e7", 
      "logo": "https://assets.coingecko.com/coins/images/31870/thumb/200p_bC3M_3.png?1740503084", 
      "decimals": 18
    }, 
    {
      "name": "HOLD", 
      "abi": "ERC20_ABI", 
      "symbol": "EARN", 
      "priority": 3, 
      "address": "0x803b629c339941e2b77d2dc499dac9e1fd9eac66", 
      "logo": "https://assets.coingecko.com/coins/images/32575/thumb/200.png?1698554742", 
      "decimals": 18
    }, 
    {
      "name": "Altura", 
      "abi": "ERC20_ABI", 
      "symbol": "ALU", 
      "priority": 3, 
      "address": "0x91ad1b44913cd1b8241a4ff1e2eaa198da6bf4c9", 
      "logo": "https://assets.coingecko.com/coins/images/15127/thumb/logo-dark.png?1696514784", 
      "decimals": 18
    }, 
    {
      "name": "Dinari AMC", 
      "abi": "ERC20_ABI", 
      "symbol": "AMCD", 
      "priority": 3, 
      "address": "0xfdaf8d69fa9931f00b92e14bc4233cb438b24980", 
      "logo": "https://assets.coingecko.com/coins/images/39835/thumb/Dinari-token-icon.png?1724254655", 
      "decimals": 18
    }, 
    {
      "name": "Rizz", 
      "abi": "ERC20_ABI", 
      "symbol": "RIZZ", 
      "priority": 3, 
      "address": "0x6ce7c23b917284e21d55cea20acaeb2bc58594be", 
      "logo": "https://assets.coingecko.com/coins/images/50598/thumb/200x200px.png?1728446110", 
      "decimals": 9
    }, 
    {
      "name": "Anzen USDz", 
      "abi": "ERC20_ABI", 
      "symbol": "USDZ", 
      "priority": 3, 
      "address": "0x04d5ddf5f3a8939889f11e97f8c4bb48317f1938", 
      "logo": "https://assets.coingecko.com/coins/images/38039/thumb/usdz-image-200x200.png?1716334412", 
      "decimals": 18
    }, 
    {
      "name": "Dexalot", 
      "abi": "ERC20_ABI", 
      "symbol": "ALOT", 
      "priority": 3, 
      "address": "0x9d5a383581882750ce27f84c72f017b378edb736", 
      "logo": "https://assets.coingecko.com/coins/images/24188/thumb/logo_200x200.png?1696523376", 
      "decimals": 18
    }, 
    {
      "name": "NANI", 
      "abi": "ERC20_ABI", 
      "symbol": "", 
      "priority": 3, 
      "address": "0x00000000000007c8612ba63df8ddefd9e6077c97", 
      "logo": "https://assets.coingecko.com/coins/images/53551/thumb/logo.png?1736671853", 
      "decimals": 18
    }, 
    {
      "name": "Strawberry AI", 
      "abi": "ERC20_ABI", 
      "symbol": "BERRY", 
      "priority": 3, 
      "address": "0xdf36186772a8fda4be100dbacc0b48ef00c53089", 
      "logo": "https://assets.coingecko.com/coins/images/39700/thumb/pfp-on-green-MAIN_copy-3_copy.png?1739005464", 
      "decimals": 18
    }, 
    {
      "name": "ZAI Stablecoin", 
      "abi": "ERC20_ABI", 
      "symbol": "ZAI", 
      "priority": 3, 
      "address": "0x0a27e060c0406f8ab7b64e3bee036a37e5a62853", 
      "logo": "https://assets.coingecko.com/coins/images/39733/thumb/Group_4.png?1723771588", 
      "decimals": 18
    }, 
    {
      "name": "Mars Battle", 
      "abi": "ERC20_ABI", 
      "symbol": "SHOOT", 
      "priority": 3, 
      "address": "0xa9f5031b54c44c3603b4300fde9b8f5cd18ad06f", 
      "logo": "https://assets.coingecko.com/coins/images/36553/thumb/icon.png?1711896644", 
      "decimals": 18
    }, 
    {
      "name": "Backed IBTA   Treasury Bond 1 3yr", 
      "abi": "ERC20_ABI", 
      "symbol": "BIBTA", 
      "priority": 3, 
      "address": "0x52d134c6db5889fad3542a09eaf7aa90c0fdf9e4", 
      "logo": "https://assets.coingecko.com/coins/images/31880/thumb/200p_bIBTA_3.png?1740625665", 
      "decimals": 18
    }, 
    {
      "name": "SHOG", 
      "abi": "ERC20_ABI", 
      "symbol": "SHOG", 
      "priority": 3, 
      "address": "0x6a4f69da1e2fb2a9b11d1aad60d03163fe567732", 
      "logo": "https://assets.coingecko.com/coins/images/39328/thumb/149291639.png?1721742924", 
      "decimals": 18
    }, 
    {
      "name": "Zunami USD", 
      "abi": "ERC20_ABI", 
      "symbol": "ZUNUSD", 
      "priority": 3, 
      "address": "0xd5b9ddb04f20ea773c9b56607250149b26049b1f", 
      "logo": "https://assets.coingecko.com/coins/images/37809/thumb/zunUSD_200x200.png?1715591997", 
      "decimals": 18
    }, 
    {
      "name": "Solv Protocol SolvBTC BBN", 
      "abi": "ERC20_ABI", 
      "symbol": "SOLVBTCBBN", 
      "priority": 3, 
      "address": "0xc26c9099bd3789107888c35bb41178079b282561", 
      "logo": "https://assets.coingecko.com/coins/images/39384/thumb/unnamed.png?1721961640", 
      "decimals": 18
    }, 
    {
      "name": "Solv Protocol SolvBTC", 
      "abi": "ERC20_ABI", 
      "symbol": "SOLVBTC", 
      "priority": 3, 
      "address": "0x3b86ad95859b6ab773f55f8d94b4b9d443ee931f", 
      "logo": "https://assets.coingecko.com/coins/images/36800/thumb/solvBTC.png?1719810684", 
      "decimals": 18
    }, 
    {
      "name": "Impermax", 
      "abi": "ERC20_ABI", 
      "symbol": "IBEX", 
      "priority": 3, 
      "address": "0xb8a9a92dfe1303728394dd0f8362a09962dec24f", 
      "logo": "https://assets.coingecko.com/coins/images/27606/thumb/IqwOmX-c_400x400.jpeg?1696526637", 
      "decimals": 18
    }, 
    {
      "name": "Nostra", 
      "abi": "ERC20_ABI", 
      "symbol": "NSTR", 
      "priority": 3, 
      "address": "0x08d7ea3c148672c4b03999eb0d0467733da2db6a", 
      "logo": "https://assets.coingecko.com/coins/images/28282/thumb/Nostra_200x200b.png?1719434526", 
      "decimals": 18
    }, 
    {
      "name": "MASQ", 
      "abi": "ERC20_ABI", 
      "symbol": "MASQ", 
      "priority": 3, 
      "address": "0x45d9c101a3870ca5024582fd788f4e1e8f7971c3", 
      "logo": "https://assets.coingecko.com/coins/images/13699/thumb/masq.png?1696513446", 
      "decimals": 18
    }, 
    {
      "name": "AxonDAO Governance Token", 
      "abi": "ERC20_ABI", 
      "symbol": "AXGT", 
      "priority": 3, 
      "address": "0x9b700b043e9587dde9a0c29a9483e2f8fa450d54", 
      "logo": "https://assets.coingecko.com/coins/images/35290/thumb/AXGT-logo-7.png?1708076161", 
      "decimals": 18
    }, 
    {
      "name": "MintStakeShare", 
      "abi": "ERC20_ABI", 
      "symbol": "MSS", 
      "priority": 3, 
      "address": "0x4b556f3a476b58be7f35df77edd68fbe5076f706", 
      "logo": "https://assets.coingecko.com/coins/images/39424/thumb/logo200x200.png?1729946358", 
      "decimals": 18
    }, 
    {
      "name": "zkRace", 
      "abi": "ERC20_ABI", 
      "symbol": "ZERC", 
      "priority": 3, 
      "address": "0xa3a2cdd230f9b3ff6e01a01534a3ed3cbf049815", 
      "logo": "https://assets.coingecko.com/coins/images/17438/thumb/zkRace-logomark-border.png?1716518566", 
      "decimals": 18
    }, 
    {
      "name": "Epoch Island", 
      "abi": "ERC20_ABI", 
      "symbol": "EPOCH", 
      "priority": 3, 
      "address": "0x287f0d88e29a3d7aeb4d0c10bae5b902db69b17d", 
      "logo": "https://assets.coingecko.com/coins/images/33684/thumb/EpochLogo_200x200.png?1702731332", 
      "decimals": 18
    }, 
    {
      "name": "Gyroscope GYD", 
      "abi": "ERC20_ABI", 
      "symbol": "GYD", 
      "priority": 3, 
      "address": "0xca5d8f8a8d49439357d3cf46ca2e720702f132b8", 
      "logo": "https://assets.coingecko.com/coins/images/33428/thumb/GYD-gradient_resized_transparent.png?1702316822", 
      "decimals": 18
    }, 
    {
      "name": "StakeStone ETH", 
      "abi": "ERC20_ABI", 
      "symbol": "STONE", 
      "priority": 3, 
      "address": "0xd2012fc1b913ce50732ebcaa7e601fe37ac728c6", 
      "logo": "https://assets.coingecko.com/coins/images/33103/thumb/200_200.png?1702602672", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped USDM", 
      "abi": "ERC20_ABI", 
      "symbol": "WUSDM", 
      "priority": 3, 
      "address": "0x57f5e098cad7a3d1eed53991d4d66c45c9af7812", 
      "logo": "https://assets.coingecko.com/coins/images/33785/thumb/wUSDM_PNG_240px.png?1702981552", 
      "decimals": 18
    }, 
    {
      "name": "Morpho", 
      "abi": "ERC20_ABI", 
      "symbol": "MORPHO", 
      "priority": 3, 
      "address": "0xbaa5cc21fd487b8fcc2f632f3f4e8d37262a0842", 
      "logo": "https://assets.coingecko.com/coins/images/29837/thumb/Morpho-token-icon.png?1726771230", 
      "decimals": 18
    }, 
    {
      "name": "stickbug", 
      "abi": "ERC20_ABI", 
      "symbol": "STICKBUG", 
      "priority": 3, 
      "address": "0x345207814c0304f6bd3b28e42c09450d95b5dbb2", 
      "logo": "https://assets.coingecko.com/coins/images/35443/thumb/icon200x200.png?1708619642", 
      "decimals": 4
    }, 
    {
      "name": "Franklin OnChain U S  Government Money ", 
      "abi": "ERC20_ABI", 
      "symbol": "BENJI", 
      "priority": 3, 
      "address": "0x60cfc2b186a4cf647486e42c42b11cc6d571d1e4", 
      "logo": "https://assets.coingecko.com/coins/images/39660/thumb/FOBXX.jpg?1723523072", 
      "decimals": 18
    }, 
    {
      "name": "Super Best Friends", 
      "abi": "ERC20_ABI", 
      "symbol": "SUBF", 
      "priority": 3, 
      "address": "0xfaa4f3bcfc87d791e9305951275e0f62a98bcb10", 
      "logo": "https://assets.coingecko.com/coins/images/36368/thumb/1000017215.jpg?1711338058", 
      "decimals": 18
    }, 
    {
      "name": "Settled EthXY Token", 
      "abi": "ERC20_ABI", 
      "symbol": "SEXY", 
      "priority": 3, 
      "address": "0xd1917629b3e6a72e6772aab5dbe58eb7fa3c2f33", 
      "logo": "https://assets.coingecko.com/coins/images/33032/thumb/logo-circle.png?1700348518", 
      "decimals": 18
    }, 
    {
      "name": "Revenue Generating USD", 
      "abi": "ERC20_ABI", 
      "symbol": "RGUSD", 
      "priority": 3, 
      "address": "0x8e5e9df4f0ea39ae5270e79bbabfcc34203a3470", 
      "logo": "https://assets.coingecko.com/coins/images/38146/thumb/rgusd%28200_x_200_px%29.png?1716654569", 
      "decimals": 18
    }, 
    {
      "name": "Dollar", 
      "abi": "ERC20_ABI", 
      "symbol": "DOLLAR", 
      "priority": 3, 
      "address": "0x72e72193ea14ac3b469f881989d18a2ba021b4c6", 
      "logo": "https://assets.coingecko.com/coins/images/39312/thumb/pfp_200x200.png?1721706165", 
      "decimals": 6
    }, 
    {
      "name": "Propy", 
      "abi": "ERC20_ABI", 
      "symbol": "PRO", 
      "priority": 3, 
      "address": "0x18dd5b087bca9920562aff7a0199b96b9230438b", 
      "logo": "https://assets.coingecko.com/coins/images/869/thumb/propy-pro-logo.png?1737476645", 
      "decimals": 8
    }, 
    {
      "name": "U CASH", 
      "abi": "ERC20_ABI", 
      "symbol": "UCASH", 
      "priority": 3, 
      "address": "0x26cf750abaf38af7109effdbdf79ba50d2ee09a1", 
      "logo": "https://assets.coingecko.com/coins/images/2901/thumb/ucash.png?1696503651", 
      "decimals": 8
    }, 
    {
      "name": "Squid Game", 
      "abi": "ERC20_ABI", 
      "symbol": "SQUID", 
      "priority": 3, 
      "address": "0xfafb7581a65a1f554616bf780fc8a8acd2ab8c9b", 
      "logo": "https://assets.coingecko.com/coins/images/20506/thumb/squid.png?1696519912", 
      "decimals": 18
    }, 
    {
      "name": "Web 3 Dollar", 
      "abi": "ERC20_ABI", 
      "symbol": "USD3", 
      "priority": 3, 
      "address": "0xefb97aaf77993922ac4be4da8fbc9a2425322677", 
      "logo": "https://assets.coingecko.com/coins/images/38073/thumb/usd3%28200_x_200_px%29.png?1716449060", 
      "decimals": 18
    }, 
    {
      "name": "Unvest", 
      "abi": "ERC20_ABI", 
      "symbol": "UNV", 
      "priority": 3, 
      "address": "0x51707dc661630f8fd624b985fa6ef4f1d4d919db", 
      "logo": "https://assets.coingecko.com/coins/images/18119/thumb/UNV.jpg?1696517622", 
      "decimals": 18
    }, 
    {
      "name": "Yel Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "YEL", 
      "priority": 3, 
      "address": "0x949185d3be66775ea648f4a306740ea9eff9c567", 
      "logo": "https://assets.coingecko.com/coins/images/17429/thumb/Logo200.png?1696516976", 
      "decimals": 18
    }, 
    {
      "name": "RMRK", 
      "abi": "ERC20_ABI", 
      "symbol": "RMRK", 
      "priority": 3, 
      "address": "0x524d524b4c9366be706d3a90dcf70076ca037ae3", 
      "logo": "https://assets.coingecko.com/coins/images/18656/thumb/download_%281%29_%281%29.png?1696518126", 
      "decimals": 18
    }, 
    {
      "name": "Persistence One", 
      "abi": "ERC20_ABI", 
      "symbol": "XPRT", 
      "priority": 3, 
      "address": "0xc7edf7b7b3667a06992508e7b156eff794a9e1c8", 
      "logo": "https://assets.coingecko.com/coins/images/14582/thumb/Download%28black_Dark%29.png?1723470571", 
      "decimals": 6
    }, 
    {
      "name": "Backed ERNA   Bond", 
      "abi": "ERC20_ABI", 
      "symbol": "BERNA", 
      "priority": 3, 
      "address": "0x0f76d32cdccdcbd602a55af23eaf58fd1ee17245", 
      "logo": "https://assets.coingecko.com/coins/images/36757/thumb/200p_bERNA_3.png?1740503129", 
      "decimals": 18
    }, 
    {
      "name": "Kinetix Finance Token", 
      "abi": "ERC20_ABI", 
      "symbol": "KAI", 
      "priority": 3, 
      "address": "0x3c3860d89b81c91974fc1f8a41aeeef604c17058", 
      "logo": "https://assets.coingecko.com/coins/images/34031/thumb/KFI_Token_1.png?1703675672", 
      "decimals": 18
    }, 
    {
      "name": "PulseLaunch", 
      "abi": "ERC20_ABI", 
      "symbol": "LAUNCH", 
      "priority": 3, 
      "address": "0xf0d336e3a429596c924dd2723c0c4a0100a421db", 
      "logo": "https://assets.coingecko.com/coins/images/36829/thumb/gradient_black_rocket_200x200.png?1712557340", 
      "decimals": 18
    }, 
    {
      "name": "KOMPETE", 
      "abi": "ERC20_ABI", 
      "symbol": "KOMPETE", 
      "priority": 3, 
      "address": "0x8f019931375454fe4ee353427eb94e2e0c9e0a8c", 
      "logo": "https://assets.coingecko.com/coins/images/24298/thumb/200x200.png?1732826917", 
      "decimals": 10
    }, 
    {
      "name": "Dyl", 
      "abi": "ERC20_ABI", 
      "symbol": "DYL", 
      "priority": 3, 
      "address": "0x4a506181f07da5ddfda4ca4c2fa4c67001db94b4", 
      "logo": "https://assets.coingecko.com/coins/images/32550/thumb/Dyl-pfp-200x.png?1698479973", 
      "decimals": 18
    }, 
    {
      "name": "Corridor Finance", 
      "abi": "ERC20_ABI", 
      "symbol": "OOOI", 
      "priority": 3, 
      "address": "0xd7b675cd5c84a13d1d0f84509345530f6421b57c", 
      "logo": "https://assets.coingecko.com/coins/images/36057/thumb/corridor-logo-without-text-8bit.jpg?1710404509", 
      "decimals": 18
    }, 
    {
      "name": "Precipitate ai", 
      "abi": "ERC20_ABI", 
      "symbol": "RAIN", 
      "priority": 3, 
      "address": "0x1f1aa4d239002bb818536c95e9b762a1fc8484c1", 
      "logo": "https://assets.coingecko.com/coins/images/32405/thumb/RAIN_200-removebg-preview.png?1711371589", 
      "decimals": 18
    }, 
    {
      "name": "ResearchCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "RSC", 
      "priority": 3, 
      "address": "0xfbb75a59193a3525a8825bebe7d4b56899e2f7e1", 
      "logo": "https://assets.coingecko.com/coins/images/28146/thumb/RH_BOTTLE_CLEAN_Aug_2024_1.png?1732742001", 
      "decimals": 18
    }, 
    {
      "name": "Besa Gaming Company", 
      "abi": "ERC20_ABI", 
      "symbol": "BESA", 
      "priority": 3, 
      "address": "0x8c1851488f2daceae46d815dd204d5f6d946666a", 
      "logo": "https://assets.coingecko.com/coins/images/33283/thumb/Besa_Gaming_Company_BESA_200.png?1701363231", 
      "decimals": 9
    }, 
    {
      "name": "MeromAI", 
      "abi": "ERC20_ABI", 
      "symbol": "AIMR", 
      "priority": 3, 
      "address": "0x741777f6b6d8145041f73a0bddd35ae81f55a40f", 
      "logo": "https://assets.coingecko.com/coins/images/38491/thumb/YPg513HP_400x400.jpg?1717688335", 
      "decimals": 18
    }, 
    {
      "name": "DogeVerse", 
      "abi": "ERC20_ABI", 
      "symbol": "DOGEVERSE", 
      "priority": 3, 
      "address": "0x004aa1586011f3454f487eac8d0d5c647d646c69", 
      "logo": "https://assets.coingecko.com/coins/images/38495/thumb/DogeVerse_200x200.png?1717692269", 
      "decimals": 18
    }, 
    {
      "name": "Cookie DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "COOKIE", 
      "priority": 3, 
      "address": "0xc0041ef357b183448b235a8ea73ce4e4ec8c265f", 
      "logo": "https://assets.coingecko.com/coins/images/38450/thumb/cookie_token_logo_200x200.png?1733194528", 
      "decimals": 18
    }, 
    {
      "name": "Arcana arcUSD", 
      "abi": "ERC20_ABI", 
      "symbol": "ARCUSD", 
      "priority": 3, 
      "address": "0xaec9e50e3397f9ddc635c6c429c8c7eca418a143", 
      "logo": "https://assets.coingecko.com/coins/images/38490/thumb/USDa.png?1717688209", 
      "decimals": 18
    }, 
    {
      "name": "Smart Layer Network", 
      "abi": "ERC20_ABI", 
      "symbol": "SLN", 
      "priority": 3, 
      "address": "0xef0b105b4f2ce61d2a7ae62d03b1f4cb6c4fbeec", 
      "logo": "https://assets.coingecko.com/coins/images/35397/thumb/sln.jpeg?1708488815", 
      "decimals": 18
    }, 
    {
      "name": "Wormhole", 
      "abi": "ERC20_ABI", 
      "symbol": "W", 
      "priority": 3, 
      "address": "0xb0ffa8000886e57f86dd5264b9582b2ad87b2b91", 
      "logo": "https://assets.coingecko.com/coins/images/35087/thumb/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954", 
      "decimals": 18
    }, 
    {
      "name": "Aavegotchi", 
      "abi": "ERC20_ABI", 
      "symbol": "GHST", 
      "priority": 3, 
      "address": "0xcd2f22236dd9dfe2356d7c543161d4d260fd9bcb", 
      "logo": "https://assets.coingecko.com/coins/images/12467/thumb/GHST.png?1696512286", 
      "decimals": 18
    }, 
    {
      "name": "Wrapped MistCoin", 
      "abi": "ERC20_ABI", 
      "symbol": "WMC", 
      "priority": 3, 
      "address": "0x3d2eba645c44bbd32a34b7c017667711eb5b173c", 
      "logo": "https://assets.coingecko.com/coins/images/32490/thumb/355966EE-F4AD-4023-A38E-59B9DEF1C6C3.jpeg?1732678326", 
      "decimals": 2
    }, 
    {
      "name": "Etherisc DIP", 
      "abi": "ERC20_ABI", 
      "symbol": "DIP", 
      "priority": 3, 
      "address": "0xac86f3556cbd2b4d800d17adc3a266b500fcb9f5", 
      "logo": "https://assets.coingecko.com/coins/images/4586/thumb/dip.png?1696505164", 
      "decimals": 18
    }, 
    {
      "name": "BOO", 
      "abi": "ERC20_ABI", 
      "symbol": "BOO", 
      "priority": 3, 
      "address": "0xec1df7edfcdc2e2042c63252c1cef480f64f9189", 
      "logo": "https://assets.coingecko.com/coins/images/34234/thumb/boo_coin_%28200%29.png?1704306085", 
      "decimals": 18
    }, 
    {
      "name": "Roseon", 
      "abi": "ERC20_ABI", 
      "symbol": "ROSX", 
      "priority": 3, 
      "address": "0x7f604c7898d47f0f41049f40ceeeabe63fa3c45a", 
      "logo": "https://assets.coingecko.com/coins/images/29698/thumb/roseon.png?1696528631", 
      "decimals": 18
    }, 
    {
      "name": "Dinari ADBE", 
      "abi": "ERC20_ABI", 
      "symbol": "ADBED", 
      "priority": 3, 
      "address": "0xf20c96fffbda91b07f78592c1c887ba922ce9b7f", 
      "logo": "https://assets.coingecko.com/coins/images/53861/thumb/d-token-200.png?1737614564", 
      "decimals": 18
    }, 
    {
      "name": "Noggles", 
      "abi": "ERC20_ABI", 
      "symbol": "NOGS", 
      "priority": 3, 
      "address": "0x13741c5df9ab03e7aa9fb3bf1f714551dd5a5f8a", 
      "logo": "https://assets.coingecko.com/coins/images/37238/thumb/nogs.jpeg?1713851209", 
      "decimals": 18
    }, 
    {
      "name": "Dinari MSTR", 
      "abi": "ERC20_ABI", 
      "symbol": "MSTRD", 
      "priority": 3, 
      "address": "0x5de98c65a9a3c414550e6663666bc725c23c2e7b", 
      "logo": "https://assets.coingecko.com/coins/images/53672/thumb/d-token-200.png?1737007903", 
      "decimals": 18
    }, 
    {
      "name": "Dinari AVGO", 
      "abi": "ERC20_ABI", 
      "symbol": "AVGOD", 
      "priority": 3, 
      "address": "0x0f6c508ef7257c4b99bd1bc8aef750da64840813", 
      "logo": "https://assets.coingecko.com/coins/images/53862/thumb/d-token-200.png?1737614626", 
      "decimals": 18
    }, 
    {
      "name": "Dinari NLY", 
      "abi": "ERC20_ABI", 
      "symbol": "NLYD", 
      "priority": 3, 
      "address": "0xb3358ab71f784910de0ca766ebdab527323731b9", 
      "logo": "https://assets.coingecko.com/coins/images/53869/thumb/d-token-200.png?1737615761", 
      "decimals": 18
    }, 
    {
      "name": "Dinari BITB", 
      "abi": "ERC20_ABI", 
      "symbol": "BITBD", 
      "priority": 3, 
      "address": "0x5ea14145f62dbf26fc7b0eb8fa8c71e1af468207", 
      "logo": "https://assets.coingecko.com/coins/images/53863/thumb/d-token-200.png?1737614680", 
      "decimals": 18
    }, 
    {
      "name": "Dinari GBTC", 
      "abi": "ERC20_ABI", 
      "symbol": "GBTCD", 
      "priority": 3, 
      "address": "0xd0ca17153cbe8dd5f7b96f9a2c9e608faad7e904", 
      "logo": "https://assets.coingecko.com/coins/images/53867/thumb/d-token-200.png?1737615504", 
      "decimals": 18
    }, 
    {
      "name": "Dinari MARA", 
      "abi": "ERC20_ABI", 
      "symbol": "MARAD", 
      "priority": 3, 
      "address": "0xa483eca53adfef52f614ba1f76d5f49b0caeb7df", 
      "logo": "https://assets.coingecko.com/coins/images/53868/thumb/d-token-200.png?1737615592", 
      "decimals": 18
    }, 
    {
      "name": "Dinari WOOD", 
      "abi": "ERC20_ABI", 
      "symbol": "WOODD", 
      "priority": 3, 
      "address": "0xb8ebc0fc2453a1be3ab48db2de6237ce56e00c48", 
      "logo": "https://assets.coingecko.com/coins/images/53871/thumb/d-token-200.png?1737616705", 
      "decimals": 18
    }, 
    {
      "name": "Dinari SLX", 
      "abi": "ERC20_ABI", 
      "symbol": "SLXD", 
      "priority": 3, 
      "address": "0x0d794e3778fc6f5f0351c77a5c77bd21d26887f9", 
      "logo": "https://assets.coingecko.com/coins/images/53874/thumb/d-token-200.png?1737617906", 
      "decimals": 18
    }, 
    {
      "name": "Meeds DAO", 
      "abi": "ERC20_ABI", 
      "symbol": "MEED", 
      "priority": 3, 
      "address": "0xd9df947d2a8f9c28c37af7cb7c526022fb14efa2", 
      "logo": "https://assets.coingecko.com/coins/images/24281/thumb/meeds-logo-m-200-tr.png?1737794122", 
      "decimals": 18
    }, 
    {
      "name": "CreatorBid", 
      "abi": "ERC20_ABI", 
      "symbol": "BID", 
      "priority": 3, 
      "address": "0xa1832f7f4e534ae557f9b5ab76de54b1873e498b", 
      "logo": "https://assets.coingecko.com/coins/images/53878/thumb/creatorbid.jpg?1737623538", 
      "decimals": 18
    }, 
    {
      "name": "Threshold Network", 
      "abi": "ERC20_ABI", 
      "symbol": "T", 
      "priority": 3, 
      "address": "0x26f3901ac8a79c50fb0d8289c74f0d09adc42e29", 
      "logo": "https://assets.coingecko.com/coins/images/22228/thumb/nFPNiSbL_400x400.jpg?1696521570", 
      "decimals": 18
    }
  ]
};
