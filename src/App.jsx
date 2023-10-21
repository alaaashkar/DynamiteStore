import React from "react";
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout/Layout";
import { CustomerService } from "./components/CustomerService/CustomerService";
import { News } from "./components/News/News";
import { Store } from "./components/Store/Store";
import { Home } from "./components/Home/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        < Route path="customer-service" element={<CustomerService />} />
        <Route path="fashion-news" element={<News />} />
        <Route path="store" element={<Store />} />

      </Route>
    </Routes >
  )
};

export default App;