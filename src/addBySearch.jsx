import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchAdd(props) {
  const [sneaksSearchTerm, setSneaksSearchTerm] = useState("");
  // const [sneakerSearchList, setSneakerSearchList] = useState({});

  // const getSneaksData = (term) => {
  //   axios
  //     .get("/sneakerdata", {
  //       params: {
  //         term: term,
  //       },
  //     })
  //     .then((res) => res.data)
  //     .then((shoes) => setSneakerSearchList(shoes))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSneaksSearchTerm(e.target.value)}
        placeholder="Search For Shoes"
      ></input>
      <button onClick={() => props.getSneaksData(sneaksSearchTerm)}>
        Search
      </button>
    </div>
  );
}

export default SearchAdd;
