import React, { useEffect, useState } from "react";
import axios from "axios";
import SignIn from "../SignIn.jsx";
import Dashboard from "../dashboard.jsx";
import AddShoe from "../addShoe.jsx";
import styled from "styled-components";

const Background = styled.div`
  background-color: #ffbf80;
  display: flex;
  justify-content: center;
`;

const NavButton = styled.div`
  background-color: #ff8000;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-right: 3px solid black;
  padding: 5px 175px 5px 175px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const HoverWrapper = styled.div`
  &:hover ${NavButton} {
    background-color: #ffd9b3;
  }
`;

const Body = styled.div`
  background-color: #da7635;
  height: '100vh',
  min-height : '100vh'
`;

const Footer = styled.footer`
  background-color: #da7635;
  height: '100vh',
  min-height : '100vh'
`;

const LoadingZone = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

function App() {
  const [userId, setUserId] = useState(0);
  const [view, setView] = useState("signin");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userSneakers, setUserSneakers] = useState([]);
  const [authUser, setAuthUser] = useState(null);

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
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${userId}/shoes`
    )
      .then((res) => res.data)
      .then((shoes) => setUserSneakers(shoes))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const renderView = () => {
    if (view === "signin") {
      return users.length > 0 ? (
        <SignIn
          users={users}
          setUserId={setUserId}
          setView={setView}
          getUserById={getUserById}
          getAllUsers={getAllUsers}
        />
      ) : (
        <LoadingZone>
          <Spinner></Spinner>
        </LoadingZone>
      );
    } else if (view === "dashboard") {
      return (
        <Dashboard
          getUserById={getUserById}
          user={user}
          userId={userId}
          setView={setView}
          getUsersShoes={getUsersShoes}
          userSneakers={userSneakers}
        />
      );
    } else if (view === "addshoe") {
      return (
        <AddShoe
          setView={setView}
          userId={userId}
          getUsersShoes={getUsersShoes}
        />
      );
    } else if (view === "auth") {
      return <div>Add authentication page</div>;
    } else if (view === "profile") {
      return <div>Profile Page Coming Soon!</div>;
    }
  };

  return (
    <div>
      <Body>
        <h1>Shoes Stacker Serverless</h1>
        {view === "signin" ? null : (
          <Header>
            <HoverWrapper>
              <NavButton onClick={() => setView("signin")}>
                Change User
              </NavButton>
            </HoverWrapper>
            <HoverWrapper>
              <NavButton onClick={() => setView("dashboard")}>
                Collection
              </NavButton>
            </HoverWrapper>
            <HoverWrapper>
              <NavButton onClick={() => setView("addshoe")}>Add Shoe</NavButton>
            </HoverWrapper>
            <HoverWrapper>
              <NavButton onClick={() => setView("profile")}>Profile</NavButton>
            </HoverWrapper>
          </Header>
        )}

        <Background>
          <div>{renderView()}</div>
        </Background>
      </Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
