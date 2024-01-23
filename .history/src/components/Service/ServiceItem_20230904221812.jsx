import React, { useState, useEffect } from "react";

const ServiceItem = ({ title, imageSource }) => {
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
      className={`col-12 col-lg-2 col-md-4 card m-10 bg-white service rounded-lg text-center ${
        isHovered ? "hover" : ""
      }`}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-50 h-50 text-center" src={imageSource} />
      <h5 id="service-title " className="text-start pt-2 text-center">
        {title}
      </h5>
    </div>
  );
};

export default ServiceItem;