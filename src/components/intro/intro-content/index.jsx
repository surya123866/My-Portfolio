import React from "react";

import "./style.scss";

import hand from "../../../images/hand.png";
import CallToAction from "../../shared/callToAction";
import GirlImage from "../../../images/girl.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../utils/helpers";

function IntroContent() {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={`${hand}`} alt="hand icon" />
              </span>
              <span className="text">, i Am</span>
            </span>
            <span className="big-text"> Surya</span>
          </h1>
          <p>
            I am a passionate professional with a background in mechanical
            engineering and a keen interest in software development
          </p>
          <CallToAction
            text="Contact me"
            action={() => {
              scrollToSection("contact");
            }}
          />
        </div>
        <div className="right-col">
          <img src={`${GirlImage}`} alt="girl" />

          <div className="highlightes horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">2000+ Hours of coding Experience</div>
          </div>

          <div className="highlightes verticle">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>Ex Virtusian</span>
              <span>Automation Tester</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroContent;
