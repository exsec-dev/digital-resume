import { createContext } from "react";

export const SCHEME_STORAGE_KEY = "scheme";

export type Scheme = "light" | "dark";

interface MainContextProps {
  scheme: Scheme;
  setScheme: (value: Scheme) => void;
}

export const MainContext = createContext<MainContextProps>({
  scheme: "light",
  setScheme: () => {},
});
