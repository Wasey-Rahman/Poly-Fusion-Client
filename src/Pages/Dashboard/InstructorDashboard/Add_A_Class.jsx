import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Add_A_Class = () => {
    const { user } = useContext(AuthContext);
    const handleAddAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const Class_name = form.Class_name.value;
        const Class_Image=form.Class_Image.value;
        const Instructor_name = user?.displayName ;
        const Instructor_email=user?.email
        const Available_seats = form.Available_seats.value;
        const price = form.price.value;
       
        
    
        const Add={
        
            Class_name,Class_Image,Instructor_name,Instructor_email,Available_seats,price
        }
    
        // Perform submission logic here, e.g., send form data to the server
    
        // Clear form fields after submission
        form.reset();
        
       console.log(Add)
    
       fetch(' https://poly-fusion-server.vercel.app/Add_A_Class',{
         method:'POST',
         headers:{
              'content-type':'application/json'
         },
         body:JSON.stringify(Add)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.insertId){
          Swal.fire({
            title:'Success',
            text:' Added Successfully',
            icon:'success',
            confirmation:'cool'
          })
          
        }
       })
       .catch((error) => {
        console.error('Error:', error);
      });
       
    
       
      
    
      };
       

  

  return (
    
 
    <form onSubmit={handleAddAToy}>
   <h1 className='text-3xl font-bold text-blue-600 mb-3 text-center'>Add A Class</h1>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-1">
         <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class_name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class_name"
                  className="input input-bordered"
                  name="Class_name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class_Image</span>
                </label>
                <input
                  type="url"
                  placeholder="Class_Image"
                  className="input input-bordered"
                  name="Class_Image"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor_name</span>
                </label>
                <input
                  type="text"
                  placeholder="Instructor_name"
                  className="input input-bordered"
                  name="Instructor_name"
                  defaultValue={user?.displayName}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor_email </span>
                </label>
                <input
                  type="text"
                  placeholder="Instructor_email "
                  className="input input-bordered"
                  name="Instructor_email "
                  defaultValue={user?.email}
                  />
                  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available_seats</span>
                </label>
                <input
                  type="text"
                  placeholder="Available_seats"
                  className="input input-bordered"
                  name="Available_seats"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-neutral" type="submit">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    );
};

export default Add_A_Class;