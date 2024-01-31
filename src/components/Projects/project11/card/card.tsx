import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./Group11Presentation(Rohitha,Shravya).mp4";

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
          Presentation
        </a>
      </div>

      <div className="card-front">
        "Rent A Car"
        <br /> <br /> M.S Acadamic Project <br />Database Management System Design <br /> [Sep23-Nov23]
      </div>
    </div>
  );
};

export default Card;
