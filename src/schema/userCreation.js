var joi = require('joi');


var UserCreationSchema = joi.object({
    'type': joi.string().required().min(2).max(2).alphanum().uppercase().description('Type of message'),
    'text': joi.string().description('Text'),
    'body': joi.object({
        'username': joi.string().required().alphanum().min(3).max(30).required(),
        'password': joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/),
        'email': joi.string().email().required(),
        'locked': joi.boolean()
    })

}).description('User Creation Schema');


module.exports = UserCreationSchema;
