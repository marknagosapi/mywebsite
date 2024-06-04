import React from "react";
import "./Project.css";

const Project = ({ title, imageSrc, description, link }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navigateToLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="project-card"
      style={backgroundStyle}
      onClick={navigateToLink}
    >
      <div className="project-overlay">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;
