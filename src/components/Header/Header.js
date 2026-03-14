import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import AsciiArt from "../AsciiArt/index.js";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 768);
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
    const getJoke = async () => {
      await fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
          if(data.setup.length > 80 || data.punchline.length > 50){{
            getJoke();
            return;
          }}
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
            <Link to="/home" className={styles.link}>
              Nago Mark
            </Link>
          </h1>
        ) : (
          <Link to="/home" className={styles.link}>
            <AsciiArt />
          </Link>
        )}
      </div>

      <div className={styles.jokeContainer}>
        {isLoading ? (
          <p>Joke Incoming...</p>
        ) : (
          <div className={styles.joke}>
            <p className={styles.jokeSetup}>{joke.setup}</p>
            <p className={styles.jokePunchline}>{joke.punchline}</p>
          </div>
        )}
      </div>

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
              <Link to="/home" onClick={toggleMenuIfMobile}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenuIfMobile}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggleMenuIfMobile}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenuIfMobile}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
