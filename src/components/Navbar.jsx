import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="d-flex align-items-center">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="" />
          <h4 className="m-0">JessDev,</h4>
        </div>

        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? "✖" : "☰"}
        </button>

        <div className={`navbar-links d-flex  ${isOpen ? `open` : ``} `}>
          <div className="navbar p-0">
            <Link
              to="header"
              smooth={true}
              duration={500}
              onClick={toggleNavbar}
            >
              Home
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={toggleNavbar}
            >
              Portfolio
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleNavbar}
            >
              About me
            </Link>
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              onClick={toggleNavbar}
            >
              Testimonials
            </Link>
          </div>

          <div className="but-1 d-md-none">
          <Link
            to="contact"
            smooth={true}
            className=" button-1 "
            onClick={toggleNavbar}
          >
            Contact Me
          </Link>
        </div>
        </div>
        <div className="but-1 d-none d-md-block">
          <Link
            to="contact"
            smooth={true}
            className=" button-1 "
            onClick={toggleNavbar}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
