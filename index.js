var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

if(!web3.eth.net.isListening()){
    console.log("Please start your node");
}
else{
    console.log("Connect successfully!");
}
// console.log("isConnected=");
// web3.eth.net.isListening().then(console.log);




