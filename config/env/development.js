module.exports = {
    security: {
        cors: {
            allRoutes: true,
            allowOrigins: '*',
        },
    },

    datastores: {
        default: {
            adapter: "sails-mongo",
            url: "mongodb+srv://surujbhalichavi:ziQd47gzK4KKeSf7@mapbox-local-test.nrrcqrs.mongodb.net/bus-tracker-dev?retryWrites=true&w=majority"
        }
    },

    log: {
        level: "debug"
    },

    port: 4001,

    // ssl: undefined

    models: {
        migrate: 'safe',
    },
};