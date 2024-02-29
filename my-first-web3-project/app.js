// Connect to Ethereum network
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Set the contract address and abi
var contractAddress = 'YOUR_CONTRACT_ADDRESS';
var contractAbi = YOUR_CONTRACT_ABI;

// Create an instance of the contract
var simpleStorageContract = new web3.eth.Contract(contractAbi, contractAddress);

// Function to set message in the contract
function setMessage() {
    var message = document.getElementById("message").value;
    simpleStorageContract.methods.setMessage(message).send({from: 'YOUR_ACCOUNT_ADDRESS'})
    .then(function(receipt){
        console.log(receipt);
    });
}

// Function to get message from the contract
function getMessage() {
    simpleStorageContract.methods.getMessage().call()
    .then(function(message){
        document.getElementById("output").innerText = "Message: " + message;
    });
}
