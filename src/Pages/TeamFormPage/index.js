import React from "react";

import options from "../../data/options.json";

import Breadcrumb from "../../Components/Breadcrumb/";
import CountryDropdown from "../../Components/CountryDropdown/";
import LeagueDropdown from "../../Components/LeagueDropdown/";
import TeamDropdown from "../../Components/TeamDropdown";
import TextAreaItem from "../../Components/TextAreaItem";

import { FormWrap } from "../../Elements/FormWrap/";
import { FormContent } from "../../Elements/FormContent/";
import { Line } from "../../Elements/Line/";
import { FormHeader } from "../../Elements/FormHeader/";
import { Dropdowns } from "../../Elements/Dropdowns/";
import { TextAreas } from "../../Elements/TextAreas/";
import { SubmitButton } from "../../Elements/SubmitButton/";

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
        <FormContent>
          <FormHeader>
            <Breadcrumb text="Team Ideas" />
            <h1>Team Idea Submission Form</h1>
            <Line />
          </FormHeader>

          <Dropdowns>
            <CountryDropdown
              handleCountryChange={this.handleCountryChange}
              countries={countries}
            />
            <LeagueDropdown
              handleLeagueChange={this.handleLeagueChange}
              leagues={leagues}
            />
            <TeamDropdown
              handleTeamChange={this.handleTeamChange}
              teams={teams}
            />
          </Dropdowns>

          <TextAreas>
            <TextAreaItem
              title="Team Background"
              extra="club nickname, major accomplishments, and relevant facts"
              class="regular"
            />
            <TextAreaItem
              title="Management Guidelines"
              extra="signing policies, youth development, priorities, preferred
          formation, and ATT/DEF style"
              class="bullet"
            />
            <TextAreaItem
              title="Team Objectives"
              extra="current team objections for the league and cups, team overhaul and
          financial fairplay"
              class="bullet"
            />
            <TextAreaItem
              title="Name, nickname or u/handle"
              extra="this is to give you credit"
              class="small"
            />
          </TextAreas>

          <SubmitButton>Submit</SubmitButton>
        </FormContent>
      </FormWrap>
    );
  }
}

export default TeamFormPage;
