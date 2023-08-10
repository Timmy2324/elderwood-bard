import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className, children, ...otherProps }) => (
    <Link className={classNames(cls.appLink, {}, [className])} {...otherProps}>
        {children}
    </Link>
);
