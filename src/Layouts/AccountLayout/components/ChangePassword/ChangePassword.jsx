import { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import './ChangePassword.scss';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../../../firebase';
import { PuffLoader } from 'react-spinners';


export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = auth.currentUser;

      if (user) {
        await user.updatePassword(newPassword);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      // Handle error
    } finally {
      setIsLoading(false)
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

        <Button onClick={handleChangePassword} text="Change Password" buttonStyle="loadMore" />
        <Button to="/account/purchases" text="Cancel" buttonStyle="loadMore cancel-btn" />
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
