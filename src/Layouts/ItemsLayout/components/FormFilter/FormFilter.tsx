import React, { useState } from 'react';
import './FormFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import SortBy from '../SortBy/SortBy';
import Colour from '../Colour/Colour';
import ProductType from '../ProductType/ProductType';
import { FilterModal } from '../FilterModal/FilterModal';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'



export const FormFilter = () => {
  const [isFilterModalClicked, setIsFilteredModalClicked] = useState(false);


  // const handleAllFiltersClick = (event) => {
  //   // Prevent the event from propagating to the document click event listener
  //   event.stopPropagation();
  //   setIsFilteredModalClicked(true);
  //   // Add a class to the body to disable scrolling
  //   document.body.classList.add('modal-open');
  // };



  return (
    <form className='filter-form'>
      <div className='left'>
        <fieldset>
          <SortBy />
        </fieldset>

        <fieldset>
          <Colour />
        </fieldset>

        <fieldset>
          <ProductType />
        </fieldset>

        <fieldset
          className='all-filters'
          // onClick={handleAllFiltersClick}
        >
          <FontAwesomeIcon size='xl' icon={faSliders} className='sliders' />
          <span>ALL FILTERS</span>
        </fieldset>

        <fieldset className='clear-filters'>
          <FontAwesomeIcon color='black' className='clear-all-icon' icon={faCircleXmark} />
          <span className='clear-all-text'>Reset All Filters</span>
        </fieldset>

        {isFilterModalClicked && <div className="backdrop" />}

        <FilterModal
          setIsFilteredModalClicked={setIsFilteredModalClicked}
          isFilterModalClicked={isFilterModalClicked} />

      </div>

      <div className='right'>
        <p className='filter-pagination'>
          sadasd
        </p>

        <p className='filter-pagination'>
          sadasd
        </p>

        <p className='filter-pagination'>
          sadasd
        </p>

        <p className='filter-pagination'>
          sadasd
        </p>
      </div>
    </form>
  );
};
