import React from "react";
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout/Layout";
import { CustomerService } from "./views/CustomerService/CustomerService";
import { News } from "./views/News/News";
import { Store } from "./views/Store/Store";
import { Home } from "./views/Home/Home";
import { Woman } from "views/Woman/Woman";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />

        < Route path="customer-service" element={<CustomerService />} />

        <Route path="fashion-news" element={<News />} />

        <Route path="store" element={<Store />} />

        <Route path="woman" element={<Woman />} />

        <Route />

      </Route>
    </Routes >
  )
};

export default App;