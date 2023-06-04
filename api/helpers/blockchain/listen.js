module.exports = {
    friendlyName: "Get the application error",
    description: "Get the application error",
    inputs: {},

    fn: async function (inputs, exits) {
        var ethers = require('ethers'),
            provider = null,
            address = "0x8D100F09A6e14FE1537204B39A563a5e19aB45E2",
            abi = await sails.helpers.blockchain.abi.getTrackerAbi(),
            contract = new ethers.Contract(address, abi),
            iface = null,
            decodedData = null,
            errorParts = [];

        try {
            console.log(contract)
            // console.log(ethers)
            console.log(ethers.JsonRpcProvider)
            provider = new ethers.JsonRpcProvider("https://ethereum-goerli-rpc.allthatnode.com/");
            iface = new ethers.Interface(abi);

            console.log("provider", provider)
            provider.on('block', async (blockNumber) => {
                try {
                    const logs = await provider.getLogs({
                        address: address,
                        // topics: ,
                        // fromBlock: blockNumber,
                        // toBlock: blockNumber,
                    });

                    logs.forEach(async (log) => {
                        console.log('Event received', log);

                        if (log.topics[0] == "0x96d9b27953499d0896625a928a97e474c933ebcbaacba339a4aaed7e1050368b") {
                            decodedData = iface.decodeEventLog('Track', log.data, log.topics);

                            console.log('Decoded log data:', decodedData);
                            // Code from here would be run immediately when event appeared
                            // add the coord to the bus route
                            params = {
                                x: decodedData[0],
                                y: decodedData[1],
                                busNo: decodedData[2],
                                from: decodedData[3]
                            }
                            await Coordinates.create(params).fetch();
                        }

                    });
                } catch (error) {
                    console.log(error);
                }
            })
            // contract.on("Track", (from, to, value, event) => {
            //     let info = {
            //       from: from,
            //       to: to,
            //       value: ethers.utils.formatUnits(value, 6),
            //       data: event,
            //     };
            //     console.log(JSON.stringify(info, null, 4));
            //   });

            return exits.success({});
        } catch (err) {
            console.log(err);
            errorDetails = sails.config.apperrors.general.unknown_error;

            return exits.success(errorDetails);
        }
    }
};