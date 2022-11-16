
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName:{
        type:String
    },
    description:{
        type:String,
        required:true,
    },
    Category:{ type: Schema.Types.ObjectId, ref: 'Category', require:true },
    price:{
        type:Number,
        require:true
    },
    noInStock:{
        type:Number,
        min:0,
        max:1000
    },
    createdAt:{
        type:Date,
        immutable :true,
        default:()=>Date.now(),
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now(),
    }
})

let avi= productSchema.virtual("url").get(function () {
    return `/admin/product/${this._id}`;
  });


module.exports = mongoose.model("Product", productSchema);