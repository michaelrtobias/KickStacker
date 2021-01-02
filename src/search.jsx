import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a shoe"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
