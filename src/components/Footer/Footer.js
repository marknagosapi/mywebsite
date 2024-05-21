import React, { useState } from "react";
import styles from "./Footer.module.css";

function getYear() {
  const today = new Date();
  return today.getFullYear();
}
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href="https://youtube.com/@nagomark" className={styles.icon}>
          YouTube
        </a>
        <a href="https://instagram.com/marknago" className={styles.icon}>
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/n%C3%A1g%C3%B3-m%C3%A1rk/" className={styles.icon}>
          LinkedIn
        </a>
      </div>
      <div className={styles.info}>
        <p>&copy; {getYear()} Nago Mark</p>
      </div>
    </footer>
  );
}

export default Footer;
