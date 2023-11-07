import { useAuth } from '../../contexts/AuthContext';
import { Link, Outlet } from 'react-router-dom';
import './Settings.scss';

export const Settings = () => {
  const { authUser } = useAuth()
  return (
    <>
      <h1 className='settings-text'>Settings</h1>
      <font>You can manage your account and subscriptions here</font>
      <div className="shopping-container">
        <header>
          <h3>MY INFORMATION</h3>
        </header>

        <article>
          <p>Email</p>
          <p>{authUser?.email}</p>

          <Link to="/account/settings/change-password">Change password</Link>
          <Outlet />
        </article>
      </div>
    </>
  )
};
