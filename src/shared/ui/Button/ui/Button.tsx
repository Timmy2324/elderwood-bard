import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

type ThemeButton = 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme = 'clear', ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
