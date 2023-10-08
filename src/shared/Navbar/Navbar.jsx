import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
   const links = <nav>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/'}>Home</NavLink>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/register'}>Register</NavLink>
        <NavLink className="mr-4 text-[blue] text-sm font-medium hover:bg-slate-300 p-2 rounded-lg" to={'/login'}>Login</NavLink>

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
          <a className="btn">Login</a>
        </div>
      </div>
    );
    
};

export default Navbar;