import React from "react";
import Project from "../../components/Project/Project";
import styles from "./Portfolio.module.css";
import projects from "./projects.json";
import robot from "../../assets/images/robot.jpeg";
import empty_bins from "../../assets/images/empty_bins.jpeg";
import zoo from "../../assets/images/zoo.webp";

// Map image names to import variables
const images = {
  "robot.jpeg": robot,
  "empty_bins.jpeg": empty_bins,
  "zoo.webp": zoo,
};

function Portfolio() {
  return (
    <main className="main">
      <h1>My Projects</h1>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={images[project.imageSrc]}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
