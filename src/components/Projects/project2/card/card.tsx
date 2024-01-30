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
        Contribution: <br />
        Contribution: During my tenure, I played a pivotal role in successfully
        implementing both Home & Landlord insurance and Personal Vehicle
        insurance projects for the esteemed client QBE Insurance. Adhering to
        Agile principles, I orchestrated the development cycles, achieving
        timely releases and reducing the typical timeline by 30%.
        <br />
        <br />
        Achievements: <br />
        My strategic management resulted in a significant 20% decrease in
        post-release issues across both insurance products. Active participation
        in key roles during releases, overseeing deployment plans, and prompt
        bug resolution demonstrated my comprehensive involvement in the project
        lifecycle, ensuring efficient delivery and enhanced product quality.{" "}
      </div>
      <div className="card-front">
        "Strategic Application Development for Product Expansion" <br /> <br />
        Accenture <br />[Dec21-Dec22]
      </div>
    </div>
  );
};

export default Card;
