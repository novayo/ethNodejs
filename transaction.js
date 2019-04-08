const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');
/*
* connect to ethereum node
*/ 
const ethereumUri = 'http://localhost:8545';
const address = '0xf061f805973a5dbef437b21f2e2834572a515cdd'; // user
const user = 'qweszxc6304';

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(ethereumUri));

if(!web3.isConnected()){
    throw new Error('unable to connect to ethereum node at ' + ethereumUri);
}else{
    console.log('connected to ehterum node at ' + ethereumUri);
    let coinbase = web3.eth.coinbase;
    console.log('coinbase:' + coinbase);
    let balance = web3.eth.getBalance(coinbase);
    console.log('balance:' + web3.fromWei(balance, 'ether') + " ETH");
    let accounts = web3.eth.accounts;
    console.log(accounts);


    if (web3.personal.unlockAccount(address, user)) {
        console.log(`${address} is unlocaked`);
    }else{
        console.log('unlock failed');
    }
    let ABI = 
    [
        {
          "constant": false,
          "inputs": [],
          "name": "checkGoalReached",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "ended",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "numInvestors",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalAmount",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "status",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "goalAmount",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "deadline",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "investors",
          "outputs": [
            {
              "name": "addr",
              "type": "address"
            },
            {
              "name": "amount",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "kill",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "fund",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_duration",
              "type": "uint256"
            },
            {
              "name": "_goalAmount",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        }
    ]
    let con = web3.eth.contract(ABI).at("0x0aa00c16285104d5f13c87ed7a11f1447c2bf058");
    // console.log(con);
    console.log(con.deadline());
    console.log(con.ended());
    console.log(con.status());

    // con.fund.sendTransaction({from:web3.eth.accounts[0], gas:5000000, value: web3.toWei(80, "ether")});
    con.checkGoalReached.sendTransaction({from:web3.eth.accounts[0], gas:5000000});
    
    console.log(con.investors(2)[0]);
    
    console.log(con.ended());
    console.log(con.status());

    console.log(web3.fromWei(con.investors(2)[1], "ether"));
    console.log(web3.fromWei(con.totalAmount(), "ether"));
}