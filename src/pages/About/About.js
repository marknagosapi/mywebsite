import React from "react";
import styles from "./About.module.css";
import snailImage from "../../assets/images/snail.png";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.details}>
        I was born in Romania in a town called Targu Mures which is a little but
        great place to live in. I was always fascinated by the idea of creating
        something new. So in every aspect of my life I try to bring something
        new in and to think about out of the box. That kind of thinking can
        change the way we live.{" "}
      </p>
      <div  className={styles.snail} >
        <img src={snailImage} alt="Snail"/>
      </div>
    </div>
  );
}

export default About;
