import React, { MouseEventHandler } from 'react';
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Back</div>
      <div className="card-front">Front</div>
    </div>
  );
}

export default Card;
