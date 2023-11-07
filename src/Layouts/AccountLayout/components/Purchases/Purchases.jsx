import './Purchases.scss'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const Purchases = () => {
  return (
    <>
      <h1 className='settings-text'>My Orders</h1>
      <div className="shopping-container-purchase">
        <ShoppingBagOutlinedIcon className="cart-item shopping-icon" />
        <font>Product not purchased</font>
      </div>
    </>
  )

};
