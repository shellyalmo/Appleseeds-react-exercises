import { useState } from "react";

const useCounter = (num) => {
  const [counter, setCounter] = useState(num);

  const addOne = () => {
    setCounter(counter + 1);
  };

  const removeOne = () => {
    setCounter(counter - 1);
  };

  const double = () => {
    setCounter(counter * 2);
  };

  const divide = () => {
    setCounter(counter / 2);
  };
  return { counter, addOne, removeOne, double, divide };
};

export default useCounter;
