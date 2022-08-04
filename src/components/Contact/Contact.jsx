import React from "react";
import { useForm } from "@formspree/react";

import Header from "../Header/Header";
import Footer from "../FooterLink/FooterLink";
import contactAnime from "../../assets/Digital tools.gif";
import github from "../../assets/gh.png";
import linkedin from "../../assets/li.png";
import ContactReply from "../Contact/ContactReply";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjbrpbb");
  if (state.succeeded) {
    return <ContactReply />;
  }
  return (
    <div className="section-container">
      <Header
        heading="Get in touch"
        details="Hey, found this interesting? Feel free to drop me an email!"
      />
      <div className="contact-main">
        <div className="contact-main-left">
          <img src={contactAnime} alt="contact me" className="contact-vector" />
        </div>
        <div className="contact-main-right">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                name="email"
                className="input-box email-input"
              />
              <textarea
                type="text"
                placeholder="Your message"
                className="input-box body-input"
                name="message"
              />
              <button
                type="submit"
                className="contact-btn"
                disabled={state.submitting}
              >
                Contact me
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="social-icons-container">
        <a
          href="https://github.com/geekshikha"
          target="blank"
          className="social-icon"
        >
          <img src={github} alt="github icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/sssinghshikha8"
          className="social-icon"
          target="blank"
        >
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
      <Footer phrase="Check out my projects !" toAddress="/projects" />
    </div>
  );
};

export default Contact;

// <form className="contact-form" onSubmit={handleSubmit}>

// disabled={state.submitting}
