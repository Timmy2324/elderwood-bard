import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Spinner } from '@/shared/ui/Spinner';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Spinner />
    </div>
);
