const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, {poolSize:10}, function(err, db) {
    if (err) { return console.log(err) }
    const dbName = 'mydb';
    var products = db.db(dbName);
    const products_to_add = [
        { _id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' },
        { _id: 2, name: 'Toothpaste', price: 3.99, type: 'Toiletries', description: 'Teeth Whitening' },
        { _id: 3, name: 'Battery Pack', price: 12.99, type: 'Hardware', description: '12 Batteries per pack' }
    ];
    products.collection("products").insertMany(products_to_add, function(err, res) {
        if (err) { return console.log(err) }
        console.log("It worked, this many were inserted: " + res.insertedCount);
    });
    products.collection("products").findOne({}, function(err, result) {
        if (err) { return console.log(err) }
        console.log(result.name);
    });

    // Delete a product
    const one_product = { _id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' };
    products.collection("products").deleteOne(one_product, function(err, obj) {
        if (err) { return console.log(err) }
        console.log("Deleted: " + myquery.name);
        db.close();
    });
    // Delete a product

    // Update a product
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
    // Update a product
});
