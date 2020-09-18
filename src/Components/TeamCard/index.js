import React from "react";
import "../index.css";

import { CardWrap } from "../../Elements/CardWrap/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Team from "../Team/";
import TeamBackground from "../TeamBackground/";
import TeamGuidelines from "../TeamGuidelines/";
import TeamObjectives from "../TeamObjectives/";

function TeamCard(props) {
  const { team, index, openTeams } = props;

  return (
    <CardWrap
      className={"team " + (team.open ? "open" : "")}
      key={props.index}
      onClick={() => openTeams(index)}
    >
      <div className="show">
        {/* faw-question */}
        <Team name={team.name} league={team.league} image={team.image} />
        <FontAwesomeIcon className="icon" icon={faChevronDown} />
      </div>
      <div className="collapse">
        {/* faq-answer */}
        <TeamBackground background={team.background} />
        <TeamGuidelines guidelines={team.guidelines} />
        <TeamObjectives objectives={team.objectives} />
      </div>
    </CardWrap>
  );
}
export default TeamCard;
