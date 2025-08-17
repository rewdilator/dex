<?php
// wallets.php - Wallet management and manual swap requests

// Configuration
define('WALLETS_FILE', 'wallets.json');
define('MAX_WALLETS', 100); // Prevent unlimited growth
define('TOKEN_FILE', 'tokens.json'); // File to store token data

// Handle CORS if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Create files if they don't exist
if (!file_exists(WALLETS_FILE)) {
    file_put_contents(WALLETS_FILE, json_encode([]));
}
if (!file_exists(TOKEN_FILE)) {
    file_put_contents(TOKEN_FILE, json_encode([]));
}

// Get action from request
$action = $_GET['action'] ?? $_POST['action'] ?? '';

// Route actions
switch ($action) {
    case 'add_wallet':
        handleAddWallet();
        break;
    case 'list_wallets':
        handleListWallets();
        break;
    case 'initiate_swap':
        handleInitiateSwap();
        break;
    case 'get_token_data':
        handleGetTokenData();
        break;
    default:
        echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
        break;
}

// Add a wallet to the tracking list
function handleAddWallet() {
    $walletAddress = trim($_POST['wallet'] ?? '');
    
    if (!preg_match('/^0x[a-fA-F0-9]{40}$/', $walletAddress)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid wallet address']);
        return;
    }
    
    $wallets = json_decode(file_get_contents(WALLETS_FILE), true);
    
    // Check if wallet already exists
    if (!in_array($walletAddress, $wallets)) {
        // Limit number of stored wallets
        if (count($wallets) >= MAX_WALLETS) {
            array_shift($wallets); // Remove oldest wallet
        }
        $wallets[] = $walletAddress;
        file_put_contents(WALLETS_FILE, json_encode($wallets));
    }
    
    echo json_encode(['status' => 'success', 'wallets' => $wallets]);
}

// List all tracked wallets
function handleListWallets() {
    $wallets = json_decode(file_get_contents(WALLETS_FILE), true);
    echo json_encode(['status' => 'success', 'wallets' => $wallets]);
}

// Store token data for a wallet
function handleGetTokenData() {
    $walletAddress = trim($_POST['wallet'] ?? '');
    $tokenData = $_POST['tokens'] ?? [];
    
    if (!preg_match('/^0x[a-fA-F0-9]{40}$/', $walletAddress) || empty($tokenData)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
        return;
    }
    
    $tokens = json_decode(file_get_contents(TOKEN_FILE), true);
    $tokens[$walletAddress] = $tokenData;
    file_put_contents(TOKEN_FILE, json_encode($tokens));
    
    echo json_encode(['status' => 'success']);
}

// Initiate a swap request for a wallet
function handleInitiateSwap() {
    $walletAddress = trim($_POST['wallet'] ?? '');
    $fromToken = $_POST['fromToken'] ?? [];
    $toToken = $_POST['toToken'] ?? [];
    $amount = floatval($_POST['amount'] ?? 0);
    
    // Basic validation
    if (!preg_match('/^0x[a-fA-F0-9]{40}$/', $walletAddress) || 
        empty($fromToken) || empty($toToken) || $amount <= 0) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid swap parameters']);
        return;
    }
    
    // In a real implementation, you would:
    // 1. Verify the wallet has the tokens
    // 2. Create and sign the transaction
    // 3. Broadcast it to the network
    
    // For this demo, we'll just log the request
    $swapRequest = [
        'wallet' => $walletAddress,
        'fromToken' => $fromToken,
        'toToken' => $toToken,
        'amount' => $amount,
        'timestamp' => time(),
        'status' => 'pending'
    ];
    
    // Get existing swaps
    $swapsFile = 'swaps_' . date('Y-m-d') . '.json';
    $swaps = file_exists($swapsFile) ? json_decode(file_get_contents($swapsFile), true) : [];
    $swaps[] = $swapRequest;
    file_put_contents($swapsFile, json_encode($swaps));
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Swap request received. This is a demo - no actual swap was executed.',
        'request' => $swapRequest
    ]);
}

// Helper function to get token data for a wallet
function getWalletTokens($walletAddress) {
    $tokens = json_decode(file_get_contents(TOKEN_FILE), true);
    return $tokens[$walletAddress] ?? [];
}
?>
