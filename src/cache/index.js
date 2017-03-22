var redis = require('redis');

var config = require('./../config');

// Reading the config's from the config file.
var client = redis.createClient(config.redis);

// Exporting the Cache get and set functionality. 
module.exports = {
    get: function(key) {
        return client.get(key);
    },
    set: function(key, value) {
        client.set(key, value);
    }
}
