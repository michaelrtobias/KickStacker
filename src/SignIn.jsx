import React, { useEffect, useState } from "react";
import axios from "axios";

function SignIn(props) {
  const [chosenUser, setChosenUser] = useState("");
  const [newUserFirstName, setNewUserFirstName] = useState("");
  const [newUserLastName, setNewUserLastName] = useState("");

  const handleChange = (e) => {
    setChosenUser(e.target.value);
  };

  const handleClick = () => {
    props.setUserId(chosenUser);
    props.setView("dashboard");
  };

  const createUser = () => {
    axios.post("/users", {
      firstName: newUserFirstName,
      lastName: newUserLastName,
    });
  };

  const makeUser = () => {
    if (chosenUser === "0") {
      return (
        <div>
          <label>New User: </label>
          <input
            placeholder="Enter First Name"
            onChange={(e) => setNewUserFirstName(e.target.value)}
          ></input>
          <input
            placeholder="Enter Last Name"
            onChange={(e) => setNewUserLastName(e.target.value)}
          ></input>
          <button
            onClick={() => {
              createUser();
              props.getAllUsers();
              setChosenUser("choose");
            }}
          >
            Create User
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <select
        name="userPicker"
        id="userPicker"
        placeholder="Pick A User"
        onChange={(e) => handleChange(e)}
        // onChange={props.setUserId(e.target.value)}
      >
        <option value>Select A User</option>
        <option value="0">Create A New User</option>
        {props.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
      <div>{makeUser()}</div>
      <button onClick={() => handleClick()}>ENTER</button>
    </div>
  );
}

export default SignIn;
