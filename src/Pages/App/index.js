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
    background-color: #3b003c;

    ${media.desktop} {
      position: sticky;
    }
  `;

  const Nav = styled.div`
    margin: 0 auto;
    max-width: 414px;
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
      max-width: 1200px;
      margin: 0 auto;

      .logo {
        width: 125px;
        height: 40px;
        padding: 40px 0;
        margin: 0;
      }
    }
  `;

  const NavLinks = styled.div`
    padding-bottom: 25px;

    a {
      margin-right: 10px;
      color: white;
      text-decoration: none;
    }
  `;

  return (
    <Router>
      <NavWrap>
        <Nav>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <NavLinks>
            <Link to="/team-form">Submit a Team</Link>
            <Link to="/sign-up">Sign Up</Link>
          </NavLinks>
        </Nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team-form">
            <TeamFormPage />
          </Route>
          {/* <Route path="/sign-up">
            <SignUpPage />
          </Route> */}
        </Switch>
      </NavWrap>
    </Router>
  );
}

export default App;
