import React from "react";

const Balloon = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        borderRadius: "50%",
        height: "50px",
        width: "50px",
      }}
    ></div>
  );
};

export default Balloon;
