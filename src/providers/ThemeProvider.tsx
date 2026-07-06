import { useEffect, useState, type ReactNode } from "react";
import { SCHEME_STORAGE_KEY, ThemeContext, type Scheme } from "./ThemeContext";

const getSystemScheme = (): Scheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const getStoredScheme = (): Scheme | null => {
  try {
    const scheme = localStorage.getItem(SCHEME_STORAGE_KEY);
    return scheme === "light" || scheme === "dark" ? scheme : null;
  } catch {
    return null;
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [scheme, setSchemeState] = useState<Scheme>(
    () => getStoredScheme() ?? getSystemScheme(),
  );
  const [followsSystem, setFollowsSystem] = useState(
    () => getStoredScheme() === null,
  );

  useEffect(() => {
    if (scheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [scheme]);

  useEffect(() => {
    if (!followsSystem) {
      return;
    }
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setSchemeState(event.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [followsSystem]);

  const setScheme = (value: Scheme) => {
    setFollowsSystem(false);
    setSchemeState(value);
    try {
      localStorage.setItem(SCHEME_STORAGE_KEY, value);
    } catch {
      // UI should still switch even if storage is blocked
    }
  };

  return (
    <ThemeContext.Provider value={{ scheme, setScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
