//import { getAddress, isAddress } from "@ethersproject/address";
//const { ethers, Wallet, utils } = require("ethers");
import { ethers, Wallet, utils } from "ethers";
const url = 'https://mainnet.infura.io/v3/9629a144755d44f2b1f5b38495aed378'
const provider = new ethers.providers.JsonRpcProvider(url);
//const bootstrap = require('bootstrap')

(async () => { 
//Account Methods
 async function accountBalance() {
    const resolver = await provider.getResolver("ricmoo.eth");
    let address = await resolver.getAddress();
   let balance = ethers.utils.formatEther(
        await provider.getBalance(address,"latest"))
        console.log(balance)
    }

 
 await accountBalance();

 // Block Methods
async function latestBlock(number = "latest") {
    const block = await provider.getBlock(number)
    return block;
 }
 var recentBlock = await latestBlock();

 // List blocks in table
 for (var i = 0; i < 10; i++) {
   var block = await latestBlock(recentBlock.number-i);
   var number = block.number;
   var hash = block.hash;
   var time = block.timestamp;
   $('tbody').append("<tr><td>" + number + "</td><td>" + hash + "</td><td>" + time + "</td></tr>");
 }


})();

 

 


 
    