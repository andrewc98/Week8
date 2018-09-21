var express = require("express");
var app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
var port = 3000;
var server = http.listen(port,function(){
    var host = server.address().address;
    console.log('Server listening on ' + host + ':' + port);
});

app.get('/home',function(request,response){
    response.sendFile(__dirname + "/www/index.html");
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        const dbName = 'mydb';
        var products = db.db(dbName);
    
        // Drop products
        products.collection("products").drop(function(err, res) {
            if (err) { return console.log(err) }
            console.log(res);
        });
        // Drop products
    
        // Create products
        products.createCollection("products", function(err, res) {
            if (err) { return console.log(err) }
            console.log("Created");
        });
        // Create products
    
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
            console.log("Deleted: " + one_product.name);
        });
        // Delete a product
    
        // Update a product
        const product_to_update = { _id: 2 };
        var update_product = { $set: {name: "Mouthwash", description: "Cleans all the nooks and crannies" } };
        products.collection("products").updateOne(product_to_update, update_product, function(err, res) {
            if (err) { return console.log(err) }
            console.log("Updated");
        });
        // Update a product
    
        // Find products
        products.collection("products").find({}).toArray(function(err, result) {
            if (err) { return console.log(err) }
            console.log(result);
            db.close();
        });
        // Find products
    });
    // response.sendFile(__dirname + "/www/index.html");
});