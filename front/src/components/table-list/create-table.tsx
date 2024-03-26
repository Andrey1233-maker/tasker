import styles from "./table-list.module.scss";

export function CreateTableItem({ onClick }: ICreateTableItemProps) {
  return (
    <div className={styles["table-list-create"]} onClick={onClick}>
      <p className={styles["table-list-create-title"]}>Create new table</p>
    </div>
  );
}

export interface ICreateTableItemProps {
  onClick: () => void;
}
