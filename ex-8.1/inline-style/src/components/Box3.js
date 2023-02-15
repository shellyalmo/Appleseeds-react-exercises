import React from "react";
import Box4 from "./Box4";

const Box3 = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffacbe",
        width: "500px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
};

export default Box3;
