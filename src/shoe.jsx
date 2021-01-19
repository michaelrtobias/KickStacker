import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteShoeButton from "./deleteShoe.jsx";

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
  max-height: 150px;
  max-width: 200px;
`;

function Shoe(props) {
  const [shoeURL, setShoeURL] = useState("");

  // const authorizeImage = () => {
  //   fetch(props.shoe.image.url, {
  //     "x-amz-server-side-encryption": "AES256",
  //   })
  //     .then((res) => res.blob())
  //     .then(() => console.log("shoe image unlocked"))
  //     .then((blob) => setShoeURL(URL.createObjectURL(blob)));
  // };

  // useEffect(() => {
  //   authorizeImage();
  // }, []);

  return (
    <ShoeBox>
      <ShoePic src={props.shoe.image.url} alt={props.shoe.image.alt}></ShoePic>
      <ShoeText>
        <div>
          {props.shoe.brand.name} - {props.shoe.model.name}
        </div>
        <div>
          {props.shoe.name} - {props.shoe.nickname}
        </div>
        <div>
          Size: {props.shoe.size} {props.shoe.sizetype.symbol}{" "}
          {props.shoe.styleCode}
        </div>
      </ShoeText>
      <DeleteShoeButton
        id={props.shoe.id}
        getUsersShoes={props.getUsersShoes}
      />
    </ShoeBox>
  );
}

export default Shoe;
