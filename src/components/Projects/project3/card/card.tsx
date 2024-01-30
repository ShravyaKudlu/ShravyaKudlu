import React, { MouseEventHandler } from "react";
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />I successfully led the migration from IIB Version 9
        to Version 11 in both DEV and SIT regions, reducing the transition time
        by 20%. By implementing Jenkins for code compilation, we achieved a 25%
        increase in development process efficiency. Establishing separate
        execution groups on a new Linux server resulted in a 30% improvement in
        service management efficiency.
        <br />
        <br />
        Achievements: <br />
        Utilizing UCD (UrbanCode Deploy), I enabled a seamless deployment of
        Version 11 code, reducing deployment time by 15%. This strategic
        implementation contributed to a 25% improvement in overall workflow
        efficiency, ensuring a smoother and more organized development
        environment.{" "}
      </div>
      <div className="card-front">
        "Application Migration to IIB Version 11" <br /><br /> Accenture <br />[Feb21-Oct21]
      </div>
    </div>
  );
};

export default Card;
