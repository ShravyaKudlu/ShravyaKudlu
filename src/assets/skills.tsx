import React, { useEffect } from 'react';
import "./skills.css";

const Skills: React.FC = () => {
  useEffect(() => {
    const animatedBars = document.querySelectorAll('.animated-bar');

    animatedBars.forEach((bar: Element) => {
      const widthPercentage = (bar as HTMLElement).dataset.percent + '%';
      (bar as HTMLElement).style.width = widthPercentage;
      (bar as HTMLElement).style.transition = 'width 0.5s';
    });
  }, []);

  return (
    <div className='skills'>
      <section className="programming">
        <h2>Programming</h2>
        <ul>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Java</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="70"></div>
              <span className="skill-name">Bash Scripting</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">HTML</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">CSS</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">JavaScript</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">TypeScript</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="70"></div>
              <span className="skill-name">jQuery</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">Python</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">SQL</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">eSQL</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">JSON</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">XML</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="frameworks">
        <h2>Frameworks</h2>
        <ul>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="85"></div>
              <span className="skill-name">React.js</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">Node.js</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Express.js</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">Vite.js</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Django</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="85"></div>
              <span className="skill-name">Spring Boot</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">Spring Cloud</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="70"></div>
              <span className="skill-name">ESB</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="courses">
        <h2>Courses</h2>
        <ul>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="90"></div>
              <span className="skill-name">Data Structures & Algorithms</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Cloud Computing</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">Internet & Higher Level Protocols</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Operating System</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="ci-cd">
        <h2>CI/CD & Tools</h2>
        <ul>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="85"></div>
              <span className="skill-name">Docker</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="75"></div>
              <span className="skill-name">Kubernetes</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Git</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="databases">
        <h2>Databases</h2>
        <ul>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="90"></div>
              <span className="skill-name">MySQL</span>
            </div>
          </li>
          <li>
            <div className="animated-bar-container">
              <div className="animated-bar" data-percent="80"></div>
              <span className="skill-name">Oracle</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
