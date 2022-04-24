import React, { useState } from "react";
import styled from "styled-components";
import { getToken } from "./../../LocalStorage";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import PromptMessage from "../../generalcomponents/PromptMessage";

const StyledButton = styled.button`
  width: 160px;
  border: none;
  background: white;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 26px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);

  :hover {
    border: 1px solid black;
    padding: 9px;
  }
`;

const StyledText = styled.h2`
  font-size: 22px;
  margin: 20px;
`;

const StyledLoginButton = styled.a`
  color: orange;
  border: none;
  border-radius: 5px;
  font-size: 26px;
  padding: 5px 10px;
  margin-right: 30px;
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background: white;
    color: black;
  }
`;

export default function LoginButton() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState(false);

  const Logout = () => {
    localStorage.removeItem("superUser");
    localStorage.removeItem("superToken");
    setPrompt((prev) => !prev);
    navigate("/");
  };

  const Cancle = () => {
    setPrompt((prev) => !prev);
  };

  let promptMenu;

  if (prompt) {
    promptMenu = (
      <PromptMessage>
        <StyledText>Are you sure you want to log out?</StyledText>
        <StyledButton style={{ background: "lightgreen" }} onClick={Logout}>
          Ok
        </StyledButton>
        <StyledButton style={{ background: "lightcoral" }} onClick={Cancle}>
          Cancle
        </StyledButton>
      </PromptMessage>
    );
  }

  const LogoutButton = () => {
    setPrompt((prev) => !prev);
  };

  const LogInn = () => {
    navigate("/login");
  };

  let loggedInn;

  if (getToken()) {
    loggedInn = (
      <StyledLoginButton onClick={LogoutButton}>LogOut</StyledLoginButton>
    );
  } else {
    loggedInn = (
      <StyledLoginButton onClick={LogInn}>
        <FontAwesomeIcon icon={faKey} />
      </StyledLoginButton>
    );
  }

  return (
    <>
      {loggedInn}
      {promptMenu}
    </>
  );
}
