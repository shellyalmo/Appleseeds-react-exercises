import React from "react";
import Box2Container from "./Box2";
import styled from "styled-components";

const Box1 = styled.div`
  background-color: #4cff94;
  width: 700px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box1Container = () => {
  return (
    <Box1>
      <Box2Container />
    </Box1>
  );
};
export default Box1Container;
