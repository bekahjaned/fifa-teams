import React from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { SignUpWrapper } from "../../Elements/SignUpWrapper/";
import { EmailInput } from "../../Elements/EmailInput/";
import { SubmitButton } from "../../Elements/SubmitButton/";

class SignUpItem extends React.Component {
  render() {
    function toastifySuccess() {
      toast("Thanks for signing up!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }

    function sendEmail(e) {
      e.preventDefault();

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
      toastifySuccess();
      e.target.reset();
    }

    return (
      <div>
        <SignUpWrapper onSubmit={sendEmail}>
          <EmailInput
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
          <SubmitButton>{this.props.buttonText}</SubmitButton>
        </SignUpWrapper>
        <ToastContainer />
      </div>
    );
  }
}

export default SignUpItem;
