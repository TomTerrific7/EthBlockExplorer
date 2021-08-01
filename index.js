const { getAddress, isAddress } = require("@ethersproject/address");
const { ethers, Wallet, utils } = require("ethers");
const url = 'https://mainnet.infura.io/v3/9629a144755d44f2b1f5b38495aed378'
const provider = new ethers.providers.JsonRpcProvider(url);
const bootstrap = require('bootstrap')



//Account Methods
 async function accountBalance() {
    const resolver = await provider.getResolver("ricmoo.eth");
    let address = await resolver.getAddress();
   balance = ethers.utils.formatEther(
        await provider.getBalance(address,"latest")),
        console.log(balance)
    }

 
 accountBalance();

 // Block Methods
async function latestBlock() {
    const block = await provider.getBlock("latest").then((result) => {
     console.log(result);
     
 });
 }
 latestBlock();


 

 


 
    