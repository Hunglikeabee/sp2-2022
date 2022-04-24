import React from "react";
import styled from "styled-components";
import ProductCards from "./components/ProductCards";
import Searchbar from "./../../components/header/components/Searchbar";

const StyledProductsContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export default function Products() {
  return (
    <StyledProductsContainer>
      <Searchbar />
      <ProductCards />
    </StyledProductsContainer>
  );
}
