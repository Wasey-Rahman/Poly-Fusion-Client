import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    
    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch(' https://poly-fusion-server.vercel.app/user'); // Adjust the URL to your API endpoint
        const data = await res.json();
        return data;
    });

   const handleMakeAdmin=user=>{
       fetch(` https://poly-fusion-server.vercel.app/user/admin/${user._id}`,{
        method:'PATCH'
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
       })

   }
  const handleMakeInstructor=user=>{
    fetch(` https://poly-fusion-server.vercel.app/user/instructor/${user._id}`,{
        method:'PATCH'
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is Instructor Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
       })
  }



    return (
        <div>
            <Helmet>
                <title>Poly-Fusion|ManageUsers </title>
            </Helmet>
           <h2 className='text-center font-semibold text-xl'>Total User:{user.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role-1</th>
        <th>Role-2</th>
      </tr>
    </thead>
    <tbody>
      {
        user.map((user,index)=>
            <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role==='instructor'?'instructor':<button onClick={()=>handleMakeInstructor(user)}className='btn btn-neutral'>Make Instructor</button>}</td>
        <td>{user.role==='admin'?'admin':<button onClick={()=>handleMakeAdmin(user)}className='btn btn-primary'>Make Admin</button>}</td>
      </tr>
            )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;

