var joi = require('joi');

// Thi smethod returns either TRUE/FALSE/Error Details if the validation fails.
var verifyFunction = function verifyCorrectness(obj, schema, returnMessage) {
    var result = joi.validate(obj, schema);
    if (result.error == null) {
        return true;
    } else {
        //console.error("An Error occured, while parsing. ->  ", result.error);
        var returnDetails = [];
        result.error.details.forEach(function(detail) {
            console.log("Validation Error -> Path: ", detail.path, "  Message : ", detail.message);
            returnDetails.push("Validation Error -> Path: ", detail.path, "  Message : ", detail.message);
        });
        if (returnMessage) {
            return returnDetails;
        } else
            return false;
    }
};

module.exports = verifyFunction;
