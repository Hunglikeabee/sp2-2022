import React from "react";
import styled from "styled-components";
import FeaturedCards from "./FeaturedCards";

const StyledFeaturedContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const StyledH1 = styled.h1`
  width: 100%;
  padding: 30px;
  font-size: 46px;
  color: white;
`;


export default function FeaturedContainer() {
  return (
    <StyledFeaturedContainer className="featured-shoes">
      <StyledH1>Featured products</StyledH1>
      <FeaturedCards />
    </StyledFeaturedContainer>
  );
}
