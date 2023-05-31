module.exports = {
    friendlyName: "Update user",
    description: "Update user",
    inputs: {
        data: {
            type: {},
            example: {
                search_criteria: {
                    id: "123456789"
                },
                update_params: {
                    first_name: "Chavi"
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
    fn: async function(inputs, exits) {
        var req = this.req,
            error = [];

        try {
            if (inputs.data && inputs.data.search_criteria && inputs.data.update_params) {
                updateResponse = await User.update(inputs.data.search_criteria, inputs.data.update_params)

                return exits.success({
                    data: updateResponse
                });
            } else {
                error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));
                return exits.jsonError(error);
            }
        } catch (err) {
            sails.log.debug(err);
            error.push(await sails.helpers.utility.error.getAppError("general.update_error"));
            exits.jsonError(error);
        }
    }
}