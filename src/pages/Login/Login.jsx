import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
           <div className="w-1/2 mx-auto border p-10 rounded-lg bg-green-200 mt-5">
            <h1 className="text-4xl font-bold text-center underline text-blue-600 mb-3">Please Login</h1>
             <form>
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
                     <button className="btn btn-primary">Login</button>
            </div>
                 <p className="mt-5">Do Not have An Account ? Please <span className="text-blue-500 text-base font-medium"><Link to={'/register'}>Register</Link></span></p>
             </form>
        </div>
        </div>
    );
};

export default Login;