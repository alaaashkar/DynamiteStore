import React from 'react';
import { useEffect, useState } from 'react';
import './Woman.scss';
import getWomanProducts from 'utils/client';
import SideBar from 'components/SideBar/SideBar'

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
      <nav className='breadcrumb'>
        <ul>
          <li>
            <a href="/"> START PAGE &nbsp;</a>
            <span>/</span>
          </li>

          <li>
            <a href="woman"> Woman &nbsp;</a>
          </li>
        </ul>
      </nav>
      <main className='container wrapper'>
        <SideBar/>

        <div className='products-timeline'>
          <h1 className="playing-images-title products-timeline-title">CHECK ALL OUT</h1>

          <div className='products-filter-container'>

          </div>
        </div>
      </main>
    </>
  )
};
