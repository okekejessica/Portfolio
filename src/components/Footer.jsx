import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import linked from "../assets/LinkedIn.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="d-flex justify-content-between  main-foot">
          <div className="logo d-flex align-items-center">
            <img src={logo} alt="" />
            <h4 className="m-0">JessDev,</h4>
          </div>
          <div className="foot-link">
            <Link to="header">Home</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="about">About me</Link>
            <Link to="contact">Contact</Link>
            <Link to="testimonial">Testimonials</Link>
            <Link to="portfolio">Portfolio</Link>
          </div>
          <div className="socials">
            <a href="https://web.facebook.com/jessica.okeke.904/">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/jessica_okeke01/">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.instagram.com/jessica_okeke01/">
              <img src={linked} alt="" />
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between made">
          <h5 className="m-0">Made with 💖 by Jessica</h5>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
