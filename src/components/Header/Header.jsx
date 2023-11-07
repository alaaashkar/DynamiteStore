/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import './Header.scss';
import cn from 'classnames';
import dynamite from './../../assets/images/logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { faBars, faX, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/Button/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useMenu } from "contexts/MenuContext";
import { useProducts } from "../../contexts/ProductsContext";
import Skeleton from '@mui/material/Skeleton';
import { useAuth } from "../../contexts/AuthContext";


export const Header = () => {
  const { setIsMenuClicked, isMenuClicked } = useMenu();
  const { cartItems } = useProducts();
  const [tempimage, setTempImage] = useState(true);
  const [cartisHovered, setCartIsHovered] = useState(false)
  const { authUser } = useAuth()


  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0).toFixed(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTempImage(false);
    }, 500);

    return () => clearTimeout(timer);
  });

  const handlerContainer = () => {
    setTempImage(true)
    setCartIsHovered(true)
  }

  return (
    <header className='headerNav'>
      <div className="headerNav__left">
        <ul>
          <li className="fav-container">
            <Link className="headerNav__right__button" to="/favorites">
              <FavoriteIcon className="fav-item" style={{ color: 'black', marginRight: '8px' }} />
              <font className="headerNav__right__button-text favorites fav-text">Favorites</font>
            </Link>
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
      <div className="headerNav__right__container">
        <div className="headerNav__right" >
          <ul>
            {authUser ? (
              <li>
                <a href="/account/purchases" className={cn("login-link", { "disappear": cartisHovered })}>
                  <FontAwesomeIcon icon={faUser} className="login-icon" />
                  <font className="login-text">
                    My Account
                  </font>
                </a>
              </li>
            ) : (
              <li>
                <a href="/login" className={cn("login-link", { "disappear": cartisHovered })}>
                  <FontAwesomeIcon icon={faUser} className="login-icon" />
                  <font className="login-text">
                    Log in
                  </font>
                </a>
              </li>
            )}

            <li className="cart-container" onMouseEnter={handlerContainer}
              onMouseLeave={() => setCartIsHovered(false)}>
              <a href="/cart" className="headerNav__right__button">
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
                      <p>{totalPrice} $</p>
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
              <a href="/favorites" className="headerNav__right__button">
                <FavoriteIcon className="fav-item" style={{ color: 'black', marginRight: '8px' }} />
                <font className="headerNav__right__button-text favorites fav-text">favorites</font>
              </a>
            </li>
          </ul>
        </div >
      </div>

    </header >
  );
};
