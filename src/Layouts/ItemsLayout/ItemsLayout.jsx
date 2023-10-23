import React from 'react'
import './ItemsLayout.scss'
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { FormFilter } from './components/FormFilter/FormFilter';



export const ItemsLayout = () => {
  const { items } = useParams()

  console.log(items);

  const breadcrumbText = items ===
    'woman' ? 'Woman'
    : 'male' ? 'Man'
      : ''

  return (
    <>
      <nav className='breadcrumb'>
        <ul>
          <li>
            <a href="/"> START PAGE &nbsp;</a>
            <span>/</span>
          </li>

          <li>
            <a href="woman"> {breadcrumbText} &nbsp;</a>
          </li>
        </ul>
      </nav>
      <main className='container wrapper'>
        <SideBar />

        <div className='products-timeline'>
          <h1 className="playing-images-title products-timeline-title">CHECK ALL OUT</h1>

          <div className='products-filter-container'>
            <FormFilter />
          </div>
        </div>
      </main>
    </>
  )
};
