var express = require('express');
var router = express.Router();

var productController= require('../controllers/productController');



router.get("/getAll",productController.getAll )

module.exports = router;