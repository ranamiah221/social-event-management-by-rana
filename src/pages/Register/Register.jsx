import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="w-1/2 mx-auto border p-10 rounded-lg bg-cyan-200 mt-5">
            <h1 className="text-4xl font-bold text-center underline text-orange-600 mb-3">Please Register</h1>
             <form>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                 </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
             </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                 </label>
                    <input type="text" placeholder="photo url" className="input input-bordered" required />
             </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                 </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
             </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                 </label>
                   <input type="password" placeholder="password" className="input input-bordered" required />
             </div>
             <div className="form-control mt-6">
                     <button className="btn btn-primary">Register</button>
            </div>
                 <p className="mt-5">Already You have An Account Please <span className="text-blue-500 text-base font-medium"><Link to={'/login'}>Login</Link></span></p>
             </form>
        </div>
    );
};

export default Register;