import styles from './table-list.module.scss';

export function CreateTableItem() {

    return (
        <div className={styles['table-list-create']}>
            <p className={styles['table-list-create-title']}>Create new table</p>
        </div>
    )
}