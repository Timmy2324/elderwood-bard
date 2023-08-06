import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "./ThemeContext";

interface UseThemeResult {
    changeTheme: (theme: Theme) => void;
    theme: Theme,
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = (theme: Theme) => {
        let newTheme = Theme.LIGHT;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return { theme, changeTheme };
}