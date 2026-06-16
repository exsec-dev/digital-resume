import { useEffect, useState, type ReactNode } from "react";
import { MainContext, SCHEME_STORAGE_KEY, type Scheme } from "./ThemeContext";

const getInitialScheme = (): Scheme => {
  try {
    return localStorage.getItem(SCHEME_STORAGE_KEY) === "dark"
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [scheme, setScheme] = useState<Scheme>(getInitialScheme);

  useEffect(() => {
    if (scheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(SCHEME_STORAGE_KEY, scheme);
    } catch {
      // UI should still switch even if storage is blocked
    }
  }, [scheme]);

  return (
    <MainContext.Provider value={{ scheme, setScheme }}>
      {children}
    </MainContext.Provider>
  );
};
