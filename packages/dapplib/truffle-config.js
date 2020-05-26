require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remember come harvest glide flower general'; 
let testAccounts = [
"0x8a8e4ddd245ce52787c6de4688e33eacfe80057cddd18a5e82c4cf34aa076f16",
"0xf98a37a2b418683a304abf3ceae7b155bc8a9376a5d0aa2e7bc587dd650d061b",
"0x4e65a4a6b223b505656adf3878adeb827228fe08ed2b40012a0b2175b8509837",
"0x84d6f1fe757044efc020e80e7d13cab904375591f7503281f1b6df25c9cb0a51",
"0x5d2f48bf690e356a0408cb7fe48ecf29c07edde23ce10cb408c476a67676338b",
"0xc5b4cc304a5b8e4252bff5fef5b20143677d60c07e4b52808c70f4adcccc6c13",
"0xa2568e0b708951eaf4e30c62499ec772aa6ac632bd7586ace5c82833f65a8134",
"0x70c273dfe19e4818ae46ebf9de63106392d715fad3241acc267fd7fb4e73aa11",
"0x49f59a84d3e5405e2a4c4ef23fd2748b3a6612d13753b0263971b05566a8f419",
"0xedab83c256ce05674fd9363c98bbf9d5cc473f1fb3de6a1a2274d8edde42fa04"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
