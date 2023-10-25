import React from 'react';
import { useEffect, useState } from 'react';
import './Woman.scss';
import getWomanProducts from 'utils/client';
import { useProducts } from 'contexts/ProductsContext';
import { Button } from '../../components/Button/Button';
import { ClipLoader } from 'react-spinners';

// type womanProductType = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

export const Woman = () => {
  const { womenProducts } = useProducts()
  const initialItemsToShow = 8;
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow)
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(0)

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleItems(prev => prev + 4)
      setIsLoading(false)
    }, (500));
  }

  // const handleMouseEnter = (product) => {
  //   setHoveredProduct(product)
  // }

  // const handleMouseLeave = () => {
  //   setHoveredProduct(null)
  // }



  // const [womanProducts, setWomanProducts] = useState<womanProductType[]>([])

  // useEffect(() => {
  //   getWomanProducts().then(res => setWomanProducts(res))
  // }, [])

  return (
    <>
      <div className='products-wrapper'>
        {womenProducts.slice(0, visibleItems).map(product => (
          <div
            className='product-card'
            key={product.id}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(0)}
          >
            {hoveredProductId === product.id ? (
              <img src={product.itemImg} alt={product.name} />
            ) : (
              <img src={product.img} alt={product.name} />
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

      {visibleItems < womenProducts.length && (
        <div className='loadMore-container'>
          <Button text={'Load More'} onClick={handleLoadMore} buttonStyle={'loadMore'} />
        </div>
      )}
    </>

  )
};
