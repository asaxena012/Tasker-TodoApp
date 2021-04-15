import React from "react";
import footerWave from "./../Footer/footer-wave.svg";
import linkedinIcon from "./../Footer/linkedin-icon.svg";
import githubIcon from "./../Footer/github-icon.svg";
import twitterIcon from "./../Footer/twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-wave" src={footerWave} alt="" />
      <div className="footer-col-container">
        <p className="footer-text">
          Designed and developed by <span>Aditya Saxena</span>
        </p>
        <div className="footer-row-container">
          <a
            href="https://www.linkedin.com/in/adityasaxena012/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icon" src={linkedinIcon} alt="" />
          </a>
          <a
            href="https://github.com/asaxena012"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icon" src={githubIcon} alt="" />
          </a>
          <a
            href="https://twitter.com/keenAadi"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-icon" src={twitterIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
