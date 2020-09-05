import React from "react";

import { CardWrap } from "../../Elements/CardWrap/";

import Team from "../Team/";
import TeamBackground from "../TeamBackground/";
import TeamGuidelines from "../TeamGuidelines/";
import TeamObjectives from "../TeamObjectives/";

class TeamCard extends React.Component {
  render() {
    const {
      name,
      league,
      image,
      background,
      guidelines,
      objectives,
    } = this.props;

    return (
      <CardWrap>
        <Team name={name} league={league} image={image} />
        <TeamBackground background={background} />
        <TeamGuidelines guidelines={guidelines} />
        <TeamObjectives objectives={objectives} />
      </CardWrap>
    );
  }
}

export default TeamCard;
