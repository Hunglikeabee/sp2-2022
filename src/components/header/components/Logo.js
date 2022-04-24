import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoContaner = styled.div`
  .logo-text {
    font-family: "Bebas Neue", cursive;
    text-decoration: none;
    font-size: 60px;
    margin: 0px;
    margin-left: 20px;
    white-space: nowrap;
    color: ${(props) => props.theme.secondcolor};

    @media (max-width: 1100px) {
      font-size: 40px;
      bottom: -4px;
    }

    @media (max-width: 800px) {
      font-size: 30px;
      bottom: -4px;
    }
  }
`;

export default function Logo() {
  return (
    <LogoContaner>
      <NavLink className="logo-text" to="/">
        SHOES FOR LIFE
      </NavLink>
      ;
    </LogoContaner>
  );
}
