import React, { MouseEventHandler } from "react";
import "./card.css";
//import Report from "./IHLPS3Bucket.webm";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Development: <br />
        In pursuit of understanding microservices and their application, I
        developed a simple post and comments app. The primary goal was to host
        these services on different server ports, ensuring that even if the post
        service stops, the comments service remains functional, allowing users
        to view previous posts. Additionally, I introduced a moderation service
        to filter out specific words, such as "orange," from comments.
        <br />
        Achievements: <br />
        Successfully implemented a microservices architecture, demonstrating an
        understanding of its application. The creation of a post, comments, and
        moderation service showcased the ability to design and deploy
        interconnected services, ensuring continued functionality and user
        experience, even in the event of service interruptions.

      </div>

      <div className="card-front">
        "Tweet_Blog_Post App Part1"
        <br /> <br /> M.S Personal Project <br />
        Microservices <br /> [Oct23-Dec23]
      </div>
    </div>
  );
};

export default Card;
