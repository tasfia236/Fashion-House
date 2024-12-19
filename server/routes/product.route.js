import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/data', async (req, res) => {
    const data = await Product.find({})
    res.send(data);
})

router.get('/category', async (req, res) => {
    const data = await Product.distinct('categoryName');
    res.send(data);
    console.log(data);
})

export default router;