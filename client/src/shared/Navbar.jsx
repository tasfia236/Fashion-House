import React from 'react';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-sky300 to-pink300 shadow dark:bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
            Laila's <span className="text-pink700">Fashion</span>
          </a>
        </div>

        {/* Center: Nav Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-pink700 font-medium transition"
          >
            Product
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-pink700 font-medium transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-pink700 font-medium transition"
          >
            Contact
          </a>
        </div>

        {/* Right: Search Bar, Buttons, and Avatar */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <CiSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-sky-400 focus:ring focus:ring-opacity-40 focus:ring-sky-300"
              placeholder="Search"
            />
          </div>

          {/* Cart Button */}
          <button className="flex items-center px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
            <FaShoppingCart className="text-gray-600 dark:text-gray-200" />
          </button>

          {/* Sign Up Button */}
          
          <Link  to='/signup'
            className="px-4 py-2 text-sm font-semibold text-white bg-sky500 rounded-lg hover:bg-sky700"
          >
            Sign Up
          
          </Link>
         

          {/* Login Button */}
          <Link  to='/signin'
            className="px-4 py-2 text-sm font-semibold text-white bg-sky500 rounded-lg hover:bg-sky700"
          >
            Login In
          
          </Link>
         

          {/* User Avatar */}
          <div className="relative">
            <div
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden cursor-pointer"
              title="User Profile"
            >
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
