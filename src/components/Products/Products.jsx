import { Product } from '../Product/Product';
import './Products.scss';
import Carousel from 'react-elastic-carousel';

export const Products = ({ filteredProducts }) => {
  

  return (
    <div className='products'>
      <>
        {/* <button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button> */}
        <Carousel itemsToShow={4} itemsToScroll={4} className='carousel' disableArrowsOnEnd={false} >
          {filteredProducts.map((newProduct) => (
            <Product
              key={newProduct.id}
              img={newProduct.img}
              name={newProduct.name}
              price={newProduct.price}
            />
          ))}
        </Carousel>

        {/* <button>
          <FontAwesomeIcon icon={faArrowRight} />
        </button> */}
      </>

    </div>
  );
};
