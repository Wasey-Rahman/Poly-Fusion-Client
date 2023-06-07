import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
   
       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg" alt="404 Error" className="mb-8" />
      <Link to="/" className="px-4 py-2 btn btn-outline btn-accent">
        Back to Home
      </Link>
    </div>
   
  );
};

export default NotFound;