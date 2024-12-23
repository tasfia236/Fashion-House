import express from 'express';
import Product from '../models/Product.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/data', async (req, res) => {
    const data = await Product.find({})
    res.send(data);
})
router.get('/data/:id', async (req, res) => {
    const id = req.params.id
    const query = { _id: new ObjectId(id) }
    const result = await Product.findOne(query)
    res.send(result)
  })

router.get('/category', async (req, res) => {
    const data = await Product.distinct('categoryName',);
    res.send(data);
    console.log(data);
})

export default router;