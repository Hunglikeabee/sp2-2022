import React from "react";
import styled from "styled-components";

const StyledPropmptContainer = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: gray;
  opacity: 0.6;
`;

const StyledPrompt = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  font-size: 26px;
  width: 400px;
  max-width: 80vw;
  border-radius: 10px;
  border: 2px solid black;
  background: white;
  padding: 20px;
  z-index: 9001;
  display: flex;
  flex-direction: column;
`;

export default function PromptMessage(props) {
  return (
    <>
      <StyledPropmptContainer />
      <StyledPrompt>{props.children}</StyledPrompt>
    </>
  );
}
