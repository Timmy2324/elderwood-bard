import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType } from "@/app/providers/ThemeProvider/lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || 'light';

const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;