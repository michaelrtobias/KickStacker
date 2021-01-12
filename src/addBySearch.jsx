import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchAdd(props) {
  const [sneaksSearchTerm, setSneaksSearchTerm] = useState("");

  useEffect(() => {
    props.getSneaksData(sneaksSearchTerm);
  }, [sneaksSearchTerm]);

  // useEffect(() => {
  //   props.getSneaksData("Nike SB");
  // }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSneaksSearchTerm(e.target.value)}
        placeholder="Search For Shoes"
      ></input>
    </div>
  );
}

export default SearchAdd;
