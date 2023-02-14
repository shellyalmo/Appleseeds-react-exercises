import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    if (value + 1 <= 10 && value + 1 >= -10) {
      setValue(value + 1);
    }
  };
  const decrementHandler = () => {
    if (value - 1 <= 10 && value - 1 >= -10) {
      setValue(value - 1);
    }
  };

  return (
    <div className="App">
      <button onClick={incrementHandler}>Increment</button>
      <div
        style={{
          border: "1px solid black",
          width: "2rem",
          color: value === 0 ? "white" : "black",
          backgroundColor: value < 0 ? "red" : value > 0 ? "green" : "black",
        }}
      >
        {value}
      </div>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;
