import { classNames } from "@/shared/lib/classNames";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}


export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={changeLang} className={classNames(cls.langSwitcher, {}, [className])}>
            {t('lang')}
        </Button>
    )
}