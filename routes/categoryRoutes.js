var express = require('express');
var router= express.Router();

var categoryController= require('../controllers/categoryController');


router.get("/getAll", categoryController.getAll)


module.exports = router;