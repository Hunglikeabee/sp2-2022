import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function ContainerAll(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
