import React, { MouseEventHandler } from 'react';
import "./card.css";
import "./flip-transition.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">During my tenure, I meticulously analyzed requirements and technical designs for Home & Landlord insurance and Personal Vehicle insurance products. Implementing both projects within four development cycles, I adhered to Agile principles, achieving timely and successful releases. Additionally, I managed critical message flows, played key roles in various releases, and oversaw deployment plans and bug resolution efforts, showcasing my comprehensive involvement in the project's lifecycle. The efficient delivery marked a 30% reduction in the typical development timeline, with a 20% decrease in post-release issues due to proactive management.</div>
      <div className="card-front">Product Expansion and Release Management [Accenture(Nov21-Dec22)]</div>
    </div>
  );
}

export default Card;
