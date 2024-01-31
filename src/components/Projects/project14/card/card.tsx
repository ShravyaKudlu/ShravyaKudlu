import React, { MouseEventHandler } from "react";
import "./card.css";


interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Accomplished a comprehensive understanding of Docker through the
        creation of a prototype. Documenting the process contributes to a
        valuable resource for future usage, showcasing the ability to apply
        Docker concepts effectively.
        <a href="https://github.com/ShravyaKudlu/dockerprototype" target="_blank">
          RepoLink
        </a>
      </div>

      <div className="card-front">
        "Understanding Docker"
        <br /> <br /> M.S Personal Project <br />
        Docker <br /> [Dec24-Jan24]
      </div>
    </div>
  );
};

export default Card;
