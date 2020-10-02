import React from "react";

import CountryDropdown from "../CountryDropdown/";
import LeagueDropdown from "../LeagueDropdown/";
import TeamDropdown from "../TeamDropdown/";

class Dropdowns extends React.Component {
  render() {
    return (
      <div>
        <CountryDropdown
          handleCountryChange={this.props.handleCountryChange}
          countries={this.props.countries}
        />

        <LeagueDropdown
          handleLeagueChange={this.props.handleLeagueChange}
          leagues={this.props.leagues}
        />

        <TeamDropdown
          handleTeamChange={this.props.handleTeamChange}
          teams={this.props.teams}
        />
      </div>
    );
  }
}

export default Dropdowns;
