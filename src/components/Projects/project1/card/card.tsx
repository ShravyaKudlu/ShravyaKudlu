import React, { MouseEventHandler } from "react";
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />Led Legacy Uplift initiative, transitioning legacy code to
        modern cloud infrastructure across six environments. Managed 18
        services, ensuring a seamless migration and addressing issues promptly
        for a 20% improvement in system reliability. Played a key role in
        establishing new databases, contributing to a 25% increase in system
        efficiency.
        <br /><br />
        Achievements: <br />Reduced migration time by 15% through estimates and code
        enhancements, significantly impacting project timelines. Meticulous
        documentation streamlined collaboration, benefiting team and other
        environments, leaving a lasting impact on knowledge transfer and
        communication efficiency.{" "}
      </div>
      <div className="card-front">
        "Legacy Code Migration and Cloud Infrastructure Enhancement"
        <br /><br /> Accenture <br />[Jan23-Aug23]
      </div>
    </div>
  );
};

export default Card;
