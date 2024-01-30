import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./project-Report2.pdf";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        Led the development of a system extracting heart rate from facial skin
        color variations, utilizing a camera-based approach for accurate
        readings. Implemented algorithms such as Fast Fourier Transformation,
        Principal Component Analysis, and Independent Component Analysis for
        noise-free results.
        <br />
        <br />
        Achievements: <br />
        Successfully implemented a reliable and non-intrusive heart rate
        monitoring system, demonstrated through accurate analog signal graphs.
        Applied the innovation to certified psychological tests, offering
        discreet and precise monitoring without subject awareness. This
        achievement highlights the potential for advancing medical and
        psychological monitoring through unobtrusive heart rate extraction.
        <a href={Report} target="_blank">
          Report
        </a>
      </div>

      <div className="card-front">
         "Design and Development of a Software to Detect
        Heart Rate Using Image processing"<br /> <br /> B.E CapstoneProject <br /> [Aug19-Apr20]
      </div>
    </div>
  );
};

export default Card;
