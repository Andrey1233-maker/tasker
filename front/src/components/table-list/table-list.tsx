import { TTable } from "../../types"
import { CreateTableItem } from "./create-table";
import { TableListItem } from './table-list-item'
import styles from './table-list.module.scss';

export function TableList({ tables }: ITableListProps) {

    return (
        <div className={styles['table-list']}>
            <p className={styles['table-list-title']}>Your tables</p>
            <div className={styles['table-list-list']}>
                <CreateTableItem />
                {tables.map((table) => <TableListItem table={table} key={table.uuid} />)}
            </div>
        </div>
    )
}

export interface ITableListProps {
    tables: TTable[];
}