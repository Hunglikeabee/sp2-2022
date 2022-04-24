import React, { useState } from "react";
import styled from "styled-components";
import InputField from "../../components/generalcomponents/InputField";
import Button from "../../components/generalcomponents/Button";
import { APIURL } from "../../components/Settings";
import { saveToken, saveUser } from "../../components/LocalStorage";
import displayMessage from "../../components/DisplayMessage";
import { useNavigate } from "react-router";

const StyledLogin = styled.form`
  width: 400px;
  max-width: 75%;
  margin: 50px auto;
  padding: 80px 20px;
  background: white;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;

const StyledH1 = styled.h1`
  padding-bottom: 50px;
`;

export default function Login() {
  const navigate = useNavigate();

  const [theUsername, setUsername] = useState("");
  const [thePassword, setPassword] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();

    attemptLogin(theUsername, thePassword);
  };

  const attemptLogin = async (user, pass) => {
    const loginApi = APIURL + "/auth/local";

    const data = JSON.stringify({ identifier: user, password: pass });
    const options = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(loginApi, options);
      const result = await response.json();
      if (result.jwt) {
        saveToken(result.jwt);
        saveUser(result.user);
        navigate("/admin");
      } else if (result.error) {
        displayMessage("error", "There seems to be a problem!", ".message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLogin onSubmit={HandleSubmit}>
      <StyledH1>Admin Log inn</StyledH1>
      <InputField
        value={theUsername}
        onChange={(e) => setUsername(e.target.value.trim())}
        placeholder="Username..."
      />
      <InputField
        onChange={(e) => setPassword(e.target.value.trim())}
        type="password"
        id="login-password"
        placeholder="Password..."
      />
      <Button style={{ borderRadius: "10px" }} type="submit">
        Log in
      </Button>
    </StyledLogin>
  );
}
