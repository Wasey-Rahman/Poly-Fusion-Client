import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Classes = () => {
    const [classData, setClassData] = useState([]);
    const {user} =useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    
  useEffect(()=>{
        fetch('  https://poly-fusion-server.vercel.app/Class')
          .then(res=>res.json())
          .then(data=>setClassData(data));
    },[])



const handleAdd=(classItem)=>{

  if (user && user.email){
    const classItemData={...classItem, email: user.email}
    fetch('  https://poly-fusion-server.vercel.app/Data',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(classItemData)
    })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
           Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Work Has Been Saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
      }
        else{
          Swal.fire({
            title: 'Please login before selecting the course',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'LogIn now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/LogIn',{state:{from:location}})
            }
          })
        }
  
}

    
    
  
    
    
      

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
         {/* <Link to="/Classes">
         <button className='btn btn-neutral'>Select</button>
         </Link> */}
        <button className='btn btn-neutral'onClick={() => handleAdd(classItem)} >
            Select
          </button>
        </div>
         
        
      ))}
        </div>
    );
};

export default Classes;