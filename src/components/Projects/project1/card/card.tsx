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
      In the Legacy Uplift initiative, I led the transition of legacy code to a modern cloud infrastructure across 6 environments. As the sole representative from my team, I managed 18 services, ensuring a smooth migration process. I actively monitored message flow, addressing issues promptly, leading to a 20% improvement in system reliability. My estimates and code enhancements resulted in a 15% reduction in migration time. I played a crucial role in establishing new databases, registering Data Source Names (DSNs), contributing to a 25% increase in overall system efficiency. Additionally, my meticulous documentation streamlined collaboration, benefiting other environments and my team.</div>
      <div className="card-front">
        Legacy Code Migration and Cloud Infrastructure Enhancement
        [Accenture(Jan23-Aug23)]
      </div>
    </div>
  );
};

export default Card;
