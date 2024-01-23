import React from "react";
import "./Card.css";



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
        {cards.map((ard) => (
          <ard key={card.title} img={card.img} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};
export default Card;