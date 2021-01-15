import React, { useEffect, useState } from "react";
import SearchShoe from "./searchAddShoe.jsx";
function SearchAddList(props) {
  return (
    <div>
      {props.sneakerSearchList.map((shoe) => (
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
        />
      ))}
    </div>
  );
}

export default SearchAddList;
