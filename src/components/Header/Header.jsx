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
import { useProducts } from "../../contexts/ProductsContext";


export const Header = () => {
  const { setIsMenuClicked, isMenuClicked } = useMenu()
  const { cartItems } = useProducts()

  return (
    <header className='headerNav'>
      <div className="headerNav__left">
        <ul>
          {/* <li>
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
          </li> */}

          {/* <li>
            <button className="horizon-icon">
              <MoreHorizIcon></MoreHorizIcon>
            </button>
          </li> */}

          <li className="fav-container">
            <a className="headerNav__right__button">
              <FavoriteIcon className="fav-item" style={{ color: 'black', marginRight: '8px' }} />
              <font className="headerNav__right__button-text favorites fav-text">favorites</font>
            </a>
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

          <li className="cart-container">
            <a className="headerNav__right__button">
              <ShoppingBagOutlinedIcon className="cart-item" style={{ marginRight: '8px' }} />
              <font className="headerNav__right__button-text cart-text">Shopping Cart (0)</font>
            </a>

            <div className="cart-details">
              {cartItems.length === 0 ?
                ('2')
                : ('1')}
            </div>
          </li>


          <li className="fav-container mobile-fav">
            <a className="headerNav__right__button">
              <FavoriteIcon className="fav-item" style={{ color: 'black', marginRight: '8px' }} />
              <font className="headerNav__right__button-text favorites fav-text">favorites</font>
            </a>
          </li>

        </ul>
      </div>
    </header >
  )
};
