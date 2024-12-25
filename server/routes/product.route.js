import express from 'express';
import Product from '../models/Product.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/data', async (req, res) => {
    const data = await Product.find({})
    res.send(data);
})

// router.get('/',()=>{
//     res.send("Hello")
// })
router.get('/data/:id', async (req, res) => {
    const id = req.params.id
    const query = { _id: new ObjectId(id) }
    const result = await Product.findOne(query)
    res.send(result)
  })
//for Pagination
  router.get('/all-data', async (req, res) => {
    const page = parseInt(req.query.page) -1
    const size =parseInt(req.query.size)
    const filter =req.query.filter
    const sort = req.query.sort
    const search = req.query.search || '';
    
    let query = {

        productName :{$regex : search, $options : 'i'}
    }

    if(filter){
        query = {...query, categoryName:filter}
    }
    const sortOption = sort === 'asc' ? { price: 1 } : sort === 'dsc' ? { price: -1 } : {};
  

    console.log(page, size)
    const data = await Product.find(query).sort(sortOption).limit(size).skip((page*size))
    // const data = await Product.find({})
    res.send(data);
})
// router.get('/all-data',async(req,res)=>{
//     const page = parentInt(req.query.page) -1
//     const size = parseint(req.query.size)
//     const data = await Product.find({}).limit(size).skip((page*size))
//     res.send(data);
// })

  //Total data count from the database
router.get('/count', async (req, res) => {
    const filter =req.query.filter
    const search = req.query.search || '';
    let query = {
        productName :{$regex : search, $options : 'i'}
    }
    if(filter){
        query = {...query, categoryName:filter}
    }
    const count = await Product.countDocuments(query)
    res.send({count});
})


router.get('/category', async (req, res) => {
    const data = await Product.distinct('categoryName',);
    res.send(data);
    console.log(data);
})

export default router;