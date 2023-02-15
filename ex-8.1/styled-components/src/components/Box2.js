import React from "react";
import Box3Container from "./Box3";
import styled from "styled-components";

const Box2 = styled.div`
  background-color: #73ccfb;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2Container = () => {
  return (
    <Box2>
      <Box3Container />
    </Box2>
  );
};
export default Box2Container;
