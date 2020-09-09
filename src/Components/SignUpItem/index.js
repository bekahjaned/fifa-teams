import React from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { SignUpWrapper } from "../../Elements/SignUpWrapper/";
import { EmailInput } from "../../Elements/EmailInput/";
import { SubmitButton } from "../../Elements/SubmitButton/";

class SignUpItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: "",
      errorClass: "no-error",
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  toastifySuccess = () => {
    toast("Thanks for signing up!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };

  validate = () => {
    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "Please enter a valid email";
    }

    if (emailError) {
      this.setState({ emailError, errorClass: "error" });
      return false;
    }
    return true;
  };

  sendEmail = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      emailjs
        .sendForm(
          "manny_bekah_make_stuff",
          "template_FC9d5ib4",
          e.target,
          "user_uFBt7OJSbpoxTLb0kocyH"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      this.setState({ email: "", emailError: "" });
      this.toastifySuccess();
    }
  };

  render() {
    return (
      <div>
        <SignUpWrapper onSubmit={this.sendEmail}>
          <EmailInput>
            <input
              className={this.state.errorClass}
              name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.emailError ? (
              <span>{this.state.emailError}</span>
            ) : null}
          </EmailInput>
          <SubmitButton>{this.props.buttonText}</SubmitButton>
        </SignUpWrapper>
        <ToastContainer />
      </div>
    );
  }
}

export default SignUpItem;
