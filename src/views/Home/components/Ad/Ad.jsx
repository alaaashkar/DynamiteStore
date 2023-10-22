import './Ad.scss'

import React from "react";

export const Ad = ({ title, firstDescription, secondDescription, titleStyle, adClass, children }) => {
  return (
    <article className={adClass}>
      <h1 className={titleStyle}>{title}</h1>
      <font className='ad-description1'> {firstDescription} </font> <br />
      <font className='ad-description2' > {secondDescription}</font>
      {children}
    </article >
  )
};
