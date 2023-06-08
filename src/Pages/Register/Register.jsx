import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const confirm_password=form.confirm_password.value;
        const photo_url=form.photo_url.value;



        if (!name||!email || !password ||!confirm_password||!photo_url) {
           
            setError('Please fill in all fields.');
            return;
          }
            
          if (password.length < 6) {
            setError('Password should be at least 6 characters long.');
            return;
          }
      
          if (!/[A-Z]/.test(password)) {
            setError('Password should contain at least one capital letter.');
            return;
          }
      
          if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
            setError('Password should contain at least one special character.');
            return;
          }



        console.log(name,email,password,confirm_password,photo_url);

        }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold mb-5">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}className="card-body bg-slate-400">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name"className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email"className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password"className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm_password" name="confirm_password"className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="photo_url" name="photo_url"className="input input-bordered" />
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
    );
};

export default Register;