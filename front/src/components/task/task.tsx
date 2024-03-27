import styles from './task.module.scss';

export function Task({ task }: any) {

    return (
        <div className={styles['task']}>
            <p className={styles['task-title']}>{task.name}</p>
        </div>
    )
}