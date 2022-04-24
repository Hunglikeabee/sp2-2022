import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 250px;
  height: 350px;
  margin: 20px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
  background: white;
`;

export default function CardContainer(props) {
  return <StyledCardContainer {...props}>{props.children}</StyledCardContainer>;
}
