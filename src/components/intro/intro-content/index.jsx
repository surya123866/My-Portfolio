import React, { useEffect, useRef } from "react";

import "./style.scss";

import hand from "../../../images/hand.png";
import CallToAction from "../../shared/callToAction";
// import GirlImage from "../../../images/girl.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../utils/helpers";
import { init } from "ityped";

function IntroContent() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      //typeSpeed: 500,
      showCursor: false,
      loop: false,
      strings: ["Surya Satya Kommanapalli"],
    });
  }, []);
  
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
            {/* <span className="big-text">Surya Satya Kommanapalli</span> */}
            <span className="big-text" ref={textRef}></span>
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
          {/* <img src={`${GirlImage}`} alt="girl" /> */}

          <div className="highlightes">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">2 + Years of coding Experience</div>
          </div>
          <div className="highlightes">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">Ex Automation Tester at Virtusa</div>
          </div>
          <div className="highlightes">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">Frontend Devloper at Taxiwars</div>
          </div>
          <div className="highlightes">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              Active Volunteer Frontend Contributor at Kaliper
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroContent;
