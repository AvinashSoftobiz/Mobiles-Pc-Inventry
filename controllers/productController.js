
const Product = require('../models/product');
 mongoose  = require("mongoose");

 const Product = require('../models/product');
// // MULTER
//  const multer  = require('multer')
 
 
//  const storage = multer.diskStorage({
//      destination: function (req, file, cb) {
//        cb(null, './public/uploads/')
//      },
//      filename: function (req, file, cb) {
//        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//        cb(null, uniqueSuffix+ '-' +file.originalname)
//      }
//    })
//   var upload = multer({ storage: storage});





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

// exports.insertOne=async(req, res)=>{
//     try{

//     // console.log(req.file);
//     var productName= req.body.productName;
//     var description= req.body. description;
//     let categories= mongoose.Types.ObjectId(req.body.id);
//     let price = req.body.price;
//     let noInStock   = req.body.noInStock;
//         const productcreate = await Product.create({ productName: productName, description: description, categories: categories, price: price, noInStock: noInStock });
//         res.status(200).send(productcreate);
//     } catch (e) {
//         res.status(404).send(e.message);
//     }
// }

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


/* upload.single('productImage')
console.log(req.file);

*/