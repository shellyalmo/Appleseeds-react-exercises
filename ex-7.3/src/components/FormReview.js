import React from "react";

const FormReview = (props) => {
  return (
    <div>
      <div>FIrst name: {props.data.firstName}</div>
      <div>Last name: {props.data.lastName}</div>
      <div>Age: {props.data.age}</div>
      <div>Free Text: {props.data.freeText}</div>
      <button>Back</button>
      <button>Send</button>
    </div>
  );
};

export default FormReview;
