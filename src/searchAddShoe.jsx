import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ShoeBox = styled.div`
  background-color: #ffd9b3;
  padding: 20px;
  border: 5px solid black;
  margin: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
`;
const ShoeText = styled.div`
  text-align: left;
  padding: 8% 0px 0px 24px;
  position: relative;
`;

const ShoePic = styled.img`
  border-radius: 25%;
  max-height: 50px;
  max-width: 75px;
`;

function SearchShoe(props) {
  const [shoeURL, setShoeURL] = useState("");

  return (
    <div>
      <ShoePic src={props.shoe.thumbnail}></ShoePic>
      <div>{props.shoe.shoeName}</div>
    </div>
  );
}

export default SearchShoe;
