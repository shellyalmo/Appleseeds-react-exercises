import React, { useState } from "react";
import Card from "./components/Card";
import Name from "./components/Name";
import { getNames, getBeforeNineties } from "./data";

function App() {
  const [allNamesArray, setAllNamesArray] = useState(getNames());
  const [allBefore1990, setAllBefore1990] = useState(getBeforeNineties());

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All names:</h1>

      {allNamesArray.map((person) => {
        return <Name personName={person} />;
      })}

      <h2>All born before 1990:</h2>
      {allBefore1990.map((oldPerson) => {
        return <Card oldPersonObj={oldPerson} />;
      })}
    </div>
  );
}

export default App;
