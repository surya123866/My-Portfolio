import React from "react";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";

import "./style.scss";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={`${Logo}`} alt="footer-logo" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Blog & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#FF0000"
            icon={<FaYoutube />}
            link="https://www.youtube.com"
          />
          <SocialIcon
            color="#0A66c2"
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/suryakommanapalli/"
          />
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/surya123866"
          />
          <SocialIcon
            color="#f2740d"
            icon={<FaStackOverflow />}
            link="https://www.StackOverFlow.com"
          />
          <SocialIcon
            color="#E84c88"
            icon={<FaInstagram />}
            link="https://www.Instagram.com"
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2022 Surya Satya Kommanapalli | All Rights Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
