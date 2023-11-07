import './Checkout.scss';
import dynamite from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import cn from 'classnames'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ClipLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import { Country, State, City } from 'country-state-city';
import { Button } from '../../components/Button/Button';
import { useProducts } from '../../contexts/ProductsContext';

export const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [savedIsClicked, setSaveIsClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [address, setAddress] = useState('')
  const { cartItems } = useProducts()
  const [finalSaveClicked, setFinalSaveClicked] = useState(false)

  const auth = getAuth()

  const userEmail = auth.currentUser?.email;

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0).toFixed(2);



  const handlerSaveButton = () => {
    setIsLoading(true)
    setTimeout(() => {
      setSaveIsClicked(true);
      setIsLoading(false)
    }, 1000);
  };

  const handlerFinalSaveButton = () => {
    setIsLoading(true)
    setTimeout(() => {
      setFinalSaveClicked(true);
      setIsLoading(false)
    }, 1000);
  }

  const saveIsDisabled =
    firstName === '' || lastName === '' || phoneNumber === '' || dob === '' || !confirm;

  const finalSaveIsDisabled = selectedCity === '' || address === ''

  const allCountries = Country.getAllCountries()



  const foundCountry = allCountries.find(country => country.name === selectedCountry)
  const CountryStates = State.getStatesOfCountry(foundCountry?.isoCode);

  return (
    <div className="checkout-page container">
      <header>
        <div className="headerNav__middle">
          <Link to="/">
            <img className="logo" src={dynamite} alt="express" />
          </Link>
        </div>
      </header>

      <div className="checkout-content limited-wider">
        <h1 className="cart-title checkout-title">Payment</h1>

        <div className="cart-content">
          <div className='left-column-wrapper'>
            <div className="left">
              <header onClick={() => setSaveIsClicked(false)} className='form-header'>
                <h3>MY INFORMATION</h3>
                {savedIsClicked && (
                  <FontAwesomeIcon

                    icon={faChevronDown}
                    className='down-arrow' />
                )}
              </header>


              <article
                className={cn('checkout-form', [
                  { 'checkout-form-open': !savedIsClicked },
                  { 'checkout-form-closed': savedIsClicked }
                ])}
              >
                <div className="sign-in-container checkout-container">
                  <form>
                    <div className="name-wrapper">
                      <div className="label-wrapper">
                        <label className="label big-search-label" htmlFor="">
                          <span className="email-password-title">
                            First Name <span className="astroid">*</span>
                          </span>
                          <input
                            className="big-search"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </label>
                      </div>

                      <div className="label-wrapper">
                        <label className="label big-search-label" htmlFor="">
                          <span className="email-password-title">
                            Last Name <span className="astroid">*</span>
                          </span>
                          <input
                            className="big-search"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="label-wrapper">
                      <label className="label big-search-label" htmlFor="">
                        <span className="email-password-title">
                          Date of birth<span className="astroid">*</span>
                        </span>
                        <input
                          className="big-search"
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)} // Correct way to handle date input
                        />
                      </label>
                    </div>

                    <div className="label-wrapper">
                      <label className="label big-search-label" htmlFor="">
                        <span className="email-password-title">
                          Country<span className="astroid">*</span>
                        </span>

                        <select
                          className="big-search country-select"
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          name="selectedCountry"
                          id="selectedCountry"
                        >
                          <option value="">Select a country</option>
                          {allCountries.map((country) => (
                            <option key={country.isoCode} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="phone-wrapper">
                      <span className="email-password-title">
                        Phone number<span className="astroid">*</span>
                      </span>
                      <PhoneInput
                        country={foundCountry?.isoCode.toLocaleLowerCase() || 'us'}
                        value={foundCountry?.isoCode}
                        onChange={(value) => setPhoneNumber(value)}
                      />
                    </div>

                    <label htmlFor="confirm">
                      <div className="confirm">
                        <input
                          type="checkbox"
                          id="confirm"
                          name="confirm"
                          checked={confirm}
                          onChange={(e) => setConfirm(e.target.checked)}
                        />
                        <span>
                          I agree to allow the processing of my personal data so that it can send me
                          personalized marketing material.
                        </span>
                      </div>
                    </label>

                    <button
                      // disabled={buttonIsDisabled}
                      type='button'
                      className='add-button checkout-btn'
                      onClick={handlerSaveButton}
                      disabled={saveIsDisabled}
                    >

                      {isLoading ? (
                        <ClipLoader color="rgba(255, 255, 255, 1)" size={15} />
                      ) : (
                        <>
                          Save
                        </>
                      )}
                    </button>

                  </form>
                </div>
              </article>

              {savedIsClicked && (
                <div className='first-last'>
                  <font>{firstName}</font>
                  &nbsp;
                  <font>{lastName}</font>
                  <font className="block-element">{userEmail}</font>
                </div>
              )}
            </div>

            <div className='left-2'>
              <header onClick={() => setFinalSaveClicked(false)} className='form-header'>
                <h3>Billing Address</h3>
                {finalSaveClicked && (
                  <FontAwesomeIcon

                    icon={faChevronDown}
                    className='down-arrow' />
                )}
              </header>


              <article
                className={cn('checkout-form', [
                  { 'checkout-form-closed': finalSaveClicked || !savedIsClicked },
                  { 'checkout-form-open': !finalSaveClicked || savedIsClicked }
                ])}
              >
                <div className="sign-in-container checkout-container">
                  <form>
                    <div className="name-wrapper">
                      <div className="label-wrapper">
                        <label className="label big-search-label" htmlFor="">
                          <span className="email-password-title">
                            City <span className="astroid">*</span>
                          </span>
                          <select
                            className="big-search"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            name=""
                            id=""
                          >
                            <option value="">Select a city</option>
                            {CountryStates.map((city) => (
                              <option key={city.id} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>

                    <div className="label-wrapper">
                      <label className="label big-search-label" htmlFor="">
                        <span className="email-password-title">
                          Address <span className="astroid">*</span>
                        </span>
                        <input
                          className="big-search"
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </label>
                    </div>


                    <button
                      // disabled={buttonIsDisabled}
                      type='button'
                      className='add-button checkout-btn'
                      onClick={handlerFinalSaveButton}
                      disabled={finalSaveIsDisabled}
                    >

                      {isLoading ? (
                        <ClipLoader color="rgba(255, 255, 255, 1)" size={15} />
                      ) : (
                        <>
                          Save
                        </>
                      )}
                    </button>

                  </form>
                </div>
              </article>

              {finalSaveClicked && (
                <div className='first-last'>
                  <font>{selectedCountry}</font>
                  &nbsp;
                  <font className="block-element">{selectedCity}</font>
                  <font className="email-user">{address}</font>
                </div>
              )}
            </div>

          </div>


          <div className='right-side-container'>
            <div className='discount-container'>
              <font>Discounts</font>

              <a href="/">Apply discount</a>
            </div>

            <hr className='hr-2' />

            <div className="order-price-container total-price  total-flx">
              <p>Total</p>
              <p>{totalPrice} $</p>
            </div>

            <Button
              to='/checkout'
              text={'Submit Your Payment'}
              buttonStyle={'loadMore login-btn'}
            />


            <span className='terms-and-conditions'>
              Prices and delivery charges are not confirmed until payment is made.

              You have 30 days to return the order and receive a refund of the price paid. Please read: Return and Refund.
            </span>

          </div>
        </div>

      </div >
    </div >
  );
};