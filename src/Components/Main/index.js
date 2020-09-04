import React from "react";

import teams from "../../data/teams.json";

import { MainWrap } from "../../Elements/MainWrap/";
import { MainContent } from "../../Elements/MainContent/";
import { CardGrid } from "../../Elements/CardGrid/";

import TeamCard from "../TeamCard/";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: teams,
    };
  }

  render() {
    const viewTeams = this.state.teams.map((team) => {
      const { name, league, image, background, guidelines, objectives } = team;
      return (
        <TeamCard
          name={name}
          league={league}
          image={image}
          background={background}
          guidelines={guidelines}
          objectives={objectives}
          key={name}
        />
      );
    });

    return (
      <MainWrap>
        <MainContent>
          <h1 className="main-title">Team Guidelines</h1>
          <p className="main-description">
            If you would like to submit any team ideas, contact u/StillGrowingUp
            on Reddit.
          </p>
          <CardGrid>{viewTeams}</CardGrid>
        </MainContent>
      </MainWrap>
    );
  }
}

export default Main;
