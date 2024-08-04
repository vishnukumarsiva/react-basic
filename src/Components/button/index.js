import React from "react";
import "./style.css";

const Button = ({ buttonText, onClick }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

export default Button;
