import { addToCart } from '@/redux/CartSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Product({ product }) {


  const dispatch = useDispatch();
  
 const addCarthandler =(product )=>{
  dispatch(addToCart(product))
   toast.success('Product added to cart')
 }

  
  return (

    <Link to={`/product/${product._id}`} className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 mx-auto">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product?.productImage}
          alt={product?.productName}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white  text-xs font-bold bg-pink700 p-2 px-4 rounded-full">
          {product?.categoryName}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Product Name */}
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {product?.productName}
        </h2>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {product?.description}
        </p>

        {/* Fabric */}
        <div className="mt-3 text-sm text-gray-500">
          <span className="font-semibold">Fabric:</span> {product?.fabric}
        </div>

       {/* Sizes */}
<div className="mt-1 text-sm text-gray-500">
  <span className="font-semibold">Size:</span>{' '}
  {(product?.size || []).join(', ') || 'N/A'}
</div>

{/* Price and Rating */}
<div className="flex justify-between items-center mt-4">
  <div className="text-xl font-bold text-blue-600">
    ${product?.price?.toFixed(2) || '0.00'}
  </div>
  <div className="flex items-center text-yellow500">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < product?.rating ? "currentColor" : "none"}
        stroke="currentColor"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 17.27l6.18 3.73-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57-1.64 7.19L12 17.27z"
        />
      </svg>
    ))}
  </div>
</div>


        {/* Add to Cart and Details Button */}
        <div className="flex justify-between mt-6">
         
          <button className="bg-transparent text-pink700 shadow-lg border-pink700 border-2 px-4 py-2 rounded-md text-sm font-semibold hover:bg-pink700 hover:text-white transition duration-200" onClick={()=>{addCarthandler(product)}}>
           
            Add to Cart
          </button>
          <button className="bg-pink700 outline-none text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-200">
          View Details
          </button>
        </div>
      </div>
   </Link>

  
        

  );
}
