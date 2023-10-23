/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Header.scss';
import dynamite from './../../assets/images/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { useMenu } from "contexts/MenuContext";


 export const Header = () => {
  const { setIsMenuClicked, isMenuClicked } = useMenu()

  return (
    <header className='headerNav'>
      <div className="headerNav__left">
        <ul>
          <li>
            <NavLink to='/customer-service'>
              <font>Customer service</font>
            </NavLink>
          </li>

          <li>
            <NavLink to='/fashion-news'>
              <font>Fashion News</font>
            </NavLink>
          </li>

          <li>
            <NavLink to='/store'>
              <font>Find a store</font>
            </NavLink>
          </li>

          <li>
            <button className="horizon-icon">
              <MoreHorizIcon></MoreHorizIcon>
            </button>
          </li>

          {isMenuClicked ? (
            <li>
              <FontAwesomeIcon icon={faX}
                className="close-menu"
                onClick={() => setIsMenuClicked(false)}
              />

            </li>
          ) : (
            <li>
              <FontAwesomeIcon
                icon={faBars}
                className="burger-menu"
                onClick={() => setIsMenuClicked(true)}
              />
            </li>
          )}



        </ul>
      </div>

      <div className="headerNav__middle">
        <Link to='/'>
          <img className="logo" src={dynamite} alt="express" />
        </Link>
      </div>

      <div className="headerNav__right">
        <ul>
          <li>
            <div>
              <button className="headerNav__right__button">
                <PersonIcon style={{ marginRight: '8px' }}></PersonIcon>
                <span className="headerNav__right__button-text">Log in</span>
              </button>
            </div>
          </li>

          <li>
            <a className="headerNav__right__button">
              <FavoriteIcon style={{ color: 'black', marginRight: '8px' }} />
              <font className="headerNav__right__button-text favorites">favorites</font>
            </a>
          </li>

          <li>
            <a className="headerNav__right__button">
              <ShoppingBagOutlinedIcon style={{ marginRight: '8px' }} />
              <font className="headerNav__right__button-text">Shopping Cart</font>
            </a>
          </li>

        </ul>
      </div>
    </header >
  )
};
