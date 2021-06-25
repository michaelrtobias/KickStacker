import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

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
    axios.post(
      "https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users",
      {
        firstName: newUserFirstName,
        lastName: newUserLastName,
      }
    );
  };

  const getAllUsers = () => {
    axios("https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users", {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => res.data)
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
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
              getAllUsers();
              setChosenUser("choose");
            }}
          >
            Create User
          </button>
        </div>
      );
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <SignInWrapper>
      <select
        name="userPicker"
        id="userPicker"
        placeholder="Pick A User"
        onChange={(e) => handleChange(e)}
        required
      >
        <option>Select A User</option>
        <option value="0">Create A New User</option>
        {props.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
      <div>{makeUser()}</div>
      <button onClick={() => handleClick()}>ENTER</button>
    </SignInWrapper>
  );
}

export default SignIn;
