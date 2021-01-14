import React, { useEffect, useState } from "react";
import SearchShoe from "./searchAddShoe.jsx";
function SearchAddList(props) {
  return (
    <div>
      {props.sneakerSearchList.map((shoe) => (
        <SearchShoe
          shoe={shoe}
          key={shoe._id}
          setShoeName={props.setShoeName}
          setStyleCode={props.setStyleCode}
          setDescription={props.setDescription}
          setImageId={props.setImageId}
          setModelId={props.setModelId}
          setBrandId={props.setBrandId}
          setCollectionId={props.setCollectionId}
          collectionId={props.collectionId}
          brandId={props.brandId}
          setModalShow={props.setModalShow}
          setShoeColor={props.setShoeColor}
        />
      ))}
    </div>
  );
}

export default SearchAddList;
