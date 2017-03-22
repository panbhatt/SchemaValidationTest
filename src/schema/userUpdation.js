var joi = require('joi');


var UserUpdationSchema = joi.object({
    'type': joi.string().required().min(2).max(2).alphanum().uppercase().valid('UU').description('Type of message'),
    'text': joi.string().description('Text'),
    'body': joi.object({
        'email': joi.string().email().optional(),
        'locked': joi.boolean().optional()
    })

}).description('User Updation Schema');


module.exports = UserUpdationSchema;
