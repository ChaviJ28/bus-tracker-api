module.exports = {
    friendlyName: "Lists all the bus routes",
    description: "Lists all the bus routes",
    inputs: {
    },
    exits: {
        jsonError: {
            responseType: "jsonError"
        },
        success: {
            responseType: "jsonOk"
        }
    },
    fn: async function (inputs, exits) {
        var error = [],
            validPassword = false,
            returnObject = {},
            searchCriteria = {},
            response = [],
            loginToken = "",
            updateObj = {};

        try {
            this.res.json({
                abc: "asd"
            })
        } catch (err) {
            sails.log.debug("login.js (Line: 100) : err"); //debug
            sails.log.debug(err); //debug

            error.push(await sails.helpers.utility.error.getAppError("general.unknown_error"));
            exits.jsonError(error);
        }
    }
};