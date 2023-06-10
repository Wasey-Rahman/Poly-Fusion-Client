import React from 'react';
import UseData from '../../UseData/UseData';
import { RiDeleteBinLine } from 'react-icons/ri';

const MySelectedClasses = () => {
    const [record]=UseData();
    console.log(record);

    const handleDelete = (id) => {
        // Logic to delete the corresponding record with the given id
      };
    return (
        <div>
            <div>
                < h2 className="text-center font-bold text-4xl  mb-10 text-blue-700">Booked Class</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th></th>
        <th>Name</th>
        <th>Instructor</th>
        <th>Available Seats</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        record.map((row,index)=>(<tr key={row._id}>
           <td>{index+1}</td>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={row.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
              
        </td>
        <td>{row.name}</td>
        <td>{row.instructor}</td>
        <td className='text-center'>{row.availableSeats}</td>
        <td>${row.price}</td>

        <td>
        <button className="btn btn-ghost bg-red-600 btn-xs" onClick={() => handleDelete(row._id)}>
                    <RiDeleteBinLine />
                  </button>
        </td>
        <td>
          <button className="btn btn-outline btn-xs">Pay</button>
        </td>
      </tr>
        
        ))}
      
      
   
      
      
     
    
      
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default MySelectedClasses;