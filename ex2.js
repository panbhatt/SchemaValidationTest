var joi = require('joi'),
    convert = require('joi-to-json-schema'),
    nodeUUID = require('node-uuid'),
    util = require('util');

// Message Schema is expanded to include UUID / DateStamp and other things as per the exercise.
var messageSchema = require('./src/schema/messageEx2');
var validateEvent = require('./src/validtor/message');

// This will generate the JSON Schema for the Message on Console. A sapmle would be like that.
console.log(util.inspect(convert(messageSchema)));
console.log("\n");

// sample JSON to be tested for correctness of the message.
var eventJson = {
    "type": "IM",
    "userID": "AB1001",
    "body": {
        "text": "This is the message",
        "messageID": "c74d604c-c83f-4b21-8f46-6b0cb7d0bcce",
        "timestamp": "2017-03-22T15:45:04.422Z"
    }
};

console.log();
console.log(eventJson);
console.log("Sample JSON Verfiied : ", validateEvent(eventJson, messageSchema));
