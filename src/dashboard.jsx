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
      <div>{props.user.firstName}'s Dashboard</div>
      <div>
        <button onClick={() => handleClickAddShoe()}>Add A Shoe</button>
        <button onClick={() => props.setView("signin")}>Change User</button>
      </div>
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Collection userSneakers={props.userSneakers} searchTerm={searchTerm} />
    </div>
  );
}

export default Dashboard;
