import './Cart.scss';
import { PuffLoader } from 'react-spinners';
import { Button } from '../../components/Button/Button'
import { useProducts } from '../../contexts/ProductsContext';
import { HeartButton } from '../../components/HeartButton/HeartButton';
import { useAuth } from '../../contexts/AuthContext';


export const Cart = () => {
  const { setCartItems, cartItems } = useProducts()
  const { authUser } = useAuth()

  const handlerDeleteItem = (item) => {

    const updatedItems = cartItems.filter(product => product.id !== item.id)

    setCartItems(updatedItems); //update UI

    localStorage.setItem('cartItems', JSON.stringify(updatedItems)) //update localStorage

  }

  const paymentButtonIsDisabled = cartItems.length === 0;

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0).toFixed(2);

  return (
    <>
      <div className='container limited-wider'>
        <h1 className='cart-title'>Shopping cart</h1>

        <div className='cart-content'>
          <>
            <div className='left'>
              {cartItems.length === 0 ? (
                <>
                  <h1 className='cart-title cart-content-title-empty'>Your shopping cart is empty!</h1>
                  {!authUser && (
                    <>
                      <p className='cart-content-title-description'>Log in to save items to your shopping cart or access previously saved items</p>
                      <a className='log-in' href="/">Log in</a>
                    </>
                  )}
                </>
              ) : (
                <>
                  {cartItems.map(item => (
                    <div className='shopping-product-container'>
                      <div className='left-side'>
                        <a href={`/product-page/${item.id}`}>
                          <img src={item.itemImg} alt="item-img" />
                        </a>
                      </div>

                      <div className='right-side'>
                        <div className='right-side-content'>
                          <div className='first-row'>
                            <a href={`/product-page/${item.id}`}>
                              <h1 className='cart-title cart-content-title item-title'>{item.name}</h1>
                            </a>
                            <svg onClick={() => handlerDeleteItem(item)} className='delete-iconn' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class=""><path d="M6.229 1.229C6.105 1.352 6 1.577 6 2H5c0-.577.145-1.102.521-1.479C5.898.145 6.423 0 7 0h2c.577 0 1.102.145 1.479.521C10.855.898 11 1.423 11 2h-1c0-.423-.105-.648-.229-.771C9.648 1.105 9.423 1 9 1H7c-.423 0-.648.105-.771.229ZM1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM12 15c.423 0 .648-.105.771-.229.124-.123.229-.348.229-.771V5h1v9c0 .577-.145 1.102-.521 1.479-.377.376-.902.521-1.479.521H4c-.577 0-1.102-.145-1.479-.521C2.145 15.102 2 14.577 2 14V5h1v9c0 .423.105.648.229.771.123.124.348.229.771.229h8ZM14.5 5h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1Z M6 11.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0ZM9 8.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0Z"></path></svg>
                          </div>


                          <font className="item-price">
                            {item.price} $
                          </font>

                          <div className='row'>
                            <ul>
                              <li>
                                <span>item no:</span>
                                <span>{item.id}</span>
                              </li>

                              <li>
                                <span>Body:</span>
                                <span style={{ textTransform: 'uppercase' }}>{item.size} </span>  &nbsp; &nbsp;
                                <span className='few-pieces-left'>Few pieces left</span>
                              </li>


                              <li>
                                <span>Colour:</span>
                                <span>{item.colour}</span>
                              </li>

                              <li>
                                <span>Total:</span>
                                <span>{item.price} $</span>
                              </li>
                            </ul>
                          </div>

                          <div className='row'>
                            <HeartButton item={item} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </>
              )}
            </div>

            <div className='right-side-container'>
              {!authUser && (
                <>
                  <div className='discount-container'>
                    <font>Discounts</font>

                    <a href="/">Apply discount</a>
                  </div>

                  <font className='log-in-special-offers'>Log in for special offers!</font>

                  <Button to="/login" text={'LOGIN'} buttonStyle={'loadMore login-btn'} />

                  <hr />

                  <hr className='hr-2' />
                </>
              )}

              <div className="order-price-container total-price  total-flx">
                <p>Total</p>
                <p>{totalPrice} $</p>
              </div>

              <Button
                to='/checkout'
                disabled={paymentButtonIsDisabled}
                text={'Continue to payment screen'}
                buttonStyle={'loadMore login-btn'}
              />

              <span className='we-accept'>We accept</span>
              <div className='card-payments-container'>
                <svg className='card' viewBox="0 0 65 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="mastercard-logo"><title id="mastercard-logo">Mastercard</title><path d="M52.6927 27.9936v.5397h-.0896v-.5397h-.1632v-.1099h.416v.1099h-.1632Zm.8072-.1109v.6506h-.0896v-.4917l-.1376.4245h-.0936l-.1376-.4234v.4906h-.0904v-.6506h.128l.1464.4469.1472-.4469h.1272Z" fill="#F79410"></path><path d="M38.0333 30.1333h-11.2V9.8667h11.2v20.2666Z" fill="#FF5F00"></path><path d="M27.4259 20c0-4.1808 1.9488-7.905 4.9835-10.305-2.2192-1.755-5.0201-2.8025-8.064-2.8025-7.2061 0-13.0475 5.8683-13.0475 13.1075s5.8414 13.1075 13.0475 13.1075c3.0439 0 5.8448-1.0475 8.064-2.8025-3.0347-2.4-4.9835-6.1242-4.9835-10.305Z" fill="#EB001B"></path><path d="M54.0333 20c0 7.2392-5.9217 13.1075-13.2268 13.1075-3.0858 0-5.9251-1.0475-8.1756-2.8025 3.0773-2.4 5.0528-6.1242 5.0528-10.305s-1.9755-7.905-5.0528-10.305c2.2505-1.755 5.0898-2.8025 8.1756-2.8025 7.3051 0 13.2268 5.8683 13.2268 13.1075Z" fill="#F79E1B"></path></svg>

                <svg className='card' viewBox="0 0 55 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="troy-logo"><title id="troy-logo">Troy</title><path d="M47.9256 11.7107c-.6986 0-1.4693.3896-1.7769 1.0896l-3.2659 7.4865-1.1766-7.4865c-.1386-.7-.6137-1.0896-1.3668-1.0896h-4.137l3.5388 12.4331c.0651.2383.0778.5028.0297.7806-.1852 1.0373-1.1765 1.8794-2.2145 1.8794h-2.3171c-.5883 0-.9757.3642-1.1652 1.1893l-.5148 3.0814h4.0805c2.129 0 4.6285-1.0698 6.2965-4.0267l8.1702-15.3371h-4.1809ZM7.7612 8c1.2218 0 1.8122.4872 1.5973 1.7125l-.3521 1.9954h2.807l-.6187 3.5056H8.387l-.765 4.3407c-.2645 1.5125 1.2323 1.714 2.0914 1.714.1712 0 .3133-.0036.4151-.0099l-.6866 3.9094c-.2121.0226-.4306.0516-.893.0516-2.1311 0-6.1628-.5706-5.3702-5.0683l.8683-4.9368H2l.6159-3.5056h2.0264l.652-3.7079h2.467V8Z M13.4389 11.7107h2.4126c1.2225 0 1.8101.4886 1.5951 1.714l-.2637 1.4827c.8987-1.8243 2.8481-3.3296 4.8477-3.3296.2623 0 .5147.0516.5147.0516l-.7799 4.4199s-.35-.0813-.8959-.0813c-1.0655 0-2.8678.338-3.8705 2.3404-.2389.4935-.4235 1.0938-.5508 1.8172l-.8725 4.9657h-4.4934l2.3566-13.3806ZM51.0063 25.3961c0-.0792-.0261-.1457-.0834-.1994-.0559-.0538-.1266-.0792-.2143-.0792h-.2941v.555h.2941c.0877 0 .1591-.0276.2143-.0778.0566-.053.0834-.1173.0834-.1986Zm.2645 1.1079h-.256l-.362-.6455h-.2383v.6455h-.2185v-1.5817h.5367c.1386 0 .2559.0474.3528.1365.0955.0905.1471.2036.1471.3366 0 .2198-.1153.3655-.3408.4341l.379.6745Zm.6095-.7898c0 .3408-.1195.6307-.3578.8697-.2362.2404-.5247.3599-.8591.3599-.333 0-.6187-.1195-.8563-.3599-.2347-.239-.3521-.5289-.3521-.8697 0-.3394.1174-.6285.3521-.869.2383-.2411.524-.3613.8563-.3613.3337 0 .6229.1195.8591.3613.239.2405.3578.5296.3578.869Zm.2269 0c0 .3988-.1414.7396-.4235 1.0196-.2786.2807-.6187.4243-1.0196.4243-.3967 0-.7368-.1443-1.0196-.4243-.2807-.28-.4228-.6208-.4228-1.0196 0-.3973.1421-.7374.4228-1.0203.2828-.28.6229-.4214 1.0196-.4214.4009 0 .741.1414 1.0196.4214.2821.2829.4235.623.4235 1.0203Z" fill="#323E48"></path><path d="m31.3519 11.8684-.7212 4.0868c.8895.454 1.4983 1.3767 1.4983 2.4423 0 1.4049-1.0535 2.556-2.409 2.7215l-.7205 4.0861c.1273.0078.2567.0121.3854.0121 3.7694 0 6.8218-3.0546 6.8218-6.8204 0-3.0779-2.0442-5.6828-4.8548-6.5284ZM28.1419 20.8411c-.8888-.4518-1.499-1.3788-1.499-2.4429 0-1.3958 1.0557-2.5561 2.4111-2.7187l.7198-4.0869a6.4694 6.4694 0 0 0-.3867-.0141c-3.7659 0-6.8204 3.0567-6.8204 6.8197 0 3.08 2.0455 5.687 4.8554 6.5326l.7198-4.0897Z" fill="#00ADBB"></path></svg>

                <svg class="card" viewBox="0 0 50 17" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="visadefault-logo"><title id="visadefault-logo">Visa</title><path fill-rule="evenodd" d="M35.7181 11.1528c.0103-2.54543-2.0322-3.65181-3.6664-4.537-1.0971-.5943-2.0102-1.0889-1.9944-1.85236.0122-.57843.5469-1.19341 1.7138-1.35065.579-.07822 2.1741-.13789 3.9845.72142l.7097-3.418162C35.4913.349423 34.2405 0 32.6842 0c-3.9936 0-6.8041 2.19115-6.8278 5.3287-.026 2.32071 2.0053 3.61572 3.5366 4.38687 1.5747.78973 2.1031 1.29713 2.0971 2.00353-.0112 1.0816-1.2557 1.559-2.4193 1.5775-1.9668.0312-3.1333-.5297-4.0583-.9745l-.0902-.0434-.7323 3.5316c.944.447 2.6865.837 4.4933.8564 4.2449 0 7.0213-2.1638 7.0343-5.5153l.0005.0014ZM18.9836.295667 12.437 16.4148H8.1661L4.94466 3.54987c-.19558-.79239-.36459-1.08241-.96018-1.41624C3.01336 1.58961 1.40967 1.07972 0 .762818L.094534.295667H6.96971c.87633 0 1.66411.602351 1.86307 1.643903l1.70132 9.32693L14.7387.295667h4.2449ZM50 16.4148h-3.7368l-.4891-2.408h-5.1824l-.8425 2.408h-4.2425l6.0637-14.93647c.2839-.720503.9651-1.189218 1.7187-1.182663h3.4491L50 16.4148Zm-8.245-5.712 2.1266-6.05279 1.224 6.05259-3.3506.0002Zm-20.3399 5.712L24.7561.295667h-4.0389L17.3749 16.4148h4.0402Z" fill="#1434CB"></path></svg>
              </div>

              <span className='terms-and-conditions'>
                Prices and delivery charges are not confirmed until payment is made.

                You have 30 days to return the order and receive a refund of the price paid. Please read: Return and Refund.
              </span>

            </div>
          </>
        </div>
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};


