
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

    },[])


    return (
       <div className="w-full flex">
             <div className="w-1/2 ">
                <img className="h-4/6 w-full" src={service.image} alt="" />
             </div>
             <div className="w-1/2">
                 <h1>{service.relevant_name}</h1>
                 <p>{service.description}</p>
                 <p className="text-xl font-medium text-gray-600">{service.price} <span> Tk</span></p>
                 <button onClick={handleGoHome}>Go Home</button>
             </div>
       </div>
    );
};

export default ServiceDetails;