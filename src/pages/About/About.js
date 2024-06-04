import React from "react";
import styles from "./About.module.css";
import { ReactSVG } from "react-svg";
import snailImage from "../../assets/images/snail.png";

import gradCap from "../../assets/svg/gd.svg";
import codeSquare from "../../assets/svg/cq.svg";
import cerealBowl from "../../assets/svg/cb.svg";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <ul className={styles.details}>
        <li>
          <ReactSVG
            src={gradCap}
            className={styles.icon}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 24px; height: 24px");
            }}
          />
          Computer Science student in Romania.
        </li>
        <li>
          <ReactSVG
            src={codeSquare}
            className={styles.icon}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 24px; height: 24px");
            }}
          />
          Currently a React Native Developer @{" "}
          <a href="https://www.3ss.tv/" className={styles.link}>
            {" "}
            3SS
          </a>
        </li>
        <li>
          <ReactSVG
            src={cerealBowl}
            className={styles.icon}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 24px; height: 24px");
            }}
          />
          Eating my cereal with cold milk. {":)"}
        </li>
      </ul>
      <div className={styles.snail}>
        <img src={snailImage} alt="Snail" />
      </div>
    </div>
  );
}

export default About;
