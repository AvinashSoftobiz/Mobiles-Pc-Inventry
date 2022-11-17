var express = require('express');
var router = express.Router();

var productController= require('../controllers/productController');


// product router
router.get("/getAll",productController.getAll )
router.get("/:id", productController.getById)
router.delete("/:id", productController.deleteOne)
router.post("/insert", productController.insertOne)


module.exports = router;