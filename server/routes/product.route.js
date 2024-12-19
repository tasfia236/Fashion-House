import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/data', async (req, res) => {
    const data = await Product.find({})
    res.send(data);
})

router.get('/category', async (req, res) => {
    const data = await Product.distinct('categoryName',);
    res.send(data);
    console.log(data);
})
// app.get('/category/:id', async (req, res) => {
//     try {
//       const products = await Product.find({ category: req.params.id });
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

export default router;