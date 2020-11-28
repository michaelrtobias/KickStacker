import React, { useEffect, useState } from "react";
import Collection from "./collection.jsx";

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
      <button onClick={() => handleClickAddShoe()}>Add A Shoe</button>
      <Collection userSneakers={props.userSneakers} />
    </div>
  );
}

export default Dashboard;
