import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ProductType.scss'

export default function ProductType() {
  const [productType, setProductType] = React.useState('');

  const handleChange = (event) => {
    setProductType(event.target.value);
  };

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
          <MenuItem className='product-type' value={'scarf'}>Scarf</MenuItem>
          <MenuItem className='product-type' value={'shoe'}>Shoe</MenuItem>
          <MenuItem className='product-type' value={'beret'}>Beret</MenuItem>
          <MenuItem className='product-type' value={'bracelet'}>Bracelet</MenuItem>
          <MenuItem className='product-type' value={'blouse'}>Blouse</MenuItem>
          <MenuItem className='product-type' value={'dress'}>Dress</MenuItem>
          <MenuItem className='product-type' value={'jacket'}>Jacket</MenuItem>
          <MenuItem className='product-type' value={'skirt'}>Skirt</MenuItem>




        </Select>
      </FormControl>

    </div>
  );
}