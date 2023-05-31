module.exports = {
    friendlyName: "Creates a new User",
    description: "Creates a new User",
    inputs: {
        data: {
            type: {},
            example: {
                email: "suyash@codevigor.com",
                full_name: "suyash sumaroo",
                usdc_public_address: "123456789",
                password: "54912170",
                braincloud_user_id: "123456789"
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
        try {
            var error = [],
                insertParams = {},
                addedResponse = null,
                alreadyExist = [],
                searchCriteria = {};

            if (inputs.data) {

                if (inputs.data.password) {
                    hashPassword = await sails.helpers.utility.bcrypt.hashPassword(inputs.data.password);
                    inputs.data.password = hashPassword
                }

                searchCriteria = {
                    phone_number: inputs.data.phone_number
                };

                alreadyExist = await sails.helpers.database.user.listUser(searchCriteria);

                if (alreadyExist.length > 0) {
                    error.push(await sails.helpers.utility.error.getAppError("user.phone_number_already_exist"));
                    return exits.jsonError(error);
                } else {
                    insertParams = inputs.data;

                    addedResponse = await sails.helpers.database.user.createUser(insertParams);

                    return exits.success({
                        data: addedResponse
                    });
                }
            }

        } catch (e) {
            sails.log.debug("register.js (Line: 144) : e"); //debug
            sails.log.debug(e); //debug

            error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));
            return exits.jsonError(error);
        }
    }
};