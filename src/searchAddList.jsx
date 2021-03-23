import React, { useEffect, useState } from "react";
import SearchShoe from "./searchAddShoe.jsx";
import styled from "styled-components";

const LoadingZone = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
border: 16px solid #f3f3f3;
border-top: 16px solid #3498db;
border-radius: 50%;
width: 120px;
height: 120px;
animation: spin 2s linear infinite;
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
function SearchAddList(props) {
  return (
    <div>
      {props.sneakerSearchList.length > 0 ? (
        props.sneakerSearchList.map((shoe) => (
          <SearchShoe
            shoe={shoe}
            key={shoe._id}
            setshoename={props.setshoename}
            setstylecode={props.setstylecode}
            setDescription={props.setDescription}
            setImageId={props.setImageId}
            setModelId={props.setModelId}
            setBrandId={props.setBrandId}
            setCollectionId={props.setCollectionId}
            collectionId={props.collectionId}
            brandId={props.brandId}
            setModalShow={props.setModalShow}
            setshoecolor={props.setshoecolor}
            setbrandname={props.setbrandname}
            setsearchshoesilhoutte={props.setsearchshoesilhoutte}
            setmodalimageurl={props.setmodalimageurl}
            setmodalimagealt={props.setmodalimagealt}
            setReleaseDate={props.setReleaseDate}
            setRetailPrice={props.setRetailPrice}
            setSneaksId={props.setSneaksId}
          />
        ))
      ) : (
        <LoadingZone>
          <Spinner></Spinner>
        </LoadingZone>
      )}
    </div>
  );
}

export default SearchAddList;
