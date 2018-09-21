module.exports = {
    updateProduct(products) {
        const product_to_update = { _id: 2 };
        var update_product = { $set: {name: "Mouthwash", description: "Cleans all the nooks and crannies" } };
        products.collection("products").updateOne(product_to_update, update_product, function(err, res) {
            if (err) { return console.log(err) }
            console.log("Updated");
        });
    }
}