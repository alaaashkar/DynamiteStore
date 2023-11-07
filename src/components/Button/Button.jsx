import './Button.scss'
import { Link } from 'react-router-dom';

import React from "react";

export const Button = ({ text, to, onClick, buttonStyle, disabled, type }) => {
  return (
    <button type={type} disabled={disabled} className={`button ${buttonStyle}`} onClick={onClick}>
      <Link className='text' to={to}>{text}</Link>
    </button>
  );
};
