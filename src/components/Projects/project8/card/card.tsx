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
          Demo
        </a>
      </div>

      <div className="card-front">
        "DUO Two Factor Authentication"
        <br /> <br /> M.S Acadamic Project <br />Internet And Higher Level Protocols <br /> [Sep23-Nov23]
      </div>
    </div>
  );
};

export default Card;
