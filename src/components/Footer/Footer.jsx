import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-icons'>
        <a href="https://www.facebook.com/" target='__blank'>
          <FontAwesomeIcon className='icon' icon={faFacebook} style={{ color: 'white' }} />
        </a>

        <a href="https://www.instagram.com/" target='__blank'>
          <FontAwesomeIcon className='icon' icon={faInstagram} style={{ color: 'white' }} />
        </a>

        <a href="https://www.twitter.com/" target='__blank'>
          <FontAwesomeIcon className='icon' icon={faTwitter} style={{ color: 'white' }} />
        </a>
      </div>

      <div>
        <font className="footer-description">The contents of this page are protected by copyright and belong to DYNAMITE | AB.</font>
      </div>

      <h1 className='playing-images-title footer-title'>DYNAMITE</h1>
    </div>
  )
};
