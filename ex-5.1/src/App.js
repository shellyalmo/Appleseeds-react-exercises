import React from "react";
import Button from "./components/Button";

function App() {
  const TextBtn1 = "Important";
  const TextBtn2 = "Not Important";
  return (
    <div>
      <Button className="btn" Text={TextBtn1}></Button>
      <Button Text={TextBtn2}></Button>
    </div>
  );
}

export default App;
