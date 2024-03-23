import cn from 'classnames';

import styles from './modal.module.scss';
import { MouseEvent } from 'react';

export function Modal({ isOpen, children, onClose }: IModalProps) {

    const onClickWrapper = (e: MouseEvent) => {
        e.stopPropagation();
        onClose();
    }

    return (
        <div onClick={onClickWrapper} className={cn(styles['modal'], { [styles['modal-open']]: isOpen, [styles['modal-closed']]: !isOpen})}>
            <div className={styles['modal-wrapper']} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}

export interface IModalProps {
    isOpen: boolean
    children: JSX.Element
    onClose: () => void
}