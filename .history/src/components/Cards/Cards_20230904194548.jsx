import React, { useState } from "react";
import "./Card.css";
import avatar from "./../../assets/images/avatar.jpg";
const Card = ({ img, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card">
      <img
        src={avatar}
        alt="image"
        className="card-img-top"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      {isHovered && <div className="card-img-overlay"></div>}
    </div>
  );
};


};

export default Cards;