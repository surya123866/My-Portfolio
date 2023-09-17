import React from "react";

import "./style.scss";
import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Any Question? Free to Contact"
      background="light"
    >
      <div className="contact-content-info">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
