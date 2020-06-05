import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-box">
        <div id="main-content">
          <div id="image">
            {/* <img src="../../photos/FLAME-logo/default.png" alt="lol" /> */}
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
              <FaLinkedin size={25} fill="black" />
            </a>
            <a className="github-link" href="https://github.com/bcwan" target="_blank">
              <FaGithubSquare size={25} fill="black" />
            </a>
          </div>
          <div className="about-links">
            <p className="about-name">SHAPHEN PANGBURN</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/shaphen/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="black" />
            </a>
            <a className="github-link" href="https://github.com/Shaphen" target="_blank">
              <FaGithubSquare size={25} fill="black" />
            </a>
          </div>
          <div className="about-links">
            <p className="about-name">NATALIE CHEN</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/nataliecake/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="black" />
            </a>
            <a className="github-link" href="https://github.com/NChen666" target="_blank">
              <FaGithubSquare size={25} fill="black" />
            </a>
          </div>
          <div className="about-links">
            <p className="about-name">EDDIE ROSAS</p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/eddie-rosas-45ba6a13a/"
              target="_blank"
            >
              <FaLinkedin size={25} fill="black" />
            </a>
            <a className="github-link" href="https://github.com/EddieRosas" target="_blank">
              <FaGithubSquare size={25} fill="black" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
