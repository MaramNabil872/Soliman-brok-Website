import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

const App = () => {
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