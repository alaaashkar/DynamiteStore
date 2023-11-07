import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'animate.css'
import 'react-typist/dist/Typist.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { ProductsProvider } from './contexts/ProductsContext';
import { MenuContextProvider } from './contexts/MenuContext';
import { AuthProvider } from './contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AuthProvider>
      <ProductsProvider>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </ProductsProvider>
    </AuthProvider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
