var dustLimit = 546;
bsv.Transaction.DUST_AMOUNT = dustLimit;
var network = 'main';
var ownerPath = 'm/0/0';
var pursePath = 'm/0/1';
var feePerKb = 250;
bsv.Transaction.FEE_PER_KB = feePerKb;
var app = 'mini wallet';
var splits = 10;
var api = localStorage.api || 'run';
var bc = localStorage.api || 'run';
var timeout = 600000;
var apiKey = '';
var idb = indexedDB || mozIndexedDB || webkitIndexedDB || msIndexedDB;
var feeThreshold = 1;
var run;
var enableRelayXPaymail = true;
const bsvtxExplorer = 'https://whatsonchain.com/tx/';
const rundbhost = '';
var trust = localStorage?.trust || "2";
const RUN_0_6_FILTER = '006a0372756e0105';
const banned = [];
var spendLimit = parseInt(localStorage.spendLimit) || 0;
const tomeContract = '0ee653aa41f47990d185463625f0d3a1c89f80a58d6c07f1734758cd6d8abd4c_o2';
const dbVersion = 2;
const NFT_FEE_RATE = 0.025;
const TOKEN_FEE_RATE = 0.002;
const FEE_ADDRESS = '1A5RmDzYmmt87F7Gu24jjYtx1HGiXRdz9q';
const BURN_FEE_ADDRESS = '1MK626bkUBKiwAr93XJELHffBSM5psKpHW';