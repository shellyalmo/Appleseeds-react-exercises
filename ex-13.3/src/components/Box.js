import "../styles/Box.css";
import React, { useState, useEffect } from "react";

function randomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Box() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(randomColors());
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return counter > 5 ? (
    <div className="Box circle" style={{ backgroundColor: color }}></div>
  ) : (
    <div className="Box" style={{ backgroundColor: color }}></div>
  );
}

export default Box;
