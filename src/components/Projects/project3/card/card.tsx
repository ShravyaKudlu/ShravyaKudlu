import React, { MouseEventHandler } from 'react';
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">I spearheaded the migration effort from IIB Version 9 to Version 11 in both the DEV and SIT regions. In this transition, we employed Jenkins as a valuable tool for code compilation and building, streamlining our development processes. Additionally, I established separate execution groups on a newly configured Linux server to manage various services more effectively. To ensure efficient code deployment, we utilized UCD (UrbanCode Deploy) to seamlessly deploy Version 11 code to their respective groups, contributing to a smoother and more organized development environment .</div>
      <div className="card-front">Application Migration to IIB Version 11 [Accenture(Feb21-Oct21)]</div>
    </div>
  );
}

export default Card;
