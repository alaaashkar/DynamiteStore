import React, { useState } from 'react';
import './FormFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import SortBy from '../SortBy/SortBy';
import Colour from '../Colour/Colour';
import Body from '../Body/Body';
import ProductType from '../ProductType/ProductType';
import { FilterModal } from '../FilterModal/FilterModal';


export const FormFilter = () => {
  const [isFilterModalClicked, setIsFilteredModalClicked] = useState(false);

  const handleAllFiltersClick = (event) => {
    // Prevent the event from propagating to the document click event listener
    event.stopPropagation();
    setIsFilteredModalClicked(true);
    // Add a class to the body to disable scrolling
    document.body.classList.add('modal-open');
  };


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
          <Body />
        </fieldset>

        <fieldset>
          <ProductType />
        </fieldset>

        <fieldset
          className='all-filters'
          onClick={handleAllFiltersClick}
        >
          <FontAwesomeIcon size='xl' icon={faSliders} className='sliders' />
          <span>ALL FILTERS</span>
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
