import './Baby.scss'
import { useProducts } from '../../contexts/ProductsContext';

export const Baby = () => {
  const { babyProducts } = useProducts()

  return (
    <div className='products-wrapper'>
      {babyProducts.map(product => (
        <div className='product-card'>
          <img src={product.img} alt="img" />

          <font>{product.name}</font>

          <font>{product.price}</font>

          <font>New Product</font>
        </div>
      ))}
    </div>
  )
};
