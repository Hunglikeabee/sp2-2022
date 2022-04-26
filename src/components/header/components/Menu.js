import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import {
  faBars,
  faX,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import SearchbarHamburger from "./SearchbarHamburger";
import { getToken } from "./../../LocalStorage";
import LoginButton from "./LoginButton";
import PromptMessage from "../../generalcomponents/PromptMessage";
import { getCart } from "./../../LocalStorage";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;

  .link-container {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .nav-link {
    bottom: 10px;
    padding-right: 20px;
    font-size: 22px;
    text-decoration: none;
    color: white;
  }

  .navbar-button {
    width: 50px;
    font-size: 26px;

    @media only screen and (min-width: 800px) {
      display: none;
    }
  }

  .menuNav {
    position: relative;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0px;
    margin: 0px;
    background: lightgray;
    right: -50px;
    bottom: 0;
    height: 100vh;
    width: 0;
    overflow: hidden;
    max-width: 300px;
    z-index: 90;
    padding-top: 100px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-left: 1px solid black;
  }

  .navbar-button {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 30px;
    right: 80px;

    @media only screen and (min-width: 800px) {
      display: none;
    }
  }

  .open-menu {
    position: absolute;
    top: 30px;
    right: 80px;
  }

  .menuNav a {
    padding: 10px;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.secondcolor};
    margin: 5px;
    border-radius: 10px 0px 0px 10px;
    border: 2px solid black;
    background: ${(props) => props.theme.firstcolor};
  }

  .menuNav a:hover {
    background: white;
  }

  .menuNav.showMenu {
    width: 100%;
  }

  .active {
    color: ${(props) => props.theme.secondcolor};
  }

  .cart-link {
    position: relative;
    display: flex;
    top: 0px;
    margin-right: 30px;
  }

  .numberCart {
    position: relative;
  }

  .numberCart {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    top: 16px;
    left: 16px;
    background: ${(props) => props.theme.secondcolor};
    color: black;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
`;

const StyledLoginButton = styled.a`
  color: orange;
  border: none;
  border-radius: 5px;
  font-size: 26px;
  padding: 5px 10px;
  margin-right: 30px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background: white;
    color: black;
  }
`;

const StyledButton = styled.button`
  width: 160px;
  border: none;
  background: white;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 26px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);

  :hover {
    border: 1px solid black;
    padding: 9px;
  }
`;

const StyledText = styled.h2`
  font-size: 22px;
  margin: 20px;
`;

export default function Menu() {
  const navigate = useNavigate();
  const [navStatus, setNavStatus] = useState(false);
  const token = getToken();
  const handleHamburger = () => {
    setNavStatus((prev) => !prev);
  };

  const [prompt, setPrompt] = useState(false);

  const Logout = () => {
    localStorage.removeItem("superUser");
    localStorage.removeItem("superToken");
    setNavStatus((prev) => !prev);
    navigate("/");
  };

  const Cancle = () => {
    setPrompt((prev) => !prev);
  };

  const list = getCart();
  let total = 0;
  const totalCartnumber = list.reduce(
    (total, current) => total + current.count,
    total
  );

  return (
    <StyledMenu>
      <div className="link-container">
        <NavLink className="nav-link" to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/products" activeclassname="active">
          Products
        </NavLink>
        {token ? (
          <NavLink className="nav-link" to="/admin" activeclassname="active">
            Admin
          </NavLink>
        ) : (
          ""
        )}
        <NavLink className="nav-link cart-link" to="/cart">
          <div className="numberCart">{totalCartnumber}</div>
          <FontAwesomeIcon className="icon-cart" icon={faCartArrowDown} />
        </NavLink>
        <LoginButton />
      </div>
      <div className="navbar-button">
        <NavLink className="nav-link cart-link" to="/cart">
          <div className="numberCart">{totalCartnumber}</div>
          <FontAwesomeIcon className="icon-cart" icon={faCartArrowDown} />
        </NavLink>
        <FontAwesomeIcon
          onClick={handleHamburger}
          icon={navStatus ? faX : faBars}
        />
        <ul className={`menuNav ${navStatus ? " showMenu" : ""}`}>
          <FontAwesomeIcon
            className="open-menu"
            onClick={handleHamburger}
            icon={navStatus ? faX : faBars}
          />
          <SearchbarHamburger onClick={handleHamburger} />
          <NavLink onClick={handleHamburger} to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink
            onClick={handleHamburger}
            to="/products"
            activeclassname="active"
          >
            Products
          </NavLink>
          <NavLink
            onClick={handleHamburger}
            to="/cart"
            activeclassname="active"
          >
            Cart
          </NavLink>
          {token ? (
            <NavLink
              onClick={handleHamburger}
              className="nav-link"
              to="/admin"
              activeclassname="active"
            >
              Admin
            </NavLink>
          ) : (
            ""
          )}
          <LoginButton />
        </ul>
      </div>
    </StyledMenu>
  );
}
