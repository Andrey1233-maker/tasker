import { useEffect, useState } from "react";
import { Button, Modal, Input } from "../../ui";
import styles from "./auth-page.module.scss";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../../api";

export function AuthPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async () => {
      const response = await postLogin(email, password);
      return response.token ?? "";
    },
  });

  useEffect(() => {
    console.log(data)
    if (data) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [data]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <div className={styles["auth-block"]}>
        <p className={styles["auth-title"]}>Sosala.Tasks</p>
        <div className={styles["auth-creds"]}>
          <Input placeholder="email" value={email} onChange={setEmail} />
          <Input
            placeholder="passwaord"
            value={password}
            onChange={setPassword}
          />
        </div>
        <Button onClick={mutate}>Login</Button>
      </div>
    </Modal>
  );
}
