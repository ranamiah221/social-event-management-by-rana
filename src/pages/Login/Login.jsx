import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    console.log('location in the login page', location);

    const { signIn , signInWithGoogle }= useContext(AuthContext)

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })

    }
    
     const handleLogin= e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
        signIn(email, password)
        .then(result=>{
            console.log(result.user);

            navigate(location ?.state ? location.state : '/' );
            swal("Thank You", "Login Successful ", "success");

        })
        .catch(error=>{
            console.error(error);
            swal("Oops!!","Something went wrong !!! Try Again", "error");
            
        })
        
       
     }

    return (
        <div>
           <div className="w-1/2 mx-auto border p-10 rounded-lg bg-green-200 mt-5">
            <h1 className="text-4xl font-bold text-center underline text-blue-600 mb-3">Please Login</h1>
             <form onSubmit={handleLogin}>
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
                     <button className="btn btn-primary">Login</button>
            </div>
                 <p className="mt-5">Do Not have An Account ? Please <span className="text-blue-500 text-base font-medium"><Link to={'/register'}>Register</Link></span></p>
            
                <p><button onClick={handleGoogleSignIn} className=" mt-4 btn btn-ghost text-blue-600 text-base font-medium">Google</button></p>
             </form>
        </div>
        </div>
    );
};

export default Login;