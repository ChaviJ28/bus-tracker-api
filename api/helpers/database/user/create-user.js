module.exports = {
    friendlyName: "Creates a user record",
    description: "Creates a user record",
    inputs: {
        params: {
            type: "ref",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        var recordsAdded = await User.create(inputs.params).fetch();

        return exits.success(recordsAdded);
    }
};