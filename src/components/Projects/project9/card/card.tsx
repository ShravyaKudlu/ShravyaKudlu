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
        "Amazon AWS S3 Objects"
        <br /> <br /> M.S Acadamic Project <br />Internet And Higher Level Protocols <br /> [Oct23-Dec23]
      </div>
    </div>
  );
};

export default Card;
