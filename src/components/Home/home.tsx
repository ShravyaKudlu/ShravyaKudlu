import "./home.css";

//import ShravyaKudlu from "../../assets/ShravyaKudlu.jpeg";
import Shravya from "../../assets/Shravya.png";

function App() {
  return (
    <div className="TheContainer">
      <div className="container">
        <div className="avatar">
          <img src={Shravya} alt="Shravya Kudlu" />
        </div>
        <h1 className="name">About Me</h1>
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">
                [ Dynamic DEVELOPER ]
              </li>
              <li className="content__container__list__item">
                [ TECH Trailblazer ]
              </li>
              <li className="content__container__list__item">
                [ Creative CODER ]
              </li>
              <li className="content__container__list__item">
                [ NETWORK Navigator ]
              </li>
            </ul>
          </div>
        </div>
     
      <h5>Passionate NJIT student on a coding odyssey. Studying the art of development with a focus on DevOps and cloud magic. Armed with experience in SOA architecture and ESB, I've fine-tuned my debugging superpowers with Accenture. In the realm of microservices, I'm not just a learner but a creator—constantly crafting projects and prototypes in my coding playground. Balancing academic feats with a knack for on-the-spot creative solutions. Catch me at hackathons, turning lines of code into masterpieces! Currently mastering the realms of Java Spring Cloud, Docker, Kubernetes, and conquering full-stack development.Eager to collaborate on innovative projects, let's connect and bring our coding dreams to life together! </h5>

              </div>

    </div>
    
  );
}

export default App;
