/**
 * User.js
 *
 * User
 */

module.exports = {
    attributes: {
        busNo: {
            type: "string",
            required: true
        },
        from: {
            type: "string",
            required: true
        },
        to: {
            type: "string",
            required: true
        },
        distance: {
            type: "string",
            required: false
        },
        coordinates:{
            type: "ref",
            required: false
        } 
    },
    constants: {
        
    }
};