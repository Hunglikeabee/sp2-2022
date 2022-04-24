import React from "react";
import styled from "styled-components";
import { getCart } from "../../components/LocalStorage";
import { NavLink } from "react-router-dom";
import { APIURL } from "../../components/Settings";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  max-width: 80vw;
  margin: 20px auto;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
  padding: 0px 20px;
  background: white;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledSection1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  flex: 1;
  padding: 20px;
  width: 300px;
  max-width: 80%;
  margin: 0 auto;

  * {
    padding: 10px;
  }

  .info-link {
    font-size: 22px;
    text-decoration: none;
    background: black;
    color: white;
    border-radius: 10px;
    width: 40px;
    box-shadow: -2px 2px 2px 2px rgba(0, 0, 0, 0.4);

    :hover {
      background: ${(props) => props.theme.secondcolor};
      color: black;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledSection2 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSection3 = styled.div`
  padding: 10px 0px 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  padding: 30px;
  font-size: 46px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledH2 = styled.h2``;

const StyledPrice = styled.p`
  background: ${(props) => props.theme.firstcolor};
  color: white;
  width: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const StyledImage = styled.div`
  position: relative;
  margin: 10px auto;
  display: flex;
  height: 150px;
  width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
`;

const StyledButton = styled.button`
  width: 50px;
  height: 40px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const StyledXButton = styled.button`
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background: lightcoral;
  border: none;
  margin-left: 20px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const StyledCounter = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
`;

const StyledTotal = styled.div`
  text-align: center;
  background: ${(props) => props.theme.secondcolor};
  width: 300px;
  max-width: 80%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  font-size: 24px;
`;

const StyledEmptycart = styled.div`
  margin: 0 auto;
  padding: 50px;
`;

export default function Cart() {
  let total = 0;
  const [currentCart, setCart] = useState(getCart());
  const shoes = "/shoes?id=";

  const navigate = useNavigate();

  const handleCart = (item, direction) => {
    const index = currentCart.indexOf(item);
    if (direction === "minus" && item.count > 1) {
      currentCart[index].count = item.count - 1;
      localStorage.setItem("superCart", JSON.stringify(currentCart));
      setCart(currentCart);
      navigate(`/cart`);
    } else if (direction === "minus" && item.count == 1) {
      const changeCurrentCart = currentCart.filter(
        (cart) => cart.id !== item.id
      );
      localStorage.setItem("superCart", JSON.stringify(changeCurrentCart));
      setCart(changeCurrentCart);
      navigate(`/cart`);
    } else if (direction === "pluss") {
      currentCart[index].count = item.count + 1;
      localStorage.setItem("superCart", JSON.stringify(currentCart));
      setCart(currentCart);
      navigate(`/cart`);
    } else if (direction === "delete") {
      const changeCurrentCart = currentCart.filter(
        (cart) => cart.id !== item.id
      );
      localStorage.setItem("superCart", JSON.stringify(changeCurrentCart));
      setCart(changeCurrentCart);
      navigate(`/cart`);
    }
  };

  currentCart.map((item) => {
    total += item.count * item.price;
  });

  const thetotal = (
    <StyledTotal>Total price: {parseFloat(total).toFixed(2)}</StyledTotal>
  );

  const tryThis = () => {
    if (currentCart.length > 0) {
      return currentCart.map((item, key) => (
        <StyledProduct key={key}>
          <StyledSection1>
            <StyledH2>{item.title}</StyledH2>
            <StyledPrice>{item.price} NOK</StyledPrice>
            <NavLink className="info-link" to={shoes + item.id}>
              Info
            </NavLink>
          </StyledSection1>
          <StyledSection2>
            <StyledImage
              className="product-image"
              style={
                item.image
                  ? {
                      backgroundImage: `url(${
                        item.image.formats.medium.url
                      })`,
                    }
                  : {
                      backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png)`,
                    }
              }
            ></StyledImage>
          </StyledSection2>
          <StyledSection3>
            <StyledButton onClick={() => handleCart(item, "minus")}>
              -
            </StyledButton>
            <StyledCounter>{item.count}</StyledCounter>
            <StyledButton onClick={() => handleCart(item, "pluss")}>
              +
            </StyledButton>
            <StyledXButton onClick={() => handleCart(item, "delete")}>
              <FontAwesomeIcon icon={faXmark} />
            </StyledXButton>
          </StyledSection3>
        </StyledProduct>
      ));
    } else {
      return <StyledEmptycart>THE CART IS EMPTY</StyledEmptycart>;
    }
  };

  return (
    <>
      <StyledH1>Shoppingcart</StyledH1>
      {tryThis()}
      {thetotal}
    </>
  );
}
