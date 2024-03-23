import { useEffect, useState } from "react";
import { Button, Modal, Input } from "../../ui";
import styles from "./auth-page.module.scss";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../../api";
import { useUser } from "../../stores";

export function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setToken } = useUser((state) => state);

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async () => {
      const response = await postLogin(email, password);
      setToken(response?.token ?? null);
    },
  });

  return (
    <Modal isOpen={!user} onClose={() => {}}>
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
