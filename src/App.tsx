import NavBar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import imagePath from "./assets/Shravya.ico";
import "./App.css"; // Import your custom CSS file if needed

function App() {
  const items = ["HOME", "SKILLS", "PROJECTS"];
  return (
    <div className="app-container">
      <NavBar brandName="ShravyaKudlu" imageSrcPath={imagePath} navItems={items} />
      <Home />
      <Contact
        linkedinUrl={""}
        resumeUrl={"./assets/ShravyaKudluResume.pdf"}
        email={"shravyakudlu@gmail.com"}
        phone={"8628001476"}
        githubUrl={"https://github.com/ShravyaKudlu"}
      />
    </div>
  );
}

export default App;
