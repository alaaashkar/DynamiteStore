/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import './Header.scss';
import dynamite from './../../assets/images/logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/Button/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useMenu } from "contexts/MenuContext";
import { useProducts } from "../../contexts/ProductsContext";
import Skeleton from '@mui/material/Skeleton';

export const Header = () => {
  const { setIsMenuClicked, isMenuClicked } = useMenu();
  const { cartItems } = useProducts();
  const [tempimage, setTempImage] = useState(true);

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTempImage(false);
    }, 500);

    return () => clearTimeout(timer);
  });

  return (
    <header className='headerNav'>
      <div className="headerNav__left">
        <ul>
          {/* 
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
          */}

          {/* 
          <li>
            <button className="horizon-icon">
              <MoreHorizIcon></MoreHorizIcon>
            </button>
          </li>
          */}

          <li className="fav-container">
            <a className="headerNav__right__button">
              <FavoriteIcon className="fav-item" style={{ color: 'black', marginRight: '8px' }} />
              <font className="headerNav__right__button-text favorites fav-text">favorites</font>
            </a>
          </li>

          {isMenuClicked ? (
            <li>
              <FontAwesomeIcon
                icon={faX}
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

      <div className="headerNav__right" onMouseEnter={() => setTempImage(true)}>
        <ul>
          <li className="cart-container">
            <a className="headerNav__right__button">
              <ShoppingBagOutlinedIcon className="cart-item" style={{ marginRight: '8px' }} />
              <font className="headerNav__right__button-text cart-text">Shopping Cart ({cartItems.length})</font>
            </a>
            <div className="cart-details">
              {tempimage ? (
                <Skeleton animation='wave' variant="rectangular" width={210} height={118} />
              ) : (
                cartItems.length === 0 ? (
                  <>
                    <p>Your Shopping Cart is Empty</p>
                    <hr />
                    <div className="order-price-container">
                      <p>Order Price</p>
                      <p>0.00 $</p>
                    </div>
                    <hr />
                    <div className="order-price-container total-price">
                      <p>Total</p>
                      <p>0.00 $</p>
                    </div>
                  </>
                ) : (
                  cartItems.map(item => (
                    <>
                      <a className="cart-product-link" href={`/product-page/${item.id}`} key={item.id}>
                        <div className="cart-product-container">
                          <div className="col1">
                            <img src={item.itemImg} alt="" />
                          </div>
                          <div className="col2">
                            <p>{item.name}</p>
                            <p>{item.price} $</p>
                            <div className="col2-container">
                              <p>quantity:</p>
                              <p>{item.quantity}</p>
                            </div>
                            <div className="col2-container">
                              <p>Colour: </p>
                              <p>{item.colour}</p>
                            </div>
                            <div className="col2-container">
                              <p>Size: </p>
                              <p>{item.size}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </>
                  ))
                )
              )}

              {!tempimage && (
                <>
                  <hr />
                  <div className="total-order-container">
                    <p>Total Order:</p>
                    <p>{totalPrice.toFixed(2)} $</p>
                  </div>
                  <Button text="Pay" buttonStyle="loadMore" />

                  <a href="/cart">
                    <Button text="Shopping Cart" buttonStyle="loadMore shopping-cart-btn" />
                  </a>
                </>
              )}

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
    </header>
  );
};
