const Category= require('../models/category');
mongoose  = require("mongoose");


exports.getAll = async (req, res) => {
    try {
        const categoryget = await Category.find({});
        res.status(200).send(categoryget);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}


