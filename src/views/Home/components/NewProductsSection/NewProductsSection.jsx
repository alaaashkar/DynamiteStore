/* eslint-disable no-unused-vars */
import './NewProductsSection.scss'
import cn from 'classnames';
import React, { useMemo, useState } from "react";
import { useProducts } from 'contexts/ProductsContext';
import { Products } from '../Products/Products';

export const NewProductsSection = () => {
  const [buttonClicked, setButtonClicked] = useState('woman');
  const { productsList, setProductsList } = useProducts()


  const filteredProducts = useMemo(() => {
    return productsList.filter(product => {
      if (buttonClicked === 'woman') {
        return product.sex === 'F';
      } else if (buttonClicked === 'male') {
        return product.sex === 'M';
      } else if (buttonClicked === 'child') {
        return product.sex === 'C';
      } else if (buttonClicked === 'baby') {
        return product.sex === 'B';
      }
      return true;
    });
  }, [buttonClicked, productsList]);

  ;

  return (
    <section className='new-products limited'>
      <h1>New Products</h1>

      <ul>
        <li>
          <button
            onClick={() => setButtonClicked('woman')}
            className={cn('', { 'clicked': buttonClicked === 'woman' })}>
            Woman
          </button>
        </li>

        <li>
          <button
            onClick={() => setButtonClicked('male')}
            className={cn('', { 'clicked': buttonClicked === 'male' })}>
            Male
          </button>
        </li>

        <li>
          <button
            onClick={() => setButtonClicked('child')}
            className={cn('', { 'clicked': buttonClicked === 'child' })}>
            Child
          </button>
        </li>

        <li>
          <button
            onClick={() => setButtonClicked('baby')}
            className={cn('', { 'clicked': buttonClicked === 'baby' })}>
            Baby
          </button>
        </li>
      </ul>

      <Products filteredProducts={filteredProducts} />

    </section>
  )
};
