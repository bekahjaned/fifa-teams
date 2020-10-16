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
        background: "",
        guidelines: "",
        objectives: "",
        nickname: "",
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
  // to-do: see if I can do this with one function
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

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  isValid = () => {
    const {
      country,
      league,
      team,
      background,
      guidelines,
      objectives,
    } = this.state.form;

    const countryValid = () => {
      if (country !== undefined) {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            country: "",
          },
        }));
        return true;
      } else {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            country: "Please select a country",
          },
        }));
        return false;
      }
    };

    const leagueValid = () => {
      if (league !== undefined) {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            league: "",
          },
        }));
        return true;
      } else {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            league: "Please select a league",
          },
        }));
        return false;
      }
    };

    const teamValid = () => {
      if (team !== undefined) {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            team: "",
          },
        }));
        return true;
      } else {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            team: "Please select a team",
          },
        }));
        return false;
      }
    };

    const backgroundValid = () => {
      if (background !== undefined && background !== "") {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            background: "",
          },
        }));
        return true;
      } else {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            background: "Don't forget to fill out this field",
          },
        }));
        return false;
      }
    };

    const guidelinesValid = () => {
      if (guidelines !== undefined && guidelines !== "") {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            guidelines: "",
          },
        }));
        return true;
      } else {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            guidelines: "Don't forget to fill out this field",
          },
        }));
        return false;
      }
    };

    const objectivesValid = () => {
      if (objectives !== undefined && objectives !== "") {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            objectives: "",
          },
        }));
        return true;
      } else {
        this.setState((prevState) => ({
          formErrors: {
            ...prevState.formErrors,
            objectives: "Don't forget to fill out this field",
          },
        }));
        return false;
      }
    };

    if (
      countryValid() &&
      leagueValid() &&
      teamValid() &&
      backgroundValid() &&
      guidelinesValid() &&
      objectivesValid()
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isValid()) {
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
        background: "",
        guidelines: "",
        objectives: "",
        nickname: "",
      },
      formErrors: {
        country: "",
        league: "",
        team: "",
        background: "",
        guidelines: "",
        objectives: "",
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
    const { form, formErrors } = this.state;

    const { country, league } = form;
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
                value={form.country}
                size="small"
                handleChange={this.handleCountryChange}
                placeholder="SELECT COUNTRY"
                options={countries}
                error={formErrors.country}
              />
              <DropdownItem
                name="league"
                title="League"
                value={form.league}
                size="large"
                handleChange={this.handleLeagueChange}
                placeholder="SELECT LEAGUE"
                options={leagues}
                error={formErrors.league}
              />
              <DropdownItem
                name="team"
                title="Team"
                value={form.team}
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
                value={form.background}
                title="Team Background"
                extra="club nickname, major accomplishments, and relevant facts"
                size="regular"
                handleChange={this.handleChange}
                error={formErrors.background}
              />
              <TextAreaItem
                name="guidelines"
                value={form.guidelines}
                title="Management Guidelines"
                extra="signing policies, youth development, priorities, preferred
          formation, and ATT/DEF style"
                size="bullet"
                id="bullet"
                handleChange={this.handleChange}
                error={formErrors.guidelines}
              />
              <TextAreaItem
                name="objectives"
                value={form.objectives}
                title="Team Objectives"
                extra="current team objections for the league and cups, team overhaul and
          financial fairplay"
                size="bullet"
                id="bullet"
                handleChange={this.handleChange}
                error={formErrors.objectives}
              />
              <TextAreaItem
                name="nickname"
                value={form.nickname}
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
