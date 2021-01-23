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
  const [brandID, setBrandID] = useState("");

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
        const infoObj = { brandId: res.data[0].id };
        return infoObj;
      })
      .then((infoObj) => {
        axios
          .post("/searchcollections", {
            name: props.shoe.make,
            brandId: infoObj.brandId,
          })
          .then((res) => {
            props.setCollectionId(res.data[0].id);
            infoObj.collectionId = res.data[0].id;
            return infoObj;
          })
          .then((infoObj) => {
            axios
              .post("/searchmodels", {
                name: props.shoe.silhoutte,
                brandId: infoObj.brandId,
                collectionId: infoObj.collectionId,
              })
              .then((res) => {
                props.setModelId(res.data[0].id);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })

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
    props.setshoename(props.shoe.shoeName);
    props.setstylecode(props.shoe.styleID);
    props.setshoecolor(props.shoe.colorway);
    props.setDescription(props.shoe.description);
    props.setbrandname(props.shoe.brand);
    props.setsearchshoesilhoutte(props.shoe.silhoutte);
    props.setmodalimageurl(props.shoe.thumbnail);
    props.setmodalimagealt(props.shoe.urlKey);
    props.setReleaseDate(props.shoe.releaseDate);
    props.setRetailPrice(props.shoe.retailPrice);
    props.setSneaksId(props.shoe._id);
    AddImage();
    SearchOrAddBrand();
    props.setModalShow(true);
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
