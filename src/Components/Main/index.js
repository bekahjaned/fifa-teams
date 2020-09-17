import React, { useState } from "react";

import theTeams from "../../data/teams.json";

import { MainWrap } from "../../Elements/MainWrap/";
import { MainContent } from "../../Elements/MainContent/";
import { CardGrid } from "../../Elements/CardGrid/";

import TeamCard from "../TeamCard/";

function Main() {
  const [teams, setTeams] = useState(theTeams);

  const openTeams = (index) => {
    setTeams(
      teams.map((team, i) => {
        if (i === index) {
          team.open = !team.open;
        }
        return team;
      })
    );
  };

  return (
    <MainWrap>
      <MainContent>
        <h1 className="main-title">Team Guidelines</h1>
        <p className="main-description">
          If you would like to submit any team ideas, contact u/StillGrowingUp
          on Reddit.
        </p>
        <CardGrid className="teams">
          {teams.map((team, i) => (
            <TeamCard
              index={i}
              openTeams={openTeams}
              name={team.name}
              league={team.league}
              image={team.image}
              background={team.background}
              guidelines={team.guidelines}
              objectives={team.objectives}
              key={team.name}
            />
          ))}
        </CardGrid>
      </MainContent>
    </MainWrap>
  );
}

export default Main;
