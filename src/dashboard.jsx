import React, { useEffect, useState } from "react";
import Collection from "./collection.jsx";
import styled from "styled-components";
import SearchBar from "./search.jsx";
import axios from "axios";

import store from "./redux/store.js";

import { handleShoeData } from "./redux/shoes/shoeSlice.js";

function Dashboard(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [userSneakers, setUserSneakers] = useState([]);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});

  const getUserById = (id) => {
    axios(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${id}`
    )
      .then((res) => res.data[0])
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    store.dispatch(handleShoeData);
    store.getState();
  }, []);
  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Collection searchTerm={searchTerm} userId={props.userId} />
    </div>
  );
}

export default Dashboard;
