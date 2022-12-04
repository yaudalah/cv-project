import React from "react";
import "./style.css";
import GithubIcon from "../../assets/github.svg";
import LinkedIcon from "../../assets/linkedin.svg";

const Header = () => {
  return (
    <header className="center">
      <div className="container">
        <div className="profile-picture">
          <img crossOrigin="anonymous" src="profile-pic.jpg" loading="eager" />
        </div>
        <div className="profile-summary">
          <h1>Hardi Syafrizal</h1>
          <hr />
          <div className="profile-stats">
            <span>
              <b>Age:</b> 22
            </span>
            <span>
              <b>E-mail:</b> hardisyafrizal@gmail.com
            </span>
          </div>
          <div className="profile-bio">
            I personally really like learning new things. I always want to know
            everything I haven't known. I like to hang out and work in team. I'm
            on learning stage at speak in front of many people, especially in
            terms of presentations. I interested in databases, websites, and
            mobile apps.
            <div className="profile-link">
              <a
                href="https://github.com/yaudalah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="github" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/in/hardi-syafrizal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIcon} alt="linkedin" style={{ maxWidth: 30 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
