import React from "react";

const Turtle = (props) => {
  return (
    <div style={{ border: "" }}>
      <h3>{props.turtleName}</h3>
      {/* <img src={props} alt="" />
      <h4>{props}</h4> */}
    </div>
  );
};

export default Turtle;
