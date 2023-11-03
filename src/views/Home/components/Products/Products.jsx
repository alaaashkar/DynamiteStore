import { useEffect, useState } from 'react';
import { Product } from '../Product/Product';
import './Products.scss';
import Carousel from 'react-elastic-carousel';

export const Products = ({ filteredProducts }) => {
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setItemsToShow(2)
      } else {
        setItemsToShow(4)
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []) //for media query purposes "Carousel"

  return (
    <div className='products'>
      <>
        {/* <button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button> */}
        <Carousel
          itemsToShow={itemsToShow}
          itemsToScroll={4}
          className='carousel'
          disableArrowsOnEnd={false}
        >
          {filteredProducts.map((newProduct) => (
            <Product
              newProduct={newProduct}
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
