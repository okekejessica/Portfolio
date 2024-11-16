import React from "react";
import profiletwo from "../assets/About Me.png";

const About = () => {
  return (
    <div id="about" className="d-flex align-items-center">
      <div className="aboutme">
        <img src={profiletwo} alt="" />
      </div>
      <div className="about-text">
        <div className="first-abttext">
          <p className="m-0">About</p>
          <h4 className="m-0">About Me</h4>
        </div>
        <p className="about-para m-0">
          Hi, I'm Jessica, a passionate web developer dedicated to creating
          innovative and user-friendly solutions. With a focus on responsive
          design, I ensure seamless experiences across all devices. I love
          collaborating and continuously learning to stay updated with industry
          trends. Outside of work, I enjoy reading and exploring new
          technologies. Let's create something amazing together.
        </p>
      </div>
    </div>
  );
};

export default About;
