import { useState } from "react";
import { CreateTableForm } from "..";
import { TTable } from "../../types";
import { CreateTableItem } from "./create-table";
import { TableListItem } from "./table-list-item";
import styles from "./table-list.module.scss";

export function TableList({ tables }: ITableListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["table-list"]}>
      <p className={styles["table-list-title"]}>Your tables</p>
      <div className={styles["table-list-list"]}>
        <CreateTableItem onClick={() => setIsOpen(true)} />
        {tables.map((table) => (
          <TableListItem table={table} key={table.uuid} />
        ))}
      </div>
      <CreateTableForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export interface ITableListProps {
  tables: TTable[];
}
