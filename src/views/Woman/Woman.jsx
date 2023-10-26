import React from 'react';
import { useEffect, useState } from 'react';
import './Woman.scss';
import getWomanProducts from 'utils/client';
import { useProducts } from 'contexts/ProductsContext';
import { Button } from '../../components/Button/Button';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';

// Define the womanProductType here if needed

export const Woman = () => {
  const { womenProducts } = useProducts();
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
      <Breadcrumb>
        <li><Link to="">Woman</Link></li>
      </Breadcrumb >
      <div className="products-wrapper">
        {womenProducts.slice(0, visibleItems).map((product) => (
          <div
            className="product-card"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(0)}
            key={product.id}
          >
            <a href={`/product-page/${product.id}`} className="product-link">
              {hoveredProductId === product.id ? (
                <img src={product.itemImg} alt={product.name} />
              ) : (
                <img src={product.img} alt={product.name} />
              )}
            </a>

            <a href={`/product-page/${product.id}`} className="product-link">
              <font>{product.name}</font>
            </a>

            <font>{product.price}$</font>

            <font>New Product</font>
          </div>
        ))}
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
