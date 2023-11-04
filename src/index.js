import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'animate.css'
import 'react-typist/dist/Typist.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from './contexts/ProductsContext';
import { MenuContextProvider } from './contexts/MenuContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductsProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ProductsProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
