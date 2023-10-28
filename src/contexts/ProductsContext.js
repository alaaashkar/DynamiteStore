import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
// import getItems from "../services/http";
import backUp from '../services/backup.json'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(backUp)
  const [menProducts, setMenProducts] = useState([])
  const [womenProducts, setWomenProducts] = useState([])
  const [kidsProducts, setKidsProducts] = useState([])
  const [babyProducts, setBabyProducts] = useState([])


  const womenOriginalProducts = productsList.filter(product => product.sex === 'F')
  const menOriginalProducts = productsList.filter(product => product.sex === 'M')
  const kidsOriginalProducts = productsList.filter(product => product.sex === 'C')
  const babyOriginalProducts = productsList.filter(product => product.sex === 'B')

  const [filteredWomenData, setFilteredWomenData] = useState(womenOriginalProducts)


  useEffect(() => {
    setWomenProducts(productsList.filter(product => product.sex === 'F'))
    setMenProducts(productsList.filter(product => product.sex === 'M'))
    setKidsProducts(productsList.filter(product => product.sex === 'C'))
    setBabyProducts(productsList.filter(product => product.sex === 'B'))
  }, [productsList])



  const value = useMemo(() => ({
    setProductsList,
    womenOriginalProducts,
    kidsOriginalProducts,
    babyOriginalProducts,
    menOriginalProducts,
    productsList,
    womenProducts,
    menProducts,
    kidsProducts,
    babyProducts,
    setWomenProducts,
    setMenProducts,
    setKidsProducts,
    setBabyProducts,
    filteredWomenData,
    setFilteredWomenData,
  }), [womenOriginalProducts, kidsOriginalProducts, babyOriginalProducts, menOriginalProducts, productsList, womenProducts, menProducts, kidsProducts, babyProducts, filteredWomenData]);


  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider >
  )
};

export const useProducts = () => useContext(ProductsContext)
