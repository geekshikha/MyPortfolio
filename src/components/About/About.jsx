import React from "react";

import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import aboutAnime from "../../assets/about-me.gif";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        details="Hello! I am Shikha Singh. Welcome to my portfolio website."
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}

          <h3 className="about-sub-head">Developer</h3>
          <div className="about-details">
            <p>
              I am a Full Stack Developer looking for Junior level Full
              Stack/Front End Developer opportunities. Having worked as an
              instructor and mentor in the past, I have now reskilled myself to
              a Full Stack Developer.
            </p>
            <p>
              I have always been interested in web development and am
              continuously upgrading my knowledge about the latest web and
              front-end development technologies through various online courses
              and personal projects. Recently, I graduated from a 10-week
              intensive Full Stack Developer bootcamp from Codaisseur, which has
              helped me polish my skills further. Some of the projects that I
              have developed can be found under the projects section below.
            </p>
            <p>
              I am a quick learner and eager to enhance my skills and knowledge.
              A creative and fun loving coder, I enjoy tackling challenges,
              while aiming for quality of work. I am now looking for an
              opportunity that leverages and enhances my technical as well as
              creative skills, as a full stack developer.
            </p>
          </div>
          {/* Sub section 2 */}
          <h3 className="about-sub-head">Instructor</h3>
          <p className="about-details">
            In the past, I have been an instructor and mentor to industrial
            trainees about lathe machines and other mechanical tools.
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink phrase="Check out my projects" toAddress="/projects" />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
