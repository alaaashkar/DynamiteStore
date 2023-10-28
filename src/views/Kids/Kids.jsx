import React, { useState } from 'react'; // Import React and useState
import { useProducts } from '../../contexts/ProductsContext';
import './Kids.scss';
import { PuffLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export const Kids = () => {
  const { kidsProducts, filteredKidsData } = useProducts();
  const [hoveredProductId, setHoveredProductId] = useState(0); // Initialize with a default value

  return (
    <>
      <div className='container products-wrapper'>
        {filteredKidsData.map((product) => (
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
      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  );
};
