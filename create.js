module.exports = {
    createDatabase(products) {
        products.collection("products").drop(function(err, res) {
            if (err) { return console.log(err) }
            console.log(res);
        });
        products.createCollection("products", function(err, res) {
            if (err) { return console.log(err) }
            console.log("Created");
        });
    }
}