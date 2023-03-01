import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { counter, addOne, removeOne, double, divide } = useCounter(0);
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={addOne}>addOne</button>
      <button onClick={removeOne}>removeOne</button>
      <button onClick={double}>double</button>
      <button onClick={divide}>divide</button>
    </div>
  );
};

export default Counter;
