module.exports = {
    deleteProduct(products) {
        const one_product = { _id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' };
        products.collection("products").deleteOne(one_product, function(err, obj) {
            if (err) { return console.log(err) }
            console.log("Deleted: " + one_product.name);
        });
    }
}