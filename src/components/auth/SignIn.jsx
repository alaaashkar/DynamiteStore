import React from "react";
import './SignIn.scss';
import { useState } from "react";
import { auth } from '../../firebase'
import { PuffLoader } from 'react-spinners';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from "../Button/Button";

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="container signIn-page">
        <header>
          <h1>Log in</h1>

          <p className="log-in-description">Become a DYNAMITE Member — Don't miss out on campaigns, deals, discounts and Dyanmite Member coupons!</p>
        </header>

        <div className="sign-in-container">
          <form onSubmit={signIn} action="">
            <label class="big-search-label" htmlFor="">
              <span className="email-password-title">Email <span className="astroid">*</span></span>
              <input
                class="big-search"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} />
            </label>

            <label htmlFor="">
              <span className="email-password-title">Password <span className="astroid">*</span></span>
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

            <Button onClick={signIn} text="Log in" buttonStyle={'loadMore login-btn'} />

            <Button to="/register" text="Become a Dynamite Member" buttonStyle={'loadMore login-btn register'} />
          </form>

        </div>
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
