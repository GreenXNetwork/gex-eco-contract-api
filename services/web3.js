var debug = require('debug')('my-express-app:web3');
var config = require('../config');

var Web3 = require('web3');

//get info from config.js 
var web3 = new Web3(new Web3.providers.WebsocketProvider(config.get('contract:host')));
var contract = new web3.eth.Contract(config.get('contract:abi'), config.get('contract:contractAddress'));

//TODO: sync with database
contract.getPastEvents('allevents',{ filter: {}, fromBlock: 0, toBlock: 'latest' }, function(error, result){
    if (!error){
        //debug('Web3: ' + JSON.stringify(result));
    }
});