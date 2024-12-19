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
        <div>
            <h1 className="text-2xl text-center font-bold mt-12 pb-5">Product</h1>
            <div>
                {Array.from(product)?.slice(0,4).map(product => <ProductCard key={product._id} product={product} ></ProductCard>)}
            </div>
        </div>
    )
}
