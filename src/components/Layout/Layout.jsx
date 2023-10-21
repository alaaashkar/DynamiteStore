import './Layout.scss';
import { Outlet } from 'react-router-dom';


import React from "react";
import { Nav } from 'components/Nav/Nav';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <div className='App'>
      <Header />

      <Nav />

      <div className='page'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
