import React from "react";

import { SignUpWrapper } from "../../Elements/SignUpWrapper/";
import { EmailInput } from "../../Elements/EmailInput/";
import { SubmitButton } from "../../Elements/SubmitButton/";

class SignUpItem extends React.Component {
  render() {
    return (
      <SignUpWrapper>
        <EmailInput
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <SubmitButton>{this.props.buttonText}</SubmitButton>
      </SignUpWrapper>
    );
  }
}

export default SignUpItem;
