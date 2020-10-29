import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { PopUpWrap } from "../../Elements/PopUpWrap";

// I want to change this so it can be reused as any pop-up

class ErrorPopUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "aboslute",
    };
  }

  exitPopUp = () => {
    this.setState({
      display: "none",
    });
  };

  render() {
    return (
      <PopUpWrap style={{ display: this.state.display }}>
        <div>
          <div className="content">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <h4>Whoops... red card! Make sure all the fields are completed.</h4>
          </div>
          <FontAwesomeIcon
            className="exitIcon"
            icon={faTimes}
            onClick={() => this.exitPopUp()}
          />
        </div>
      </PopUpWrap>
    );
  }
}

export default ErrorPopUp;
