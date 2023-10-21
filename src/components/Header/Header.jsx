/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Header.scss';
import dynamite from './../../assets/images/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink, Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div className="headerNav">
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
            <button>
              <MoreHorizIcon></MoreHorizIcon>
            </button>~
          </li>
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
                <span>Log in</span>
              </button>
            </div>
          </li>

          <li>
            <a className="headerNav__right__button">
              <FavoriteIcon style={{ color: 'black', marginRight: '8px' }} />
              <font>favorites</font>
            </a>
          </li>

          <li>
            <a className="headerNav__right__button">
              <ShoppingBagOutlinedIcon style={{ marginRight: '8px' }} />
              <font>Shopping Cart</font>
            </a>
          </li>

        </ul>
      </div>
    </div >
  )
};
