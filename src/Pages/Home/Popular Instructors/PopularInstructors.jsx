import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('  https://poly-fusion-server.vercel.app/PopularInstructors')
          .then(res=>res.json())
          .then(data=>setInstructors(data));
    },[])
    const sortedInstructors = instructors.sort((a, b) => b.studentCount - a.studentCount);
  const topInstructors = sortedInstructors.slice(0, 6);
    
    return (
        <div>
            <h2 className="text-center font-bold text-4xl mt-10 mb-10 text-blue-700">Popular Instructors</h2>
      <div className="flex flex-wrap">
      {topInstructors.map((instructor) => (
          <div key={instructor.instructorName} className="w-1/3 p-4">
            <img src={instructor.imageUrl} alt={instructor.instructorName}className="w-full h-auto"  />
            <h3  className='font-bold text-gray-600'>{instructor.instructorName}</h3>
            <p>Students: {instructor.studentCount}</p>
          </div>
        ))}


      </div>
        </div>
    );
};

export default PopularInstructors;