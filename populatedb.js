#! /usr/bin/env node

require('dotenv').config({})
console.log(`This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://amit-softobiz:${process.env.dbPass}@cluster0.n3ujexq.mongodb.net/veggiesAppDB?retryWrites=true&w=majority`);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
let Category = require('./models/category')
var  Product= require('./models/product')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var products = []
var categories = []

function productCreate(productName,description,Category,price,noInStock, cb) {
    productdetail = { productName:productName,description:description,Category:Category,price:price,noInStock:noInStock}
  
    var product = new Product(productdetail);
         
    product.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New product: ' + product);
      products.push(product)
      cb(null, product)
    }  );
  }

function categoryCreate(name,description, cb) {
  categorydetail = {name:name , description: description }

  
  let category = new Category(categorydetail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New category: ' + category);
    categories.push(category)
    cb(null, category)
  }  );
}    

function createCategory(cb) {
    async.series([
        function(callback) {
            categoryCreate('Mobiles',"Smart Phones", callback);
        },
        function(callback) {
            categoryCreate('Laptops', "Study laptops", callback);
        },
        function(callback) {
            categoryCreate('Computers', "For Home Use", callback);
        },
        function(callback) {
          categoryCreate('TV', "For Home Use", callback);
      },
        ],
        // optional callback
        cb);
}
//productName,description,Category,price,noInStock

function createproduct(cb) {
    async.parallel([
        function(callback) {
            productCreate('i Phone 13 pro',' 6 gb ram',categories[0],129999,80, callback);
        },
        function(callback) {
            productCreate('realme 3 Pro','6 gb ram, 710 proceccers',categories[0],15999,100, callback);
        },
        function(callback) {
            productCreate('Del (laptops)','8 gb ram, 512 SSD',categories[1],59999,100, callback);
        },
        function(callback) {
            productCreate('HP (Desktop)','16 gb ram with 2gb graphic card',categories[2],39999,20, callback);
        },
        function(callback) {
            productCreate('Samsung','21 inch full hd display',categories[3],12000,30, callback);
        },
        
        ],
        // optional callback
        cb);
}
async.series([
    
    createCategory,
    createproduct
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('products array: '+products);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});


