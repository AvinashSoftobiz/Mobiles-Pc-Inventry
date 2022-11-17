var express = require('express');
var router= express.Router();

var categoryController= require('../controllers/categoryController');


router.get("/getAll", categoryController.getAll)
router.get("/:id", categoryController.getById)
router.delete("/:id", categoryController.deleteOne)
router.post("/insert", categoryController.insert)


module.exports = router;