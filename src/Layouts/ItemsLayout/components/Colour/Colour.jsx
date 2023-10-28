import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Colour.scss';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../../../contexts/ProductsContext';
import { useState, useEffect } from 'react';

export default function Colour() {
  const [selectedColour, setSelectedColour] = useState(''); // Store the selected color
  const { womenProducts, setWomenProducts, menProducts, kidsProducts, babyProducts, womenfilteredProducts, setColourStatus, colourStatus } = useProducts();
  const [filteredColour, setFilteredColour] = useState(womenfilteredProducts)

  const handleChange = (event) => {
    setSelectedColour(event.target.value); // Update the selected color in state
  };

  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = path.includes('woman');
  const onManPage = path.includes('man');
  const onKidsPage = path.includes('kids');
  const onBabyPage = path.includes('baby');

  const womanColorList = ["White", "Beige", "Black"];
  const manColorList = ["Brown", "Black", "Grey", "Red", "Green"];
  const kidsColorList = ["Purple", "Red", "Olive", "White", "Blue", "Yellow"];
  const babyColorList = ["Beige", "Patterned", "Black", "Red", "Pink"];

  const renderColorList = () => {
    if (onWomanPage) {
      return womanColorList;
    } else if (onManPage) {
      return manColorList;
    } else if (onKidsPage) {
      return kidsColorList;
    } else if (onBabyPage) {
      return babyColorList;
    }
    return []; // Default to an empty array if no match is found.
  };

  // useEffect(() => {
  //   if (onWomanPage && selectedColour) {
  //     // Filter woman products based on the selected color
  //     setWomenProducts(filteredColour.filter((item) =>
  //       item.colour && item.colour.toLowerCase() === selectedColour.toLowerCase()
  //     ));
  //   }

  // }, [colourStatus, filteredColour, onWomanPage, selectedColour, setWomenProducts, womenProducts, womenfilteredProducts]);

  const renderedList = renderColorList()

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
          <MenuItem onClick={() => setColourStatus('NONE')} className='color-value' value={''}>
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