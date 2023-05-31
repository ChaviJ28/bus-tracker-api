/**
 * User.js
 *
 * User
 */

module.exports = {
    attributes: {
        first_name: {
            type: "string",
            required: true
        },
        last_name: {
            type: "string",
            required: true
        },
        phone_number: {
            type: "string",
            required: true
        },
        name: {
            type: "string",
            required: false
        },
        password: {
            type: "string",
            required: true
        },
        dob: {
            type: "string",
            required: true
        },
        mnemonic: {
            type: "string",
            required: false
        },
        wallet_address: {
            type: "string",
            required: false
        },
        country: {
            type: "string",
            required: false
        },
        gender: {
            type: "string",
            isIn: ['male', 'female', 'others'],
            defaultsTo: "male",
        },
        status: {
            type: "string",
            isIn: ['active', 'unactive'],
            defaultsTo: "active",
        },
        login_token: {
            type: "string",
            required: false
        }
    },
    constants: {
        status: {
            active: "active",
            unactive: "unactive",
        },
    }
};