import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const {googleSignIn} =useContext(AuthContext);
 const  Navigate=useNavigate();
 const location=useLocation();

 const from=location.state?.from?.pathname || "/";

   const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      
      
            
        fetch(' http://localhost:5000/user',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({
           
          email: loggedUser.email
          })
        })
        .then(res=>res.json())
        .then(()=>{
          
            Navigate(from,{replace:true});
          
        }
          )
      })
    
    }
   

  const onSubmit = data => {
    console.log(data);
    createUserWithEmailAndPassword(getAuth(), data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        if (data.name && data.photo_url) {
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: data.photo_url,
          })

          .then(()=>{
            
            fetch(' http://localhost:5000/user',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify({
                name: data.name,
                email: data.email
              })
            })
            .then(res=>res.json())
            .then(data=>{
              if (data.insertedId){
                Navigate('/');
              }
            }
              )
          })
          .then(() => {
              console.log('Profile updated!');
              // ... Perform additional actions after updating the profile
            })
            .catch(error => {
              console.log('An error occurred while updating the profile:', error);
              // ... Handle the error
            });
        }
      })
      .catch(error => {
        console.log('An error occurred while creating the user:', error);
        // ... Handle the error
      });
    }

  return (
    <>
      <Helmet>
        <title>Poly-Fusion | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold mb-5">Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-slate-400">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+)/ })} name="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
               {errors.password?.type === 'minLength' && <p className='text-red-600'>Password should be at least 6 characters long.</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password should contain at least one capital letter and at least one special character.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm_password" {...register("confirm_password", { required: true })} name="confirm_password" className="input input-bordered" />
                {errors.confirm_password?.type === 'required' && <p className='text-red-600'>Confirm Password is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" placeholder="photo_url" {...register("photo_url", { required: true })} name="photo_url" className="input input-bordered" />
                {errors.photo_url?.type === 'required' && <p className='text-red-600'>Photo URL is required</p>}
              </div>
            
              <div className="form-control mt-6">
                <input className="btn btn-outline mb-5" type="submit" value="Register" />
                <button className="btn btn-neutral" onClick={handleGoogleSignIn} >
                Google Sign-up
              </button>
                <p><small>Already have an account? <Link to="/LogIn" className='text-primary'>LogIn</Link></small></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;