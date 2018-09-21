const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, {poolSize:10}, function(err, db) {
    if (err) { return console.log(err) }
    const dbName = 'mydb';
    var products = db.db(dbName);

    dbo.createCollection("products", function(err, res) {
        if (err) { return console.log(err) }
        console.log("Collection created!");
        db.close();
    });

    // Insert products
    const products_to_add = [
        { _id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' },
        { _id: 2, name: 'Toothpaste', price: 3.99, type: 'Toiletries', description: 'Teeth Whitening' },
        { _id: 3, name: 'Battery Pack', price: 12.99, type: 'Hardware', description: '12 Batteries per pack' }
    ];
    products.collection("products").insertMany(products_to_add, function(err, res) {
        if (err) { return console.log(err) }
        console.log("Inserted: " + res.insertedCount);
    });
    // Insert products

    // Delete a product
    const one_product = { _id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' };
    products.collection("products").deleteOne(one_product, function(err, obj) {
        if (err) { return console.log(err) }
        console.log("Deleted: " + myquery.name);
        db.close();
    });
    // Delete a product

    // Update a product
    const product_to_update = { _id: 2 };
    var update_product = { $set: {name: "Mouthwash", description: "Cleans all the nooks and crannies" } };
    dbo.collection("products").updateOne(product_to_update, update_product, function(err, res) {
        if (err) { return console.log(err) }
        console.log("Updated");
        db.close();
    });
    // Update a product

    // Find products
    products.collection("products").findOne({}, function(err, result) {
        if (err) { return console.log(err) }
        console.log(result.name);
    });
    // Find products
});
