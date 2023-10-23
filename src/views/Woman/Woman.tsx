import React from 'react';
import { useEffect, useState } from 'react';
import './Woman.scss';
import getWomanProducts from 'utils/client';

type womanProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Woman = () => {
  const [womanProducts, setWomanProducts] = useState<womanProductType[]>([])

  useEffect(() => {
    getWomanProducts().then(res => setWomanProducts(res))
  }, [])

  return (
    <>
    
    </>
  )
};
