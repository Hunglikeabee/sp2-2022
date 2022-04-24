import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  flex: 1 0 auto;
  margin-top: 90px;
`;

export default function ContainerBody(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
