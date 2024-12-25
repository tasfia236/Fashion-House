import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
//import UserDashboard from "../Pages/Dashboard/User/UserDashboard";
//import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import Products from "../Pages/Home/Product/Products";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Dashboard from "../Layouts/Dashboard";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";
import { SingleProductDetails } from "../Pages/SingleProductDetails/SingleProductDetails";

import { AllProductsNewpage } from "../Components/AllProductsNewPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-product',
                element: <Products></Products>
            },
            {
                path: '/product',
                element: <AllProductsNewpage />
            },
            {
                path: '/product/:id',
                element: <SingleProductDetails />
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            //      {
            //     path: '/user-dashboard',
            //     element: <UserDashboard></UserDashboard>,
            // },
            // {
            //     path: '/admin-dashboard',
            //     element: <AdminDashboard></AdminDashboard>,
            // },
            // {
            //     path: '/admin-dashboard/profile',
            //     element: <Profile></Profile>
            // }


        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>
            },
           
        ]
    },
])

export default routes;