import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SortBy.scss'

export default function SortBy() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='sort-by'>
        <InputLabel id="demo-simple-select-standard-label" sx={{
          color: '#222222',
          fontWeight: '800',

        }}>SORT BY</InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className='value' value={'lowest-price'}>Lowest price</MenuItem>
          <MenuItem className='value' value={'highest-price'}>Highest price</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}