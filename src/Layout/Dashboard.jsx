import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const adminEmail = 'lily@flower.com';
  const instructorEmail = 'jaba@flower.com';

  const isAdmin = user?.email === adminEmail;
  const isInstructor = user?.email === instructorEmail;

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
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-slate-500 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/AdminHome">
                    {' '}
                    <FontAwesomeIcon icon={faHome} /> Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/ManageClasses">
                    {' '}
                    <FontAwesomeIcon icon={faChalkboardTeacher} /> Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/Manage Users">
                    <FontAwesomeIcon icon={faUsersCog} /> Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/InstructorHome">
                    <FontAwesomeIcon icon={faHome} /> Instructor Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/Add_A_Class">
                    <FontAwesomeIcon icon={faChalkboardTeacher} /> Add_A_Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/MyClass">
                    <FontAwesomeIcon icon={faCheck} /> MyClass
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/MySelectedClasses">
                    <FontAwesomeIcon icon={faCheck} /> My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/MyEnrolledClasses">
                    <FontAwesomeIcon icon={faCheckCircle} /> My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/PaymentHistory">
                    <FontAwesomeIcon icon={faCreditCard} /> Payment History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;