import React from 'react';
import UseData from '../../../Hooks/UseData';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
    const [record,refetch]=UseData();
    console.log(record);

    const handleDelete = row => {
       Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/Data/${row._id}`,{
                method:'DELETE'
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
            })
        }
    
    return (
        <div>
            <div className='w-full'>
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
        <button className="btn btn-ghost bg-red-600 btn-xs" onClick={() => handleDelete(row)}>
                    <RiDeleteBinLine />
                  </button>
        </td>
        <td>
            <Link to="/dashboard/Payment"><button className="btn btn-outline btn-xs">Pay</button></Link>
          
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