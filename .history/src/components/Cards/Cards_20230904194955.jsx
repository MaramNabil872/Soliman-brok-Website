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

const Cards = () => {
  const cards = [
    {
      img: "https://picsum.photos/200/200",
      title: "Card 1",
      text: "This is the first card.",
    },
    {
      img: "https://picsum.photos/200/200",
      title: "Card 2",
      text: "This is the second card.",
    },
    {
      img: "https://picsum.photos/200/200",
      title: "Card 3",
      text: "This is the third card.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <Card key={card.title} img={card.img} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default Card;