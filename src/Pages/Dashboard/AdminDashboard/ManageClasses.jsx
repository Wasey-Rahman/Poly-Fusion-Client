import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch(' https://poly-fusion-server.vercel.app/Add_A_Class')
      .then(response => response.json())
      .then(data => setRecord(data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  return (
    <div>
      <div className='w-full'>
        <h2 className="text-center font-bold text-4xl mb-10 text-blue-700">Class</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Class_Name</th>
              <th>Instructor_Name</th>
              
              <th>Available_Seats</th>
              
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {record.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.Class_Image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{row.Class_name}</td>
                <td>{row.Instructor_name}</td>
                <td className='text-center'>{row.Available_seats}</td>
                
                <td>${row.price}</td>
                <td>
                  <button className='btn'>Approve</button>
                </td>
                <td>
                  <button className='btn'>Deny</button>
                </td>
                <td>
                  <button className='btn'>Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;