import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import './ChangePassword.scss';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase';
import { PuffLoader } from 'react-spinners';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useAuth } from '../../contexts/AuthContext';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error('Password must be more than 6 characters')
    } else {
      setIsLoading(true);
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      try {
        await reauthenticateWithCredential(user, credential)
        await updatePassword(user, newPassword)
          .then(() => {
            toast.success('Password has been updated')
          })
      } catch (error) {
        toast.error('Entered Password is wrong')
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
  };


  return (
    <div className="sign-in-container change-password-container">
      <form onSubmit={handleChangePassword}>
        <div className="label-wrapper">
          <label className="label big-search-label" htmlFor="">
            <span className="email-password-title">Existing Password <span className="astroid">*</span></span>
            <input
              className="big-search"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="label-wrapper">
          <label className="label big-search-label" htmlFor="">
            <span className="email-password-title">New Password <span className="astroid">*</span></span>
            <input
              className="big-search"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
        </div>
        {/* 
        <div className="label-wrapper">
          <label className="label big-search-label" htmlFor="">
            <span className="email-password-title">Confirm New Password <span className="astroid">*</span></span>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="big-search"
              type="password"
            />
          </label>
        </div> */}

        <Button type="submit" text="Change Password" buttonStyle="loadMore" />
        <Button type="button" to="/account/purchases" text="Cancel" buttonStyle="loadMore cancel-btn" />
      </form>


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
    </div>
  );
};
