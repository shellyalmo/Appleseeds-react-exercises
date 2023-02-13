import React from "react";
import "./Button.css";
const Button = (props) => {
  return <button className={props.className}>{props.Text}</button>;
};

export default Button;
