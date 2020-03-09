require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net property grace brave bubble true'; 
let testAccounts = [
"0x924af8dbbdc2cf526f4431a08adca51ecc9931cdc5cea1fa920ca5fcca63dc8c",
"0xf24bd96011ae5e3cf62401652fea768d99e8194933a1e5d8544f00b7f5f56f93",
"0xe0f5d02791c1f3c2d028ab774040a6ba5a1da9261dd2366585ea89b4a6f717a8",
"0x65c5574a558c10d01135f654aaece4b32f0faf8fa3859693581feceb28a2cfab",
"0xbb4ee376bd9469f0a0e01d0accc57c7cde48b449c88773c515e1a6ea7c9f15d2",
"0xd34676b704e90e8e2cd4aad61b961ddc7e1d86fc71ed45ce4d830b439b2879a3",
"0x5f56d041441dda945691d2552b299d89e707ca7d98c8ec0f4d24b4cba8847db9",
"0xb3fc882ce190ae7885b6e487e6b28e5b3b95cbdfe03c5feb93125e6d3281083f",
"0x98efc014fb63c5d113f75366431522999da99ce779afb47d2220fecac6c9a9af",
"0x3e5766751a097ede861b85a62b8fcfc2e219ac90b168ecb3736c59196a4879c5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
