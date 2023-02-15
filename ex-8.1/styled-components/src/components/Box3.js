import React from "react";
import Box4Container from "./Box4";
import styled from "styled-components";

const Box3 = styled.div`
  background-color: #ffacbe;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box3Container = () => {
  return (
    <Box3>
      <Box4Container />
    </Box3>
  );
};
export default Box3Container;
