// src/components/Chatbot/StyledChatbot.js
import React, { useContext } from "react";
import { styled } from "@mui/system";
import { ReactAiChatBot } from "react-gemini-ai-chatbot";
import shravyakudlu from "./ShravyaKudlu.svg";
import { ThemeContext } from "../../contexts/ThemeContext";

const ChatbotWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  zIndex: 1300,
}));

const geminiApiKey = "AIzaSyCbtkC20RkzjZ7J9HkJZ37k12fdbF_MJWg";
const trainingData = [
  {
    name: "Shravya-Kudlu Portfolio",
    subcategories: [
      {
        name: "Overview",
        details: [
          "I'm Shravya Kudlu, a passionate and driven individual currently pursuing a Master of Science in Computer Science at NJIT, set to graduate in May 2025.",
          "I spent two transformative years at Accenture, collaborating with QBE. It was here that I was recognized for my contributions and promoted, thanks to my innovative approach to problem-solving and teamwork.",
          "My journey is fueled by an insatiable curiosity for the latest technologies. If there's a new tech trend or tool, you can bet I'm eager to dive in and experiment with it.",
          "I'm a practical and visual learner, always seeking out opportunities to implement and test new concepts in real-world scenarios.",
        ],
      },
      {
        name: "What makes me interesting",
        details: [
          "I’m meticulous to the core, paying attention to the smallest details, which I believe is crucial for creating exceptional software.",
          "To me, coding is an art form. I view each line of code as a brushstroke, crafting systems that are not just functional but also elegant and enduring.",
          "My approach to coding reflects the way I view art. Just as you might get lost in a painting, I often find myself deeply immersed in my code, refining and perfecting it.",
          "Outside of tech, I’m a chess enthusiast. The strategic depth of chess mirrors the problem-solving aspect of coding, and I enjoy the mental challenge it brings.",
          "Fun Fact: I’ve competed in national-level tournaments representing my state in both handball and chess. I also served as a sports captain in school and college.",
          "Favorite Movie: *The Matrix*. It explores the concept of a simulated reality, resonating with my fascination for the boundaries between reality and digital systems.",
          "Favorite Artist: Eminem. His music inspires me with its themes of resilience and overcoming challenges, qualities that drive my own endeavors.",
        ],
      },
      {
        name: "Projects",
        details: [
          {
            project: "Ticketing",
            overview:
              "Imagine a platform where users can buy and sell tickets for concerts. The unique twist is that once a ticket is reserved, the user has exactly one minute to complete the purchase. If they miss the deadline, the ticket becomes available to others. Sellers can also adjust prices, adding an extra layer of dynamism to the system.",
            skills:
              "Node.js, React.js, Next.js, Microservices, Docker, Kubernetes, Redis, MongoDB, Jest, Express",
          },
          {
            project: "Blog_Post",
            overview:
              "A versatile blogging platform designed to offer rich and interactive experiences for both writers and readers.",
            skills: "Node.js, React.js, Docker, Kubernetes",
          },
          {
            project: "Future Project",
            overview:
              "Details coming soon—stay tuned for an innovative project that will push the boundaries of technology.",
            skills: "TBA",
          },
          {
            project: "Upcoming Ventures",
            overview:
              "I’m always exploring new ideas and concepts. My next project could be just around the corner.",
            skills: "TBA",
          },
        ],
      },
      {
        name: "Experience",
        details: [
          "Accenture: During my tenure, I completed two major projects:",
          "1. **Home & Landlord Insurance Integration:** Integrated a home and landlord insurance product into QBE's portfolio. This project involved sharpening my communication skills through daily standup calls and client presentations. I successfully completed the project in 4 development cycles and managed a production failure gracefully.",
          "2. **Migration Project:** Assisted in migrating 16 services within an ESB-based SOA architecture. This involved debugging code, handling queues and route handlers, and ensuring correct configuration across various environments.",
          "NJIT: As a current student, I'm engaged in advanced coursework and research, preparing for a future in cutting-edge technology.",
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
    ],
  },
];

function StyledChatbot() {
  const { theme } = useContext(ThemeContext);
  return (
    <ChatbotWrapper>
      <ReactAiChatBot
        geminiApiKey={geminiApiKey}
        trainingData={trainingData}
        chatbotName="ShravyaBot"
        chatBotImg={shravyakudlu}
        chatTitle="Hi, I'm Shravya's Personal Assistant! How can I help you today?"
        primaryColor={theme.primary}
        secondaryColor={theme.primary30}
        textColor={theme.tertiary}
        backgroundColor={theme.secondary}
        height="400px"
        width="400px"
        trainingPrompt="You are Shravya Kudlu's personal assistant, known for being warm, approachable, and highly knowledgeable about Shravya’s professional and academic journey. You respond politely and with a touch of humour, providing brief, humanized answers related only to Shravya Kudlu. Based on the conversation, you suggest relevant follow-up questions to keep the dialogue engaging and helpful. You enjoy making the conversation feel personal and supportive, as if you’re an old friend of Shravya’s, always ready to help."
      />
    </ChatbotWrapper>
  );
}

export default StyledChatbot;
