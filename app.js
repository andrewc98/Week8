const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, {poolSize:10}, function(err, client) {
    if (err) { return console.log(err) }
});
