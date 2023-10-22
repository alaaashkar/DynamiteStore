import './Button.scss'

import React from "react";

export const Button = ({ text, to }) => {
  return (
    <button className="button">
      <a href={to}>{text}</a>
    </button>
  );
};
