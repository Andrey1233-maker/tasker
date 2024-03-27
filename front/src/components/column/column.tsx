import { Container, Draggable } from "../../ui";
import { Task } from "../task/task";
import styles from './column.module.scss';

export function Column({ column }: IColumnProps) {
    return (
        <Container>
            <div className={styles['column']}>
                <p className={styles['column-title']}>{column.name}</p>
                {column.tasks.map((task: any) => 
                    <Draggable><Task task={task}/></Draggable>
                )}
            </div>
        </Container>
    )
}

export interface IColumnProps {
    column: any;
}