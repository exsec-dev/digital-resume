import { useContext } from "react";
import { ThemeContext } from "providers/ThemeContext";

export const useScheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useScheme must be used within a ThemeProvider");
  }
  return context;
};
