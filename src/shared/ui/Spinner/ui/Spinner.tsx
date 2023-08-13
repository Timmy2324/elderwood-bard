import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={classNames(cls.spinner, {}, [className])}>
        <div />
        <div />
    </div>
);
