import './Button.scss'

import React from "react";

export const Button = ({ text, to, onClick, buttonStyle }) => {
  return (
    <button className={`button ${buttonStyle}`} onClick={onClick}>
      <a className='text' href={to}>{text}</a>
    </button>
  );
};
