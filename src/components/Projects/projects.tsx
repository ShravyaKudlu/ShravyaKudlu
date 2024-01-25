import Project1 from "./project1/flippable-card";
import Project2 from "./project2/flippable-card";
import "./projects.css";

function projects() {
  return (
    <div className="projectnames">
        <h2>Projects</h2>
        <div className="projects">
            <Project1 />
            <Project2 />
        </div>
    </div>
  )
}

export default projects