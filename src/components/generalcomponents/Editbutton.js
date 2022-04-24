import React from "react";
import styled from "styled-components";
import { getToken } from "../LocalStorage";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const StyledEdit = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  border: none;
  color: white;
  background: none;

  :hover {
    color: lightgreen;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default function Editbutton(props) {
  let checkToken = getToken();
  let editButton = "";

  if (checkToken) {
    editButton = (
      <StyledEdit {...props}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </StyledEdit>
    );
  }

  return editButton;
}
