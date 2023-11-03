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
  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])

  const womenOriginalProducts = productsList.filter(product => product.sex === 'F')
  const menOriginalProducts = productsList.filter(product => product.sex === 'M')
  const kidsOriginalProducts = productsList.filter(product => product.sex === 'C')
  const babyOriginalProducts = productsList.filter(product => product.sex === 'B')

  const [filteredWomenData, setFilteredWomenData] = useState(womenOriginalProducts)
  const [filteredMenData, setFilteredMenData] = useState(menOriginalProducts)
  const [filteredKidsData, setFilteredKidsData] = useState(kidsOriginalProducts)
  const [filteredBabyData, setFilteredBabyData] = useState(babyOriginalProducts)


  useEffect(() => {
    setWomenProducts(productsList.filter(product => product.sex === 'F'))
    setMenProducts(productsList.filter(product => product.sex === 'M'))
    setKidsProducts(productsList.filter(product => product.sex === 'C'))
    setBabyProducts(productsList.filter(product => product.sex === 'B'))
  }, [productsList])

  const initialCartItems = useMemo(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }, []);

  const initialFavoriteItems = useMemo(() => {
    const storedFavoriteItems = localStorage.getItem('favoriteItems');
    return storedFavoriteItems ? JSON.parse(storedFavoriteItems) : [];
  }, []);

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
    filteredMenData,
    setFilteredMenData,
    filteredKidsData,
    setFilteredKidsData,
    filteredBabyData,
    setFilteredBabyData,
    cartItems,
    setCartItems,
    initialCartItems,
    favoriteItems,
    setFavoriteItems,
    initialFavoriteItems,
  }), [womenOriginalProducts, kidsOriginalProducts, babyOriginalProducts, menOriginalProducts, productsList, womenProducts, menProducts, kidsProducts, babyProducts, filteredWomenData, filteredMenData, filteredKidsData, filteredBabyData, cartItems, initialCartItems, favoriteItems, initialFavoriteItems]);


  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider >
  )
};

export const useProducts = () => useContext(ProductsContext)
