import React from "react";
import "../index.css";

import logo from "../../data/images/CM_Logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home/";
import TeamFormPage from "../TeamFormPage/";

import { NavWrap } from "../../Elements/NavWrap/";
import { Nav } from "../../Elements/Nav/";
import { NavLinks } from "../../Elements/NavLinks";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#3b003c",
    };
  }

  changeColor = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <Router>
          <NavWrap>
            <Nav>
              <Link to="/" onClick={() => this.changeColor("#3b003c")}>
                <img className="logo" src={logo} alt="logo" />
              </Link>
              <NavLinks>
                <Link
                  to="/team-form"
                  onClick={() => this.changeColor("#0d0d0d")}
                >
                  Submit a Team
                </Link>
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
      </div>
    );
  }
}

export default App;
