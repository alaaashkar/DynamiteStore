import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useProducts } from '../../../../contexts/ProductsContext';
import './SortBy.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';


export default function SortBy({ setIsFilteredModalClicked, setSideModalContent, setSelectedSortStatus, selectedSortStatus, setIsLoading, isLoading }) {
  const { filteredWomenData, setFilteredWomenData, setFilteredMenData, setFilteredKidsData, setFilteredBabyData, filteredMenData, filteredKidsData, filteredBabyData, womenOriginalProducts, menOriginalProducts, kidsOriginalProducts, babyOriginalProducts } = useProducts();

  const handleChange = (event) => {
    setSelectedSortStatus(event.target.value);
  };

  const location = useLocation();
  const onWomanPage = location.pathname.includes('woman');
  const onManPage = location.pathname.includes('man');
  const onKidsPage = location.pathname.includes('kids');
  const onBabyPage = location.pathname.includes('baby');

  const load = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (typeof callback === 'function') {
        callback(); // Call the provided callback function
        setIsFilteredModalClicked(false)
        setSideModalContent('default')
        document.body.classList.remove('modal-open');

      }
    }, 500);
  };

  useEffect(() => {
    if (onWomanPage) {
      load(() => {
        if (selectedSortStatus === 'LOWEST') {
          setFilteredWomenData([...filteredWomenData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'HIGHEST') {
          setFilteredWomenData([...filteredWomenData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'NONE') {
          setFilteredWomenData(womenOriginalProducts)
        }
      });
    } else if (onManPage) {
      load(() => {
        if (selectedSortStatus === 'LOWEST') {
          setFilteredMenData([...filteredMenData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'HIGHEST') {
          setFilteredMenData([...filteredMenData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'NONE') {
          setFilteredMenData(menOriginalProducts)
        }
      });
    } else if (onKidsPage) {
      load(() => {
        if (selectedSortStatus === 'LOWEST') {
          setFilteredKidsData([...filteredKidsData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'HIGHEST') {
          setFilteredKidsData([...filteredKidsData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'NONE') {
          setFilteredKidsData(kidsOriginalProducts);
        }
      });
    } else if (onBabyPage) {
      load(() => {
        if (selectedSortStatus === 'LOWEST') {
          setFilteredBabyData([...filteredBabyData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'HIGHEST') {
          setFilteredBabyData([...filteredBabyData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'NONE') {
          setFilteredBabyData(babyOriginalProducts);
        }
      });
    }
  }, [selectedSortStatus]);






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
          value={selectedSortStatus}
          onChange={handleChange}
          label="SortStatus"
        >
          <MenuItem className='value' value="NONE"> <em>None</em></MenuItem>
          <MenuItem className='value' value={'LOWEST'}>Lowest price</MenuItem>
          <MenuItem className='value' value={'HIGHEST'}>Highest price</MenuItem>
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
