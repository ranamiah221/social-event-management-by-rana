import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {

  const { user,  logOut }= useContext(AuthContext);
  console.log(user);
  const handleSignOut =()=>{
     logOut()
     .then(()=>{
      swal("Thank You", "Log Out Successful", "success");
    })
     .catch(error=>{
      swal("Oops!", "Something went wrong!", "error",error);
     })
  }
   const links = <nav>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/'}>Home</NavLink>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/register'}>Register</NavLink>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/login'}>Login</NavLink>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/about'}>About</NavLink>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/booking'}>Booking</NavLink>
    </nav>
    return (
        
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
         <h2 className="text-2xl font-medium text-green-500"><em>Beauty</em></h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {
            user? 
            <button onClick={handleSignOut} className="btn">Log Out</button>
            :
            <Link to={'/login'}><button className="btn">Login</button></Link>
          }
          </div>
        </div>
      </div>
    );
    
};

export default Navbar;