import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./NJITDuoApp.webm";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />I developed a robust two-factor authentication
        system using Java and Tomcat servers having DUO app like functionalities,
        featuring an authenticator and verifier for secure information exchange.
        This project expanded my expertise in Java and Tomcat while deepening my
        understanding of network security and internet protocols.
        <br />
        <br />
        Achievements: <br />
        Implementing strategic design choices, such as generating random and
        non-sequential numbers, enhanced the system's security. The verifier's
        disconnection post-initial key exchange streamlined communication,
        demonstrating practical application of advanced security measures in
        real-world scenarios.
        <a href={Report} target="_blank">
          Demo
        </a>
      </div>

      <div className="card-front">
        "DUO Two Factor Authentication"
        <br /> <br /> M.S Acadamic Project <br />
        Internet And Higher Level Protocols <br /> [Sep23-Nov23]
      </div>
    </div>
  );
};

export default Card;
