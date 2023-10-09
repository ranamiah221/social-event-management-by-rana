import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";





const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError]= useState('');

    const handleRegister= e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password');
        console.log( name, url, email, password);

        createUser (email, password)
        .then(result=>{
           console.log(result.user);
           swal("Thank You", "Registered Successful ", "success");
        })
        .catch(error=>{
           console.error(error);
           setRegisterError(error.message);
        })
        swal(registerError,"Already Registered", "error");
     }


    return (
        <div className="w-1/2 mx-auto border p-10 rounded-lg bg-cyan-200 mt-5">
            <h1 className="text-4xl font-bold text-center underline text-orange-600 mb-3">Please Register</h1>
             <form onSubmit={handleRegister}>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                 </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
             </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                 </label>
                    <input type="text" name="url" placeholder="photo url" className="input input-bordered" />
             </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                 </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
             </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                 </label>
                   <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             </div>
             <div className="form-control mt-6">
                     <button className="btn btn-primary">Register</button>
            </div>
                 <p className="mt-5">Already have An Account ?<span className="text-blue-500 text-base font-medium"><Link to={'/login'}>Login</Link></span></p>
             </form>
        </div>
    );
};

export default Register;