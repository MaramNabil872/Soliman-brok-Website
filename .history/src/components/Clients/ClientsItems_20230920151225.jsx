import React, { useState, useEffect } from "react";
import "./Clients.css";
const ClientsItems = ({ title, imageSource }) => {
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
   
      <div className="m-4 col-2  m-4 bg-white  " style={{borderRadius:"15%", padding:"2%"}} >
      <img className="w-100  text-center "  src={imageSource} />
      </div>
   
  );
};

export default ClientsItems;