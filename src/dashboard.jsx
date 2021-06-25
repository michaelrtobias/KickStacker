import React, { useEffect, useState } from "react";
import Collection from "./collection.jsx";
import styled from "styled-components";
import SearchBar from "./search.jsx";
import axios from "axios";
function Dashboard(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [userSneakers, setUserSneakers] = useState([]);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});

  const handleClickAddShoe = () => {
    // props.setView("addshoe");
    // add history function
  };

  const getUserById = (id) => {
    axios(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${id}`
    )
      .then((res) => res.data[0])
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  };
  const getUsersShoes = () => {
    axios(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${props.userId}/shoes`
    )
      .then((res) => res.data)
      .then((shoes) => setUserSneakers(shoes))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUserById(props.userId);
    getUsersShoes();
  }, []);
  return (
    <div>
      {/* <h3>{props.user.firstName}'s Dashboard</h3> */}

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Collection
        userSneakers={userSneakers}
        searchTerm={searchTerm}
        getUsersShoes={getUsersShoes}
        userId={props.userId}
      />
    </div>
  );
}

export default Dashboard;
