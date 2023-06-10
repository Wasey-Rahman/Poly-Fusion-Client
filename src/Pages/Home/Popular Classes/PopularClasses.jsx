import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/PopularClasses')
      .then(res=>res.json())
      .then(data=>setClasses(data));
},[])
const sortedClasses = classes.sort((a, b) => b.studentCount - a.studentCount);
const topClasses = sortedClasses.slice(0, 6);

    return (
        <div>
            <h2 className="text-center font-bold text-4xl mt-10 mb-10 text-blue-700">Popular Classes</h2>
      <div className="flex flex-wrap">
        {topClasses.map((classItem) => (
          <div key={classItem.className} className="w-1/3 p-4">
            <img src={classItem.imageUrl} alt={classItem.className}className="w-full h-auto" />
            <h3 className='font-bold text-gray-600'>{classItem.className}</h3>
            <p>Students: {classItem.studentCount}</p>
            
          </div>
        ))}
      </div>
    
        </div>
    );
};

export default PopularClasses;