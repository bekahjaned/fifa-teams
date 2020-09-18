import React from "react";

import image from "../../data/images/Hero.jpg";
import logo from "../../data/images/CM_Logo.png";

import { HeroWrap } from "../../Elements/HeroWrap/";
import { HeroText } from "../../Elements/HeroText/";
import { HeroImage } from "../../Elements/HeroImage/";
import { HeroContent } from "../../Elements/HeroContent/";

import SignUpItem from "../SignUpItem/";

class Hero extends React.Component {
  render() {
    return (
      <HeroWrap>
        <HeroContent>
          <img className="logo" src={logo} alt="logo" />
          <HeroText>
            <h1 className="title">
              Ideas to elevate your <span>Career Mode</span> journey
            </h1>
            <h2 className="description">
              If you'd like to receive new ideas to enhance your Career Mode
              campaigns and related news, sign up!
            </h2>
            <SignUpItem
              name="email"
              placeholder="Enter your email"
              buttonText="Sign up"
            />
            <p className="email-intent">
              No spam will be sent. Only news and updates about this site and
              new ideas to improve your Career Mode campaigns will be sent.
            </p>
          </HeroText>
          <HeroImage src={image} alt="soccer" />
        </HeroContent>
      </HeroWrap>
    );
  }
}

export default Hero;
