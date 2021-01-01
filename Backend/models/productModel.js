import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:           { type: String, required: true },
    image:          { type: String, required: true },
    brand:          { type: String, required: true },
    price:          { type: Number,default:0, required: true },
    category:       { type: String, required: true },
    description: { type: String, required: true },
    countInStock:   { type: Number , required: true },
    rating:         { type: Number, default: 0,required: true },
    numReviews:     { type: Number, default: 0, required: true },

});

const productModel = mongoose.model("Product", productSchema );

export default productModel;
