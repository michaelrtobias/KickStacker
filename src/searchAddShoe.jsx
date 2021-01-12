import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ShoeBox = styled.div`
  background-color: #ffd9b3;
  padding: 15px;
  border: 5px solid black;
  margin: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ShoeText = styled.div`
  text-align: left;
  padding-right: 15px;
  position: relative;
  flex: 1;
`;

const ShoePic = styled.img`
  border-radius: 8%;
  margin-right: 10px;
  flex: 0 0 100px;
  max-height: 50px;
  max-width: 75px;
`;

function SearchShoe(props) {
  const [shoeURL, setShoeURL] = useState("");

  return (
    <ShoeBox>
      <ShoePic src={props.shoe.thumbnail}></ShoePic>
      <ShoeText>
        <div>{props.shoe.shoeName}</div>
        <div>{props.shoe.colorway}</div>
        <div>{props.shoe.styleID}</div>
      </ShoeText>
    </ShoeBox>
  );
}

export default SearchShoe;
