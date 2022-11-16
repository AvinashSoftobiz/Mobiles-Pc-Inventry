const Product = require('../models/product');



exports.getAll = function () {
    return new Promise((resolve) => {

        Product.find({})
        .then((data) => {
            console.log(data)
            resolve(data)
            res.send(data)
        }).catch((error) => {
            resolve("error")
        })
    })
}

