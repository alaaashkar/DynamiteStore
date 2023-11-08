/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Woman.scss';
import { Link } from 'react-router-dom';
import { useProducts } from 'contexts/ProductsContext';
import { Button } from '../../components/Button/Button';
import { PuffLoader, ClipLoader } from 'react-spinners';
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';
import { Heart } from '../../components/Heart/Heart';

// Define the womanProductType here if needed

export const Woman = () => {
  const { womenProducts, filteredWomenData } = useProducts();
  const initialItemsToShow = 8;
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(0);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 4);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="container products-wrapper">
        {filteredWomenData.slice(0, visibleItems).map((product) => (
          <div
            className="product-card"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(0)}
            key={product.id} // Ensure that product.id is unique
          >
            <div className='heart-icon-container'>
              <Link to={`/product-page/${product.id}`} className="product-link">

                {hoveredProductId === product.id ? (
                  <img src={product.itemImg} alt={product.name} />
                ) : (
                  <img src={product.img} alt={product.name} />
                )}
              </Link>
              <Heart product={product} style='heart-icon-products' />
            </div>


            <a href={`/product-page/${product.id}`} className="product-link">
              <font>{product.name}</font>
            </a>

            <font>{product.price}$</font>


            <font className="last-font">New Product</font>


          </div>
        ))}
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>

      {isLoading && (
        <>
          <div className="backdrop" />
          <ClipLoader size={20} color="black" className="clip-loader" />
        </>
      )}

      {visibleItems < womenProducts.length && (
        <div className="loadMore-container">
          <Button text="Load More" onClick={handleLoadMore} buttonStyle="loadMore" />
        </div>
      )}
    </>
  );
};
