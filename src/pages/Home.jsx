import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import LapTopIcon from "@material-ui/icons/Laptop";
import DeveloperIcon from "@material-ui/icons/DeveloperMode";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Aleksandar</h2>
        <div className="prompt">
          <p>A Front-End Developer with passion and ambition to learning and creating</p>
          <CodeIcon />
          <LapTopIcon />
          <DeveloperIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>

            <li>- HTML5</li>
            <li>- Cascading Style Sheets (CSS)</li>
            <li>- Bootstrap</li>
            <li>- Figma (Software)</li>
            <li>- JavaScript</li>
            <li>- ReactJS</li>
            <li>- Redux</li>
          </li>

          <li className="item">
            <h2>Programing Language</h2>
            <li>- JavaScript</li>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
