import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About/About";
import Booking from "../pages/Booking/Booking";


   


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/data.json'),
            },
            {
                path:`/service/:id`,
                element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
                loader:()=> fetch('/data.json'),

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/about',
                element:<PrivateRouter><About></About></PrivateRouter>,
            },
            {
                path:'/booking',
                element:<PrivateRouter><Booking></Booking></PrivateRouter>
            }
        ]
    }
])

export default router;