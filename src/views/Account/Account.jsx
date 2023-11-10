import "./Account.scss";
import { faBox, faAngleRight, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase"; // Import the 'auth' object
import { ToastContainer, toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';
import { useEffect, useState } from "react";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { PuffLoader } from 'react-spinners'; // Import PuffLoader
import { useNavigate } from "react-router-dom";


export const Account = () => {
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

          <div className="boxes">
            <FontAwesomeIcon icon={faBox} />
            <Link to="/">My Purchases</Link>
            <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
          </div>

          <div className="boxes">
            <FontAwesomeIcon icon={faGear} />
            <font>Account Settings</font>
            <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
          </div>

          <div className="boxes" onClick={userSignOut}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <font>Sign Out</font>
            <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
          </div>
        </div>

        <div className="right-side-account-page">
          <h1>My Orders</h1>

          <div className="shopping-container">
            <ShoppingBagOutlinedIcon className="cart-item shopping-icon" />
            <h3>Product not purchased</h3>
          </div>
        </div>
      </div>

      {isLoading && (
        <div>
          <div className="backdrop"></div>
          <div className="loader">
            <PuffLoader color="#222222" size={50} />
          </div>
        </div>
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
  );
};