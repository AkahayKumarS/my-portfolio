// src/components/Button.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};
