import React, { MouseEventHandler } from "react";
import "./card.css";
import Report from "./project-report1.pdf";

interface CardProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        Contribution: <br />
        Analyzed customer reviews on a women's clothing e-commerce platform
        using Multinomial Naive Bayes. Visualized data with bar graphs and
        assessed classifier performance via a confusion matrix, gaining insights
        into sentiments, recommendations, and variable impact.
        <br />
        <br />
        Achievements: <br />
        Successfully applied Multinomial Naive Bayes for a comprehensive
        analysis of customer feedback, enhancing understanding of sentiments and
        recommendations. Utilized impactful bar graphs for concise data
        visualization. The evaluation with a confusion matrix provided nuanced
        insights into customer perspectives on the women's clothing e-commerce
        platform.
        <a href={Report} target="_blank">
          Report
        </a>
      </div>

      <div className="card-front">
        "Sentiment Analysis of Reviews using Machine Learning"
        <br /> <br /> B.E MinorProject <br /> [Jan19-May19]
      </div>
    </div>
  );
};

export default Card;
