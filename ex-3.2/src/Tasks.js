import React from "react";

const task1 = () => {
  const data = ["hello", "world"];
  return (
    <div>
      {data[0]} {data[1]}
    </div>
  );
};

const task2 = () => {
  const number1 = 5;
  const number2 = 6;
  return (
    <div>
      {number1} + {number2} = {number1 + number2}
    </div>
  );
};

const task3 = () => {
  const string = "I love React!";
  return <div>The string’s length is {string.length}</div>;
};

export { task1, task2, task3 };
