import React from 'react';
import './MainLayout.scss';
import { Outlet } from 'react-router-dom';
import { Nav } from 'components/Nav/Nav';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { PuffLoader } from 'react-spinners';


export const MainLayout = () => {
  return (
    <>
      <div className='App'>
        <Header />

        <Nav />

        {/* <SideBar /> */}

        <div className='page'>
          <Outlet />

        </div>

        <Footer />
      </div>


    </>
  );
};
