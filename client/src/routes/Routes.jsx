import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/AllProducts/Product";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";
import UserDashboard from "../Pages/Dashboard/UserDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import Products from "../Pages/Home/Product/Products";

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
                path : '/all-product',
                element: <Products></Products>
            },
            {
                path : '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/user-dashboard',
                element: <UserDashboard></UserDashboard>
            },
            {
                path : '/admin-dashboard',
                element: <AdminDashboard></AdminDashboard>
            },
        ]
    }
])

export default routes;