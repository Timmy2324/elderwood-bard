import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import { FC } from "react";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const { toggleTheme } = useTheme();
    
    return (
        <button className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>Chenge theme</button>
    );
}