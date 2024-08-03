/* eslint-disable */
import React, { createContext, useState } from "react";
import DarkLightMode from "../components/DarkLightMode/DarkLightMode";
import { pinkThemeLight, pinkThemeDark } from "../theme/theme";
import FloatingActionButton from "../components/Chatbot/FloatingActionButton";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [themeIndex, setThemeIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const themes = [
    {
      name: "Pink Light",
      theme: pinkThemeLight,
    },
    {
      name: "Pink Dark",
      theme: pinkThemeDark,
    },
  ];

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = {
    theme: themes[themeIndex].theme,
    drawerOpen,
    setHandleDrawer,
  };

  return (
    <>
      <DarkLightMode
        onChange={handleChange}
        theme={themes[themeIndex].theme}
      />

      <ThemeContext.Provider value={value}>
        <FloatingActionButton />
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
