import "../styles/spinner.css";
import React, { useState, useEffect } from "react";

function randomSpinner() {
  const spinners = ["first", "second", "third"];

  return spinners[Math.floor(Math.random() * spinners.length)];
}

function Spinner() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return timer ? (
    <div>
      <div className={randomSpinner()}></div>{" "}
      <h1 className="counter">{timer}</h1>
    </div>
  ) : (
    <div></div>
  );
}

export default Spinner;
