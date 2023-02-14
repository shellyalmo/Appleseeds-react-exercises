import React, { useState } from "react";

function App() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const handleCheckbox = () => {
    setCheckboxValue(!checkboxValue);
  };

  const isChecked = [false, false, true, true];
  const checkboxText = [
    "I read the term of the app",
    " accept the term of the app",
    "I want to get the weekly new letter",
    "I want to get sales and offers",
  ];
  return (
    <div className="App">
      {isChecked.map((el, index) => {
        return (
          <form>
            <input
              type="checkbox"
              defaultChecked={el}
              onChange={handleCheckbox}
            />
            {checkboxText[index]}
          </form>
        );
      })}
    </div>
  );
}

export default App;
