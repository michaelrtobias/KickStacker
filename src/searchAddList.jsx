import React, { useEffect, useState } from "react";
import SearchShoe from "./searchAddShoe.jsx";
function SearchAddList(props) {
  return (
    <div>
      {props.sneakerSearchList.map((shoe) => (
        <SearchShoe shoe={shoe} key={shoe._id} />
      ))}
    </div>
  );
}

module.exports = SearchAddList;
