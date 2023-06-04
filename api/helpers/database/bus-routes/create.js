module.exports = {
    friendlyName: "Creates a bus route record",
    description: "Creates a bus route record",
    inputs: {
        params: {
            type: "ref",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        var recordsAdded = await BusRoutes.create(inputs.params).fetch();

        return exits.success(recordsAdded);
    }
};