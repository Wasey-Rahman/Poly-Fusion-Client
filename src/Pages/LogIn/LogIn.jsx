import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const LogIn = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    // const [error, setError] = useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
    const{ logIn}=useContext(AuthContext);
    const [userPhotoURL, setUserPhotoURL] = useState('');
    const onSubmit = data =>{
        console.log(data);
        logIn(data.email,data.password)
    .then(result=>{
        if (result && result.user) {
            const user = result.user;
            console.log(user);
    }
    navigate(from,{replace:true});
})
    .catch((error) => {
        console.log('An error occurred during login:', error);
        // Handle the error
      });
}




    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
     
    

      const handleGoogleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setUserPhotoURL(user.photoURL || '');
            navigate(from,{replace:true});
          })
          .catch((error) => {
            console.log('An error occurred during Google Sign-In:', error);
            // Handle the error
          });
      };

    // const handleLogin=event=>{
    //     event.preventDefault();
    //     const form=event.target;
    //     const email=form.email.value;
    //     const password=form.password.value;


    //     if (!email || !password) {
    //         setError('Please fill in all fields.');
    //         return;
    //       }
            
          



        // console.log(email,password);
        // logIn(email,password)
        // .then(result=>{
        //     const user=result.user;
        //     console.log(user);
        // })
    
    return (
        <>
        <Helmet>
            <title>Poly-Fusion | LogIn</title>
        </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold mb-8">Login Right Now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-slate-400 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className='text-red-600'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={showPassword ? 'text' : 'password'}{...register("password",{ required: true})} name="password"placeholder="password" className="input input-bordered" />
          
          
          
          
          
          <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </div>
              </div>
            </div>
            
            {errors.password?.type ==='required' &&<p className='text-red-600'>Password is required</p>}
        <div className="form-control mt-6">
          
          <input className="btn btn-neutral mb-5" type ="submit" value="LogIn"/>
          <button className="btn btn-outline" onClick={handleGoogleSignIn} >
                Google Sign-in
              </button>
        </div>
        <p><small>A newcomer? <Link to="/Register"className='text-primary'>Create a new Account</Link></small></p>
      </form>
      
    </div>
  </div>
</div>
</>  
    );
};

export default LogIn;