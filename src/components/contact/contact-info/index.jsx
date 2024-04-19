import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>
        I am open to full-time, part-time, and freelance opportunities. Your
        consideration is greatly appreciated.
      </h4>
      <div className="contact-option">
        <FaPhoneAlt />
        <a
          href="tel:+918465035940"
          className="text"
          style={{ textDecoration: "none" }}
        >
          +91 8465035940
        </a>
      </div>
      <div className="contact-option">
        <MdEmail />
        <a
          href="mailto:suryakommanapalli80@gmail.com"
          className="text"
          style={{ textDecoration: "none" }}
        >
          suryakommanapalli80@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
