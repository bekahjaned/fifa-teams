import React from "react";

import { TeamWrap } from "../../Elements/TeamWrap/";

class Team extends React.Component {
  render() {
    const { image, name, league } = this.props;

    return (
      <TeamWrap>
        <img src={require(`../../data/images/${image}.jpg`)} alt="team logo" />
        <div>
          <h1>{name}</h1>
          <p>{league}</p>
        </div>
      </TeamWrap>
    );
  }
}

export default Team;
