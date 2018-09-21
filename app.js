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
    
        // Drop & Create products
        const create = require('./create.js');
        create.createDatabase(products);
        // Drop & Create products
    
        // Insert products
        const insert = require('./add.js');
        insert.addProduct(products);
        // Insert products
    
        // Delete a product
        const remove = require('./remove.js');
        remove.deleteProduct(products);
        // Delete a product
    
        // Update a product
        const update = require('./update.js');
        update.updateProduct(products);
        // Update a product
    
        // Find products
        const find = require('./read.js');
        find.readProducts(products, db);
        // Find products
    });
});