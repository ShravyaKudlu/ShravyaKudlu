import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./Group11Presentation(Rohitha,Shravya).mp4";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        In the project aimed at comprehending SQL queries and relational
        database design, I actively participated in using Django with MySQL. We
        employed DBeaver for connecting to and visualizing the data, along with
        creating and executing queries directly in the database.
        <br />
        <br />
        Achievements: <br />
        Successfully achieving the project goal, we gained a deeper
        understanding of SQL queries, database design, and practical application
        using Django with MySQL. The utilization of DBeaver enhanced our ability
        to connect, visualize, and execute queries efficiently, contributing to
        our proficiency in relational databases.
        <a href={Report} target="_blank">
          Presentation
        </a>
      </div>

      <div className="card-front">
        "Rent A Car"
        <br /> <br /> M.S Acadamic Project <br />
        Database Management System Design <br /> [Sep23-Nov23]
      </div>
    </div>
  );
};

export default Card;
