import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from "./Project";
import Contact from "./Contact";
import About from "./About"
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Project />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
  
  );
}

export default App;
