import React, { useState, useEffect, useCallback } from "react";
import { APIURL } from "../../../components/Settings";
import CardContainer from "../../../components/containers/CardContainer";
import styled from "styled-components";
import Button from "../../../components/generalcomponents/Button";
import Editbutton from "../../../components/generalcomponents/Editbutton";
import { useNavigate } from "react-router";

const StyledImage = styled.div`
  margin: 0 auto;
  display: flex;
  height: 200px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const StyledH2 = styled.h2`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  flex: 1;
  padding-top: 20px;
  background: brown;
`;
const StyledPrice = styled.h4`
  text-align: end;
  padding-right: 20px;
  font-size: 18px;
  margin: 10px 0px;
  color: brown;
`;

export default function FeaturedCards() {
  const navigate = useNavigate();

  const [result, setResult] = useState([]);

  const apiCall = useCallback(async () => {
    try {
      const apiCall = await fetch(APIURL + "/products/");
      const apiResult = await apiCall.json();
      console.log(apiResult)
      setResult(apiResult);
      const filteredResult = apiResult.filter((item) => item.featured);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => apiCall(), []);

  const hrefId = "shoes?id=";
  const hrefAdmin = "/admin?id=";

  return result.map((item, key) => (
    <CardContainer data-id={item.id} key={key}>
      <Editbutton onClick={() => navigate(hrefAdmin + item.id)} />
      <StyledH2>{item.title}</StyledH2>
      <StyledImage
        onClick={() => navigate(hrefId + item.id)}
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
      <StyledPrice>{item.price} NOK</StyledPrice>
      <Button onClick={() => navigate(`${hrefId + item.id}`)}>MORE</Button>
    </CardContainer>
  ));
}
