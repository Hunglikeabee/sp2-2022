import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { APIURL } from "../../components/Settings";
import styled from "styled-components";
import Button from "../../components/generalcomponents/Button";
import { saveShoes } from "../../components/LocalStorage";
import displayMessage from "./../../components/DisplayMessage";
import { useNavigate } from "react-router";

const StyledProduct = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const StyledH1 = styled.h1`
  font-size: 40px;
  padding-top: 50px;
  color: white;
`;

const StyledH3 = styled.h3`
  font-size: 24px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: left;
  max-width: 500px;
  color: black;
`;

const StyledPrice = styled.h3`
  font-size: 24px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: left;
  max-width: 500px;
  background: ${(props) => props.theme.firstcolor};
  border-radius: 10px;
  color: white;
`;

const StyledDescriptionContainer = styled.div`
  background: lightgray;
  width: 100%;
`;

const StyledDescription = styled.p`
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 50px;
  max-width: 500px;
  font-size: 18px;
  text-align: left;
`;

const StyledImage = styled.div`
  margin: 30px auto;
  display: flex;
  height: 300px;
  width: 500px;
  max-width: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function Product() {
  const navigate = useNavigate();
  const getParams = useLocation().search;
  const id = new URLSearchParams(getParams).get("id");

  const [result, setResult] = useState([]);

  const apiCall = useCallback(async () => {
    try {
      const apiCall = await fetch(APIURL + "/products/");
      const apiResult = await apiCall.json();
      const theShoe = apiResult.filter((item) => item.id == id);
      setResult(theShoe);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => apiCall(), []);

  const handleBuy = (id, data) => {
    displayMessage("success", "Added to cart!", ".message");
    const singleData = data.filter((data) => data.id === id);
    saveShoes(id, singleData);
  };

  return result.map((item, key) => (
    <StyledProduct href={item.id} key={key}>
      <StyledH1>{item.title}</StyledH1>
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
      <StyledDescriptionContainer>
        <StyledH3>About</StyledH3>
        <StyledDescription>{item.description}</StyledDescription>
      </StyledDescriptionContainer>
      <StyledPrice>{item.price} NOK</StyledPrice>
      <Button
        onClick={() => {
          handleBuy(item.id, result);
          navigate(`/shoes?id=${id}`);
        }}
      >
        ADD TO CART
      </Button>
    </StyledProduct>
  ));
}
