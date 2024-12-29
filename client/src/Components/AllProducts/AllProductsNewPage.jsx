import { useEffect, useState } from "react";
import Product from "../AllProducts/Product.jsx";
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";

const AllProductsNewpage = () => {
  const [itemPerPage, setItemPerPage] = useState(3);
  const [currentpage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter , setfilter] = useState('');
  const [sort , setSort] = useState('');
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); 
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axiosPublic.get(
        `/products/all-data?page=${currentpage}&size=${itemPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      );
      setProducts(data);
    //   setCount(data,count);
    };
    getProducts();
  }, [currentpage, itemPerPage, filter,sort,search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosPublic.get(`/total-Products/count?filter=${filter}&search=${search}`);
      setCount(data.count);
    };
    getCount();
  }, [filter,search]);

//   const handleSearch =(e)=>{
//     e.preventDefault();
//     console.log(search);


//   }

  const numberofPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberofPages).keys()].map((num) => num + 1);

  const handlePaginationButton = (value) => setCurrentPage(value);

 

  return (
    <div className="h-full mt-10 container mx-auto max-w-[1200px]"> 
      {/* Search Bar */}
      <div className="flex justify-between items-center p-4 ">
  <h1 className=" font-bold text-3xl ml-72 ">All Products------</h1>
  <form  className="flex"  >
    <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-sky300 focus-within:ring-sky300">
      <input

        className="px-4 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
        type="text"
        name="search"
        placeholder="Search Products"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
       
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-pink700 rounded-r-lg hover:bg-sky300 focus:outline-none"
      >
        Search
      </button>
    </div>
  </form>
</div>


      {/* Main Layout */}
      <div className="flex gap-6">
        {/* Filter and Sorting Section */}
        <div className="w-1/5 p-4 rounded-lg shadow-2xl">
  {/* Filter Section */}
  <h2 className="text-xl font-bold mb-4">Filter</h2>
  <div className="mb-6">
    {["Shalwar Kameez", "2-piece sets", "Saree", "Accessories"].map((category) => (
      <label key={category} className="flex items-center gap-2 mb-2">
        <input
          type="radio"
          name="filter"
          value={category}
          className="text-pink700 focus:ring-pink300"
          onChange={(e) => {setfilter(e.target.value)
            setCurrentPage}
          }
          checked={filter === category}
        />
        <span className="text-gray-700">{category}</span>
      </label>
    ))}
  </div>

  {/* Sort Section */}
  <h2 className="text-xl font-bold mb-4">Sort</h2>
  <div className="mb-6">
    {[
      { value: "dsc", label: "Price High to Low" },
      { value: "asc", label: "Price Low to High" },
    ].map((sortOption) => (
      <label key={sortOption.value} className="flex items-center gap-2 mb-2">
        <input
          type="radio"
          name="sort"
          value={sortOption.value}
          className="text-pink700 focus:ring-pink300"
          onChange={(e) => setSort(e.target.value)}
          checked={sort === sortOption.value}
        />
        <span className="text-gray-700">{sortOption.label}</span>
      </label>
    ))}
  </div>

  {/* Reset Button */}
  <button
    className="w-full px-4 py-2 text-white rounded-lg bg-pink700 hover:bg-pink300"
    onClick={() => {
      setfilter("");
      setSort("");
      setSearch("");
    }}
  >
    Reset
  </button>
</div>


        {/* Product and Pagination Section */}
        <div className="w-4/7">
          {/* <h1 className=" font-bold text-3xl  mb-10">
            All Products-----
          </h1> */}
          <div className="grid grid-cols-3 justify-center gap-10">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <button
              disabled={currentpage === 1}
              onClick={() => handlePaginationButton(currentpage - 1)}
              className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-pink700 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 hover:bg-sky300 hover:text-white"
            >
              Previous
            </button>

            {pages.map((btnNum) => (
              <button
                key={btnNum}
                onClick={() => handlePaginationButton(btnNum)}
                className={`px-4 py-2 mx-1 ${
                  currentpage === btnNum
                    ? "bg-pink700 text-white"
                    : "bg-pink100 text-gray-700"
                } rounded-md hover:bg-pink700 hover:text-white`}
              >
                {btnNum}
              </button>
            ))}

            <button
              disabled={currentpage === numberofPages}
              onClick={() => handlePaginationButton(currentpage + 1)}
              className="px-4 py-2 mx-1 text-white bg-pink700 rounded-md hover:bg-sky300 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsNewpage;