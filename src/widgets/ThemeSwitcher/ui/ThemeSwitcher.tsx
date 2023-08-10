import { FC } from 'react';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, changeTheme } = useTheme();

    return (
        <select
            className={classNames(cls.themeSwitcher, {}, [className])}
            defaultValue={theme}
            onChange={(e) => changeTheme(e.target.value as Theme)}
        >
            <option value={Theme.LIGHT}>
                light
            </option>
            <option value={Theme.DARK}>
                dark
            </option>
        </select>
    );
};
