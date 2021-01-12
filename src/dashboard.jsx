import React, { useEffect, useState } from "react";
import Collection from "./collection.jsx";
import styled from "styled-components";
import SearchBar from "./search.jsx";

function Dashboard(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClickAddShoe = () => {
    props.setView("addshoe");
  };
  useEffect(() => {
    props.getUserById(props.userId);
    props.getUsersShoes();
  }, []);
  return (
    <div>
      <h3>{props.user.firstName}'s Dashboard</h3>

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Collection userSneakers={props.userSneakers} searchTerm={searchTerm} />
    </div>
  );
}

export default Dashboard;
