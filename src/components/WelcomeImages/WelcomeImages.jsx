import React from "react";
import './WelcomeImages.scss'

export const WelcomeImages = ({ img, title, }) => {
  return (

    <>
      <img className='playing-images' src={img} alt='image1' />

      <h1 className="playing-images-title">{title}</h1>

      <font className="playing-images-description">New Products</font>

      <button className="playing-images-button">buy now</button>
    </>

  );
};
