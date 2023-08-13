import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation('notFound');

    return (
        <div className={classNames(cls.notFound)}>
            {t('Page not found')}
        </div>
    );
};
