import React from "react";

import { CardWrap } from "../../Elements/CardWrap/";

import Team from "../Team/";
import TeamBackground from "../TeamBackground/";
import TeamGuidelines from "../TeamGuidelines/";
import TeamObjectives from "../TeamObjectives/";

function TeamCard(props) {
  return (
    <CardWrap
      className={"team " + (props.open ? "open" : "")}
      key={props.index}
      onClick={() => props.openTeam(props.index)}
    >
      <div className="show">
        {/* faw-question */}
        <Team name={props.name} league={props.league} image={props.image} />
      </div>
      <div className="collapse">
        {/* faq-answer */}
        <TeamBackground background={props.background} />
        <TeamGuidelines guidelines={props.guidelines} />
        <TeamObjectives objectives={props.objectives} />
      </div>
    </CardWrap>
  );
}
export default TeamCard;
