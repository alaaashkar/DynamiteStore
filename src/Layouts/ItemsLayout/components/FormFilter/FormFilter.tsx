import React, { useState } from 'react';
import './FormFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import SortBy from '../SortBy/SortBy';
import Colour from '../Colour/Colour';
import ProductType from '../ProductType/ProductType';
import { FilterModal } from '../FilterModal/FilterModal';
import { useProducts } from '../../../../contexts/ProductsContext';
import { useLocation, useSearchParams } from 'react-router-dom';



export const FormFilter = () => {
  const [isFilterModalClicked, setIsFilteredModalClicked] = useState(false);
  const [sideModalContent, setSideModalContent] = useState('default')
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort')
  const [selectedSortStatus, setSelectedSortStatus] = useState(sort);
  const [selectedColour, setSelectedColour] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState([]); // Store the selected product type
  const [isLoading, setIsLoading] = useState(false);
  const { filteredWomenData, filteredMenData, filteredKidsData, filteredBabyData,
  } = useProducts()



  const handleRemoveSelectedFilter = (selected) => {
    if (Array.isArray(selectedColour)) {
      setSelectedColour(selectedColour.filter(color => color !== selected));
    }
  }

  const handleRemoveSelectedType = (selected) => {
    if (Array.isArray(selectedProductType)) {
      setSelectedProductType(selectedProductType.filter(type => type !== selected));
    }
  }

  const handleAllFiltersClick = (event) => {
    // Prevent the event from propagating to the document click event listener
    event.stopPropagation();
    setIsFilteredModalClicked(true);
    // Add a class to the body to disable scrolling
    document.body.classList.add('modal-open');
  };

  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = path.includes('woman');
  const onManPage = path.includes('man');
  const onKidsPage = path.includes('kids');
  const onBabyPage = path.includes('baby')

  return (
    <>
      <form className='filter-form'>
        <div className='left'>
          <fieldset>
            <SortBy
              setSearchParams={setSearchParams}
              sort={sort}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setSelectedSortStatus={setSelectedSortStatus}
              selectedSortStatus={selectedSortStatus}
              setIsFilteredModalClicked={setIsFilteredModalClicked}
              setSideModalContent={setSideModalContent} />
          </fieldset>

          <fieldset>
            <Colour
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setSelectedColour={setSelectedColour}
              selectedColour={selectedColour}
              setIsFilteredModalClicked={setIsFilteredModalClicked}
              setSideModalContent={setSideModalContent} />
          </fieldset>

          <fieldset>
            <ProductType
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setSideModalContent={setSideModalContent}
              setSelectedProductType={setSelectedProductType}
              setIsFilteredModalClicked={setIsFilteredModalClicked}
              selectedProductType={selectedProductType} />
          </fieldset>

          <fieldset
            className='all-filters'
            onClick={handleAllFiltersClick}
          >
            <FontAwesomeIcon size='xl' icon={faSliders} className='sliders' />
            <span>ALL FILTERS</span>
          </fieldset>

          {isFilterModalClicked && (
            <>
              <div className="backdrop" />
            </>
          )}

          <FilterModal
            setSelectedSortStatus={setSelectedSortStatus}
            sideModalContent={sideModalContent}
            setSideModalContent={setSideModalContent}
            setIsFilteredModalClicked={setIsFilteredModalClicked}
            isFilterModalClicked={isFilterModalClicked}
            setSelectedColour={setSelectedColour}
            selectedColour={selectedColour}
            selectedProductType={selectedProductType}
            setSelectedProductType={setSelectedProductType}
          />


        </div>

        <div className='right'>

          {onWomanPage ? (
            <p className='filter-pagination'>
              {filteredWomenData.length} {filteredWomenData.length > 1 ? 'items' : 'item'}
            </p>
          ) : onManPage ? (
            <p className='filter-pagination'>
              {filteredMenData.length} {filteredMenData.length > 1 ? 'items' : 'item'}
            </p>
          ) : onKidsPage ? (
            <p className='filter-pagination'>
              {filteredKidsData.length} {filteredKidsData.length > 1 ? 'items' : 'item'}
            </p>
          ) : onBabyPage ? (
            <p className='filter-pagination'>
              {filteredBabyData.length} {filteredBabyData.length > 1 ? 'items' : 'item'}
            </p>
          ) : null}

        </div>
      </form>
      {(selectedColour.length > 0 || selectedProductType.length > 0) && (
        <div className='selected-filter-container'>
          <p className='selected-filter-title'>Selected Filters:</p>
          <div>
            <ul>
              {selectedColour.map(selected => (
                <li key={selected}>
                  <p>{selected}</p>
                  <button onClick={() => handleRemoveSelectedFilter(selected)} >X</button>
                </li>
              ))}

              {selectedProductType.map(selected => (
                <li key={selected}>
                  <p>{selected}</p>
                  <button onClick={() => handleRemoveSelectedType(selected)} >X</button>
                </li>
              ))}

            </ul>
          </div>
        </div>
      )}
    </>
  );
};
