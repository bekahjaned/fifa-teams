import React, { useState } from "react";
import "../index.css";

import theTeams from "../../data/teams.json";

import { MainWrap } from "../../Elements/MainWrap/";
import { MainContent } from "../../Elements/MainContent/";
import { CardGrid } from "../../Elements/CardGrid/";

import Survey from "../Survey/";
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

  const googleDoc = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/1qJjRlqHfvOOWYTpBEqnaO5epkNgDe59Nsc6w35EOaFc/edit#gid=0"
    );
  };

  return (
    <MainWrap>
      <MainContent>
        <Survey buttonText="Take survey" />
        <h1 className="main-title">Team Guidelines</h1>
        <p className="main-description">
          If you would like to submit any team ideas, please use the following{" "}
          <span onClick={googleDoc}>Google Sheet</span>
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
