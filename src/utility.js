var UserCreationSchema = require('./schema/userCreation');
var UserDeletionSchema = require('./schema/userDeletion');
var UserUpdationSchema = require('./schema/userUpdation');


module.exports = {
    // This function will return the type of scheme based on the
    getSchema: function(eventCode) {
        if (eventCode === 'UC') {
            return UserCreationSchema;
        }
        if (eventCode === 'UD') {
            return UserDeletionSchema;
        }
        if (eventCode === 'UU') {
            return UserUpdationSchema;
        }
        return undefined;
    },
    // This will represent the type of schema we have.
    schemaList: ['UC', 'UD', 'UU']
}
