import React from "react";
import Section from "../../shared/section";
import "./styles.scss"

const frontendSkills = [
  {
    title: "Javascript",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "React.js",
    width: "75%",
    percentage: "75%",
  },
];

const backendSkills = [
  {
    title: "Python",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "Node.js/Express",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "MySQL",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "MongoDB",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "API",
    width: "75%",
    percentage: "75%",
  },
];

const SkillLevels = () => {
  const SkillItem = ({ title, percentage }) => {
    return (
      <div className="skill-data">
        <div className="skill_title">
          <h6>{title}</h6>
          <span className="percentage">{percentage}</span>
        </div>
        <div className="skill_bar">
          <span
            className="skill_bar-percentage"
            style={{ width: `${percentage}` }}
          ></span>
        </div>
      </div>
    );
  };
  return (
    <Section background="dark">
      <div className="skills_wrapper">
        <h2>Skill Levels</h2>
        <div className="fronted_skill">
          {frontendSkills.map((item, index) => (
            <SkillItem
              key={index}
              title={item.title}
              percentage={item.percentage}
            />
          ))}
        </div>

        <div className="backend_skill">
          {backendSkills.map((item, index) => (
            <SkillItem
              key={index}
              title={item.title}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillLevels;
