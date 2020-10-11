import React from "react";

// import emailjs from "emailjs-com";

import options from "../../data/options.json";

import Breadcrumb from "../../Components/Breadcrumb/";
import DropdownItem from "../../Components/DropdownItem";
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
        country: undefined,
        league: undefined,
        team: undefined,
        background: undefined,
        guidelines: undefined,
        objectives: undefined,
        nickname: undefined,
      },
      formErrors: {
        country: "",
        league: "",
        team: "",
        background: "",
        guidelines: "",
        objectives: "",
      },
      options: options,
    };
  }

  // handling change of state
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

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "background":
        formErrors.background =
          value.length < 1 ? "Please enter the team background." : "";
        break;
      case "guidelines":
        formErrors.guidelines =
          value.length < 1 ? "Please enter the management guidelines." : "";
        break;
      case "objectives":
        formErrors.objectives =
          value.length < 1 ? "Please enter the team objectives." : "";
        break;
      default:
        break;
    }

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
      formErrors,
    }));
  };

  dropdownValid = () => {
    const dropdownInputs = {
      country: this.state.form.country,
      league: this.state.form.league,
      team: this.state.form.team,
    };

    const inputArr = Object.values(dropdownInputs).map((input) => {
      if (input !== undefined) {
        return true;
      } else {
        return false;
      }
    });

    if (inputArr[0] && inputArr[1] && inputArr[2]) {
      return true;
    } else {
      return false;
    }
  };

  textAreaValid = () => {
    const textInputs = {
      background: this.state.form.background,
      guidelines: this.state.form.guidelines,
      objectives: this.state.form.objectives,
    };

    const inputArr = Object.values(textInputs).map((input) => {
      if (input !== undefined) {
        return true;
      }
      return false;
    });

    if (inputArr[0] && inputArr[1] && inputArr[2]) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.textAreaValid() && this.dropdownValid()) {
      const {
        country,
        league,
        team,
        background,
        guidelines,
        objectives,
        nickname,
      } = this.state.form;

      // let templateParams = {
      //   country: country,
      //   league: league,
      //   team: team,
      //   background: background,
      //   guidelines: guidelines,
      //   objectives: objectives,
      //   nickname: nickname,
      // };

      // emailjs.send(
      //   "manny_bekah_make_stuff",
      //   "template_FC9d5ib4",
      //   templateParams,
      //   "user_uFBt7OJSbpoxTLb0kocyH"
      // );

      console.log(`
      ----SUBMITTING----
      Country: ${country}
      League: ${league}
      Team: ${team}
      Background: ${background}
      Guidelines: ${guidelines}
      Objectives: ${objectives}
      Nickname: ${nickname}
      `);

      this.resetForm();
    } else {
      console.log("there is an invalid value");
    }
  };

  resetForm = () => {
    this.setState({
      form: {
        country: undefined,
        league: undefined,
        team: undefined,
        background: undefined,
        guidelines: undefined,
        objectives: undefined,
        nickname: undefined,
      },
    });
  };

  // getting country, league or team options depending on dropdown option chosen
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
    const { formErrors } = this.state;

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

          <form onSubmit={this.handleSubmit} noValidate>
            <Dropdowns>
              <DropdownItem
                name="country"
                title="Country"
                value={this.state.form.country}
                size="small"
                handleChange={this.handleCountryChange}
                placeholder="SELECT COUNTRY"
                options={countries}
                error={formErrors.country}
              />
              <DropdownItem
                name="league"
                title="League"
                value={this.state.form.league}
                size="large"
                handleChange={this.handleLeagueChange}
                placeholder="SELECT LEAGUE"
                options={leagues}
                error={formErrors.league}
              />
              <DropdownItem
                name="team"
                title="Team"
                value={this.state.form.team}
                size="medium"
                handleChange={this.handleTeamChange}
                placeholder="SELECT TEAM"
                options={teams}
                error={formErrors.team}
              />
            </Dropdowns>

            <TextAreas>
              <TextAreaItem
                name="background"
                value={this.state.form.background}
                title="Team Background"
                extra="club nickname, major accomplishments, and relevant facts"
                size="regular"
                handleChange={this.handleChange}
                length={formErrors.background.length}
                error={formErrors.background}
              />
              <TextAreaItem
                name="guidelines"
                value={this.state.form.guidelines}
                title="Management Guidelines"
                extra="signing policies, youth development, priorities, preferred
          formation, and ATT/DEF style"
                size="bullet"
                id="bullet"
                handleChange={this.handleChange}
                length={formErrors.guidelines.length}
                error={formErrors.guidelines}
              />
              <TextAreaItem
                name="objectives"
                value={this.state.form.objectives}
                title="Team Objectives"
                extra="current team objections for the league and cups, team overhaul and
          financial fairplay"
                size="bullet"
                id="bullet"
                handleChange={this.handleChange}
                length={formErrors.objectives.length}
                error={formErrors.objectives}
              />
              <TextAreaItem
                name="nickname"
                value={this.state.form.nickname}
                title="Name, nickname or u/handle"
                extra="this is to give you credit"
                size="small"
                handleChange={this.handleChange}
              />
            </TextAreas>

            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContent>
      </FormWrap>
    );
  }
}

export default TeamFormPage;
