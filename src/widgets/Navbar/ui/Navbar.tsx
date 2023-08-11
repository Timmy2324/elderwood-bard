import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/AppLink/';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.link}>{t('Main')}</AppLink>
                <AppLink to="/about" className={cls.link}>{t('About')}</AppLink>
            </div>
        </div>
    );
}
