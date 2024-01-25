import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Skills from "./components/Skills/skills"; // Import Skills component
import Projects from "./components/Projects/projects"; // Import Projects component
import Contact from "./components/Contact/contact";
import imagePath from "./assets/Shravya.ico";
import "./App.css";

function App() {
  const items = ["HOME", "SKILLS", "PROJECTS"];

  return (
    <Router>
      <div className="app-container">
        <NavBar brandName="ShravyaKudlu" imageSrcPath={imagePath} navItems={items} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Contact
          linkedinUrl={"https://www.linkedin.com/in/shravya-kudlu/"}
          resumeUrl={"./assets/ShravyaKudluResume.pdf"}
          email={"shravyakudlu@gmail.com"}
          phone={"8628001476"}
          githubUrl={"https://github.com/ShravyaKudlu"}
        />
      </div>
    </Router>
  );
}

export default App;
