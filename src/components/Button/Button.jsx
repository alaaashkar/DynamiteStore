import './Button.scss'

import React from "react";

export const Button = ({ text }) => {
  return (
    <button className="button">{text}</button>
  );
};
