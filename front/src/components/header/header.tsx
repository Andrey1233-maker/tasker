import { useCallback, useMemo } from "react";

import { Button } from "../../ui";
import { useUser } from "../../stores";

import styles from "./header.module.scss";

export function Header() {
  const { user, setUser, setToken } = useUser((state) => state);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, [setToken, setUser]);

  const userContent = useMemo(() => {
    if (user) {
      return (
        <div className={styles["header-content"]}>
          <div className={styles["header-user"]}>
            <p className={styles["header-user-name"]}>{user.name}</p>
            <p className={styles["header-user-email"]}>{user.email}</p>
          </div>
          <Button onClick={logout}>Logout</Button>
        </div>
      );
    }

    return <></>;
  }, [user]);

  return (
    <div className={styles["header"]}>
      <p className={styles["header-title"]}>Sosala.Tasks</p>
      {userContent}
    </div>
  );
}
