import React, { MouseEventHandler } from "react";
import "./card.css";
//import Report from "./Schrodingers.pdf";

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
        
        <a href="https://github.com/myNJITprojects/WebCommerce_IS_601_103" target="_blank">
          RepoLink
        </a>
      </div>

      <div className="card-front">
        "ECommerce Website"
        <br /> <br /> M.S Acadamic Project <br />Web Development <br /> [Sep23-Dec23]
      </div>
    </div>
  );
};

export default Card;
