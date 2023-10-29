import './FilterModal.scss';
import cn from 'classnames';
import FormControl from '@mui/material/FormControl'; // Add this import
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FormLabel } from '@mui/material';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";



export const FilterModal = ({ isFilterModalClicked, setIsFilteredModalClicked }) => {
  const [sideModalContent, setSideModalContent] = useState('default')

  const sliderRef = useRef(null);

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (event) => {
      // Check if the click occurred outside the slider and close it
      if (!sliderRef.current.contains(event.target)) {
        setIsFilteredModalClicked(false);
        // Remove the class to re-enable scrolling
        document.body.classList.remove('modal-open');
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      // Remove the class when unmounting to re-enable scrolling
      document.body.classList.remove('modal-open');
    };
  }, [setIsFilteredModalClicked]);

  const handleSortClick = (event) => {
    setSideModalContent('sort');
    event.stopPropagation();
  };

  const handleColourClick = (event) => {
    setSideModalContent('colour');
    event.stopPropagation();
  };

  const handleBodyClick = (event) => {
    setSideModalContent('body');
    event.stopPropagation();
  };

  const handleBackwardsClick = (event) => {
    setSideModalContent('default');
    event.stopPropagation()
  }

  const handleProductTypeClick = (event) => {
    setSideModalContent('productType');
    event.stopPropagation();
  };


  const location = useLocation();
  const path = location.pathname;
  const onWomanPage = path.includes('woman');
  const onManPage = path.includes('man');
  const onKidsPage = path.includes('kids');
  const onBabyPage = path.includes('baby');

  // Reset the selected color when the route changes


  const renderColorList = () => {
    if (onWomanPage) {
      return ["White", "Beige", "Black"];
    } else if (onManPage) {
      return ["Brown", "Black", "Grey", "Red", "Green"];
    } else if (onKidsPage) {
      return ["Purple", "Red", "Olive", "White", "Blue", "Yellow"];
    } else if (onBabyPage) {
      return ["Beige", "Patterned", "Black", "Red", "Pink"];
    }

    // Default to a valid option if no match is found
    return ['NONE'];
  };

  const renderedList = renderColorList();



  const womanTypeList = ["Blouse", "Dress", "Skirt", "Pants"];
  const manTypeList = ["Jacket", "Hoodie", "Blouse", "Pants", "Sweatshirt"];
  const kidsTypeList = ["Dress", "Sweatshirt", "Hoodie", "Bodysuit", "Shoes"];
  const babyTypeList = ["Sweatshirt", "Dress", "Bodysuit", "Shoes", "Set", "Turtleneck"];

  const renderTypeList = () => {
    if (onWomanPage) {
      return womanTypeList;
    } else if (onManPage) {
      return manTypeList;
    } else if (onKidsPage) {
      return kidsTypeList;
    } else if (onBabyPage) {
      return babyTypeList;
    }
    return ['NONE']; // Default to an empty array if no match is found.
  };
  const renderedType = renderTypeList()


  return (
    <aside ref={sliderRef} className={cn('sidedrawer', { 'active': isFilterModalClicked })}>

      {sideModalContent === 'default' && (
        <>
          <header>
            <div
              onClick={() => setIsFilteredModalClicked(false)}
              className='close-modal'>
              X
            </div>

            <div
              className='header-text playing-images-title'>
              Filter & Sort
            </div>
          </header>
          <ul>
            <li onClick={handleSortClick}>
              <span>Sort by</span>
              <span> &gt;</span>
            </li>

            <li onClick={handleColourClick}>
              <span>Colour</span>
              <span> &gt;</span>
            </li>

            <li onClick={handleProductTypeClick}>
              <span>Product type</span>
              <span> &gt;</span>
            </li>
          </ul>
        </>
      )}

      {sideModalContent === 'sort' && (
        <>
          <header>
            <div className='close-back-wrapper'>
              <div>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  size='xl' className='backwards-icon'
                  onClick={handleBackwardsClick}
                />
              </div>

              <div
                onClick={() => setIsFilteredModalClicked(false)}
                className='close-modal'>
                X
              </div>
            </div>


            <div
              className='header-text playing-images-title'>
              Sort by
            </div>

          </header>
          <ul>
            <FormControl >
              <FormLabel id="demo-radio-buttons-group-label">Select an option</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="pick-an-option"
                name="radio-buttons-group"
              >
                <FormControlLabel value="lowest-price" control={<Radio />} label="Lowest price" />
                <FormControlLabel value="highest-price" control={<Radio />} label="Highest price" />
              </RadioGroup>
            </FormControl>
          </ul>
        </>
      )}

      {sideModalContent === 'colour' && (
        <>
          <header>
            <div className='close-back-wrapper'>
              <div>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  size='xl' className='backwards-icon'
                  onClick={handleBackwardsClick}
                />
              </div>

              <div
                onClick={() => setIsFilteredModalClicked(false)}
                className='close-modal'>
                X
              </div>
            </div>


            <div
              className='header-text playing-images-title'>
              Colour
            </div>

          </header>
          <ul>
            <FormControl >
              <FormLabel id="demo-radio-buttons-group-label">Select a colour</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="pick-an-option"
                name="radio-buttons-group"
              >
                {renderedList.map(colour => (
                  <FormControlLabel value={colour} control={<Radio />} label={colour} />
                ))}

              </RadioGroup>
            </FormControl>
          </ul>
        </>
      )}

      {sideModalContent === 'productType' && (
        <>
          <header>
            <div className='close-back-wrapper'>
              <div>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  size='xl' className='backwards-icon'
                  onClick={handleBackwardsClick}
                />
              </div>

              <div
                onClick={() => setIsFilteredModalClicked(false)}
                className='close-modal'>
                X
              </div>
            </div>

            <div
              className='header-text playing-images-title'>
              Product Type
            </div>

          </header>
          <ul>
            <FormControl >
              <FormLabel id="demo-radio-buttons-group-label">Select a colour</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="pick-an-option"
                name="radio-buttons-group"
              >
                {renderedType.map(type => (
                  <FormControlLabel value={type} control={<Radio />} label={type} />
                ))}
              </RadioGroup>
            </FormControl>
          </ul>
        </>
      )}
    </aside>
  )
};
