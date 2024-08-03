// src/components/Chatbot/StyledChatbot.js
import React from "react";
import { styled } from "@mui/system";
import { ReactAiChatBot } from "react-gemini-ai-chatbot";

const ChatbotWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10), // Positioned above the FAB
  right: theme.spacing(2), // Align with the FAB
  zIndex: 1300, // Ensure it is above other content
}));

const geminiApiKey = "Your_Gemini_API_Key";
const trainingData = [
  // Your training data here
];

const StyledChatbot = () => (
  <ChatbotWrapper>
    <ReactAiChatBot
      geminiApiKey={geminiApiKey}
      trainingData={trainingData}
      chatbotName="ShravyaBot"
      // chatBotImg={img} // Uncomment and use if needed
    />
  </ChatbotWrapper>
);

export default StyledChatbot;
