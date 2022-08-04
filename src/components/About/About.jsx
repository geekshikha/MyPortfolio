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
        details="Hello, this is Shikha Singh, welcome to my portfolio website"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}

          <h3 className="about-sub-head">Developer</h3>
          <div className="about-details">
            <p>
              I am a Full Stack Developer looking for Junior level Full
              Stack/Front End Developer opportunities. I have worked as a
              Teacher and now I have reskilled myself as a Full Stack Developer
              since I have been always passionate about web development.
            </p>
            <p>
              I am constantly upgrading my knowledge learning the latest
              technologies, I am passionate about front-end technologies and
              have been following my passion through different online courses.
              Recently, I graduated from an intensive 10-weeks long Full stack
              developer bootcamp from Codaisseur. You can have a look at
              projects I built in projects section.
            </p>
            <p>
              I am a quick learner and I always take efforts in upgrading my
              technology stack. I am a creative, fun, passionate coder who likes
              to tackle challenges and aims for quality and perfection in my
              work.
            </p>
            <p>
              I am now seeking a job that will allow me to use and grow my
              technical and creative skills, as a full-stack developer!
            </p>
          </div>
          {/* Sub section 2 */}
          <h3 className="about-sub-head">Teacher</h3>
          <p className="about-details">
            Teaching is my passion, till now, I've mentor students about
            machines.
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink phrase="Check out my projects!" toAddress="/projects" />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
