import React from "react";
import styled from "styled-components";

const Box4 = styled.div`
  background-color: #ed8cda;
  width: 400px;
  height: 100px;
  margin: 20px;
`;
const Box4Container = () => {
  return (
    <div>
      <Box4 />
      <Box4 />
    </div>
  );
};
export default Box4Container;
