var joi = require('joi'),
    convert = require('joi-to-json-schema'),
    nodeUUID = require('node-uuid'),
    util = require('util');

// Message Schema is expanded to include UUID / DateStamp and other things as per the exercise. 
var messageSchema = require('./src/schema/message');
var messageValidator = require('./src/validtor/message');

// This will generate the JSON Schema for the Message on Console. A sapmle would be like that.
console.log(util.inspect(convert(messageSchema)));

// sample JSON to be tested for correctness of the message.
var sampleJson = {
    "type": "AA",
    "messageId": 1001,
    "text": "This is the message",
    "timestamp": "2017-03-22T15:45:04.422Z",
    "messageUuid": "c74d604c-c83f-4b21-8f46-6b0cb7d0bcce"
};

// sample JSON to be tested for correctness of the message.
var sampleInvalidUUIDJson = {
    "type": "AA",
    "messageId": 23,
    "text": "This is the message",
    "timestamp": "2017-03-22T15:45:04.422Z",
    "messageUuid": "CA761232-ED42-11CE-BACD-00AA03"
};

// sample JSON to be tested for correctness of the message.
var sampleInvalidDateJson = {
    "type": "AA",
    "messageId": 23909,
    "text": "This is the message",
    "timestamp": "2017-03-2215:45:04.422Z",
    "messageUuid": "CA761232-ED42-11CE-BACD-00AA03"
};

console.log();
console.log(sampleJson, "\n\n\nSample JSON Verfiied : ", messageValidator(sampleJson, messageSchema));
console.log();
console.log(sampleInvalidUUIDJson, "Sample Invalid UUID JSON Verfiied : ", messageValidator(sampleInvalidUUIDJson, messageSchema));
console.log();
console.log(sampleInvalidDateJson, "Sample Invalid UUID JSON Verfiied : ", messageValidator(sampleInvalidDateJson, messageSchema));
