import React from "react";

import { TeamInfo } from "../../Elements/TeamInfo/";

class TeamBackground extends React.Component {
  render() {
    return (
      <TeamInfo>
        <h2>Background</h2>
        <p>{this.props.background}</p>
      </TeamInfo>
    );
  }
}

export default TeamBackground;
