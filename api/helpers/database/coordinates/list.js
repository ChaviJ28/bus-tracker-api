module.exports = {
    friendlyName: "Returns list of coordinates",
    description: "Returns list of coordinates",
    inputs: {
        search_criteria: {
            type: "ref",
            required: true
        },
        sort_criteria: {
            type: "ref",
            required: false
        },
        limit: {
            type: "number",
            required: false
        },
    },

    fn: async function (inputs, exits) {
        var searchCriteria = inputs.search_criteria,
            promise = null,
            recordList = [],
            returnList = [];
        
        promise = Coordinates.find(searchCriteria);

        if (inputs.sort_criteria) {
            promise.sort(inputs.sort_criteria);
        }

        if (inputs.limit) {
            promise.limit(inputs.limit);
        }

        recordList = await promise.then();

        return exits.success(recordList);
    }
};