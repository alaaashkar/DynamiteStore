import './Category.scss'
import {Link} from 'react-router-dom';

import React from "react";

export const Category = ({ img, text, to }) => {
  return (
    <div className='category'>
      <Link to={to}>
        <img src={img} alt="man-icon" />
        <font>{text}</font>
      </Link>
    </div>
  )
}