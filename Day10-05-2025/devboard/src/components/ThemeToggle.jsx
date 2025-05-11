import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context || !context.theme || !context.toggleTheme) {
    return null;
  }

  const { theme, toggleTheme } = context;
  return (
    <button onClick={toggleTheme} style={{ margin: "1rem" }}>
      Toggle Theme ({theme})
    </button>
  );
};

export default ThemeToggle;
