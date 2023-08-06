import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({className, children, ...otherProps}) => {
    return (
        <Link className={classNames(cls.appLink, {}, [className])} {...otherProps}>
            {children}
        </Link>
    );
}