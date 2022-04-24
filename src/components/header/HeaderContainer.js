import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Message from "./components/Message";

const StyledContainer = styled.div`
  height: 90px;
  background-color: ${(props) => props.theme.firstcolor};
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  z-index: 10;
`;

function HeaderContainer() {
  return (
    <>
      <StyledContainer>
        <Header />
      </StyledContainer>
      <Message />
    </>
  );
}

export default HeaderContainer;
