import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4) inset;
  background: black;
  color: white;
  margin-top: 100px;
  flex-shrink: 0;
`;

const StyledContainers = styled.div`
  width: 150px;
  max-width: 90vw;
  padding: 50px;

  a {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
  }

  .header-two {
    text-align: end;
  }

  .social-icon {
    margin: 0px;
    padding: 0px;
    font-size: 28px;
    margin-bottom: 25px;

    text-align: end;
  }
`;

const StyledH3 = styled.h3`
  color: ${(props) => props.theme.secondcolor};
  font-size: 30px;
  padding-bottom: 30px;
`;

const StyledCopyright = styled.p`
  width: 100%;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContainers>
        <StyledH3>Links</StyledH3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </StyledContainers>
      <StyledContainers>
        <StyledH3 className="header-two">Social</StyledH3>
        <a href="http://www.facebook.com" className="social-icon">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="http://www.instagram.com" className="social-icon">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="http://www.twitter.com" className="social-icon">
          <i className="fa-brands fa-twitter-square"></i>
        </a>
      </StyledContainers>
      <StyledCopyright>Copyright &#169; Shoes for life</StyledCopyright>
    </StyledFooter>
  );
}
