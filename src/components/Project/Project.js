import React from "react";
import "./Project.css";
import website_ok from "../../assets/images/website_ok.png";

const Project = ({ title, imageSrc, description, link, date }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navigateToLink = () => {
    if (link) {
      window.open(link, "_blank");
    }
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
              <p className="project-date">{date ? date : ""}</p>
      {link && (
        <img src={website_ok} alt="Website" className="website-ok-icon" />
      )}
    </div>
  );
};

export default Project;
