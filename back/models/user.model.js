const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {productSchema} = require("./products.model");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    cartItems:[productSchema],
    wishList:[productSchema]
});


userSchema.statics.signup = async function(name,email,password){
    if(!name || !email || !password){
        throw Error("All fields must be filled!");
    }
    const exist = await this.findOne({email});
    if(exist){
        throw Error("This email has already been taken!");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({
        name:name,
        email:email,
        password:password
    });
    return user;
}

userSchema.statics.signin = async function(email,password){
    if(!email || !password){
        throw Error("All fields must be filled");
    };
    const user = await this.findOne({email});
    if(!user){
        throw Error("Invalid email or password")
    };
    const match = await bcrypt.compare(password,user.password);
    if(!match){
        throw Error("Invalid email or password")
    };
    return user;
}

module.exports = new mongoose.model("User",userSchema);