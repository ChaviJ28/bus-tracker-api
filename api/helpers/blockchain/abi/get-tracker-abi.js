module.exports = {
    friendlyName: "serve tracker abi",
    description: "serve tracker abi",
    inputs: {},

    fn: async function (inputs, exits) {
        return exits.success([
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_newAddress",
                        "type": "address"
                    }
                ],
                "name": "connect",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addressToRemove",
                        "type": "address"
                    }
                ],
                "name": "disconnect",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    }
                ],
                "name": "Connect",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Disconnect",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_x",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_y",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_busId",
                        "type": "string"
                    }
                ],
                "name": "track",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "_x",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "_y",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "_busId",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    }
                ],
                "name": "Track",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "addresses",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ])
    }
};