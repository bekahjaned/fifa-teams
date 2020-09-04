import React from "react";

import image from "../../data/images/jeshoots-com-eCktzGjC-iU-unsplash.jpg";

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
          <h2 className="name">CM Toolbox</h2>
          <HeroText>
            <h1 className="title">Ideas to elevate your Career Mode journey</h1>
            <h2 className="description">
              If you'd like to receive new ideas to enhance your Career Mode
              campaigns and related News, sign up!
            </h2>
            <SignUpItem
              placeholder="Enter your email"
              type="email"
              buttonText="Sign up"
            />
            <p className="email-intent">
              I will only use your email to share news about updates to this
              website and new ideas to improve your Career Mode campaigns. No
              spam will be sent.
            </p>
          </HeroText>
          <HeroImage src={image} alt="soccer" />
        </HeroContent>
      </HeroWrap>
    );
  }
}

export default Hero;
