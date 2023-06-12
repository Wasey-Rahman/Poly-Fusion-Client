import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider= new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('An error occurred while creating the user:', error);
      // Handle the error
    } finally {
      setLoading(false);
    }
  };

  const logIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('An error occurred while logging in:', error);
      // Handle the error
    } finally {
      setLoading(false);
    }
  };

const googleSignIn=()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider);
}









  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.log('An error occurred while logging out:', error);
      // Handle the error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser);

if(currentUser){
  axios.post(' https://poly-fusion-server.vercel.app/jwt',{email:currentUser.email})
  .then(data=>{
    console.log(data.data.token)
    localStorage.setItem('access-token',data.data.token)
  })
}
else{
  localStorage.removeItem('access-token')
}



      setLoading(false);
    }, (error) => {
      console.log('An error occurred in the auth state change listener:', error);
      // Handle the error
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;