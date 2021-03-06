import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-box">
        <div id="main-content">
          <div id="image1-container">
            <div id="image1">
              <p id="splash-image-titles">Financial Freedom Calculators</p>
            </div>
          </div>
          <div id="image2-container">
            <div id="image2">
              <p id="splash-image-titles">Community Forums</p>
            </div>
          </div>
          <div id="image3-container">
            <div id="image3">
              <p id="splash-image-titles">Spending History Tracker</p>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="about-links">
            <p className="about-name">BRIAN WAN</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/bcwan/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="white" />
            </a>
            <a className="github-link" href="https://github.com/bcwan" target="_blank">
              <FaGithubSquare size={25} fill="white" />
            </a>
          </div>
          <div className="about-links">
            <p className="about-name">SHAPHEN PANGBURN</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/shaphen/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="white" />
            </a>
            <a className="github-link" href="https://github.com/Shaphen" target="_blank">
              <FaGithubSquare size={25} fill="white" />
            </a>
          </div>
          <div className="about-links">
            <p className="about-name">NATALIE CHEN</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/nataliecake/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="white" />
            </a>
            <a className="github-link" href="https://github.com/NatalieCC" target="_blank">
              <FaGithubSquare size={25} fill="white" />
            </a>
          </div>
          <div className="about-links">
            <p className="about-name">EDDIE ROSAS</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/eddie-rosas-45ba6a13a/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="white" />
            </a>
            <a className="github-link" href="https://github.com/EddieRosas" target="_blank">
              <FaGithubSquare size={25} fill="white" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
