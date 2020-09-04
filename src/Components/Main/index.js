import React from "react";

import { MainWrap } from "../../Elements/MainWrap/";
import { MainContent } from "../../Elements/MainContent/";
import { CardGrid } from "../../Elements/CardGrid/";

class Main extends React.Component {
  render() {
    return (
      <MainWrap>
        <MainContent>
          <h1 className="main-title">Team Guidelines</h1>
          <p className="main-description">
            If you would like to submit any team ideas, contact u/StillGrowingUp
            on Reddit.
          </p>
          <CardGrid>
            <div></div>
          </CardGrid>
        </MainContent>
      </MainWrap>
    );
  }
}

export default Main;
