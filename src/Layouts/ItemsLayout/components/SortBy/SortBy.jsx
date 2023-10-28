import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useProducts } from '../../../../contexts/ProductsContext';
import './SortBy.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function SortBy() {
  const [age, setAge] = React.useState('');
  const { womenProducts, setWomenProducts, sortStatus, setSortStatus } = useProducts();

  const handleChange = (event) => {
    const selectedSortStatus = event.target.value;
    setAge(selectedSortStatus);
    setSortStatus(selectedSortStatus); // Set the sort status here
  };

  const location = useLocation();
  const onWomanPage = location.pathname.includes('woman');
  const onManPage = location.pathname.includes('man');
  const onKidsPage = location.pathname.includes('kids');
  const onBabyPage = location.pathname.includes('baby');

  useEffect(() =>{})

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
          <MenuItem onClick={() => setSortStatus('NONE')} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={() => setSortStatus('LOWEST')} className='value' value={'lowest-price'}>Lowest price</MenuItem>
          <MenuItem onClick={() => setSortStatus('HIGHEST')} className='value' value={'highest-price'}>Highest price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
