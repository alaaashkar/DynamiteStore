import React, { useEffect } from "react";
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "./views/Home/Home";
import { Woman } from "views/Woman/Woman";
import { ItemsLayout } from "./Layouts/ItemsLayout/ItemsLayout"
import { Male } from "./views/Male/Male";
import { MainLayout } from "./Layouts/MainLayout/MainLayout"
import { Kids } from "./views/Kids/Kids";
import { Baby } from "./views/Baby/Baby";
import { ProductPage } from "./views/ProductPage/ProductPage";
import { ErrorPage } from "./views/ErrorPage/ErrorPage"
import { Cart } from "./views/Cart/Cart";
import { useProducts } from "./contexts/ProductsContext";
import { Favorites } from "./views/Favorites/Favorites";

const App = () => {
  const shouldRedirectToErrorPage = window.location.pathname === '/items' || window.location.pathname === '/items/'; // Redirect if the path is "/items"
  const { setCartItems, initialCartItems } = useProducts()

  useEffect(() => {
    setCartItems(initialCartItems)
  }, [initialCartItems])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="product-page/:itemId" element={<ProductPage />} />
        <Route path="items" element={shouldRedirectToErrorPage ? <Navigate to="/not-found" /> : <ItemsLayout />}>
          <Route path="woman" element={<Woman />} />
          <Route path="man" element={<Male />} />
          <Route path="kids" element={<Kids />} />
          <Route path="baby" element={<Baby />} />
        </Route>
      </Route>
      <Route path="not-found" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
export default App;