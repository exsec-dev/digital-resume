import { createContext } from "react";

export type Scheme = "light" | "dark";
interface MainContextProps {
  scheme: Scheme;
  toggleScheme: (value: Scheme) => void;
}

export const MainContext = createContext<MainContextProps>({
  scheme: "light",
  toggleScheme: () => {},
});
