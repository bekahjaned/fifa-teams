import React from "react";

import { SignUpWrapper } from "../../Elements/SignUpWrapper/";
import { EmailInput } from "../../Elements/EmailInput/";
import { SubmitButton } from "../../Elements/SubmitButton/";

class SignUpItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <SignUpWrapper
          action="https://gmail.us2.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="8140336a6f0652cf619034ca4" />
          <input type="hidden" name="id" value="be50313f9f" />
          <EmailInput>
            <input
              type="email"
              autoCapitalize="off"
              autoCorrect="off"
              name="MERGE0"
              id="MERGE0"
              className={this.state.errorClass}
              placeholder={this.props.placeholder}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </EmailInput>
          <SubmitButton type="submit" name="submit" value="Subscribe">
            {this.props.buttonText}
          </SubmitButton>
          <input
            type="hidden"
            name="ht"
            value="682e7badc6d64f6020a5009ce391fa61a3236d04:MTYwMDAzNDg5Ni41MjAz"
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </SignUpWrapper>
      </div>
    );
  }
}

export default SignUpItem;
