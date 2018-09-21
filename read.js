module.exports = {
    readProducts(products, db) {
        products.collection("products").find({}).toArray(function(err, result) {
            if (err) { return console.log(err) }
            console.log(result);
            db.close();
        });
    }
}