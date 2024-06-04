import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import AsciiArt from "../AsciiArt/index.js";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [joke, setJoke] = useState({
    id: 1,
    type: "general",
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field",
  });

  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Fetch joke
    const getJoke = async () => {
      await fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
          setJoke(data);
          setIsLoading(false);
        });
    };
    setIsLoading(true);
    setTimeout(() => {
      getJoke();
    }, 2000);
  }, []);

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
  }, [isMenuOpen, screenWidth, toggleMenu]);

  const toggleMenuIfMobile = () => {
    if (screenWidth <= 768 && isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {window.innerWidth < 1200 ? (
          <h1 className={styles.title}>
            <a href="/" className={styles.link}>
              Nago Mark
            </a>
          </h1>
        ) : (
          <a href="/" className={styles.link} >
            <AsciiArt />
          </a>
        )}
      </div>
      {/* 
      <div className={styles.jokeContainer}>
        {isLoading ? (
          <p>Joke Incoming...</p>
        ) : (
          <div className={styles.joke}>
            <p className={styles.jokeSetup}>{joke.setup}</p>
            <p className={styles.jokePunchline}>{joke.punchline}</p>
          </div>
        )}
      </div> */}

      <nav className={styles.menu}>
        <div
          className={styles.burgermenu}
          onClick={() => {
            toggleMenu();
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {isMenuOpen && (
          <ul>
            <li>
              <a href="/" onClick={toggleMenuIfMobile}>
                Home
              </a>
            </li>
            <li>
              <a href="/#/about" onClick={toggleMenuIfMobile}>
                About
              </a>
            </li>
            <li>
              <a href="/#/portfolio" onClick={toggleMenuIfMobile}>
                Projects
              </a>
            </li>
            <li>
              <a href="/#/contact" onClick={toggleMenuIfMobile}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
