import React from "react";
import "./style.css";

const Card = ({ image, title, link, description }) => {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
