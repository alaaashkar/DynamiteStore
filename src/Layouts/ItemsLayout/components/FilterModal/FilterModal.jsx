import './FilterModal.scss';
import cn from 'classnames';
import FormControl from '@mui/material/FormControl'; // Add this import
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FormLabel } from '@mui/material';
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

            <li onClick={handleBodyClick}>
              <span>Body</span>
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
                <FormControlLabel value="white" control={<Radio />} label="White" />
                <FormControlLabel value="beige" control={<Radio />} label="Beige" />
                <FormControlLabel value="red" control={<Radio />} label="Red" />
                <FormControlLabel value="black" control={<Radio />} label="Black" />
                <FormControlLabel value="blue" control={<Radio />} label="Blue" />
              </RadioGroup>
            </FormControl>
          </ul>
        </>
      )}

      {sideModalContent === 'body' && (
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
              Body
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
                <FormControlLabel value="Women's clothing" control={<Radio />} label="Women's clothing" />
                <FormControlLabel value="Bra" control={<Radio />} label="Bra" />
                <FormControlLabel value="Shoe" control={<Radio />} label="Shoe" />
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
                <FormControlLabel value="scarf" control={<Radio />} label="Scarf" />
                <FormControlLabel value="shoe" control={<Radio />} label="Shoe" />
                <FormControlLabel value="beret" control={<Radio />} label="Beret" />
                <FormControlLabel value="beret" control={<Radio />} label="Beret" />
                <FormControlLabel value="bracelet" control={<Radio />} label="Bracelet" />
                <FormControlLabel value="blouse" control={<Radio />} label="Blouse" />
                <FormControlLabel value="dress" control={<Radio />} label="Dress" />
                <FormControlLabel value="jacket" control={<Radio />} label="Jacket" />
                <FormControlLabel value="skirt" control={<Radio />} label="Skirt" />
              </RadioGroup>
            </FormControl>
          </ul>
        </>
      )}
    </aside>
  )
};
