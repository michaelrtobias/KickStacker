import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchAdd(props) {
  const [sneaksSearchTerm, setSneaksSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSneaksSearchTerm(e.target.value)}
        placeholder="Search For Shoes"
      ></input>
      <button>Search</button>
    </div>
  );
}

export default SearchAdd;
