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

exports.getById = async(req, res)=>{
    try{
        console.log("avinash ",req.params.id);
        // let id = req.params.id;
        const category = await Category.where({ "_id": mongoose.Types.ObjectId(req.params.id.trim())});
        console.log(category);
        res.send(category);
    } catch (e) {
        res.send(e.massage);
    }
}

exports.insert= async(req, res)=>{
    try{
    var name= this.param.name;
    var description= this. param.description;
    const categoryCreate = await Category.create({ name, description});
    res.status(200).send(categoryCreate);
    }catch(e){
        res.status(404).send(e.massage)
    }
}



exports.deleteOne= async(req, res)=>{
    try {
        
        const categorydelete = await Category.deleteOne({ "_id": mongoose.Types.ObjectId(req.params.id.trim())} );
        res.status(200).send(categorydelete);
    } catch (e) {
        res.status(404).send(e.massage);
    }
}

exports.update= async(req, res)=>{

}
