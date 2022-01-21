// Avian Configuration

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;

// Statistics Configuration
config.name = 'avn';
config.coins = ['Avian'];

// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = 5000;
ports1.enabled = true;
ports1.type = 'shared';
ports1.difficulty = {};
ports1.difficulty.initial = 5.0;
ports1.difficulty.minimum = 1.0;
ports1.difficulty.maximum = 100.0;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 10;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);


// P2P Configuration
config.p2p = {};
config.p2p.enabled = false;
config.p2p.host = '127.0.0.1';
config.p2p.port = 8767;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.statisticsRefreshInterval = 5000;
config.settings.connectionTimeout = 600;
config.settings.hashrateWindow = 300;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Avian';
config.primary.coin.symbol = 'AVN';
config.primary.coin.asicboost = false;
config.primary.coin.getinfo = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = false;
config.primary.coin.staking = false;
config.primary.coin.rewards = '';
config.primary.coin.version = 1;

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'x16rt';
config.primary.coin.algorithms.block = 'x16rt';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = '';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = '52564c4d';//'5241564e';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('3c', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('7a', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('80', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'avn';

// Testnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = '';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = '52564e54';
config.primary.coin.testnet.pubKeyHash = Buffer.from('6F', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('C4', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('EF', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'avn';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 7896;
daemons1.username = '';
daemons1.password = '';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = true;
config.primary.payments.checkInterval = 20;
config.primary.payments.paymentInterval = 90;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.0100;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '127.0.0.1';
config.primary.payments.daemon.port = 7896;
config.primary.payments.daemon.username = '';
config.primary.payments.daemon.password = '';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = '';
recipient1.percentage = 0.01;
config.primary.recipients.push(recipient1);

// Export Configuration
module.exports = config;
