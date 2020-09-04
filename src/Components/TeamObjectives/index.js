import React from "react";

import { TeamInfo } from "../../Elements/TeamInfo/";

class TeamObjectives extends React.Component {
  render() {
    const objectivesList = this.props.objectives.map((objective) => {
      return <li key={objective}>{objective}</li>;
    });

    return (
      <TeamInfo>
        <h2>Objectives</h2>
        <ul>{objectivesList}</ul>
      </TeamInfo>
    );
  }
}

export default TeamObjectives;
