var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

if(!web3.isConnected()){
    console.log("Please start your node");
}
else{
    // web3.eth.accounts.create();
    console.log(web3.version);
    console.log("Connect successfully!");
    console.log('coinbase : ' + web3.eth.coinbase);
    console.log(web3.eth.accounts);
    let balance = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]), 'ether').toFixed(2);
    console.log(balance);

}



