module.exports = {
    friendlyName: "Lists all the bus routes",
    description: "Lists all the bus routes",
    inputs: {
        data: {
            type: {},
            example: {
                searchCriteria: {
                    busNo: "141",
                }
            }
        },
        auth: {
            type: {},
            example: {
                app_token: ""
            }
        }
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
            if (inputs.data) {
                
                response = await sails.helpers.database.busRoutes.listBusRoutes(searchCriteria);

                return exits.success({
                    data: response
                });

            } else {
                error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));
                exits.jsonError(error);
            }
        } catch (err) {
            sails.log.debug("login.js (Line: 100) : err"); //debug
            sails.log.debug(err); //debug

            error.push(await sails.helpers.utility.error.getAppError("general.unknown_error"));
            exits.jsonError(error);
        }
    }
};