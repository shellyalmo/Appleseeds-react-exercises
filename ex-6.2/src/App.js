import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Show/Hide</button>
      <div
        style={{
          display: show ? "block" : "none",
          backgroundColor: "yellow",
          height: "8rem",
          width: "5rem",
        }}
      ></div>
    </div>
  );
}

export default App;
