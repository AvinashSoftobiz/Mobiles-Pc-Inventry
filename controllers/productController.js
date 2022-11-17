
const Product = require('../models/product');
 mongoose  = require("mongoose");

exports.getAll = async (req, res) => {
    try {
        const productget = await Product.find({});
        // res.status(200).render("product_list", { productget });
        res.status(200).send(productget);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}


exports.getById = async(req, res)=>{
    try{
        console.log("avinash ",req.params.id);
        // let id = req.params.id;
        const product = await Product.where({ "_id": mongoose.Types.ObjectId(req.params.id.trim())});
        console.log(product);
        res.send(product);
    } catch (e) {
        res.send(e.massage);
    }
}
exports.insertOne=async(req, res)=>{
    try{
    var productName= req.body.productName;
    var description= req.body. description;
    // var ex=req.body.id;
    let categories= mongoose.Types.ObjectId(req.body.id);
    let price = req.body.price;
    let noInStock   = req.body.noInStock;
        const productcreate = await Product.create({ productName: productName, description: description, categories: categories, price: price, noInStock: noInStock });
        res.status(200).send(productcreate);
    } catch (e) {
        res.status(404).send(e.message);
    }
}

exports.deleteOne= async(req, res)=>{
    try {
        
        const productdelete = await Product.deleteOne({ "_id": mongoose.Types.ObjectId(req.params.id.trim())} );
        res.status(200).send(productdelete);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}

exports.update= async(req, res)=>{

}