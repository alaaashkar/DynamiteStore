/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ProductType.scss'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useProducts } from '../../../../contexts/ProductsContext';
import { ClipLoader } from 'react-spinners';


export default function ProductType({ setSelectedProductType, selectedProductType, setIsFilteredModalClicked, setSideModalContent, setIsLoading, isLoading }) {
  const {
    menOriginalProducts,
    babyOriginalProducts,
    kidsOriginalProducts,
    setFilteredWomenData,
    womenOriginalProducts,
    setFilteredMenData,
    setFilteredKidsData,
    setFilteredBabyData
  } = useProducts();

  const handleChange = (event) => {
    const selectedType = event.target.value;

    if (selectedProductType.includes(selectedType)) {
      setSelectedProductType(selectedProductType.filter(type => type !== selectedType));
    } else if (selectedType === 'NONE') {
      setSelectedProductType([]);
    } else {
      setSelectedProductType([...selectedProductType, selectedType]);
    }
  };

  const load = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (typeof callback === 'function') {
        callback(); // Call the provided callback function
        setIsFilteredModalClicked(false)
        setSideModalContent('default')
        document.body.classList.remove('modal-open')
      }
    }, 500);
  }

  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = path.includes('woman');
  const onManPage = path.includes('man');
  const onKidsPage = path.includes('kids');
  const onBabyPage = path.includes('baby');

  const womanTypeList = ["Blouse", "Dress", "Skirt", "Pants"];
  const manTypeList = ["Jacket", "Hoodie", "Blouse", "Pants", "Sweatshirt"];
  const kidsTypeList = ["Dress", "Sweatshirt", "Hoodie", "Bodysuit", "Shoes"];
  const babyTypeList = ["Sweatshirt", "Dress", "Bodysuit", "Shoes", "Set", "Turtleneck"];

  const renderTypeList = () => {
    if (onWomanPage) {
      return womanTypeList;
    } else if (onManPage) {
      return manTypeList;
    } else if (onKidsPage) {
      return kidsTypeList;
    } else if (onBabyPage) {
      return babyTypeList;
    }
    return ['NONE']; // Default to an empty array if no match is found.
  };

  useEffect(() => {
    setSelectedProductType([]);
  }, [path]);

  const renderedType = renderTypeList()

  useEffect(() => {
    if (onWomanPage) {
      let filtered = womenOriginalProducts;

      if (selectedProductType.length !== 0) {
        filtered = filtered.filter(item => selectedProductType.includes(item.type));
        load(() => setFilteredWomenData(filtered))
      } else {
        load(() => setFilteredWomenData(womenOriginalProducts))
      }

    // } else if (onManPage) {

    //   let filtered = menOriginalProducts;

    //   if (selectedProductType.length !== 0) {
    //     filtered = filtered.filter(item => selectedProductType.includes(item.type));
    //     load(() => setFilteredMenData(filtered))
    //   } else {
    //     load(() => setFilteredMenData(menOriginalProducts))
    //   }

    } else if (onKidsPage) {
      let filtered = kidsOriginalProducts;
      if (selectedProductType.length !== 0) {
        filtered = filtered.filter(item => selectedProductType.includes(item.type));
        load(() => setFilteredKidsData(filtered))
      } else {
        load(() => setFilteredKidsData(kidsOriginalProducts))
      }

    } else {

      let filtered = babyOriginalProducts
      if (selectedProductType.length !== 0) {
        filtered = filtered.filter(item => selectedProductType.includes(item.type));
        load(() => setFilteredBabyData(filtered))
      } else {
        load(() => setFilteredBabyData(kidsOriginalProducts))
      }
    }
  }, [selectedProductType])

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='sort-by'>
        <InputLabel id="demo-simple-select-standard-label" sx={{
          color: '#222222',
          fontWeight: '800',
        }}>PRODUCT TYPE</InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={handleChange}
          label="product-type"
          value={'NONE' || selectedProductType}
        >
          <MenuItem className='product-type' value="NONE">
            <em>None</em>
          </MenuItem>

          {renderedType.map(type => (
            <MenuItem
              key={type}
              className='product-type'
              value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {isLoading && (
        <>
          <div className="backdrop" />
          <ClipLoader size={25} color="white" className="clip-loader" />
        </>
      )}
    </div>
  );
}
