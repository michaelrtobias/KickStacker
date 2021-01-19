import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchBar = styled.input`
  margin-top: 10px;
  width: 100%;
`;

function SearchAddBar(props) {
  const [sneaksSearchTerm, setSneaksSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;
    props.getSneaksData(sneaksSearchTerm);
  }, [sneaksSearchTerm]);

  return (
    <div>
      <SearchBar
        type="text"
        onChange={(e) => setSneaksSearchTerm(e.target.value)}
        placeholder="Search For Shoes"
      ></SearchBar>
    </div>
  );
}

export default SearchAddBar;
