import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    setValue(value + 1);
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>increment</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
