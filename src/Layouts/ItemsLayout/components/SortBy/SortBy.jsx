import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useProducts } from '../../../../contexts/ProductsContext';
import './SortBy.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';


export default function SortBy({ setIsFilteredModalClicked, setSideModalContent, setSelectedSortStatus, selectedSortStatus, setIsLoading, isLoading }) {

  const { filteredWomenData, setFilteredWomenData, setFilteredMenData, setFilteredKidsData, setFilteredBabyData, filteredMenData, filteredKidsData, filteredBabyData, womenOriginalProducts, menOriginalProducts, kidsOriginalProducts, babyOriginalProducts } = useProducts();



  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = location.pathname.includes('woman');
  const onManPage = location.pathname.includes('man');
  const onKidsPage = location.pathname.includes('kids');
  const onBabyPage = location.pathname.includes('baby');
  const [search, setSearch] = useSearchParams()
  const sortParam = search.get('sort');


  const handleChange = (event) => {
    setSelectedSortStatus(event.target.value);
    setSearch({ sort: event.target.value })
  };


  useEffect(() => {
    if (sortParam !== 'none') {
      setSelectedSortStatus(sortParam)
    } else {
      setSelectedSortStatus('')
      setSearch({})
    }
  }, [sortParam, selectedSortStatus]);

  useEffect(() => {
    setSelectedSortStatus([]);
  }, [path]);

  console.log(sortParam);

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
        if (selectedSortStatus === 'lowest') {
          setFilteredWomenData([...filteredWomenData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'highest') {
          setFilteredWomenData([...filteredWomenData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'none') {
          setFilteredWomenData(womenOriginalProducts)
        }
      });
    } else if (onManPage) {
      load(() => {
        if (selectedSortStatus === 'lowest') {
          setFilteredMenData([...filteredMenData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'highest') {
          setFilteredMenData([...filteredMenData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'none') {
          setFilteredMenData(menOriginalProducts)
        }
      });
    } else if (onKidsPage) {
      load(() => {
        if (selectedSortStatus === 'lowest') {
          setFilteredKidsData([...filteredKidsData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'highest') {
          setFilteredKidsData([...filteredKidsData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'none') {
          setFilteredKidsData(kidsOriginalProducts);
        }
      });
    } else if (onBabyPage) {
      load(() => {
        if (selectedSortStatus === 'lowest') {
          setFilteredBabyData([...filteredBabyData].sort((a, b) => a.price - b.price));
        } else if (selectedSortStatus === 'highest') {
          setFilteredBabyData([...filteredBabyData].sort((a, b) => b.price - a.price));
        } else if (selectedSortStatus === 'none') {
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
          <MenuItem className='value' value="none"> <em>None</em></MenuItem>
          <MenuItem className='value' value={'lowest'}>Lowest price</MenuItem>
          <MenuItem className='value' value={'highest'}>Highest price</MenuItem>
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
