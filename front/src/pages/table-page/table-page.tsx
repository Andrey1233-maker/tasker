import { Column } from "../../components";

import styles from './table-page.module.scss';

export function TablePage() {

    const column = {
        name: 'ToDo',
        tasks: [{
            name: 'task123'
        }],
    }

    return (
        <div>
            <p></p>
            <div className={styles['table-page-columns']}>
                <Column column={column}/>
                <Column column={column}/>
                <Column column={column}/>
                <Column column={column}/>
            </div>
        </div>
    )
}