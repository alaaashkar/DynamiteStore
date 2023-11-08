import { useState } from 'react';
import './ForgotPassword.scss';
import { Button } from '../../components/Button/Button';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';


export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const handleForgotPassword = async () => {
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send password reset email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container limited forgot-password-page">
      <h1>Did you forget your password?</h1>
      <font>
        Please enter the email address you used when creating your account, and we will send you a link to reset your password.
      </font>

      <form onSubmit={handleForgotPassword} action="">
        <div className="label-wrapper">
          <label className="label big-search-label" htmlFor="">
            <span className="email-password-title">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="big-search"
              type="email"
            />
            <Button onClick={handleForgotPassword} text="Send" buttonStyle="loadMore send-btn" />
          </label>
        </div>
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
