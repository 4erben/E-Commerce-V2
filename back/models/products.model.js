const mongoose = require("mongoose");


const dimensionsSchema = new mongoose.Schema({
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    depth: { type: Number, required: true }
  });
  
  const metaSchema = new mongoose.Schema({
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    barcode: { type: String, required: true },
    qrCode: { type: String, required: true }
  });
  
  const productSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: false },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    sku: { type: String, required: false },
    dimensions: { type: dimensionsSchema, required: false },
    meta: { type: metaSchema, required: false },
    images: [{ type: String, required: true }]
  });
  

  const Product = mongoose.model("Product",productSchema);

  module.exports = Product;