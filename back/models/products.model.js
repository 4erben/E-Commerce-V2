const mongoose = require('mongoose');

const dimensionsSchema = new mongoose.Schema({
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    depth: { type: Number, required: true },
});

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
    reviewerName: { type: String, required: true },
    reviewerEmail: { type: String, required: true },
});

const metaSchema = new mongoose.Schema({
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    barcode: { type: String, required: true },
    qrCode: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: false },
    rating: { type: Number, required: false, min: 0, max: 5 },
    stock: { type: Number, required: false },
    tags: [{ type: String }],
    brand: { type: String, required: false },
    sku: { type: String, required: false },
    weight: { type: Number, required: false },
    dimensions: { type: dimensionsSchema, required: false },
    warrantyInformation: { type: String, required: false },
    shippingInformation: { type: String, required: false },
    availabilityStatus: { type: String, required: false },
    reviews: [reviewSchema],
    returnPolicy: { type: String, required: false },
    minimumOrderQuantity: { type: Number, required: false },
    meta: { type: metaSchema, required: false },
    images: [{ type: String }],
    thumbnail: { type: String, required: false },
});

const Product = mongoose.model('Product', productSchema);

module.exports = {Product , productSchema};
