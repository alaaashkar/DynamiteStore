import './Cart.scss';
import { PuffLoader } from 'react-spinners';

export const Cart = () => {
  return (
    <>
      <div className='container limited-wider'>
        <h1 className='cart-title'>Shopping cart</h1>

        <div className='cart-content'>
          <div className='left'>1</div>
          <div className='right'>2</div>
        </div>
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
