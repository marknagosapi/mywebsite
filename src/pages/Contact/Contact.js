import React from "react";
import styles from "./Contact.module.css";
import flower from "../../assets/images/flowr.png"; // Import image

function Contact() {
  const flowerCount = 30;
  const flowers = [];

  for (let i = 0; i < flowerCount; i++) {
    flowers.push(
      <img key={i} src={flower} alt="Flower" className={styles.flower} />
    );
  }

  return (
    <div className={styles.container}>
      {/* <div className={styles.topDiv}>{flowers}</div> */}
      <h1 className={styles.title}>Feel Free To Reach Out</h1>
      <a href="mailto:nagomark7@gmail.com" className={styles.details}>
        Email: nagomark7@gmail.com
      </a>
      {/* <div className={styles.bottomDiv}>{flowers}</div> */}
    </div>
  );
}

export default Contact;
