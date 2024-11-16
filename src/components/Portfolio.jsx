import React from "react";
import github from "../assets/mdi_github.png";
import firstport from "../assets/first-port.png";
import secport from "../assets/sec-port.png";
import thirdport from "../assets/third-port.png";
import arrow from "../assets/green arrow.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="d-flex justify-content-between align-items-center">
        <div className="recent">
          <p className="m-0">Recent Projects</p>
          <h5 className="m-0">My Portfolio</h5>
        </div>
        <a
          href="https://github.com/okekejessica"
          target="_blank"
          className="d-flex git"
        >
          <img src={github} alt="" />
          <p className="m-0">Visit My GitHub</p>
        </a>
      </div>
      <div className="portfolio-text">
        <div className="port">
          <img src={firstport} alt="" className="port-image" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">Ahuse</h4>
              <p className="m-0">
                Ahuse simplifies finding rental homes with user-friendly search,
                detailed listings, and direct landlord communication.
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Website</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="port">
          <img src={secport} alt="" className="port-image"/>
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">App Dashboard</h4>
              <p className="m-0">
                The app dashboard demo project visualizes project metrics,
                enabling effective monitoring and customizable user experience.{" "}
              </p>
            </div>

          
            <a href="#" className="web">
              <h5 className="m-0">View Project</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="port">
          <img src={thirdport} alt="" className="port-image" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">Easy Rent</h4>
              <p className="m-0">
                Easy Rent simplifies the rental process, offering efficient
                management solutions for both renters and landlords.
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Website</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
