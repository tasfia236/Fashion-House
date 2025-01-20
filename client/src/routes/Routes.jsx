import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";

import { SingleProductDetails } from "../Pages/SingleProductDetails/SingleProductDetails";

import { AllProductsNewpage } from "../Components/AllProductsNewPage";



const routes = createBrowserRouter([
    {
        path :'/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element: <Home></Home>
            },
            {
                path : '/product',
                element: <AllProductsNewpage/>
            },
            {
                path : '/product/:id',
                element: <SingleProductDetails/>
            },
            {
                path : '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
           
           
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <Dashboard></Dashboard>,
    //     children: [
    //         {
    //             path: 'profile',
    //             element: <Profile></Profile>
    //         },
    //         {
    //             path: 'allproduct',
    //             element: <Product></Product>
    //         }
    //     ]
    // },
])

export default routes;