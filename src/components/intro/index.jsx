import React from "react";

import "./style.scss"
import Navigation from './navigation-bar'
import IntroContent from "./intro-content";

import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";

function Intro() {
  return (
    <div className="intro-section">
      <div className="vector-bg" id="parallax"></div>
      <img className="cloud" src={`${cloud}`} alt="cloud" />
      <img className="cloud-soft" src={`${cloudSoft}`} alt="cloud-soft" />
      <div className="content">
        <Navigation />
        <IntroContent/>
      </div>
    </div>
  );
}
export default Intro;
