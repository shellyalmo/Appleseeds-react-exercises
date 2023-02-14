import React from "react";

const CustomButton = (props) => {
  return (
    <button
      onClick={() => props.parentFunc(props.btnColor)}
      style={{
        border: "2px solid black",
        margin: "2rem",
        color: "black",
        fontSize: "2rem",
        backgroundColor: props.btnColor,
      }}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
