import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="d-flex align-items-center">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="" />
          <h4 className="m-0">JessDev,</h4>
        </div>
        <div className={`navbar p-0 `}>
          <Link to="header" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About me
          </Link>
          <Link to="testimonial" smooth={true} duration={500}>
            Testimonials
          </Link>
        </div>
        <div className="but-1 ">
          <Link to="contact" smooth={true} className=" button-1">
            Contact Me
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
