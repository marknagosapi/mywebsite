import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import "./styles/global.css"; 

function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/home": "Home",
      "/about": "About",
      "/portfolio": "Portfolio",
      "/contact": "Contact",
    };
    document.title = titles[location.pathname] ?? "Mark's Website";
  }, [location]);
  return (
    <div className="App">
      <Header />
      <Layout>
        <Routes basename="/">
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
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
