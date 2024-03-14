//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import About from './components/About/about';
import NavBar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Skills from "./components/Skills/skills"; // Import Skills component
import Projects from "./components/Projects/projects"; // Import Projects component
import Contact from "./components/Contact/contact";
import imagePath from "./assets/Shravya.ico";
import About from "./components/About/about";
import "./App.css";

function App() {
  const items = ["ABOUT", "SKILLS", "PROJECTS"];

  return (
    <Router>
      <div className="app-container">
        <NavBar brandName="ShravyaKudlu" imageSrcPath={imagePath} navItems={items} />

        <Routes>
          <Route path="/ShravyaKudlu/about" element={<Home />} />
          <Route path="/ShravyaKudlu/" element={<About />} />
          <Route path="/ShravyaKudlu/skills" element={<Skills />} />
          <Route path="/ShravyaKudlu/projects" element={<Projects />} />
        </Routes>

        <Contact
          linkedinUrl={"https://www.linkedin.com/in/shravya-kudlu/"}
          resumeUrl={"https://drive.google.com/file/d/15e5L6_N0tgL6RLezcf_WQ4-mLEOmXzs8/view?usp=drive_link"}
          email={"shravyakudlu@gmail.com"}
          phone={"8628001476"}
          githubUrl={"https://github.com/ShravyaKudlu"}
        />
      </div>
    </Router>
  );
}

export default App;
