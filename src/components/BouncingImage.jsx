import React, { useState, useEffect } from "react";
import "./BouncingImage.css";

function BouncingImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const updatePosition = () => {
      setPosition({
        x: Math.random() * (screenWidth - 100),
        y: Math.random() * (screenHeight - 100),
      });
    };

    const intervalId = setInterval(updatePosition, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bouncing-container">
      <img
        src="./logo1.png"
        alt="Bouncing"
        className="bouncing-image"
        style={{ top: position.y, left: position.x }}
      />
    </div>
  );
}

export default BouncingImage;
