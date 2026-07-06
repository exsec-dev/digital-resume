import { createContext, useContext } from "react";

export const SCHEME_STORAGE_KEY = "scheme";

export type Scheme = "light" | "dark";

interface ThemeContextValue {
  scheme: Scheme;
  setScheme: (value: Scheme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useScheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useScheme must be used within a ThemeProvider");
  }
  return context;
};
