import React, { useEffect, useState } from "react";
import axios from "axios";
import SignIn from "../SignIn.jsx";
import Dashboard from "../dashboard.jsx";
import AddShoe from "../addShoe.jsx";
import styled from "styled-components";
import LoadingZone from "../loadingZone/index.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

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

function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});
  return (
    <div>
      <Body>
        <h1>Shoes Stacker</h1>

        <Router>
          <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" exact>
                  Collection
                </Nav.Link>

                <Nav.Link as={NavLink} to="/addshoe">
                  Add A Shoe
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Dashboard userId={userId} />}
            ></Route>
            <Route
              path="/addshoe"
              render={(props) => <AddShoe userId={userId} />}
            ></Route>
          </Switch>
        </Router>
      </Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
