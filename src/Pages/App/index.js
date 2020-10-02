import React from "react";
import "../index.css";

import logo from "../../data/images/CM_Logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home/";
import TeamFormPage from "../TeamFormPage/";

import { NavWrap } from "../../Elements/NavWrap/";
import { Nav } from "../../Elements/Nav/";
import { NavLinks } from "../../Elements/NavLinks";

function App() {
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
