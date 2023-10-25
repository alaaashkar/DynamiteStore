import React, { createContext, useContext, useMemo, useState } from "react";
// import getItems from "../services/http";
import backUp from '../services/backup.json'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(backUp)
  // const [filteredProducts, setFilteredProducts] = useState([])

  const womenProducts = productsList.filter(product => product.sex === 'F')
  const menProducts = productsList.filter(product => product.sex === 'M')
  const kidsProducts = productsList.filter(product => product.sex === 'C')
  const babyProducts = productsList.filter(product => product.sex === 'B')



  const value = useMemo(() => ({
    setProductsList,
    // setFilteredProducts,
    // filteredProducts,
    productsList,
    womenProducts,
    menProducts,
    kidsProducts,
    babyProducts
  }), [menProducts, productsList, womenProducts, kidsProducts, babyProducts]);


  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider >
  )
};

export const useProducts = () => useContext(ProductsContext)
