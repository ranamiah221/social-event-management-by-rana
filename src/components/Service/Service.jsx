import { Link } from "react-router-dom";


const Service = ({service}) => {
    const { id, relevant_name, image, price }= service;
    const handleSeeDetails=()=>{
        console.log('Clicked see datails btn');
    }
    return (
        <div>
            <div className="card card-compact w-full  shadow-xl">
            <figure><img className="w-full lg:h-[400px]" src={image} alt="Shoes" /></figure>
           <div className="card-body">
           <h2 className="card-title text-2xl font-bold">{relevant_name}</h2>
           
           <p className="text-xl font-medium text-gray-600">{price} <span> Tk</span></p>
         
          <div className="card-actions justify-end">
          <Link to={`/service/${id}`}><button className="btn bg-green-400 hover:bg-green-600 text-white font-bold text-sm">See Details</button></Link>
           </div>
         </div>
         </div>
        </div>
    );
};

export default Service;