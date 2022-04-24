import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledSearchfield = styled.div`
  width: 80%;
  border: 1px solid black;
  margin-left: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const StyledSearch = styled.input`
  flex: 1;
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  border: none;
`;
const StyledButton = styled.button`
  border-radius: 0px 5px 5px 0px;
  padding: 10px;
  border: none;
`;

export default function SearchbarHamburger(props) {
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
      <StyledButton
        {...props}
        onClick={() => {
          handleSearch();
          props.onClick();
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledButton>
    </StyledSearchfield>
  );
}
