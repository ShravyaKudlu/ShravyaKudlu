import React, { MouseEventHandler } from "react";
import "./card.css";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Objective: Gain proficiency in Kubernetes and Docker by transforming the
        tweet_blog_post microservices into a unified Pod for streamlined
        deployment at the server level.
      </div>

      <div className="card-front">
        "Tweet_Blog_Post App Part2"
        <br /> <br /> M.S Personal Project <br />
        Docker-Kubernetes <br /> [Jan24-Present]
      </div>
    </div>
  );
};

export default Card;
