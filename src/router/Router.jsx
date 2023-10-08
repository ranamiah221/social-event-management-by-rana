import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";


   


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('data.json'),
            },
            {
                path:`/service/:id`,
                element:<ServiceDetails></ServiceDetails>,
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
        ]
    }
])

export default router;