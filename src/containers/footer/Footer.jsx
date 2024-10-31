import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <div className="gradient__text">
          Step into the future, do you want to take the chance
        </div>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Address</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>social media</p>
          <p>Counters</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>privacy Policy</p>
          <p>Counters</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Terms & Conditions</p>
          <p>+124-685959</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>copyright 2024 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
