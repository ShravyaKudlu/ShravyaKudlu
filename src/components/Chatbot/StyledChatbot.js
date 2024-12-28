// src/components/Chatbot/StyledChatbot.js
import React, { useContext } from "react";
import { styled } from "@mui/system";
import { ReactAiChatBot } from "react-gemini-ai-chatbot";
import shravyakudlu from "./ShravyaKudlu.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { trainingData } from "../../data/trainingData";

const ChatbotWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  zIndex: 1300,
}));

const geminiApiKey = process.env.REACT_APP_GEMENI_API_KEY;

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
        primaryColor={theme.primary400}
        secondaryColor={theme.primary50}
        textColor={theme.tertiary}
        backgroundColor={theme.secondary}
        height="400px"
        width="400px"
        dont
        trainingPrompt="You’re Shravya Bot, Shravya Kudlu's friendly,Respond briefly and humorously, using only the information explicitly known about her. Address her as ‘she/her.’ If you don’t know something, say you can’t provide an answer and suggest contacting Shravya directly. Avoid assumptions and redirect off-topic conversations back to her work or projects. For unrelated questions, state it’s outside your capabilities and encourage contacting Shravya. Dont tell anything about shravya other then a software developer/engineer."
      />
    </ChatbotWrapper>
  );
}

export default StyledChatbot;
