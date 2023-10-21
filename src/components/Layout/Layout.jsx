import { Header } from '../Header/Header';
import './Layout.scss';
import { Outlet } from 'react-router-dom';


import React from "react";
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <div className='App'>
      <Header />

      <div className='page'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
