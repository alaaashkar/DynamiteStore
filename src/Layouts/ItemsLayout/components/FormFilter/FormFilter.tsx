import React, { useState } from 'react';
import './FormFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import SortBy from '../SortBy/SortBy';
import Colour from '../Colour/Colour';
import ProductType from '../ProductType/ProductType';
import { FilterModal } from '../FilterModal/FilterModal';





export const FormFilter = () => {
  const [isFilterModalClicked, setIsFilteredModalClicked] = useState(false);
  const [sideModalContent, setSideModalContent] = useState('default')
  const [selectedSortStatus, setSelectedSortStatus] = useState('');
  const [selectedColour, setSelectedColour] = useState('')
  const [productType, setProductType] = useState(''); // Store the selected product type
  const [isLoading, setIsLoading] = useState(false);




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
          <SortBy
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setSelectedSortStatus={setSelectedSortStatus}
            selectedSortStatus={selectedSortStatus}
            setIsFilteredModalClicked={setIsFilteredModalClicked}
            setSideModalContent={setSideModalContent}
          />
        </fieldset>

        <fieldset>
          <Colour
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setSelectedColour={setSelectedColour}
            selectedColour={selectedColour}
            setIsFilteredModalClicked={setIsFilteredModalClicked}
            setSideModalContent={setSideModalContent}
          />
        </fieldset>

        <fieldset>
          <ProductType
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setSideModalContent={setSideModalContent}
            setProductType={setProductType}
            setIsFilteredModalClicked={setIsFilteredModalClicked}
            productType={productType}
          />
        </fieldset>

        <fieldset
          className='all-filters'
          onClick={handleAllFiltersClick}
        >
          <FontAwesomeIcon size='xl' icon={faSliders} className='sliders' />
          <span>ALL FILTERS</span>
        </fieldset>

        {isLoading && <div className="backdrop" />}

        <FilterModal
          setSelectedSortStatus={setSelectedSortStatus}
          sideModalContent={sideModalContent}
          setSideModalContent={setSideModalContent}
          setIsFilteredModalClicked={setIsFilteredModalClicked}
          isFilterModalClicked={isFilterModalClicked}
          setSelectedColour={setSelectedColour}
          setProductType={setProductType}
        />


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
