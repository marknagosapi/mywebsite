import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import "./styles/global.css"; // Import global CSS file

function App() {
  var colors = [
    "#1abc9c",
    "#16849f",
    "#05addc",
    "#34495e",
    "#2c3e50",
    "#7f8c8d",
    "#95a5a6",
    "#7f8c8d",
    "#626567",
    "#515a5a",
    "#424949",
    "#2d3436",
    "#1b1c1c",
  ];

  // Function to get a random color from the array
  function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  useEffect(() => {
    // Set the background color of the body
    document.body.style.backgroundColor = getRandomColor();
  }, []);
  // Set the background color of the body

  return (
    <div className="App">
      <Header />
      <Layout>
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
