import React from "react";
import "./index.css";

import options from "../../data/options.json";

class TeamFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        country: "",
        league: "",
        team: "",
      },
      options: options,
    };
  }

  handleCountryChange = (event) => {
    const e = event.target.value;

    this.setState({
      form: {
        country: e,
      },
    });
  };

  getCountries = () => {
    const countries = this.state.options.map((option) => {
      return (
        <option value={option.country} key={option.country}>
          {option.country}
        </option>
      );
    });
    return countries;
  };

  handleLeagueChange = (event) => {
    const e = event.target.value;

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        league: e,
      },
    }));
    console.log(this.state.form);
  };

  getLeagues = (country) => {
    const leagues = this.state.options.map((option) => {
      if (country === option.country) {
        const league = option.leagues.map((league) => {
          return (
            <option value={league.name} key={league.name}>
              {league.name}
            </option>
          );
        });
        return league;
      }
    });
    return leagues;
  };

  handleTeamChange = (event) => {
    const e = event.target.value;

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        team: e,
      },
    }));
  };

  getTeams = (formCountry, formLeague) => {
    const teamOptions = this.state.options.map((option) => {
      if (formCountry === option.country) {
        const leagues = option.leagues.map((league) => {
          if (formLeague === league.name) {
            const team = league.teams.map((team) => {
              return (
                <option value={team} key={team}>
                  {team}
                </option>
              );
            });
            return team;
          }
        });
        return leagues;
      }
    });
    return teamOptions;
  };

  render() {
    const { country, league } = this.state.form;

    const countries = this.getCountries();

    const leagues = this.getLeagues(country);

    const teams = this.getTeams(country, league);

    return (
      <div>
        <div>
          <h1>Team Idea Submission Form</h1>
        </div>

        <div>
          <div>
            <label>
              Country <span>*</span>
            </label>
            <select onChange={this.handleCountryChange}>
              <option className="no-display">Select country</option>
              {countries}
            </select>
          </div>
          <div>
            <label>
              League <span>*</span>
            </label>
            <select onChange={this.handleLeagueChange}>
              <option className="no-display">Select league</option>
              {leagues}
            </select>
          </div>
          <div>
            <label>
              Team <span>*</span>
            </label>
            <select onChange={this.handleTeamChange}>
              <option className="no-display">Select team</option>
              {teams}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamFormPage;
