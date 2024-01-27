import React, { MouseEventHandler } from 'react';
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Gained valuable experience in full-stack web application development, encompassing design, structure, and testing processes, utilizing modern software tools.
Developed a WhatsApp Clone web application, implementing features similar to WhatsApp functionalities.
Proactively explored trending tools and technologies, actively engaging with open-source code to enhance my skill set.
This experience empowered me with efficient task completion methods.</div>
      <div className="card-front">Intern, [UpSkope(Jun19-Jul19)]</div>
    </div>
  );
}

export default Card;
