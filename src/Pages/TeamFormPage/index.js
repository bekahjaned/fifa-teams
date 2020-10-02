import React from "react";

import options from "../../data/options.json";

import Dropdowns from "../../Components/Dropdowns/";

import { FormWrap } from "../../Elements/FormWrap/";
import { Line } from "../../Elements/Line/";
import { FormHeader } from "../../Elements/FormHeader/";

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

  handleLeagueChange = (event) => {
    const e = event.target.value;

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        league: e,
      },
    }));
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

  getCountries = () => {
    const { options } = this.state;
    const countries = options.map((option) => {
      return (
        <option value={option.country} key={option.country}>
          {option.country}
        </option>
      );
    });
    return countries;
  };

  getLeagues = (formCountry) => {
    const { options } = this.state;
    const leagues = options.map((option) => {
      if (formCountry === option.country) {
        const league = option.leagues.map((league) => {
          const { name } = league;
          return (
            <option value={name} key={name}>
              {name}
            </option>
          );
        });
        return league;
      }
    });
    return leagues;
  };

  getTeams = (formCountry, formLeague) => {
    const { options } = this.state;
    const teamOptions = options.map((option) => {
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
      <FormWrap>
        <FormHeader>
          <h1>Team Idea Submission Form</h1>
          <Line />
        </FormHeader>
        <Dropdowns
          handleCountryChange={this.handleCountryChange}
          handleLeagueChange={this.handleLeagueChange}
          handleTeamChange={this.handleTeamChange}
          countries={countries}
          leagues={leagues}
          teams={teams}
        />
      </FormWrap>
    );
  }
}

export default TeamFormPage;
