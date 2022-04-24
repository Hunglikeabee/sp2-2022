import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledSearchfield = styled.div`
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;

const StyledSearch = styled.input`
  padding: 10px;
  font-size: 22px;
  border: none;
  border-radius: 5px 0px 0px 5px;
`;
const StyledButton = styled.button`
  padding: 10px;
  font-size: 22px;
  border: none;
  border-radius: 0px 5px 5px 0px;
`;

export default function Searchbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    navigate(`/search?search=${search}`);
  };

  const handleEnter = (e) => {
    if (e.which === 13) {
      navigate(`/search?search=${search}`);
    }
  };

  return (
    <StyledSearchfield>
      <StyledSearch
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
        placeholder="Search..."
      ></StyledSearch>
      <StyledButton onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledButton>
    </StyledSearchfield>
  );
}
