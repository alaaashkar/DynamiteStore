import './Category.scss'

import React from "react";

export const Category = ({ img, text, to }) => {
  return (
    <div className='category'>
      <a href={to}>
        <img src={img} alt="man-icon" />
        <font>{text}</font>
      </a>
    </div>
  )
}