import React from "react";

class Dropdowns extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label>
            Country <span>*</span>
          </label>
          <select onChange={this.props.handleCountryChange}>
            <option className="no-display">Select country</option>
            {this.props.countries}
          </select>
        </div>
        <div>
          <label>
            League <span>*</span>
          </label>
          <select onChange={this.props.handleLeagueChange}>
            <option className="no-display">Select league</option>
            {this.props.leagues}
          </select>
        </div>
        <div>
          <label>
            Team <span>*</span>
          </label>
          <select onChange={this.props.handleTeamChange}>
            <option className="no-display">Select team</option>
            {this.props.teams}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdowns;
