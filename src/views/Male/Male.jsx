import React from 'react';
import { useEffect, useState } from 'react';
import './Male.scss';
import getWomanProducts from 'utils/client';
import SideBar from 'components/SideBar/SideBar'


export const Male = () => {
  const [womanProducts, setWomanProducts] = useState([])

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
            <a href="male"> Men &nbsp;</a>
          </li>
        </ul>
      </nav>
      <main className='container wrapper'>
        <SideBar />

        <div className='products-timeline'>
          <h1 className="playing-images-title products-timeline-title">CHECK ALL OUT</h1>

          <div className='products-filter-container'>

          </div>
        </div>
      </main>
    </>
  )
};
