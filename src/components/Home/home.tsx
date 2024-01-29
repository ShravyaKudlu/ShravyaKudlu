import "./home.css";

//import ShravyaKudlu from "../../assets/ShravyaKudlu.jpeg";
import Shravya from "../../assets/Shravya.png";
import ShravyaKudlu from "./ShravyaKudlu-unscreen.gif";

function App() {
  return (
    <div className="TheContainer">
      <div className="container">
        <div className="avatar">
          <img src={Shravya} alt="Shravya Kudlu" />
        </div>
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
        <div className="GifContainer">
        <img
            className="gif"
            src={ShravyaKudlu}
            alt="image/gif"
            style={{ width: "200px", height: "350px" }}
          />

          <h5>
          "I'm a New Jersey Institute of Technology student with a strong focus on DevOps, cloud, and microservices. My debugging skills have been honed at Accenture, and I'm not just a hackathon enthusiast but also a passionate full-stack developer. Let's connect and collaborate to turn our coding dreams into reality!"
          </h5>
        </div>
          
        </div>
      </div>
  );
}

export default App;
