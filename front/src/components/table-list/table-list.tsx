import { TTable } from "../../types"
import styles from './table-list.module.scss';

export function TableList({ tables }: ITableListProps) {

    return (
        <div className={styles['table-list']}>
            <p className={styles['table-list-title']}>Your tables</p>
            <div className={styles['table-list-list']}>
                {tables.map((table) => table.uuid)}
            </div>
        </div>
    )
}

export interface ITableListProps {
    tables: TTable[];
}