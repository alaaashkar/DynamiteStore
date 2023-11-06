import "./AccountLayout.scss";
import { faBox, faAngleRight, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Import the 'auth' object
import { ToastContainer, toast } from 'react-toastify';
import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';


import { PuffLoader } from 'react-spinners'; // Import PuffLoader
import { useNavigate } from "react-router-dom";

export const AccountLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signOutIsSuccessful, setSignOutIsSuccessful] = useState(false)
  const navigate = useNavigate()

  const userSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      toast.success('You have been successfully logged out');
      setSignOutIsSuccessful(true)
    } catch (error) {
      console.error('Sign out failed:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (signOutIsSuccessful) {
        navigate('/')
      }
    }, 2000);
  }, [navigate, signOutIsSuccessful])

  return (
    <>
      <div className="container limited-wider account-page">
        <div className="left-side-account-page">
          <h1>Hello, DYNAMITE Member</h1>

          <NavLink
            to='/account/purchases'
            className={({ isActive }) => (
              cn(
                'boxes',
                {
                  'active-link': isActive,
                }
              )
            )}
          >
            <FontAwesomeIcon icon={faBox} />
            <font >My Purchases</font>
            <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
          </NavLink>

          <NavLink
            to='/account/settings'
            className={({ isActive }) => (
              cn(
                'boxes',
                {
                  'active-link': isActive,
                }
              )
            )}
          >
            <FontAwesomeIcon icon={faGear} />
            <font>Account Settings</font>
            <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
          </NavLink>

          <NavLink
            className='boxes'
            onClick={userSignOut}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <font>Sign Out</font>
            <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
          </NavLink>
        </div>

        <div className="right-side-account-page">
          <Outlet />
        </div>
      </div >

      {isLoading && (
        <div>
          <div className="backdrop"></div>
          <div className="loader">
            <PuffLoader color="#222222" size={50} />
          </div>
        </div>
      )
      }

      <ToastContainer
        hideProgressBar={true}
        position="top-center"
        theme="dark"
      />
    </>
  );
};
