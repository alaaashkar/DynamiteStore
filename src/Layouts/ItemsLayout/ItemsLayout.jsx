import React from 'react'
import './ItemsLayout.scss'
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { FormFilter } from './components/FormFilter/FormFilter';
import { PuffLoader } from 'react-spinners';
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';


export const ItemsLayout = () => {
  return (
    <>
        {/* <Breadcrumb /> */}
      <main className='container wrapper'>
        <SideBar />

        <div className='products-timeline'>
          <h1 className="playing-images-title products-timeline-title">CHECK ALL OUT</h1>

          <div className='products-filter-container'>
            <FormFilter />
          </div>

          <Outlet />
        </div>

      </main>

      <div className="loader">  
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
