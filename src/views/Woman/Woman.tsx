import React from 'react';
import { useEffect, useState } from 'react';
import './Woman.scss';
import getWomanProducts from 'utils/client';

type womanProductsType = {
  id: number,
  
}

export const Woman = () => {
  const [womanProducts, setWomanProducts] = useState([])

  useEffect(() => {
    getWomanProducts().then(res => setWomanProducts(res))
  }, [])

  return (
    womanProducts.map(product => (
      <p>{product.id}</p>
    ))
  )
};
