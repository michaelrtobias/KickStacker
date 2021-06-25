import React, { useEffect, useState } from "react";
import Shoe from "./shoe.jsx";
import LoadingZone from "./loadingZone/index.jsx";
import { useSelector } from "react-redux";

const userShoes = (state) => state.shoes;

function Collection(props) {
  const userSneakers = useSelector(userShoes);
  return (
    <div>
      <h3>Collection</h3>
      {userSneakers.length > 0 ? (
        userSneakers
          .filter(
            (shoe) =>
              shoe.name.toLowerCase().includes(props.searchTerm) ||
              shoe.nickname.toLowerCase().includes(props.searchTerm) ||
              shoe.brand.name.toLowerCase().includes(props.searchTerm) ||
              shoe.color.includes(props.searchTerm)
          )
          .map((shoe) => (
            <Shoe shoe={shoe} key={shoe.id} userId={props.userId} />
          ))
      ) : (
        <LoadingZone />
      )}
    </div>
  );
}

export default Collection;
