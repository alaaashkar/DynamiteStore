import { useNewProducts } from '../../contexts/NewProducts';
import { NewProduct } from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './NewProducts.scss';

export const Products = () => {
  const { ProductsList } = useNewProducts();

  return (
    <div className='products'>
      <>
        <button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {ProductsList.map((newProduct) => (
          <NewProduct
            key={newProduct.id}
            img={newProduct.img}
            name={newProduct.name}
            price={newProduct.price}
          />
        ))}

        <button>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </>

    </div>
  );
};
