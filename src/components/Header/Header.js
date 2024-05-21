import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Import CSS module

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth > 768 && !isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Nago Mark</h1>
      </div>
      <nav className={styles.menu}>
        <div className={styles.burgermenu} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {isMenuOpen && (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
