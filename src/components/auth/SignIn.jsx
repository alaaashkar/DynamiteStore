import React, { useEffect } from "react";
import './SignIn.scss';
import { useState } from "react";
import { auth } from '../../firebase';
import { PuffLoader } from 'react-spinners';
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from "../Button/Button";
import { ToastContainer, toast } from 'react-toastify';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../../contexts/AuthContext";

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const { password, setPassword } = useAuth()
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signInIsSucessful, setSignInIsSuccessful] = useState(false);
  const [passwordIsError, setPasswordIsError] = useState(false);
  const [emailIsError, setEmailIsError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate();

  console.log(password);

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleEmailFocus = () => {
    setEmailIsError(false); // Clear email error when focused
  }

  const handlePasswordFocus = () => {
    setPasswordIsError(false); // Clear password error when focused
  }

  const signIn = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setEmailIsError(email === '');
      setPasswordIsError(password === '');
    } else {
      setIsLoading(true);
      try {
        const persistence = rememberMe
          ? browserLocalPersistence
          : browserSessionPersistence
        await setPersistence(auth, persistence)
        await signInWithEmailAndPassword(auth, email, password);
        // toast.success('You logged in successfully!');
        setSignInIsSuccessful(true);

      } catch (error) {
        if (error.code === 'auth/invalid-login-credentials') {
          toast.error('Wrong email or password');
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (signInIsSucessful) {
        navigate('/');
      }
    }, 2000);
  }, [navigate, signInIsSucessful]);

  return (
    <>
      <div className="container signIn-page">
        <header>
          <h1>Log in</h1>
          <p className="log-in-description">Become a DYNAMITE Member — Don't miss out on campaigns, deals, discounts, and Dyanmite Member coupons!</p>
        </header>
        <div className="sign-in-container">
          <form onSubmit={signIn} action="">

            <div className="label-wrapper">
              <label className="label" class="big-search-label" htmlFor="">
                <span className="email-password-title">Email <span className="astroid">*</span></span>
                <input
                  class="big-search"
                  className={cn('', { "error-input": emailIsError })}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onFocus={handleEmailFocus} // Clear email error when focused
                />
                {emailIsError && <font className="email-error-texts">Please enter a valid email address</font>}
              </label>
            </div>

            <div className="label-wrapper">
              <label htmlFor="" className="eye-label">
                <span className="email-password-title">Password <span className="astroid">*</span></span>
                <input
                  type={showPassword ? "text" : "password"}
                  className={cn('', { "error-input": passwordIsError })}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onFocus={handlePasswordFocus} // Clear password error when focused
                />
                {password.length > 0 && (
                  <button
                    type="button"
                    className="eye-button"
                    onClick={handlerShowPassword}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                )}
                {passwordIsError && <font className="email-error-texts">Please enter a password.</font>}
              </label>
            </div>

            <div className="forgot-password-container">
              <label htmlFor="rememberMe">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} />
                  <span className="remember-me-text">Remember me</span>
                </div>
              </label>

              <Link to="/password/forgot-password">Did you forget your password?</Link>
            </div>


            <Button onClick={signIn} text="Log in" buttonStyle={'loadMore login-btn'} />
            <Button to="/register" text="Become a Dynamite Member" buttonStyle={'loadMore login-btn register'} />
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


      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};



