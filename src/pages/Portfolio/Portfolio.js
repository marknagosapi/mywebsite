import React, { useEffect } from "react";
import Project from "../../components/Project/Project";
import styles from "./Portfolio.module.css";
import projects from "./projects.json";
import robot from "../../assets/images/robot.jpeg";
import empty_bins from "../../assets/images/empty_bins.jpeg";
import zoo from "../../assets/images/zoo.webp";
import one_tv from "../../assets/images/one-tv.webp";
import edumillionaire from "../../assets/images/edumillionaire.png";
import stackwars from "../../assets/images/stackwars.png";
import sapivr from "../../assets/images/sapivr.png";

// Map image names to import variables
const images = {
  "robot.jpeg": robot,
  "empty_bins.jpeg": empty_bins,
  "zoo.webp": zoo,
  "one-tv.webp": one_tv,
  "edumillionaire.png": edumillionaire,
  "stackwars.png": stackwars,
  "sapivr.png": sapivr,
};

function Portfolio() {

  useEffect(() => {
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));
    
  }, []);


  return (
    <main className="main">
      <h1>Projects</h1>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={images[project.imageSrc]}
            description={project.description}
            link={project.link}
            date = {new Date(project.date).getFullYear()}
          />
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
