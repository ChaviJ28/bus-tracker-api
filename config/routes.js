module.exports.routes = {

    //user
    "get /api": {
        action: "index"
    },

    //user
    "post /api/v1/user/register": {
        action: "user/register"
    },

    "post /api/v1/user/login": {
        action: "user/login"
    },

    "post /api/v1/user/update": {
        action: "user/update"
    },

    //bus-routes
    "post /api/v1/bus-routes/list": {
        action: "bus-routes/list"
    },


};
