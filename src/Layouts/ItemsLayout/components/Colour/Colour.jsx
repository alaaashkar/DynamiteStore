/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Colour.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../../../contexts/ProductsContext';
import { ClipLoader } from 'react-spinners';

export default function Colour({
  setIsFilteredModalClicked,
  selectedColour,
  setSelectedColour,
  setIsLoading,
  isLoading
}) {
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

  const [search, setSearch] = useSearchParams();

  const colourParam = search.get('colours');

  useEffect(() => {
    const arrayed = colourParam;
    if (arrayed !== null) {
      const finalArary = arrayed.split(' ')
      setSelectedColour(finalArary);
    } else {
      setSelectedColour([])
      setSearch([])
    }
  }, [colourParam]);

  const setSearchCallback = useCallback(setSearch, [setSearch]);

  useEffect(() => {
    if (selectedColour.length > 0) {
      // Update the URL with the selected colors
      const newSearch = new URLSearchParams(search);
      newSearch.set('colours', selectedColour.join(' '));
      setSearch(newSearch.toString());
    } else {
      //   // Handle the case when no colors are selected
      const newSearch = new URLSearchParams(search);
      newSearch.delete('colours');
      setSearch(newSearch.toString());
      // }
    }
  }, [selectedColour, setSearchCallback, search]);


  const handleChange = (event) => {
    const selected = event.target.value;

    // Use the state updater function to ensure we have the most recent state
    setSelectedColour(prevColors => {
      // If 'NONE' is selected, return an empty array
      if (selected === 'NONE') {
        return [];
      }

      // Check if the color is already selected (case-insensitive)
      const isColorSelected = prevColors.some(color => color.toLowerCase() === selected.toLowerCase());

      // If the color is already selected, remove it
      if (isColorSelected) {
        return prevColors.filter(color => color.toLowerCase() !== selected.toLowerCase());
      }

      // If the color is not selected, add it to the array
      return [...prevColors, selected];
    });
  };


  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = path.includes('woman');
  const onManPage = path.includes('man');
  const onKidsPage = path.includes('kids');
  const onBabyPage = path.includes('baby');

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
    if (selectedColour.length > 0) {
      let filtered = [];

      if (onWomanPage) {
        filtered = womenOriginalProducts.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredWomenData(filtered))
      } else if (onManPage) {
        filtered = menOriginalProducts.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredMenData(filtered))
      } else if (onKidsPage) {
        filtered = kidsOriginalProducts.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredKidsData(filtered))
      } else {
        filtered = babyOriginalProducts.filter(item => selectedColour.includes(item.colour));
        load(() => setFilteredBabyData(filtered))
      }
    } else {
      load(() => {
        if (onWomanPage) {
          setFilteredWomenData(womenOriginalProducts);
        } else if (onManPage) {
          setFilteredMenData(menOriginalProducts);
        } else if (onKidsPage) {
          setFilteredKidsData(kidsOriginalProducts);
        } else {
          setFilteredBabyData(babyOriginalProducts);
        }
      });
    }
  }, [selectedColour, colourStatusSide, onWomanPage, onManPage, onKidsPage, onBabyPage]);

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
          value={selectedColour.length === 0 ? 'NONE' : selectedColour}
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
