import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Service from "../../components/Service/Service";




const Home = () => {
    const services = useLoaderData();
    useEffect(()=>{
        AOS.init({duration:'2000', delay:'1000'})
    },[])
    return (
        <div data-aos='fade bottom' className="mt-2">
            <Banner></Banner>
            <h1 className="text-4xl font-semibold text-center text- text-green-500 my-10 ">Our Service </h1>
            <div data-aos='fade-up-right' className="grid lg:grid-cols-2 grid-cols-1 gap-8 ">
                {
                   services.map(service => <Service key={service.id} service={service} > </Service>)
                }
            </div>
        </div>
    );
};

export default Home;