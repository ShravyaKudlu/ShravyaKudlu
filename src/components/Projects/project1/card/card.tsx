import React, { MouseEventHandler } from "react";
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">eiogbeirvbipervpiejnvpeijrvbpieurvpiervb evkebrvierbvp9uiever rveirbveirhviu</div>
      <div className="card-front">
        <p>Legacy Code Migration and Cloud Infrastructure Enhancement
        part of the project (Jan23-Aug23)</p>
      </div>
    </div>
  );
};

export default Card;
