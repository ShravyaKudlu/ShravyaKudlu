import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./IHLPS3Bucket.webm";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        Led the development of S3, mirroring Amazon AWS S3, implementing key
        functionalities using primitive Java datatypes and S3-template.java
        provided. Supported diverse URI formats for local and remote file
        requests, ensuring efficient handling of parameters and graceful
        management of junk requests.
        <br />
        <br />
        Achievements: <br />
        Achieved optimal performance with S3, meeting strict 5-second request
        fulfillment for both local and remote scenarios. Maintained memory
        efficiency, operating within a 2MB heap limit. Ensured data security by
        avoiding local storage of remotely fetched files. Demonstrated expertise
        in network protocols, AWS S3 emulation, and the ability to develop
        resource-efficient systems under real-world constraints.
        <a href={Report} target="_blank">
          Demo
        </a>
      </div>

      <div className="card-front">
        "Amazon AWS S3 Objects"
        <br /> <br /> M.S Acadamic Project <br />
        Internet And Higher Level Protocols <br /> [Oct23-Dec23]
      </div>
    </div>
  );
};

export default Card;
