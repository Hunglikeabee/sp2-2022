import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const StyledHeader = styled.div`
  margin: 0 auto;
  height: 90px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
