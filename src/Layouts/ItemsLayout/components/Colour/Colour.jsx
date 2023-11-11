/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Colour.scss';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../../../contexts/ProductsContext';
import { ClipLoader } from 'react-spinners';


export default function Colour({ setIsFilteredModalClicked, selectedColour, setSelectedColour, setIsLoading, isLoading }) {
  const {
    menOriginalProducts,
    kidsOriginalProducts,
    babyOriginalProducts,
    setFilteredMenData,
    setFilteredKidsData,
    setFilteredBabyData,
    setFilteredWomenData,
    womenOriginalProducts,
    colourStatusSide,
  } = useProducts();

  console.log(isLoading);

  const handleChange = (event) => {
    const selectedColor = event.target.value;

    if (selectedColour.includes(selectedColor)) {
      // If the color is already selected, remove it
      setSelectedColour(selectedColour.filter(color => color !== selectedColor));
    } else if (selectedColor === 'NONE') {
      setSelectedColour([])
    }
    else {
      // If the color is not selected, add it to the array
      setSelectedColour([...selectedColour, selectedColor]);
    }
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
    setSelectedColour([]);
    // 1000 milliseconds (1 second)
  }, [path]);


  const load = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (typeof callback === 'function') {
        callback(); // Call the provided callback function
        setIsFilteredModalClicked(false)
        document.body.classList.remove('modal-open')
      }
    }, 500);
  };


  useEffect(() => {
    if (onWomanPage) {

      let filtered = womenOriginalProducts;

      if (selectedColour.length !== 0) {
        filtered = filtered.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredWomenData(filtered))
      } else {
        load(() => setFilteredWomenData(womenOriginalProducts))
      }

    } else if (onManPage) {
      let filtered = menOriginalProducts;

      if (selectedColour.length !== 0) {
        filtered = filtered.filter(item => selectedColour.includes(item.colour));

        load(() => setFilteredMenData(filtered))
      } else {
        load(() => setFilteredMenData(menOriginalProducts))
      }

    } else if (onKidsPage) {
      let filtered = kidsOriginalProducts;

      if (selectedColour.length !== 0) {
        filtered = filtered.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredKidsData(filtered))
      } else {
        load(() => setFilteredKidsData(kidsOriginalProducts))
      }

    } else {
      let filtered = babyOriginalProducts;
      if (selectedColour.length !== 0) {
        filtered = filtered.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredBabyData(filtered))
      } else {
        load(() => setFilteredBabyData(babyOriginalProducts))
      }
    }
  }, [selectedColour, colourStatusSide])


  const renderedList = renderColorList();


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
          onChange={handleChange} // Update the selected color
          label="Colour"
          value={'NONE' || selectedColour}
        >
          <MenuItem className='color-value' value='NONE'>
            <em>None</em>
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

      {isLoading && (
        <>
          <div className="backdrop" />
          <ClipLoader size={25} color="white" className="clip-loader" />
        </>
      )}
    </div>
  );
}
