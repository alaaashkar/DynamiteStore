import './Purchases.scss'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const Purchases = () => {
  return (
    <>
      <h1>My Orders</h1>
      <div className="shopping-container">
        <ShoppingBagOutlinedIcon className="cart-item shopping-icon" />
        <h3>Product not purchased</h3>
      </div>
    </>
  )

};
