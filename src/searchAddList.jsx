import React, { useEffect, useState } from "react";
import SearchShoe from "./searchAddShoe.jsx";
function SearchAddList(props) {
  return (
    <div>
      <div>TBA</div>
      {props.sneakerSearchList.length > 0 ? (
        props.sneakerSearchList.map((shoe) => {
          <SearchShoe shoe={shoe} key={shoe.id} />;
        })
      ) : (
        <div>Search for shoes</div>
      )}
    </div>
  );
}

module.exports = SearchAddList;
