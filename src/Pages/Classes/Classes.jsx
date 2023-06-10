import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Classes = () => {
    const [classData, setClassData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/Class')
          .then(res=>res.json())
          .then(data=>setClassData(data));
    },[])

    


    return (
        <div>
            <Helmet>
                <title>Poly-Fusion|Classes</title>
            </Helmet>
            <h1 className="text-center font-bold text-4xl mt-10 mb-10 text-blue-700">Approved Classes</h1>
      {classData.map((classItem, index) => (
        <div
          key={index}
          className={`p-4  rounded flex flex-col items-center mb-8 ${
            classItem.availableSeats === 0 ? 'bg-red-200' : 'bg-gray-100'
          }`}
        >
          <img src={classItem.image} className="w-100 h-100 " alt={classItem.name} />
          <h2 className="text-lg font-bold">{classItem.name}</h2>
          <p className="text-gray-500">Instructor: {classItem.instructor}</p>
          <p className="text-gray-500">Available Seats: {classItem.availableSeats}</p>
          <p className="text-gray-500">Price: ${classItem.price}</p>
         
          <button className='btn btn-neutral'>Select</button>
         
         
         
        </div>
      ))}
        </div>
    );
};

export default Classes;