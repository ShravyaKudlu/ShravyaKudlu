import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./Schrodingers.pdf";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
         
        <br />
        <br />
        Achievements: <br />
        
        <a href={Report} target="_blank">
          Certificate
        </a>
      </div>

      <div className="card-front">
        "Hacking the 24 Gender Stack"
        <br /> <br /> Schrodinger <br /> [14 Jan24-15 Jan24]
      </div>
    </div>
  );
};

export default Card;
