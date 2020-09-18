import React, { useState } from "react";
import "../index.css";

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
              team={team}
              index={i}
              openTeams={openTeams}
              key={team.name}
            />
          ))}
        </CardGrid>
      </MainContent>
    </MainWrap>
  );
}

export default Main;
