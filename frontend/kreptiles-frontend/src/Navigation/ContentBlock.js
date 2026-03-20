import React from "react";
import "./css/ContentBlock.css";
import AboutMe from "./AboutMe";
import Reptiles from "./Reptiles";
import CrochetProjects from "./CrochetProjects";

export default function ContentBlock({ section=1 }) {

    switch(section) {
      case 0:
        return (
          <div className="main-content">
            <div className="about-card-container">
              <AboutMe />
            </div>
          </div>
      );
      case 1:
        return <Reptiles></Reptiles>;
      case 2:
        return <CrochetProjects></CrochetProjects>;
      default:
        return (
          <div className="main-content">
            <div className="about-card-container">
              <AboutMe />
            </div>
          </div>
      );
    }
    
}