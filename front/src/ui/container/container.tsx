import styles from './container.module.scss';

export function Container({ children }: IContainerProps) {

    return (
        <div className={styles['container']}>
            {children}
        </div>
    )
}

export interface IContainerProps {
    children: JSX.Element | string
}