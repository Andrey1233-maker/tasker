import { TTable } from "../../types"
import styles from './table-list.module.scss';

export function TableListItem({ table }: ITableListItemProps) {

    return (
        <div className={styles['table-list-item']}>
            <p className={styles['table-list-item-title']}>{table.name}</p>
            <div>
                <p className={styles['table-list-item-date']}>Last update: {new Date(table.updatedAt).toLocaleString().split(', ')[0]}</p>
                <p className={styles['table-list-item-date']}>Table created: {new Date(table.createdAt).toLocaleString().split(', ')[0]}</p>
            </div>
        </div>
    )
}

export interface ITableListItemProps {
    table: TTable;
}