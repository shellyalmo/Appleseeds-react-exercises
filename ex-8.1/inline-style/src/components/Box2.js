import React from "react";
import Box3 from "./Box3";

const Box2 = () => {
  return (
    <div
      style={{
        backgroundColor: "#73ccfb",
        width: "600px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box3 />
    </div>
  );
};

export default Box2;
