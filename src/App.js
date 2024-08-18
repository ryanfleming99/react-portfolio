import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import WhatIDo from "./pages/WhatIDo";
import Projects from "./pages/Projects";
import Artwork from "./pages/Artwork";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/what-i-do" element={<WhatIDo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artwork" element={<Artwork />} />
      </Routes>
    </Router>
  );
}

export default App;
