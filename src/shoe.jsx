import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ShoeBox = styled.div`
  background-color: #ffd9b3;
  padding: 20px;
  border: 5px solid black;
  margin: 5px 0px 5px 0px;
`;
const ShoeText = styled.div`
  text-align: left;
`;

const ShoePic = styled.img`
  border-radius: 25%;
`;

function Shoe(props) {
  const sizeType = (string) => {
    if (string === 1) {
      return "M";
    } else if (string === 2) {
      return "W";
    } else if (string === 3 || string === 4 || string === 5) {
      return "y";
    } else if (string === 6 || string === 7) {
      return "c";
    } else {
      return "type";
    }
  };

  return (
    <ShoeBox>
      <ShoePic src={props.shoe.image.url} alt={props.shoe.image.alt}></ShoePic>
      <ShoeText>
        <div>
          {props.shoe.name} - {props.shoe.nickname}
        </div>
        <div>
          Size: {props.shoe.size} {props.shoe.sizetype.symbol}{" "}
          {props.shoe.styleCode}
        </div>
      </ShoeText>
    </ShoeBox>
  );
}

export default Shoe;
