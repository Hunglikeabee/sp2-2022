import React from "react";
import styled from "styled-components";
import FeaturedContainer from "./components/FeaturedContainer";
import Hero from "./components/Hero";

const StyledMain = styled.div``;

export default function Main() {
  return (
    <StyledMain>
      <Hero />
      <FeaturedContainer />
    </StyledMain>
  );
}
