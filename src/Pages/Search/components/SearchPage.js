import React from "react";
import styled from "styled-components";
import { useCallback, useState, useEffect } from "react";
import { APIURL } from "../../../components/Settings";
import { useLocation, useNavigate } from "react-router";
import Button from "../../../components/generalcomponents/Button";
import Editbutton from "../../../components/generalcomponents/Editbutton";
import CardContainer from "../../../components/containers/CardContainer";

const StyledResult = styled.h2`
  text-align: center;
  margin: 30px;
  color: white;
  width: 100%;
`;

const StyledImage = styled.div`
  margin: 0 auto;
  display: flex;
  height: 200px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledH1 = styled.h1`
  width: 100%;
  padding: 30px;
  font-size: 46px;
  color: white;
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

export default function SearchPage() {
  const navigate = useNavigate();

  const [result, setResult] = useState([]);
  const getParams = useLocation().search;
  const searchResult = new URLSearchParams(getParams).get("search");

  const apiCall = useCallback(async () => {
    try {
      const apiCall = await fetch(APIURL + "/products");
      const apiResult = await apiCall.json();
      setResult(apiResult);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => apiCall(), []);

  const hrefId = "/shoes?id=";
  const hrefAdmin = "/admin?id=";

  const filteredResult = result.filter(
    (item) =>
      item.title.toLowerCase().includes(searchResult) ||
      item.description.toLowerCase().includes(searchResult)
  );

  const theResults = filteredResult.map((item, key) => (
    <CardContainer href={hrefId + item.id} data-id={item.id} key={key}>
      <Editbutton href={hrefAdmin + item.id} />
      <StyledH2>{item.title}</StyledH2>
      <StyledImage
        className="product-image"
        style={
          item.image
            ? {
                backgroundImage: `url(${
                  APIURL + item.image.formats.medium.url
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

  let resultShow;

  if (filteredResult.length > 0) {
    resultShow = (
      <>
        <StyledH1>Search Result</StyledH1>
        <StyledResult>Results for: {searchResult}</StyledResult>
        {theResults}
      </>
    );
  } else {
    resultShow = (
      <>
        <StyledH1>Search Result</StyledH1>
        <StyledResult>No result matching: {searchResult}</StyledResult>
      </>
    );
  }

  return resultShow;
}
