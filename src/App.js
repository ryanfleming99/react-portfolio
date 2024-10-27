import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProfessionalCareer from "./pages/ProfessionalCareer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "../src/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/professional-career" element={<ProfessionalCareer />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
