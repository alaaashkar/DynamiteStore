import React from 'react';

import './FormFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import SortBy from '../SortBy/SortBy'
import Colour from '../Colour/Colour'
import Body from '../Body/Body'
import ProductType from '../ProductType/ProductType'


export const FormFilter = () => {
  return (
    <form className='filter-form'>
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

      <fieldset className='all-filters'>
        <FontAwesomeIcon size='xl' icon={faSliders} className='sliders' />
        <span>ALL FILTERS</span>
      </fieldset>
    </form>
  )
};
