import React from "react";
import styled from "styled-components";
import { APIURL } from "../../../components/Settings";

const StyledHero = styled.div`
  background-image: url(https://res.cloudinary.com/dsuwj0wv1/image/upload/v1650832427/small_jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c_638ea085b3.jpg?1123155.800000012);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 800px;
  max-width: 2600px;
  margin: 0 auto;
  display: flex;
  opacity: 0.8;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4) inset;

  h1 {
    margin: 0 auto;
    align-self: center;
    font-size: 60px;
    color: white;
    text-shadow: 3px 3px black;
    text-align: center;
  }

  @media only screen and (max-width: 2000px) {
    height: 600px;
    max-width: 2000px;
  }

  @media only screen and (max-width: 700px) {
    height: 400px;
    max-width: 700px;

    h1 {
      font-size: 40px;
    }
  }
`;

function Hero() {
  return (
    <StyledHero>
      <h1>Your feet, your choice!</h1>
    </StyledHero>
  );
}

export default Hero;
