import axios from 'axios'
import React, { useEffect,useState } from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { SingleProductDetails } from '../Pages/SingleProductDetails/SingleProductDetails';
import Product from '../Pages/AllProducts/Product';

export const AllProducts = () => {


const [products, setProducts] = useState([])
const axiosPublic = useAxiosPublic();
useEffect(()=>{
    const getdata = async ()=>{
        const {data} = await axiosPublic.get('/products/data')
        console.log(data)
        setProducts(data);
    }
    getdata();
},[])

  return (
    <div className='h-full  mt-20'> 
       <h1 className="text-center font-bold text-3xl mt-20 h-full rounded-2xl mb-20 "> AllProducts</h1>
    <div className='flex flex-wrap justify-center gap-10'>
    {
        products.map((product)=>(
            <Product key={product._id} product={product}/>
        ))
     }
    </div>
        </div>
  )
}
