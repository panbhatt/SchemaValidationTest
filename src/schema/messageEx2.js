var joi = require('joi');

// Represents the BODY SCHEMA
var bodySchema = joi.object({
    'text': joi.string().required().description('Message Text'),
    'messageID': joi.string().optional().guid({
        version: ['uuidv4', 'uuidv5']
    }).description("unique ID of the message"),
    'timestamp': joi.date().iso().optional().description('Timestamp of message generation')

});

// Repreents the Message Schema.
var MessageSchema = joi.object({
    'type': joi.string().required().min(2).max(2).alphanum().uppercase().description('Type of message'),
    'userID': joi.string().required().alphanum().description('ID of the user receving the message'),
    'body': bodySchema

}).description('Message Schema');

module.exports = MessageSchema;
