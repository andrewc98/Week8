const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
// Use connect method to connect to the server
MongoClient.connect(url, {poolSize:10}, function(err, client) {
    if (err) { return console.log(err) }
    const dbName = 'mydb';
    const db = client.db(dbName);
});
