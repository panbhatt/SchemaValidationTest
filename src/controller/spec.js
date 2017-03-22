var convert = require('joi-to-json-schema');
var joi = require('joi');
var Boom = require('boom');
var Cache = require('cache');

var schemaUtility = require('./../utility');


module.exports = [{
        method: 'get',
        path: '/spec',
        config: {
            description: 'Will Return the schema of all the Events',
            handler: function(req, reply) {
                var allSchemas = schemaUtility.schemaList;
                var schemaArray = [];
                allSchemas.forEach((schemaCode) => {
                    var schema = schemaUtility.getSchema(schemaCode);
                    if (schema) {
                        schemaArray.push(convert(schema));
                    }
                });
                reply(schemaArray);
            },
            tags: ['api']
        }
    },
    {
        method: 'get',
        path: '/spec/{type}/',
        config: {
            description: 'Will Return the schema of the a specific type of Event',
            handler: function(req, reply) {
                console.log("TYPE ", req.params.type);
                var eventCode = req.params.type;
                var cacheResult = Cache.get(eventCode);
                var schema;
                if (!cacheResult)
                    schema = schemaUtility.getSchema(eventCode);
                else {
                    schema = cacheResult;
                }
                if (schema) {
                    var result = convert(schema);
                    reply(result);
                    Cache.set(eventCode, schema);
                } else
                    reply(Boom.notFound());
            },
            tags: ['api'],
            validate: {
                params: {
                    type: joi.string()
                        .required().min(2).max(2).default('UC')
                        .description('Event Code '),
                }
            }
        },

    }
]
