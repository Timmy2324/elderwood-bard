import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, changeTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <select
            className={classNames('', {}, [className])}
            defaultValue={theme}
            onChange={(e) => changeTheme(e.target.value as Theme)}
        >
            <option value={Theme.LIGHT}>
                {t('Theme light')}
            </option>
            <option value={Theme.DARK}>
                {t('Theme dark')}
            </option>
        </select>
    );
};
