import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useProducts } from '../../../../contexts/ProductsContext';
import './SortBy.scss';
import { useLocation } from 'react-router-dom';

export default function SortBy() {
  const [age, setAge] = React.useState('');
  const { womenProducts, setWomenProducts, menProducts, setMenProducts, kidsProducts, setKidsProducts, babyProducts, setBabyProducts } = useProducts();


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const location = useLocation();
  const onWomanPage = location.pathname.includes('woman');
  const onManPage = location.pathname.includes('man');
  const onKidsPage = location.pathname.includes('kids');
  const onBabyPage = location.pathname.includes('baby');



  const handleLowestPriceSort = () => {
    if (onWomanPage) {
      const sortedProducts = [...womenProducts].sort((a, b) => a.price - b.price);
      setWomenProducts(sortedProducts);
    } else if (onManPage) {
      const sortedProducts = [...menProducts].sort((a, b) => a.price - b.price);
      setMenProducts(sortedProducts);
    } else if (onKidsPage) {
      const sortedProducts = [...kidsProducts].sort((a, b) => a.price - b.price);
      setKidsProducts(sortedProducts);
    } else if (onBabyPage) {
      const sortedProducts = [...babyProducts].sort((a, b) => a.price - b.price);
      setBabyProducts(sortedProducts);
    }
  }

  const handleHighestPriceSort = () => {
    if (onWomanPage) {
      const sortedProducts = [...womenProducts].sort((a, b) => b.price - a.price);
      setWomenProducts(sortedProducts);
    } else if (onManPage) {
      const sortedProducts = [...menProducts].sort((a, b) => b.price - a.price);
      setMenProducts(sortedProducts);
    } else if (onKidsPage) {
      const sortedProducts = [...kidsProducts].sort((a, b) => b.price - a.price);
      setKidsProducts(sortedProducts)
    } else if (onBabyPage) {
      const sortedProducts = [...babyProducts].sort((a, b) => b.price - a.price);
      setBabyProducts(sortedProducts);
    }
  }

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
          <MenuItem onClick={handleLowestPriceSort} className='value' value={'lowest-price'}>Lowest price</MenuItem>
          <MenuItem onClick={handleHighestPriceSort} className='value' value={'highest-price'}>Highest price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
