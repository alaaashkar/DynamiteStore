import './Category.scss'

import React from "react";

export const Category = ({ img, text }) => {
  return (
    <div className='category'>
      <img src={img} alt="man-icon" />
      <font>{text}</font>
    </div>
  )
}