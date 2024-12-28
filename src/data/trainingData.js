const trainingData = [
  {
    name: "Shravya-Kudlu",
    status: "single",
    kids: "None",
    birthdate: "17th october 1998",
    pronouns: "She/Her",

    subcategories: [
      {
        name: "About",
        pronouns: "she/her",
        details: [
          "I'm Shravya Kudlu, a passionate and driven individual currently pursuing a Master of Science in Computer Science at New Jersey Institue Technology, set to graduate in May 2025.",
          "I spent two transformative years at Accenture, collaborating with QBE. It was here that I was recognized for my contributions and promoted, thanks to my innovative approach to problem-solving and teamwork.",
          "I'm a curious, patient, and collaborative professional. If you're looking for someone who combines expertise with an educated wish for success and a commitment to maximum effort",
          "My journey is fueled by an insatiable curiosity for the latest technologies. If there's a new tech trend or tool, you can bet I'm eager to dive in and experiment with it.",
          "I'm a practical and visual learner, always seeking out opportunities to implement and test new concepts in real-world scenarios.",
          "I'm originally from India, bengauru",
        ],
      },
      {
        name: "What makes me interesting/ Hobbies",
        details: [
          "I’m curious to the core, which I believe is powerful driver for embracing change",
          "Outside of tech, I’m a chess enthusiast. The strategic depth of chess mirrors the problem-solving aspect of coding, and I enjoy the mental challenge it brings.",
          "Fun Fact: I’ve competed in national-level tournaments representing my state in both handball and chess. I also served as a sports captain in school and college.",
          "Favorite Movie: *The Matrix*. It shows how a world could have been if everything was programmed",
          "Favorite Artist: *Eminem*. His music inspires me with its themes of resilience and overcoming challenges, qualities that drive my own endeavors.",
          "Favorate Book: Sapians",
          "Hobbies: Like to watch mrwhosetheboss channel for all content related to latest tech and trends and I also like to read about the cosmos and universe i follow Neil deGrasse Tyson",
        ],
      },
      {
        name: "Projects",
        details: [
          {
            project: "GiTiX Ticketing Platform",
            type: "personal",
            team: "individual",
            overview:
              "An online marketplace where users can buy and sell tickets for events like concerts, with a unique feature that requires users to complete the purchase within one minute of reserving a ticket. If they fail to do so, the ticket is released and becomes available to others.",
            solution:
              "I built a microservices-based architecture to handle ticket reservations, order management, and payments. Redis was used to manage the time-limited reservation process, ensuring tickets were locked upon reservation and released if not purchased within the time limit. The platform supports real-time price adjustments by sellers and integrates with Stripe for secure payment processing. Docker and Kubernetes were employed to ensure the system's scalability and reliability across different environments.",
          },
          {
            project: "Blog-Tweet-Post",
            type: "personal",
            team: "individual",
            overview:
              "A blogging platform that allows users to post, tweet, and share content, with integrated moderation tools.",
            solution:
              "I built a modular Node.js app with a React interface for a seamless user experience. Docker and Kubernetes were used for scalable deployment, and moderation tools were integrated to manage content effectively.",
          },
          {
            project: "MealGenie",
            type: "personal",
            team: "individual",
            overview:
              "A Recipe provider tool where user can upload their ingredients order and the app automatically sorts them into nutrition group and provides them recipes",
            solution:
              "I build using Gemeni API for generating recipes as well as sort the ingredient order to its nutritional group. Other then this I have used nodejs and react for development",
          },
          {
            project: "Schrödinger's INC.",
            type: "Hackathon",
            team: "team of 4",
            overview:
              "A practical application developed during the Schrödinger Hackathon, designed to showcase chemical elements and their perturbations, serving as a valuable tool for chemists.",
            solution:
              "Using Django and Python, I developed an interactive app with RDKit integration that allowed users to visualize and analyze the behavior of chemical elements under various conditions. The app featured a demo page, making it accessible and useful for chemists. The project was recognized for its practical utility and industry relevance.",
          },
          {
            project: "DUO app.",
            type: "Academic",
            team: "team of 4",
            overview:
              "A two-step verification system similar to DUO, featuring an authenticator and verifier with strong random number generation. The verifier disconnects after the initial key exchange, boosting security and improving communication efficiency.",
            solution:
              "Using Java and Tomcat servers, two distinct servers were defined: an authenticator and a verifier. The project provides ultimate security and involves learning various internet protocols along the way.",
          },
          {
            project: "Amazon S3 bucket implementation",
            type: "Academic",
            team: "team of 4",
            overview:
              "A S3 bucket where users can store or retrieve information from the server or other servers.",
            solution:
              "Implemented Amazon AWS S3 replication with strict 5-second request fulfillment for both local and remote access. Maintained memory efficiency within a 2MB heap and ensured data security by avoiding local storage of remotely fetched files.",
          },
        ],
      },
      {
        name: "skills",
        details: [
          "Programming | Java, Python, Typescript(JavaScript), SQL, Git, HTML, CSS, ESQL, Bash Scripting, YAML, JSON, XML, LaTeX",
          "Frameworks | Django, NodeJS, NPM, ReactJS, NextJS, Vite, Bootstrap, Material UI, Jest, Express, Axios, CORS",
          "Software & Tools | Visual Studio, Linux, GitHub, Postman, MySQL, DBeaver, GitHub, IBM Integration Bus, Jira/Confluence, Web-sphereMQ, Jmeter, Docker, kubernetes, skaffold, DynaTrace, SOAPUI, OracleDB, MongoDB",
          "OS: Ubuntu, Windows",
        ],
      },
      {
        name: "Experience",
        details: [
          "Accenture: During my tenure, I completed two major and impactful projects for my client QBE insurance company",
          "1. **Home & Landlord Insurance Integration:** Integrated a home and landlord insurance product into QBE's portfolio. This project involved sharpening my communication skills through daily standup calls and client presentations. I successfully completed the project in 4 development cycles and managed a production failure gracefully.",
          "2. **Migration Project:** Assisted in migrating 16 services within an ESB-based SOA architecture. This involved debugging code, handling queues and route handlers, and ensuring correct configuration across various environments.",
          "NJIT: As a current student, I'm engaged in advanced coursework, preparing for a future in cutting-edge technology.",
        ],
      },
    ],
  },
  {
    name: "Contacts",
    subcategories: [
      {
        name: "Address",
        details: ["Harrison, New Jersey"],
      },
      {
        name: "Email",
        details: ["s373@njit.edu"],
      },
      {
        name: "Phone",
        details: ["+1(862)-800-1476"],
      },
      {
        name: "LinkedIn",
        details: ["https://www.linkedin.com/in/shravya-kudlu/"],
      },
      {
        name: "GitHub",
        details: ["https://github.com/ShravyaKudlu"],
      },
      {
        name: "Personal Website",
        details: ["https://shravyakudlu.github.io/ShravyaKudlu/#/"],
      },
    ],
  },
];
export { trainingData };