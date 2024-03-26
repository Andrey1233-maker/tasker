import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Button, Input, Modal } from "../../ui";
import { postTables } from "../../api";
import { useUser } from "../../stores";

import styles from "./create-table-form.module.scss";

export function CreateTableForm({ isOpen, onClose }: ICreateTableForm) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { refetch } = useQuery({
    queryKey: ["tables"],
  });

  const token = useUser((state) => state.token);

  const { mutate } = useMutation({
    mutationKey: ["create"],
    mutationFn: async () => {
      if (!token) {
        return null;
      }
      const reponse = await postTables(token, { name: title, description });
      onClose();
      refetch();
      return reponse;
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles["create-form"]}>
        <p className={styles["create-form-title"]}>Create new table</p>
        <Input placeholder="title" value={title} onChange={setTitle} />
        <Input
          placeholder="description"
          value={description}
          onChange={setDescription}
        />
        <Button onClick={mutate}>Create</Button>
      </div>
    </Modal>
  );
}

export interface ICreateTableForm {
  isOpen: boolean;
  onClose: () => void;
}
