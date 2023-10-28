/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Colour.scss';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../../../contexts/ProductsContext';

export default function Colour() {

  const [selectedColour, setSelectedColour] = useState(''); // Store the selected color
  const {
    menOriginalProducts,
    kidsOriginalProducts,
    babyOriginalProducts,
    setWomenProducts,
    setMenProducts,
    setKidsProducts,
    setBabyProducts,
    filteredWomenData,
    setFilteredWomenData,
    womenOriginalProducts
  } = useProducts();

  const handleChange = (event) => {
    setSelectedColour(event.target.value); // Update the selected color in state
  };

  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = path.includes('woman');
  const onManPage = path.includes('man');
  const onKidsPage = path.includes('kids');
  const onBabyPage = path.includes('baby');

  // Reset the selected color when the route changes


  const renderColorList = () => {
    if (onWomanPage) {
      return ["White", "Beige", "Black"];
    } else if (onManPage) {
      return ["Brown", "Black", "Grey", "Red", "Green"];
    } else if (onKidsPage) {
      return ["Purple", "Red", "Olive", "White", "Blue", "Yellow"];
    } else if (onBabyPage) {
      return ["Beige", "Patterned", "Black", "Red", "Pink"];
    }

    // Default to a valid option if no match is found
    return ['NONE'];
  };

  useEffect(() => {
    setSelectedColour('NONE');
    // 1000 milliseconds (1 second)
  }, [path]);

  // useEffect(() => {
  //   if (selectedColour === 'NONE') {
  //     // If 'NONE' is selected, reset products to the original products
  //     setWomenProducts(womenOriginalProducts);
  //     setMenProducts(menOriginalProducts);
  //     setKidsProducts(kidsOriginalProducts);
  //     setBabyProducts(babyOriginalProducts);
  //   } else {
  //     // Filter products based on the selected color
  //     setWomenProducts(womenOriginalProducts.filter((item) =>
  //       item.colour && item.colour.toLowerCase() === selectedColour.toLowerCase()
  //     ));
  //     setMenProducts(menOriginalProducts.filter((item) =>
  //       item.colour && item.colour.toLowerCase() === selectedColour.toLowerCase()
  //     ));
  //     setKidsProducts(kidsOriginalProducts.filter((item) =>
  //       item.colour && item.colour.toLowerCase() === selectedColour.toLowerCase()
  //     ));
  //     setBabyProducts(babyOriginalProducts.filter((item) =>
  //       item.colour && item.colour.toLowerCase() === selectedColour.toLowerCase()
  //     ));
  //   }

  // }, [selectedColour]);

  const renderedList = renderColorList();



  useEffect(() => {
    let filtered = womenOriginalProducts;

    if (selectedColour !== 'NONE') {
      filtered = filtered.filter(item => item.colour === selectedColour);
    }

    setFilteredWomenData(filtered);

  }, [selectedColour])

  console.log(filteredWomenData);


  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{
          color: '#222222',
          fontWeight: '800',
        }}>
          COLOUR
        </InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedColour} // Use the selected color from state
          onChange={handleChange} // Update the selected color
          label="Colour"
        >
          <MenuItem className='color-value' value={'NONE'}>
            <span>NONE</span>
          </MenuItem>

          {renderedList.map((color) => (
            <MenuItem
              className='color-value'
              value={color}
              key={color}
            >
              <span>{color}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
