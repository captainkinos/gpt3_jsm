import React from "react";
import logo from "./../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">
          <a href="#">Request Early Access</a>
        </button>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content__logo">
          <img src={logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb,
            <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-content__links">
          <h3>Links</h3>
          <div>
            <a href="#overons">Overons</a>
            <a href="#social-media">Social Media</a>
            <a href="#counters">Counters</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="gpt3__footer-content__company">
          <h3>Company</h3>
          <div>
            <a href="#terms-conditions">Terms & Conditions</a>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="gpt3__footer-content__GetInTouch">
          <h3>Get in touch</h3>
          <div>
            <a href="#address">
              Crechterwoord K12
              <br />
              182 DK Alknjkcb
            </a>
            <a href="#call">085-132567</a>
            <a href="#email">info@payme.net</a>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
