import React from "react";
import "./Card.css";

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