import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";



const Root = () => {
    return (
        <div className="w-full ">
            <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>

            </div>
            

        </div>
    );
};

export default Root;