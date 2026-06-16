import { useContext } from "react";
import { MainContext } from "providers/ThemeContext";

export const useScheme = () => useContext(MainContext);
