import React from "react";

import emailjs from "emailjs-com";

import options from "../../data/options.json";

// import Breadcrumb from "../../Components/Breadcrumb/";
import ErrorPopUp from "../../Components/ErrorPopUp";
import DropdownItem from "../../Components/DropdownItem";
import TextAreaItem from "../../Components/TextAreaItem";
import BulletedTextArea from '../../Components/BulletedTextArea/'

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
        background: "",
        guidelines: "• ",
        objectives: "• ",
        nickname: "",
      },
      formErrors: {
        country: "",
        league: "",
        team: "",
        background: "",
        guidelines: "",
        objectives: "",
        pageError: false,
      },
      options: options,
    };
  }

  // getting country, league or team options depending on previous dropdown option chosen
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

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  // checking if form is valid
  isValid = () => {
    const {
      country,
      league,
      team,
      background,
      guidelines,
      objectives,
    } = this.state.form;

    // helper function checking if a field is valid
    // params are name of field and the value
    const checkValidity = (field, value) => {
      // chacking if value is true(not empty or undefined)
      const isValid = value !== undefined && value !== "";
      this.setState((prevState) => ({
        formErrors: {
          ...prevState.formErrors,
          // sets errors using name of field
          // if value is false, you get the error message
          [`${field}`]: `${
            isValid ? "" : "Don't forget to fill out this field"
          }`,
        },
      }));
      // if value is true, return true or else return false
      return isValid ? true : false;
    };

    // creating a variable for every field's validity
    const isCountryValid = checkValidity("country", country);
    const isLeagueValid = checkValidity("league", league);
    const isTeamValid = checkValidity("team", team);
    const isBackgroundValid = checkValidity("background", background);
    const isGuidelinesValid = checkValidity("guidelines", guidelines);
    const isObjectivesValid = checkValidity("objectives", objectives);

    if (
      isCountryValid &&
      isLeagueValid &&
      isTeamValid &&
      isBackgroundValid &&
      isGuidelinesValid &&
      isObjectivesValid
    ) {
      return true;
    } else {
      return false;
    }
  };

  // enabling pop-up to appear when form is incomplete
  pageError = () => {
    const current = this.state.formErrors.pageError;
    if (current !== true) {
      this.setState((prevState) => ({
        formErrors: {
          ...prevState.formErrors,
          pageError: !current,
        },
      }));
    }
  };

  // reseting form after submission
  resetForm = () => {
    this.setState({
      form: {
        country: "",
        league: "",
        team: "",
        background: "",
        guidelines: "• ",
        objectives: "• ",
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

  // submitting form if valid and enabling pop-up if not
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

      let templateParams = {
        country: country,
        league: league,
        team: team,
        background: background,
        guidelines: guidelines,
        objectives: objectives,
        nickname: nickname,
      };

      emailjs.send(
        "assistant-coach",
        "template_FC9d5ib4",
        templateParams,
        "user_uFBt7OJSbpoxTLb0kocyH"
      );

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
      this.pageError();
    }
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
            {/* <Breadcrumb text="Team Ideas" /> */}
            <h1>Team Idea Submission Form</h1>
            <Line />
          </FormHeader>
          {formErrors.pageError === true && <ErrorPopUp />}

          <form 
            onSubmit={this.handleSubmit} 
            noValidate
          >
            <Dropdowns>
              <DropdownItem
                name="country"
                title="Country"
                errorShow={
                  formErrors.country !== "" ? "errorShow" : "svg-inline--fa"
                }
                errorText={formErrors.country !== "" ? "errorText" : ""}
                value={form.country}
                size="small"
                errorState={formErrors.country !== "" ? "errorState" : ""}
                handleChange={this.handleCountryChange}
                placeholder="SELECT COUNTRY"
                options={countries}
                error={formErrors.country}
              />
              <DropdownItem
                name="league"
                title="League Name"
                errorShow={
                  formErrors.league !== "" ? "errorShow" : "svg-inline--fa"
                }
                errorText={formErrors.league !== "" ? "errorText" : ""}
                value={form.league}
                size="large"
                errorState={formErrors.league !== "" ? "errorState" : ""}
                handleChange={this.handleLeagueChange}
                placeholder="SELECT LEAGUE"
                options={leagues}
                error={formErrors.league}
              />
              <DropdownItem
                name="team"
                title="Team Name"
                errorShow={
                  formErrors.team !== "" ? "errorShow" : "svg-inline--fa"
                }
                errorText={formErrors.team !== "" ? "errorText" : ""}
                value={form.team}
                size="medium"
                errorState={formErrors.team !== "" ? "errorState" : ""}
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
                errorShow={
                  formErrors.background !== "" ? "errorShow" : "svg-inline--fa"
                }
                extra="Club nickname, major accomplishments, and relevant facts"
                errorText={formErrors.background !== "" ? "errorText" : ""}
                id="regular"
                className={formErrors.background !== "" ? "errorState" : ""}
                handleChange={this.handleChange}
                error={formErrors.background}
              />
              <BulletedTextArea 
                name="guidelines"
                value={form.guidelines}
                title="Management Guidelines"
                errorShow={
                  formErrors.guidelines !== "" ? "errorShow" : "svg-inline--fa"
                }
                extra="Signing policies, youth development, priorities, preferred
          formation, and ATT/DEF style"
                errorText={formErrors.guidelines !== "" ? "errorText" : ""}
                id="bullet"
                className={formErrors.guidelines !== "" ? "errorState" : ""}
                handleChange={this.handleChange}
                error={formErrors.guidelines}
              />
              <BulletedTextArea 
                name="objectives"
                value={form.objectives}
                title="Team Objectives"
                errorShow={
                  formErrors.objectives !== "" ? "errorShow" : "svg-inline--fa"
                }
                extra="Current team objections for the league and cups, team overhaul and
          financial fairplay"
                errorText={formErrors.objectives !== "" ? "errorText" : ""}
                id="bullet"
                className={formErrors.objectives !== "" ? "errorState" : ""}
                handleChange={this.handleChange}
                error={formErrors.objectives}
              />
              <TextAreaItem
                name="nickname"
                value={form.nickname}
                title="Name, nickname or u/handle"
                extra="this is to give you credit"
                id="small"
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
