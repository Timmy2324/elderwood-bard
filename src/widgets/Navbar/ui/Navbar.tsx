import { classNames } from '@/shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/AppLink/';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.link}>Main</AppLink>
                <AppLink to={'/about'} className={cls.link}>About</AppLink>
            </div>
        </div>
    )
}