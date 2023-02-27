import "./App.css";
import React from "react";
import Father from "./components/Father";

export const giftsContext = React.createContext([]);
function App() {
  return (
    <giftsContext.Provider value={["toys ", "candies ", "balloons"]}>
      <Father />
    </giftsContext.Provider>
  );
}

export default App;
