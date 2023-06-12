import React, { useEffect, useState } from 'react';

const MyClass = () => {
  const [classes, setClasses] = useState([]);

  // Simulated fetch function to fetch class data
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        // Simulated API call to fetch class data
        const response = await fetch(' https://poly-fusion-server.vercel.app/Add_A_Class');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const updateClass = (classId) => {
    // Functionality to update the class with the given classId
    console.log('Updating class:', classId);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-blue-600 mb-3 text-center'>My Classes</h1>
      {classes.map((classInfo) => (
        <div key={classInfo.classId} className="class-item">
          <h3>{classInfo.className}</h3>
          <p>Status: {classInfo.status}</p>
          {classInfo.status === 'Denied' ? (
            <p>Feedback: {classInfo.feedback}</p>
          ) : null}
          {classInfo.status !== 'Pending' && classInfo.status !== 'Approved' ? null : (
            <p>Total Enrolled Students: {classInfo.enrolledStudents}</p>
          )}
          <button onClick={() => updateClass(classInfo.classId)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default MyClass;