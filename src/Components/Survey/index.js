import React from "react";

import { SurveyWrap } from "../../Elements/SurveyWrap/";
import { SurveyButton } from "../../Elements/SurveyButton/";

function Survey(props) {
  const surveyPage = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSddo_1_h2NhB7SacdrZGEOK1CF2x0l5ZKeOfMoxYSATf5eeog/viewform"
    );
  };

  return (
    <SurveyWrap>
      <p>
        We'd welcome your feedback. Here is a short survey about your Career
        Mode habits. It will help us improve this site and come up with new
        ideas to make your managerial journey more enjoyable.
      </p>
      <SurveyButton onClick={surveyPage}>{props.buttonText}</SurveyButton>
    </SurveyWrap>
  );
}

export default Survey;
