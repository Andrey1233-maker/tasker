import styles from './button.module.scss';

export function Button({ children, onClick }: IButtonProps) {

    return (
        <button onClick={onClick} className={styles['button']}>
            {children}
        </button>
    )
}

export interface IButtonProps {
    children: JSX.Element | string
    onClick: () => void
}