import React, { useState, useEffect } from "react";

function App() {
  const [favoriteColor, setFavoriteColor] = useState("blue");
  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("green");
    }, 1000);
  }, []);
  return (
    <div>
      <h1>
        My favorite color is{" "}
        <span style={{ color: favoriteColor }}>{favoriteColor}</span>
      </h1>
    </div>
  );
}
export default App;
