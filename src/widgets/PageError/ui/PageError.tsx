import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const realoadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>
                {t('Unexpected error')}
            </p>
            <button type="button" onClick={realoadPage}>
                {t('Reload Page')}
            </button>
        </div>
    );
};
