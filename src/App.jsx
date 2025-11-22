//Navgar entre paginas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Paginas
import WorkTogether from "./pages/WorkTogether";

//UseEffect for backgraund color change
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

//Componentes
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Certifications from "./components/Certifications.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <>
      <div className="body">
        <Router>
          <ScrollToTop />
          <CustomCursor />
          <Navbar />
          <div className="pb-28">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <AboutMe />
                    <SoftSkills />
                    <Certifications />
                    <Experience />
                  </>
                }
              />
              <Route path="/projects" element={<Projects />} />

              <Route path="/work-together" element={<WorkTogether />} />
            </Routes>
          </div>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
