var express = require('express');
var router = express.Router();

const Product = require('../models/product');

var productController= require('../controllers/productController');
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+ '-' +file.originalname)
    }
  })
 var upload = multer({ storage: storage});

// product router
router.get("/getAll",productController.getAll )
router.get("/:id", productController.getById)
router.delete("/:id", productController.deleteOne)
// router.post("/insert",upload.single('productImage'), productController.insertOne)



router.post("/insert",upload.single('productImage'), function(req, res, next){
    try{

    console.log(req.file);
    var productName= req.body.productName;
    var description= req.body. description;
    let categories= mongoose.Types.ObjectId(req.body.id);
    let price = req.body.price;
    let noInStock   = req.body.noInStock;
        const productcreate = new Product.create({ productName: productName, description: description, categories: categories, price: price, noInStock: noInStock });
        res.status(200).send(productcreate);
    } catch (e) {
        res.status(404).send(e.message);
    }
})








module.exports = router;