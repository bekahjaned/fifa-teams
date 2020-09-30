import React from "react";
import "../index.css";
import styled from "styled-components";

import logo from "../../data/images/CM_Logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home/";
import TeamFormPage from "../TeamFormPage/";

function App() {
  const media = { desktop: "@media(min-width: 1000px)" };

  const NavWrap = styled.div`
    margin: 0 auto;
    max-width: 414px;

    ${media.desktop} {
      position: sticky;
      max-width: 1200px;
      margin: 0 auto;
    }
  `;

  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 125px;
      height: 40px;
      padding: 16px 0 40px 0;
      margin: 0 0 0 16px;
    }

    ${media.desktop} {
      .logo {
        width: 125px;
        height: 40px;
        padding: 40px 0;
        margin: 0;
      }
    }
  `;

  return (
    <Router>
      <NavWrap>
        <Nav>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <Link to="/teamform">Submit a Team</Link>
          {/* <Link>Sign Up</Link> */}
        </Nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/teamform">
            <TeamFormPage />
          </Route>
          {/* <Route>
            <SignUpPage />
          </Route> */}
        </Switch>
      </NavWrap>
    </Router>
  );
}

export default App;
