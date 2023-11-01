import './Cart.scss';
import { PuffLoader } from 'react-spinners';

export const Cart = () => {
  return (
    <>
      <div className='container limited-wider'>
        <h1 className='cart-title'>Shopping cart</h1>

        <div className='cart-content'>
          <div className='left'>
            <h1 className='cart-title cart-content-title'>Your shopping cart is empty!</h1>
            <font>Log in to save items to your shopping cart or access previously saved items</font>

            <a className='log-in' href="/">Log in</a>
          </div>
          <div className='right'>

          </div>
        </div>
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};


