const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, {poolSize:10}, function(err, db) {
    if (err) { return console.log(err) }
    const dbName = 'mydb';
    var products = db.db(dbName);
    var products_to_add = [
        { id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' },
        { id: 2, name: 'Toothpaste', price: 3.99, type: 'Toiletries', description: 'Teeth Whitening' },
        { id: 3, name: 'Battery Pack', price: 12.99, type: 'Hardware', description: '12 Batteries per pack' }
    ];
    products.collection("products").insertMany(products_to_add, function(err, res) {
        if (err) { return console.log(err) }
        console.log("It worked, this many were inserted: " + res.insertedCount);
        db.close();
    });
});
