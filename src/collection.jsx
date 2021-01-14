import React, { useEffect, useState } from "react";
import Shoe from "./shoe.jsx";

function Collection(props) {
  return (
    <div>
      <h3>Collection</h3>
      {props.userSneakers
        .filter(
          (shoe) =>
            shoe.name.toLowerCase().includes(props.searchTerm) ||
            shoe.nickname.toLowerCase().includes(props.searchTerm)
        )
        .map((shoe) => (
          <Shoe shoe={shoe} key={shoe.id} />
        ))}
    </div>
  );
}

export default Collection;
