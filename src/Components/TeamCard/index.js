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
    >
      <div className="show">
        <Team name={props.name} league={props.league} image={props.image} />
      </div>
      <div className="collapse">
        <TeamBackground background={props.background} />
        <TeamGuidelines guidelines={props.guidelines} />
        <TeamObjectives objectives={props.objectives} />
      </div>
    </CardWrap>
  );
}
export default TeamCard;
