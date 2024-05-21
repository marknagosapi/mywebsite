import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Feel Free To Reach Out</h1>
      <a href='mailto:ragmakon@gmail.com' className={styles.details}>Email: ragmakon@gmail.com</a>
    </div>
  );
}

export default Contact;