import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

useEffect(()=>{
    fetch('  https://poly-fusion-server.vercel.app/Instructor')
      .then(res=>res.json())
      .then(data=>setInstructors(data));
},[])
    return (
        <div>
          <Helmet>
                <title>Poly-Fusion|Instructors</title>
            </Helmet>
            <h1 className="text-center font-bold text-4xl mt-10 mb-10 text-blue-700">Instructors</h1>
      {instructors.map((instructor, index) => (
        <div key={index} className="flex flex-col items-center mb-8">
        <img src={instructor.image} className="w-100 h-100 mr-4"/>
          <h2 className="text-center font-bold text-gray-600">{instructor.name}</h2>
          <p className="text-center">Email: {instructor.email}</p>
        
          
        </div>
      ))}
        </div>
    );
};

export default Instructors;