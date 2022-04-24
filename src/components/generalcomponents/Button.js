import React from "react";
import styled from "styled-components";
import { saveShoes } from "../LocalStorage";

const StyledButton = styled.button`
  width: 250px;
  text-decoration: none;
  max-width: 100%;
  padding: 10px;
  font-size: 20px;
  border: none;
  background: ${(props) =>
    props.color ? props.color : (props) => props.theme.secondcolor};

  :hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
