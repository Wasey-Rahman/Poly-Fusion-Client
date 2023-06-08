import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';



const Register = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {createUser}=useContext(AuthContext);
    const onSubmit = data =>{
        console.log(data);
        createUser(data.email,data.password,data.photo_url)
        .then(() => {
            if (data.name && data.photo_url) {
              const auth = getAuth();
              updateProfile(auth.currentUser, {
                displayName: data.name,
                photoURL: data.photo_url,
              })
                .then(() => {
                  console.log('Profile updated!');
                  // ... Perform additional actions after updating the profile
                })
                .catch((error) => {
                  console.log('An error occurred while updating the profile:', error);
                  // ... Handle the error
                });
            }
          })




        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);

        })
        .catch((error) => {
            console.log('An error occurred while creating the user:', error);
            // ... Handle the error
          });
    }
     
    const [error, setError] = useState('');
    // const handleRegister=event=>{
    //     event.preventDefault();
    //     const form=event.target;
    //     const name=form.name.value;
    //     const email=form.email.value;
    //     const password=form.password.value;
    //     const confirm_password=form.confirm_password.value;
    //     const photo_url=form.photo_url.value;



        // if (!name||!email || !password ||!confirm_password||!photo_url) {
           
        //     setError('Please fill in all fields.');
        //     return;
        //   }
            
        //   if (password.length < 6) {
        //     setError('Password should be at least 6 characters long.');
        //     return;
        //   }
      
        //   if (!/[A-Z]/.test(password)) {
        //     setError('Password should contain at least one capital letter.');
        //     return;
        //   }
      
        //   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
        //     setError('Password should contain at least one special character.');
        //     return;
        //   }



        // console.log(name,email,password,confirm_password,photo_url);

        


    return (
        <>
       <Helmet>
        <title>Poly-Fusion | Register</title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold mb-5">Register!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}className="card-body bg-slate-400">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("name", { required: true })}name="name"className="input input-bordered" />
          {errors.name && <span className='text-red-600'>Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" {...register("email",{ required: true })}name="email"className="input input-bordered" />
          {errors.email && <span className='text-red-600'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password",{ required: true,minLength:6,pattern:(/[A-Z][!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)})}name="password"className="input input-bordered" />
          {errors.password?.type ==='required' &&<p className='text-red-600'>Password is required</p>}
          {errors.password?.type ==='minLength' &&<p className='text-red-600'>Password should be at least 6 characters long.</p>}
          {errors.password?.type ==='pattern' &&<p className='text-red-600'>Password should contain at least one capital letter and at least one special character.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm_password" {...register("confirm_password",{ required: true})}name="confirm_password"className="input input-bordered" />
          {errors.confirm_password?.type ==='required' &&<p className='text-red-600'>Confirm Password is required</p>}
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="photo_url"  {...register("photo_url",{ required: true})}name="photo_url"className="input input-bordered" />
          {errors.photo_url?.type ==='required' &&<p className='text-red-600'>Photo URL is required</p>}
        </div>
        {error && <div className="text-red-500 text-sm font-semibold mt-2">{error}</div>}
        <div className="form-control mt-6">
        <input className="btn btn-outline " type ="submit" value="Register"/>
        <p><small>Already have an account? <Link to="/LogIn"className='text-primary'>LogIn</Link></small></p>
        </div>
      </form>
    </div>
  </div>
</div>
</>
    );
};

export default Register;