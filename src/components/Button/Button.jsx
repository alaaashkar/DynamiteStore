import './Button.scss'

import React from "react";

export const Button = ({ text, to, onClick, buttonStyle, disabled }) => {
  return (
    <button disabled={disabled} className={`button ${buttonStyle}`} onClick={onClick}>
      <a className='text' href={to}>{text}</a>
    </button>
  );
};
