import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    productImage: {
        type: 'string',
        required: true,
    },
    categoryName: {
        type: 'string',
        required: true,
    },
    price: {
        type: 'number',
        required: true,
    },
    rating: {
        type: 'number',
        value: 4.00,
    },
    size: {
        type: 'array',
    },
    fabric: {
        type: 'string',
        required: true,
    },
}, { timestamps: true }
);

const Product = mongoose.model('products', productSchema);

export default Product;
