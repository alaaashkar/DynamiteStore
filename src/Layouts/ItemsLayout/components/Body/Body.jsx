import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Body.scss'

export default function Body() {
  const [body, setBody] = React.useState('');

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='sort-by'>
        <InputLabel id="demo-simple-select-standard-label" sx={{
          color: '#222222',
          fontWeight: '800',

        }}>BODY</InputLabel>
        <Select
          className='select'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={body}
          onChange={handleChange}
          label="body"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className='body-value' value={`women's clothing`}>{`Women's clothing`}</MenuItem>
          <MenuItem className='body-value' value={'Bra'}>Bra</MenuItem>
          <MenuItem className='body-value' value={'Shoe'}>Shoe</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}