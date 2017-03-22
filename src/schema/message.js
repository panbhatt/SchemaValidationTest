var joi = require('joi');


var MessageSchma = joi.object({
    'type': joi.string().required().min(2).max(2).alphanum().uppercase().description('Type of message'),
    'messageId': joi.number().integer().required().min(1000).description('Message Integer ID'),
    'text': joi.string().optional().description('Message Text'),
    'timestamp': joi.date().iso().optional().description('Timestamp of message generation'),
    'messageUuid': joi.string().optional().guid({
        version: ['uuidv4', 'uuidv5']
    }).description("UUID of the message")

}).description('Message Schema');


module.exports = MessageSchma;
