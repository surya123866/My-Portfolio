import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./style.scss";

import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../../components/shared/callToAction";
import SuryaKommanpalli from "../download/Surya Kommanapalli Resume.pdf";
import SkillLevels from "./skillLevels";


const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={`${TechIcons}`} alt="JS,React,HTML,CSS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Iam a versatile Full-Stack Developer with a background in Mechanical
            Engineering. My technical expertise includes React.js, JavaScript,
            Node.js, Express.js, SQL, MongoDB, Firebase, and Python, all honed
            through intensive training at NXT Wave. With experience as an
            automation tester at Virtusa, I excel in problem-solving and
            attention to detail. I'm driven by a passion for continuous learning
            and bring a holistic engineering mindset to every project. I'm
            actively seeking opportunities in Full-Stack, Frontend, or Backend
            development and welcome collaboration for innovative solutions.
          </p>
          <a
            href={SuryaKommanpalli}
            download="Surya Kommanapalli Resume"
            style={{ textDecoration: "none" }}
          >
            <CallToAction
              text="Download CV"
              icon={<AiOutlineCloudDownload />}
            />
          </a>
        </div>
      </div>
      {/* <SkillLevels/> */}
    </Section>
  );
};

export default Skills;
