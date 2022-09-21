import React from "react";
import "../styles/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Contact Me</h3>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/aleksandar-bezhanikj-625628247/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/AlekBezo/AlekBezo" target="_blank">
          <GitHubIcon />
        </a>
        <a href="mailto: aleksandarbezanic@yahoo.com">
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2022</p>
    </div>
  );
};

export default Footer;
