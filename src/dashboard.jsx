import React, { useEffect, useState } from "react";
import Collection from "./collection.jsx";
import styled from "styled-components";

function Dashboard(props) {
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
      <Collection userSneakers={props.userSneakers} />
    </div>
  );
}

export default Dashboard;
