import React from "react";
import styled from "styled-components";
import SearchPage from "./components/SearchPage";
import Searchbar from "../../components/header/components/Searchbar";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export default function Search() {
  return (
    <StyledContainer>
      <Searchbar />
      <SearchPage />
    </StyledContainer>
  );
}
