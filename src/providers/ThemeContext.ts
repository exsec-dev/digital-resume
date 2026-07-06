import { createContext } from "react";

export const SCHEME_STORAGE_KEY = "scheme";

export type Scheme = "light" | "dark";

interface ThemeContextValue {
  scheme: Scheme;
  setScheme: (value: Scheme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
