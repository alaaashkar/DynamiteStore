import React, { createContext, useContext, useMemo, useState } from "react";
import getItems from "../services/items";
import backUp from '../services/backup.json'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(backUp)
  // const [filteredProducts, setFilteredProducts] = useState([])



  const value = useMemo(() => ({
    setProductsList,
    // setFilteredProducts,
    // filteredProducts,
    productsList,
  }), [productsList, setProductsList]);


  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider >
  )
};

export const useProducts = () => useContext(ProductsContext)
