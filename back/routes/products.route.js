const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/products.model");
const getRecentProducts = require("../utils/recentCreatedProducts");
const getTopProductsByCategory = require("../utils/getTopProductsByCategory");




router.get("/",async(req,res)=>{
    try{
    const {limit = 8, page = 1 ,categories, maxPrice ,title =""} = req.query;
    // Ensure limit and page are numbers and positive
    const parsedLimit = Math.max(1, parseInt(limit, 10));  // Minimum limit is 1
    const parsedPage = Math.max(1, parseInt(page, 10));    // Minimum page is 1
    // Calculate the skip value (offset) for pagination
    const skip = (parsedPage - 1) * parsedLimit;

    
    const query = {};
    if(categories){
        const categoriesArr = categories.split(",");
        query.category = { $in:categoriesArr };
    }; 
    if(maxPrice){
        query.price = { $lt:Number(maxPrice) }
    };
    if(title){
        query.title ={$regex: `^${title}`,$options:"i"}
    }
    const products = await Product.find(query)
    .skip(skip)
    .limit(parsedLimit);
    
    //getting the total products length for the pagination information
    const totalProductsLength = await Product.countDocuments(query);
    res.status(201).json({
        products:products,
        pagination:{
            total:totalProductsLength,
            page:parsedPage,
            limit:parsedLimit,
            totalPages: Math.ceil(totalProductsLength/parsedLimit)
        }
    })
    }catch(e){
        res.status(400).json(e);
    }
})

router.get("/single/:_id",async(req,res)=>{
    const {_id} = req.params;
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }
    try{
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }catch(e){
        res.status(400).json(e);
    }
})
router.get("/single",async(req,res)=>{
    const {title} = req.query;
    try{
        const product = await Product.findOne({title:{$regex: `^${title}`,$options:"i"}});
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product)
    }catch(e){
        res.status(400).json(e);
    }
})
router.get("/most-expensive",async(req,res)=>{
    try{
        const mostExpensiveProduct = await Product.findOne().sort({price:-1});
        res.status(201).json(mostExpensiveProduct);
    }catch(e){
        res.status(400).json(e);
    }
})
router.get("/bestrating",async(req,res)=>{
    try{
        const products = await Product.find({rating:{$gt:4.5}});
        res.status(201).json(products)
        
    }catch(e){
        res.status(400).json(e);
    }
});

router.get("/specialoffer",async(req,res)=>{
    try{
        const products = await Product.find({discountPercentage:{$gt:19}});
        
        res.status(201).json(products);
    }catch(e){
        res.status(400).json(e);
    }
});
router.get("/topcategories",async(req,res)=>{
    try{
        const topCategories = await getTopProductsByCategory(Product);
        res.status(201).json(topCategories);
    }catch(e){
        res.status(400).json(e);
    }
})

router.get("/featured",async(req,res)=>{
    const {maxPrice =100 ,leastPrice = 50} = req.query;
    try{
        const products = await Product.find({price:{$lt:maxPrice,$gt:leastPrice}});
        res.status(201).json(products)
    }catch(e){
        res.status(400).json(e);
    }
})


router.get("/recentProducts",async(req,res)=>{
    const {startingDay,category} = req.query;
    const query = {};
    if(category) query.category = category;
    try{
        const products = await Product.find(query);
        const recentProducts = getRecentProducts(products,startingDay);

        res.status(201).json(recentProducts);
    }catch(e){
         
        res.status(400).json(e);
    }
})


module.exports = router;