require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongoose");
const Product = require("./models/products.model");
const products = require("./data");


const app = express();
const port = process.env.PORT || 8080;

//Routes
const productsRouter = require("./routes/products.route");
const categoriesRouter = require("./routes/categories.route");

//use middlewares on the entire app
app.use(express.json());
app.use(cors());



app.use("/products",productsRouter);
app.use("/categories",categoriesRouter);






connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("app started on port", port);        
    })
})