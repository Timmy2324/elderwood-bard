import { useTranslation } from 'react-i18next';
import cls from './AboutPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.aboutPage)}>
            {t('About page')}
        </div>
    );
}

export default AboutPage;
