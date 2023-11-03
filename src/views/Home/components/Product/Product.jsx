/* eslint-disable react/style-prop-object */
import './Product.scss';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'
import { Heart } from '../../../../components/Heart/Heart';

export const Product = ({ newProduct }) => {
  return (
    <>
      <div className='containerr'>
        <div className='item-wrapper'  >
          <div className='image-container  ' >
            <div >
              <img src={newProduct.img} alt="item" />
            </div>

            <Heart product={newProduct} />
          </div>

          <font className='animated'  >{newProduct.name}</font> <br />

          <font className='animated'>{newProduct.price}$</font>
        </div>
      </div >

    </>
  );
};
