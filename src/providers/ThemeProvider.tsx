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

const getInitialTheme = () => {
  const storedScheme = getStoredScheme();
  return {
    scheme: storedScheme ?? getSystemScheme(),
    followsSystem: storedScheme === null,
  };
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [{ scheme, followsSystem }, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (scheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", scheme === "dark" ? "#121212" : "#f8f6f0");
  }, [scheme]);

  useEffect(() => {
    if (!followsSystem) {
      return;
    }
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setTheme({
        scheme: event.matches ? "dark" : "light",
        followsSystem: true,
      });
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [followsSystem]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-theme-ready", "");
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const setScheme = (value: Scheme) => {
    setTheme({ scheme: value, followsSystem: false });
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
