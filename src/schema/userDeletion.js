var joi = require('joi');


var UserDeletionSchema = joi.object({
    'type': joi.string().required().min(2).max(2).alphanum().uppercase().valid('UD').description('Type of message'),
    'text': joi.string().description('Text'),
    'username': joi.string().required().alphanum().min(3).max(30).required()

}).description('User Deletion Schema');


module.exports = UserDeletionSchema;
