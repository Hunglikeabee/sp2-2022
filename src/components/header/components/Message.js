import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  background: white;
  color: black;
  font-size: 26px;
  width: 400px;
  margin: 10px auto;
  max-width: 80vw;
  z-index: 20;

  .success {
    padding: 0px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.6);
  }
`;

export default function MessageContainer() {
  return <StyledMessage className="message" />;
}
