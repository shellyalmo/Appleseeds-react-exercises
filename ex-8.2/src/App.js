import React, { useState } from "react";
import Turtle from "./components/Turtle";
import { data } from "./data";

function App() {
  const [names, setNames] = useState(data.map((turtle) => turtle.name));

  return (
    <div
      style={{
        backgroundColor: "indigo",
        color: "green",
        textAlign: "center",
      }}
    >
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the turtles</h2>
      {names.map((el) => {
        return <Turtle turtleName={el} />;
      })}
    </div>
  );
}

export default App;
