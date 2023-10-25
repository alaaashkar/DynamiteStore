import React, { useState } from 'react';
import './Male.scss';
import { useProducts } from '../../contexts/ProductsContext';
import { Button } from '../../components/Button/Button';
import { ClipLoader } from 'react-spinners';


export const Male = () => {
  const { menProducts } = useProducts();
  const initialItemsToShow = 8;
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState(0)

  const handleLoadMore = () => {
    setIsLoading(true); // Show loader and backdrop
    setTimeout(() => {
      setIsLoading(false); // Hide loader and backdrop after 1 second
      setVisibleItems(prev => prev + 4);
    }, 500);
  };

  return (
    <>
      <div className='products-wrapper'>
        {menProducts.slice(0, visibleItems).map(product => (
          <div
            className='product-card'
            key={product.id}
            onMouseEnter={() => setProductId(product.id)}
            onMouseLeave={() => setProductId(0)}
          >
            {product.id === productId ? (
              <img src={product.itemImg} alt="img" />
            ): (
                <img src={product.img} alt="img" />
            )}

            <font>{product.name}</font>

            <font>{product.price}</font>

            <font>New Product</font>
          </div>
        ))}
      </div>


      {isLoading && (
        <>
          <div className="backdrop" />
          <ClipLoader size={20} color="black" className='clip-loader' />
        </>
      )}

      {visibleItems < menProducts.length && (
        <div className='loadMore-container'>
          <Button text={'Load More'} onClick={handleLoadMore} buttonStyle={'loadMore'} />
        </div>
      )}
    </>

  )
};
