const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/products.model");



router.get("/names",async(req,res)=>{  
    try{
        const categories = await Product.aggregate([
            {$group:{_id:"$category"},},
            {$sort:{_id:1}}
        ]);
        const catNames = categories.map(cat=> cat._id)
        res.status(201).json(catNames);
    }catch(e){
        res.status(400).json(e);
    }
});

router.get("/",async(req,res)=>{

})



module.exports = router;