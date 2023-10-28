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


export default function Colour() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColour, setSelectedColour] = useState(''); // Store the selected color
  const {
    menOriginalProducts,
    kidsOriginalProducts,
    babyOriginalProducts,
    setFilteredMenData,
    setFilteredKidsData,
    setFilteredBabyData,
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

  const renderedList = renderColorList();

  const load = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (typeof callback === 'function') {
        callback(); // Call the provided callback function
      }
    }, 500);
  };

  useEffect(() => {
    if (onWomanPage) {
      load(() => {
        let filtered = womenOriginalProducts;

        if (selectedColour !== 'NONE') {
          filtered = filtered.filter(item => item.colour === selectedColour);
        }

        setFilteredWomenData(filtered);
      })

    } else if (onManPage) {
      load(() => {
        let filtered = menOriginalProducts;

        if (selectedColour !== 'NONE') {
          filtered = filtered.filter(item => item.colour === selectedColour);
        }

        setFilteredMenData(filtered)
      })
    } else if (onKidsPage) {
      load(() => {
        let filtered = kidsOriginalProducts;

        if (selectedColour !== 'NONE') {
          filtered = filtered.filter(item => item.colour === selectedColour);
        }

        setFilteredKidsData(filtered)
      })

    } else {
      load(() => {
        let filtered = babyOriginalProducts
        if (selectedColour !== 'NONE') {
          filtered = filtered.filter(item => item.colour === selectedColour);
        }

        setFilteredBabyData(filtered)
      })
    }


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

      {isLoading && (
        <>
          <div className="backdrop" />
          <ClipLoader size={25} color="white" className="clip-loader" />
        </>
      )}
    </div>
  );
}
