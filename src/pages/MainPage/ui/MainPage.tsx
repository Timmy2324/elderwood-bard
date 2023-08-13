import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.mainPage)}>
            {t('Main page')}
        </div>
    );
}

export default MainPage;
