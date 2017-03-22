var Hapi = require('hapi');
var Blipp = require('blipp');
var HapiSwagger = require('hapi-swagger');
var Inert = require('inert');
var Vision = require('vision');

var SpecRoutes = require('./controller/spec');
var ValidateRoutes = require('./controller/validate');
var server = new Hapi.Server();

// Providing connection Settings.
server.connection({
    port: 3000,
    routes: {
        validate: {
            options: {
                stripUnknown: false
            }
        }
    }
});

// Registering the routes.
server.route(SpecRoutes);
server.route(ValidateRoutes);


// Registering the plugins. Swagger for API UI
server.register([Inert,
    Blipp,
    Vision,
    HapiSwagger
], (err) => {
    if (err) {
        console.error("There is a problem while registering the pluginr ", err);
    } else {
        server.start((err) => {
            if (!err) console.log('Server starts at :-> ', server.info.uri);
            else console.log('An Error occured, while Starting with the server  ', err);
        })

    }
});;
