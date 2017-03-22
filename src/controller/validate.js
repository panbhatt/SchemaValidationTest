var convert = require('joi-to-json-schema');
var joi = require('joi');
var Boom = require('boom');

var schemaUtility = require('./../utility');
var messageValidator = require('./../validtor/message');

module.exports = {
    method: 'post',
    path: '/validate',
    config: {
        description: 'Will validate the JSON for a corressponding Schema',
        handler: function(req, reply) {

            var body = req.payload;
            var eventCode = body.type;
            console.log("code = ", req.payload);
            if (!eventCode) {
                reply(Boom.badRequest("Event Code Missing"));
            } else {
                var schema = schemaUtility.getSchema(eventCode);
                if (!schema) {
                    reply(Boom.notFound("Invalid Event Code"));
                } else {
                    let validationResult = messageValidator(body, schema, true);
                    console.log("VALIDATION REUSLT ", validationResult);
                    if (validationResult === true) {
                        reply({
                            "status": "success",
                            "message": "Successfully parsed against the schema"
                        });
                    } else {
                        if (Array.isArray(validationResult))
                            reply(Boom.badRequest(validationResult));
                    }
                }
            }

        },
        tags: ['api'],
        validate: {
            payload: joi.object().allow(null)
        },
    }
};
