import React from "react";
import "./SmallCards.css";

const SmallCards = ({ title, value, unit }) => {
  return (
    <div className="smallCardContainer">
      <h3>{title}</h3>
      <p>
        {value}
        <span>{unit}</span>
      </p>
    </div>
  );
};

export default SmallCards;
