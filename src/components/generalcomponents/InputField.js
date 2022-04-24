import React from "react";
import styled from "styled-components";

const StyledInputField = styled.input`
  width: 400px;
  max-width: 80%;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  border-radius: 10px;
`;

export default function InputField(props) {
  return <StyledInputField {...props}></StyledInputField>;
}
