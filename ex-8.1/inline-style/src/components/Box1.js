import React from "react";
import Box2 from "./Box2";

const Box1 = () => {
  return (
    <div
      style={{
        backgroundColor: "#4cff94",
        width: "700px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box2 />
    </div>
  );
};

export default Box1;
