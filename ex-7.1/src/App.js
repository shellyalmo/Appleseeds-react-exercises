import React, { useState } from "react";
import CustomButton from "./components/CustomButton";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const clickHandler = (color) => {
    setSelectedColor(color);
  };

  const colors = ["blue", "red", "yellow"];

  return (
    <div className="App">
      {colors.map((color) => {
        return (
          <CustomButton btnColor={color} parentFunc={clickHandler}>
            {color}
          </CustomButton>
        );
      })}
      <h1>The color selected is:{selectedColor}</h1>
    </div>
  );
}

export default App;
