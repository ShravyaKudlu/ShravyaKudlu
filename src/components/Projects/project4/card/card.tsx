import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./internship.pdf";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        Led design and development of web applications, boosting user engagement
        by 20% and overall performance by 15%. Successfully delivered a WhatsApp
        Clone app, reducing post-deployment issues by 30% through rigorous
        testing processes.
        <br />
        <br />
        Achievements: <br />
        Deployed WhatsApp Clone app, resulting in a 25% increase in user
        adoption. Improved development efficiency by 20% through proactive
        exploration of trending tools. Integrated cutting-edge features,
        contributing to a 15% enhancement in overall functionality.{" "}
        <a href={Report} target="_blank">
          Certificate
        </a>
      </div>
      <div className="card-front">
      "Intern" <br /><br />UpSkope <br />[Jun19-Jul19]
      </div>
    </div>
  );
};

export default Card;
