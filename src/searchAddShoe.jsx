import React, { useEffect, useState } from "react";
import axios from "axios";
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

const HoverShoe = styled.div`
  &:hover ${ShoeBox} {
    background-color: #ffa64d;
  }
`;

function SearchShoe(props) {
  const [shoeURL, setShoeURL] = useState("");

  const AddImage = (req, res) => {
    axios
      .post("/images", {
        name: props.shoe.shoeName,
        url: props.shoe.thumbnail,
        alt: props.shoe.urlKey,
      })
      .then((res) => {
        props.setImageId(res.data.id);
      })
      .then(() => console.log("Image Stored in DB"))
      .catch((err) => {
        throw err;
      });
  };

  const SearchOrAddBrand = (req, res) => {
    axios
      .post("/searchbrands", {
        name: props.shoe.brand,
      })
      .then((res) => {
        props.setBrandId(res.data[0].id);
        return res.data[0].id;
      })
      .then((result) => {
        axios
          .post("/searchcollections", {
            name: props.shoe.make,
            brandId: result,
          })
          .then((res) => {
            props.setCollectionId(res.data[0].id);
          })
          .catch((err) => console.log(err));
      })
      .then(() => console.log("Brand has been hooked"))
      .catch((err) => console.log(err));
  };

  const SearchOrAddCollection = (req, res) => {
    axios
      .post("/searchcollections", {
        name: props.shoe.make,
        brandId: props.brandId,
      })
      .then((res) => {
        props.setCollectionId(res.data[0].id);
      })
      .catch((err) => console.log(err));
  };

  const SearchAddClick = () => {
    props.setShoeName(props.shoe.shoeName);
    props.setStyleCode(props.shoe.styleID);
    props.setDescription(props.shoe.description);
    AddImage();
    SearchOrAddBrand();
  };

  // useEffect(() => {
  //   SearchOrAddCollection();
  // }, [props.brandId]);

  return (
    <HoverShoe>
      <ShoeBox
        onClick={() => {
          SearchAddClick();
        }}
      >
        <ShoePic src={props.shoe.thumbnail}></ShoePic>
        <ShoeText>
          <div>{props.shoe.shoeName}</div>
          <div>{props.shoe.colorway}</div>
          <div>{props.shoe.styleID}</div>
        </ShoeText>
      </ShoeBox>
    </HoverShoe>
  );
}

export default SearchShoe;
