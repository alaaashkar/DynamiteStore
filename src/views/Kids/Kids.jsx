import { useProducts } from '../../contexts/ProductsContext';
import './Kids.scss'

export const Kids = () => {
  const { kidsProducts } = useProducts()

  return (
    <div className='products-wrapper'>
      {kidsProducts.map(product => (
        <div className='product-card'>
          <img src={product.img} alt="img" />

          <font>{product.name}</font>

          <font>{product.price}$</font>

          <font>New Product</font>
        </div>
      ))}
    </div>
  )
};
