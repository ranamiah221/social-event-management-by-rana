
import { useEffect, useState } from "react";
import {  useLoaderData, useNavigate, useParams } from "react-router-dom";



const ServiceDetails = () => {
    const navigate = useNavigate();
    const handleGoHome=()=>{
        navigate(-1);
    }
    
    const services = useLoaderData();
    const [service, setService]=useState({})
   
    const {id}= useParams();
    useEffect(()=>{
       const findService = services.find ( service => service.id == id);
       setService(findService);

    },[]);

   

    return (
       <div className="w-full lg:flex md:flex rounded shadow-lg mt-10">
             <div className=" lg:w-1/2 md:1/2">
                <img className="h-full lg:h-[450px] w-full rounded-sm" src={service.image} alt="" />
             </div>
            <div className="lg:w-1/2 md:w-1/2 flex items-center">
            <div className="px-8">
                 <h1 className="text-3xl font-bold pb-8">{service.relevant_name}</h1>
                 <p className="text-base font-normal pb-5 text-gray-500 text-justify">{service.description}</p>
                 <p className="text-xl font-medium pb-5 text-gray-600">Price: {service.price} <span> Tk</span></p>
                 <button  className="btn hover:bg-green-600 bg-green-400 font-bold text-white text-sm" onClick={handleGoHome}>Go Home</button>
             </div>
            </div>
       </div>
    );
};

export default ServiceDetails;