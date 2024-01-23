import React from "react";
import "./Reviews.css";
import { Interface } from "readline";
import background from "./../../assets/images/M&Y_reviews-02.png";
import Reviewer from "";

interface Props {
  review: any;
}
const ReviewItem = ({ review }: Props) => {
  return (
    <div
      className="quote-container bg-dark"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="star-rating">★★★★★</div>

      <p className="quote">{review.text}</p>

      <div className="reviewer-photo">
        <img
          src={review.profile_photo_url}
          width="140"
          height="140"
          alt="Photo of reviewer"
          onError={(ev: any) => (ev.target.src = Reviewer)}
        />
      </div>

      <div className="reviewer-details">
        <span className="name lightGrey">{review.author_name}</span>
        <span className="title lightGrey">
          {review.relative_time_description}
        </span>
      </div>
    </div>
  );
};

export default ReviewItem;
