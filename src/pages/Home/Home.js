import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowImage(true);
      setTimeout(() => setShowImage(false), 1000); // image will stay on screen for 10 seconds
    }, Math.random() * 12000 + 12000); // interval between 2 to 4 minutes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <div className={`sliding-image ${showImage ? "show" : ""}`}></div>
      <div className="welcome-message">
        <h1>Welcome to My Website!</h1>
        <div className="goof-around">
          <p>Want to know more about me? Explore & Goof Around!</p>
          <p className="face">3</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
