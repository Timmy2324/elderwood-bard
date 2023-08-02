import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemeType,
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return { theme, toggleTheme };
}