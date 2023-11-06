import React, { useState } from "react";
import './SignUp.scss';
import { auth } from '../../firebase'
import { PuffLoader } from 'react-spinners';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Button } from "../Button/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false)
  const navigate = useNavigate(); // Use useNavigate

  const signUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    setIsLoading(true); // Set isLoading to true when starting the API request

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      toast.success('Your account has been successfully created !');
      setShowToast(true)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use. Please use a different email.');
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false); // Set isLoading back to false after the request is complete
    }
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }
  }, [showToast])

  return (
    <>
      <div className="container signUp-page ">
        <header>
          <h1>Become a DYNAMITE Member</h1>
          <p className="log-in-description">Become a DYNAMITE Member — Don't miss out on campaigns, deals, discounts, and Dynamite Member coupons!</p>
        </header>

        <div className="sign-in-container">
          <form onSubmit={signUp} action="">
            <label className="big-search-label" htmlFor="">
              <span className="email-password-title">Email <span className="astroid">*</span></span>
              <input
                className="big-search"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} />
            </label>

            <label htmlFor="">
              <span className="email-password-title">Create a password <span className="astroid">*</span></span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
            </label>

            <label htmlFor="rememberMe">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe" value="1" />
                <span>Remember me</span>
              </div>
            </label>

            <Button text="Sign Up" buttonStyle={'loadMore login-btn'} disabled={isLoading} />
          </form>
        </div>
      </div>


      {isLoading && (
        <>
          <div className="backdrop"></div>
          <div className="loader">
            <PuffLoader color="#222222" size={50} />
          </div>
        </>
      )}

      <ToastContainer
        hideProgressBar={true}
        position="top-center"
        theme="dark"
      />
    </>
  );
};
