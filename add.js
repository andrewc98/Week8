module.exports = {
    addProduct(products) {
        const products_to_add = [
            { _id: 1, name: 'Soap', price: 1.5, type: 'Toiletries', description: 'Smells of roses' },
            { _id: 2, name: 'Toothpaste', price: 3.99, type: 'Toiletries', description: 'Teeth Whitening' },
            { _id: 3, name: 'Battery Pack', price: 12.99, type: 'Hardware', description: '12 Batteries per pack' }
        ];
        products.collection("products").insertMany(products_to_add, function(err, res) {
            if (err) { return console.log(err) }
            console.log("Inserted: " + res.insertedCount);
        });
    }
}