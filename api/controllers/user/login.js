module.exports = {
    friendlyName: "Checks login details for User",
    description: "Checks login details for User",
    inputs: {
        data: {
            type: {},
            example: {
                phone_number: "57839827",
                password: "testpassword"
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
            userExist = [],
            loginToken = "",
            updateObj = {};

        try {
            if (inputs.data) {
                // check if user already exists
                searchCriteria = {
                    phone_number: inputs.data.phone_number
                };
                
                userExist = await sails.helpers.database.user.listUser(searchCriteria, undefined, undefined, true);
                sails.log(userExist)
                if (userExist.length > 0) {
                    validPassword = await sails.helpers.utility.bcrypt.comparePassword(inputs.data.password, userExist[0].password);

                    if (validPassword) {

                        returnObject = userExist;

                        // loginToken = await sails.helpers.model.user.generateLoginToken();

                        // updateObj = {
                        //     login_token: loginToken.token
                        // };

                        // await User.update({
                        //     id: userExist[0].id
                        // }, updateObj);

                        exits.success({
                            data: {
                                userObject: returnObject
                            }
                        });
                    } else {
                        error.push(await sails.helpers.utility.error.getAppError("user.invalid_password"));
                        exits.jsonError(error);
                    }
                } else {
                    error.push(await sails.helpers.utility.error.getAppError("user.invalid_login_credentials"));
                    exits.jsonError(error);
                }
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