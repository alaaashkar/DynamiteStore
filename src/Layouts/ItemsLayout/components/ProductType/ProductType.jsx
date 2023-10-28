import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ProductType.scss'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useProducts } from '../../../../contexts/ProductsContext';


export default function ProductType() {
  const [productType, setProductType] = useState(''); // Store the selected product type
  const { womenProducts, setWomenProducts, womenfilteredProducts } = useProducts();

  const handleChange = (event) => {
    setProductType(event.target.value); // Update the selected product type in state
  };

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
    return []; // Default to an empty array if no match is found.
  };

  // useEffect(() => {
  //   if (onWomanPage && productType) {
  //     // Filter woman products based on the selected product type
  //     const filteredProducts = womenProducts.filter((item) =>
  //       item.type && item.type.toLowerCase() === productType.toLowerCase()
  //     );
  //     setWomenProducts(filteredProducts);
  //   }
  // }, [productType, onWomanPage, womenProducts, setWomenProducts]);

  const renderedType = renderTypeList()

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
          value={productType}
          onChange={handleChange}
          label="product-type"
        >
          <MenuItem value="">
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
    </div>
  );
}
