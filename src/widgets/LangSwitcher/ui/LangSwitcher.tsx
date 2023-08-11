import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={changeLang} className={classNames('', {}, [className])}>
            {t('lang')}
        </Button>
    );
}
