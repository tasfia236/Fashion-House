import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { SingleProductDetails } from "../Pages/SingleProductDetails/SingleProductDetails";
import Product from "../Pages/AllProducts/Product";

export const AllProducts = () => {
  const [itemPerPage, setItemPerPage] = useState(3);
  const [currentpage , setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axiosPublic.get(`/products/all-data?page=${currentpage}&size=${itemPerPage}`);

      setProducts(data);
    };
    getdata();
  }, [currentpage, itemPerPage]);


  useEffect(() => {
    const getcount = async () => {
      const { data } = await axiosPublic.get("/total-Products/count");

      setCount(data.count);
    };
    getcount();
  }, []);

  const numberofPages = Math.ceil(count/itemPerPage);
  const pages = [...Array(numberofPages).keys()].map(
    (elements) => elements + 1
  );

  const handlePaginationButton =(value) =>{
    setCurrentPage(value);
  } 

  console.log(count);
  return (
    <div className="h-full  mt-20">
      <h1 className="text-center font-bold text-3xl mt-20 h-full rounded-2xl mb-20 ">
        {" "}
        AllProducts
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
        disabled={currentpage ===1}
          onClick={() => handlePaginationButton(currentpage -1)}
        className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray100 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:bg-pink100 hover:bg-sky300  hover:text-white">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
          onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${currentpage === btnNum ? 'bg-sky300 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button 
        disabled={currentpage === numberofPages}
        onClick={() => handlePaginationButton(currentpage +1)}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray100 rounded-md hover:bg-sky300 disabled:hover:bg-gray100 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};