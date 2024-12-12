import { createBrowserRouter } from "react-router-dom";
import { MainLayouts } from "../layouts/MainLayouts";
import Home from "../pages/Home";
import { Product } from "../pages/Product";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
    {
        path :'/',
        element : <MainLayouts></MainLayouts>,
        children : [
            {
                path : '/',
                element: <Home></Home>
            },
            {
                path : '/product',
                element: <Product></Product>
            },
            {
                path : '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default routes;