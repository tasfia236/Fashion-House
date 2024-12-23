import React, { useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic.jsx';
import ProductCard from './ProductCard.jsx';

export default function Products() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/products/data')
        .then(res => {
            setProduct(res.data);
        //    console.log(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        })

    return (
        <div className='pt-28 pb-12 mx-auto'>
            <h1 className="text-2xl text-center font-bold pb-5">Product</h1>
            <div className='grid grid-cols-4 gap-5 mx-auto'>
                {Array.from(product)?.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)}
            </div>
        </div>
    )
}
