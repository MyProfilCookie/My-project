/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';
// import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    localStorage.removeItem('genius-token');
    return signOut(auth);
  }

  // update your profile
  const updateUserProfile = (name, photoURL) => {
    return  updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
      });
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{

      // console.log(currentUser);
      if (currentUser){
        setUser(currentUser);
        setLoading(false);
      }
      else{
        setUser(null);
        setLoading(false);
      }

    return () =>{
      return unsubscribe();
    }
  })
  }, []);

  const authInfo = {
    user, 
    createUser, 
    login, 
    logOut,
    signUpWithGmail,
    updateUserProfile,
    loading,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;