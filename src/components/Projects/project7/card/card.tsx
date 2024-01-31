import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./Schrodingers.pdf";
import Demo from "./Hackthon.webm";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        At Schrödinger, a New York-based chemical simulation software company, I
        played a vital role in a hackathon to develop a web application using
        the RDKit library. Using Django, I led the integration of frontend UI
        with the backend, enhancing the application's utility for chemists.
        <br />
        <br />
        Achievements: <br />
        Recognized as champions of compound crafting, our team at Schrödinger
        created a practical application displaying chemical elements and their
        perturbations. The application, including a demo page, served as a
        valuable tool for chemists, highlighting industry inspirations.
        <a href={Report} target="_blank">
          Certificate
        </a>
        <a href={Demo} target="_blank">
          Demo
        </a>
      </div>

      <div className="card-front">
        "Hacking the 24 Gender Stack"
        <br /> <br /> Schrödinger <br /> [14 Jan24-15 Jan24]
      </div>
    </div>
  );
};

export default Card;
