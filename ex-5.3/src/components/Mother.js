import React from "react";
import Child from "./Child";

const Mother = () => {
  const MotherStyle = {
    width: "1000px",
    height: "600px",
    backgroundColor: "#61DAFB",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];

  return (
    <div style={MotherStyle}>
      <h1>A Tale of Five Balloons</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10%" }}>
        {kids.map((kid) => {
          return <Child color={kid.color}>{kid.name}</Child>;
        })}
      </div>
    </div>
  );
};

export default Mother;
