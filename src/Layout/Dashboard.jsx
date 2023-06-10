import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Poly-Fusion|Dashboard</title>
            </Helmet>
            <NavigationBar></NavigationBar>
            <div className="drawer lg:drawer-open bg-slate-100">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-slate-500 text-base-content">
      {/* Sidebar content here */}
      <li><Link to="MySelectedClasses"><FontAwesomeIcon icon={faCheck} />My Selected Classes</Link></li>
      <li><Link><FontAwesomeIcon icon={faCheckCircle} />My Enrolled Classes</Link></li>
      <li><Link><FontAwesomeIcon icon={faCreditCard} />Payment</Link></li>
    </ul>
  
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Dashboard;