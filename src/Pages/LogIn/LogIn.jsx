import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    // const{ logIn}=useContext(AuthContext);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;


        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
          }
            
          



        console.log(email,password);
        // logIn(email,password)
        // .then(result=>{
        //     const user=result.user;
        //     console.log(user);
        // })
    }
    return (
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold mb-8">Login Right Now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body bg-slate-400 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={showPassword ? 'text' : 'password'} name="password"placeholder="password" className="input input-bordered" />
          
          
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
          
          
          <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </div>
              </div>
            </div>
            
            {error && <div className="text-red-500 text-sm font-semibold mt-2">{error}</div>}
        <div className="form-control mt-6">
          
          <input className="btn btn-neutral mb-5" type ="submit" value="LogIn"/>
          <button className="btn btn-outline" >
                Google Sign-in
              </button>
        </div>
        <p><small>A newcomer? <Link to="/Register"className='text-primary'>Create a new Account</Link></small></p>
      </form>
      
    </div>
  </div>
</div>
        
    );
};

export default LogIn;