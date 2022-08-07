import React from "react";

import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { projectsData } from "../../assets/projectsData";
import ProjectsCard from "../Projects/ProjectsCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects"
        details="The projects I built during my learning journey, do check them out!"
      />
      <div className="project-cards-container">
        {projectsData.map((proj) => {
          return (
            <ProjectsCard
              projectName={proj.projectName}
              projectDescription={proj.projectDescription}
              imageUrl={proj.imageUrl}
              projectUrl={proj.projectUrl}
              githubRepo={proj.githubRepo}
            />
          );
        })}
      </div>
      <FooterLink phrase="Get in touch" toAddress="/contact" />
    </div>
  );
};

export default Projects;
