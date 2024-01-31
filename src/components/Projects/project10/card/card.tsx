import React, { MouseEventHandler } from "react";
import "./card.css";
//import Report from "./Schrodingers.pdf";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        Contributed to a web development project focused on creating a winter
        sweater e-commerce site. Built a backend with six JSON objects using
        Django, and deployed it with an SQLite database. Utilized HTML, CSS with
        Bootstrap, JavaScript with jQuery and Node for the frontend.
        <br />
        <br />
        Achievements: <br />
        Successfully executed the project, gaining hands-on experience with
        various web development components and technologies, resulting in a
        functional and responsive sweater-selling website.
        <a
          href="https://github.com/myNJITprojects/WebCommerce_IS_601_103"
          target="_blank"
        >
          RepoLink
        </a>
      </div>

      <div className="card-front">
        "ECommerce Website"
        <br /> <br /> M.S Acadamic Project <br />
        Web Development <br /> [Sep23-Dec23]
      </div>
    </div>
  );
};

export default Card;
