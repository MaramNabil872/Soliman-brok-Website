import React, { useState, useEffect } from "react";
import avatar from "./../../assets/images/avatar.jpg";

const ServiceItem = ({ title, description, imageSource }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set the initial state of isHovered to false
    setIsHovered(false);
  }, []);

  const handleMouseEnter = () => {
    // Set isHovered to true when the mouse enters the component
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Set isHovered to false when the mouse leaves the component
    setIsHovered(false);
  };

  return (
    <div
      className={`col-12 col-lg-2 col-md-4 card m-4 bg-white service rounded-lg ${
        isHovered ? "hover" : ""
      }`}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-50" src={avatar} />
      <h5 id="service-title" className="text-start pt-2">
        {title}
      </h5>
      <small className="text-muted">{description}</small>
    </div>
  );
};

export default ServiceItem;