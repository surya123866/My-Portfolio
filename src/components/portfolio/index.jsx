import React, { useState } from "react";

import "./style.scss";
import Section from "../shared/section";
import Filter from "./filter";
import Showcase from "./showcase";

const projectsData = [
  {
    id: 1,
    name: "Movix App",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/MovixAppImg.png"),
      link: "https://movix-app-e1f6b.web.app",
    },
  },
  {
    id: 2,
    name: "Portfolio Website",
    tags: ["web-app", "front-end"],
    media: {
      thumbnail: require("../../images/portfolio/PortfoioImg.png"),
      link: "https://myportfolio-dbf4b.web.app",
    },
  },
  {
    id: 3,
    name: "Movies App",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/MovisAppImg.png"),
      link: "https://suryamoviesapp.ccbp.tech",
    },
  },
  {
    id: 4,
    name: "Jobby App",
    tags: ["web-app", "mobile-app", "product"],
    media: {
      thumbnail: require("../../images/portfolio/JobbyApp.png"),
      link: "https://suryajobbyapp.ccbp.tech",
    },
  },
  {
    id: 5,
    name: "NxtTrendz App",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/NxtTrendz.png"),
      link: "https://suryanxttrendz.ccbp.tech/login",
    },
  },
  {
    id: 6,
    name: "Nxt Watch",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/nxtWatch.png"),
      link: "https://suryanxtwatch.ccbp.tech/login",
    },
  },
  {
    id: 7,
    name: "Green&RedGame",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/GreenLightRedLightGame.png"),
      link: "https://react-hosting-30a94.web.app",
    },
  },
  {
    id: 8,
    name: "NotInLine",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/NotInLine.png"),
      link: "https://notinline-c0e19.web.app",
    },
  },
  {
    id: 9,
    name: "OTP-Authentication",
    tags: ["web-app", "front-end", "back-end", "full-stack"],
    media: {
      thumbnail: require("../../images/portfolio/otp-Authentcation.png"),
      link: "https://otp-authentication-5847a.web.app",
    },
  },
  {
    id: 10,
    name: "JOB-Search",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/JobsSearchingApp.png"),
      link: "https://jobssearchingapplication.web.app",
    },
  },
  {
    id: 11,
    name: "Movies-Voting",
    tags: ["web-app", "front-end", "product"],
    media: {
      thumbnail: require("../../images/portfolio/movies-voting.png"),
      link: "https://moviesvotingapp.web.app/",
    },
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");
    setTimeout(() => {
      if (tag !== "all") {
        const filterProjects = projectsData.filter((f) => f.tags.includes(tag));
        setProjects(filterProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    });
  };

  return (
    <Section id="portfolio" title="Check my portfolio" background="light">
      <div className="portfolio-content-wrapper">
        <Filter filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;
