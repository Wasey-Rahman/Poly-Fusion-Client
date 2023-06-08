import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Poly-Fusion.png';

const NavigationBar = () => {
  return (
    <div className="navbar bg-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Instructors">Instructors</Link></li>
            <li><Link to="/Classes">Classes</Link></li>
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img className="w-20 me-4" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-white  ">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Instructors">Instructors</Link></li>
          <li><Link to="/Classes">Classes</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/LogIn" className="btn">LogIn</Link> 
      </div>
    </div>
  );
};

export default NavigationBar;