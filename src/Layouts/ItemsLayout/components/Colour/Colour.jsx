import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Colour.scss'
import { useLocation } from 'react-router-dom';

export default function Colour() {
  const [colour, setColour] = React.useState('');

  const handleChange = (event) => {
    setColour(event.target.value);
  };

  const womanColorList = ['White', 'Beige', 'Black']


  const location = useLocation();
  const onWomanPage = location.pathname.includes('woman');
  const onManPage = location.pathname.includes('man');
  const onKidsPage = location.pathname.includes('kids');
  const onBabyPage = location.pathname.includes('baby');


  // const 

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{
          color: '#222222',
          fontWeight: '800',

        }}>COLOUR</InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={colour}
          onChange={handleChange}
          label="Colour"
        >
          
          <MenuItem className='color-value' value={''}>
            <span>None</span>
          </MenuItem>

          <MenuItem className='color-value' value={'white'}>
            <span>White</span>
          </MenuItem>

          <MenuItem className='color-value' value={'beige'}>
            <span>Beige</span>
          </MenuItem>

          <MenuItem className='color-value' value={'black'}>
            <span>Black</span>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}