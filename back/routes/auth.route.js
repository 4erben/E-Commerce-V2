const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/tokenUtils");

/* Login */
router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.signin(email,password);

        //generate access and refresh token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({refreshToken,accessToken,name:user.name});
    }catch(e){
        res.status(500).json({message:"Sign in failed" , error : error.message})
    }
})
/* Register */
router.post("/register",async(req,res)=>{
    const {name,email,password} =req.body;
    try{
        const user = await User.signup(name,email,password);
        res.status(200).json({message: "User Registered Sucessfully!"})
    }catch(error){
        res.status(400).json(error.message);
    }
})


module.exports = router;