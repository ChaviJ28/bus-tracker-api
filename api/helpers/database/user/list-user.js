module.exports = {
    friendlyName: "Returns list of users",
    description: "Returns list of users",
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
        include_password: {
            type: "boolean",
            required: false
        }
    },

    fn: async function (inputs, exits) {
        var searchCriteria = inputs.search_criteria,
            promise = null,
            recordList = [],
            returnList = [];
        
        promise = User.find(searchCriteria);

        if (inputs.sort_criteria) {
            promise.sort(inputs.sort_criteria);
        }

        if (inputs.limit) {
            promise.limit(inputs.limit);
        }

        recordList = await promise.then();

        for (var i = 0; i < recordList.length; i++) {
            
            if(inputs.include_password && inputs.include_password == true){} else {
                delete recordList[i].password;
            }

            returnList.push(recordList[i]);
        }

        return exits.success(returnList);
    }
};