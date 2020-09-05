import React from "react";

import { TeamInfo } from "../../Elements/TeamInfo/";

class TeamGuidelines extends React.Component {
  render() {
    const guidelinesList = this.props.guidelines.map((guideline) => {
      return <li key={guideline}>{guideline}</li>;
    });

    return (
      <TeamInfo>
        <h2>Management Guidelines</h2>
        <ul>{guidelinesList}</ul>
      </TeamInfo>
    );
  }
}

export default TeamGuidelines;
