import React from "react";
import Card from "../Card/Card";
import Projects from "../../Services/projects.json";
import Educations from "../../Services/educations.json";
import "./style.css";
import Education from "../Content/Education/Education";
import Oraganization from "../Content/Organization/Oraganization";

const Body = () => {
  return (
    <div className="layout">
      <aside className="body__container">
        <div>
          <h1>Projects</h1>
          <Card {...Projects[0]} />
          <Card {...Projects[1]} />
        </div>
      </aside>
      <main className="body__container">
        <div className="body__content">
          <h1>Education</h1>
          <Education {...Educations[0]} />
          <Education {...Educations[1]} />

          <h1>Organization</h1>
          <Oraganization />

          <h1>Skills</h1>
          <ul style={{ fontSize: "14pt" }}>
            <p>Javascript, Node.js</p>
            <p>Python, Java</p>
            <p>React, Springboot</p>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Body;
